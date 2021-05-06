
import React from 'react';
import HistoryCard from './HistoryCard'

const History = props => {
    return (
        <div className="history-screen">
            <h2 className="page-title">Research History</h2>
            <div className="history-container">
                {
                    props.historicData.map(history => {
                        return <HistoryCard historyData={history} />
                    })
                }
            </div>
            <h3 className="btn-delete"><i className="material-icons">delete</i> Clear History </h3>
        </div>
    );
}

export default History;
