import Avatar from "./Avatar";

function UserInfo(props) {

    // console.log(props.user.avatarUrl)
  return (
    <div className="UserInfo">
      {" "}
      <Avatar author={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

export default UserInfo