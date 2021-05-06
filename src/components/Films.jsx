
import React from 'react';
import '../App.scss';
import { useState, useEffect } from 'react';
import FilmPresentBlock from './FilmsPresent'

const Films = props => {

    let [films, setFilms] = useState([]);
    let [highlyResearchedFilms, setHighlyResearchedFilms] = useState([]);
    let [longerFilms, setLongerFilms] = useState([]);
    let [popActors, setPopActors] = useState([]);

    const classes = {

    }

    return (
        <div className="home-screen">
            <div className="header">
                <div className="header-left">
                    <span>Trier par : </span>
                    <select name="" id="">
                        <option value="sortie">Date de sortie</option>
                        <option value="langue">Votre langue</option>
                        <option value="age">Votre age</option>
                    </select>
                </div>
                <div className="header-right">
                    <span>Rechercher : </span>
                    <input type="text"/>
                    <a href="#"><i className="material-icons">search</i></a>
                </div>
            </div>
            <h4 className="result-feedback">x correspondances pour votre recherche</h4>
            <div className="films-screen">
                <FilmPresentBlock title="LES FILMS LES PLUS RECHERCHÉS" films={highlyResearchedFilms} />
                <FilmPresentBlock title="LES ACTEURS LES PLUS SUIVIS" films={popActors} />
                <FilmPresentBlock title="LES FILMS LES PLUS LONGS" films={longerFilms} />
            </div>
        </div>
    );
}

export default Films;
