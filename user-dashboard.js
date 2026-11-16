document.addEventListener("DOMContentLoaded", function () {

    const savedUser = JSON.parse(localStorage.getItem("skillswapUser"));

    if (savedUser) {
        const userName = document.getElementById("userName");
        const userEmail = document.getElementById("userEmail");

        if (userName) userName.textContent = savedUser.fullname;
        if (userEmail) userEmail.textContent = savedUser.email;
    }

    // Logout
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("skillswapUser");
            alert("Logged out successfully 👋");
            window.location.href = "signin.html";
        });
    }

    // Sidebar active state
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(li => li.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Search
    const searchInput = document.getElementById("searchInput");
    const courseCards = document.querySelectorAll(".course-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const searchValue = searchInput.value.toLowerCase();

            courseCards.forEach(card => {
                const title = card.querySelector(".course-title").textContent.toLowerCase();

                if (title.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // Buttons
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Course details coming soon 🚀");
        });
    });

});