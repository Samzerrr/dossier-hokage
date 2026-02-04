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

        .static-leaf {
          position: absolute;
          width: 30px;
          height: auto;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
});

export default LeafOverlay;
