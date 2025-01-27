$(document).ready(function () {
    // Trainers Data
    const trainers = [
        {
            id: 1,
            name: 'Ravi Dey',
            role: 'Head Strength Coach',
            image: 'https://plus.unsplash.com/premium_photo-1661376977292-6757ecc20173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            specialties: ['Strength Training', 'CrossFit', 'Powerlifting'],
            experience: '10+ years',
            certifications: ['NASM CPT', 'CrossFit Level 2', 'CSCS'],
            bio: 'John is our head strength coach with over a decade of experience in transforming lives through fitness. His passion for strength training and dedication to proper form has helped countless clients achieve their fitness goals.',
            schedule: 'Mon-Fri: 6AM-2PM'
        },
        {
            id: 2,
            name: 'Ishita Roy',
            role: 'HIIT & Cardio Specialist',
            image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            specialties: ['HIIT', 'Cardio', 'Weight Loss'],
            experience: '8 years',
            certifications: ['ACE CPT', 'HIIT Specialist', 'Nutrition Coach'],
            bio: 'Sarah specializes in high-intensity workouts that maximize calorie burn and improve cardiovascular health. Her energetic approach and motivational style make every session challenging yet enjoyable.',
            schedule: 'Mon-Sat: 7AM-3PM'
        },
        {
            id: 3,
            name: 'Shreya Dutta',
            role: 'Yoga & Wellness Coach',
            image: 'https://plus.unsplash.com/premium_photo-1675688860151-ac8158c88254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            specialties: ['Yoga', 'Meditation', 'Flexibility'],
            experience: '12 years',
            certifications: ['RYT 500', 'Meditation Teacher', 'Wellness Coach'],
            bio: 'Emma brings a holistic approach to fitness, combining traditional yoga practices with modern wellness techniques. Her classes focus on building strength, flexibility, and mental clarity.',
            schedule: 'Tue-Sun: 8AM-4PM'
        },
        {
            id: 4,
            name: 'Sahil Tiwari',
            role: 'CrossFit Coach',
            image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            specialties: ['CrossFit', 'Olympic Lifting', 'Functional Training'],
            experience: '7 years',
            certifications: ['CrossFit Level 3', 'USAW Sports Performance', 'First Aid'],
            bio: 'Mike is passionate about helping athletes reach their full potential through CrossFit and functional training. His programming focuses on building well-rounded fitness and athletic performance.',
            schedule: 'Mon-Fri: 2PM-10PM'
        }
    ];

    // Load trainers
    function loadTrainers() {
        const grid = $('#trainersGrid');
        trainers.forEach(trainer => {
            const trainerHtml = `
                <div class="col-md-6 col-lg-3">
                    <div class="trainer-card card h-100">
                        <img src="${trainer.image}" class="card-img-top trainer-image" alt="${trainer.name}" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">${trainer.name}</h5>
                            <p class="card-subtitle mb-2 text-muted">${trainer.role}</p>
                            <div class="specialties mb-3">
                                ${trainer.specialties.map(specialty =>
                `<span class="badge bg-primary me-1">${specialty}</span>`
            ).join('')}
                            </div>
                            <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#trainerModal${trainer.id}">
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>
            `;
            grid.append(trainerHtml);
        });
    }

    // Create trainer modals
    function createModals() {
        const modalsContainer = $('#trainerModals');
        trainers.forEach(trainer => {
            const modalHtml = `
                <div class="modal fade" id="trainerModal${trainer.id}" tabindex="-1">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${trainer.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="${trainer.image}" class="img-fluid rounded mb-3" alt="${trainer.name}">
                                        <div class="trainer-info">
                                            <p><strong>Experience:</strong> ${trainer.experience}</p>
                                            <p><strong>Schedule:</strong> ${trainer.schedule}</p>
                                            <h6 class="mt-3">Certifications:</h6>
                                            <ul class="list-unstyled">
                                                ${trainer.certifications.map(cert =>
                `<li><i class="bi bi-check-circle-fill text-success me-2"></i>${cert}</li>`
            ).join('')}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="fw-bold mb-3">About ${trainer.name}</h6>
                                        <p>${trainer.bio}</p>
                                        
                                        <h6 class="fw-bold mt-4 mb-3">Book a Session</h6>
                                        <form class="booking-form" id="bookingForm${trainer.id}">
                                            <div class="row g-3">
                                                <div class="col-md-6">
                                                    <label class="form-label">Name</label>
                                                    <input type="text" class="form-control" required>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control" required>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Phone</label>
                                                    <input type="tel" class="form-control" required>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Preferred Date</label>
                                                    <input type="date" class="form-control" required>
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Message</label>
                                                    <textarea class="form-control" rows="3" placeholder="Tell us about your fitness goals..."></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" form="bookingForm${trainer.id}" class="btn btn-primary">Book Session</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modalsContainer.append(modalHtml);
        });
    }

    // Handle booking form submissions
    function handleBookings() {
        $(document).on('submit', '.booking-form', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            // Show success message
            const modal = $(this).closest('.modal');
            const modalBody = modal.find('.modal-body');
            modalBody.html(`
                <div class="text-center py-5">
                    <i class="bi bi-check-circle text-success" style="font-size: 3rem;"></i>
                    <h4 class="mt-3">Booking Request Sent!</h4>
                    <p>Thank you for booking a session. Your trainer will contact you shortly to confirm the appointment.</p>
                </div>
            `);

            // Close modal after 2 seconds
            setTimeout(() => {
                modal.modal('hide');
                // Reset form
                this.reset();
            }, 2000);
        });
    }

    // Handle newsletter form submission
    $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert('Thank you for subscribing! We\'ll keep you updated with our latest news.');
        this.reset();
    });

    // Initialize
    loadTrainers();
    createModals();
    handleBookings();
});