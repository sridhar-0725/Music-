// Spotify Clone - Premium Music Streaming JavaScript
// Songs data
const songs = [
    {
        title: "Dheema",
        artist: "Tamil Hits",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/q_auto/f_auto/v1778685686/Dheema_drmaw1.mp3"
    },
    {
        title: "Enakenna Yaarum Illaye",
        artist: "Tamil Melody",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/q_auto/f_auto/v1778685684/Enakenna_Yaarum_Illaye_f7knoy.mp3"
    },
    {
        title: "Oru Devadhai",
        artist: "Romantic Tamil",
        cover: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/q_auto/f_auto/v1778685681/Oru-Devadhai_zm27ly.mp3"
    },
    {
        title: "Veetukku Veetukku Vasapadi",
        artist: "Mass Tamil",
        cover: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/q_auto/f_auto/v1778685681/Veetukku-Veetukku-Vasapadi-MassTamilan.io_fnuvbc.mp3"
    },
    {
        title: "Sudasuda Thooral",
        artist: "Tamil Love",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/q_auto/f_auto/v1778685672/Sudasuda-Thooral_mzmvof.mp3"
    },
    {
        title: "Vizhi Veekura",
        artist: "Tamil Melody",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778692712/Vizhi_Veekura_azpd0h.mp3"
    },
    {
        title: "Velicha Poove",
        artist: "Love Hits",
        cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778692753/Velicha-Poove_tpuc13.mp3"
    },
    {
        title: "Marakkavillayae",
        artist: "Tamil Sad Hits",
        cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778692884/Marakkavillayae-MassTamilan.org_rdmwfc.mp3"
    },
    {
        title: "Nijamellam Maranthupochu",
        artist: "Tamil Emotional",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778692894/Nijamellam-Maranthupochu_osyw3x.mp3"
    },
    {
        title: "Pavazha Malli",
        artist: "Tamil Romantic",
        cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778692904/Pavazha_Malli_siohan.mp3"
    },
    {
        title: "Boomi Enna Suthudhe",
        artist: "Tamil Feel Good",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778692971/Boomi-Enna-Suthudhe_nauphq.mp3"
    },
    {
        title: "Uyire Un Uyirena",
        artist: "Tamil Love Hits",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759410/Uyire-Un-Uyirena_zxxaul.mp3"
    },
    {
        title: "I Think They Call This Love",
        artist: "International Acoustic",
        cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759415/I_Think_They_Call_This_Love_Cover_ugtb5y.mp3"
    },
    {
        title: "Karuppa Kooda Va",
        artist: "Mass Tamil",
        cover: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759426/Karuppa-Kooda-Va-MassTamilan.dev_pbvebi.mp3"
    },
    {
        title: "Avalukena",
        artist: "Tamil Melody",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759433/Avalukena_PenduJatt.Com.Se_l5ovoe.mp3"
    },
    {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759443/Stephen_Sanchez_-_Until_I_Found_You__mp3.pm_asiiaj.mp3"
    },
    {
        title: "Un Paarvayil",
        artist: "Tamil Romantic",
        cover: "https://images.unsplash.com/photo-1501612780327-45045538702b",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759452/Un_Paarvayil_Male_nltnpz.mp3"
    },
    {
        title: "Pachamala Poovu",
        artist: "Tamil Feel Good",
        cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759455/Pachamala_Poovu_owkodj.mp3"
    },
    {
        title: "Lonely",
        artist: "Akon",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759456/Lonely_-_Akon__mp3.pm_kh1iqk.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759464/Edd_Sheeran_-_Perfect__mp3.pm_ubqyhr.mp3"
    },
    {
        title: "Frangipani Acoustic",
        artist: "Acoustic Chill",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
        audio: "https://res.cloudinary.com/dyyqdjvih/video/upload/v1778759469/vidssave.com_Frangipani_Acoustic_256kbps_dw7zxl.webm"
    }
];

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navItems = document.querySelectorAll('.nav-item');
const playlistItems = document.querySelectorAll('.playlist-item');
const contentSections = document.querySelectorAll('.content-section');
const searchInput = document.getElementById('search-input');
const searchResultsGrid = document.getElementById('search-results-grid');

