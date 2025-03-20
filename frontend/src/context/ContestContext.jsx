import React, { createContext, useState, useEffect } from 'react';
import useWebSocket from '../hooks/useWebSocket';

export const ContestContext = createContext();

export const ContestProvider = ({ children }) => {
    const [contests, setContests] = useState([]);
    const { sendMessage, lastMessage } = useWebSocket('ws://your-websocket-url');

    useEffect(() => {
        // Fetch initial contests data from the server
        const fetchContests = async () => {
            const response = await fetch('/api/contests');
            const data = await response.json();
            setContests(data);
        };

        fetchContests();
    }, []);

    useEffect(() => {
        if (lastMessage) {
            const updatedContest = JSON.parse(lastMessage.data);
            setContests((prevContests) =>
                prevContests.map((contest) =>
                    contest.id === updatedContest.id ? updatedContest : contest
                )
            );
        }
    }, [lastMessage]);

    return (
        <ContestContext.Provider value={{ contests, setContests, sendMessage }}>
            {children}
        </ContestContext.Provider>
    );
};