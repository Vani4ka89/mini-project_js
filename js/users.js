// В users.html:
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users.
// 2 Вивести id,name всіх user в users.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const wrapper = document.getElementsByClassName('wrapper')[0];
        for (const user of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            userBlock.innerText = `${user.id}.  ${user.name}`;

            const a = document.createElement('a');
            a.classList.add('reference');
            a.innerText = 'more info';
            a.href = `user-details.html?userId=${user.id}`;

            userBlock.appendChild(a);
            wrapper.append(userBlock);
        }
    })


// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули.
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера.
// (для отримання постів використайте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts).
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижче інформації про пост, вивести всі коментарі поточного поста (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments).


// Стилізація проекту -
//     users.html - всі блоки з user - по 2 в рядок. Кнопки/посилання розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд).

