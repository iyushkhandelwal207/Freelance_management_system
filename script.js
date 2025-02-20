document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('add-project-form');
    const clientForm = document.getElementById('add-client-form');
    const projectsList = document.getElementById('projects');
    const clientsList = document.getElementById('clients');
    const totalProjects = document.getElementById('total-projects');
    const totalClients = document.getElementById('total-clients');

    let projectCount = 0;
    let clientCount = 0;

    if (projectForm) {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.getElementById('project-name').value;
            const clientName = document.getElementById('client-name').value;
            const projectDescription = document.getElementById('project-description').value;
            const projectDeadline = document.getElementById('project-deadline').value;

            const li = document.createElement('li');
            li.textContent = `${projectName} (Client: ${clientName}) - ${projectDescription} (Deadline: ${projectDeadline})`;
            projectsList.appendChild(li);

            projectCount++;
            totalProjects.textContent = projectCount;

            projectForm.reset();
        });
    }

    if (clientForm) {
        clientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('client-name').value;
            const clientEmail = document.getElementById('client-email').value;

            const li = document.createElement('li');
            li.textContent = `${clientName} - ${clientEmail}`;
            clientsList.appendChild(li);

            clientCount++;
            totalClients.textContent = clientCount;

            clientForm.reset();
        });
    }
    // Function to update the dashboard counts


// Example function to add a project (to be called from projects.html)
function addProject() {
    let totalProjects = parseInt(localStorage.getItem('totalProjects')) || 0;
    totalProjects++;
    localStorage.setItem('totalProjects', totalProjects);
}

// Example function to add a client (to be called from clients.html)
function addClient() {
    let totalClients = parseInt(localStorage.getItem('totalClients')) || 0;
    totalClients++;
    localStorage.setItem('totalClients', totalClients);
}
        
function updateDashboard() {
    const totalProjects = localStorage.getItem('totalProjects') || 0;
    const totalClients = localStorage.getItem('totalClients') || 0;

    document.getElementById('total-projects').innerText = totalProjects;
    document.getElementById('total-clients').innerText = totalClients;
}

// Call the update function when the dashboard loads
document.addEventListener('DOMContentLoaded', updateDashboard);
});