const validateField = (fieldName, value) => {
  const name = document.getElementById("associate-name");
  const id = document.getElementById("associate-id");
  const project = document.getElementById("project-id");
  const comments = document.getElementById("comments");

  let err = "";

  switch (fieldName) {
    case "associateName":
      if (!value) {
        err = "Please enter the Associate Name";
        name.style.border = "2px solid red";
      } else if (value.length < 5) {
        name.style.border = "2px solid red";
        err = "Minimum 5 characters";
      } else if (value.length > 30) {
        name.style.border = "2px solid red";
        err = "Maximum 30 characters";
      } else {
        name.style.border = "";
        name.style.borderBottom = "1px solid grey";
        err = "";
      }

      break;

    case "associateId":
      if (!value) {
        err = "Please enter the Associate Id";
        id.style.border = "2px solid red";
      } else if (value.length !== 6) {
        err = "Invalid Associate Id (Should be exactly 6 numbers)";
        id.style.border = "2px solid red";
      } else {
        id.style.border = "";
        id.style.borderBottom = "1px solid grey";
        err = "";
      }

      break;

    case "projectId":
      if (!value) {
        err = "Please enter the Project Id";
        project.style.border = "2px solid red";
      } else if (value.length !== 12) {
        err = "Invalid Project Id (Should be exactly 12 characters)";
        project.style.border = "2px solid red";
      } else {
        project.style.border = "";
        project.style.borderBottom = "1px solid grey";
        err = "";
      }

      break;

    case "comments":
      if (!value) {
        err = "Please enter any comments";
        comments.style.border = "2px solid red";
      } else {
        comments.style.border = "";
        comments.style.borderBottom = "1px solid grey";
        err = "";
      }

      break;

    default:
      console.log("Unknown fieldName", fieldName);
  }

  return err;
};

export default validateField;
