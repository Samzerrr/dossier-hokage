import { memo } from 'react';

const LeafOverlay = memo(() => {
    // Static generation of leaves to avoid re-renders
    const leaves = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 15}s`,
        scale: 0.5 + Math.random() * 0.5,
    }));

    return (
        <div className="leaf-overlay-container">
            {leaves.map((leaf) => (
                <img
                    key={leaf.id}
                    src="/assets/images/leaf.svg"
                    className="optimized-leaf"
                    style={{
                        left: leaf.left,
                        animationDelay: leaf.animationDelay,
                        animationDuration: leaf.animationDuration,
                        transform: `scale(${leaf.scale})`, // Initial scale
                    }}
                    alt=""
                />
            ))}
            <style>{`
        .leaf-overlay-container {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1; /* Above background, below content */
          overflow: hidden;
        }

        .optimized-leaf {
          position: absolute;
          top: -10%;
          width: 30px;
          height: auto;
          opacity: 0.3;
          will-change: transform;
          animation-name: fall-linear;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall-linear {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(20vw, 110vh, 0) rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
});

export default LeafOverlay;
