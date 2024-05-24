import express from 'express';
import bodyParser from 'body-parser';
import pkg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const port = 3000;

dotenv.config();

const { Pool } = pkg;

const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect((err) => {
    if (err) console.log(err);
    console.log("connect to db success");
});

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    allowedHeaders: 'Content-Type,Authorization' // Allowed headers
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const query = `
            SELECT 
                vl.vdo_id,
                vl.vdo_url,
                vl.vdo_Thumb_url AS thumb_url,
                vl.vdo_Title AS title,
                p.views_count AS view_count,
                vl.vdo_create_at AS vdo_create_date,
                c.channel_id,
                c.channel_name,
                c.channel_profile_url
            FROM 
                Videos_long vl
            JOIN 
                channels c ON vl.channel_id = c.channel_id
            JOIN 
                popular p ON vl.vdo_id = p.video_id;
        `;

        const data = await db.query(query);
        res.json(data.rows);
    } catch (err) {
        res.send(err);
    }
});

app.get("/short", async (req, res) => {
    try {
        const query = `
            SELECT 
                vs.short_id AS vdo_id,
                vs.short_url AS vdo_url,
                vs.short_Title AS title,
                vs.short_create_at AS vdo_create_date,
                p_short.views_count AS view_count,
                c.channel_id,
                c.channel_name,
                c.channel_profile_url
            FROM 
                Videos_short vs
            JOIN 
                popular_short p_short ON vs.short_id = p_short.short_video_id
            JOIN 
                channels c ON vs.channel_id = c.channel_id;
        `;

        const data = await db.query(query);
        res.json(data.rows);
    } catch (err) {
        res.send(err);
    }
});
// Assuming the Express and database client (db) are already initialized

app.get("/subscriptions", async (req, res) => {
    const user_id = req.query.user_id;
    if (!user_id) return res.status(400).send("Bad Request");

    try {
        const query = `
            SELECT
                cs.user_id,
                u.username,
                u.profile_url,
                cs.channel_id,
                c.channel_name,
                c.channel_profile_url
            FROM
                channels_subscribe cs
            JOIN
                Users u ON cs.user_id = u.user_id
            JOIN 
                channels c ON cs.channel_id = c.channel_id
            WHERE u.user_id = $1
        `;
        const values = [user_id];

        const data = await db.query(query, values);

        if (data.rows.length === 0) {
            return res.status(404).send("No subscriptions found for this user");
        }

        res.json(data.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/result", async (req, res) => {
    const { search_query } = req.query;

    try {
        const query = `
            SELECT
                v.vdo_id,
                v.vdo_Title,
                v.vdo_create_at,
                v.vdo_Thumb_url,
                c.channel_name,
                c.channel_profile_url,
                p.views_count
            FROM
                Videos_long v
            JOIN
                channels c ON v.channel_id = c.channel_id
            LEFT JOIN
                popular p ON v.vdo_id = p.video_id
            WHERE
                c.channel_name LIKE $1 OR
                v.vdo_Title LIKE $2;
        `;

        const value = [
            `%${search_query}%`,
            `%${search_query}%`
        ];

        const data = await db.query(query, value);
        res.json(data.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/watch", async (req, res) => {
    const { v } = req.query;

    if (!v) return res.status(400).send("Bad Request");

    try {
        const query = `
            SELECT
                vl.vdo_id,
                vl.vdo_title,
                vl.vdo_description,
                vl.vdo_duration,
                vl.vdo_Thumb_url,
                vl.vdo_url,
                vl.vdo_create_at,
                c.channel_name,
                c.channel_profile_url,
                COALESCE(p.views_count, 0) AS views_count,
                COALESCE(p.like_count, 0) AS likes_count,
                EXISTS (
                    SELECT 1
                    FROM channels_subscribe
                    WHERE channel_id = vl.channel_id AND user_id = $1
                ) AS is_subscribed,
                ARRAY(
                    SELECT jsonb_build_object(
                        'user_name', u.username,
                        'comment_text', cm.content
                    )
                    FROM comments cm
                    JOIN users u ON cm.user_id = u.user_id
                    WHERE cm.vdo_id = vl.vdo_id
                    ORDER BY cm.comment_date
                ) AS comments
            FROM videos_long vl
            JOIN channels c ON vl.channel_id = c.channel_id
            LEFT JOIN popular p ON vl.vdo_id = p.video_id
            WHERE vl.vdo_id = $2;
        `;
        const values = [v, v];

        const data = await db.query(query, values);
        const videos = data.rows[0];
        // const comments = videos.comments.split('\n').map(comment => {
        //     const [username, content] = comment.split(': ');
        //     return { [username]: { content } };
        // });
        // videos.comments = comments;
        res.json(videos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(port, () => {
    console.log(`server running in port ${port} `);
})