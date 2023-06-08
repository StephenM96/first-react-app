import UserInfo from "./UserInfo";

function Comment(props) {
  console.log(props.author)
  return (
    <div className="Comment componentBox">
      <UserInfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleString()}</div>
    </div>
  );
}

export default Comment;
