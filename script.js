const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetch("https://renserver-kyvn.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "can you hear me server if yes pls respond",
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status == 204) {
        return;
      } else {
        console.log("server didnt respond");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