// Music Player Elements
const audio = new Audio();
audio.preload = 'auto';
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.getElementById('progress-fill');
const progressHandle = document.getElementById('progress-handle');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeBar = document.querySelector('.volume-bar');
const volumeFill = document.getElementById('volume-fill');
const volumeHandle = document.getElementById('volume-handle');
const playerThumbnail = document.getElementById('player-thumbnail');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const favoriteBtn = document.getElementById('player-favorite');

const likedCountBadge = document.getElementById('liked-count-badge');
const likedCountText = document.getElementById('liked-count');
const likedSongGrid = document.getElementById('liked-song-grid');
const createPlaylistButton = document.getElementById('new-playlist-btn');
const customPlaylistList = document.getElementById('custom-playlist-list');
const playlistModal = document.getElementById('playlist-modal');
const closePlaylistModal = document.getElementById('close-playlist-modal');
const playlistModalList = document.getElementById('playlist-modal-list');
const newPlaylistNameInput = document.getElementById('new-playlist-name');
const createPlaylistFromModal = document.getElementById('create-playlist-from-modal');
const playlistModalFeedback = document.getElementById('playlist-modal-feedback');
const queuePanel = document.getElementById('queue-panel');
const queueList = document.getElementById('queue-list');
const queueCount = document.getElementById('queue-count');
const closeQueuePanel = document.getElementById('close-queue-panel');
const mobileNavButtons = document.querySelectorAll('.mobile-bottom-nav button');

// State variables
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 0; // 0: no repeat, 1: repeat all, 2: repeat one
let shuffledIndices = [];
let volume = 0.7;
let currentSection = 'home';
let likedSongs = JSON.parse(localStorage.getItem('spotify-liked')) || [];
let customPlaylists = JSON.parse(localStorage.getItem('spotify-custom-playlists')) || [];
let recentlyPlayed = JSON.parse(localStorage.getItem('spotify-recently-played')) || [];
let queue = JSON.parse(localStorage.getItem('spotify-queue')) || [];
let activeCustomPlaylist = null;
let modalSongIndex = null;
let playlists = JSON.parse(localStorage.getItem('spotify-playlists')) || {
    romantic: [],
    melody: [],
    mass: [],
    chill: [],
    sad: []
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadPlaylists();
    populateSongGrids();
    renderRecentlyPlayed();
    renderLikedSongs();
    renderSidebarPlaylists();
    updatePlayerDisplay();
});

function initializeApp() {
    // Set initial volume
    audio.volume = volume;
    volumeFill.style.width = `${volume * 100}%`;
    volumeHandle.style.left = `${volume * 100}%`;

    // Load initial song
    loadSong(currentSongIndex);

    // Hide loading screen after a delay
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);
}

function openCreatePlaylistPrompt() {
    switchSection('create-playlist');
    newPlaylistNameInput.focus();
}

function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleSidebar);

    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => switchSection(item.dataset.section));
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', () => switchToPlaylist(item.dataset.playlist));
    });

    // Search
    searchInput.addEventListener('input', handleSearch);

    // Music player controls
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);

    // Progress bar
    progressBar.addEventListener('click', seekToPosition);
    progressBar.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', dragProgress);
    document.addEventListener('mouseup', stopDragging);

    // Volume control
    volumeBar.addEventListener('click', setVolume);
    volumeBar.addEventListener('mousedown', startVolumeDragging);
    document.addEventListener('mousemove', dragVolume);
    document.addEventListener('mouseup', stopVolumeDragging);

    // Audio events
    audio.addEventListener('loadedmetadata', updateTotalTime);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleSongEnd);
    audio.addEventListener('play', () => updatePlayPauseButton(true));
    audio.addEventListener('pause', () => updatePlayPauseButton(false));

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Favorite button
    favoriteBtn.addEventListener('click', toggleFavorite);

    // Playlist creation and modal
    createPlaylistButton.addEventListener('click', () => openPlaylistModal());
    closePlaylistModal.addEventListener('click', closePlaylistModalPanel);
    createPlaylistFromModal.addEventListener('click', () => createPlaylist(newPlaylistNameInput.value.trim()));
    newPlaylistNameInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            createPlaylist(newPlaylistNameInput.value.trim());
        }
    });
    window.addEventListener('beforeunload', saveState);

    // Queue panel
    document.getElementById('queue-btn').addEventListener('click', toggleQueuePanel);
    closeQueuePanel.addEventListener('click', toggleQueuePanel);

    // Mobile bottom nav
    mobileNavButtons.forEach(button => {
        button.addEventListener('click', () => switchSection(button.dataset.section));
    });

    // Song card clicks
    document.addEventListener('click', handleSongCardClick);
}

