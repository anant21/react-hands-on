const resetErrCSS = () => {
  const name = document.getElementById("associate-name");
  const id = document.getElementById("associate-id");
  const project = document.getElementById("project-id");
  const comments = document.getElementById("comments");

  name.style.border = "none";
  id.style.border = "none";
  project.style.border = "none";
  comments.style.border = "none";
};

export default resetErrCSS;
