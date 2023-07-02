const projectMaker = ({ imageUrl, projectName, githubLink, projectLink }) => {
  return `
	<div class="project">
		<img src="assets/images/${imageUrl}">
		<div class="projects-details">
			<h3 class="project-title">${projectName}</h3>

			<div id="buttons">
	<a href="${githubLink}" target="_blank">
		<button class="view-project">View Project</button>
		</a>
		<a href="${projectLink}/" target="_blank">
			<button class="visit-website">Visit Website</button>
		</a>
</div>
	</div>
	</div>
	`;
};

export default projectMaker;
