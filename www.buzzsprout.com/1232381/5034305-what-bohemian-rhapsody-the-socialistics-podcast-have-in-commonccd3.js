
  var containerId = "buzzsprout-player-5034305"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1232381/5034305-what-bohemian-rhapsody-the-socialistics-podcast-have-in-common?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1232381%2F5034305-what-bohemian-rhapsody-the-socialistics-podcast-have-in-common.js%3Fcontainer_id%3Dbuzzsprout-player-5034305%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Socialistics - Social Media Agency Stories, What Bohemian Rhapsody &amp; The Socialistics Podcast Have In Common\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

