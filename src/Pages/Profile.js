import { useState } from "react";
import Email from "../Selectors/Email/Email";
import Password from "../Selectors/Password";
import PersonalInfo from "../Selectors/PersonalInfo";

import classes from "./Profile.module.css";

const Profile = () => {
  const [accountInfo, setAccountInfo] = useState("personalInfo");

  const selectedAccountInfo = () => {
    if (accountInfo === "personalInfo") {
      return <PersonalInfo />;
    } else if (accountInfo === "password") {
      return <Password />;
    } else if (accountInfo === "email") {
      return <Email />;
    }
  };

  const selectedInfo = accountInfo === "personalInfo" ? classes.selected : "";
  const selectedPassword = accountInfo === "password" ? classes.selected : "";
  const selectedEmail = accountInfo === "email" ? classes.selected : "";

  return (
    <div className={classes.profile}>
      <div className={classes.manage}>
        <h4>Profile</h4>
        <p>Manage your account and update your details below.</p>
      </div>
      <div className={classes["account-manage"]}>
        <div className={classes.selectors}>
          <div className={classes["account-selectors"]}>
            <h4 className={classes.account}>Account</h4>
            <h4
              className={selectedInfo}
              onClick={() => {
                setAccountInfo("personalInfo");
              }}
            >
              Personal Information
            </h4>
            <h4
              className={selectedPassword}
              onClick={() => {
                setAccountInfo("password");
              }}
            >
              Password
            </h4>
            <h4
              className={selectedEmail}
              onClick={() => {
                setAccountInfo("email");
              }}
            >
              Email
            </h4>
          </div>
        </div>
        {selectedAccountInfo()}
      </div>
    </div>
  );
};
export default Profile;
