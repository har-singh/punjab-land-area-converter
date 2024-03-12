// Get references to the input elements
const rakbaInput = document.getElementById('rakba');
const sarsaiInput = document.getElementById('sarsai');
const errorDiv = document.getElementById('error-message');

// Function to update sarsai based on Rakba input
function rakbaToSarsaiConverter() {
    const rakbaValue = rakbaInput.value.trim(); // Remove leading and trailing spaces

    if (rakbaValue) {
        const rakbaParts = rakbaValue.split('-'); // Split Rakba into parts by "-"
        
        // Ensure there are exactly 3 parts
        if (rakbaParts.length === 3) {
            const kanal = parseInt(rakbaParts[0]);
            const marla = parseInt(rakbaParts[1]);
            const sarsai = parseInt(rakbaParts[2]);

            const totalSarsai = kanal * 180 + marla * 9 + sarsai;
            sarsaiInput.value = totalSarsai;
            errorDiv.textContent = ''; // Clear error message
        } else {
            errorDiv.textContent = "Invalid Rakba format. Please provide a valid Rakba in the format [kanal]-[marla]-[sarsai].";
        }
    } else {
        sarsaiInput.value = ''; // Clear the Sarsai input if Rakba is empty
        errorDiv.textContent = ''; // Clear error message
    }
}

// Function to update Rakba based on Sarsai input
function sarsaiToRakbaConverter() {
    const sarsaiValue = parseInt(sarsaiInput.value);

    if (!isNaN(sarsaiValue) && sarsaiValue >= 0) {
        const kanal = Math.floor(sarsaiValue / 180);
        const remainingSarsai = sarsaiValue % 180;
        const marla = Math.floor(remainingSarsai / 9);
        const sarsai = remainingSarsai % 9;

        rakbaInput.value = `${kanal}-${marla}-${sarsai}`;
        errorDiv.textContent = ''; // Clear error message
    } else {
        rakbaInput.value = ''; // Clear the Rakba input if Sarsai is invalid
        errorDiv.textContent = "Invalid Sarsai value. Please provide a valid non-negative integer.";
    }
}
