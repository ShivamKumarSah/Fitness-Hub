$(document).ready(function () {
    // Testimonials Data
    const testimonials = [
        {
            name: "Nidhi Ray",
            image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            quote: "Lost 30 pounds and gained confidence! The trainers here are amazing.",
            achievement: "Weight Loss Journey"
        },
        {
            name: "Amit Niyogi",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            quote: "From beginner to competing in powerlifting. Fitness Hub changed my life!",
            achievement: "Strength Champion"
        },
        {
            name: "Sana Khan",
            image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            quote: "The yoga classes helped me find balance in my busy life.",
            achievement: "Wellness Journey"
        }
    ];

    // Load testimonials
    function loadTestimonials() {
        const container = $('#testimonials-container');
        testimonials.forEach(testimonial => {
            const testimonialHtml = `
                <div class="col-md-4">
                    <div class="testimonial-card card h-100">
                        <div class="card-body text-center">
                            <img src="${testimonial.image}" class="testimonial-image rounded-circle mb-3" alt="${testimonial.name}">
                            <h5 class="card-title">${testimonial.name}</h5>
                            <p class="text-primary mb-3">${testimonial.achievement}</p>
                            <p class="card-text">"${testimonial.quote}"</p>
                        </div>
                    </div>
                </div>
            `;
            container.append(testimonialHtml);
        });
    }

    // Initialize carousel
    $('#facilityCarousel').carousel({
        interval: 5000
    });

    // Handle newsletter form submission
    $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert('Thank you for subscribing! We\'ll keep you updated with our latest news.');
        this.reset();
    });

    // Initialize tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Smooth scroll for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
            }
        }
    });

    // Load testimonials on page load
    loadTestimonials();
});