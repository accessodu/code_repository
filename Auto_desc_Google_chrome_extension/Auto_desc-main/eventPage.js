chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.todo == "showPageAction") {
    //Make page icon active
    //The current window is the window that contains the code that is currently executing.
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // alert("THIS IS TAB",tabs[0].id)
      console.log("THIS IS TAB", tabs);
      chrome.pageAction.show(tabs[0].id);

      //Add an eventListener to check if tabs are changed(for page navigation)
      chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status == "complete") {
            chrome.tabs.sendMessage(tabs[0].id, {
              todo: "NewPageLoaded"
            });

          console.log("Tab Changed", changeInfo, tab);
          // alert("Tab Changed", changeInfo.url);
        }
      });
    });
  }
});

// chrome.storage.onChanged.addListener((changes, storageName) => {
//   //   alert("ITS CHANGED");
//   // console.log("STORAGE IS CHANGED", changes, storageName);
//   chrome.browserAction.setBadgeText({
//     text: changes.state.newValue.toString(),
//   });
// });
