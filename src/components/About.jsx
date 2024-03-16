import profilePhoto from "../../public/profile.png";

const About = () => {
    return (
        <section className="about-me">
            <div className="container-fluid">
                <h2 className="text-center mb-4">About Me</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                        </p>
                    </div>
                    <div className="col-md-6 center align-self-center">
                        <div className="p-5 m-1 border rounded-5">
                            <i className="fa-solid fa-award fs-3"></i>
                            <h3>Experience</h3>

                            <div>
                                <h4>Fullstack Development</h4>
                                <p>6+ years</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 center align-self-center">
                        <div className="p-5 m-1 border rounded-5">
                            <i className="fa-solid fa-user-graduate fs-3"></i>
                            <h3>Education</h3>

                            <div>
                                <h4>Bachelor's in Software Engineering</h4>
                                <p></p>
                            </div>
                            <div>
                                <h4>Master's in Software Engineering</h4>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;