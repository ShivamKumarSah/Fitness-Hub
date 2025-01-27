$(document).ready(function () {
    // Programs Data
    const programs = [
        {
            id: 'strength',
            title: 'Strength Training',
            category: 'strength',
            image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
            description: 'Build muscle and increase strength with our comprehensive program.',
            details: {
                schedule: 'Mon, Wed, Fri (6 AM - 8 PM)',
                trainer: 'Ravi Dey',
                level: 'All Levels',
                duration: '60 minutes',
                features: [
                    'Personal training sessions',
                    'Custom workout plans',
                    'Nutrition guidance',
                    'Progress tracking'
                ]
            }
        },
        {
            id: 'hiit',
            title: 'HIIT Training',
            category: 'cardio',
            image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712',
            description: 'High-intensity interval training for maximum calorie burn.',
            details: {
                schedule: 'Tue, Thu, Sat (7 AM - 7 PM)',
                trainer: 'Ishita Roy',
                level: 'Intermediate to Advanced',
                duration: '45 minutes',
                features: [
                    'Circuit training',
                    'Metabolic conditioning',
                    'Interval workouts',
                    'Performance tracking'
                ]
            }
        },
        {
            id: 'yoga',
            title: 'Yoga & Meditation',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
            description: 'Find balance and inner peace with our yoga programs.',
            details: {
                schedule: 'Daily (6 AM - 7 PM)',
                trainer: 'Shreya Dutta',
                level: 'All Levels',
                duration: '60 minutes',
                features: [
                    'Beginner to advanced classes',
                    'Meditation sessions',
                    'Breathing exercises',
                    'Flexibility training'
                ]
            }
        },
        {
            id: 'crossfit',
            title: 'CrossFit',
            category: 'strength',
            image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa',
            description: 'Challenge yourself with our intensive CrossFit workouts.',
            details: {
                schedule: 'Mon-Sat (5 AM - 9 PM)',
                trainer: 'Mike Wilson',
                level: 'Intermediate to Advanced',
                duration: '60 minutes',
                features: [
                    'Functional movements',
                    'Olympic weightlifting',
                    'Gymnastics elements',
                    'Competition training'
                ]
            }
        },
        {
            id: 'pilates',
            title: 'Pilates',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
            description: 'Strengthen your core and improve flexibility with Pilates.',
            details: {
                schedule: 'Mon, Wed, Fri (8 AM - 6 PM)',
                trainer: 'Lisa Brown',
                level: 'All Levels',
                duration: '50 minutes',
                features: [
                    'Mat work',
                    'Reformer sessions',
                    'Core strengthening',
                    'Posture improvement'
                ]
            }
        },
        {
            id: 'zumba',
            title: 'Zumba',
            category: 'cardio',
            image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b',
            description: 'Dance your way to fitness with our energetic Zumba classes.',
            details: {
                schedule: 'Tue, Thu, Sat (9 AM - 8 PM)',
                trainer: 'Maria Rodriguez',
                level: 'All Levels',
                duration: '45 minutes',
                features: [
                    'Latin dance moves',
                    'Cardio workout',
                    'Fun atmosphere',
                    'No experience needed'
                ]
            }
        }
    ];

    // Load programs
    function loadPrograms(filter = 'all') {
        const grid = $('#programGrid');
        grid.empty();

        programs.forEach(program => {
            if (filter === 'all' || program.category === filter) {
                const programHtml = `
                    <div class="col-md-6 col-lg-4 program-item" data-category="${program.category}">
                        <div class="card h-100">
                            <img src="${program.image}" class="card-img-top" alt="${program.title}" loading="lazy">
                            <div class="card-body">
                                <h5 class="card-title">${program.title}</h5>
                                <p class="card-text">${program.description}</p>
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${program.id}Modal">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                grid.append(programHtml);
            }
        });
    }

    // Create program modals
    function createModals() {
        const modalsContainer = $('#programModals');
        programs.forEach(program => {
            const modalHtml = `
                <div class="modal fade" id="${program.id}Modal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${program.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${program.image}" class="img-fluid rounded mb-3" alt="${program.title}">
                                <h6 class="fw-bold">Schedule:</h6>
                                <p>${program.details.schedule}</p>
                                <h6 class="fw-bold">Trainer:</h6>
                                <p>${program.details.trainer}</p>
                                <h6 class="fw-bold">Level:</h6>
                                <p>${program.details.level}</p>
                                <h6 class="fw-bold">Duration:</h6>
                                <p>${program.details.duration}</p>
                                <h6 class="fw-bold">Program Features:</h6>
                                <ul>
                                    ${program.details.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <a href="schedule.html" class="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modalsContainer.append(modalHtml);
        });
    }

    // Handle category filtering
    $('.program-filters button').on('click', function () {
        const filter = $(this).data('filter');

        // Update active button
        $('.program-filters button').removeClass('active');
        $(this).addClass('active');

        // Filter programs
        loadPrograms(filter);
    });

    // Handle search
    $('#programSearch').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        $('.program-item').each(function () {
            const title = $(this).find('.card-title').text().toLowerCase();
            const description = $(this).find('.card-text').text().toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Handle newsletter form submission
    $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert('Thank you for subscribing! We\'ll keep you updated with our latest news.');
        this.reset();
    });

    // Initialize
    loadPrograms();
    createModals();
});