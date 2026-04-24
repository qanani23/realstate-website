
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const errorMsg = document.getElementById("errorMsg");
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            errorMsg.style.color = "green";
            errorMsg.innerText = `Welcome, ${user.username}! Redirecting...`;
            setTimeout(() => {
                window.location.href = "mainpage.html";
            }, 1000);
        } else {
            errorMsg.style.color = "red";
            errorMsg.innerText = "Invalid email or password! please try again ";
        }
    });
}


const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const message = document.getElementById("signupMessage");
        const username = document.getElementById("newUsername").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("newPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (password !== confirmPassword) {
            message.innerText = "Passwords do not match!";
            message.classList.remove("success");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === email)) {
            message.innerText = "Email already registered! you were already in so try with you old email";
            message.classList.remove("success");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        message.innerText = "Account created! You can now login.";
        message.classList.add("success");
        form.reset();
    });
}
