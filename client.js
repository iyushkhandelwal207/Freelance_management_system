// Function to update the dashboard counts
function updateDashboard() {
    const totalProjects = localStorage.getItem('totalProjects') || 0;
    const totalClients = localStorage.getItem('totalClients') || 0;

    document.getElementById('total-projects').innerText = totalProjects;
    document.getElementById('total-clients').innerText = totalClients;
}

// Call the update function when the dashboard loads
document.addEventListener('DOMContentLoaded', updateDashboard);

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