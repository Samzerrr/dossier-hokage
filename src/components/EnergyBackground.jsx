const EnergyBackground = () => {
  return (
    <div className="energy-bg-container">
      {/* Deep dark base */}
      <div className="bg-layer base"></div>

      {/* Static Energy Blobs */}
      <div className="energy-blob blob-1" />
      <div className="energy-blob blob-2" />

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
          opacity: 0.4;
        }
        
        .blob-1 {
          width: 80vw; height: 80vw;
          background: radial-gradient(circle, rgba(255, 61, 0, 0.4) 0%, rgba(255, 61, 0, 0) 70%);
          bottom: -30%; left: -20%;
        }
        
        .blob-2 {
          width: 70vw; height: 70vw;
          background: radial-gradient(circle, rgba(255, 138, 80, 0.3) 0%, rgba(255, 138, 80, 0) 70%);
          top: -20%; right: -20%;
        }
      `}</style>
    </div>
  );
};

export default EnergyBackground;
