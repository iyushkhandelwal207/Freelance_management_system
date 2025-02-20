document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('add-project-form');
    const projectList = document.getElementById('projects');

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addProject();
    });

    function addProject() {
        const projectName = document.getElementById('project-name').value;
        const clientName = document.getElementById('client-name').value;
        const projectDescription = document.getElementById('project-description').value;
        const projectDeadline = document.getElementById('project-deadline').value;

        const projectElement = document.createElement('li');
        projectElement.innerHTML = `
            <h3>${projectName}</h3>
            <p><strong>Client:</strong> ${clientName}</p>
            <p><strong>Description:</strong> ${projectDescription}</p>
            <p><strong>Deadline:</strong> ${projectDeadline}</p>
        `;

        projectList.appendChild(projectElement);

        // Clear form fields
        projectForm.reset();
    }
});