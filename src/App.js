import React, { useState, useRef } from 'react';

const CONFIG = {
  name: "Billy",
  description: "Haiii <3 I love pink, IT 2017 🎈, Monster and SOPHIA LILLIS XD",
  obsessions: "Sophia Lillis, Monarch Monster, Femboys, Puppy, Foxes 🦊, Nu metal, Rebzyyx, Sally Face, Minecraft, Skating",
  photo: null,
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

export default function App() {
  const [currentSong, setCurrentSong] = useState(0);
  const [photo, setPhoto] = useState(null);
  const fileRef = useRef();

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  }

  const prevSong = () => setCurrentSong(i => (i - 1 + CONFIG.songs.length) % CONFIG.songs.length);
  const nextSong = () => setCurrentSong(i => (i + 1) % CONFIG.songs.length);

  const obsessionList = CONFIG.obsessions.split(',').map(item => item.trim());
  const embedUrl = `https://open.spotify.com/embed/track/${CONFIG.songs[currentSong]}?utm_source=generator&theme=0`;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Press+Start+2P&display=swap');

        * { box-sizing: border-box; }
        body { background-color: #2e1065; margin: 0; overflow-x: hidden; font-family: sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .page {
          max-width: 750px;
          margin: 0 auto;
          padding: 40px 15px;
          position: relative;
          z-index: 1;
        }

        .title {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(28px, 8vw, 56px);
          color: #fff;
          text-align: center;
          margin-bottom: 35px;
          text-shadow: 4px 4px 0 #db2777, 8px 8px 0 #7c3aed;
        }

        .panel {
          background: linear-gradient(135deg, #f5d0fe, #ddd6fe);
          border: 4px solid #1a0a2e;
          border-radius: 16px;
          padding: clamp(15px, 4vw, 25px);
          margin-bottom: 25px;
          box-shadow: 8px 8px 0 #1a0a2e;
          position: relative;
        }

        .fox-corner {
          position: absolute;
          font-size: 24px;
          animation: float 3s ease-in-out infinite;
          pointer-events: none;
        }
        .fox-tl { top: -15px; left: -15px; }
        .fox-tr { top: -15px; right: -15px; animation-delay: 0.5s; }
        .fox-bl { bottom: -15px; left: -15px; animation-delay: 1s; }
        .fox-br { bottom: -15px; right: -15px; animation-delay: 1.5s; }

        .profile-row {
          display: flex;
          gap: 20px;
          flex-direction: row;
          align-items: flex-start;
        }
        @media (max-width: 600px) {
          .profile-row { flex-direction: column; align-items: center; text-align: center; }
        }

        .photo-box {
          width: 150px;
          height: 150px;
          min-width: 150px;
          border: 4px dashed #7c3aed;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .photo-box:hover { transform: scale(1.05) rotate(-2deg); }
        .photo-box img { width: 100%; height: 100%; object-fit: cover; }
        .photo-label { font-family: 'Press Start 2P', monospace; font-size: 9px; color: #7c3aed; text-align: center; }

        .profile-info { flex: 1; display: flex; flex-direction: column; gap: 12px; width: 100%; }

        .name-box {
          font-family: 'Cabin Sketch', cursive;
          font-size: 36px;
          font-weight: 700;
          color: #1a0a2e;
          background: white;
          border: 4px solid #1a0a2e;
          padding: 8px 15px;
        }

        .desc-box {
          font-size: 15px;
          color: #3b0764;
          background: white;
          border: 4px solid #1a0a2e;
          padding: 12px;
          line-height: 1.5;
        }

        /* OBSESSIONS SECTION */
        .obs-panel {
          background: #db2777;
          border: 4px solid #1a0a2e;
          padding: 20px;
          margin-bottom: 25px;
          box-shadow: 8px 8px 0 #1a0a2e;
          border-radius: 12px;
        }
        .obs-title {
          font-family: 'Cabin Sketch', cursive;
          font-size: 28px;
          color: #fff;
          text-align: center;
          margin-bottom: 15px;
        }
        .obs-grid { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .obs-tag {
          font-family: 'Press Start 2P', monospace;
          font-size: 9px;
          background: #fff;
          border: 2px solid #1a0a2e;
          padding: 8px 10px;
          color: #db2777;
          box-shadow: 3px 3px 0 #1a0a2e;
        }

        /* SOCIALS */
        .socials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 15px;
        }
        .social-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 10px;
          border: 4px solid #1a0a2e;
          box-shadow: 5px 5px 0 #1a0a2e;
          text-decoration: none;
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          color: white;
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .social-btn:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0 #1a0a2e; }
        .social-btn i { font-size: 28px; margin-bottom: 10px; }
        .btn-ig { background: #db2777; }
        .btn-tg { background: #7c3aed; }
        .btn-sp { background: #db2777; }
        .btn-tk { background: #7c3aed; }

        /* MUSIC SECTION RESTORED */
        .music-header {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(10px, 3vw, 14px);
          color: #fff;
          background: #1a0a2e;
          border: 3px solid #db2777;
          padding: 10px;
          text-align: center;
          margin-bottom: 20px;
        }

        .player-row { display: flex; gap: 10px; align-items: center; margin-bottom: 15px; }
        .ctrl-btn {
          background: #db2777;
          border: 3px solid #1a0a2e;
          color: white;
          width: 50px;
          height: 50px;
          cursor: pointer;
          font-size: 18px;
          box-shadow: 4px 4px 0 #1a0a2e;
        }
        .ctrl-btn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #1a0a2e; }
        
        .track-info {
          flex: 1;
          background: white;
          border: 3px solid #1a0a2e;
          padding: 12px;
          font-family: 'Press Start 2P', monospace;
          font-size: 9px;
          text-align: center;
        }

        .spotify-container {
          border: 4px solid #1a0a2e;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 4px 4px 0 #1a0a2e;
        }

        .bg-foxes {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 0; opacity: 0.3;
        }
      `}</style>

      <div className="bg-foxes">
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            fontSize: '30px',
            animation: `float ${4 + Math.random() * 2}s infinite`
          }}>{FOX}</div>
        ))}
      </div>

      <div className="page">
        <h1 className="title">MY SPACE</h1>

        {/* Profile */}
        <div className="panel">
          <span className="fox-corner fox-tl">{FOX}</span>
          <span className="fox-corner fox-tr">{FOX}</span>
          <span className="fox-corner fox-bl">{FOX}</span>
          <span className="fox-corner fox-br">{FOX}</span>
          <div className="profile-row">
            <div className="photo-box" onClick={() => fileRef.current.click()}>
              {photo ? <img src={photo} alt="me" /> : <div className="photo-label">UPLOAD<br/>PHOTO</div>}
              <input ref={fileRef} type="file" hidden onChange={handlePhoto} />
            </div>
            <div className="profile-info">
              <div className="name-box">{FOX} {CONFIG.name}</div>
              <div className="desc-box">{CONFIG.description}</div>
            </div>
          </div>
        </div>

        {/* Obsessions */}
        <div className="obs-panel">
          <div className="obs-title">✦ MY OBSESSIONS ✦</div>
          <div className="obs-grid">
            {obsessionList.map((obs, i) => (
              <div key={i} className="obs-tag">#{obs.toUpperCase()}</div>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="panel">
          <div className="socials-grid">
            <a href={CONFIG.socials.instagram} className="social-btn btn-ig">
              <i className="fa-brands fa-instagram"></i> INSTAGRAM
            </a>
            <a href={CONFIG.socials.telegram} className="social-btn btn-tg">
              <i className="fa-brands fa-telegram"></i> TELEGRAM
            </a>
            <a href={CONFIG.socials.spotify} className="social-btn btn-sp">
              <i className="fa-brands fa-spotify"></i> SPOTIFY
            </a>
            <a href={CONFIG.socials.tiktok} className="social-btn btn-tk">
              <i className="fa-brands fa-tiktok"></i> TIKTOK
            </a>
          </div>
        </div>

        {/* Music Player */}
        <div className="panel">
          <div className="music-header">{FOX} SHARE MY MUSIC {FOX}</div>
          <div className="player-row">
            <button className="ctrl-btn" onClick={prevSong}>◀</button>
            <div className="track-info">TRACK {currentSong + 1} / {CONFIG.songs.length}</div>
            <button className="ctrl-btn" onClick={nextSong}>▶</button>
          </div>
          <div className="spotify-container">
            <iframe
              key={currentSong}
              src={embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
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
//   photo: null,
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

//   const embedUrl = `https://open.spotify.com/embed/track/${CONFIG.songs[currentSong]}?utm_source=generator&theme=0`;

//   return (
//     <>
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(-5deg); }
//           50% { transform: translateY(-10px) rotate(5deg); }
//         }
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
//         @keyframes scanline {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         @keyframes slidein {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .page {
//           max-width: 700px;
//           margin: 0 auto;
//           padding: 30px 16px 60px;
//           animation: slidein 0.6s ease forwards;
//         }

//         .title {
//           font-family: 'Press Start 2P', monospace;
//           font-size: clamp(28px, 8vw, 56px);
//           color: #1a0a2e;
//           text-align: center;
//           margin-bottom: 28px;
//           text-shadow:
//             4px 4px 0 #db2777,
//             8px 8px 0 #7c3aed;
//           letter-spacing: 2px;
//         }

//         .panel {
//           background: linear-gradient(135deg, #ddd6fe, #f5d0fe);
//           border: 3px solid #1a0a2e;
//           border-radius: 16px;
//           padding: 20px;
//           margin-bottom: 18px;
//           box-shadow: 5px 5px 0 #1a0a2e;
//           position: relative;
//           animation: slidein 0.7s ease forwards;
//         }

//         .fox-corner {
//           position: absolute;
//           font-size: 22px;
//           animation: float 3s ease-in-out infinite;
//         }
//         .fox-tl { top: -12px; left: -12px; animation-delay: 0s; }
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
//           width: 140px;
//           height: 140px;
//           min-width: 140px;
//           border: 3px dashed #7c3aed;
//           border-radius: 12px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background: #ede9fe;
//           cursor: pointer;
//           overflow: hidden;
//           transition: transform 0.2s;
//         }
//         .photo-box:hover { transform: scale(1.03); }
//         .photo-box img { width: 100%; height: 100%; object-fit: cover; }
//         .photo-label {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 8px;
//           color: #7c3aed;
//           text-align: center;
//           line-height: 1.8;
//         }

//         .profile-info { flex: 1; display: flex; flex-direction: column; gap: 12px; }

//         .name-box {
//           font-family: 'Cabin Sketch', cursive;
//           font-size: 32px;
//           font-weight: 700;
//           color: #1a0a2e;
//           background: white;
//           border: 3px solid #1a0a2e;
//           border-radius: 8px;
//           padding: 6px 14px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .desc-box {
//           font-size: 14px;
//           color: #3b0764;
//           background: white;
//           border: 3px solid #1a0a2e;
//           border-radius: 8px;
//           padding: 10px 14px;
//           line-height: 1.6;
//         }

//         .obsessions-panel {
//           background: linear-gradient(90deg, #db2777, #ec4899);
//           border: 3px solid #1a0a2e;
//           border-radius: 16px;
//           padding: 14px 20px;
//           margin-bottom: 18px;
//           box-shadow: 5px 5px 0 #1a0a2e;
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           flex-wrap: wrap;
//           position: relative;
//           animation: slidein 0.8s ease forwards;
//         }

//         .obsessions-label {
//           font-family: 'Cabin Sketch', cursive;
//           font-size: 26px;
//           color: #fff;
//           text-shadow: 2px 2px 0 #1a0a2e;
//           white-space: nowrap;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }

//         .obsessions-text {
//           flex: 1;
//           background: #fce7f3;
//           border: 2px solid #1a0a2e;
//           border-radius: 8px;
//           padding: 8px 14px;
//           font-size: 13px;
//           color: #831843;
//           font-weight: 700;
//           min-width: 200px;
//         }

//         .socials-title {
//           font-family: 'Cabin Sketch', cursive;
//           font-size: 28px;
//           color: #db2777;
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
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           padding: 16px 8px;
//           border: 3px solid #1a0a2e;
//           border-radius: 12px;
//           font-family: 'Press Start 2P', monospace;
//           font-size: 8px;
//           cursor: pointer;
//           text-decoration: none;
//           transition: transform 0.15s, box-shadow 0.15s;
//           box-shadow: 3px 3px 0 #1a0a2e;
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
//         .social-btn .fox-badge {
//           position: absolute;
//           top: -10px; right: -10px;
//           font-size: 16px;
//         }

//         .btn-instagram { background: #db2777; color: white; }
//         .btn-telegram  { background: #7c3aed; color: white; }
//         .btn-spotify   { background: #db2777; color: white; }
//         .btn-tiktok    { background: #7c3aed; color: white; }

//         .social-icon { font-size: 28px; }

//         .music-header {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 10px;
//           color: #1a0a2e;
//           background: #a855f7;
//           border: 2px solid #1a0a2e;
//           border-radius: 6px;
//           padding: 6px 14px;
//           text-align: center;
//           margin-bottom: 14px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//         }

//         .music-controls {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 14px;
//           flex-wrap: wrap;
//         }

//         .ctrl-btn {
//           background: #db2777;
//           border: 3px solid #1a0a2e;
//           border-radius: 8px;
//           width: 44px;
//           height: 44px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 16px;
//           box-shadow: 3px 3px 0 #1a0a2e;
//           transition: transform 0.1s;
//           color: white;
//         }
//         .ctrl-btn:hover { transform: scale(1.1); }
//         .ctrl-btn:active { transform: scale(0.95); }

//         .track-label {
//           font-family: 'Press Start 2P', monospace;
//           font-size: 8px;
//           color: #1a0a2e;
//           flex: 1;
//           background: white;
//           border: 2px solid #1a0a2e;
//           border-radius: 6px;
//           padding: 8px 10px;
//         }

//         .song-dots {
//           display: flex;
//           gap: 6px;
//           flex-wrap: wrap;
//           margin-bottom: 12px;
//         }

//         .dot {
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           border: 2px solid #1a0a2e;
//           background: #ede9fe;
//           cursor: pointer;
//           transition: background 0.2s, transform 0.2s;
//         }
//         .dot.active {
//           background: #db2777;
//           transform: scale(1.4);
//         }

//         .spotify-embed {
//           border-radius: 12px;
//           overflow: hidden;
//           border: 3px solid #1a0a2e;
//           box-shadow: 4px 4px 0 #1a0a2e;
//         }

//         .sparks {
//           position: fixed;
//           top: 0; left: 0;
//           width: 100%; height: 100%;
//           pointer-events: none;
//           overflow: hidden;
//           z-index: 0;
//         }
//         .spark {
//           position: absolute;
//           font-size: 20px;
//           animation: float 4s ease-in-out infinite;
//           opacity: 0.3;
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

//       <div className="page" style={{ position: 'relative', zIndex: 1 }}>

//         {/* Title */}
//         <h1 className="title">MY SPACE</h1>

//         {/* Profile Panel */}
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
//           <span className="fox-corner fox-tl" style={{ position: 'absolute', top: -12, left: -12 }}>{FOX}</span>
//           <span className="fox-corner fox-tr" style={{ position: 'absolute', top: -12, right: -12 }}>{FOX}</span>
//           <div className="obsessions-label">✦ OBSESSIONS ✦</div>
//           <div className="obsessions-text">{CONFIG.obsessions}</div>
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
//               <span className="social-icon">📸</span>
//               INSTAGRAM
//             </a>
//             <a href={CONFIG.socials.telegram} target="_blank" rel="noreferrer" className="social-btn btn-telegram">
//               <span className="fox-badge">{FOX}</span>
//               <span className="social-icon">✈️</span>
//               TELEGRAM
//             </a>
//             <a href={CONFIG.socials.spotify} target="_blank" rel="noreferrer" className="social-btn btn-spotify">
//               <span className="fox-badge">{FOX}</span>
//               <span className="social-icon">🎵</span>
//               SPOTIFY
//             </a>
//             <a href={CONFIG.socials.tiktok} target="_blank" rel="noreferrer" className="social-btn btn-tiktok">
//               <span className="fox-badge">{FOX}</span>
//               <span className="social-icon">🎵</span>
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

//           <div className="music-header">
//             {FOX} SHARE MY MUSIC {FOX}
//           </div>

//           <div className="music-controls">
//             <button className="ctrl-btn" onClick={prevSong}>◀◀</button>
//             <button className="ctrl-btn" onClick={nextSong}>▶▶</button>
//             <div className="track-label">
//               Track {currentSong + 1} of {CONFIG.songs.length}
//             </div>
//           </div>

//           <div className="song-dots">
//             {CONFIG.songs.map((_, i) => (
//               <div
//                 key={i}
//                 className={`dot ${i === currentSong ? 'active' : ''}`}
//                 onClick={() => setCurrentSong(i)}
//               />
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