//Initialize the Async Function
async function fetchUserData() {
  //Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  //Select the Data Container Element
  const dataContainer = document.getElementById("api-data");

  //Fetch Data Using try-catch
  try {
    const response = await fetch("apiUrl");
    if (!response.ok) {
      throw new Error("Network response was not okay!");
    }

    const users = await response.json();
    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");
    users.forEach((users) => {
      const li = document.createElement("li");
      li.textContent = users.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data";
    console.error(error);
  }
}

//run when DOM is fully loaded

document.addEventListener("DOMContentLoaded".fetchUserData);
