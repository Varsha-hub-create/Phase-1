import { useState } from "react";
import './App.css';
// Input Component
function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

// Select Component
function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {children}
    </select>
  );
}

// Card Component
function Card({ children }) {
  return (
    <div>{children}</div>
  );
}

const items = [
  { id: 1, name: "React Guide", category: "Books" },
  { id: 2, name: "JavaScript Tips", category: "Articles" },
  { id: 3, name: "CSS Tricks", category: "Tutorials" },
  { id: 4, name: "Node.js Handbook", category: "Books" },
  { id: 5, name: "Tailwind Guide", category: "Articles" },
];

export default function SearchFilterList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || item.category.toLowerCase() === category.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {/* Category Filter */}
      <Select value={category} onChange={setCategory}>
        <option value="">All</option>
        <option value="Books">Books</option>
        <option value="Articles">Articles</option>
        <option value="Tutorials">Tutorials</option>
      </Select>

      {/* Filtered Results */}
      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id}>{item.name} - {item.category}</Card>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
