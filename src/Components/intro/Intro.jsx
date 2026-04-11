import MainVideo from "/vid/Whiskeybottle.mp4"
import "./Intro.css"

const Intro = () => {

    return (
        <section className="intro" id="intro">
            <video id="video" autoPlay muted loop playsInline>
                <source src={MainVideo} type="video/mp4"></source>
            </video>

            <div className="intro-text">
                <h1>Guilherme H. G.'s<br /><span className="blue">Web</span> Portfolio</h1>
                <p>A portfolio showcasing my skills in 3D modeling, CAD design, programming, and visual design<br />built with a strong analytical and problem-solving mindset.</p>
            </div>
        </section>
    )
}

export default Intro