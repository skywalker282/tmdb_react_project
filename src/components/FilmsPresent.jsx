
import React from 'react';
import FilmItem from './FilmItem';

const FilmPresentBlock = props => {
   
    return (
        <div className="filmsBlock">
            <h2 className="film-block-title">{props.title}</h2>
            <div className="filmsContainer">
                {
                    props.films.map(film => {
                        return <FilmItem filmData = {film} />
                    })
                }
            </div>
            <a href="#" className = "more-block-btn">Voir plus ...</a>
        </div>
    );
}

export default FilmPresentBlock;
