import { useEffect, useState } from "react"
import Short from "../Short/Short"
import Tags from "../Tags/Tags"
import "./ContentStyle.css"
import CardVideo from "../Card/CardVideo";

function Content() {
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        const fetchVideos = async () => {
            const data = await fetch("http://localhost:3000/");
            const json = await data.json();
            setVideos(json);
        };
        fetchVideos();

    }, []);

    return (
        <section id="content">
            <Tags></Tags>
            <div id="card">
                {videos.map((video, id) => (
                    <CardVideo key={id} content={video} />
                ))}
            </div>
            <Short></Short>
        </section>

    )
}

export default Content