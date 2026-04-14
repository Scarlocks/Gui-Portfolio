import "./Projects.css";

const imgPath = (name) => `${import.meta.env.BASE_URL}/img/${name}`;

const projects = [
    {
        img: imgPath("1GlassCup.webp"),
        head: "Curved surface",
        txt: <>
            A surface study based on a <span className="blue">twisted</span> cylindrical form.
            Focused on achieving <span className="blue">smooth curvature</span>, clean topology, and controlled shading.
        </>
    }, {
        img: imgPath("2SailorDesign.webp"),
        head: "Sailor Design",
        txt: <>
            A versatile design inspired by <span className="blue">nautical</span> safety symbols.
            <span className="blue"> Adaptable</span> across multiple themes and branding contexts.
        </>
    }, {
        img: imgPath("3CADtomada.webp"),
        head: "Precise Detail",
        txt: <>
            A highly detailed CAD model of a light socket.
            This <span className="blue">project</span> emphasizes precision, measurements, and <span className="blue">attention</span> to detail.
        </>
    }, {
        img: imgPath("4CamisetaHS.webp"),
        head: "HS T-shirt Design",
        txt: <>
            A custom t-shirt design based on the <span className="blue">Hackerspace</span> identity.
            Created to balance visual appeal with brand <span className="blue">recognition</span>.
        </>
    }, {
        img: imgPath("5KnifeRender.webp"),
        head: "Textured Knife",
        txt: <>
            A <span className="blue">textured</span> kitchen knife model focused on material realism.
            The handle required careful work to replicate <span className="blue">grip patterns</span> and surface variation.
        </>
    }, {
        img: imgPath("6LTT.webp"),
        head: "LTT-Inspired Design",
        txt: <>
            A bold visual <span className="blue">concept</span> featuring a central icon, banner structure, and wing elements for strong <span className="blue">visual identity</span>.
        </>
    }, {
        img: imgPath("7Apartment.webp"),
        head: "High-Res render",
        txt: <>
            A 1:1 scale architectural model focused on <span className="blue">realism</span> and <span className="blue">detail</span>.
            Every component contributes to the <span className="blue">final composition</span>, reinforcing visual fidelity.
        </>
    }, {
        img: imgPath("8SemanadaQuimica.webp"),
        head: "Semana de Química",
        txt: <>
            A <span className="blue">logo</span> concept developed for a chemistry event.
            Translates <span className="blue">scientific</span> identity into a clean visual format.
        </>
    }, {
        img: imgPath("9Materials.webp"),
        head: "Custom Materials",
        txt: <>
            Deep and interesting <span className="blue">materials</span>, that ranges from 'just a blur' to random tilings.
            they can be <span className="blue">complex</span>.
        </>
    }, {
        img: imgPath("91Motherboard.webp"),
        head: "Motherboard",
        txt: <>
            A mini-ITX motherboard modeled with <span className="blue">strict</span> dimensional accuracy.
            Makes use of CAD <span className="blue"> precision </span>to represent it's components.
        </>
    }, {
        img: imgPath("92TextureSample.webp"),
        head: "A Texutre Sample",
        txt: <>
            A procedural texture study developed from abstract visual <span className="blue">references</span>.
            This project explores <span className="blue">tiling</span>, <span className="blue">gradients</span>, and node-based workflows in Blender to generate complex, seamless surface designs.
        </>
    },
]

const Projects = () => {

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h1>&lt;Selected Work&gt;</h1>

                {projects.map((prop, index) => (
                    <div key={index} className={`project ${index % 2 ? "reverse" : ""}`}>
                        <div className="img-container">
                            <img src={prop.img} loading="lazy" onContextMenu={(e) => e.preventDefault()} alt="" /></div>
                        <div className="project-text">
                            <h2>{prop.head}</h2>
                            <p>{prop.txt}</p>
                        </div>

                    </div>
                ))}
                <div className="spacer"></div>
                <h2>If you're interested in working together, feel free to reach out. I'd be glad to discuss how I can contribute to your team. <br />↓ <span className="blue">Hit me up.</span> My <span className="blue">links</span> are <span className="blue">below</span>. ↓</h2>
            </div>
        </section>
    )
}

export default Projects