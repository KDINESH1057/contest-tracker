import React, { useContext } from 'react';
import { ContestContext } from '../context/ContestContext';

const ContestList = () => {
    const { contests } = useContext(ContestContext);

    return (
        <div>
            <h2>Contest List</h2>
            <ul>
                {contests.map(contest => (
                    <li key={contest.id}>
                        <h3>{contest.name}</h3>
                        <p>{contest.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContestList;