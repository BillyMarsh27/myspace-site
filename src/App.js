import React, { useState } from 'react';

const CONFIG = {
  name: "william",
  profileImage: "https://www.pinterest.com/ideas/goblincore-profile-picture/942678415862/",
  description: "child of a fox hybrid who was raised by a druid woman",
  obsessions: "Sophia Lillis, Monarch Monster, woods, Puppy, Foxes, indie folk, mushrooms, Sally Face, Minecraft, Skating, trees, nature",
  socials: {
    instagram: "https://www.instagram.com/boyofsophia/",
    telegram: "https://t.me/boyofsophia",
    spotify: "https://open.spotify.com/user/31yma7rw32epalncoa4vbjmtsiem",
    tiktok: "https://www.tiktok.com/@boyofsophia",
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

const FRAME_ICONS = ["🍄", "🍂", "🐌", "🌰", "🦊", "🍄", "✨", "🌿"];

const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const TelegramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
);
const SpotifyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3a2415"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);

const PlayIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>);
const PauseIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>);
const NextIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6 5l10 7-10 7V5zM17 5h2v14h-2z"/></svg>);
const PrevIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 5L8 12l10 7V5zM5 5h2v14H5z"/></svg>);

function FrameStrip({ vertical }) {
  const icons = [...FRAME_ICONS, ...FRAME_ICONS, ...FRAME_ICONS];
  return (
    <div className={vertical ? "frame-strip frame-vertical" : "frame-strip frame-horizontal"}>
      {icons.map((ic, i) => <span key={i} className="frame-icon">{ic}</span>)}
    </div>
  );
}

