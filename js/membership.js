$(document).ready(function() {
    // Membership Plans Data
    const membershipPlans = [
        {
            id: 'basic',
            name: 'Basic',
            price: 49.99,
            duration: 'month',
            features: [
                'Access to gym facilities',
                'Basic equipment usage',
                'Locker room access',
                'Free fitness assessment',
                '2 group classes per month'
            ],
            recommended: false
        },
        {
            id: 'premium',
            name: 'Premium',
            price: 89.99,
            duration: 'month',
            features: [
                'All Basic features',
                'Unlimited group classes',
                '1 personal training session/month',
                'Nutrition consultation',
                'Access to premium equipment',
                'Guest passes (2/month)'
            ],
            recommended: true
        },
        {
            id: 'elite',
            name: 'Elite',
            price: 149.99,
            duration: 'month',
            features: [
                'All Premium features',
                '4 personal training sessions/month',
                'Monthly body composition analysis',
                'Customized workout plan',
                'Priority class booking',
                'Spa access',
                'Unlimited guest passes'
            ],
            recommended: false
        }
    ];

    // FAQs Data
    const faqs = [
        {
            question: 'What is the minimum contract duration?',
            answer: 'Our memberships are month-to-month with no long-term commitment required. You can cancel anytime with 30 days notice.'
        },
        {
            question: 'Can I freeze my membership?',
            answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.'
        },
        {
            question: 'Are there any signup fees?',
            answer: 'We occasionally run promotions with waived signup fees. Regular signup fee is $49, which includes your first fitness assessment.'
        },
        {
            question: 'What are your operating hours?',
            answer: 'We are open 24/7 for your convenience. Staff hours are 6 AM - 10 PM Monday through Friday, and 8 AM - 8 PM on weekends.'
        },
        {
            question: 'Do you offer student discounts?',
            answer: 'Yes, we offer a 15% discount for students with a valid student ID.'
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'You can cancel your membership with 30 days written notice. There are no cancellation fees.'
        }
    ];

    // Load membership plans
    function loadMembershipPlans() {
        const plansContainer = $('#membershipPlans');
        membershipPlans.forEach(plan => {
            const planHtml = `
                <div class="col-md-4">
                    <div class="card membership-card h-100 ${plan.recommended ? 'recommended' : ''}">
                        ${plan.recommended ? '<div class="recommended-badge">Most Popular</div>' : ''}
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">${plan.name}</h3>
                            <div class="price text-center mb-4">
                                <span class="currency">$</span>
                                <span class="amount">${plan.price}</span>
                                <span class="duration">/${plan.duration}</span>
                            </div>
                            <ul class="feature-list">
                                ${plan.features.map(feature => `
                                    <li>
                                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                                        ${feature}
                                    </li>
                                `).join('')}
                            </ul>
                            <button 
                                class="btn btn-primary w-100 mt-4" 
                                data-bs-toggle="modal" 
                                data-bs-target="#signupModal"
                                data-plan="${plan.id}"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            `;
            plansContainer.append(planHtml);
        });
    }

    // Load FAQs
    function loadFAQs() {
        const faqContainer = $('#faqAccordion');
        faqs.forEach((faq, index) => {
            const faqHtml = `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button 
                            class="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#faq${index}"
                        >
                            ${faq.question}
                        </button>
                    </h2>
                    <div 
                        id="faq${index}" 
                        class="accordion-collapse collapse" 
                        data-bs-parent="#faqAccordion"
                    >
                        <div class="accordion-body">
                            ${faq.answer}
                        </div>
                    </div>
                </div>
            `;
            faqContainer.append(faqHtml);
        });
    }

    // Handle signup form submission
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Show success message
        const modal = $(this).closest('.modal');
        const modalBody = modal.find('.modal-body');
        modalBody.html(`
            <div class="text-center py-5">
                <i class="bi bi-check-circle text-success" style="font-size: 3rem;"></i>
                <h4 class="mt-3">Welcome to Fitness Hub!</h4>
                <p>Thank you for joining us. We'll contact you shortly with your membership details.</p>
            </div>
        `);
        
        // Close modal after 2 seconds
        setTimeout(() => {
            modal.modal('hide');
            // Reset form
            this.reset();
        }, 2000);
    });

    // Store selected plan when opening modal
    $('#signupModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        const plan = button.data('plan');
        $(this).find('form').attr('data-plan', plan);
    });

    // Handle newsletter form submission
    $('.newsletter-form').on('submit', function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert('Thank you for subscribing! We\'ll keep you updated with our latest news.');
        this.reset();
    });

    // Initialize
    loadMembershipPlans();
    loadFAQs();
});