// Get references to the input elements
const sqFeetInput = document.getElementById('sqFeet');
const sqMetersInput = document.getElementById('sqMeters');
const acresInput = document.getElementById('acres');
const kanalInput = document.getElementById('kanal');
const marlaInput = document.getElementById('marla');

// Conversion constants
const marlaConversionFactor = 272.25;
const kanalConversionFactor = 20; // 1 kanal = 20 marla
const acreConversionFactor = 8 * kanalConversionFactor; // 1 acre = 8 kanal
const sqMeterToSqFeetConversion = 10.7639104; // 1 m² = 10.7639104 ft²
const acreToSqMeterConversion = 4046.856422; // 1 acre = 4046.856422 m²

// Function to update all fields based on input
function areaConverter(source, valNum) {
    valNum = parseFloat(valNum);

    if (source == "sqFeet") {
        sqMetersInput.value = (valNum / sqMeterToSqFeetConversion).toFixed(2);
        acresInput.value = (valNum / acreToSqMeterConversion).toFixed(6);
        kanalInput.value = (valNum / (kanalConversionFactor * marlaConversionFactor)).toFixed(6);
        marlaInput.value = (valNum / marlaConversionFactor).toFixed(6);
    }
    if (source == "sqMeters") {
        sqFeetInput.value = (valNum * sqMeterToSqFeetConversion).toFixed(2);
        acresInput.value = (valNum / acreToSqMeterConversion).toFixed(6);
        kanalInput.value = (valNum / (kanalConversionFactor * marlaConversionFactor * 0.092903)).toFixed(6);
        marlaInput.value = (valNum / (marlaConversionFactor * 0.092903)).toFixed(6);
    }
    if (source == "acres") {
        sqFeetInput.value = (valNum * acreToSqMeterConversion).toFixed(2);
        sqMetersInput.value = (valNum * 4046.86).toFixed(2);
        kanalInput.value = (valNum / kanalConversionFactor).toFixed(6);
        marlaInput.value = (valNum / (kanalConversionFactor * 20)).toFixed(2);
    }
    if (source == "kanal") {
        sqFeetInput.value = (valNum * kanalConversionFactor * marlaConversionFactor * 272.25).toFixed(2);
        sqMetersInput.value = (valNum * kanalConversionFactor * marlaConversionFactor * 0.092903).toFixed(2);
        acresInput.value = (valNum / acreConversionFactor).toFixed(6);
        marlaInput.value = (valNum * marlaConversionFactor).toFixed(2);
    }
    if (source == "marla") {
        sqFeetInput.value = (valNum * marlaConversionFactor * 272.25).toFixed(2);
        sqMetersInput.value = (valNum * marlaConversionFactor * 0.092903).toFixed(2);
        acresInput.value = (valNum / (kanalConversionFactor * 20)).toFixed(2);
        kanalInput.value = (valNum / (marlaConversionFactor)).toFixed(6);
    }
}
