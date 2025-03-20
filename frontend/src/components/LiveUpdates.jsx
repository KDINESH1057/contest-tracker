import React, { useEffect, useState } from 'react';
import useWebSocket from '../hooks/useWebSocket';

const LiveUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const { sendMessage, lastMessage } = useWebSocket('ws://your-websocket-url');

    useEffect(() => {
        if (lastMessage !== null) {
            const newUpdate = JSON.parse(lastMessage.data);
            setUpdates((prevUpdates) => [...prevUpdates, newUpdate]);
        }
    }, [lastMessage]);

    return (
        <div>
            <h2>Live Updates</h2>
            <ul>
                {updates.map((update, index) => (
                    <li key={index}>{update.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default LiveUpdates;