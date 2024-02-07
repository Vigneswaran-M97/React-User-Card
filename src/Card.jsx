
function Card(props) {
    
    return (
        <div className="card-container">
            <span className={props.status ? 'pro online' : 'pro offline'}>{props.status ? 'ONLINE' : 'OFFLINE'}</span>
            <img src={props.img} className="img" width={150} height={150} alt="profile" srcset=""/>
            <h3>{props.name}</h3>
            <h3>{props.place}</h3>
            <p>{props.titel}</p>
            <div className="buttons">
                <button className="primary">{props.but1}</button>
                <button className="primary outline">{props.Follow ? 'Following':'Follow'}</button>
            </div>
            <div className="skills">
                <h6>{props.skills}</h6>
                <ul>
                    {props.skillslist.map((skills,index)=>(
                        <li key={index}>{skills}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card