import React, { useCallback, useState } from 'react';
import Particles from "react-particles";
import { loadLinksPreset } from "tsparticles-preset-links";
import './App.css';

function App() {

    const [particleOptions, setParticleOptions] = useState({
        "background": {
            "color": {
                "value": "#000000"
            }
        },
        "preset": "links",
        "particles": {
            "color": {
                "value": "#ffffff"
            },
            "links": {
                "color": "#ffffff",
                "distance": 100,
                "enable": true,
                "opacity": 1,
                "width": 0.2
            },
            "collisions": {
                "enable": false
            },
            "number": {
                "density": {
                    "enable": false,
                    "area": 1000
                },
                "value": 150
            },
            "move": {
                "direction": "none",
                "enable": true,
                "outModes": {
                    "default": "bounce"
                },
                "random": true,
                "speed": 0.1,
                "straight": true
            },
            "opacity": {
                "value": 1
            },
            "shape": {
                "type": "circle"
            },
            "size": {
                "value": {
                    "min": 0.5,
                    "max": 1.5
                }
            }
        },
        "detectRetina": true
    })

    const particlesInit = useCallback(async main => {
        return loadLinksPreset(main);
    }, [])

    const agitateStars = async (opts, enter = true) => {
        opts.particles.move.speed = enter ? 5 : 1
        setParticleOptions(opts)
    }

    return (
        <div className="App">
            <Particles options={particleOptions} init={particlesInit} />
            <header className="App-header">
                <a onMouseLeave={() =>agitateStars(particleOptions, false)} onMouseEnter={() => agitateStars(particleOptions)} className='genesis' style={{ "textDecoration": "none" }} href="https://bit.ly/let-us-be-frens">--. . -. . ... .. ...</a>
            </header>
            <footer style={{ position: "absolute", "marginBottom": "10px", "width": "100%", "bottom": "0" }}>
                <a style={{ color: "white", "textDecoration": "none", "fontSize": "10px" }} href="https://twitter.com/dotseemple">@dotseemple</a>
            </footer>
        </div>
    );
}

export default App;
