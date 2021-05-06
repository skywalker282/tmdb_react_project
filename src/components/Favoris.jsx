
import React from 'react';
import FilmItem from './FilmItem'

const Favoris = props => {
    return (
        <div className="favorite-film-screen">
            <h1 className="favorite-title">TES FILMS FAVORIS</h1>
            <div className="filmContainer">
                {
                    props.favFilms.map(film => {
                        return <FilmItem filmData={film} />
                    })
                }
            </div>
        </div>
    );
};

export default Favoris;
