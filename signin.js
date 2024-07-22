const passwordInput = document.getElementById("password")
const emailInput = document.getElementById("email")
const confirmPasswordInput  = document.getElementById("confirmation-password")

const btnAddSubmit2 = document.getElementById("submit-signin")

function validateSignIn() {
    const passwordSignIn = localStorage.getItem('password');
    const emailSignIn = localStorage.getItem('email');
    return passwordInput.value ===  passwordSignIn && emailInput.value === emailSignIn
}

btnAddSubmit2.addEventListener('click',()=>{
    
    if(!validateSignIn()){
        alert('Đăng nhập không thành công!');
        return
    }
    window.location.href =("http://127.0.0.1:5500/welcome.html")
    alert('Đăng nhập thành công!');
    
});