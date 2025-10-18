import React, { useState } from 'react';
import '../Styles/Avatar.css';
import Axios from 'axios';

const Avatar = () => {
  const [sprite, setSprite] = useState("bottts");
  const [seed, setSeed] = useState(1000);

  function handleSprite(spritetype) {
    setSprite(spritetype);
  }

  function handleGenerate() {
    let x = Math.floor(Math.random() * 1000);
    setSeed(x);
  }

  function downloadImage() {
    Axios({
      method: "get",
      url: `https://api.dicebear.com/7.x/${sprite}/svg?seed=${seed}`,
      responseType: "arraybuffer",
    })
      .then((response) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/octet-stream" })
        );
        link.download = `${seed}.svg`;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => window.URL.revokeObjectURL(link.href), 200);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <div className="nav">
        <p>Random Avatar Generator</p>
      </div>
      <div className="home">
        <div className="btns">
          <button onClick={() => handleSprite("avataaars")}>Human</button>
          <button onClick={() => handleSprite("pixel-art")}>Pixel</button>
          <button onClick={() => handleSprite("bottts")}>Bots</button>
          <button onClick={() => handleSprite("shapes")}>Vector</button>
          <button onClick={() => handleSprite("identicon")}>Identi</button>
          <button onClick={() => handleSprite("rings")}>Alien</button>
          <button onClick={() => handleSprite("micah")}>Avatars</button>
        </div>
        <div className="avatar">
          <img
            src={`https://api.dicebear.com/7.x/${sprite}/svg?seed=${seed}`}
            alt="Sprite"
          />
        </div>
        <div className="generate">
          <button id="gen" onClick={handleGenerate}>Next</button>
          <button id="down" onClick={downloadImage}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
