document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener('backbutton', onBackButton, false);
function onDeviceReady() {
  console.log("deviceready");
}
function onBackButton() {
  console.log("backbutton");
}
