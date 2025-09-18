// Basic static data for mock movies
const MOVIES = [
{ id:'avengers', title:'Avengers: Dawn', year:2019, category:'Action', desc:'Superheroes unite to save the world.', thumb:'assets/images/thumb-avengers.jpg', poster:'assets/images/thumb-avengers.jpg', trailer:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
{ id:'inception', title:'Inception', year:2010, category:'Drama', desc:'A mind-bending thriller about dreams.', thumb:'assets/images/thumb-inception.jpg', poster:'assets/images/thumb-inception.jpg', trailer:'' },
{ id:'joker', title:'Joker', year:2019, category:'Drama', desc:'Origins of the notorious Clown Prince.', thumb:'assets/images/thumb-joker.jpg', poster:'assets/images/thumb-joker.jpg', trailer:'' }
];


function el(tag, cls, html){ const e = document.createElement(tag); if(cls) e.className = cls; if(html!==undefined) e.innerHTML = html; return e }


// Populate homepage
function populateHome(){
const grid = document.getElementById('movie-grid');
grid.innerHTML = '';
MOVIES.forEach(m=>{
const card = el('article','card');
const img = document.createElement('img');
img.src = fileExists(m.thumb) ? m.thumb : `https://via.placeholder.com/400x600?text=${encodeURIComponent(m.title)}`;
img.alt = m.title;
card.appendChild(img);
card.appendChild(el('h3','',''+m.title+' ('+m.year+')'));
card.appendChild(el('p','',''+m.desc));
const btn = document.createElement('a'); btn.href = `movie.html?id=${m.id}`; btn.className='watch-btn'; btn.textContent='Watch Now';
card.appendChild(btn);
grid.appendChild(card);
});
}


// Check local file exists (best-effort): attempt to load image by creating an Image and fallback to placeholder.
function fileExists(path){ // we won't block rendering; this returns true in most static setups; rely on browser for 404
return true; // keep simple for static package
}


// Initialize homepage
if(document.getElementById('movie-grid')){
document.getElementById('year').textContent = new Date().getFullYear();
populateHome();
document.getElementById('loadMore').addEventListener('click',()=>alert('No more mock content — add more items in script.js'));
document.getElementById('search').addEventListener('input',e=>{
const q = e.target.value.toLowerCase();
document.querySelectorAll('.card').forEach(card=>{
const t = card.querySelector('h3').textContent.toLowerCase();
card.style.display = t.includes(q)?'block':'none';
});
});
}


// Movie page initializer used by movie.html
function initMoviePage(id){
const movie = MOVIES.find(m=>m.id===id) || MOVIES[0];
document.getElementById('movieTitle').textContent = movie.title + ' ('+movie.year+')';
document.getElementById('movieDesc').textContent = movie.desc;
const poster = document.getElementById('posterImg');
poster.src = movie.poster