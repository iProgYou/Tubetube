[![alt text](https://github.com/iProgYou/Tubetube/blob/master/app/assets/images/tubetubeBigForMD.png "Go to TubeTube")](https://tube-tube.herokuapp.com/)
:----------------:
**A YouTube clone with a dark theme**

Tubetube, a Youtube clone, is a video sharing platform that allows users to upload videos, as well as watch, like, and comment on other videos.

[Live Demo](https://tube-tube.herokuapp.com/)

## Technologies

* Rails
* ActiveRecord
* PostgreSQL
* React
* Redux

## Features

* Display index of uploaded videos

* Search videos on the site

* Create an account

* Upload videos

* Users can comment on other user's videos

## Index

When a user visits Tubetube, they are immediately greeted with an index page that displays several videos that have been uploaded to the platform.

![alt text](https://github.com/iProgYou/Tubetube/blob/master/app/assets/images/index.png)

The videos are retrieved from the backend once the react component mounts to the page. They are then shuffled using the Fisher-Yates algorithm and fed into individual video item components. 

```javascript
    componentDidMount() {
        this.props.fetchVideos();
    }
    
    shuffleVideos(videoArr) {
        for (let i = 0; i < videoArr.length; i++) {
            let randIdx = Math.floor((Math.random() * i)) % videoArr.length;
            let temp = videoArr[i]
            videoArr[i] = videoArr[randIdx]
            videoArr[randIdx] = temp
        }
        return videoArr
    }

    render() {     
        if (!this.props.videos) return null;
        return(
            <div className={styles.videoIndexContainer}>
                {this.shuffleVideos(Object.values(this.props.videos)).map(( video ) => (
                    <VideoIndexItem key={video.id} video={video}/>
                ))}
            </div>
        )
    }
```

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
