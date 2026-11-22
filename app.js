/**
 * Rose Music Hall - Concert Preview & Jukebox
 */

const CONCERTS = [
  {
    id: "nicole-atkins",
    band: "Nicole Atkins",
    searchTerm: "Nicole Atkins",
    date: "2026-11-13",
    displayDate: "Friday, Nov 13, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall (Indoor Stage)",
    support: "With John Gallagher Jr. & Annabelle Eve",
    genre: "Indie Rock / Baroque Pop",
    genreCategory: "Indie & Alt",
    description: "Acclaimed singer-songwriter known for her lush, cinematic voice blending 60s psychedelic pop, soul, and indie rock.",
    ticketUrl: "https://rosemusichall.com/event/nicole-atkins/",
    sampleTrack: "When the Night Falls",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0f/fe/b1/0ffeb1ef-f9d1-7a36-2cd0-a88a5cf74cb3/mzaf_9273258021538000076.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ac/b7/59acb74d-2e3b-552d-b3a4-eb1bba505692/015047820153_Cover.jpg/600x600bb.jpg",
    albumName: "Drama",
    itunesGenre: "Indie Rock"
  },
  {
    id: "smells-like-nirvana",
    band: "Smells Like Nirvana",
    searchTerm: "Nirvana",
    date: "2026-11-14",
    displayDate: "Saturday, Nov 14, 2026",
    doors: "7:30 PM / Show 8:30 PM",
    venue: "Rose Music Hall",
    support: "Dead & Bloated (STP Tribute)",
    genre: "Grunge / 90s Alternative",
    genreCategory: "Rock & Grunge",
    description: "Celebrated tribute celebrating the raw energy, grunge power, and timeless anthems of Kurt Cobain and Nirvana.",
    ticketUrl: "https://rosemusichall.com/event/smells-like-nirvana/",
    sampleTrack: "Smells Like Teen Spirit",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/49/4e/65494e02-b6d3-26d8-6b0c-9bd98dcf4d5d/mzaf_7665413316386155700.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/600x600bb.jpg",
    albumName: "Nevermind",
    itunesGenre: "Rock"
  },
  {
    id: "the-spooklights",
    band: "The Spooklights",
    searchTerm: "The Spooklights",
    date: "2026-11-20",
    displayDate: "Friday, Nov 20, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "Long Gone Gabe",
    genre: "Ozark Americana / Indie Folk",
    genreCategory: "Country & Americana",
    description: "Haunting harmonies, foot-stomping rhythms, and deep Ozark roots storytelling from Missouri favorites.",
    ticketUrl: "https://rosemusichall.com/event/the-spooklights/",
    sampleTrack: "O' Death",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/4d/09/32/4d093272-1997-1d1b-e2c1-c1613a3105b9/mzaf_18175749502788891497.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b3/5a/4b/b35a4b03-13da-67c1-18b1-6cb9f905ced1/195269265977.jpg/600x600bb.jpg",
    albumName: "MK Ultra",
    itunesGenre: "Americana"
  },
  {
    id: "hayden-coffman",
    band: "Hayden Coffman",
    searchTerm: "Hayden Coffman",
    date: "2026-11-21",
    displayDate: "Saturday, Nov 21, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "Bryce Mauldin",
    genre: "Country / Southern Rock",
    genreCategory: "Country & Americana",
    description: "Rising country sensation with tens of millions of streams, delivering high-octane modern honky-tonk anthems.",
    ticketUrl: "https://rosemusichall.com/event/hayden-coffman/",
    sampleTrack: "Take the Lonely",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/95/30/82/953082ad-e7ed-14f1-945f-3ff4f4c16a38/mzaf_636184225267864390.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e5/1e/a1/e51ea1f9-cb08-6a38-47bc-21db80167f3c/657467269350.jpg/600x600bb.jpg",
    albumName: "Beer Ain't Cold - EP",
    itunesGenre: "Country"
  },
  {
    id: "bring-owen-home",
    band: "Bring Owen Home",
    searchTerm: "Beth Bombara",
    date: "2026-11-28",
    displayDate: "Saturday, Nov 28, 2026",
    doors: "6:00 PM / Show 7:00 PM",
    venue: "Rose Music Hall",
    support: "Album Release & Benefit Concert • Free Admission",
    genre: "Acoustic / Indie Folk",
    genreCategory: "Folk & Acoustic",
    description: "Special community album release and benefit celebration bringing together Columbia artists for an unforgettable evening.",
    ticketUrl: "https://rosemusichall.com/",
    sampleTrack: "I Only Cry When I'm Alone",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7f/59/d6/7f59d605-5c44-b842-7305-36fdd1a6eb8a/mzaf_4797338420478990408.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/94/e5/db/94e5db0e-6f22-817c-0249-aff5ad84fe23/888295901697.jpg/600x600bb.jpg",
    albumName: "Evergreen",
    itunesGenre: "Rock"
  },
  {
    id: "the-gringos",
    band: "The Gringos",
    searchTerm: "The Gringos",
    date: "2026-12-02",
    displayDate: "Wednesday, Dec 2, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "With Bogus",
    genre: "Garage Rock / Indie Rock",
    genreCategory: "Indie & Alt",
    description: "High-energy riffs, fuzzy guitar tones, and driving rhythm from local indie rock troublemakers.",
    ticketUrl: "https://rosemusichall.com/event/the-gringos/",
    sampleTrack: "Fading",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b2/9b/2e/b29b2ed9-78e0-995a-72d2-1ef54ff50598/mzaf_1768713493778426230.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/23/f7/e9/23f7e93d-62eb-aeb0-f1db-f8e39af1af79/c6193422-f963-446c-93ae-0a6975a633ca.jpg/600x600bb.jpg",
    albumName: "Fading - Single",
    itunesGenre: "Indie Rock"
  },
  {
    id: "violet-undercurrents",
    band: "Violet & The Undercurrents",
    searchTerm: "Violet and the Undercurrents",
    date: "2026-12-04",
    displayDate: "Friday, Dec 4, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "Katy Guillen & The Drive + Beth Bombara",
    genre: "Indie Folk / Roots Rock",
    genreCategory: "Indie & Alt",
    description: "Columbia-bred folk-rock favorites pairing poetic songwriting with dynamic melodies and soulful musicianship.",
    ticketUrl: "https://rosemusichall.com/event/violet-and-the-undercurrents/",
    sampleTrack: "I Got You",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/b0/eb/3b/b0eb3b80-706b-c6ff-d369-50a0372a252e/mzaf_8932575689404034595.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/71/5a/22/715a2259-756e-139f-d82e-2d028e0f19e0/888295513296.jpg/600x600bb.jpg",
    albumName: "Nashville Sessions - EP",
    itunesGenre: "Alternative Folk"
  },
  {
    id: "molly-healey",
    band: "Molly Healey",
    searchTerm: "Molly Healey",
    date: "2026-12-10",
    displayDate: "Thursday, Dec 10, 2026",
    doors: "7:00 PM / Show 7:30 PM",
    venue: "Rose Music Hall",
    support: "Special Acoustic Guests",
    genre: "Symphonic Folk / Indie Cello",
    genreCategory: "Indie & Alt",
    description: "Multi-instrumentalist virtuosic violist and cellist looping layered harmonies, classical undertones, and folk soul.",
    ticketUrl: "https://rosemusichall.com/event/molly-healey/",
    sampleTrack: "With the Wind",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c0/65/0b/c0650bdb-6980-ccca-ece5-0c76b7827b23/mzaf_3782136751825333642.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bc/17/46/bc174648-45cc-f156-ca6f-004a507ea7ad/199502402679_cover.jpg/600x600bb.jpg",
    albumName: "With the Wind: An Orchestral Dance Music Suite",
    itunesGenre: "Indie Rock"
  },
  {
    id: "isaac-schneider",
    band: "Isaac Schneider & Backbone Road",
    searchTerm: "Isaac Schneider",
    date: "2026-12-11",
    displayDate: "Friday, Dec 11, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "With Connor Loveless",
    genre: "Modern Bluegrass / Americana",
    genreCategory: "Country & Americana",
    description: "Picking fast and singing high, bringing authentic bluegrass warmth and contemporary songwriting flair.",
    ticketUrl: "https://rosemusichall.com/event/isaac-schneider/",
    sampleTrack: "T-Shirt",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/f3/9a/91f39a88-4941-074f-eb3a-6c24996119a0/mzaf_18164310786177150865.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a3/f4/cd/a3f4cda3-6610-b29f-ac3d-7d4538c82355/artwork.jpg/600x600bb.jpg",
    albumName: "T-Shirt - Single",
    itunesGenre: "Country"
  },
  {
    id: "funky-butt-brass-band",
    band: "Funky Butt Brass Band",
    searchTerm: "Funky Butt Brass Band",
    date: "2026-12-12",
    displayDate: "Saturday, Dec 12, 2026",
    doors: "7:30 PM / Show 8:30 PM",
    venue: "Rose Music Hall",
    support: "Holiday Brass Bash",
    genre: "New Orleans Brass / Funk / Jazz",
    genreCategory: "Funk & Brass",
    description: "St. Louis powerhouse bringing classic New Orleans brass rhythms, infectious funk grooves, and holiday spirit.",
    ticketUrl: "https://rosemusichall.com/event/funky-butt-brass-band/",
    sampleTrack: "Funk in the Trunk",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/Music1/v4/08/74/2a/08742abb-c15b-0689-16ed-ef1efc04d601/mzaf_4788030784184131878.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/d9/21/d5/d921d58a-ab8d-4677-3b2c-c9563b768284/700261415017.jpg/600x600bb.jpg",
    albumName: "Sugar Sugar Whomp Whomp",
    itunesGenre: "Jazz"
  },
  {
    id: "preston-ary-band",
    band: "Preston Ary Band",
    searchTerm: "Preston Ary Band",
    date: "2026-12-18",
    displayDate: "Friday, Dec 18, 2026",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "Lesley Lyons Band & The Stardust Cowboys",
    genre: "Red Dirt Country / Honky Tonk",
    genreCategory: "Country & Americana",
    description: "Hard-hitting Red Dirt country with gritty vocals, crying steel guitars, and genuine heartland stories.",
    ticketUrl: "https://rosemusichall.com/event/preston-ary-band/",
    sampleTrack: "Drinkin' Alone Again",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cc/00/ce/cc00ce5f-b3c7-ddb7-9e12-ac1c4049c703/mzaf_6129446176783259169.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b2/c5/69/b2c569a1-62ad-72dd-23b6-17b623217587/7300340762877.jpg/600x600bb.jpg",
    albumName: "Drinkin' Alone Again - Single",
    itunesGenre: "Country"
  },
  {
    id: "hooten-hallers",
    band: "The Hooten Hallers",
    searchTerm: "The Hooten Hallers",
    date: "2026-12-31",
    displayDate: "Thursday, Dec 31, 2026",
    doors: "8:00 PM / Show 9:00 PM",
    venue: "Rose Music Hall",
    support: "New Year's Eve Extravaganza",
    genre: "Hillbilly Blues / Rock & Roll",
    genreCategory: "Rock & Grunge",
    description: "Raucous Missouri trio delivering explosive blues-rock, growling baritone vocals, and blistering lap steel guitar.",
    ticketUrl: "https://rosemusichall.com/event/the-hooten-hallers-nye/",
    sampleTrack: "Staying Away from Joe",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0a/a2/9d/0aa29d68-3a3f-1732-d00c-d9782bee2427/mzaf_15536787177186683048.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/24/ef/bd/24efbdff-d3b0-4e34-2f91-e4debced1c2f/128.jpg/600x600bb.jpg",
    albumName: "The Hooten Hallers",
    itunesGenre: "Rock"
  },
  {
    id: "damien-styles",
    band: "Damien Styles",
    searchTerm: "Damien Styles",
    date: "2027-02-12",
    displayDate: "Friday, Feb 12, 2027",
    doors: "7:00 PM / Show 8:00 PM",
    venue: "Rose Music Hall",
    support: "Damien Styles Tour 2027",
    genre: "Alt Rock / Pop-Punk",
    genreCategory: "Indie & Alt",
    description: "Energetic fusion of heavy guitars, infectious pop-punk hooks, and introspective modern alternative vibes.",
    ticketUrl: "https://rosemusichall.com/event/damien-styles/",
    sampleTrack: "Get Home Safe",
    previewAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5f/80/d7/5f80d7df-c34f-39c5-57a7-146c1a393e81/mzaf_174575964410589724.plus.aac.p.m4a",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ae/f8/50/aef850f7-15f0-36cb-41d4-520ab5d1beda/0.jpg/600x600bb.jpg",
    albumName: "Get Home Safe - Single",
    itunesGenre: "Rock"
  }
];

