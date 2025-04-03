import { useState, useEffect } from "react";

function fetchData(callback) {
    setTimeout(() => {
        const mockData = [
            { id: 1, name: "Task 1" },
            { id: 2, name: "Task 2" },
            { id: 3, name: "Task 3" }
        ];
        callback(mockData);
    }, 2000);
}

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(setData);
    }, []);

    return (
        <div>
            <h1>Fetching Data...</h1>
            {data.length > 0 && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
