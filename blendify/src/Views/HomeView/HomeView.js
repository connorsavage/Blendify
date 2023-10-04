import React from 'react';
import './HomeView.css';
import SearchBar from '../../Components/SearchBar/SearchBar'; // Make sure the path is correct

export function HomeView({ onLogout }) {
    
    const handleSearch = (searchTerm) => {
        console.log("Searching for:", searchTerm);
        // Implement your search logic here
    };

    return (
        <div className="home-view-wrapper">
            <div className="home-view">
            <header>
                <nav>
                    <button onClick={onLogout}>Log Out</button>
                </nav>
            </header>
            <div className="search-text">
                Find Your Blend
            </div>
            <SearchBar onSearch={handleSearch} />
            </div>
        </div>
    );
}