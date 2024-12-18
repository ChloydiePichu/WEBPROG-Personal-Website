const buttons = document.querySelectorAll('.button-container button');
const closeButtons = document.querySelectorAll('.close-button');
const popups = document.querySelectorAll('.popup');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPopupId = button.dataset.target;
        const targetPopup = document.getElementById(targetPopupId);
        if (targetPopup) {
            targetPopup.style.display = 'block';
        }
    });
});

closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const targetPopupId = closeButton.dataset.close;
        const targetPopup = document.getElementById(targetPopupId);
        if (targetPopup) {
            targetPopup.style.display = 'none';
        }
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});