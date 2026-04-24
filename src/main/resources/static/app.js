const API_URL = '/api/movies';

// Navigation
function showSection(sectionId, event) {
    if (event) event.preventDefault();

    document.getElementById('recommend-section').style.display = 'none';
    document.getElementById('add-section').style.display = 'none';
    document.getElementById('all-section').style.display = 'none';
    
    document.getElementById(`${sectionId}-section`).style.display = 'block';
    
    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (event) event.target.classList.add('active');

    if(sectionId === 'all') {
        fetchAllMovies();
    } else if (sectionId === 'recommend' && document.getElementById('recommendations-results').innerHTML === '') {
        fetchRecommendations();
    }
}

// Fetch Recommendations
async function fetchRecommendations() {
    const genre = document.getElementById('genre-select').value;
    const resultsContainer = document.getElementById('recommendations-results');
    
    try {
        const response = await fetch(`${API_URL}/recommend?genre=${genre}`);
        const movies = await response.json();
        
        displayMovies(movies, resultsContainer);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        resultsContainer.innerHTML = '<p style="color: #ef4444; text-align: center; grid-column: 1/-1;">Failed to load recommendations. Is the backend running?</p>';
    }
}

// Fetch All Movies
async function fetchAllMovies() {
    const resultsContainer = document.getElementById('all-movies-results');
    
    try {
        const response = await fetch(API_URL);
        const movies = await response.json();
        
        displayMovies(movies, resultsContainer);
    } catch (error) {
        console.error('Error fetching movies:', error);
        resultsContainer.innerHTML = '<p style="color: #ef4444; text-align: center; grid-column: 1/-1;">Failed to load movies. Is the backend running?</p>';
    }
}

// Add Movie
async function addMovie(event) {
    event.preventDefault();
    
    const movieData = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        rating: parseFloat(document.getElementById('rating').value),
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageUrl').value
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });
        
        if (response.ok) {
            alert('Movie added successfully!');
            document.getElementById('add-movie-form').reset();
        } else {
            alert('Failed to add movie.');
        }
    } catch (error) {
        console.error('Error adding movie:', error);
        alert('Error: Could not connect to the server.');
    }
}

// Render Movies
function displayMovies(movies, container) {
    container.innerHTML = '';
    
    if (movies.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: var(--text-muted); font-size: 1.2rem;">No movies found for this criteria.</p>';
        return;
    }
    
    movies.forEach((movie, index) => {
        const delay = index * 0.1; // Staggered animation
        
        let imgHtml = movie.imageUrl 
            ? `<img src="${movie.imageUrl}" alt="${movie.title}" class="movie-img">`
            : `<div class="movie-img-placeholder">🎥</div>`;
            
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.animationDelay = `${delay}s`;
        
        card.innerHTML = `
            ${imgHtml}
            <div class="movie-info">
                <div class="movie-header">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-rating">★ ${movie.rating.toFixed(1)}</div>
                </div>
                <div class="movie-genre">${movie.genre}</div>
                <p class="movie-desc">${movie.description || 'No description available.'}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initial fetch
document.addEventListener('DOMContentLoaded', () => {
    fetchRecommendations();
});
