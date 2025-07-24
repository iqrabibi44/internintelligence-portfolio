
let menuIcon=document.querySelector('#menu-icon');

let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






let sections = document.querySelectorAll('section');

let navlinks = document.querySelectorAll('header nav a');

window.onscroll=() => {
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const typed=new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    
    alert('Message sent successfully!');
    form.reset(); 
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const contactCards = document.querySelectorAll('.contact-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

contactCards.forEach(card => {
    observer.observe(card);
});


const closeNotification = document.querySelector('.close-notification');
const notificationBar = document.querySelector('.notification-bar');

// Close notification on button click
closeNotification.addEventListener('click', () => {
    notificationBar.style.animation = 'slideDown 0.5s ease forwards';
    setTimeout(() => {
        notificationBar.style.display = 'none';
    }, 500); // Match the animation duration
});


setTimeout(() => {
    notificationBar.style.animation = 'slideDown 0.5s ease forwards';
    setTimeout(() => {
        notificationBar.style.display = 'none';
    }, 500); // Match the animation duration
}, 5000); // 5 seconds


const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideDown {
        from {
            bottom: 0;
        }
        to {
            bottom: -100px;
        }
    }
`;
document.head.appendChild(style);