const GENRES = [
  "All",
  "Indie & Alt",
  "Country & Americana",
  "Rock & Grunge",
  "Funk & Brass",
  "Folk & Acoustic"
];

// App State
let activeConcertId = null;
let isPlaying = false;
let currentFilteredList = [...CONCERTS];
let selectedGenre = "All";
let searchQuery = "";
let currentSort = "date-asc";
let autoplayNext = true;

// DOM Elements
const audio = document.getElementById("globalAudioPlayer");
const concertsGrid = document.getElementById("concertsGrid");
const noResultsState = document.getElementById("noResultsState");
const genreFiltersContainer = document.getElementById("genreFiltersContainer");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("sortSelect");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const filteredCountBadge = document.getElementById("filteredCountBadge");
const totalShowsCount = document.getElementById("totalShowsCount");
const jukeboxModeBtn = document.getElementById("jukeboxModeBtn");
const jukeboxModeLabel = document.getElementById("jukeboxModeLabel");

// Player Elements
const masterPlayBtn = document.getElementById("masterPlayBtn");
const masterPlayIcon = document.getElementById("masterPlayIcon");
const masterPauseIcon = document.getElementById("masterPauseIcon");
const prevTrackBtn = document.getElementById("prevTrackBtn");
const nextTrackBtn = document.getElementById("nextTrackBtn");
const autoplayToggleBtn = document.getElementById("autoplayToggleBtn");
const autoplayIndicator = document.getElementById("autoplayIndicator");
const progressBar = document.getElementById("progressBar");
const progressBarContainer = document.getElementById("progressBarContainer");
const currentTimeLabel = document.getElementById("currentTimeLabel");
const durationLabel = document.getElementById("durationLabel");
const playerCoverArt = document.getElementById("playerCoverArt");
const playerGlowRing = document.getElementById("playerGlowRing");
const playerBandName = document.getElementById("playerBandName");
const playerTrackName = document.getElementById("playerTrackName");
const playerGenreBadge = document.getElementById("playerGenreBadge");
const playerConcertDate = document.getElementById("playerConcertDate");
const playerTicketLink = document.getElementById("playerTicketLink");
const volumeSlider = document.getElementById("volumeSlider");
const muteBtn = document.getElementById("muteBtn");
const volHighIcon = document.getElementById("volHighIcon");
const volMuteIcon = document.getElementById("volMuteIcon");
const visualizerCanvas = document.getElementById("audioVisualizer");

