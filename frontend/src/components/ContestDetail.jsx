import React from 'react';
import { useContext } from 'react';
import { ContestContext } from '../context/ContestContext';

const ContestDetail = () => {
    const { selectedContest } = useContext(ContestContext);

    if (!selectedContest) {
        return <div>Select a contest to see the details.</div>;
    }

    return (
        <div>
            <h2>{selectedContest.name}</h2>
            <p>{selectedContest.description}</p>
            <p>Date: {new Date(selectedContest.date).toLocaleDateString()}</p>
            <p>Participants: {selectedContest.participants}</p>
            <p>Status: {selectedContest.status}</p>
        </div>
    );
};

export default ContestDetail;