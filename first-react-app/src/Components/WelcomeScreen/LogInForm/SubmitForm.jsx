import { useState } from "react";

function SubmitForm() {
  const [submitResult, setSubmitResult] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful Login");
    }
    // console.log(e.target[1].type)
    // e.target[1].type = "text"
    //Just wanted to see if I could access the password text... Can maybe use this to make a "show password" button later
  };

  return (
    <div className="LogInForm componentBox">
      <form onSubmit={handleSubmit}>

        <div>
          <label>
            Email Address:
            <input
              type="email"
              onChange={(e) => setUserEmail(e.target.value)}
              name="userEmail"
              value={userEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              name="userPassword"
              value={userPassword}
            />
          </label>
        </div>

        <div>
          <button>Log In</button>
          <p>{submitResult}</p>
        </div>
        
      </form>
    </div>
  );
}

export default SubmitForm;
