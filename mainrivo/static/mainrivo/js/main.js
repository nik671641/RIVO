function updateFileName(input) {
  const fileNameSpan = input.closest('.custom-file-wrapper').querySelector('.custom-file-name');
  if (input.files.length > 0) {
    fileNameSpan.textContent = input.files[0].name;
  } else {
    fileNameSpan.textContent = 'No file chosen';
  }
}


function validateEmail() {
  const input = document.getElementById('email');
  const error = document.getElementById('email-error');

  if (!input.value.includes('@')) {
    error.style.display = 'flex';
    input.classList.add('invalid');
  } else {
    error.style.display = 'none';
    input.classList.remove('invalid');
  }
}
