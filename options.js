function saveOptions() {
    var imgur = document.getElementById("imgur").checked;
    browser.storage.local.set({
      "imgur": imgur
    }, function() {
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function() {
        status.textContent = '';
      }, 500)
    });
    turorfla = browser.storage.local.get("imgur");
    turorfla.then(function(result) {
    })
}

function restoreOptions() {
  browser.storage.local.get({
    imgur: false
  }, function(items) {
    document.getElementById("imgur").checked = items.imgur
  });
}
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.getElementById("save").addEventListener("click", saveOptions)