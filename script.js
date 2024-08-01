document
  .getElementById("cat-fact-button")
  .addEventListener("click", fetchCatFact);

function fetchCatFact() {
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("cat-fact").textContent = data.data[0];
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      document.getElementById("cat-fact").textContent =
        "Sorry, we could not fetch a cat fact at the moment. 😿";
    });
}
