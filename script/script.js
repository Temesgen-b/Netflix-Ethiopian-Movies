const accordionContains = document.getElementsByClassName('acc-content');
const accordionBtns = document.querySelectorAll('.acc-header');
const primary_email_submit = document.getElementById('primary_email_submit')
const emailSubmit = document.getElementById('email_submit')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            const container = btn.nextElementSibling;
            const isOpen = container.getAttribute('data-open');
            const icon = btn.lastElementChild

            accordionBtns.forEach(otherBtn => {
                const otherContainer = otherBtn.nextElementSibling;
                const otherIcon = otherBtn.lastElementChild
                if (otherContainer !== container) {
                    otherContainer.style.display = "none";
                    otherContainer.setAttribute('data-open', "false")
                    otherIcon.style.rotate = '0deg';
                }
            })

            if (isOpen === "true") {
                container.style.display = "none";
                icon.style.rotate = '0deg'
                container.setAttribute('data-open', "false");
            } else {
                container.style.display = "block";
                container.setAttribute('data-open', "true");
                icon.style.rotate = '138.5deg'
            }
        }, 10)

    })
});

function email() {
    const input = emailSubmit.previousElementSibling
    const email_error = emailSubmit.nextElementSibling
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const check = re.test(String(input.value).toLocaleLowerCase());
    if (!check) {
        email_error.textContent = "enter valid email address "
        email_error.style.color = 'red';
        input.style.border = '1px solid red';
    } else {
        input.style.border = '1px solid green';
    }
    if (input.value === "") {
        email_error.textContent = "Can't be empty "
    };
    input.value = "";
}

emailSubmit.addEventListener('click', () => {
    email()
})
primary_email_submit.addEventListener('click', () => {
    email()
})


//slider


const Imgs = [
    { title: "forever", path: "assets/img/forever.jpg" },
    { title: "Friends", path: "assets/img/Friends.jpg" },
    { title: "Good-Bad", path: "assets/img/Good-Bad.jpg" },
    { title: "Havoc", path: "assets/assets/img/Havoc.jpeg" },
    { title: "Inside-Man", path: "assets/img/Inside-Man.jpg" },
    { title: "last Bullet", path: "assets/img/last Bullet.jpg" },
]

const cardGallery = document.querySelector('.card-gallery');
const image = document.querySelectorAll(".move-thumbnail");
const galleryWrapper = document.querySelector('.gallery-wrapper');
const next = document.querySelector('.next');
const back = document.querySelector('.back');


let index = 0;
let visibleSlides = 5;
let lengths = image.length - visibleSlides;

function update() {
    const slideWidth = 230;
    cardGallery.style.transform = `translateX(-${index * slideWidth}px)`;
}

back.addEventListener('click', () => {
    if (index > 0) {
        index--;
        update();
    }

});

next.addEventListener('click', () => {
    if (index < lengths) {
        index++
        update();
    }

});



