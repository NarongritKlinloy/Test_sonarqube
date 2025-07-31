import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // หรือใช้ tsparticles-engine แล้วเลือกโหลดแบบใหม่

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        // loadSlim จะโหลดเฉพาะ module ที่จำเป็น
        await loadSlim(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 80, density: { enable: true, area: 800 } },
                    color: { value: '#000000' },
                    shape: { type: 'square' },
                    opacity: { value: 0.4 },
                    links: {
                        enable: true,
                        color: "#778899",
                        distance: 150,
                        opacity: 0.2,
                        width: 2,
                    },
                    move: { enable: true, speed: 2 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' },
                        onClick: { enable: true, mode: 'push' },
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 },
                    },
                },
                background: {
                    color: '#F5F5F5',
                },
            }}
        />
    );
};

export default ParticlesBackground;
