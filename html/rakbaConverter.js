// Get references to the input elements
const rakbaInput = document.getElementById('rakba');
const sarsaiInput = document.getElementById('sarsai');

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
        } else {
            alert("Invalid Rakba format. Please provide a valid Rakba in the format [kanal]-[marla]-[sarsai].");
        }
    } else {
        sarsaiInput.value = ''; // Clear the Sarsai input if Rakba is empty
    }
}

// Event listener to trigger conversion when Rakba input changes
rakbaInput.addEventListener('input', rakbaToSarsaiConverter);
