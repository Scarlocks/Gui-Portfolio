import { useState } from "react";
import "./Featured.css"
import { SiBlender } from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { playClick2 } from "../../utils/ClickSound";


const featuredcard = [
    {
        icon: < SiBlender className="icon" />,
        head: "3D & CAD Modeling",
        txt: "I specialize in creating both artistic and realistic 3D models, with a strong focus on hard-surface precision and detail.",
    },
    {
        icon: <TbBrandAdobe className="icon" />,
        head: "2D Design & Visual Media",
        txt: "Experienced in vector design, photo editing, and video compositing using industry-standard tools.",
    },
    {
        icon: <VscServerProcess className="icon" />,
        head: "Programming & Automation",
        txt: "Building Python-based solutions to streamline repetitive workflows and improve efficiency.",
    },
    {
        icon: <BsFileEarmarkSpreadsheetFill className="icon" />,
        head: "Data Analysis & Spreadsheets",
        txt: "Creating structured calculations, identifying inefficiencies, and improving data accuracy.",
    },
]

const Featured = () => {

    const [activeFlipped, setActiveFlipped] = useState(null);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleClick = (index) => {
        if (index === activeFlipped) { setActiveFlipped(null); return; }

        setIsFlipping(true);

        setTimeout(() => {
            setActiveFlipped(index);
        }, 150);

        setTimeout(() => {
            setIsFlipping(false);
        }, 300);
    };

    return (
        <section className="featured" id="featured">
            <div className="container">
                <h3>Driven by Logic</h3>
                <p>With the foundation of strong mathematical and analytical background.<br /><br />This allows me to approach problems with both precision and creativity.</p>
                <div className="icons-container">
                    {featuredcard.map((prop, index) => (
                        <div className={`icons ${activeFlipped === index ? "active" : ""}`} key={index} onClick={() => { playClick2(); handleClick(index); }}>
                            {prop.icon}
                        </div>
                    ))}
                </div>

                <div className={`boxtext ${isFlipping ? "flipping" : ""}`}>
                    {activeFlipped !== null && (
                        <>
                            <h3>{featuredcard[activeFlipped].head}</h3>
                            <p>{featuredcard[activeFlipped].txt}</p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Featured