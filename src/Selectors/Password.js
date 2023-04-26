import { useState } from "react";
import showPw from "../Images/show.png";
import hidePw from "../Images/hide.png";

import classes from "./password.module.css";

const Password = () => {
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [updatedPw, setUpdatedPw] = useState("");
  const [updatedDone, setUpdatedDone] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPw, setShowConfirmPw] = useState(true);

  const newPasswordHandler = (e) => {
    if (newPw.length > 0 && newPw.length < 8) {
      return (
        <p className={classes.error}>
          Password must has at least 8 characters.
        </p>
      );
    }
  };

  const confirmPwHandler = () => {
    if (confirmPw !== newPw) {
      return (
        <p className={classes.error}>Both passwords should be the same!</p>
      );
    }
  };

  const saveHandler = () => {
    console.log(`New Password : ${newPw}`);
    setNewPw("");
    setConfirmPw("");
    setUpdatedPw(
      <h4 className={classes.updated}>
        Your password has been updated successfully.
      </h4>
    );
    setUpdatedDone(false);
    setShowPassword(true);
    setShowConfirmPw(true);
  };

  const newPwError =
    newPw.length > 0 && newPw.length < 8
      ? classes.invalid
      : newPw.length >= 8
      ? classes.success
      : classes.valid;

  const confirmPwError =
    confirmPw !== newPw
      ? classes.invalid
      : confirmPw === newPw && confirmPw.length > 0
      ? classes.success
      : classes.valid;

  const buttonIsActive = confirmPw === newPw && confirmPw.length > 0;

  return (
    <div className={classes.password}>
      <h4>Change Password</h4>
      {updatedPw}
      {updatedDone && (
        <div className={newPwError}>
          <input
            type={showPassword ? "password" : "text"}
            placeholder="New Password"
            value={newPw}
            onChange={(e) => {
              setNewPw(e.target.value);
            }}
          />
          {showPassword && (
            <div>
              <img
                className={classes.icon}
                onClick={() => setShowPassword(false)}
                src={showPw}
                alt=""
              />
            </div>
          )}
          {!showPassword && (
            <img
              className={classes.icon}
              onClick={() => setShowPassword(true)}
              src={hidePw}
              alt=""
            />
          )}
        </div>
      )}
      {updatedDone && newPasswordHandler()}
      {updatedDone && (
        <div className={confirmPwError}>
          <input
            type={showConfirmPw ? "password" : "text"}
            value={confirmPw}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPw(e.target.value);
            }}
          />
          {showConfirmPw && (
            <img
              className={classes.icon}
              src={showPw}
              onClick={() => {
                setShowConfirmPw(false);
              }}
              alt=""
            />
          )}
          {!showConfirmPw && (
            <img
              className={classes.icon}
              src={hidePw}
              onClick={() => {
                setShowConfirmPw(true);
              }}
              alt=""
            />
          )}
        </div>
      )}
      {updatedDone && confirmPwHandler()}

      {updatedDone && (
        <div className={classes["setting-button"]}>
          <button
            className={classes.cancel}
            onClick={() => {
              setNewPw("");
              setConfirmPw("");
            }}
          >
            Cancel
          </button>
          <button
            className={buttonIsActive ? classes.save : classes["cant-save"]}
            disabled={buttonIsActive ? false : true}
            onClick={saveHandler}
          >
            Save
          </button>
        </div>
      )}
      {!updatedDone && (
        <button
          className={classes.done}
          onClick={() => {
            setUpdatedPw("");
            setUpdatedDone(true);
          }}
        >
          Done
        </button>
      )}
    </div>
  );
};

export default Password;
