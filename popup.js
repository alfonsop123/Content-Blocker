// popup.js

const websiteInput = document.getElementById('website-input');
const addWebsiteBtn = document.getElementById('add-website');

// Function to add a website to the blocked websites list
function addWebsiteToList(website) {
    chrome.storage.sync.get(['blockedWebsites'], function (result) {
        let blockedWebsites = result.blockedWebsites || [];

        // Normalize the input to remove "https://" if present
        const normalizedWebsite = website.replace(/^https?:\/\//, '');

        if (normalizedWebsite !== '' && !blockedWebsites.includes(normalizedWebsite)) {
            blockedWebsites.push(normalizedWebsite);
            chrome.storage.sync.set({ 'blockedWebsites': blockedWebsites });
            websiteInput.value = '';
            // Add logic to update the blocked websites list on your website if needed
        }
    });
}

// Add a website to the blocked list when the button is clicked
addWebsiteBtn.addEventListener('click', function () {
    const website = websiteInput.value.trim();
    if (website !== '') {
        addWebsiteToList(website);
    }
});

// Handle Enter key press in the input field
websiteInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const website = websiteInput.value.trim();
        if (website !== '') {
            addWebsiteToList(website);
        }
    }
});
