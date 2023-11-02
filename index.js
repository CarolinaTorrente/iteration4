// event listeners to all buttons with the class "control-button"
const goButtons = document.querySelectorAll('.control-button');

goButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Going to the playlist. You will start listening the first song!');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', () => {
        alert('Going to previous song!');
    });

    nextButton.addEventListener('click', () => {
        alert('Going to next song!');
    });

});