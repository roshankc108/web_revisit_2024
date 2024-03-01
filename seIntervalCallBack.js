// setInterval() with a Callback
// Using setInterval() to display the time every second (1000 milliseconds).

let getTime = () => {
  const d = new Date();
  let clk = document.getElementById("clock");
  clk.innerHTML =
    d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
};
setInterval(getTime, 1000);