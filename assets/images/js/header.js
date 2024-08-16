
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('toggle-menu');
        const submenu = document.getElementById('submenu');
        const expandButton = document.querySelector('.expand-subpages');

        // Function to toggle submenu visibility
        function toggleSubmenu() {
            const isExpanded = submenu.style.display === 'block';
            submenu.style.display = isExpanded ? 'none' : 'block';
            expandButton.setAttribute('aria-expanded', !isExpanded);
        }

        // Set initial submenu state
        submenu.style.display = 'none';

        // Add click event listener to toggle button
        toggleButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor action
            toggleSubmenu();
        });

        // Optional: Add click event listener to expand button if needed
        expandButton.addEventListener('click', function() {
            toggleSubmenu();
        });
    });

