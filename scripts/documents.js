const showTextButton = document.getElementById('Documents-btn');
const hiddenText = document.getElementById('hiddenText');

showTextButton.addEventListener('click', function() {
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    }
});

