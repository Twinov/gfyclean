function saveOptions() {
    var imgur = document.getElementById("imgur").checked;
    browser.storage.local.set({
      "imgur": imgur
    });
}

function restoreOptions() {
  browser.storage.local.get({
    imgur: false
  }, function(items) {
    document.getElementById("imgur").checked = items.imgur
  });
}
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.getElementById("imgur").addEventListener("click", saveOptions)