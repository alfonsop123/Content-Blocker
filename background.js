// background.js

// Initialize blockedGames and blockedWebsites as empty arrays
chrome.storage.sync.get(['blockedGames', 'blockedWebsites'], function(result) {
    let blockedGames = result.blockedGames || [];
    let blockedWebsites = result.blockedWebsites || [];

    // Add or remove your blocked games and websites here
});
