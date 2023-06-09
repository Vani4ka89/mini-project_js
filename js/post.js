//////////////////////////////////POST INFO///////////////////////////////

const url = new URL(location.href);
const postId = url.searchParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        const postInfo = document.getElementsByClassName('post-info')[0];
        const p = document.createElement('p');
        p.innerText = `${post['body']}`;
        postInfo.appendChild(p);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => {
                const list = document.createElement('ul');
                for (const comment of comments) {
                    const span = document.createElement('span');
                    span.classList.add('email-style');
                    span.innerText = `_${comment['email']}`;
                    const item = document.createElement('li');
                    item.innerHTML = `<span>${comment['name']}:</span> ${comment['body']}. `;
                    item.appendChild(span);
                    list.appendChild(item);
                    postInfo.appendChild(list);
                }
            })
    })