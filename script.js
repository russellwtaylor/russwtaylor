function enterMatrix() {
    console.log('Entering the Matrix...');

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.width, canvas.height);

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#008F11');
    gradient.addColorStop(0.2, '#002B05');
    gradient.addColorStop(0.4, '#000E02');
    gradient.addColorStop(0.6, '#000E02');
    gradient.addColorStop(0.8, '#002B05');
    gradient.addColorStop(1, '#008F11');

    class Symbol {
        constructor(x, y, fontSize, canvasHeight) {
            this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.canvasHeight = canvasHeight;
        }
        draw(context) {
            this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
            if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
                this.y = 0;
            } else {
                this.y += 1;
            }
        }
    }

    class Effect {
        constructor(canvasWidth, canvasHeight) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.fontSize = 25;
            this.columns = this.canvasWidth / this.fontSize;
            this.symbols = [];
            this.#init();
        }
        #init() {
            for (let i = 0; i < this.columns; i++) {
                this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
            }
        }
        resize(width, height) {
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.columns = this.canvasWidth / this.fontSize;
            this.symbols = [];
            this.#init();
        }
    }

    const effect = new Effect(canvas.width, canvas.height);
    let lastTime = 0;
    const fps = 18;
    const nextFrame = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (timer > nextFrame) {
            ctx.fillStyle = 'rgba(13,2,8,0.05)';
            ctx.textAlign = 'center';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient;//'#0aff0a';
            ctx.font = effect.fontSize + 'px monospace';
            effect.symbols.forEach(symbol => symbol.draw(ctx));
            timer = 0;
        } else {
            timer += deltaTime;
        }
        requestAnimationFrame(animate);
    }
    animate(0);

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effect.resize(canvas.width, canvas.height);
    });


}

document.addEventListener('DOMContentLoaded', () => {
    // Typed Text Effect
    const typedTextElement = document.querySelector('.typed-text');
    const texts = ['Software Engineer', 'Salesforce Consultant', 'Creative Coder'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple form validation
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            // In a real-world scenario, you'd send this to a backend
            alert('Message sent successfully! (Note: This is a demo)');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Scroll Reveal Effects
    const revealElements = document.querySelectorAll('section, .project-card, .skill-card');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call
});