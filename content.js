// content.js

// Function to block content on the webpage
function blockContentOnPage(blockedGames, blockedWebsites) {
    // Block games
    blockedGames.forEach(game => {
        const elementsToBlock = document.querySelectorAll(`:contains('${game}')`);
        elementsToBlock.forEach(element => {
            element.style.display = 'none'; // Hide or remove the game-related content
        });
    });

    // Block websites
    const currentWebsite = window.location.hostname;
    if (blockedWebsites.includes(currentWebsite)) {
        // Redirect to a blocked page or take other appropriate action
        window.location.href = chrome.runtime.getURL('blocked.html');
    }
}

// Get the blocked games and websites lists from storage
chrome.storage.sync.get(['blockedGames', 'blockedWebsites'], function(result) {
    const blockedGames = result.blockedGames || [];
    const blockedWebsites = result.blockedWebsites || [];

    // Call the function to block content on the current webpage
    blockContentOnPage(blockedGames, blockedWebsites);
});
