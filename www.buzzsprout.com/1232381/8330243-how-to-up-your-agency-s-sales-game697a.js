
  var containerId = "buzzsprout-player-8330243"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1232381/8330243-how-to-up-your-agency-s-sales-game?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1232381%2F8330243-how-to-up-your-agency-s-sales-game.js%3Fcontainer_id%3Dbuzzsprout-player-8330243%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Socialistics - Social Media Agency Stories, How To Up Your Agency&#39;s Sales Game\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

