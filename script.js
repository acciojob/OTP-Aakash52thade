//your JS code here. If required.

const codes = document.querySelectorAll('.code');

codes[0].focus(); // Automatically focus the first input field on page load

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        // Handle backspace key
        if (e.key === 'Backspace') {
            // Check if the current field is empty
            if (code.value === '') {
                // If it's empty, move focus to the previous field if it exists
                if (index > 0) {
                    setTimeout(() => codes[index - 1].focus(), 0);
                }
            } else {
                // If it's not empty, just clear the value and stay
                code.value = '';
            }
        }
    });

    code.addEventListener('input', (e) => {
        // Handle forward typing
        // Check if the current input has a value
        if (e.target.value.length === 1) {
            // If it has a value, move focus to the next input field
            if (index < codes.length - 1) {
                setTimeout(() => codes[index + 1].focus(), 0);
            }
        }
    });
});
