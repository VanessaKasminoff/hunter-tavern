import "../assets/css/HXHLogoAnimation.css"

const HXHLogoAnimation = ({altered, setAltered}) => {
    return (
        <div className="hxh-splash">
            <div className="primary-wrapper example-one"> {/* onClick={() => setAltered(!altered)} */}
            <div className="drop-shadow-wrapper">
                <div className={`x ${altered ? 'left-x' : "shmedium-x"}`}></div>
                <div className={`x ${altered ? 'right-x-transform' : "shmedium-x"}`}></div>
            </div>
                <div className={`diamond ${altered ? 'visible-by-expansion' : ""}`}></div>
            </div>
        </div>
    )
}

export default HXHLogoAnimation