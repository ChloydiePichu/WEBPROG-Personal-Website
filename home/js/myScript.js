const buttons = document.querySelectorAll('.button-container button');
const displayBox = document.getElementById('display-box');
const contentElements = {};

document.querySelectorAll('.hidden-content').forEach(element => {
    contentElements[element.id] = element.innerHTML;
    element.remove();
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        displayBox.innerHTML = '';  

        if (targetId === 'survey') {
            displayBox.innerHTML = contentElements[targetId];
            const submitButton = displayBox.querySelector('.submit-button');

            submitButton.addEventListener('click', () => {
                const suggestions = displayBox.querySelector('#suggestions').value;
                const likes = displayBox.querySelector('#likes').value;
                const rating = displayBox.querySelector('input[name="rating"]:checked')?.value;

                alert(`Thank you for your feedback!\nSuggestions: ${suggestions}\nLikes: ${likes}\nRating: ${rating}`);
            });
        } else {
            displayBox.innerHTML = contentElements[targetId];
        }
    });
});
