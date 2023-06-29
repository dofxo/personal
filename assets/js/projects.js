const projectMaker = ({ imageUrl, projectName, githubLink, projectLink }) => {
  return `
	<div class="project">
		<img src="assets/images/${imageUrl}">
		<div class="projects-details">
			<h3 class="project-title dark-text">${projectName}</h3>

			<div id="buttons">
	<a href="${githubLink}" target="_blank">
		<button class="view-project  dark-bg">View Project</button>
		</a>
		<a href="${projectLink}/" target="_blank">
			<button class="visit-website  dark-bg">Visit Website</button>
		</a>
</div>
	</div>
	</div>
	`;
};

export default projectMaker;
