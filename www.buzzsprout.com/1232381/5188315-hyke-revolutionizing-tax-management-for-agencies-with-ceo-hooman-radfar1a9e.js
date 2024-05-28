
  var containerId = "buzzsprout-player-5188315"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1232381/5188315-hyke-revolutionizing-tax-management-for-agencies-with-ceo-hooman-radfar?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1232381%2F5188315-hyke-revolutionizing-tax-management-for-agencies-with-ceo-hooman-radfar.js%3Fcontainer_id%3Dbuzzsprout-player-5188315%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Socialistics - Social Media Agency Stories, Hyke: Revolutionizing Tax Management For Agencies with CEO Hooman Radfar \"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

