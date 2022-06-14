window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#blaa_sprite").addEventListener("click", clickBlaaHandler);
}

function clickBlaaHandler() {
  console.log("clickBlaaHandler");
  document.querySelector("#blaa_sprite").classList.add("forsvind");
}
