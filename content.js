const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const styleElement = document.createElement('style');
styleElement.id = 'vazir-rtl-extension-style';
document.head.appendChild(styleElement);

function applyStyles() {
  chrome.storage.local.get({ extensionEnabled: true, fontEnabled: true, rtlEnabled: true, textOnlyEnabled: true }, (items) => {
    if (!items.extensionEnabled) {
      styleElement.textContent = '';
      return;
    }

    let baseExceptions = ':not(i):not([class*="icon"]):not([class*="fa-"]):not([class*="material-"]):not([class*="glyphicon"])';
    
    if (items.textOnlyEnabled) {
      baseExceptions += ':not(pre):not(code):not(kbd):not(samp):not(var):not(.blob-code):not(.highlight)';
    }

    let cssRules = '';

    if (items.fontEnabled) {
      cssRules += `
        html, body, html ${baseExceptions} {
          font-family: 'Vazirmatn', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
        }
      `;
    }

    if (items.rtlEnabled) {
      cssRules += `
        html, body, html ${baseExceptions}, input${baseExceptions}, textarea${baseExceptions}, select${baseExceptions} {
          direction: rtl !important;
          text-align: right !important;
        }
      `;
    } else {
      cssRules += `
        html, body, html *, input, textarea, select {
          direction: initial;
          text-align: initial;
        }
      `;
    }

    styleElement.textContent = cssRules;
  });
}

applyStyles();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateStyles") {
    applyStyles();
  }
});

