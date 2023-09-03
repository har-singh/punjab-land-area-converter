// Get references to the input elements
const sqFeetInput = document.getElementById('sqFeet');
const sqMetersInput = document.getElementById('sqMeters');
const acresInput = document.getElementById('acres');
const kanalInput = document.getElementById('kanal');
const marlaInput = document.getElementById('marla');

// Function to update all fields based on input
function areaConverter(source, valNum) {
    valNum = parseFloat(valNum);
    if (source == "sqFeet") {
        sqMetersInput.value = (valNum * 0.092903).toFixed(2);
        acresInput.value = (valNum / 272.25 / 20 / 8).toFixed(6);
        kanalInput.value = (valNum / 272.25 / 20).toFixed(6);
        marlaInput.value = (valNum / 272.25).toFixed(6);
    }
    if (source == "sqMeters") {
        sqFeetInput.value = (valNum * 10.7639).toFixed(2);
        acresInput.value = (valNum * 0.0002471054).toFixed(6);
        kanalInput.value = (valNum * 0.001976843).toFixed(6);
        marlaInput.value = (valNum * 0.012292).toFixed(6);
    }
    if (source == "acres") {
        sqFeetInput.value = (valNum * 43560).toFixed(2);
        sqMetersInput.value = (valNum * 4046.86).toFixed(2);
        kanalInput.value = (valNum * 8).toFixed(2);
        marlaInput.value = (valNum * 160).toFixed(2);
    }
    if (source == "kanal") {
        sqFeetInput.value = (valNum * 5445).toFixed(2);
        sqMetersInput.value = (valNum * 505.857).toFixed(2);
        acresInput.value = (valNum / 8).toFixed(6);
        marlaInput.value = (valNum * 20).toFixed(2);
    }
    if (source == "marla") {
        sqFeetInput.value = (valNum * 272.25).toFixed(2);
        sqMetersInput.value = (valNum * 50.5857).toFixed(2);
        acresInput.value = (valNum / 160).toFixed(6);
        kanalInput.value = (valNum / 20).toFixed(2);
    }
}
