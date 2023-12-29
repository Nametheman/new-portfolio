import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const ParticlesComponent = () => {
  const particlesInit = useCallback(async (main: any) => {
    console.log(main);
    await loadFull(main);
  }, []);
  const particlesLoaded = (container: any): Promise<void> => {
    console.log(container);
    return Promise.resolve();
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },

          links: {
            color: "#ffffff1a",
            distance: 100,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
