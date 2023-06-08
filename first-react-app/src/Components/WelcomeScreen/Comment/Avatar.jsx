function Avatar(props) {
    return (
        <>
        <img className="Avatar" 
        src={props.avatarUrl} 
        alt={props.author.name} 
        />
        </>
    )
}

export default Avatar