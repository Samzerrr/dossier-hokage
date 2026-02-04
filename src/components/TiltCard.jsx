const TiltCard = ({ children, className = "" }) => {
    return (
        <div className={`tilt-card ${className}`}>
            <div className="tilt-content">
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
