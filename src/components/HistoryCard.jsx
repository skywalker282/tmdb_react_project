

import React from 'react';

const HistoryCard = props => {
    return (
        <div className="history-card">
            <img className="card-media" src="" alt=""/>
            <div className="card-body">
                <p>Title: <span></span></p>
                <p>Description: <span></span></p>
                <p>Date: <span></span></p>
            </div>
            <p className="card-action">Open</p>
        </div>
    );
}

export default HistoryCard;
