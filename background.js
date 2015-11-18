chrome.browserAction.onClicked.addListener(function (tab) {
  var queryInfo = {
    url: [
        "http://*.stockcharts.com/*",
        "https://*.google.com/finance*"
    ]
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    // var i = 0;
    // var id = setInterval(function() {
    //   if (i === tabls.length) {
    //     clearInterval(id);
    //   } else {
    //     i += 1;
    //     chrome.tabs.reload(tabs[i].id);
    //   }
    // }, 5000);
    _.each(tabs, function (tab) {
        chrome.tabs.reload(tab.id);
    });
  });
});