function toggleSidebar() {
    sidebar.classList.toggle('active');
    if (window.innerWidth <= 1024) {
        if (sidebar.classList.contains('active')) {
            mainContent.style.marginLeft = '240px';
        } else {
            mainContent.style.marginLeft = '0';
        }
    }
}

function switchSection(sectionName) {
    // Update active nav item
    navItems.forEach(item => item.classList.remove('active'));
    const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }

    // Update mobile bottom nav active state
    mobileNavButtons.forEach(button => button.classList.remove('active'));
    const activeMobileButton = document.querySelector(`.mobile-bottom-nav button[data-section="${sectionName}"]`);
    if (activeMobileButton) {
        activeMobileButton.classList.add('active');
    }

    // Show corresponding content section
    contentSections.forEach(section => section.classList.remove('active'));
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    currentSection = sectionName;

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
        mainContent.style.marginLeft = '0';
    }
}

function switchToPlaylist(playlistName) {
    // Update active playlist item
    playlistItems.forEach(item => item.classList.remove('active'));
    const playlistNavItem = document.querySelector(`[data-playlist="${playlistName}"]`);
    if (playlistNavItem) {
        playlistNavItem.classList.add('active');
    }

    // Show playlist view
    contentSections.forEach(section => section.classList.remove('active'));
    const playlistSection = document.getElementById(`playlist-${playlistName}`);
    if (playlistSection) {
        playlistSection.classList.add('active');
    }

    currentSection = `playlist-${playlistName}`;

    // Populate playlist songs
    populatePlaylistSongs(playlistName);

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
        mainContent.style.marginLeft = '0';
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (query === '') {
        switchSection('home');
        return;
    }

    switchSection('search');

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
    );

    displaySearchResults(filteredSongs);
}

function displaySearchResults(results) {
    searchResultsGrid.innerHTML = '';

    if (results.length === 0) {
        searchResultsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--spotify-text);">No songs found</p>';
        return;
    }

    results.forEach((song, index) => {
        const songCard = createSongCard(song, songs.indexOf(song));
        searchResultsGrid.appendChild(songCard);
    });
}

function populateSongGrids() {
    const trendingGrid = document.getElementById('trending-songs');
    const recentlyPlayedGrid = document.getElementById('recently-played');
    const romanticGrid = document.getElementById('romantic-playlist');
    const melodyGrid = document.getElementById('melody-collection');
    const massGrid = document.getElementById('mass-songs');
    const chillGrid = document.getElementById('chill-playlist');

    // Populate with all songs for demo (in real app, these would be different categories)
    songs.forEach((song, index) => {
        const songCard = createSongCard(song, index);

        trendingGrid.appendChild(songCard.cloneNode(true));
        recentlyPlayedGrid.appendChild(songCard.cloneNode(true));
        romanticGrid.appendChild(songCard.cloneNode(true));
        melodyGrid.appendChild(songCard.cloneNode(true));
        massGrid.appendChild(songCard.cloneNode(true));
        chillGrid.appendChild(songCard.cloneNode(true));
    });
}

function createSongCard(song, index) {
    const liked = likedSongs.includes(index);
    const card = document.createElement('div');
    card.className = 'song-card';
    card.dataset.song = index;
    if (index === currentSongIndex) {
        card.classList.add('playing');
    }

    card.innerHTML = `
        <div class="song-actions">
            <button class="heart-btn ${liked ? 'active' : ''}" data-action="heart" data-song="${index}" aria-label="Toggle liked">
                <i class="${liked ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="more-btn" data-action="options" data-song="${index}" aria-label="Add to playlist">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </div>
        <div class="card-image">
            <img src="${song.cover}" alt="${song.title}">
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="card-info">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        </div>
    `;

    return card;
}

