// Anyway, I have a Javascript question. I'm trying to make a DIV that only shows when the URL of a page matches the parameters I set. I am trying to show a DIV on a page with the URL "/find-your-energy." So far, I have the following Javascript on our page, but it's not showing as I was anticipating. Do you have any ideas what could be going on?

// Function to show a specific DIV based on the URL
function showDivBasedOnURL() {
  // Get the current URL path
  const urlPath = window.location.pathname;

  // Mapping of paths to their respective DIV IDs
  const divMappings = {
    '/shop/gifts/find-your-energy/': 'FYEDiv',
    // Add more paths and div IDs as needed
  };

  // Determine which DIV to show based on the URL path
  const divToShow = divMappings[urlPath];

  // If a matching DIV is found, remove the hidden class to display it
  if (divToShow) {
    document.getElementById(divToShow).classList.remove('hidden');
  }
}

// Call the function when the page loads
window.onload = showDivBasedOnURL;

// On the MerchList page, I have this markup:

// <div id="FYEDiv" class="hidden">This is the FYE Page DIV.</div>
