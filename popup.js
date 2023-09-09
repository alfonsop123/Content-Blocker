// popup.js

const gameInput = document.getElementById('game-input');
const addGameBtn = document.getElementById('add-game');
const websiteInput = document.getElementById('website-input');
const addWebsiteBtn = document.getElementById('add-website');

// ... (Existing code for blocking games)

// Add a website to the blocked list
addWebsiteBtn.addEventListener('click', function () {
    const website = websiteInput.value.trim();
    if (website !== '' && !blockedWebsites.includes(website)) {
        blockedWebsites.push(website);
        chrome.storage.sync.set({ 'blockedWebsites': blockedWebsites });
        websiteInput.value = '';
        // Add logic to update the blocked websites list on your website if needed
    }
});