// Modal Elements
const detailsModal = document.getElementById("detailsModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCoverArt = document.getElementById("modalCoverArt");
const modalGenreBadge = document.getElementById("modalGenreBadge");
const modalBandTitle = document.getElementById("modalBandTitle");
const modalConcertDate = document.getElementById("modalConcertDate");
const modalVenueLocation = document.getElementById("modalVenueLocation");
const modalSupport = document.getElementById("modalSupport");
const modalDescription = document.getElementById("modalDescription");
const modalTrack = document.getElementById("modalTrack");
const modalPlayTrackBtn = document.getElementById("modalPlayTrackBtn");
const modalTicketBtn = document.getElementById("modalTicketBtn");

// Visualizer Setup
let canvasCtx = visualizerCanvas ? visualizerCanvas.getContext("2d") : null;
let animFrameId = null;

function init() {
  if (totalShowsCount) totalShowsCount.textContent = CONCERTS.length;
  renderGenreFilters();
  applyFiltersAndSort();
  setupAudioEvents();
  setupControlEvents();
  setupKeyboardShortcuts();
  startVisualizer();
}

/**
 * Days relative string helper
 */
function getRelativeDateLabel(dateStr) {
  const target = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0,0,0,0);
  const diffDays = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "Tonight!";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays > 1 && diffDays <= 7) return `This ${target.toLocaleDateString('en-US', { weekday: 'long' })}`;
  if (diffDays > 7 && diffDays <= 30) return `In ${diffDays} days`;
  return target.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Genre Pill rendering
 */
