import { useState } from "react";
import classes from "./Email.module.css";

const EmailContent = (props) => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState("");
  const [updatedDone, setUpdatedDone] = useState(true);
  const [oldEmail, setOldEmail] = useState("ahmed-zohdi@gmail.com");

  const emailIsInvalid = () => {
    if (!email.includes("@" && ".com")) {
      setInvalid(
        <p className={classes["margin-and-color"]}>
          Please enter a valid email.
        </p>
      );
    } else {
      setInvalid("");
      setUpdatedDone(false);
      setOldEmail(email);
      setEmail("");
    }
  };

  return (
    <div className={classes.content}>
      <h4>Change email address</h4>
      {!updatedDone && (
        <h4 className={classes.updated}>
          Your email has been updated successfully.
        </h4>
      )}
      <p>
        All future emails including newsletters and notifications will go to
        your new email address.
      </p>
      <p className={classes.margin}>Current email address</p>
      <h5>{oldEmail}</h5>
      {updatedDone && (
        <input
          className={classes["new-email"]}
          type="email"
          placeholder="New email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      )}
      {invalid}
      {updatedDone && (
        <div className={classes["setting-button"]}>
          <button className={classes.cancel} onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes["change-email"]} onClick={emailIsInvalid}>
            Change email address
          </button>
        </div>
      )}
      {!updatedDone && (
        <button
          className={classes.done}
          onClick={() => {
            setUpdatedDone(true);
          }}
        >
          Done
        </button>
      )}
    </div>
  );
};

export default EmailContent;
