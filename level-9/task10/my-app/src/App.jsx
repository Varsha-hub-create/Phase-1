import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import useSWR from 'swr';
import './App.css'; 

const Home = lazy(() => Promise.resolve({ default: HomePage }));
const Dashboard = lazy(() => Promise.resolve({ default: DashboardPage }));
const fetcher = url => fetch(url).then(res => res.json());

function App() {
  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <h1 className="app-title">⚡ My App</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </div>
      </nav>

      <div className="main-content">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

function HomePage() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => Array.from({ length: 1000 }, (_, i) => `Item ${i}`), []);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  const MemoizedList = React.memo(() => (
    <List height={300} itemCount={data.length} itemSize={40} width={'100%'}>
      {({ index, style }) => (
        <div style={style} className="list-item">{data[index]}</div>
      )}
    </List>
  ));

  return (
    <div className="home-container">
      <h2 className="page-title">🏠 Home</h2>
      <p className="description">A virtualized list with memoized updates:</p>
      <button className="action-button" onClick={handleClick}>
        Increment ({count})
      </button>
      <div className="list-container">
        <MemoizedList />
      </div>
    </div>
  );
}

function DashboardPage() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  if (isLoading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Failed to load users</div>;

  return (
    <div className="dashboard-container">
      <h2 className="page-title">📊 Dashboard</h2>
      <div className="card-grid">
        {data.map(user => (
          <div key={user.id} className="user-card">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-company">{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
