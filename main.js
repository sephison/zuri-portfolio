function getCurrentDayAndUTCTime() {
  // Get the current date and time in UTC
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const currentUTCTime = currentDate.getTime(); // UTC time in milliseconds

  // Display the current day of the week and UTC time in the HTML elements
  document.getElementById("day").textContent = currentDayOfWeek + ", ";
  document.getElementById("time").textContent = currentUTCTime + " ms";
}

// Call the function when the page loads
window.onload = getCurrentDayAndUTCTime;
