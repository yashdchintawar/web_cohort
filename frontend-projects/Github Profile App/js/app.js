const APIURL = "https://api.github.com/users/";
const main = document.querySelector("main");
const searchBox = document.querySelector("#search");

const getUser = async (username) => {
  const response = await fetch(APIURL + username);
  const data = await response.json();
  const dataMessage = await data.message; 
  console.log(dataMessage);
  const card = `      <div class="card">
    <div>
      <img
        class="avatar"
        src="${data.avatar_url}"
        alt="${data.login}"
      />
    </div>
    <div class="user-info">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <ul class="info">
        <li>${data.followers}<strong>Followers</strong></li>
        <li>${data.following}<strong>Following</strong></li>
        <li>${data.public_repos}<strong>Repositories</strong></li>
      </ul>

      <div id="repos">
      </div>
    </div>
  </div>`;
  main.innerHTML = card;
  getRepos(username);
};

const getRepos = async (username) => {
  const repo = document.querySelector("#repos");
  const response = await fetch(APIURL + username + "/repos");
  const reposdata = await response.json();
  reposdata.forEach((item) => {
    const ele = document.createElement("a");
    ele.classList.add("repo");
    ele.href = item.html_url;
    ele.innerHTML = item.name;
    ele.target = "_blank";
    repo.appendChild(ele); 
  });
};

const formSubmit = () => {
    if(searchBox.value != ""){
        getUser(searchBox.value);
    }
    return false;
};

searchBox.addEventListener(
    "focusout", function(){formSubmit();}
);