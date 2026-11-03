const teamAScore = document.getElementById("team-a-score");
const teamBScore = document.getElementById("team-b-score");

function wireTeam(incrementId, decrementId, scoreEl, storageKey) {
    let score = Math.max(0, Number(localStorage.getItem(storageKey)) || 0);

    function updateScore(nextScore) {
        score = Math.max(0, nextScore);
        scoreEl.textContent = score;
        localStorage.setItem(storageKey, score);
    }

    updateScore(score);

    document.getElementById(incrementId).addEventListener("click", () => {
        updateScore(score + 1);
    });

    document.getElementById(decrementId).addEventListener("click", () => {
        updateScore(score - 1);
    });
}

wireTeam("team-a-increment", "team-a-decrement", teamAScore, "team-a-score");
wireTeam("team-b-increment", "team-b-decrement", teamBScore, "team-b-score");
