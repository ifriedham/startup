document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.getElementById('openButton');
    const overlay = document.getElementById('overlay');
    const popupCard = document.getElementById('popupCard');
    const closeButton = document.getElementById('closeButton');

    openButton.addEventListener('click', function () {
        overlay.style.display = 'block';
        popupCard.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        popupCard.style.display = 'none';
    });
});
