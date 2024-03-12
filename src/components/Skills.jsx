const Skills = ({skillSet}) => {
    return (
        <div className="col-md-2">
            <div className="row">
                <div className="row">
                    <h5 className="mb-4 mt-4">
                        {skillSet.title.split('\n').map((line, index) => {
                            return <span key={index}>
                                {line}
                                <br/>
                            </span>
                        })}
                    </h5>
                </div>
                <div className="row skills">
                    {skillSet.skills.map((skill, index) => (
                        <div key={index} className="card border-0 mb-4">
                            <div className="card-body">
                                <h6 className="card-title text-center">{skill}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;