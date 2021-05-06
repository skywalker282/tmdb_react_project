
import React from 'react';
import { useState } from 'react';

import Films from './Films';
import Favorite from './Favoris';
import History from './History';
import Footer from './Footer';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import classes from './Nav.module.scss';

const Nav = props => {

    let [activeTab, setActiveTab] = useState(3);

    let handleFilmTabClick = event => {
        setActiveTab(1);
    };

    let handleFavTabClick = event => {
        setActiveTab(2);
    };

    let handleHistTabClick = event => {
        setActiveTab(3);
    }

    return (
        <Router>
            <div className={classes.nav}>
            <div className={classes.appbar}>
                <div className={classes.navLeft}>
                    <img className={classes.appbarBrandLogo} src="../../img/moviesico.png" alt="moviesico"/>
                    <a className={classes.appbarBrandText} href="#">MoviesUp</a>
                </div>
                <div className={classes.navRight}>
                    <a className={classes.appbarPseudo} href="#">pseudo</a>
                    <a href="#" className={classes.appbarPowerOff}><img src="../../img/poweroff.ico" alt="poweroff"/></a>
                </div>
            </div>
            <div className={classes.navigation}>
            {
               (()=>{
                if (activeTab ==1) {
                    return (<ul className={classes.navTabs}>
                        <li className={classes.borderBottom}><Link to="/">FILMS</Link></li>
                        <li className={classes.menuTab} onClick={handleFavTabClick}><Link to="/favorite">FAVORIS</Link></li>
                        <li className={classes.menuTab} onClick={handleHistTabClick}><Link to="/history">HISTORIQUE</Link></li>
                    </ul>)
                } else if(activeTab===2) {
                    return  (<ul className={classes.navTabs}>
                        <li className={classes.menuTab} onClick={handleFilmTabClick}><Link to="/">FILMS</Link></li>
                        <li className={classes.borderBottom}><Link to="/favorite">FAVORIS</Link></li>
                        <li className={classes.menuTab} onClick={handleHistTabClick}><Link to="/history">HISTORIQUE</Link></li>
                    </ul>)
                } else if(activeTab) {
                    return (<ul className={classes.navTabs}>
                        <li className={classes.menuTab} onClick={handleFilmTabClick}><Link to="/">FILMS</Link></li>
                        <li className={classes.menuTab} onClick={handleFavTabClick}><Link to="/favorite">FAVORIS</Link></li>
                        <li className={classes.borderBottom}><Link to="/history">HISTORIQUE</Link></li>
                    </ul>)
                    }
                })()
                }
                </div>
            </div>
            <div className="route-container">
                <Switch>
                    <Route path="/" component={Films} />
                    <Route path="/favorite" component={Favorite} />
                    <Route path="/history" component={History} />
                </Switch>
                </div>
            <Footer />
        </Router>
    );
};

export default Nav;