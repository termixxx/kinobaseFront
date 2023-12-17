const popupLinks = document.querySelectorAll('.popup-link');

let unlock = true;

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        currentPopup.classList.add('open');
        unlock = false;
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));

            }
        })
    }
}

for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        e.preventDefault();
    })
}

const popupCloseIcon = document.querySelectorAll('.close-popup');


function popupClose(element) {
    element.classList.remove('open');
    unlock = true;
}

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}
const alreadyRegister = document.getElementById('alreadyRegister');
alreadyRegister.addEventListener('click', (e) => {
    popupClose(alreadyRegister.closest('.popup'));
    setTimeout(() => {
        popupOpen(document.getElementById('login'));
    }, 350);
})