function renderGenreFilters() {
  genreFiltersContainer.innerHTML = "";
  GENRES.forEach(genre => {
    const btn = document.createElement("button");
    btn.className = `genre-filter-btn text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-500 transition ${genre === selectedGenre ? 'active' : ''}`;
    btn.textContent = genre;
    btn.addEventListener("click", () => {
      selectedGenre = genre;
      renderGenreFilters();
      applyFiltersAndSort();
    });
    genreFiltersContainer.appendChild(btn);
  });
}

/**
 * Apply filters (Genre + Search Query) and Sorting
 */
function applyFiltersAndSort() {
  let list = CONCERTS.filter(c => {
    const matchesGenre = (selectedGenre === "All") || (c.genreCategory === selectedGenre);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      c.band.toLowerCase().includes(q) ||
      c.sampleTrack.toLowerCase().includes(q) ||
      c.genre.toLowerCase().includes(q) ||
      c.displayDate.toLowerCase().includes(q) ||
      c.support.toLowerCase().includes(q);

    return matchesGenre && matchesSearch;
  });

  // Sort
  if (currentSort === "date-asc") {
    list.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (currentSort === "date-desc") {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (currentSort === "name-asc") {
    list.sort((a, b) => a.band.localeCompare(b.band));
  }

  currentFilteredList = list;
  if (filteredCountBadge) filteredCountBadge.textContent = list.length;
  renderConcertCards();
}

/**
 * Render Concert Cards Grid
 */
function renderConcertCards() {
  concertsGrid.innerHTML = "";

  if (currentFilteredList.length === 0) {
    noResultsState.classList.remove("hidden");
    concertsGrid.classList.add("hidden");
    return;
  }

  noResultsState.classList.add("hidden");
  concertsGrid.classList.remove("hidden");

  currentFilteredList.forEach(concert => {
    const isCurrentActive = (activeConcertId === concert.id);
    const isThisPlaying = (isCurrentActive && isPlaying);

    const card = document.createElement("div");
    card.className = `concert-card rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden group cursor-pointer ${isCurrentActive ? 'is-active' : ''}`;
    card.setAttribute("data-id", concert.id);

    const relativeDate = getRelativeDateLabel(concert.date);

    card.innerHTML = `
      <!-- Top Artwork & Quick Play Overlay -->
      <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 shadow-md mb-4 group/art">
        <img src="${concert.albumCover}" alt="${concert.band}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        
        <!-- Subtle gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none"></div>

        <!-- Date Tag Pill -->
        <div class="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-white text-xs font-semibold shadow">
          <svg class="w-3.5 h-3.5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${concert.displayDate.split(',')[1] || concert.displayDate}</span>
          <span class="text-[10px] text-rose-300 font-bold ml-1 px-1.5 py-0.2 rounded bg-rose-500/20">${relativeDate}</span>
        </div>

        <!-- Genre Pill -->
        <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-rose-500/30 text-[11px] font-bold text-rose-300">
          ${concert.genreCategory}
        </div>

        <!-- Center Big Play Button -->
        <button class="card-play-btn absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition duration-200 ${isThisPlaying ? 'opacity-100' : 'opacity-0 group-hover/art:opacity-100'}" aria-label="Play ${concert.band}">
          <div class="w-14 h-14 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-xl shadow-rose-950/80 transform transition group-hover/art:scale-110">
            ${isThisPlaying ? `
              <div class="flex items-center gap-1">
                <span class="eq-bar"></span>
                <span class="eq-bar"></span>
                <span class="eq-bar"></span>
                <span class="eq-bar"></span>
              </div>
            ` : `
              <svg class="w-7 h-7 ml-1 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            `}
          </div>
        </button>

        <!-- Sample Track Badge at bottom of art -->
        <div class="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
          <div class="flex items-center gap-1.5 truncate">
            <svg class="w-3.5 h-3.5 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
            <span class="text-slate-200 font-medium truncate">"${concert.sampleTrack}"</span>
          </div>
          <span class="text-[10px] text-slate-400 flex-shrink-0 font-mono ml-2">0:30 preview</span>
        </div>
      </div>

      <!-- Card Body: Band info & date -->
      <div class="flex flex-col flex-1">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="text-lg font-bold text-white font-heading tracking-tight group-hover:text-rose-400 transition leading-snug">
              ${concert.band}
            </h3>
            <p class="text-xs text-rose-300 font-medium mt-0.5">${concert.genre}</p>
          </div>
        </div>

        <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          ${concert.description}
        </p>

        <div class="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${concert.doors}</span>
          </div>
          <div class="flex items-center gap-1.5 truncate">
            <svg class="w-3.5 h-3.5 text-slate-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <span class="truncate">${concert.support}</span>
          </div>
        </div>
      </div>

      <!-- Card Actions -->
      <div class="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
        <button class="listen-now-btn flex-1 py-2 px-3 rounded-xl ${isThisPlaying ? 'bg-rose-600 text-white' : 'bg-slate-800/90 hover:bg-slate-700 text-slate-200'} font-semibold text-xs transition flex items-center justify-center gap-1.5">
          ${isThisPlaying ? '<span>Pause Preview</span>' : '<span>Listen Clip</span>'}
        </button>

        <button class="info-btn p-2 rounded-xl bg-slate-900 border border-slate-700/60 hover:bg-slate-800 text-slate-300 transition" title="Show Event Details & Bio">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>

        <a href="${concert.ticketUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-slate-900 border border-slate-700/60 hover:border-rose-500/50 hover:text-rose-400 text-slate-300 transition" title="Get Tickets from Rose Music Hall">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;

    // Event listeners on card
    const playBtn = card.querySelector(".card-play-btn");
    const listenNowBtn = card.querySelector(".listen-now-btn");
    const infoBtn = card.querySelector(".info-btn");

    const togglePlayback = (e) => {
      e.stopPropagation();
      playConcert(concert.id);
    };

    playBtn.addEventListener("click", togglePlayback);
    listenNowBtn.addEventListener("click", togglePlayback);
    
    infoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(concert);
    });

    card.addEventListener("click", () => {
      playConcert(concert.id);
    });

    concertsGrid.appendChild(card);
  });
}