function populatePlaylistSongs(playlistName) {
    const playlistContainer = document.getElementById(`playlist-${playlistName}-songs`);
    playlistContainer.innerHTML = '';

    const playlistSongs = playlists[playlistName] || [];

    if (playlistSongs.length === 0) {
        playlistContainer.innerHTML = '<p style="text-align: center; color: var(--spotify-text); padding: 2rem;">No songs in this playlist yet</p>';
        return;
    }

    playlistSongs.forEach((songIndex, index) => {
        const song = songs[songIndex];
        const songElement = document.createElement('div');
        songElement.className = 'playlist-song';
        songElement.dataset.song = songIndex;

        songElement.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-thumbnail">
                <img src="${song.cover}" alt="${song.title}">
            </div>
            <div class="song-details">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <div class="song-duration">3:24</div>
        `;

        playlistContainer.appendChild(songElement);
    });
}

function loadSong(index) {
    const song = songs[index];
    audio.src = song.audio;
    audio.preload = 'auto';
    audio.load();
    playerThumbnail.src = song.cover;
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    updateLikedUI();
    updateRecentlyPlayed(index);
    updateQueueHighlight();

    // Update active song cards
    document.querySelectorAll('.song-card, .playlist-song, .featured-card').forEach(card => {
        card.classList.remove('playing');
    });

    document.querySelectorAll(`[data-song="${index}"]`).forEach(card => {
        card.classList.add('playing');
    });
}

function saveState() {
    localStorage.setItem('spotify-liked', JSON.stringify(likedSongs));
    localStorage.setItem('spotify-custom-playlists', JSON.stringify(customPlaylists));
    localStorage.setItem('spotify-recently-played', JSON.stringify(recentlyPlayed));
    localStorage.setItem('spotify-queue', JSON.stringify(queue));
}

function updateLikedUI() {
    const likedCount = likedSongs.length;
    if (likedCountText) likedCountText.textContent = `${likedCount} liked`;
    if (likedCountBadge) likedCountBadge.textContent = likedCount;

    document.querySelectorAll('.heart-btn').forEach(btn => {
        const index = parseInt(btn.dataset.song);
        const icon = btn.querySelector('i');
        if (likedSongs.includes(index)) {
            btn.classList.add('active');
            icon.className = 'fas fa-heart';
        } else {
            btn.classList.remove('active');
            icon.className = 'far fa-heart';
        }
    });

    renderLikedSongs();
}

function renderLikedSongs() {
    likedSongGrid.innerHTML = '';
    if (likedSongs.length === 0) {
        likedSongGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--spotify-text);">No liked songs yet. Like songs to save them here.</p>';
        return;
    }
    likedSongs.forEach(index => {
        const song = songs[index];
        const songCard = createSongCard(song, index);
        likedSongGrid.appendChild(songCard);
    });
}

function toggleLikedSong(index) {
    const position = likedSongs.indexOf(index);
    if (position === -1) {
        likedSongs.unshift(index);
        playlistModalFeedback.textContent = 'Added to Liked Songs';
    } else {
        likedSongs.splice(position, 1);
        playlistModalFeedback.textContent = 'Removed from Liked Songs';
    }
    saveState();
    updateLikedUI();
}

function openPlaylistModal(index = null) {
    modalSongIndex = index;
    playlistModal.classList.remove('hidden');
    newPlaylistNameInput.value = '';
    playlistModalFeedback.textContent = '';
    renderPlaylistModal();
    newPlaylistNameInput.focus();
}

function closePlaylistModalPanel() {
    playlistModal.classList.add('hidden');
    modalSongIndex = null;
}

function renderPlaylistModal() {
    playlistModalList.innerHTML = '';
    if (!customPlaylists.length) {
        playlistModalList.innerHTML = '<p style="color: var(--spotify-text);">Create a playlist first. Then add songs to it.</p>';
        return;
    }
    customPlaylists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'playlist-modal-card';
        item.dataset.playlistId = playlist.id;
        item.innerHTML = `<span>${playlist.name} (${playlist.songs.length})</span><i class="fas fa-chevron-right"></i>`;
        item.addEventListener('click', () => addSongToPlaylist(playlist.id, modalSongIndex));
        playlistModalList.appendChild(item);
    });
}

function createPlaylist(name) {
    if (!name) {
        playlistModalFeedback.textContent = 'Playlist name cannot be empty.';
        return;
    }
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    if (customPlaylists.some(pl => pl.id === slug)) {
        playlistModalFeedback.textContent = 'Playlist already exists.';
        return;
    }
    const playlist = { id: slug, name, songs: [] };
    customPlaylists.push(playlist);

    if (modalSongIndex !== null && modalSongIndex !== undefined) {
        playlist.songs.push(modalSongIndex);
        playlistModalFeedback.textContent = 'Playlist created and song added successfully.';
    } else {
        playlistModalFeedback.textContent = 'Playlist created successfully.';
    }

    saveState();
    renderSidebarPlaylists();
    renderCustomPlaylistCards();
    renderPlaylistModal();
    newPlaylistNameInput.value = '';
}

function renderSidebarPlaylists() {
    customPlaylistList.innerHTML = '';
    customPlaylists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'playlist-card';
        item.dataset.playlistId = playlist.id;
        item.innerHTML = `
            <div class="playlist-info">
                <h4>${playlist.name}</h4>
                <p>${playlist.songs.length} songs</p>
            </div>
            <div class="playlist-actions">
                <button class="rename-playlist" data-playlist-id="${playlist.id}">Rename</button>
                <button class="delete-playlist" data-playlist-id="${playlist.id}">Delete</button>
            </div>
        `;
        item.addEventListener('click', e => {
            if (e.target.closest('button')) return;
            openCustomPlaylist(playlist.id);
        });
        const renameBtn = item.querySelector('.rename-playlist');
        const deleteBtn = item.querySelector('.delete-playlist');
        if (renameBtn) {
            renameBtn.addEventListener('click', e => {
                e.stopPropagation();
                const newName = prompt('Enter a new name for this playlist:', playlist.name);
                if (newName) {
                    playlist.name = newName.trim();
                    saveState();
                    renderSidebarPlaylists();
                    if (activeCustomPlaylist?.id === playlist.id) renderCustomPlaylistView();
                }
            });
        }
        if (deleteBtn) {
            deleteBtn.addEventListener('click', e => {
                e.stopPropagation();
                if (confirm(`Delete playlist "${playlist.name}"?`)) {
                    customPlaylists = customPlaylists.filter(pl => pl.id !== playlist.id);
                    if (activeCustomPlaylist?.id === playlist.id) activeCustomPlaylist = null;
                    saveState();
                    renderSidebarPlaylists();
                    renderCustomPlaylistView();
                }
            });
        }
        customPlaylistList.appendChild(item);
    });
}

function renderCustomPlaylistCards() {
    renderSidebarPlaylists();
}

function openCustomPlaylist(id) {
    activeCustomPlaylist = customPlaylists.find(play => play.id === id);
    if (!activeCustomPlaylist) return;
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById('custom-playlist-view').classList.add('active');
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.playlist-card').forEach(card => card.classList.remove('active'));
    renderCustomPlaylistView();
}

function renderCustomPlaylistView() {
    if (!activeCustomPlaylist) return;
    const title = document.getElementById('custom-playlist-title');
    const description = document.getElementById('custom-playlist-description');
    const count = document.getElementById('custom-playlist-count');
    const cover = document.getElementById('custom-playlist-cover');
    const songContainer = document.getElementById('custom-playlist-songs');

    title.textContent = activeCustomPlaylist.name;
    description.textContent = `${activeCustomPlaylist.songs.length} songs · Playlist created by you`;
    count.textContent = `${activeCustomPlaylist.songs.length} songs`;
    cover.style.backgroundImage = `linear-gradient(135deg, rgba(29,185,84,0.2), rgba(0,0,0,0.7)), url(${songs[activeCustomPlaylist.songs[0]]?.cover || songs[0].cover})`;
    cover.style.backgroundSize = 'cover';
    cover.style.backgroundPosition = 'center';

    songContainer.innerHTML = '';
    if (!activeCustomPlaylist.songs.length) {
        songContainer.innerHTML = '<p style="text-align:center;color:var(--spotify-text);padding:2rem;">Playlist is empty. Add songs using the three-dot menu.</p>';
        return;
    }
    activeCustomPlaylist.songs.forEach((songIndex, idx) => {
        const song = songs[songIndex];
        const row = document.createElement('div');
        row.className = 'playlist-song';
        row.dataset.song = songIndex;
        row.innerHTML = `
            <div class="song-number">${idx + 1}</div>
            <div class="song-thumbnail"><img src="${song.cover}" alt="${song.title}"></div>
            <div class="song-details"><h4>${song.title}</h4><p>${song.artist}</p></div>
            <div class="song-duration">${formatTime(215)}</div>
            <button class="delete-playlist-song" data-song="${songIndex}"><i class="fas fa-trash-alt"></i></button>
        `;
        songContainer.appendChild(row);
    });
}

function addSongToPlaylist(playlistId, songIndex) {
    const playlist = customPlaylists.find(pl => pl.id === playlistId);
    if (!playlist || songIndex === null || songIndex === undefined) return;
    if (playlist.songs.includes(songIndex)) {
        playlistModalFeedback.textContent = 'Song already in playlist';
        return;
    }
    playlist.songs.push(songIndex);
    saveState();
    playlistModalFeedback.textContent = 'Song added to playlist';
    renderSidebarPlaylists();
    if (activeCustomPlaylist?.id === playlistId) renderCustomPlaylistView();
}

function removeSongFromPlaylist(playlistId, songIndex) {
    const playlist = customPlaylists.find(pl => pl.id === playlistId);
    if (!playlist) return;
    playlist.songs = playlist.songs.filter(index => index !== songIndex);
    saveState();
    if (activeCustomPlaylist?.id === playlistId) renderCustomPlaylistView();
}

function updateRecentlyPlayed(index) {
    recentlyPlayed = recentlyPlayed.filter(id => id !== index);
    recentlyPlayed.unshift(index);
    if (recentlyPlayed.length > 20) recentlyPlayed.pop();
    saveState();
    renderRecentlyPlayed();
}

function renderRecentlyPlayed() {
    const recentlyPlayedGrid = document.getElementById('recently-played');
    recentlyPlayedGrid.innerHTML = '';
    if (!recentlyPlayed.length) {
        recentlyPlayedGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align:center;color:var(--spotify-text);">Play songs to populate recently played.</p>';
        return;
    }
    recentlyPlayed.forEach(index => {
        const song = songs[index];
        const songCard = createSongCard(song, index);
        recentlyPlayedGrid.appendChild(songCard);
    });
}

function toggleQueuePanel() {
    if (queuePanel) {
        queuePanel.classList.toggle('visible');
    }
    renderQueue();
}

function renderQueue() {
    queueList.innerHTML = '';
    queueCount.textContent = `${queue.length} songs`;
    if (!queue.length) {
        queueList.innerHTML = '<p style="color:var(--spotify-text);text-align:center;">Queue is empty.</p>';
        return;
    }
    queue.forEach((songIndex, idx) => {
        const song = songs[songIndex];
        const item = document.createElement('div');
        item.className = 'queue-track';
        item.draggable = true;
        item.dataset.index = idx;
        item.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="queue-meta">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <button class="remove-queue-song" data-index="${idx}"><i class="fas fa-trash-alt"></i></button>
        `;
        item.addEventListener('dragstart', handleQueueDragStart);
        item.addEventListener('dragover', e => e.preventDefault());
        item.addEventListener('drop', handleQueueDrop);
        item.querySelector('.remove-queue-song').addEventListener('click', e => {
            e.stopPropagation();
            removeFromQueue(idx);
        });
        item.addEventListener('click', () => {
            playSong(songIndex);
            toggleQueuePanel();
        });
        queueList.appendChild(item);
    });
}

