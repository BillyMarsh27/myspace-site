import React, { useState } from 'react';

const CONFIG = {
  name: "Billy",
  // SHU YERGA INTERNETDAGI RASM LINKINI QO'YING:
  profileImage: "https://i.pinimg.com/236x/fa/13/e7/fa13e7405c9e720311ca89cf1f1c97c8.jpg", 
  description: "Haiii <3 I love pink, IT 2017 🎈, Monster and SOPHIA LILLIS XD",
  obsessions: "Sophia Lillis, Monarch Monster, Femboys, Puppy, Foxes 🦊, Nu metal, Rebzyyx, Sally Face, Minecraft, Skating",
  socials: {
    instagram: "https://www.instagram.com/lillissoap/",
    telegram: "https://t.me/smolsnaildafuq",
    spotify: "https://open.spotify.com/user/31yma7rw32epalncoa4vbjmtsiem",
    tiktok: "https://www.tiktok.com/@immablowmysophia",
  },
  songs: [
    "411AGut9V5DrTKE4cwOsbZ",
    "6nFdjV1Ko66O111x74K2kn",
    "4SwSpxsOYtnEaRxWtYrnvZ",
    "1PtQJZVZIdWIYdARpZRDFO",
    "3uKqnQ0dGBcpovf9lV2nqg",
    "3wtN68pgYcPyc7H6GRd31a",
    "0jJKljmTpLCkXEfyLFZfj1",
    "5N9cIn4IZ05lnnWrT9bY8H",
    "54bm2e3tk8cliUz3VSdCPZ",
    "7fyG2MquxykO3Ufiku1Dj2",
  ],
};

const FOX = "🦊";

// Icon komponentlari o'zgarishsiz qoladi...
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const TelegramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
);
const SpotifyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);
const TikTokIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);

