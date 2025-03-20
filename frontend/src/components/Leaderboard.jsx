import React, { useContext } from 'react';
import { ContestContext } from '../context/ContestContext';

const Leaderboard = () => {
    const { contests } = useContext(ContestContext);

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Contest Name</th>
                        <th>Participants</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {contests.map(contest => (
                        <tr key={contest.id}>
                            <td>{contest.name}</td>
                            <td>{contest.participants}</td>
                            <td>{contest.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;