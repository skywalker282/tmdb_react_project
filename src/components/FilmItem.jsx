
import React from 'react';
import '../App.scss';

const FilmItem = props => {
    return (
        <div className="films-container__card">
            <h3 className="card-title"></h3>
            <div className="card-media">
                <img src="" alt=""/>
            </div>
            <div className="card-footer">
                <a>Détails</a>
                <a href="#"><i className="material-icons">play</i></a>
                <a href="#"><i className="material-icons">love</i></a>
            </div>
        </div>
    );
}

export default FilmItem;
