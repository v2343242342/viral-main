
  var containerId = "buzzsprout-player-8614782"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1232381/8614782-legal-tips-advice-for-agency-owners-with-ruth-carter?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1232381%2F8614782-legal-tips-advice-for-agency-owners-with-ruth-carter.js%3Fcontainer_id%3Dbuzzsprout-player-8614782%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Socialistics - Social Media Agency Stories, Legal Tips &amp; Advice For Agency Owners With Ruth Carter\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

