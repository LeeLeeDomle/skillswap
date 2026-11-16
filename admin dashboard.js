document.addEventListener("DOMContentLoaded", function () {

    // -------------------------
    // Sidebar Active State
    // -------------------------
    const menuItems = document.querySelectorAll(".sidebar .menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // -------------------------
    // Approve Tutor Buttons
    // -------------------------
    const approveButtons = document.querySelectorAll(".approve-btn");

    approveButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.textContent = "Approved";
            this.style.background = "#0f9d58"; // Green for approved
            this.style.cursor = "default";
            alert("Tutor approved ✅");
        });
    });

    // -------------------------
    // Search Users (Top Nav)
    // -------------------------
    const searchInput = document.querySelector(".search-box input");
    const userItems = document.querySelectorAll(".user-item");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const searchValue = searchInput.value.toLowerCase();

            userItems.forEach(item => {
                const name = item.querySelector("strong").textContent.toLowerCase();
                if (name.includes(searchValue)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // -------------------------
    // View Buttons (just alert)
    // -------------------------
    const viewBtns = document.querySelectorAll(".view-btn");

    viewBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            alert("Feature coming soon 🚀");
        });
    });

    // -------------------------
    // Logout Button
    // -------------------------
    const logoutBtn = document.querySelector(".menu-item-bottom .menu-item:last-child");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            alert("Admin logged out 👋");
            // Redirect to login page if you have one
            window.location.href = "signin.html";
        });
    }
});