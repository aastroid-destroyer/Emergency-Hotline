document.addEventListener('DOMContentLoaded', function () {

    const heartCountElement = document.getElementById('heart-count');


    const heartIcons = document.getElementsByClassName('heart-icon');


    for (let i = 0; i < heartIcons.length; i++) {
        heartIcons[i].addEventListener('click', function () {
            heartCountElement.textContent++;
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {

    const callButtons = document.querySelectorAll('.btn-call');


    const coinCountElement = document.getElementById('coin-count');

    let coinCount = parseInt(coinCountElement.textContent);

    callButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            const serviceName = button.getAttribute('data-service');
            const emergencyNumber = button.getAttribute('data-number');

            if (coinCount >= 20) {

                coinCount -= 20;
                coinCountElement.textContent = coinCount;
                alert(`Calling ${serviceName}: ${emergencyNumber}`);

            } else {

                alert('You do not have sufficient coins to call.');
            }
        });
    });
});



