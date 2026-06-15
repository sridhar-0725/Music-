# Spotify Clone – Premium Music Streaming Website

A modern, responsive, Spotify-inspired music streaming web application built using HTML, CSS, and Vanilla JavaScript. The application provides an immersive music listening experience with playlist management, real-time controls, search functionality, and persistent user preferences.

## Features

### Premium Music Experience

* Play, Pause, Next and Previous controls
* Interactive progress bar with seek functionality
* Volume adjustment controls
* Shuffle playback mode
* Repeat modes (Repeat One and Repeat All)
* Queue management system
* Sticky bottom music player

### Playlist Management

* Create custom playlists
* Add songs to playlists
* View playlist contents
* Dynamic playlist rendering
* Playlist modal interface
* Persistent playlist storage using LocalStorage

### Liked Songs

* Like and unlike songs
* Dedicated Liked Songs section
* Automatic liked songs count updates
* Persistent storage across sessions

### Search Functionality

* Real-time search
* Search by song title
* Search by artist name
* Instant search results

### Dashboard Features

* Trending Tamil Songs section
* Recently Played songs
* Romantic Playlist
* Melody Collection
* Mass Songs
* Chill Playlist
* Sad Songs
* Featured recommendations

### User Interface

* Spotify-inspired dark theme
* Glassmorphism design
* Gradient backgrounds
* Hover animations
* Loading screen animation
* Smooth transitions
* Responsive layouts for desktop, tablet, and mobile

## Project Structure

```
Spotify-Clone/
├── index.html              # Main application structure
├── style.css               # Styling and responsive layouts
├── script.js               # Music player functionality
├── assets/                 # Images and icons (optional)
└── README.md               # Project documentation
```

## Core Modules

### Music Player Module

Responsible for:

* Audio playback
* Progress tracking
* Volume controls
* Repeat functionality
* Shuffle functionality
* Queue handling

### Playlist Module

Responsible for:

* Playlist creation
* Song addition/removal
* Playlist rendering
* Custom playlist management

### Search Module

Responsible for:

* Dynamic filtering
* Real-time search updates
* Artist and title matching

### Liked Songs Module

Responsible for:

* Favorite song management
* Persistent liked songs storage
* Liked songs display

## Local Storage Features

The application stores user preferences locally using browser LocalStorage.

Stored Data:

* likedSongs
* spotify-custom-playlists
* spotify-recently-played
* spotify-queue
* spotify-playlists

This ensures user data remains available even after refreshing the browser.

## Setup Instructions

### Prerequisites

* Modern Web Browser
* Internet Connection (for hosted audio files)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/spotify-clone.git
```

Navigate to the project directory:

```bash
cd spotify-clone
```

Run the application by opening:

```
index.html
```

No additional packages or installations are required.

## Usage

### Playing Music

* Click any song card.
* Use the bottom player controls.
* Adjust volume and seek through tracks.

### Creating Playlists

* Open "Create Playlist".
* Enter playlist name.
* Add songs using the options menu.

### Searching Songs

* Use the search bar.
* Results appear instantly.

### Managing Favorites

* Click the heart icon.
* View all liked songs in the Liked Songs section.

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### UI Libraries

* Font Awesome

### Media Hosting

* Cloudinary (Audio Files)
* Unsplash (Cover Images)

## Security and Performance

### Client-Side Security

* Input validation
* Safe LocalStorage handling
* Controlled DOM updates
* Prevention of duplicate playlist entries

### Performance Features

* Audio preloading
* Efficient DOM rendering
* Responsive image loading
* Smooth animations
* Optimized event listeners

## Future Enhancements

* Spotify API Integration
* User Authentication
* Backend Database Support
* User Profiles
* Social Sharing
* Lyrics Display
* Recommendation Engine
* Offline Downloads
* Music Categories
* Recently Added Tracks

## Troubleshooting

### Audio Not Playing

* Check internet connectivity.
* Verify hosted audio URLs.

### LocalStorage Issues

* Clear browser cache.
* Refresh the application.

### Layout Issues

* Use an updated browser.
* Ensure CSS files are loaded properly.

## License

MIT License.

This project is developed for educational and learning purposes. Feel free to modify and use it for personal projects.

## Author

Developed by **Sridhar**

Built with HTML, CSS, and JavaScript to recreate the Spotify experience using modern frontend development practices.
