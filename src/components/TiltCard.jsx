const TiltCard = ({ children, className = "" }) => {
    return (
        <div className="tilt-card">
            <div className={`tilt-content ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