/**
 * Play a concert by ID
 */
function playConcert(concertId) {
  const concert = CONCERTS.find(c => c.id === concertId);
  if (!concert) return;

  if (activeConcertId === concertId) {
    // Toggle play/pause
    if (audio.paused) {
      audio.play().catch(handleAudioError);
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  } else {
    // New track
    activeConcertId = concertId;
    audio.src = concert.previewAudio;
    audio.play().then(() => {
      isPlaying = true;
    }).catch(handleAudioError);
    updatePlayerBar(concert);
  }

  updatePlayerStateUI();
  renderConcertCards();
}

function handleAudioError(err) {
  console.warn("Audio playback interrupted or blocked:", err);
  isPlaying = false;
  updatePlayerStateUI();
}

/**
 * Update Bottom Player Bar UI
 */
function updatePlayerBar(concert) {
  playerCoverArt.src = concert.albumCover;
  playerCoverArt.alt = concert.band;
  playerBandName.textContent = concert.band;
  playerTrackName.textContent = `"${concert.sampleTrack}" (${concert.albumName || 'Preview'})`;
  playerConcertDate.textContent = `${concert.displayDate} • ${concert.doors}`;
  playerGenreBadge.textContent = concert.genre;
  playerGenreBadge.classList.remove("hidden");
  playerTicketLink.href = concert.ticketUrl;
  playerGlowRing.classList.remove("hidden");
}

function updatePlayerStateUI() {
  if (isPlaying) {
    masterPlayIcon.classList.add("hidden");
    masterPauseIcon.classList.remove("hidden");
    jukeboxModeLabel.textContent = "Playing Shows...";
    jukeboxModeBtn.classList.add("border-rose-500", "text-rose-400");
  } else {
    masterPlayIcon.classList.remove("hidden");
    masterPauseIcon.classList.add("hidden");
    jukeboxModeLabel.textContent = "Play All Shows";
    jukeboxModeBtn.classList.remove("border-rose-500", "text-rose-400");
  }
}

/**
 * Next / Previous track handling
 */
function playNextTrack() {
  if (currentFilteredList.length === 0) return;
  const currentIndex = currentFilteredList.findIndex(c => c.id === activeConcertId);
  let nextIndex = 0;
  if (currentIndex !== -1 && currentIndex < currentFilteredList.length - 1) {
    nextIndex = currentIndex + 1;
  }
  playConcert(currentFilteredList[nextIndex].id);
}

function playPrevTrack() {
  if (currentFilteredList.length === 0) return;
  const currentIndex = currentFilteredList.findIndex(c => c.id === activeConcertId);
  let prevIndex = currentFilteredList.length - 1;
  if (currentIndex > 0) {
    prevIndex = currentIndex - 1;
  }
  playConcert(currentFilteredList[prevIndex].id);
}

/**
 * Format Seconds to mm:ss
 */
function formatTime(secs) {
  if (isNaN(secs) || secs < 0) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

/**
 * Audio Events Setup
 */
function setupAudioEvents() {
  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeLabel.textContent = formatTime(audio.currentTime);
    durationLabel.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("play", () => {
    isPlaying = true;
    updatePlayerStateUI();
    renderConcertCards();
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    updatePlayerStateUI();
    renderConcertCards();
  });

  audio.addEventListener("ended", () => {
    if (autoplayNext) {
      playNextTrack();
    } else {
      isPlaying = false;
      updatePlayerStateUI();
      renderConcertCards();
    }
  });

  // Scrub bar interaction
  progressBarContainer.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekPercent = clickX / width;
    audio.currentTime = seekPercent * audio.duration;
  });
}

