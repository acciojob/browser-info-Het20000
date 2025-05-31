window.onload = function() {
    // Retrieve browser name and version from the navigator object
    var browserName = navigator.appName; // Get the browser name
    var version = navigator.appVersion;   // Get the browser version

    // Format the message
    var message = "You are using " + browserName + " version " + version;

    // Display the message in the div
    document.getElementById("browser-info").innerText = message;
};
