// Scroll to top functionality
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('show');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navUl.classList.remove('show');
        });
    });
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Project tabs functionality
document.addEventListener('DOMContentLoaded', function () {
    const projectTabs = document.querySelectorAll('.project-tab');
    const projectContents = document.querySelectorAll('.project-content');

    projectTabs.forEach(tab => {
        tab.addEventListener('mouseenter', function () {
            const projectName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showProject(projectName);
        });
    });

    function showProject(projectName) {
        projectContents.forEach(content => {
            if (content.id === projectName) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });

        projectTabs.forEach(tab => {
            if (tab.getAttribute('onclick').includes(projectName)) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    // Show the first project by default
    const firstProjectName = projectTabs[0].getAttribute('onclick').match(/'([^']+)'/)[1];
    showProject(firstProjectName);
});

// Experience tabs functionality
document.addEventListener('DOMContentLoaded', function () {
    const experienceTabs = document.querySelectorAll('.tablinks');
    const experienceContents = document.querySelectorAll('.tabcontent');

    experienceTabs.forEach(tab => {
        tab.addEventListener('mouseenter', function () {
            const cityName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            openCity(this, cityName);
        });
    });

    function openCity(element, cityName) {
        experienceContents.forEach(content => {
            content.style.display = 'none';
        });

        experienceTabs.forEach(tab => {
            tab.className = tab.className.replace(" active", "");
        });

        document.getElementById(cityName).style.display = "block";
        element.className += " active";
    }

    // Show the default tab content on page load
    const defaultTab = document.getElementById("defaultOpen");
    const defaultCityName = defaultTab.getAttribute('onclick').match(/'([^']+)'/)[1];
    openCity(defaultTab, defaultCityName);
});

// Function to open project tabs
function openProject(evt, projectName) {
    var i, projectContent, projectTabs;
    projectContent = document.getElementsByClassName("project-content");
    for (i = 0; i < projectContent.length; i++) {
        projectContent[i].style.display = "none";
    }
    projectTabs = document.getElementsByClassName("project-tab");
    for (i = 0; i < projectTabs.length; i++) {
        projectTabs[i].className = projectTabs[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the first project by default
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName("project-tab")[0].click();
});
