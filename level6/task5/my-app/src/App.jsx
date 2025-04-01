import React, { useState, useEffect } from 'react';
import './App.css';
const DataFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Fetched Data</h2>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Title:</strong> {data.title}</p>
            <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default DataFetcher;