        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Smooth scrolling
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Typewriter effect for hero text
            const heroText = document.querySelector('#hero p');
            const text = heroText.textContent;
            heroText.textContent = '';
            let index = 0;

            function typeWriter() {
                if (index < text.length) {
                    heroText.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 50);
                }
            }

            typeWriter();
        });