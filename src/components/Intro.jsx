import profilePhoto from '../../public/profile.png';


const Intro = () => {
    return (
        <section className="center" id="home">
            <div className="container-fluid">
                <img src={profilePhoto} alt="Profile" className="profile-photo img-thumbnail"/>
                <h1>Md Sharifur Rahman</h1>
                <p> Programmer, Full Stack Web Developer and Tech Enthusiast </p>
            </div>
        </section>
    );
};

export default Intro;