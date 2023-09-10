// JavaScript to display and refresh current UTC time with milliseconds every 100 milliseconds
function getCurrentUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");

  function updateUTCTime() {
    const date = new Date();
    const utcTimeMilliseconds = date.getTime();
    utcTimeElement.textContent = `UTC Time (ms): ${utcTimeMilliseconds}`;
  }

  // Initial call to set the time immediately
  updateUTCTime();

  // Refresh the time every 100 milliseconds
  setInterval(updateUTCTime, 100);
}
getCurrentUTCTime();
