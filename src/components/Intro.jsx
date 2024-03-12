import profilePhoto from '../../public/profile.png';


const Intro = () => {
    return (
        <section className="intro">
            <div className="container-fluid">
                <img src={profilePhoto} alt="Profile" className="profile-photo img-thumbnail"/>
                <h1>Md Sharifur Rahman</h1>
                <hr />
                <h3> Programmer, Web Developer &amp; Tech Enthusiast </h3>
                <p>
                    Dedicated to crafting elegant full-stack solutions and embracing the art of programming.
                    <br />
                    I really love what I do.
                </p>
            </div>
        </section>
    );
};

export default Intro;