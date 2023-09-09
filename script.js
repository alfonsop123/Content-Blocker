document.addEventListener('DOMContentLoaded', function () {
    const gameList = document.getElementById('blocked-games');
    const gameInput = document.getElementById('game-input');
    const addGameBtn = document.getElementById('add-game');

    // Load blocked games from storage or initialize an empty array
    let blockedGames = JSON.parse(localStorage.getItem('blockedGames')) || [];

    // Display blocked games on the website
    function displayBlockedGames() {
        gameList.innerHTML = '';
        blockedGames.forEach(function (game) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${game}</span>
                <button class="unblock">Unblock</button>
            `;
            gameList.appendChild(li);

            li.querySelector('.unblock').addEventListener('click', function () {
                // Remove the game from the blockedGames array
                blockedGames = blockedGames.filter(g => g !== game);
                localStorage.setItem('blockedGames', JSON.stringify(blockedGames));
                displayBlockedGames();
            });
        });
    }

    // Add a game to the blocked list
    addGameBtn.addEventListener('click', function () {
        const game = gameInput.value.trim();
        if (game !== '' && !blockedGames.includes(game)) {
            blockedGames.push(game);
            localStorage.setItem('blockedGames', JSON.stringify(blockedGames));
            gameInput.value = '';
            displayBlockedGames();
        }
    });

    // Initial display of blocked games
    displayBlockedGames();
});