/**
 * Buttons & Controls Setup
 */
function setupControlEvents() {
  masterPlayBtn.addEventListener("click", () => {
    if (!activeConcertId) {
      if (currentFilteredList.length > 0) {
        playConcert(currentFilteredList[0].id);
      }
    } else {
      if (audio.paused) {
        audio.play().catch(handleAudioError);
      } else {
        audio.pause();
      }
    }
  });

  prevTrackBtn.addEventListener("click", playPrevTrack);
  nextTrackBtn.addEventListener("click", playNextTrack);

  jukeboxModeBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
    } else {
      if (!activeConcertId && currentFilteredList.length > 0) {
        playConcert(currentFilteredList[0].id);
      } else if (activeConcertId) {
        audio.play().catch(handleAudioError);
      }
    }
  });

  autoplayToggleBtn.addEventListener("click", () => {
    autoplayNext = !autoplayNext;
    if (autoplayNext) {
      autoplayIndicator.classList.replace("bg-slate-500", "bg-emerald-400");
      autoplayToggleBtn.classList.add("text-emerald-300", "border-emerald-500/40");
    } else {
      autoplayIndicator.classList.replace("bg-emerald-400", "bg-slate-500");
      autoplayToggleBtn.classList.remove("text-emerald-300", "border-emerald-500/40");
    }
  });

  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.classList.toggle("hidden", !searchQuery);
    applyFiltersAndSort();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    applyFiltersAndSort();
  });

  // Sort
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    applyFiltersAndSort();
  });

  resetFiltersBtn.addEventListener("click", () => {
    selectedGenre = "All";
    searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    renderGenreFilters();
    applyFiltersAndSort();
  });

  // Volume
  volumeSlider.addEventListener("input", (e) => {
    audio.volume = parseFloat(e.target.value);
    audio.muted = (audio.volume === 0);
    updateVolumeIcons();
  });

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
      volHighIcon.classList.add("hidden");
      volMuteIcon.classList.remove("hidden");
    } else {
      volHighIcon.classList.remove("hidden");
      volMuteIcon.classList.add("hidden");
    }
  });

  // Modal
  closeModalBtn.addEventListener("click", closeModal);
  detailsModal.addEventListener("click", (e) => {
    if (e.target === detailsModal) closeModal();
  });
}