function removeFromQueue(index) {
    queue.splice(index, 1);
    saveState();
    renderQueue();
}

function handleQueueDragStart(e) {
    e.dataTransfer.setData('text/plain', e.currentTarget.dataset.index);
    e.currentTarget.classList.add('dragging');
}

function handleQueueDrop(e) {
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const dropIndex = parseInt(e.currentTarget.dataset.index);
    if (draggedIndex === dropIndex) return;
    const [moved] = queue.splice(draggedIndex, 1);
    queue.splice(dropIndex, 0, moved);
    saveState();
    renderQueue();
}

function addToQueue(index) {
    if (!queue.includes(index)) queue.push(index);
    saveState();
    renderQueue();
}

function updateQueueHighlight() {
    document.querySelectorAll('.queue-track').forEach(track => {
        track.classList.toggle('active', parseInt(track.dataset.index) === queue.indexOf(currentSongIndex));
    });
}

function handleSongCardClick(e) {
    const actionButton = e.target.closest('[data-action]');
    if (actionButton) {
        const action = actionButton.dataset.action;
        const index = parseInt(actionButton.dataset.song);
        if (action === 'heart') {
            toggleLikedSong(index);
        } else if (action === 'options') {
            openPlaylistModal(index);
        }
        e.stopPropagation();
        return;
    }
    const songCard = e.target.closest('.song-card, .playlist-song, .featured-card');
    if (!songCard) return;

    const songIndex = parseInt(songCard.dataset.song);
    if (isNaN(songIndex)) return;

    playSong(songIndex);
}

