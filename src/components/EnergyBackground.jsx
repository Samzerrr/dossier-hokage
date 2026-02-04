import { motion } from 'framer-motion';

const EnergyBackground = () => {
  return (
    <div className="energy-bg-container">
      {/* Deep dark base */}
      <div className="bg-layer base"></div>

      {/* Moving Energy Blobs */}
      <motion.div
        className="energy-blob blob-1"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="energy-blob blob-2"
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.5, 1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Noise Overlay for texture */}


      <style>{`
        .energy-bg-container {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: -1;
          overflow: hidden;
          background: #050505;
        }
        
        .energy-blob {
          position: absolute;
          border-radius: 50%;
          /* No filter: blur() - pure gradient fallback for performance */
          opacity: 0.4;
          will-change: transform;
          transform: translateZ(0);
        }
        
        .blob-1 {
          width: 80vw; height: 80vw;
          /* Smooth gradient simulates blur without cost */
          background: radial-gradient(circle, rgba(255, 61, 0, 0.4) 0%, rgba(255, 61, 0, 0) 70%);
          bottom: -30%; left: -20%;
        }
        
        .blob-2 {
          width: 70vw; height: 70vw;
          background: radial-gradient(circle, rgba(255, 138, 80, 0.3) 0%, rgba(255, 138, 80, 0) 70%);
          top: -20%; right: -20%;
        }

        /* Removed external noise URL to prevent load lag */
      `}</style>
    </div>
  );
};

export default EnergyBackground;