function updateVolumeIcons() {
  if (audio.muted || audio.volume === 0) {
    volHighIcon.classList.add("hidden");
    volMuteIcon.classList.remove("hidden");
  } else {
    volHighIcon.classList.remove("hidden");
    volMuteIcon.classList.add("hidden");
  }
}

/**
 * Modal Handling
 */
function openModal(concert) {
  modalCoverArt.src = concert.albumCover;
  modalGenreBadge.textContent = concert.genre;
  modalBandTitle.textContent = concert.band;
  modalConcertDate.textContent = `${concert.displayDate} • ${concert.doors}`;
  modalVenueLocation.textContent = concert.venue;
  modalSupport.textContent = concert.support;
  modalDescription.textContent = concert.description;
  modalTrack.textContent = `Sample Track: "${concert.sampleTrack}" (${concert.albumName || 'Album preview'})`;
  modalTicketBtn.href = concert.ticketUrl;

  modalPlayTrackBtn.onclick = () => {
    playConcert(concert.id);
    closeModal();
  };

  detailsModal.classList.remove("hidden");
}

function closeModal() {
  detailsModal.classList.add("hidden");
}

/**
 * Keyboard Shortcuts
 */
function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    // Avoid triggering when user is typing in search
    if (document.activeElement === searchInput) return;

    if (e.code === "Space") {
      e.preventDefault();
      masterPlayBtn.click();
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      playNextTrack();
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      playPrevTrack();
    } else if (e.key === "m" || e.key === "M") {
      muteBtn.click();
    } else if (e.code === "Escape") {
      closeModal();
    }
  });
}

