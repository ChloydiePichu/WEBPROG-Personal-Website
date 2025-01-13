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
function initializeCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;


    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = (i === index) ? 'block' : 'none';
        });
    }


    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });


    showImage(currentIndex);
}
    });
});
