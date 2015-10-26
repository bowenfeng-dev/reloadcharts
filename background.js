chrome.browserAction.onClicked.addListener(function (tab) {
  var queryInfo = {
    url: [
        "http://*.stockcharts.com/*",
        "https://*.google.com/finance*"
    ]
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    _.each(tabs, function (tab) {
        chrome.tabs.reload(tab.id);
    });
  });
});
