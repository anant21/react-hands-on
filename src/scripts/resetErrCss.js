const resetErrCSS = () => {
  const name = document.getElementById("associate-name");
  const id = document.getElementById("associate-id");
  const project = document.getElementById("project-id");
  const location = document.getElementById("location");
  const profile = document.getElementById("profile");
  const comments = document.getElementById("comments");

  name.style.border = "none";
  id.style.border = "none";
  project.style.border = "none";
  location.style.border = "none";
  profile.style.border = "none";
  comments.style.border = "none";
  name.style.borderBottom = "1px solid grey";
  id.style.borderBottom = "1px solid grey";
  project.style.borderBottom = "1px solid grey";
  location.style.borderBottom = "1px solid grey";
  comments.style.borderBottom = "1px solid grey";
};

export default resetErrCSS;
