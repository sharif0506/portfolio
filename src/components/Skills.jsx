const Skills = ({skillSet}) => {
    return (
        <div className="col flex-grow-1">
            <div className="row">
                <div className="row">
                    <h5 className="mb-4 mt-4 center">
                        {skillSet.title}
                    </h5>
                </div>
                <div className="row skills">
                    {skillSet.skills.map((skill, index) => (
                        <div key={index} className="mb-2">
                            <p className="center">{skill}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;