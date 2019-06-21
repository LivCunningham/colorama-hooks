import React, { useState } from 'react'

export default function Slider() {
  const [hue, setHue] = useState(Math.floor(Math.random(setHue) * 320))
  const [saturation, setSaturation] = useState(
    Math.floor(Math.random(setSaturation) * 100)
  )
  const [lightness, setLightness] = useState(
    Math.floor(Math.random(setLightness) * 100)
  )
  const [alpha, setAlpha] = useState(Math.floor(Math.random(setAlpha) * 100))

  const getRandom = () => {
    setHue(Math.floor(Math.random() * 320))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
    setAlpha(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <section
        className="colors-yo"
        style={{
          backgroundColor: `hsl(${hue}, 
            ${saturation}%,
            ${lightness}%,
            ${alpha}%
            )`
        }}
      >
        <span className="colorme">COLOR ME</span>
      </section>

      <section className="sliders">
        <div>
          <input
            className="H"
            type="range"
            min="0"
            max="320"
            // value={setHue}
            onChange={e => setHue(e.target.value)}
          />
          <h1>HUE</h1>
        </div>

        <div>
          <input
            className="S"
            type="range"
            min="0"
            max="100"
            // value="setSaturation"
            onChange={e => setSaturation(e.target.value)}
          />
          <h1>SATURATION</h1>
        </div>

        <div>
          <input
            className="L"
            type="range"
            min="0"
            max="100"
            // value="setLightness"
            onChange={e => setLightness(e.target.value)}
          />
          <h1>LIGHTNESS</h1>
        </div>

        <div>
          <input
            className="A"
            type="range"
            min="0"
            max="100"
            // value="setAlpha"
            onChange={e => setAlpha(e.target.value)}
          />
          <h1>ALPHA</h1>
        </div>
        <button onClick={getRandom}>
          <span role="img">🌈</span>
        </button>
      </section>
    </>
  )
}
