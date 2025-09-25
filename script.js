// Simple Movie Data
const MOVIES = [
    {
        id: 'avengers',
        title: 'Avengers: Endgame',
        year: 2019,
        category: 'Action',
        desc: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos actions.',
        thumb: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Avengers+Endgame',
        poster: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Avengers+Endgame',
        trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c',
        watchUrl: 'https://example.com/watch/avengers'
    },
    {
        id: 'inception',
        title: 'Inception',
        year: 2010,
        category: 'Sci-Fi',
        desc: 'A skilled thief is offered a chance to have his past crimes forgiven if he can implant another person idea into a target subconscious.',
        thumb: 'https://via.placeholder.com/300x450/2a2a2a/ffffff?text=Inception',
        poster: 'https://via.placeholder.com/400x600/2a2a2a/ffffff?text=Inception',
        trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
        watchUrl: 'https://example.com/watch/inception'
    },
    {
        id: 'joker',
        title: 'Joker',
        year: 2019,
        category: 'Drama',
        desc: 'In Gotham City, a mentally troubled comedian embarks on a downward spiral that leads to the creation of the iconic villain, the Joker.',
        thumb: 'https://via.placeholder.com/300x450/3a3a3a/ffffff?text=Joker',
        poster: 'https://via.placeholder.com/400x600/3a3a3a/ffffff?text=Joker',
        trailer: 'https://www.youtube.com/embed/zAGVQLHvwOY',
        watchUrl: 'https://example.com/watch/joker'
    },
    {
        id: 'spiderman',
        title: 'Spider-Man: No Way Home',
        year: 2021,
        category: 'Action',
        desc: 'With Spider-Man identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
        thumb: 'https://via.placeholder.com/300x450/4a4a4a/ffffff?text=Spider-Man',
        poster: 'https://via.placeholder.com/400x600/4a4a4a/ffffff?text=Spider-Man',
        trailer: 'https://www.youtube.com/embed/JfVOs4VSpmA',
        watchUrl: 'https://example.com/watch/spiderman'
    },
    {
        id: 'batman',
        title: 'The Batman',
        year: 2022,
        category: 'Action',
        desc: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city hidden corruption.',
        thumb: 'https://via.placeholder.com/300x450/5a5a5a/ffffff?text=The+Batman',
        poster: 'https://via.placeholder.com/400x600/5a5a5a/ffffff?text=The+Batman',
        trailer: 'https://www.youtube.com/embed/mqqft2x_Aa4',
        watchUrl: 'https://example.com/watch/batman'
    },
    {
        id: 'topgun',
        title: 'Top Gun: Maverick',
        year: 2022,
        category: 'Action',
        desc: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN graduates.',
        thumb: 'https://via.placeholder.com/300x450/6a6a6a/ffffff?text=Top+Gun',
        poster: 'https://via.placeholder.com/400x600/6a6a6a/ffffff?text=Top+Gun',
        trailer: 'https://www.youtube.com/embed/qSqVVswa420',
        watchUrl: 'https://example.com/watch/topgun'
    }
];

// Helper function to create elements
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.innerHTML = content;
    return element;
}

// Populate homepage with movies
function populateHome() {
    const grid = document.getElementById('movie-grid');
    if (!grid) {
        console.error('Movie grid not found!');
        return;
    }

    grid.innerHTML = '';
    
    MOVIES.forEach((movie, index) => {
        const card = createElement('article', 'card');
        
        // Movie image
        const img = createElement('img');
        img.src = movie.thumb;
        img.alt = movie.title;
        img.loading = 'lazy';
        
        // Movie title
        const title = createElement('h3', '', `${movie.title} (${movie.year})`);
        
        // Movie description
        const desc = createElement('p', '', movie.desc);
        
        // Watch button
        const watchBtn = createElement('a', 'watch-btn', 'Watch Now');
        watchBtn.href = `movie.html?id=${movie.id}`;
        
        // Assemble card
card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(watchBtn);
        
        // Add to grid
grid.appendChild(card);
        
        // Animate in
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize movie page
function initMoviePage(id) {
    const movie = MOVIES.find(m => m.id === id) || MOVIES[0];
    
    // Update page content
    document.getElementById('movieTitle').textContent = `${movie.title} (${movie.year})`;
    document.getElementById('movieDesc').textContent = movie.desc;
    
    const poster = document.getElementById('posterImg');
    poster.src = movie.poster;
    poster.alt = movie.title;
    
    // Update watch button
    const watchBtn = document.getElementById('watchBtn');
    watchBtn.href = movie.watchUrl;
    
    // Add trailer if available
    const trailerWrap = document.getElementById('trailerWrap');
    if (movie.trailer) {
        trailerWrap.innerHTML = `
            <h3>Trailer</h3>
            <iframe width="100%" height="315" src="${movie.trailer}" 
                    frameborder="0" allowfullscreen></iframe>
        `;
    }
    
    // Add share functionality
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: movie.title,
                text: movie.desc,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    });
    
    // Load related movies
    loadRelatedMovies(movie.id);
}

// Load related movies
function loadRelatedMovies(currentId) {
    const relatedGrid = document.getElementById('related-movies');
    if (!relatedGrid) return;
    
    const relatedMovies = MOVIES.filter(m => m.id !== currentId).slice(0, 3);
    
    relatedGrid.innerHTML = '';
    relatedMovies.forEach(movie => {
        const card = createElement('article', 'card');
        
        const img = createElement('img');
        img.src = movie.thumb;
        img.alt = movie.title;
        
        const title = createElement('h4', '', movie.title);
        const watchBtn = createElement('a', 'watch-btn', 'Watch');
        watchBtn.href = `movie.html?id=${movie.id}`;
        
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(watchBtn);
        relatedGrid.appendChild(card);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Populate movies on homepage
    if (document.getElementById('movie-grid')) {
        populateHome();
        
        // Load more functionality
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                // For now, just show an alert
                alert('No more movies available! Add more in the script.js file.');
            });
        }
        
        // Search functionality
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.card');
                
                cards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    card.style.display = title.includes(query) ? 'block' : 'none';
                });
            });
        }
    }
    
    console.log('DarkClips loaded successfully!');
});