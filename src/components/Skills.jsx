const Skills = ({skillSet}) => {
    return (
        <div className="col-sm-2">
            <div className="row">
                <div className="row">
                    <h5 className="mb-4 mt-4 center">
                        {/*{skillSet.title.split('\n').map((line, index) => {*/}
                        {/*    return <span key={index}>*/}
                        {/*        {line}*/}
                        {/*        <br/>*/}
                        {/*    </span>*/}
                        {/*})}*/}
                        {/*<div  className="card">
                            <div className="card-body">
                                {skillSet.title}
                            </div>
                        </div>*/}
                        {skillSet.title}
                    </h5>
                </div>
                <div className="row skills">
                    {skillSet.skills.map((skill, index) => (
                        // <div key={index} className="card border-0 mb-4">
                        //     <div className="card-body">
                        //         <b className="card-title text-center">{skill}</b>
                        //     </div>
                        // </div>
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