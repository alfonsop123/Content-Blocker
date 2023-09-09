// content.js

// Function to block content on the webpage
function blockContentOnPage(blockedGames, blockedWebsites) {
    blockedGames.forEach(game => {
        // Add logic to block game-related content here
    });

    blockedWebsites.forEach(website => {
        if (window.location.href.includes(website)) {
            // Block the website by hiding content, redirecting, or taking appropriate action
            document.body.innerHTML = '<h1>This website is blocked.</h1>';
        }
    });
}

// Get the blocked games and websites lists from storage
chrome.storage.sync.get(['blockedGames', 'blockedWebsites'], function(result) {
    const blockedGames = result.blockedGames || [];
    const blockedWebsites = result.blockedWebsites || [];

    // Call the function to block content on the current webpage
    blockContentOnPage(blockedGames, blockedWebsites);
});
