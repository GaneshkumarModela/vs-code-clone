
function closeBanner() {
    document.getElementById('notificationBanner').style.display = 'none';
}

const button1 = document.getElementById('download-button-1');
const button2 = document.getElementById('download-button-2');
const para = document.getElementById('hover-para');

// Show paragraph on hover
button1.addEventListener('mouseover', () => {
    para.style.display = 'block';
});

// Hide paragraph when not hovering
button1.addEventListener('mouseout', () => {
    para.style.display = 'none';
});
// Show paragraph on hover
button2.addEventListener('mouseover', () => {
    para.style.display = 'block';
});

// Hide paragraph when not hovering
button2.addEventListener('mouseout', () => {
    para.style.display = 'none';
});
