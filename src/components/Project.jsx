const Project = (props) => {

    // eslint-disable-next-line react/prop-types
    const {image, title, description, url} = props;

    return (
        <div className="col">
            <div className="card">
                <div className="center m-3">
                    <img src={image} className="project-img img-fluid img-thumbnail" alt="project screenshot"/>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary mt-1" target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
    );
};

export default Project;