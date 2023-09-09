document.addEventListener('DOMContentLoaded', function () {
    const blockButton = document.getElementById('block-button');

    blockButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: blockGamesOnWebsite,
            });
        });
    });

    function blockGamesOnWebsite() {
        // Content script to block games on websites
        const blockedGames = JSON.parse(localStorage.getItem('blockedGames')) || [];
        const blockedGamesSelector = blockedGames.map(game => `:contains('${game}')`).join(',');
        const elementsToBlock = document.querySelectorAll(blockedGamesSelector);

        elementsToBlock.forEach(element => {
            element.style.display = 'none';
        });
    }
});
