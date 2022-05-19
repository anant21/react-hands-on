import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import validateField from "../../scripts/validation.script";
import "./home.styles.scss";
import resetErrCSS from "../../scripts/resetErrCss";

const defaultFormFields = {
  associateName: "",
  associateId: "",
  projectId: "",
  //   shores: "",
  //   location: "",
  //   skills: [],
  //   profilePhoto: "",
  comments: "",
};

const errorFormFields = {
  associateNameErr: "",
  associateIdErr: "",
  projectIdErr: "",
  //   locationErr: "",
  //   skillsErr: "",
  //   profilePhotoErr: "",
  commentsErr: "",
};

const isformValid = {
  valid: false,
};

const Home = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { associateName, associateId, projectId, comments } = formFields;

  const [formFieldErrors, setFormFieldErrors] = useState(errorFormFields);
  const { associateNameErr, associateIdErr, projectIdErr, commentsErr } =
    formFieldErrors;

  const [formValidity, setFormValidity] = useState(isformValid);
  const { valid } = formValidity;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!!!");
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });

    const nameErr = `${name}Err`;
    errorSetter(name, value, nameErr);
    validitySetter();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setFormFieldErrors(errorFormFields);
    resetErrCSS();
  };

  return (
    <div className="form-container">
      <h1 className="form-header">
        Form Validation <span className="star">*</span>
      </h1>
      <form className="form-body" onSubmit={handleSubmit}>
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
