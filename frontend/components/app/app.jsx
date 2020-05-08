import React from 'react';
import NavBar from "../nav_bar/nav_bar";
import VideoIndexContainer from '../video_index/video_index_container';
import VideoShowContainer from "../video_show/video_show_container";
import CreateVideoContainer from '../video_create_update/video_create_container';
import UpdateVideoContainer from '../video_create_update/video_update_container';
import { Route,Switch } from 'react-router-dom';
import SideBar from '../nav_bar/sidebar/sidebar'
import { ProtectedRoute } from '../../util/route_util';

// import {AuthRoute} from '../util/route_util';

import styles from './app_style.module.css'

const App = () => (
    <div>
        <header>
            {/* <h1 className={styles.header}>TubeTube</h1> */}
            <NavBar />
        </header>
        {/* <Route path={`/video/${videoId}`} component={VideoShowContainer}/> */}
        <Switch>
            <ProtectedRoute path="/edit/:videoId" component={UpdateVideoContainer}/>
            {/* Need protecxted for these ^ and below */}
            <ProtectedRoute path="/upload" component={CreateVideoContainer}/>
            <Route path="/video/:videoId" component={VideoShowContainer}/>
            <Route exact path="/" component={VideoIndexContainer}/>
        </Switch>
        

    </div>
);

export default App;