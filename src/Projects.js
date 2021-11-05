import './Shared.css';

function Projects (props) {
    return(
        <div className='projects-div'>
                <img className='project-img' src={props.src}></img>
                <h4>{props.title}</h4>
                <p>{props.description}
                </p>            
        </div>
    )
}
export default Projects;