document.addEventListener('DOMContentLoaded', function() {
  const inquiryForm = document.getElementById('inquiryForm');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const inputs = inquiryForm.querySelectorAll('.form-control[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });

      const emailInput = inquiryForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          emailInput.classList.add('is-invalid');
          const errorMsg = emailInput.nextElementSibling;
          if (errorMsg) errorMsg.textContent = '유효한 이메일 주소를 입력해주세요.';
          isValid = false;
        }
      }

      if (isValid) {
        alert('문의가 성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
        inquiryForm.reset();
      }
    });

    // Clear error on input
    inquiryForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', function() {
        if (this.classList.contains('is-invalid')) {
          this.classList.remove('is-invalid');
        }
      });
    });
  }
});
