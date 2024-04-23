document.addEventListener('DOMContentLoaded', () => {
    const user = {
        name: document.querySelector('.profile-name'),
        username: document.querySelector('.profile-username'),
        repos: document.querySelector('.repos'),
        followers: document.querySelector('.followers'),
        following: document.querySelector('.following'),
        profileAvatar: document.querySelector('.profile-avatar'),
        profileLink: document.querySelector('.profile-link')
    }

    fetch('https://api.github.com/users/ogiansouza').then((res) => {
            return res.json();
    })
    .then((json) => {
        user.name.innerText = json.name;
        user.username.innerText = `@${json.login}`;
        user.repos.innerText = json.public_repos;
        user.followers.innerText = json.followers;
        user.following.innerText = json.following;
        user.profileAvatar.src = json.avatar_url;
        user.profileLink.href = json.html_url;
    })
    .catch(() => {
        alert('Ocorreu algum erro nas requisições de dados. Tente novamente mais tarde.')
    })
});