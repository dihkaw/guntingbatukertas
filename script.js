function play(playerChoice) {
    const choices = ['Batu', 'Kertas', 'GUnting'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "Seri!";
    } else if (
        (playerChoice === 'Batu' && computerChoice === 'Gunting') ||
        (playerChoice === 'Gunting' && computerChoice === 'Kertas') ||
        (playerChoice === 'Kertas' && computerChoice === 'Batu')
    ) {
        result = "Anda Menang!";
    } else {
        result = "Komputer Menang!";
    }

    document.getElementById('result').innerText = `Anda memilih ${playerChoice}, Komputer memilih ${computerChoice}. ${result}`;
}

function restartGame() {
    document.getElementById('result').innerText = '';
}
