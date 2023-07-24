async function getUsers() {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    return data;
}

function renderUserList(users) {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          ${users.map((user, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.gender}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
}

async function init() {
    try {
        const users = await getUsers();
        renderUserList(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

init();
