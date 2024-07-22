const passwordInput = document.getElementById("password")
const emailInput = document.getElementById("email")
const confirmPasswordInput  = document.getElementById("confirmation-password")

const btnAddSubmit1 = document.getElementById("submit-signup")
const btnAddSubmit2 = document.getElementById("submit-signin")

// Function để kiểm tra password và confirm password trùng nhau
function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    return password === confirmPassword;
}

// Xử lý khi submit form
btnAddSubmit1.addEventListener('click', ()=> { 

    // Kiểm tra password và confirm password
    if (!validatePassword()) {
        return;
    }

    // Lưu vào localStorage
    const email = emailInput.value;
    const password = passwordInput.value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    window.location.href =("http://127.0.0.1:5500/signin.html")
    // Thông báo thành công
    alert('Đăng ký thành công!');
    
});
