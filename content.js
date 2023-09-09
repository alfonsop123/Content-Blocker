// content.js

// Function to block games and websites on the webpage
function blockContentOnPage(blockedGames, blockedWebsites) {
    // Add code to block games and websites here
}

// Get the blocked games and websites lists from storage
chrome.storage.sync.get(['blockedGames', 'blockedWebsites'], function(result) {
    const blockedGames = result.blockedGames || [];
    const blockedWebsites = result.blockedWebsites || [];

    // Call the function to block games and websites on the current webpage
    blockContentOnPage(blockedGames, blockedWebsites);
});
