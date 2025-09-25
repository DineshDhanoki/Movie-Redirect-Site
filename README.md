# 🎬 DarkClips - Simple Movie Redirect Site

A clean, simple movie redirect site that displays movie information and redirects users to streaming platforms.

## 📁 Files

- `index.html` - Homepage with movie grid
- `movie.html` - Individual movie pages
- `script.js` - JavaScript functionality
- `styles.css` - Styling and responsive design

## 🚀 How to Use

1. **Open `index.html`** in your web browser
2. **Browse movies** in the grid layout
3. **Click "Watch Now"** to go to individual movie pages
4. **Search movies** using the search bar
5. **Click "Load More"** to see additional movies (currently shows alert)

## 🎯 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Movie Grid** - Clean card layout with movie posters
- **Search Functionality** - Filter movies by title
- **Individual Movie Pages** - Detailed movie information with trailers
- **Share Functionality** - Share movie pages
- **Affiliate Links** - Sidebar with streaming service links

## 🛠️ Customization

### Adding Movies

Edit the `MOVIES` array in `script.js`:

```javascript
const MOVIES = [
    {
        id: 'your-movie-id',
        title: 'Your Movie Title',
        year: 2024,
        category: 'Action',
        desc: 'Movie description...',
        thumb: 'https://your-image-url.com/thumb.jpg',
        poster: 'https://your-image-url.com/poster.jpg',
        trailer: 'https://youtube.com/embed/VIDEO_ID',
        watchUrl: 'https://your-streaming-url.com'
    }
];
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #e50914;  /* Red color */
    --background: #0c0c0c;     /* Dark background */
    --text-color: #ffffff;     /* White text */
}
```

### Adding Real Streaming Links

Replace the `watchUrl` values in the `MOVIES` array with actual streaming platform URLs.

## 📱 Mobile Support

The site is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This is a sample project for educational purposes.

---

**Ready to go!** Just open `index.html` in your browser to see your movie site in action.

