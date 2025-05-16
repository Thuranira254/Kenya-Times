// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the data-target attribute
        const targetId = this.getAttribute('data-target');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the target section if it exists
        if (targetId) {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            } else {
                console.error(`Section with ID "${targetId}" not found.`);
            }
        }
    });
});