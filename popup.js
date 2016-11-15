$(function() {
  $('#submit').click(() => {
    const from = document.getElementById('from').valueAsDate;
    const to = document.getElementById('to').valueAsDate;

    searchParameters = [dateToUTC(from), dateToUTC(to)];
    updateTab(searchParameters);

    $('#from').val('');
    $('#to').val('');
    return false;
  })
})

function dateToUTC(date) {
  return Math.floor(date.getTime() / 1000);
}

function redditQuery(searchParameters, url) {
  const [from, to] = searchParameters;
  var query = `https://www.reddit.com/search?q=timestamp:${from}..${to}&syntax=cloudsearch`;

  const urlElements = url.split('/');
  if (urlElements[3] === 'r') {
    const subreddit = urlElements[4];
    query = `https://www.reddit.com/r/${subreddit}/search?q=timestamp:${from}..${to}&syntax=cloudsearch`;
  }

  return query;
}

function updateTab(searchParameters) {
  chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
    const url = tabs[0].url;
    const query = redditQuery(searchParameters, url);
    chrome.tabs.update({url: query});
  })
}
