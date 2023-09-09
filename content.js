// content.js

// Function to block games on the webpage
function blockGamesOnPage(blockedGames) {
    const blockedGamesSelector = blockedGames.map(game => `:contains('${game}')`).join(',');
    const elementsToBlock = document.querySelectorAll(blockedGamesSelector);

    elementsToBlock.forEach(element => {
        element.style.display = 'none'; // Hide or remove the game-related content
    });
}

// Get the blocked games list from storage
chrome.storage.sync.get(['blockedGames'], function(result) {
    const blockedGames = result.blockedGames || [];
    if (blockedGames.length > 0) {
        // Call the function to block games on the current webpage
        blockGamesOnPage(blockedGames);
    }
});
