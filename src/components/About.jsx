const About = () => {
    return (
        <section className="about-me" id="about">
            <div className="container-fluid mt-5">
                <h2 className="text-center mb-4">About Me</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row mb-4">
                            <div className="col-md-6 center align-self-center">
                                <div className="p-5 m-1 border rounded-5">
                                    <i className="fa-solid fa-award fs-3"></i>
                                    <h3 className="mb-4">Experience</h3>
                                    <h4>Fullstack Development</h4>
                                    <p>6+ years</p>
                                </div>

                            </div>
                            <div className="col-md-6 center align-self-center">
                                <div className="p-5 m-1 border rounded-5">
                                    <i className="fa-solid fa-user-graduate fs-3"></i>
                                    <h3 className="mb-4">Education</h3>
                                    <h4>Bachelor's in Software Engineering</h4>
                                    <h4>Master's in Software Engineering</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <p className="center">
                                Passionate full-stack web application developer with expertise in building secure, scalable applications and with a comprehensive skill set spanning front-end and back-end technologies, databases, programming languages, and mobile app development.
                                I’ve almost 6+ years of professional experience in software development and have proven my ability with a positive attitude to
                                work independently or as part of a team. Seeking a role in building a front-end/back-end development where I can leverage my
                                expertise to contribute to innovative projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;