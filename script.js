document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.hero h1', { delay: 200, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('.hero p', { delay: 400, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.cta-button', { delay: 600, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.feature-card', { delay: 200, origin: 'bottom', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.step', { delay: 200, origin: 'left', distance: '50px', interval: 200 });
    ScrollReveal().reveal('#download h2', { delay: 200, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('.download-button', { delay: 400, origin: 'bottom', distance: '50px' });

    // Download button functionality
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const apkUrl = 'https://drive.google.com/file/d/19oIl8ff-DR0YQkJP4bfGPCxW6D1dQZLK/view?usp=drivesdk';

        // Create a temporary anchor element
        const tempLink = document.createElement('a');
        tempLink.href = apkUrl;
        tempLink.setAttribute('download', 'SpeedClipper.apk');
        tempLink.style.display = 'none';

        // Append to body, trigger click, and remove
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
});
