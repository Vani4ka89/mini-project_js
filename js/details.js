/////////////////////////////////USER INFO & POST TITLES////////////////////////////////////

const url = new URL(location.href);
const userId = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        const mainDataBlock = document.getElementsByClassName('main-data')[0];

        function getInfoFromUser(user) {
            for (const key in user) {
                if (typeof user[key] === 'object') {
                    getInfoFromUser(user[key]);
                } else {
                    const infoBlock = document.createElement('div');
                    infoBlock.classList.add('info-block');
                    const h4 = document.createElement('h4');
                    h4.innerText = `${key}: ${user[key]}`;
                    infoBlock.appendChild(h4);
                    mainDataBlock.appendChild(infoBlock);
                }
            }
        }

        getInfoFromUser(user);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts => {
                const titles = document.getElementsByClassName('post-title-block')[0];
                const container = document.getElementsByClassName('container')[0];
                const list = document.createElement('ul');
                list.classList.add('list');
                const btn = document.createElement('button');
                btn.classList.add('post-btn');
                btn.innerText = 'post of current user'.toUpperCase();

                container.appendChild(btn);
                titles.appendChild(list);

                const showPostsTitles = function () {
                    for (const post of posts) {
                        const item = document.createElement('li');
                        item.innerText = `${post['title']}`;
                        const a = document.createElement('a');
                        a.innerText = 'details';
                        a.href = `post-details.html?postId=${post['id']}`;
                        list.appendChild(item);
                        item.appendChild(a);
                    }
                    btn.style.display = 'none';
                }
                btn.addEventListener('click', showPostsTitles);
            })
    })