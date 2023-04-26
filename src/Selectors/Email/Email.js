import { useState, useEffect } from "react";
import EmailContent from "./EmailContent";
import showPw from "../../Images/show.png";
import hidePw from "../../Images/hide.png";
import classes from "./Email.module.css";

const Email = () => {
  const [pwInfo, setPwInfo] = useState({});
  const [password, setPassword] = useState("");
  const [showCurrentPw, setShowCurrentPw] = useState(true);
  const [invalid, setinvalid] = useState(true);
  const [valid, setValid] = useState(true);
  const [changeEmail, setChangeEmail] = useState("");

  const loadPwData = async () => {
    const response = await fetch("http://localhost:4000/savedInfo");
    const responseData = await response.json();
    setPwInfo(responseData);
  };
  useEffect(() => {
    loadPwData();
  }, []);

  const cancelHandler = () => {
    setValid(true);
    setChangeEmail("");
  };

  const currentPasswordHandler = () => {
    if (password !== pwInfo.password) {
      setinvalid(false);
    } else if (password === pwInfo.password) {
      setPassword("");
      setinvalid(true);
      setValid(false);
      setShowCurrentPw(true);
      setChangeEmail(<EmailContent onCancel={cancelHandler} />);
    }
    console.log(password);
  };

  return (
    <div className={classes.email}>
      {valid && (
        <div className={classes.content}>
          <h4>Enter password</h4>
          <p>For security, please re-enter your current password.</p>
          <div className={classes["current-pw"]}>
            <input
              type={showCurrentPw ? "password" : "text"}
              placeholder="Current password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {showCurrentPw && (
              <img
                className={classes.icon}
                onClick={() => setShowCurrentPw(false)}
                src={showPw}
                alt=""
              />
            )}
            {!showCurrentPw && (
              <img
                className={classes.icon}
                onClick={() => setShowCurrentPw(true)}
                src={hidePw}
                alt=""
              />
            )}
          </div>
          {!invalid && <p className={classes.error}>Password is incorrect.</p>}
          <button className={classes.continue} onClick={currentPasswordHandler}>
            Continue
          </button>
        </div>
      )}
      {changeEmail}
    </div>
  );
};

export default Email;
