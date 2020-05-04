import React from 'react';
import NavBar from "../nav_bar/nav_bar";
import VideoIndexContainer from '../video_index/video_index_container';
import VideoShowContainer from "../video_show/video_show_container";
import {Route} from 'react-router-dom';
// import {AuthRoute} from '../util/route_util';

import styles from './app_style.module.css'

const App = () => (
    <div>
        <header>
            {/* <h1 className={styles.header}>TubeTube</h1> */}
            <NavBar />
        </header>
        <div></div>
        {/* <Route path={`/video/${videoId}`} component={VideoShowContainer}/> */}
        <Route path="/video/:videoId" component={VideoShowContainer}/>
        <Route exact path="/" component={VideoIndexContainer}/>
        

    </div>
);

export default App;