/**
 * Animated Waveform Visualizer
 */
function startVisualizer() {
  if (!visualizerCanvas || !canvasCtx) return;
  const numBars = 20;
  const barWidth = 4;
  const gap = 4;

  function renderFrame(time) {
    canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

    for (let i = 0; i < numBars; i++) {
      let barHeight = 2;
      if (isPlaying) {
        // Dynamic simulated wave using sin functions based on time and index
        const freq1 = Math.sin(time * 0.008 + i * 0.4);
        const freq2 = Math.cos(time * 0.005 + i * 0.2);
        const intensity = (freq1 + freq2 + 2) / 4;
        barHeight = Math.max(3, intensity * (visualizerCanvas.height - 2));
      }

      const x = i * (barWidth + gap) + 4;
      const y = (visualizerCanvas.height - barHeight) / 2;

      // Color gradient
      const gradient = canvasCtx.createLinearGradient(0, y, 0, y + barHeight);
      gradient.addColorStop(0, '#f43f5e');
      gradient.addColorStop(1, '#f59e0b');

      canvasCtx.fillStyle = gradient;
      canvasCtx.beginPath();
      canvasCtx.roundRect(x, y, barWidth, barHeight, 2);
      canvasCtx.fill();
    }

    animFrameId = requestAnimationFrame(renderFrame);
  }

  animFrameId = requestAnimationFrame(renderFrame);
}

// Initialize on DOM load
window.addEventListener("DOMContentLoaded", init);
