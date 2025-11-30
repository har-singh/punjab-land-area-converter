/**
 * Rakba Converter - Converts between Rakba format and Sarsai
 * Rakba format: kanal-marla-sarsai (e.g., 13-5-4)
 */

// Get references to the input elements
const rakbaInput = document.getElementById('rakba');
// Support both index.html (rakbaSarsai) and rakba.html (rakbaSarsai)
const rakbaSarsaiInput = document.getElementById('rakbaSarsai');
const errorDiv = document.getElementById('error-message');

// Conversion constants
const SARSAI_PER_MARLA_RAKBA = 9;    // 1 marla = 9 sarsai
const SARSAI_PER_KANAL = 180;        // 1 kanal = 20 marla × 9 sarsai = 180 sarsai

/**
 * Converts Rakba format (kanal-marla-sarsai) to total Sarsai
 */
function rakbaToSarsaiConverter() {
    if (!rakbaInput || !rakbaSarsaiInput) return;
    
    const rakbaValue = rakbaInput.value.trim();

    if (rakbaValue) {
        const rakbaParts = rakbaValue.split('-');
        
        // Ensure there are exactly 3 parts
        if (rakbaParts.length === 3) {
            const kanal = parseInt(rakbaParts[0], 10);
            const marla = parseInt(rakbaParts[1], 10);
            const sarsai = parseInt(rakbaParts[2], 10);

            // Validate all parts are valid numbers
            if (isNaN(kanal) || isNaN(marla) || isNaN(sarsai) || 
                kanal < 0 || marla < 0 || sarsai < 0) {
                if (errorDiv) {
                    errorDiv.textContent = "Invalid values. Please enter non-negative numbers.";
                }
                return;
            }

            const totalSarsai = kanal * SARSAI_PER_KANAL + marla * SARSAI_PER_MARLA_RAKBA + sarsai;
            rakbaSarsaiInput.value = totalSarsai;
            if (errorDiv) errorDiv.textContent = '';
        } else {
            if (errorDiv) {
                errorDiv.textContent = "Invalid Rakba format. Please use format: kanal-marla-sarsai (e.g., 13-5-4)";
            }
        }
    } else {
        rakbaSarsaiInput.value = '';
        if (errorDiv) errorDiv.textContent = '';
    }
}

/**
 * Converts total Sarsai to Rakba format (kanal-marla-sarsai)
 */
function sarsaiToRakbaConverter() {
    if (!rakbaInput || !rakbaSarsaiInput) return;
    
    const sarsaiValue = parseInt(rakbaSarsaiInput.value, 10);

    if (!isNaN(sarsaiValue) && sarsaiValue >= 0) {
        const kanal = Math.floor(sarsaiValue / SARSAI_PER_KANAL);
        const remainingSarsai = sarsaiValue % SARSAI_PER_KANAL;
        const marla = Math.floor(remainingSarsai / SARSAI_PER_MARLA_RAKBA);
        const sarsai = remainingSarsai % SARSAI_PER_MARLA_RAKBA;

        rakbaInput.value = `${kanal}-${marla}-${sarsai}`;
        if (errorDiv) errorDiv.textContent = '';
    } else {
        rakbaInput.value = '';
        if (errorDiv) {
            errorDiv.textContent = "Invalid Sarsai value. Please enter a non-negative integer.";
        }
    }
}

/**
 * Clears all Rakba converter fields
 */
function clearRakbaFields() {
    if (rakbaInput) rakbaInput.value = '';
    if (rakbaSarsaiInput) rakbaSarsaiInput.value = '';
    if (errorDiv) errorDiv.textContent = '';
}
