(() => {
  const codes = document.querySelectorAll('.code');

  if (codes.length > 0) {
    codes[0].focus(); // focus first input

    codes.forEach((code, index) => {
      code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (code.value === '') {
            if (index > 0) {
              setTimeout(() => codes[index - 1].focus(), 0);
            }
          } else {
            code.value = '';
          }
        }
      });

      code.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
          if (index < codes.length - 1) {
            setTimeout(() => codes[index + 1].focus(), 0);
          }
        }
      });
    });
  }
})();
