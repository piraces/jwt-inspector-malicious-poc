// Saves options to chrome.storage
function save_options() {
  var header_name = document.getElementById('header_name').value;
  var header_prefix = document.getElementById('header_prefix').value;
  chrome.storage.local.set({
    header_name: header_name,
    header_prefix: header_prefix
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get({
    header_name: "Authorization",
    header_prefix: "Bearer"
  }, function(items) {
    document.getElementById('header_name').value = items.header_name;
    document.getElementById('header_prefix').value = items.header_prefix;
  });
}

// Resets options to default values
function reset_options() {
  document.getElementById('header_name').value = "Authorization";
  document.getElementById('header_prefix').value = "Bearer";
  save_options();
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
