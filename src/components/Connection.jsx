
import React from 'react';
import classes from './Connection.module.scss'

const Connection = props => {
    return (
        <div className={classes.connectionScreen}>
            <div className={classes.connectionHero}>
                <h1>VEUILLEZ IDENTIFIER VOTRE PROFIL</h1>
                <p>Pour bien bénéficier de toutes les fonctionnalités que nous avons prévuespour vous, veuillez remplir ce formulaire pour nous permettre de connaitre votre profil !</p>
            </div>
            <form>
                <p><label htmlFor="nickname">Votre pseudo :</label></p>
                <p><input type="text" id="pseudo"/></p>
                <p><label htmlFor="country">Votre pays : </label></p>
                <p><select id="country">
                    <option value="api">api</option>
                </select></p>
                <p><label htmlFor="language">Language : </label></p>
                <p><select id="language">
                    <option value="api">api</option>
                </select></p>
                <p><label htmlFor="age">Votre age : </label></p>
                <p><input type="number" id="age"/></p>
                <p className={classes.btn-submit}><a href="#">Connexion</a></p>
            </form>
        </div>
    );
}
