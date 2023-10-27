document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch(" https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const dataContainer = document.getElementById("data-container");
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>NAME:${item.name}</h3>
        <p>USERNAME :${item.username}</p>
        <p>EMAIL :${item.email}</p>

      `;
      dataContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
