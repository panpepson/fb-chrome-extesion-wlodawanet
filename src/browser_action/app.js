document.getElementById("automate-form").onsubmit = event => {
  event.preventDefault();
  const post = document.getElementById("post").value;
  chrome.tabs.create({
    url: `https://www.facebook.com/www.wlodawa.net/posts/${post}`
  });
};
