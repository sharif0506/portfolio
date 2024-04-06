import profilePhoto from '../assets/profile.png';
import Resume from '../assets/Md_Sharifur_Rahman_2024_resume.pdf';


const Intro = () => {
    return (
        <section className="center" id="home">
            <div className="container-fluid mt-5">
                <img src={profilePhoto} alt="Profile" className="profile-photo mb-4"/>
                <h1>Md Sharifur Rahman</h1>
                <p> Programmer, Full Stack Web Developer and Tech Enthusiast </p>
                <div className="justify-content-center">
                    <a type="button" className="btn btn-dark rounded-4 m-2" href={Resume} target="_blank">
                        <i className="fa-solid fa-download"></i> Download CV
                    </a>


                    {/*

                    import ExampleDoc from '......src/assets/files/exampleDoc.pdf'
`


                    */}
                    <button type="button" className="btn btn-primary rounded-4 m-2">
                        <i className="fa-solid fa-location-arrow"></i> Contact Me
                    </button>
                </div>
                <div className="justify-content-center mt-4">
                    <a href="https://www.linkedin.com/in/sharif0506/" className="m-2 btn-social">
                        <i className="fa-brands fa-linkedin fa-2x" style={{ color: '#0077B5' }}></i>
                    </a>
                    <a href="https://github.com/sharif0506" className="m-2 btn-social">
                        <i className="fa-brands fa-github fa-2x" style={{ color: '#333' }}></i>
                    </a>
                    <a href="https://stackoverflow.com/users/5184543/sharif-rahman" className="m-2">
                        <i className="fa-brands fa-stack-overflow fa-2x" style={{ color: '#f48024' }}></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;