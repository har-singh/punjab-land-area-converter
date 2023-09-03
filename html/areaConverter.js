// Get references to the input elements
const sqFeetInput = document.getElementById('sqFeet');
const sqMetersInput = document.getElementById('sqMeters');
const acresInput = document.getElementById('acres');
const kanalInput = document.getElementById('kanal');
const marlaInput = document.getElementById('marla');

// Function to update all fields based on input
function areaConverter(source, valNum) {
    valNum = parseFloat(valNum);
    const marlaConversionFactor = 272.25;
    const kanalConversionFactor = 20 * marlaConversionFactor;
    const acreConversionFactor = 8 * kanalConversionFactor;

    if (source == "sqFeet") {
        sqMetersInput.value = (valNum * 0.092903).toFixed(2);
        acresInput.value = (valNum / acreConversionFactor).toFixed(6);
        kanalInput.value = (valNum / kanalConversionFactor).toFixed(6);
        marlaInput.value = (valNum / marlaConversionFactor).toFixed(6);
    }
    if (source == "sqMeters") {
        sqFeetInput.value = (valNum * 10.7639).toFixed(2);
        acresInput.value = (valNum / 4046.86).toFixed(6);
        kanalInput.value = (valNum / kanalConversionFactor).toFixed(6);
        marlaInput.value = (valNum / marlaConversionFactor).toFixed(6);
    }
    if (source == "acres") {
        sqFeetInput.value = (valNum * acreConversionFactor).toFixed(2);
        sqMetersInput.value = (valNum * 4046.86).toFixed(2);
        kanalInput.value = (valNum / 8).toFixed(2);
        marlaInput.value = (valNum * 20).toFixed(2);
    }
    if (source == "kanal") {
        sqFeetInput.value = (valNum * kanalConversionFactor).toFixed(2);
        sqMetersInput.value = (valNum * 505.857).toFixed(2);
        acresInput.value = (valNum / acreConversionFactor).toFixed(6);
        marlaInput.value = (valNum * 20).toFixed(2);
    }
    if (source == "marla") {
        sqFeetInput.value = (valNum * marlaConversionFactor).toFixed(2);
        sqMetersInput.value = (valNum * 50.5857).toFixed(2);
        acresInput.value = (valNum / kanalConversionFactor).toFixed(6);
        kanalInput.value = (valNum / 20).toFixed(2);
    }
}
