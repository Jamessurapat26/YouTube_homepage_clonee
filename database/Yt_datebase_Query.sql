-- Create channels table
CREATE TABLE channels (
  channel_id SERIAL PRIMARY KEY,  -- Unique identifier for each channel
  channel_name VARCHAR(255) NOT NULL,  -- Name of the channel
  channel_profile_url VARCHAR(255) NOT NULL,  -- URL to the profile image of the channel
  channel_username VARCHAR(255) NOT NULL UNIQUE,  -- Unique username for the channel
  channel_banner_url VARCHAR(255) NOT NULL,  -- URL to the banner image of the channel
  channel_description TEXT NOT NULL,  -- Description of the channel
  update_at TIMESTAMP DEFAULT NULL,  -- Timestamp for the last update
  create_at TIMESTAMP NOT NULL  -- Timestamp for when the channel was created
);

-- Create Users table
CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,  -- Unique identifier for each user
  username VARCHAR(255) NOT NULL UNIQUE,  -- Unique username for the user
  email VARCHAR(255) NOT NULL UNIQUE,  -- Unique email address for the user
  password VARCHAR(255) NOT NULL,  -- Password for the user account
  first_name VARCHAR(255) NOT NULL,  -- User's first name
  last_name VARCHAR(255) NOT NULL,  -- User's last name
  profile_url VARCHAR(255) DEFAULT NULL,  -- URL to the user’s profile picture
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for when the user account was created
  update_at TIMESTAMP DEFAULT NULL  -- Timestamp for the last update of the user account
);

-- Create Videos_long table
CREATE TABLE Videos_long (
  vdo_id SERIAL PRIMARY KEY,  -- Unique identifier for each video
  vdo_url VARCHAR(255) NOT NULL,  -- URL of the video
  vdo_Thumb_url VARCHAR(255) NOT NULL,  -- URL of the video thumbnail
  vdo_Title VARCHAR(255) NOT NULL,  -- Title of the video
  vdo_Description TEXT NOT NULL,  -- Description of the video
  vdo_duration INT DEFAULT NULL,  -- Duration of the video in seconds
  vdo_create_at DATE NOT NULL,  -- Date when the video was created
  vdo_update_at DATE DEFAULT NULL,  -- Date for the last update of the video
  channel_id INT NOT NULL,  -- Identifier for the channel that uploaded the video (foreign key referencing channels)
  FOREIGN KEY (channel_id) REFERENCES channels(channel_id)  -- Foreign key constraint linking to channels
);

-- Create Videos_short table
CREATE TABLE Videos_short (
  short_id SERIAL PRIMARY KEY,  -- Unique identifier for each short video
  short_url VARCHAR(255) NOT NULL,  -- URL of the short video
  short_Title VARCHAR(255) NOT NULL,  -- Title of the short video
  short_Description TEXT NOT NULL,  -- Description of the short video
  short_duration INT NOT NULL,  -- Duration of the short video in seconds
  short_create_at DATE NOT NULL,  -- Date when the short video was created
  short_update_at DATE DEFAULT NULL,  -- Date for the last update of the short video
  channel_id INT NOT NULL,  -- Identifier for the channel that uploaded the short video (foreign key referencing channels)
  FOREIGN KEY (channel_id) REFERENCES channels(channel_id)  -- Foreign key constraint linking to channels
);

-- Create channels_subscribe table
CREATE TABLE channels_subscribe (
  user_id INT NOT NULL,  -- Identifier for the user (foreign key referencing Users)
  channel_id INT NOT NULL,  -- Identifier for the channel (foreign key referencing channels)
  subscribe_at TIMESTAMP DEFAULT NULL,  -- Timestamp for when the user subscribed to the channel
  PRIMARY KEY (user_id, channel_id),  -- Composite primary key to ensure unique subscriptions
  FOREIGN KEY (user_id) REFERENCES Users(user_id),  -- Foreign key constraint linking to Users
  FOREIGN KEY (channel_id) REFERENCES channels(channel_id)  -- Foreign key constraint linking to channels
);

-- Create Comments table
CREATE TABLE Comments (
  comment_id SERIAL PRIMARY KEY,  -- Unique identifier for each comment
  content TEXT NOT NULL,  -- Text content of the comment
  user_id INT NOT NULL,  -- Identifier for the user who made the comment (foreign key referencing Users)
  vdo_id INT NOT NULL,  -- Identifier for the video on which the comment was made (foreign key referencing Videos_long)
  comment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for when the comment was made
  FOREIGN KEY (user_id) REFERENCES Users(user_id),  -- Foreign key constraint linking to Users
  FOREIGN KEY (vdo_id) REFERENCES Videos_long(vdo_id)  -- Foreign key constraint linking to Videos_long
);

-- Create popular table
CREATE TABLE popular (
  id SERIAL PRIMARY KEY,  -- Unique identifier for the record
  video_id INT NOT NULL,  -- Identifier for the user associated with the metrics (foreign key referencing Users)
  like_count INT NOT NULL,  -- Number of likes the video has received
  views_count INT NOT NULL,  -- Number of views the video has received
  update_at TIMESTAMP NOT NULL,  -- Timestamp for the last update of the metrics
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for when the metrics were recorded
  FOREIGN KEY (video_id) REFERENCES Videos_long(vdo_id)  -- Foreign key constraint linking to Users
);

-- Create popular_short table
CREATE TABLE popular_short (
  id SERIAL PRIMARY KEY,  -- Unique identifier for the record
  short_video_id INT NOT NULL,  -- Identifier for the short video associated with the metrics (foreign key referencing Videos_short)
  like_count INT NOT NULL,  -- Number of likes the short video has received
  views_count INT NOT NULL,  -- Number of views the short video has received
  update_at TIMESTAMP NOT NULL,  -- Timestamp for the last update of the metrics
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for when the metrics were recorded
  FOREIGN KEY (short_video_id) REFERENCES Videos_short(short_id)  -- Foreign key constraint linking to Videos_short
);