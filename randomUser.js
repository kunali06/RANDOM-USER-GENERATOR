const btn = document.getElementById("btn");
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const locationEl = document.getElementById("location");

btn.addEventListener("click", loadUser);


loadUser();

async function loadUser() {
  try {
    btn.disabled = true;
    btn.textContent = "Loading...";

    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) throw new Error("Failed to fetch user");

    const data = await response.json();
    const user = data.results[0];

    avatar.src = user.picture.large;
    nameEl.textContent = `${user.name.first} ${user.name.last}`;
    emailEl.textContent = user.email;
    locationEl.textContent = `${user.location.city}, ${user.location.country}`;
  } catch (error) {
    nameEl.textContent = "Error loading user";
    emailEl.textContent = "";
    locationEl.textContent = "";
  } finally {
    btn.disabled = false;
    btn.textContent = "Generate User";
  }
}
