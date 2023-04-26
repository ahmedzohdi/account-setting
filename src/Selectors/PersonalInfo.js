import { useEffect, useState } from "react";
import classes from "./PersonalInfo.module.css";
const PersonalInfo = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    role: "",
    linkedin: "",
    about: "",
  });
  const [onEdit, setOnEdit] = useState(true);

  const formData = "http://localhost:4000/savedInfo";

  const loadFormData = async () => {
    const response = await fetch(formData);
    const responseData = await response.json();
    setInfo(responseData);
  };
  useEffect(() => {
    loadFormData();
  }, []);

  const basicFormData = async () => {
    const response = await fetch(formData);
    const responseData = await response.json();
    setInfo(responseData);
    setOnEdit(true);
  };

  const editInfoHandler = async () => {
    const editData = await fetch(`http://localhost:4000/savedInfo/`, {
      method: "PUT",
      body: JSON.stringify(info),
      headers: { "content-type": "application/json" },
    });
    const resData = await editData.json();
    console.log(resData);
    loadFormData();
    setOnEdit(true);
  };

  const editHandler = () => {
    setOnEdit(false);
  };

  const changeHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.personal}>
      <h4>Personal Information</h4>
      <div className={classes.name}>
        <input
          type="text"
          placeholder="First Name"
          value={info.firstName}
          name={"firstName"}
          onChange={changeHandler}
          readOnly={onEdit}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={info.lastName}
          name={"lastName"}
          onChange={changeHandler}
          readOnly={onEdit}
        />
      </div>
      <input
        type="text"
        placeholder="Role"
        value={info.role}
        name={"role"}
        onChange={changeHandler}
        readOnly={onEdit}
      />
      <input
        type="text"
        placeholder="Linkedin profile URL (optional)"
        value={info.linkedin}
        name={"linkedin"}
        onChange={changeHandler}
        readOnly={onEdit}
      />
      <textarea
        placeholder="About yourself."
        maxLength="200"
        value={info.about}
        name={"about"}
        onChange={changeHandler}
        readOnly={onEdit}
      />

      {onEdit && (
        <button className={classes.edit} onClick={editHandler}>
          Edit Profile
        </button>
      )}
      {onEdit === false ? (
        <div className={classes["setting-button"]}>
          <button className={classes.cancel} onClick={basicFormData}>
            Cancel
          </button>
          <button className={classes.save} onClick={editInfoHandler}>
            Save
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PersonalInfo;
