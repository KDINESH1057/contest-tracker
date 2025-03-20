import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = new WebSocket(url);

        socketRef.current.onopen = () => {
            setIsConnected(true);
        };

        socketRef.current.onmessage = (event) => {
            setData(JSON.parse(event.data));
        };

        socketRef.current.onerror = (event) => {
            setError(event);
        };

        socketRef.current.onclose = () => {
            setIsConnected(false);
        };

        return () => {
            socketRef.current.close();
        };
    }, [url]);

    return { data, error, isConnected };
};

export default useWebSocket;