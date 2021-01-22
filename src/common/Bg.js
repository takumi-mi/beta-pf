import React from "react";
import Particles from "react-particles-js";

export default function Header() {
  return (
    <div>
      <div class="Bg">
        <Particles
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: false
                }
              },
              color: {
                value: "#888"
              },
              links: {
                color: "#aaa",
                distance: 500,
                enable: true,
                opacity: 1,
                width: 1
              },
              size: {
                value: 6,
                random: true,
                anim: {
                  speed: 1,
                  size_min: 0.1
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}
