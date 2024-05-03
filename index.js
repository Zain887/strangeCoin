let logo = document.getElementById("strangLogo");

function logoCatch() {
    if (window.innerWidth > 768) {
        if (logo.style.left === '45%') {
            logo.style.left = '25%';
        } else if (logo.style.left === '25%') {
            logo.style.left = '65%';
        } else {
            logo.style.left = '45%';
        }
        logo.style.transitionDuration = '.3s';
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('backgroundMusic');
//     document.body.addEventListener('click', function () {
//         audio.play().catch(function (error) {
//             console.error('Failed to play audio:', error);
//         });
//     });
// });