function playSong(index) {
    currentSongIndex = index;
    loadSong(index);
    audio.play();
    isPlaying = true;
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function updatePlayPauseButton(playing) {
    const icon = playPauseBtn.querySelector('i');
    if (playing) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

function playPrevious() {
    let newIndex;
    if (isShuffled) {
        const currentPos = shuffledIndices.indexOf(currentSongIndex);
        newIndex = currentPos > 0 ? shuffledIndices[currentPos - 1] : shuffledIndices[shuffledIndices.length - 1];
    } else {
        newIndex = currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
    }
    playSong(newIndex);
}

function playNext() {
    let newIndex;
    if (isShuffled) {
        const currentPos = shuffledIndices.indexOf(currentSongIndex);
        newIndex = currentPos < shuffledIndices.length - 1 ? shuffledIndices[currentPos + 1] : shuffledIndices[0];
    } else {
        newIndex = currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
    }
    playSong(newIndex);
}

function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);

    if (isShuffled) {
        shuffledIndices = [...Array(songs.length).keys()].sort(() => Math.random() - 0.5);
    }
}

function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    repeatBtn.classList.toggle('active', repeatMode > 0);

    if (repeatMode === 2) {
        repeatBtn.querySelector('i').className = 'fas fa-redo-alt';
    } else {
        repeatBtn.querySelector('i').className = 'fas fa-redo';
    }
}