export default function App() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function prevSong() {
    setCurrentSong(i => (i - 1 + CONFIG.songs.length) % CONFIG.songs.length);
  }
  function nextSong() {
    setCurrentSong(i => (i + 1) % CONFIG.songs.length);
  }

  const obsessionList = CONFIG.obsessions.split(',').map(o => o.trim());
  const embedUrl = `https://open.spotify.com/embed/track/${CONFIG.songs[currentSong]}?utm_source=generator&theme=0`;
  const progressPct = ((currentSong + 1) / CONFIG.songs.length) * 100;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Quicksand:wght@500;600;700&display=swap');

        :root {
          --bark: #8a5a35;
          --bark-dark: #5e3a20;
          --bark-darker: #4a2c18;
          --cream: #f7efd9;
          --cream-soft: #f2e7c9;
          --moss: #6f7f45;
          --moss-dark: #4f5c33;
          --rose: #dba28f;
          --rose-dark: #c17f6a;
          --rust: #b5502f;
          --fox: #de7d3f;
          --ink: #3a2415;
        }

        * { box-sizing: border-box; }
        body { margin: 0; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .frame-icon, .app-shell { animation: none !important; }
        }

        .app-shell {
          min-height: 100vh;
          background:
            repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 42px),
            linear-gradient(180deg, var(--bark) 0%, var(--bark-dark) 100%);
          font-family: 'Quicksand', sans-serif;
          color: var(--ink);
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-columns: auto 1fr auto;
        }

        .frame-strip {
          background: var(--bark-darker);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .frame-horizontal {
          grid-column: 1 / 4;
          height: 46px;
          justify-content: space-evenly;
          border-bottom: 3px solid var(--bark-dark);
        }
        .frame-strip.frame-horizontal:last-of-type {
          border-bottom: none;
          border-top: 3px solid var(--bark-dark);
        }
        .frame-vertical {
          grid-row: 2;
          width: 46px;
          flex-direction: column;
          justify-content: space-evenly;
        }
        .frame-vertical.left { border-right: 3px solid var(--bark-dark); }
        .frame-vertical.right { border-left: 3px solid var(--bark-dark); }
        .frame-icon {
          font-size: 18px;
          animation: twinkle 3.2s ease-in-out infinite;
        }
        .frame-icon:nth-child(odd) { animation-delay: 0.6s; }
        .frame-icon:nth-child(3n) { animation-delay: 1.4s; }

        @media (max-width: 640px) {
          .frame-vertical { display: none; }
          .app-shell { grid-template-columns: 1fr; }
          .frame-horizontal { grid-column: 1; }
        }

        .content {
          grid-row: 2;
          grid-column: 2;
          padding: 28px 20px 44px;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
        }

        .page-title {
          font-family: 'Fraunces', serif;
          font-weight: 900;
          font-size: clamp(30px, 6vw, 52px);
          letter-spacing: 4px;
          text-align: center;
          color: var(--cream);
          text-shadow: 3px 3px 0 var(--bark-darker);
          margin: 6px 0 26px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 20px;
          animation: riseIn 0.5s ease both;
        }
        .col { display: flex; flex-direction: column; gap: 20px; }

        @media (max-width: 720px) {
          .grid { grid-template-columns: 1fr; }
        }

        .card {
          background: var(--cream);
          border: 3px solid var(--bark-darker);
          border-radius: 20px;
          box-shadow: 0 6px 0 var(--bark-darker);
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: "";
          position: absolute;
          inset: -4px -4px auto -4px;
          height: 10px;
          background:
            radial-gradient(circle at 8px 6px, var(--moss) 5px, transparent 5.5px) repeat-x;
          background-size: 22px 12px;
          opacity: 0.9;
        }

        .card-rose { background: var(--rose); }
        .card-rose::before {
          background: radial-gradient(circle at 8px 6px, var(--rose-dark) 5px, transparent 5.5px) repeat-x;
          background-size: 22px 12px;
        }

        .photo-card {
          background: var(--moss);
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;
        }
        .photo-card::before { background: radial-gradient(circle at 8px 6px, var(--moss-dark) 5px, transparent 5.5px) repeat-x; background-size: 22px 12px; }
        .photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          border: 3px solid var(--bark-darker);
          background: var(--cream-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .photo-inner img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .trim {
          height: 12px;
          margin: 14px 0;
          background: repeating-linear-gradient(
            -45deg,
            var(--rust) 0 6px,
            var(--moss) 6px 12px,
            var(--cream-soft) 12px 18px
          );
          border-radius: 4px;
          border: 2px solid var(--bark-darker);
        }

        .card-body { padding: 22px 20px 20px; }
        .photo-card .card-body { padding: 0; }

        .section-label {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: 1px;
          color: var(--ink);
          margin: 0 0 4px;
        }
        .section-sub {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 15px;
          color: var(--rust);
          margin-bottom: 6px;
        }
        .desc-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink);
        }

        .obsessions-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 21px;
          text-align: center;
          margin-bottom: 12px;
        }
        .obs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .obs-tag {
          font-size: 12px;
          font-weight: 600;
          background: var(--cream);
          color: var(--rust);
          border: 2px solid var(--bark-darker);
          border-radius: 20px;
          padding: 6px 12px;
        }

        .socials-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 22px;
          text-align: center;
          margin-bottom: 16px;
        }
        .socials-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--ink);
        }
        .social-badge {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 3px solid var(--bark-darker);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.15s ease;
        }
        .social-link:hover .social-badge { transform: translateY(-3px); }
        .badge-instagram { background: #3c7c74; }
        .badge-telegram { background: #b5432c; }
        .badge-spotify { background: #4a5d3a; }
        .badge-tiktok { background: #d9c4a0; }
        .social-name {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.5px;
        }
        @media (max-width: 400px) {
          .socials-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .music-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 14px;
        }
        .music-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .music-controls { display: flex; gap: 10px; }
        .ctrl-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--bark-darker);
          background: var(--rust);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .ctrl-btn.play { background: var(--moss); }

        .now-playing {
          flex: 1;
          min-width: 200px;
        }
        .now-playing-label {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--ink);
        }
        .progress-track {
          position: relative;
          height: 16px;
          background: var(--cream-soft);
          border: 2px solid var(--bark-darker);
          border-radius: 10px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--rose-dark);
          transition: width 0.3s ease;
        }
        .progress-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          transition: left 0.3s ease;
        }

        .spotify-embed {
          border-radius: 12px;
          overflow: hidden;
          border: 3px solid var(--bark-darker);
        }
      `}</style>

      <div className="app-shell">
        <FrameStrip />
        <FrameStrip vertical />
        <div className="content">
          <h1 className="page-title">MY SPACE</h1>

          <div className="grid">
            <div className="col">
              <div className="card photo-card">
                <div className="photo-inner">
                  <img src={CONFIG.profileImage} alt={CONFIG.name} />
                </div>
              </div>

              <div className="card card-rose">
                <div className="card-body">
                  <div className="obsessions-title">✦ Obsessions ✦</div>
                  <div className="obs-tags">
                    {obsessionList.map((obs, i) => (
                      <span key={i} className="obs-tag">{obs}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="section-label">🦊 {CONFIG.name}</div>
                  <div className="section-sub">description</div>
                  <div className="trim" />
                  <div className="desc-text">{CONFIG.description}</div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="socials-title">Socials</div>
                  <div className="socials-grid">
                    <a href={CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="social-link">
                      <span className="social-badge badge-instagram"><InstagramIcon /></span>
                      <span className="social-name">Instagram</span>
                    </a>
                    <a href={CONFIG.socials.telegram} target="_blank" rel="noreferrer" className="social-link">
                      <span className="social-badge badge-telegram"><TelegramIcon /></span>
                      <span className="social-name">Telegram</span>
                    </a>
                    <a href={CONFIG.socials.spotify} target="_blank" rel="noreferrer" className="social-link">
                      <span className="social-badge badge-spotify"><SpotifyIcon /></span>
                      <span className="social-name">Spotify</span>
                    </a>
                    <a href={CONFIG.socials.tiktok} target="_blank" rel="noreferrer" className="social-link">
                      <span className="social-badge badge-tiktok"><TikTokIcon /></span>
                      <span className="social-name">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 20 }}>
            <div className="card-body">
              <div className="music-title">🎵 Share My Music</div>
              <div className="music-row">
                <div className="music-controls">
                  <button className="ctrl-btn" onClick={prevSong} aria-label="Previous track"><PrevIcon /></button>
                  <button
                    className="ctrl-btn play"
                    onClick={() => setIsPlaying(p => !p)}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>
                  <button className="ctrl-btn" onClick={nextSong} aria-label="Next track"><NextIcon /></button>
                </div>
                <div className="now-playing">
                  <div className="now-playing-label">
                    Currently Playing — Track {currentSong + 1} of {CONFIG.songs.length}
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${progressPct}%` }} />
                    <span className="progress-marker" style={{ left: `${progressPct}%` }}>🦊</span>
                  </div>
                </div>
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
        </div>
        <FrameStrip vertical />
        <FrameStrip />
      </div>
    </>
  );
}