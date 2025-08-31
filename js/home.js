document.addEventListener('DOMContentLoaded', function() {
    
    const heartCountElement = document.getElementById('heart-count');
    
    
    const heartIcons = document.getElementsByClassName('heart-icon');
    
 
    for (let i = 0; i < heartIcons.length; i++) {
        heartIcons[i].addEventListener('click', function() {
            heartCountElement.textContent++;
        });
    }
});