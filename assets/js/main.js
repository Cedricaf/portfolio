window.onload = function() {
    // Show the popup only if the user hasn’t accepted it before
    if (!localStorage.getItem('cookieAccepted')) {
      document.getElementById('cookiePopup').classList.add('show');
    }
  }
  
  function closePopup() {
    document.getElementById('cookiePopup').classList.remove('show');
    localStorage.setItem('cookieAccepted', 'true'); // Save acceptance to prevent showing it again
  }
  