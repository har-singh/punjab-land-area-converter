// Get references to the input elements
const sqFeetInput = document.getElementById('sqFeet');
const sqMetersInput = document.getElementById('sqMeters');
const acresInput = document.getElementById('acres');
const kanalInput = document.getElementById('kanal');
const marlaInput = document.getElementById('marla');

// Conversion constants
const marlaSqft = 272.25;
const kanalMarla = 20; // 1 kanal = 20 marla
const acreKanal = 8; // 1 acre = 8 kanal
// 1 m² = 10.7639104 ft²
// 1 acre = 4046.856422 m²

// Function to update all fields based on input
function areaConverter(source, valNum) {
    valNum = parseFloat(valNum);

    if (source == "sqFeet") {
        sqMetersInput.value = (valNum / 10.7639104).toFixed(2);
        acresInput.value = (valNum / marlaSqft / kanalMarla / acreKanal).toFixed(6);
        kanalInput.value = (valNum / marlaSqft / kanalMarla).toFixed(6);
        marlaInput.value = (valNum / marlaSqft).toFixed(6);
    }
    if (source == "sqMeters") {
        sqFeetInput.value = (valNum * 10.7639104).toFixed(2);
        acresInput.value = (valNum * 4046.86).toFixed(6);
        kanalInput.value = (valNum * 4046.86 / acreKanal).toFixed(6);
        marlaInput.value = (valNum * 4046.86 / kanalMarla / acreKanal).toFixed(6);
    }
    if (source == "acres") {
        sqFeetInput.value = (valNum * acreKanal * kanalMarla * marlaSqft).toFixed(2);
        sqMetersInput.value = (valNum * 4046.86).toFixed(2);
        kanalInput.value = (valNum * acreKanal).toFixed(2);
        marlaInput.value = (valNum * acreKanal * kanalMarla).toFixed(2);
    }
    if (source == "kanal") {
        sqFeetInput.value = (valNum * kanalMarla * marlaSqft).toFixed(2);
        sqMetersInput.value = (valNum / acreKanal * 4046.86).toFixed(2);
        acresInput.value = (valNum / acreKanal).toFixed(6);
        marlaInput.value = (valNum * kanalMarla).toFixed(2);
    }
    if (source == "marla") {
        sqFeetInput.value = (valNum * marlaSqft).toFixed(2);
        sqMetersInput.value = (valNum / kanalMarla / acreKanal * 4046.86).toFixed(2);
        acresInput.value = (valNum / kanalMarla / acreKanal).toFixed(6);
        kanalInput.value = (valNum / kanalMarla).toFixed(6);
    }
}
