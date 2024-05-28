
  var containerId = "buzzsprout-player-8330222"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1232381/8330222-what-is-social-selling-and-how-to-use-it-effectively?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1232381%2F8330222-what-is-social-selling-and-how-to-use-it-effectively.js%3Fcontainer_id%3Dbuzzsprout-player-8330222%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Socialistics - Social Media Agency Stories, What Is Social Selling And How To Use It Effectively\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

