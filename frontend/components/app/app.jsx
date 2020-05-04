import React from 'react';
import NavBar from "../nav_bar/nav_bar";
import VideoIndexContainer from '../video_index/video_index_container';
import VideoShowContainer from "../video_show/video_show_container";
import CreateVideoContainer from '../video_create_update/video_create_container'
import { Route,Switch } from 'react-router-dom';
import SideBar from '../sidebar/sidebar'
// import {AuthRoute} from '../util/route_util';

import styles from './app_style.module.css'

const App = () => (
    <div>
        <header>
            {/* <h1 className={styles.header}>TubeTube</h1> */}
            <NavBar />
            <SideBar />
        </header>
        {/* <Route path={`/video/${videoId}`} component={VideoShowContainer}/> */}
        <Switch>
            <Route path="/upload" component={CreateVideoContainer}/>
            <Route path="/video/:videoId" component={VideoShowContainer}/>
            <Route exact path="/" component={VideoIndexContainer}/>
        </Switch>
        

    </div>
);

export default App;