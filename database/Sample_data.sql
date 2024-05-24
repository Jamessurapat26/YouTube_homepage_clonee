-- Insert sample data into channels table
INSERT INTO channels (channel_name, channel_profile_url, channel_username, channel_banner_url, channel_description, update_at, create_at) VALUES
('TechTalks', 'https://example.com/profiles/techtalks.png', 'techtalks', 'https://example.com/banners/techtalks.png', 'All about the latest in tech.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('FitnessFreaks', 'https://example.com/profiles/fitnessfreaks.png', 'fitnessfreaks', 'https://example.com/banners/fitnessfreaks.png', 'Your daily dose of fitness and health.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('CookingWithJoy', 'https://example.com/profiles/cookingwithjoy.png', 'cookingwithjoy', 'https://example.com/banners/cookingwithjoy.png', 'Delicious recipes and cooking tips.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('TravelTales', 'https://example.com/profiles/traveltales.png', 'traveltales', 'https://example.com/banners/traveltales.png', 'Travel stories and guides.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('DIYProjects', 'https://example.com/profiles/diyprojects.png', 'diyprojects', 'https://example.com/banners/diyprojects.png', 'Creative DIY project ideas.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert sample data into Users table
INSERT INTO Users (username, email, password, first_name, last_name, profile_url, create_at) VALUES
('john_doe', 'john.doe@example.com', 'password123', 'John', 'Doe', 'https://example.com/profiles/john_doe.png', CURRENT_TIMESTAMP),
('jane_smith', 'jane.smith@example.com', 'password123', 'Jane', 'Smith', 'https://example.com/profiles/jane_smith.png', CURRENT_TIMESTAMP),
('alice_jones', 'alice.jones@example.com', 'password123', 'Alice', 'Jones', 'https://example.com/profiles/alice_jones.png', CURRENT_TIMESTAMP),
('bob_brown', 'bob.brown@example.com', 'password123', 'Bob', 'Brown', 'https://example.com/profiles/bob_brown.png', CURRENT_TIMESTAMP),
('charlie_white', 'charlie.white@example.com', 'password123', 'Charlie', 'White', 'https://example.com/profiles/charlie_white.png', CURRENT_TIMESTAMP);

-- Insert sample data into Videos_long table
INSERT INTO Videos_long (vdo_url, vdo_Thumb_url, vdo_Title, vdo_Description, vdo_duration, vdo_create_at, channel_id) VALUES
('https://example.com/videos/v1.mp4', 'https://example.com/thumbnails/v1.png', 'Understanding AI', 'A comprehensive guide to Artificial Intelligence.', 3600, CURRENT_DATE, 1),
('https://example.com/videos/v2.mp4', 'https://example.com/thumbnails/v2.png', 'Home Workout Routines', 'Effective workout routines you can do at home.', 1800, CURRENT_DATE, 2),
('https://example.com/videos/v3.mp4', 'https://example.com/thumbnails/v3.png', 'Easy Pasta Recipes', 'Quick and easy pasta recipes.', 1200, CURRENT_DATE, 3),
('https://example.com/videos/v4.mp4', 'https://example.com/thumbnails/v4.png', 'Top 10 Travel Destinations', 'Explore the top 10 travel destinations.', 2400, CURRENT_DATE, 4),
('https://example.com/videos/v5.mp4', 'https://example.com/thumbnails/v5.png', 'DIY Home Decor', 'Creative DIY home decor ideas.', 1500, CURRENT_DATE, 5);

-- Insert sample data into Videos_short table
INSERT INTO Videos_short (short_url, short_Title, short_Description, short_duration, short_create_at, channel_id) VALUES
('https://example.com/shorts/s1.mp4', 'Quick AI Tips', 'Short tips on AI.', 60, CURRENT_DATE, 1),
('https://example.com/shorts/s2.mp4', '5 Minute Abs', 'Quick ab workout.', 60, CURRENT_DATE, 2),
('https://example.com/shorts/s3.mp4', 'Cooking Hacks', 'Short cooking hacks.', 60, CURRENT_DATE, 3),
('https://example.com/shorts/s4.mp4', 'Travel Tips', 'Quick travel tips.', 60, CURRENT_DATE, 4),
('https://example.com/shorts/s5.mp4', 'DIY Tricks', 'Short DIY tricks.', 60, CURRENT_DATE, 5);

-- Insert sample data into channels_subscribe table
INSERT INTO channels_subscribe (user_id, channel_id, subscribe_at) VALUES
(1, 1, CURRENT_TIMESTAMP),
(1, 2, CURRENT_TIMESTAMP),
(2, 1, CURRENT_TIMESTAMP),
(2, 3, CURRENT_TIMESTAMP),
(3, 2, CURRENT_TIMESTAMP),
(3, 4, CURRENT_TIMESTAMP),
(4, 3, CURRENT_TIMESTAMP),
(4, 5, CURRENT_TIMESTAMP),
(5, 4, CURRENT_TIMESTAMP),
(5, 1, CURRENT_TIMESTAMP);

-- Insert sample data into Comments table
INSERT INTO Comments (content, user_id, vdo_id, comment_date) VALUES
('Great video on AI!', 1, 1, CURRENT_TIMESTAMP),
('Loved the workout routines!', 2, 2, CURRENT_TIMESTAMP),
('Delicious pasta recipes!', 3, 3, CURRENT_TIMESTAMP),
('Amazing travel tips!', 4, 4, CURRENT_TIMESTAMP),
('Very creative DIY ideas!', 5, 5, CURRENT_TIMESTAMP),
('Helpful AI tips!', 2, 1, CURRENT_TIMESTAMP),
('Quick and effective workout!', 3, 2, CURRENT_TIMESTAMP),
('Yummy recipes!', 4, 3, CURRENT_TIMESTAMP),
('I want to visit these places!', 5, 4, CURRENT_TIMESTAMP),
('I will try these DIY tricks!', 1, 5, CURRENT_TIMESTAMP);

-- Insert sample data into popular table
INSERT INTO popular (user_id, like_count, views_count, update_at, create_at) VALUES
(1, 150, 2000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 100, 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 200, 2500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 300, 3500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 400, 4500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert example data into popular_short table
INSERT INTO popular_short (short_video_id, like_count, views_count, update_at)
VALUES
(1, 100, 1000, NOW()),
(2, 150, 1500, NOW()),
(3, 200, 2000, NOW());