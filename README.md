# MovieDekho

A modern UI website allows users to search and explore movies with detailed information including ratings, genres, cast, and reviews

## 🎬 Features

- **Advanced Movie Search**: Filter movies by genre, rating, and release year
- **Detailed Movie Cards**: View ratings, cast information, and user reviews
- **Dynamic UI**: Responsive design with smooth animations and intuitive navigation
- **API Integration**: Fetches real-time movie data from The Movie Database (TMDb)
- **Favorites List**: Save and manage your favorite movies locally
- **Genre Exploration**: Browse and discover movies by category

**Live Project**: `https://movie-explorer-olive.vercel.app/` (Production environment)

## 🚀 Tech Stack

- **Frontend**: React.js + Vite (High-performance rendering)
- **Routing**: React Router v7 (Client-side navigation)
- **Styling**: Tailwind CSS (Responsive design with smooth animations)
- **API Integration**: Axios (HTTP requests to TMDb API)
- **State Management**: Context API / Redux (Global state handling)
- **Storage**: LocalStorage (Favorites persistence)
- **Icons**: Lucide React / Font Awesome (UI components)
- **Deployment**: Vercel (Production environment)

## 🛠️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
```

### 2. Environment Configuration

Create a `.env.local` file and add your TMDb API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
npm run preview
```

Deploy to Vercel:

```bash
vercel deploy
```

```

### Happy Exploring! 🍿✨

*Discover your next favorite movie today!*