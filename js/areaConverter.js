/**
 * Area Converter - Converts between various land area units
 * Supports: Square Feet, Square Meters, Acres, Kanal, Marla, Sarsai
 */

// Get references to the input elements
const sqFeetInput = document.getElementById('sqFeet');
const sqMetersInput = document.getElementById('sqMeters');
const acresInput = document.getElementById('acres');
const kanalInput = document.getElementById('kanal');
const marlaInput = document.getElementById('marla');
const sarsaiInput = document.getElementById('sarsai');

// Conversion constants (based on Punjab land measurement standards)
const SARSAI_SQFT = 30.25;           // 1 sarsai = 30.25 sq ft
const MARLA_SQFT = SARSAI_SQFT * 9;  // 1 marla = 9 sarsai = 272.25 sq ft
const SARSAI_PER_MARLA = 9;          // 1 marla = 9 sarsai
const MARLA_PER_KANAL = 20;          // 1 kanal = 20 marla
const KANAL_PER_ACRE = 8;            // 1 acre = 8 kanal
const SQFT_PER_SQM = 10.7639104;     // 1 m² = 10.7639104 ft²
const SQM_PER_ACRE = 4046.8564224;   // 1 acre = 4046.8564224 m²

/**
 * Converts area from one unit to all other units
 * @param {string} source - The ID of the source input element
 * @param {string} valNum - The value to convert
 */
function areaConverter(source, valNum) {
    valNum = parseFloat(valNum);

    // Validate input - check for NaN or negative values
    if (isNaN(valNum) || valNum < 0) {
        return;
    }

    if (source === "sqFeet") {
        sqMetersInput.value = (valNum / SQFT_PER_SQM).toFixed(2);
        acresInput.value = (valNum / MARLA_SQFT / MARLA_PER_KANAL / KANAL_PER_ACRE).toFixed(6);
        kanalInput.value = (valNum / MARLA_SQFT / MARLA_PER_KANAL).toFixed(6);
        marlaInput.value = (valNum / MARLA_SQFT).toFixed(6);
        sarsaiInput.value = (valNum / SARSAI_SQFT).toFixed(6);
    } else if (source === "sqMeters") {
        sqFeetInput.value = (valNum * SQFT_PER_SQM).toFixed(2);
        acresInput.value = (valNum / SQM_PER_ACRE).toFixed(6);
        kanalInput.value = (valNum * KANAL_PER_ACRE / SQM_PER_ACRE).toFixed(6);
        marlaInput.value = (valNum * MARLA_PER_KANAL * KANAL_PER_ACRE / SQM_PER_ACRE).toFixed(2);
        sarsaiInput.value = (valNum * SQFT_PER_SQM / SARSAI_SQFT).toFixed(6);
    } else if (source === "acres") {
        sqFeetInput.value = (valNum * KANAL_PER_ACRE * MARLA_PER_KANAL * MARLA_SQFT).toFixed(2);
        sqMetersInput.value = (valNum * SQM_PER_ACRE).toFixed(2);
        kanalInput.value = (valNum * KANAL_PER_ACRE).toFixed(2);
        marlaInput.value = (valNum * KANAL_PER_ACRE * MARLA_PER_KANAL).toFixed(2);
        sarsaiInput.value = (valNum * KANAL_PER_ACRE * MARLA_PER_KANAL * SARSAI_PER_MARLA).toFixed(2);
    } else if (source === "kanal") {
        sqFeetInput.value = (valNum * MARLA_PER_KANAL * MARLA_SQFT).toFixed(2);
        sqMetersInput.value = (valNum / KANAL_PER_ACRE * SQM_PER_ACRE).toFixed(2);
        acresInput.value = (valNum / KANAL_PER_ACRE).toFixed(6);
        marlaInput.value = (valNum * MARLA_PER_KANAL).toFixed(2);
        sarsaiInput.value = (valNum * MARLA_PER_KANAL * SARSAI_PER_MARLA).toFixed(2);
    } else if (source === "marla") {
        sqFeetInput.value = (valNum * MARLA_SQFT).toFixed(2);
        sqMetersInput.value = (valNum / MARLA_PER_KANAL / KANAL_PER_ACRE * SQM_PER_ACRE).toFixed(2);
        acresInput.value = (valNum / MARLA_PER_KANAL / KANAL_PER_ACRE).toFixed(6);
        kanalInput.value = (valNum / MARLA_PER_KANAL).toFixed(6);
        sarsaiInput.value = (valNum * SARSAI_PER_MARLA).toFixed(2);
    } else if (source === "sarsai") {
        sqFeetInput.value = (valNum * SARSAI_SQFT).toFixed(2);
        sqMetersInput.value = (valNum / SARSAI_PER_MARLA / MARLA_PER_KANAL / KANAL_PER_ACRE * SQM_PER_ACRE).toFixed(2);
        acresInput.value = (valNum / SARSAI_PER_MARLA / MARLA_PER_KANAL / KANAL_PER_ACRE).toFixed(6);
        kanalInput.value = (valNum / SARSAI_PER_MARLA / MARLA_PER_KANAL).toFixed(6);
        marlaInput.value = (valNum / SARSAI_PER_MARLA).toFixed(2);
    }
}

/**
 * Clears all input fields in the area converter
 */
function clearAreaFields() {
    const inputs = [sqFeetInput, sqMetersInput, acresInput, kanalInput, marlaInput, sarsaiInput];
    inputs.forEach(input => {
        if (input) input.value = '';
    });
}
