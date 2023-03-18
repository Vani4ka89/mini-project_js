///////////////////////////////////All USERS (10)/////////////////////////
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const mainUsersBlock = document.getElementsByClassName('main-users-block')[0];
        for (const user of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            userBlock.innerText = `${user['id']}.  ${user['name']}`;

            const a = document.createElement('a');
            a.classList.add('user-btn');
            a.innerText = 'more info';
            a.href = `user-details.html?userId=${user['id']}`;

            userBlock.appendChild(a);
            mainUsersBlock.appendChild(userBlock);
        }
    })