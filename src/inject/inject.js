chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      //console.log(window.location.post);
      //console.log(this.window.location.hash);

      //   if (window.location.hash === "#dupa") {
      //     console.log("dupa!");
      //   }
    }
  }, 10);
});
