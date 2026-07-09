document.addEventListener('DOMContentLoaded', () => {
  const mainToggle = document.getElementById('mainToggle');
  const fontToggle = document.getElementById('fontToggle');
  const rtlToggle = document.getElementById('rtlToggle');
  const textOnlyToggle = document.getElementById('textOnlyToggle');
  const subOptions = document.getElementById('subOptions');

  chrome.storage.local.get({ extensionEnabled: true, fontEnabled: true, rtlEnabled: true, textOnlyEnabled: true }, (items) => {
    mainToggle.checked = items.extensionEnabled;
    fontToggle.checked = items.fontEnabled;
    rtlToggle.checked = items.rtlEnabled;
    textOnlyToggle.checked = items.textOnlyEnabled;
    
    toggleSubOptionsVisibility(items.extensionEnabled);
  });

  mainToggle.addEventListener('change', () => {
    const isEnabled = mainToggle.checked;
    toggleSubOptionsVisibility(isEnabled);
    chrome.storage.local.set({ extensionEnabled: isEnabled }, () => notifyTabs());
  });

  fontToggle.addEventListener('change', () => {
    chrome.storage.local.set({ fontEnabled: fontToggle.checked }, () => notifyTabs());
  });

  rtlToggle.addEventListener('change', () => {
    chrome.storage.local.set({ rtlEnabled: rtlToggle.checked }, () => notifyTabs());
  });

  textOnlyToggle.addEventListener('change', () => {
    chrome.storage.local.set({ textOnlyEnabled: textOnlyToggle.checked }, () => notifyTabs());
  });

  function toggleSubOptionsVisibility(isEnabled) {
    if (isEnabled) {
      subOptions.classList.remove('disabled');
    } else {
      subOptions.classList.add('disabled');
    }
  }

  function notifyTabs() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "updateStyles" });
      }
    });
  }
});