document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        dataContainer.innerHTML = ''; // Clear previous data

        users.forEach(user => {
            const userList = document.createElement('ul');
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} (${user.email})`;
            userList.appendChild(listItem);
            dataContainer.appendChild(userList);
        });

    } catch (error) {
        dataContainer.textContent = `Failed to load user data: ${error.message}`;
    }
}
