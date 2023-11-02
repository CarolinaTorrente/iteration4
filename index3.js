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