function handleSongEnd() {
    if (repeatMode === 2) {
        // Repeat one
        audio.currentTime = 0;
        audio.play();
    } else {
        // Repeat all or no repeat
        playNext();
    }
}

function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progress}%`;
    progressHandle.style.left = `${progress}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
}

function updateTotalTime() {
    totalTimeEl.textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function seekToPosition(e) {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * audio.duration;
    audio.currentTime = newTime;
}

let isDraggingProgress = false;
function startDragging() {
    isDraggingProgress = true;
}

function dragProgress(e) {
    if (!isDraggingProgress) return;
    seekToPosition(e);
}

function stopDragging() {
    isDraggingProgress = false;
}

function setVolume(e) {
    const rect = volumeBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    volume = percentage;
    audio.volume = volume;
    volumeFill.style.width = `${volume * 100}%`;
    volumeHandle.style.left = `${volume * 100}%`;
}

let isDraggingVolume = false;
function startVolumeDragging() {
    isDraggingVolume = true;
}

function dragVolume(e) {
    if (!isDraggingVolume) return;
    setVolume(e);
}

function stopVolumeDragging() {
    isDraggingVolume = false;
}

function handleKeyboardShortcuts(e) {
    // Don't trigger shortcuts when typing in input fields
    if (e.target.tagName === 'INPUT') return;

    switch (e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowRight':
            e.preventDefault();
            playNext();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            playPrevious();
            break;
    }
}

function toggleFavorite() {
    favoriteBtn.classList.toggle('active');
    const icon = favoriteBtn.querySelector('i');
    if (favoriteBtn.classList.contains('active')) {
        icon.className = 'fas fa-heart';
    } else {
        icon.className = 'far fa-heart';
    }
}

function updatePlayerDisplay() {
    loadSong(currentSongIndex);
}

function loadPlaylists() {
    likedSongs = (JSON.parse(localStorage.getItem('spotify-liked')) || []).map(Number).filter(i => !isNaN(i) && i >= 0 && i < songs.length);
    customPlaylists = JSON.parse(localStorage.getItem('spotify-custom-playlists')) || [];
    recentlyPlayed = (JSON.parse(localStorage.getItem('spotify-recently-played')) || []).map(Number).filter(i => !isNaN(i) && i >= 0 && i < songs.length);
    queue = (JSON.parse(localStorage.getItem('spotify-queue')) || []).map(Number).filter(i => !isNaN(i) && i >= 0 && i < songs.length);
    playlists = JSON.parse(localStorage.getItem('spotify-playlists')) || {
        romantic: [],
        melody: [],
        mass: [],
        chill: [],
        sad: []
    };
    renderLikedSongs();
    renderRecentlyPlayed();
    renderSidebarPlaylists();
}

// Responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove('active');
        mainContent.style.marginLeft = '240px';
    } else {
        mainContent.style.marginLeft = '0';
    }
});

// Initialize with home section
switchSection('home');