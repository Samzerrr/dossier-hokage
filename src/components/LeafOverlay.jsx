import { memo } from 'react';

const LeafOverlay = memo(() => {
  // Static generation of leaves
  const leaves = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    scale: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="leaf-overlay-container">
      {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src="/assets/images/leaf.svg"
          className="static-leaf"
          style={{
            left: leaf.left,
            top: leaf.top,
            transform: `scale(${leaf.scale})`,
          }}
          alt=""
        />
      ))}
      <style>{`
        .leaf-overlay-container {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        .static-leaf {
          position: absolute;
          width: 30px;
          height: auto;
          opacity: 0.3;
          animation: fall linear infinite, sway ease-in-out infinite;
        }

        .static-leaf:nth-child(1) { animation-duration: 15s, 3s; animation-delay: 0s, 0s; }
        .static-leaf:nth-child(2) { animation-duration: 18s, 3.5s; animation-delay: 2s, 0.5s; }
        .static-leaf:nth-child(3) { animation-duration: 20s, 4s; animation-delay: 4s, 1s; }
        .static-leaf:nth-child(4) { animation-duration: 16s, 3.2s; animation-delay: 1s, 0.3s; }
        .static-leaf:nth-child(5) { animation-duration: 19s, 3.8s; animation-delay: 3s, 0.8s; }
        .static-leaf:nth-child(6) { animation-duration: 17s, 3.3s; animation-delay: 5s, 1.2s; }
        .static-leaf:nth-child(7) { animation-duration: 21s, 4.2s; animation-delay: 2.5s, 0.6s; }
        .static-leaf:nth-child(8) { animation-duration: 15.5s, 3.1s; animation-delay: 4.5s, 1.1s; }
        .static-leaf:nth-child(9) { animation-duration: 18.5s, 3.7s; animation-delay: 1.5s, 0.4s; }
        .static-leaf:nth-child(10) { animation-duration: 16.5s, 3.3s; animation-delay: 3.5s, 0.9s; }
        .static-leaf:nth-child(11) { animation-duration: 19.5s, 3.9s; animation-delay: 0.5s, 0.2s; }
        .static-leaf:nth-child(12) { animation-duration: 17.5s, 3.5s; animation-delay: 2.8s, 0.7s; }
        .static-leaf:nth-child(13) { animation-duration: 20.5s, 4.1s; animation-delay: 4.2s, 1.3s; }
        .static-leaf:nth-child(14) { animation-duration: 16.2s, 3.2s; animation-delay: 1.8s, 0.5s; }
        .static-leaf:nth-child(15) { animation-duration: 18.8s, 3.8s; animation-delay: 3.2s, 1s; }
      `}</style>
    </div>
  );
});

export default LeafOverlay;

