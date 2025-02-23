document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".info");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all tabs & hide all content
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Show the corresponding content
            const targetId = this.getAttribute("data-info");
            document.getElementById(targetId).classList.add("active");
        });
    });
});

// for projects
document.addEventListener("DOMContentLoaded", function () {
    const projectTabLinks = document.querySelectorAll(".project-tab-link");
    const projectInfoSections = document.querySelectorAll(".project-info");

    projectTabLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all project tabs and sections
            projectTabLinks.forEach((tab) => tab.classList.remove("active"));
            projectInfoSections.forEach((section) => section.classList.remove("active"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Get the corresponding content section
            const targetID = this.getAttribute("data-project");
            const targetSection = document.getElementById(targetID);

            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});


//experience section

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".exp-tab");
    const contents = document.querySelectorAll(".exp-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to the clicked tab
            this.classList.add("active");

            // Hide all content sections
            contents.forEach(content => content.classList.remove("active"));

            // Get the target content ID from data-tab attribute
            const target = this.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });
});
