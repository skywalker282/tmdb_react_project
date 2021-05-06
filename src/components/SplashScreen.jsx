
import React from 'react';
import classes from './SplashScreen.module.scss';
import Nav from './Nav'

const Splash = props => {
    return (
        <Nav />

        // <div className={classes.splash}>
        //     <h1 className={classes.splash__header}>MOVIES FOR EVERYONE <br/><span className={classes.subHead}>MoviesUp</span></h1>
        //     <div className={classes.splash__body}>
        //         <p className={classes.splashHero}>Votre application pour la recherche de vos films. Nous vous proposons aussi le streaming et la selection selon vos acteurs préférés mais aussi de sauvegarder vos films préférés et avoir accès à l'historique de recherche.</p>
        //         <div className={classes.splashSpinner}>
        //             <img src="../../img/moviesico.png" alt="spinner"/>
        //         </div>
        //     </div> 
        //     <h5 className={classes.splash__footer}>Cirhuza Software Services · Copyright &copy; All right reserved 2021</h5>          
        // </div>

    )
}

export default Splash;
