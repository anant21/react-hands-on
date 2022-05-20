import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import validateField from "../../scripts/validation.script";
import "./home.styles.scss";
import resetErrCSS from "../../scripts/resetErrCss";
import ErrorDisplay from "../error-display/error-display.component";

const defaultFormFields = {
  associateName: "",
  associateId: "",
  projectId: "",
  shores: ["OffShore", "OnShore"],
  location1: ["Chennai", "Banglore", "Hyderabad", "Pune", "Kochi"],
  location2: ["US", "Non US"],
  location: [],
  finalLoc: "location-message",
  skills: [
    { name: "HTML5, CSS, JS", checked: false },
    { name: "Angular 8", checked: false },
    { name: "Express JS", checked: false },
    { name: "SASS", checked: false },
    { name: "ReactJS", checked: false },
    { name: "NodeJS", checked: false },
    { name: "ES5, ES6, ES7...", checked: false },
    { name: "VueJS", checked: false },
    { name: "MongoDB", checked: false },
    { name: "Bootstrap 4", checked: false },
    { name: "TypeScript", checked: false },
  ],
  profile: "",
  comments: "",
};

const errorFormFields = {
  associateNameErr: "",
  associateIdErr: "",
  projectIdErr: "",
  finalLocErr: "",
  skillsErr: "",
  profileErr: "",
  commentsErr: "",
};

const isformValid = {
  valid: false,
};

const Home = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    associateName,
    associateId,
    projectId,
    shores,
    location1,
    location2,
    location,
    skills,
    comments,
  } = formFields;

  const [formFieldErrors, setFormFieldErrors] = useState(errorFormFields);
  const {
    associateNameErr,
    associateIdErr,
    projectIdErr,
    finalLocErr,
    skillsErr,
    profileErr,
    commentsErr,
  } = formFieldErrors;

  const [formValidity, setFormValidity] = useState(isformValid);
  const { valid } = formValidity;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!!!");
    resetFormFields();
  };

  const validitySetter = () => {
    if (
      Object.values(formFieldErrors).every((err) => err === null || err === "")
    ) {
      setFormValidity({ valid: true });
    } else {
      setFormValidity({ valid: false });
    }
  };

  const errorSetter = (name, value, nameErr) => {
    let error = validateField(name, value);

    setFormFieldErrors({ ...formFieldErrors, [nameErr]: error });
    console.log(formFieldErrors);
  };

  const handleShore = (event) => {
    if (event.target.value === "OffShore") {
      setFormFields({ ...formFields, location: location1 });
    } else if (event.target.value === "OnShore") {
      setFormFields({ ...formFields, location: location2 });
    }
  };

  const handleSkills = (event, index) => {
    const { name, value } = event.target;
    let skillsArr = skills;
    skillsArr[index].checked = !skillsArr[index].checked;
    setFormFields({ ...formFields, skills: skillsArr });
    console.log(event, formFields);

    const nameErr = `${name}Err`;
    errorSetter(name, skills, nameErr);
    validitySetter();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });

    console.log(name, value, formFields);

    const nameErr = `${name}Err`;
    errorSetter(name, value, nameErr);
    validitySetter();
  };

  const resetFormFields = () => {
    setFormFieldErrors(errorFormFields);
    resetErrCSS();

    // let skillsArr = skills;
    // skillsArr.forEach((skillsObj) => {
    //   skillsObj.checked = false;
    // });

    // setFormFields({ ...formFields, skills: skillsArr });

    setFormFields(defaultFormFields);

    //Window Reload
    // window.location.reload(true);
  };

  return (
    <div className="form-container">
      <h1 className="form-header">
        Form Validation <span className="star">*</span>
      </h1>
      <form id="valform" className="form-body" onSubmit={handleSubmit}>
        <FormInput
          label="Associate Name"
          error={associateNameErr}
          type="text"
          required
          onChange={handleChange}
          name="associateName"
          value={associateName}
          id="associate-name"
        />
        <FormInput
          label="Associate ID"
          error={associateIdErr}
          type="text"
          required
          onChange={handleChange}
          name="associateId"
          value={associateId}
          id="associate-id"
        />
        <FormInput
          label="Project ID"
          error={projectIdErr}
          type="text"
          required
          onChange={handleChange}
          name="projectId"
          value={projectId}
          id="project-id"
        />

        <div className="radio">
          {shores.map((shore) => (
            <div className="radio-box" key={shore}>
              <input
                type="radio"
                name="shore"
                id={shore}
                value={shore}
                onChange={handleShore}
                required
              />
              <label htmlFor={shore}>{shore}</label>
            </div>
          ))}
        </div>

        <div className="location-select">
          <select
            id="location"
            className="location-box"
            name="finalLoc"
            onChange={handleChange}
            required
          >
            <option
              className="location-option"
              value="location-message"
              defaultChecked
            >
              Select Location
            </option>
            {location.map((city, index) => (
              <option className="location-option" value={city} key={index}>
                {city}
              </option>
            ))}
          </select>
        </div>
        {finalLocErr && <ErrorDisplay error={finalLocErr} />}

        <div className="skills-container">
          {skills.map((skillsObj, index) => (
            <div className="skill-name" key={`${skillsObj.name}`}>
              <input
                type="checkbox"
                id={`${skillsObj.name}`}
                name="skills"
                label={`${skillsObj.name}`}
                value={`${skillsObj.name}`}
                onChange={(event) => handleSkills(event, index)}
              />
              <label htmlFor={`${skillsObj.name}`}>{`${skillsObj.name}`}</label>
            </div>
          ))}
        </div>
        {skillsErr && <ErrorDisplay error={skillsErr} />}

        <div className="profile-label">
          <label htmlFor="profile">Upload Profile</label>
        </div>
        <div className="profile-photo">
          <input
            type="file"
            name="profile"
            id="profile"
            onChange={handleChange}
            required
          />
        </div>
        {profileErr && <ErrorDisplay error={profileErr} />}

        <FormInput
          label="Comments"
          error={commentsErr}
          type="textarea"
          required
          onChange={handleChange}
          name="comments"
          value={comments}
          id="comments"
        />

        <div className="buttons-container">
          {valid ? (
            <Button type="submit">Submit</Button>
          ) : (
            <Button buttonType="disabled" disabled>
              Submit
            </Button>
          )}
          <Button buttonType="reset" onClick={resetFormFields}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