export default function App() {
  const [currentSong, setCurrentSong] = useState(0);

  function prevSong() {
    setCurrentSong(i => (i - 1 + CONFIG.songs.length) % CONFIG.songs.length);
  }

  function nextSong() {
    setCurrentSong(i => (i + 1) % CONFIG.songs.length);
  }

  const obsessionList = CONFIG.obsessions.split(',').map(o => o.trim());
  const embedUrl = `https://open.spotify.com/embed/track/${CONFIG.songs[currentSong]}?utm_source=generator&theme=0`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Cabin+Sketch:wght@700&family=Pacifico&family=Nunito:wght@700;900&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes slidein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #5b21b6;
          background-image:
            radial-gradient(circle at 20% 50%, #7c3aed44 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #db277744 0%, transparent 50%);
          min-height: 100vh;
          font-family: 'Nunito', sans-serif;
        }

        .page {
          max-width: 700px;
          margin: 0 auto;
          padding: 30px 16px 60px;
          position: relative;
          z-index: 1;
          animation: slidein 0.6s ease forwards;
        }

        .title {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(28px, 8vw, 52px);
          color: #1a0a2e;
          text-align: center;
          margin-bottom: 28px;
          text-shadow: 4px 4px 0 #db2777, 8px 8px 0 #7c3aed;
        }

        .panel {
          background: linear-gradient(135deg, #ddd6fe, #f5d0fe);
          border: 3px solid #1a0a2e;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 5px 5px 0 #1a0a2e;
          position: relative;
        }

        .fox-corner {
          position: absolute;
          font-size: 22px;
          animation: float 3s ease-in-out infinite;
          pointer-events: none;
        }
        .fox-tl { top: -12px; left: -12px; }
        .fox-tr { top: -12px; right: -12px; animation-delay: 0.5s; }
        .fox-bl { bottom: -12px; left: -12px; animation-delay: 1s; }
        .fox-br { bottom: -12px; right: -12px; animation-delay: 1.5s; }

        .profile-row {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .photo-box {
          width: 140px; height: 140px; min-width: 140px;
          border: 3px solid #7c3aed;
          border-radius: 12px;
          background: #ede9fe;
          overflow: hidden;
          box-shadow: 3px 3px 0 #1a0a2e;
        }
        .photo-box img { width: 100%; height: 100%; object-fit: cover; }

        .profile-info { flex: 1; display: flex; flex-direction: column; gap: 12px; }

        .name-box {
          font-family: 'Cabin Sketch', cursive;
          font-size: 34px; font-weight: 700;
          color: #1a0a2e; background: white;
          border: 3px solid #1a0a2e;
          border-radius: 8px; padding: 6px 14px;
          display: flex; align-items: center; gap: 8px;
        }

        .desc-box {
          font-family: 'Pacifico', cursive;
          font-size: 13px;
          color: #6b21a8;
          background: white;
          border: 3px solid #1a0a2e;
          border-radius: 8px;
          padding: 12px 14px;
          line-height: 1.9;
        }

        .obsessions-panel {
          background: linear-gradient(90deg, #db2777, #ec4899);
          border: 3px solid #1a0a2e;
          border-radius: 16px;
          padding: 18px 20px;
          margin-bottom: 20px;
          box-shadow: 5px 5px 0 #1a0a2e;
          position: relative;
        }

        .obsessions-label {
          font-family: 'Cabin Sketch', cursive;
          font-size: 26px; color: #fff;
          text-shadow: 2px 2px 0 #1a0a2e;
          text-align: center;
          margin-bottom: 14px;
        }

        .obs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .obs-tag {
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          background: white;
          color: #db2777;
          border: 2px solid #1a0a2e;
          border-radius: 6px;
          padding: 7px 10px;
          box-shadow: 2px 2px 0 #1a0a2e;
          animation: popIn 0.4s ease forwards;
        }

        .socials-title {
          font-family: 'Cabin Sketch', cursive;
          font-size: 28px; color: #db2777;
          text-align: center;
          text-shadow: 2px 2px 0 #1a0a2e;
          margin-bottom: 16px;
        }

        .socials-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 480px) {
          .socials-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .social-btn {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 10px; padding: 16px 8px;
          border: 3px solid #1a0a2e;
          border-radius: 12px;
          font-family: 'Press Start 2P', monospace;
          font-size: 7px; color: white;
          text-decoration: none;
          box-shadow: 3px 3px 0 #1a0a2e;
          transition: transform 0.15s, box-shadow 0.15s;
          position: relative;
        }
        .social-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 #1a0a2e;
        }
        
        .btn-instagram { background: #db2777; }
        .btn-telegram  { background: #7c3aed; }
        .btn-spotify   { background: #1db954; }
        .btn-tiktok    { background: #1a0a2e; }

        .music-header {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px; color: #1a0a2e;
          background: #a855f7;
          border: 2px solid #1a0a2e;
          border-radius: 6px;
          padding: 8px 14px;
          text-align: center;
          margin-bottom: 14px;
        }

        .music-controls {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 14px;
        }

        .ctrl-btn {
          background: #db2777;
          border: 3px solid #1a0a2e;
          border-radius: 8px;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 16px; color: white;
          box-shadow: 3px 3px 0 #1a0a2e;
        }

        .track-label {
          font-family: 'Press Start 2P', monospace;
          font-size: 8px; color: #1a0a2e;
          flex: 1; background: white;
          border: 2px solid #1a0a2e;
          border-radius: 6px; padding: 8px 10px;
          text-align: center;
        }

        .dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 2px solid #1a0a2e;
          background: #ede9fe;
          cursor: pointer;
        }
        .dot.active { background: #db2777; transform: scale(1.4); }

        .spotify-embed {
          border-radius: 12px; overflow: hidden;
          border: 3px solid #1a0a2e;
          box-shadow: 4px 4px 0 #1a0a2e;
        }

        .sparks {
          position: fixed; top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none; overflow: hidden; z-index: 0;
        }
        .spark {
          position: absolute;
          animation: float 4s ease-in-out infinite;
          opacity: 0.25;
        }
      `}</style>

      <div className="sparks">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="spark" style={{
            left: `${10 + i * 12}%`,
            top: `${5 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: `${16 + (i % 3) * 8}px`,
          }}>🦊</div>
        ))}
      </div>

      <div className="page">
        <h1 className="title">MY SPACE</h1>

        <div className="panel">
          <span className="fox-corner fox-tl">{FOX}</span>
          <span className="fox-corner fox-tr">{FOX}</span>
          <span className="fox-corner fox-bl">{FOX}</span>
          <span className="fox-corner fox-br">{FOX}</span>
          <div className="profile-row">
            <div className="photo-box">
              <img src={CONFIG.profileImage} alt="profile" />
            </div>
            <div className="profile-info">
              <div className="name-box">{FOX} {CONFIG.name} {FOX}</div>
              <div className="desc-box">{CONFIG.description}</div>
            </div>
          </div>
        </div>

        <div className="obsessions-panel">
          <span className="fox-corner fox-tl">{FOX}</span>
          <span className="fox-corner fox-tr">{FOX}</span>
          <div className="obsessions-label">✦ OBSESSIONS ✦</div>
          <div className="obs-tags">
            {obsessionList.map((obs, i) => (
              <div key={i} className="obs-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                #{obs.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="socials-title">SOCIALS</div>
          <div className="socials-grid">
            <a href={CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="social-btn btn-instagram">
              <InstagramIcon />
              INSTAGRAM
            </a>
            <a href={CONFIG.socials.telegram} target="_blank" rel="noreferrer" className="social-btn btn-telegram">
              <TelegramIcon />
              TELEGRAM
            </a>
            <a href={CONFIG.socials.spotify} target="_blank" rel="noreferrer" className="social-btn btn-spotify">
              <SpotifyIcon />
              SPOTIFY
            </a>
            <a href={CONFIG.socials.tiktok} target="_blank" rel="noreferrer" className="social-btn btn-tiktok">
              <TikTokIcon />
              TIKTOK
            </a>
          </div>
        </div>

        <div className="panel">
          <div className="music-header">{FOX} SHARE MY MUSIC {FOX}</div>
          <div className="music-controls">
            <button className="ctrl-btn" onClick={prevSong}>◀◀</button>
            <button className="ctrl-btn" onClick={nextSong}>▶▶</button>
            <div className="track-label">Track {currentSong + 1} of {CONFIG.songs.length}</div>
          </div>
          <div className="spotify-embed">
            <iframe
              key={currentSong}
              src={embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="spotify-player"
            />
          </div>
        </div>

      </div>
    </>
  );
}


// import React, { useState, useRef } from 'react';

// const CONFIG = {
//   name: "Billy",
//   description: "Haiii <3 I love pink, IT 2017 🎈, Monster and SOPHIA LILLIS XD",
//   obsessions: "Sophia Lillis, Monarch Monster, Femboys, Puppy, Foxes 🦊, Nu metal, Rebzyyx, Sally Face, Minecraft, Skating",
//   socials: {
//     instagram: "https://www.instagram.com/lillissoap/",
//     telegram: "https://t.me/smolsnaildafuq",
//     spotify: "https://open.spotify.com/user/31yma7rw32epalncoa4vbjmtsiem",
//     tiktok: "https://www.tiktok.com/@immablowmysophia",
//   },
//   songs: [
//     "411AGut9V5DrTKE4cwOsbZ",
//     "6nFdjV1Ko66O111x74K2kn",
//     "4SwSpxsOYtnEaRxWtYrnvZ",
//     "1PtQJZVZIdWIYdARpZRDFO",
//     "3uKqnQ0dGBcpovf9lV2nqg",
//     "3wtN68pgYcPyc7H6GRd31a",
//     "0jJKljmTpLCkXEfyLFZfj1",
//     "5N9cIn4IZ05lnnWrT9bY8H",
//     "54bm2e3tk8cliUz3VSdCPZ",
//     "7fyG2MquxykO3Ufiku1Dj2",
//   ],
// };

// const FOX = "🦊";

// const InstagramIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//   </svg>
// );

// const TelegramIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
//     <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
//   </svg>
// );

// const SpotifyIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
//     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
//   </svg>
// );

// const TikTokIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
//     <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
//   </svg>
// );

// export default function App() {
//   const [currentSong, setCurrentSong] = useState(0);
//   const [photo, setPhoto] = useState(null);
//   const fileRef = useRef();

//   function handlePhoto(e) {
//     const file = e.target.files[0];
//     if (file) setPhoto(URL.createObjectURL(file));
//   }

//   function prevSong() {
//     setCurrentSong(i => (i - 1 + CONFIG.songs.length) % CONFIG.songs.length);
//   }

//   function nextSong() {
//     setCurrentSong(i => (i + 1) % CONFIG.songs.length);
//   }

//   const obsessionList = CONFIG.obsessions.split(',').map(o => o.trim());
//   const embedUrl = `https://open.spotify.com/embed/track/${CONFIG.songs[currentSong]}?utm_source=generator&theme=0`;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Cabin+Sketch:wght@700&family=Pacifico&family=Nunito:wght@700;900&display=swap');

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(-5deg); }
//           50% { transform: translateY(-10px) rotate(5deg); }
//         }
//         @keyframes slidein {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes popIn {
//           0% { transform: scale(0.8); opacity: 0; }
//           100% { transform: scale(1); opacity: 1; }
//         }

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         body {
//           background-color: #5b21b6;
//           background-image:
//             radial-gradient(circle at 20% 50%, #7c3aed44 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, #db277744 0%, transparent 50%);
//           min-height: 100vh;
//           font-family: 'Nunito', sans-serif;
//         }

//         .page {
//           max-width: 700px;
//           margin: 0 auto;
//           padding: 30px 16px 60px;
//           position: relative;
//           z-index: 1;
//           animation: slidein 0.6s ease forwards;
//         }

//         .title {
//           font-family: 'Press Start 2P', monospace;
//           font-size: clamp(28px, 8vw, 52px);
//           color: #1a0a2e;
//           text-align: center;
//           margin-bottom: 28px;
//           text-shadow: 4px 4px 0 #db2777, 8px 8px 0 #7c3aed;
//         }

//         .panel {
//           background: linear-gradient(135deg, #ddd6fe, #f5d0fe);
//           border: 3px solid #1a0a2e;
//           border-radius: 16px;
//           padding: 24px;
//           margin-bottom: 20px;
//           box-shadow: 5px 5px 0 #1a0a2e;
//           position: relative;
//         }

//         .fox-corner {
//           position: absolute;
//           font-size: 22px;
//           animation: float 3s ease-in-out infinite;
//           pointer-events: none;
//         }
//         .fox-tl { top: -12px; left: -12px; }
//         .fox-tr { top: -12px; right: -12px; animation-delay: 0.5s; }
//         .fox-bl { bottom: -12px; left: -12px; animation-delay: 1s; }
//         .fox-br { bottom: -12px; right: -12px; animation-delay: 1.5s; }

//         .profile-row {
//           display: flex;
//           gap: 20px;
//           align-items: flex-start;
//           flex-wrap: wrap;
//         }

//         .photo-box {
//           width: 140px; height: 140px; min-width: 140px;
//           border: 3px dashed #7c3aed;
//           border-radius: 12px;
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           background: #ede9fe;
//           cursor: pointer; overflow: hidden;
//           transition: transform 0.2s;
//         }
//         .photo-box:hover { transform: scale(1.03); }
//         .photo-box img { width: 100%; height: 100%; object-fit: cover; }
//         .photo-label {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 8px; color: #7c3aed;
//           text-align: center; line-height: 1.8;
//         }

//         .profile-info { flex: 1; display: flex; flex-direction: column; gap: 12px; }

//         .name-box {
//           font-family: 'Cabin Sketch', cursive;
//           font-size: 34px; font-weight: 700;
//           color: #1a0a2e; background: white;
//           border: 3px solid #1a0a2e;
//           border-radius: 8px; padding: 6px 14px;
//           display: flex; align-items: center; gap: 8px;
//         }

//         .desc-box {
//           font-family: 'Pacifico', cursive;
//           font-size: 13px;
//           color: #6b21a8;
//           background: white;
//           border: 3px solid #1a0a2e;
//           border-radius: 8px;
//           padding: 12px 14px;
//           line-height: 1.9;
//         }

//         /* OBSESSIONS */
//         .obsessions-panel {
//           background: linear-gradient(90deg, #db2777, #ec4899);
//           border: 3px solid #1a0a2e;
//           border-radius: 16px;
//           padding: 18px 20px;
//           margin-bottom: 20px;
//           box-shadow: 5px 5px 0 #1a0a2e;
//           position: relative;
//         }

//         .obsessions-label {
//           font-family: 'Cabin Sketch', cursive;
//           font-size: 26px; color: #fff;
//           text-shadow: 2px 2px 0 #1a0a2e;
//           text-align: center;
//           margin-bottom: 14px;
//         }

//         .obs-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           justify-content: center;
//         }

//         .obs-tag {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 8px;
//           background: white;
//           color: #db2777;
//           border: 2px solid #1a0a2e;
//           border-radius: 6px;
//           padding: 7px 10px;
//           box-shadow: 2px 2px 0 #1a0a2e;
//           animation: popIn 0.4s ease forwards;
//           white-space: nowrap;
//         }

//         /* SOCIALS */
//         .socials-title {
//           font-family: 'Cabin Sketch', cursive;
//           font-size: 28px; color: #db2777;
//           text-align: center;
//           text-shadow: 2px 2px 0 #1a0a2e;
//           margin-bottom: 16px;
//         }

//         .socials-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 12px;
//         }
//         @media (max-width: 480px) {
//           .socials-grid { grid-template-columns: repeat(2, 1fr); }
//         }

//         .social-btn {
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           gap: 10px; padding: 16px 8px;
//           border: 3px solid #1a0a2e;
//           border-radius: 12px;
//           font-family: 'Press Start 2P', monospace;
//           font-size: 7px; color: white;
//           text-decoration: none;
//           box-shadow: 3px 3px 0 #1a0a2e;
//           transition: transform 0.15s, box-shadow 0.15s;
//           position: relative;
//         }
//         .social-btn:hover {
//           transform: translate(-2px, -2px);
//           box-shadow: 5px 5px 0 #1a0a2e;
//         }
//         .social-btn:active {
//           transform: translate(2px, 2px);
//           box-shadow: 1px 1px 0 #1a0a2e;
//         }
//         .fox-badge {
//           position: absolute;
//           top: -10px; right: -10px;
//           font-size: 16px;
//         }

//         .btn-instagram { background: #db2777; }
//         .btn-telegram  { background: #7c3aed; }
//         .btn-spotify   { background: #1db954; }
//         .btn-tiktok    { background: #1a0a2e; }

//         /* MUSIC */
//         .music-header {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 10px; color: #1a0a2e;
//           background: #a855f7;
//           border: 2px solid #1a0a2e;
//           border-radius: 6px;
//           padding: 8px 14px;
//           text-align: center;
//           margin-bottom: 14px;
//         }

//         .music-controls {
//           display: flex; align-items: center;
//           gap: 10px; margin-bottom: 14px;
//         }

//         .ctrl-btn {
//           background: #db2777;
//           border: 3px solid #1a0a2e;
//           border-radius: 8px;
//           width: 44px; height: 44px;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; font-size: 16px; color: white;
//           box-shadow: 3px 3px 0 #1a0a2e;
//           transition: transform 0.1s;
//         }
//         .ctrl-btn:hover { transform: scale(1.1); }
//         .ctrl-btn:active { transform: scale(0.95); }

//         .track-label {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 8px; color: #1a0a2e;
//           flex: 1; background: white;
//           border: 2px solid #1a0a2e;
//           border-radius: 6px; padding: 8px 10px;
//           text-align: center;
//         }

//         .song-dots {
//           display: flex; gap: 6px;
//           flex-wrap: wrap; margin-bottom: 12px;
//         }

//         .dot {
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           border: 2px solid #1a0a2e;
//           background: #ede9fe;
//           cursor: pointer;
//           transition: background 0.2s, transform 0.2s;
//         }
//         .dot.active { background: #db2777; transform: scale(1.4); }

//         .spotify-embed {
//           border-radius: 12px; overflow: hidden;
//           border: 3px solid #1a0a2e;
//           box-shadow: 4px 4px 0 #1a0a2e;
//         }

//         .sparks {
//           position: fixed; top: 0; left: 0;
//           width: 100%; height: 100%;
//           pointer-events: none; overflow: hidden; z-index: 0;
//         }
//         .spark {
//           position: absolute;
//           animation: float 4s ease-in-out infinite;
//           opacity: 0.25;
//         }
//       `}</style>

//       {/* Background floating foxes */}
//       <div className="sparks">
//         {[...Array(8)].map((_, i) => (
//           <div key={i} className="spark" style={{
//             left: `${10 + i * 12}%`,
//             top: `${5 + (i % 3) * 30}%`,
//             animationDelay: `${i * 0.5}s`,
//             fontSize: `${16 + (i % 3) * 8}px`,
//           }}>🦊</div>
//         ))}
//       </div>

//       <div className="page">
//         <h1 className="title">MY SPACE</h1>

//         {/* Profile */}
//         <div className="panel">
//           <span className="fox-corner fox-tl">{FOX}</span>
//           <span className="fox-corner fox-tr">{FOX}</span>
//           <span className="fox-corner fox-bl">{FOX}</span>
//           <span className="fox-corner fox-br">{FOX}</span>
//           <div className="profile-row">
//             <div className="photo-box" onClick={() => fileRef.current.click()}>
//               {photo
//                 ? <img src={photo} alt="profile" />
//                 : <span className="photo-label">UPLOAD<br/>PHOTO</span>
//               }
//               <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhoto} />
//             </div>
//             <div className="profile-info">
//               <div className="name-box">{FOX} {CONFIG.name} {FOX}</div>
//               <div className="desc-box">{CONFIG.description}</div>
//             </div>
//           </div>
//         </div>

//         {/* Obsessions */}
//         <div className="obsessions-panel">
//           <span className="fox-corner fox-tl">{FOX}</span>
//           <span className="fox-corner fox-tr">{FOX}</span>
//           <div className="obsessions-label">✦ OBSESSIONS ✦</div>
//           <div className="obs-tags">
//             {obsessionList.map((obs, i) => (
//               <div key={i} className="obs-tag" style={{ animationDelay: `${i * 0.05}s` }}>
//                 #{obs.toUpperCase()}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Socials */}
//         <div className="panel">
//           <span className="fox-corner fox-tl">{FOX}</span>
//           <span className="fox-corner fox-tr">{FOX}</span>
//           <span className="fox-corner fox-bl">{FOX}</span>
//           <span className="fox-corner fox-br">{FOX}</span>
//           <div className="socials-title">SOCIALS</div>
//           <div className="socials-grid">
//             <a href={CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="social-btn btn-instagram">
//               <span className="fox-badge">{FOX}</span>
//               <InstagramIcon />
//               INSTAGRAM
//             </a>
//             <a href={CONFIG.socials.telegram} target="_blank" rel="noreferrer" className="social-btn btn-telegram">
//               <span className="fox-badge">{FOX}</span>
//               <TelegramIcon />
//               TELEGRAM
//             </a>
//             <a href={CONFIG.socials.spotify} target="_blank" rel="noreferrer" className="social-btn btn-spotify">
//               <span className="fox-badge">{FOX}</span>
//               <SpotifyIcon />
//               SPOTIFY
//             </a>
//             <a href={CONFIG.socials.tiktok} target="_blank" rel="noreferrer" className="social-btn btn-tiktok">
//               <span className="fox-badge">{FOX}</span>
//               <TikTokIcon />
//               TIKTOK
//             </a>
//           </div>
//         </div>

//         {/* Music Player */}
//         <div className="panel">
//           <span className="fox-corner fox-tl">{FOX}</span>
//           <span className="fox-corner fox-tr">{FOX}</span>
//           <span className="fox-corner fox-bl">{FOX}</span>
//           <span className="fox-corner fox-br">{FOX}</span>
//           <div className="music-header">{FOX} SHARE MY MUSIC {FOX}</div>
//           <div className="music-controls">
//             <button className="ctrl-btn" onClick={prevSong}>◀◀</button>
//             <button className="ctrl-btn" onClick={nextSong}>▶▶</button>
//             <div className="track-label">Track {currentSong + 1} of {CONFIG.songs.length}</div>
//           </div>
//           <div className="song-dots">
//             {CONFIG.songs.map((_, i) => (
//               <div key={i} className={`dot ${i === currentSong ? 'active' : ''}`} onClick={() => setCurrentSong(i)} />
//             ))}
//           </div>
//           <div className="spotify-embed">
//             <iframe
//               key={currentSong}
//               src={embedUrl}
//               width="100%"
//               height="152"
//               frameBorder="0"
//               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//               loading="lazy"
//               title="spotify-player"
//             />
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }