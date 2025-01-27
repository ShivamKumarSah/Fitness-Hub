$(document).ready(function () {
    // Schedule Data
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = [
        '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
    ];
    const classes = [
        {
            id: 1,
            name: 'Strength Training',
            trainer: 'Ravi Dey',
            day: 'Monday',
            time: '06:00 AM',
            duration: '60 min',
            capacity: 15,
            available: 8,
            level: 'All Levels'
        },
        {
            id: 2,
            name: 'HIIT',
            trainer: 'Ishita Roy',
            day: 'Monday',
            time: '08:00 AM',
            duration: '45 min',
            capacity: 20,
            available: 5,
            level: 'Intermediate'
        },
        {
            id: 3,
            name: 'Yoga',
            trainer: 'Shreya Dutta',
            day: 'Monday',
            time: '10:00 AM',
            duration: '60 min',
            capacity: 12,
            available: 4,
            level: 'All Levels'
        }
        // Add more classes as needed
    ];

    // Initialize schedule
    function initializeSchedule() {
        // Load days filter
        const dayFilter = $('#dayFilter');
        weekDays.forEach(day => {
            dayFilter.append(`<option value="${day}">${day}</option>`);
        });

        // Load table header
        const tableHeader = $('.schedule-table thead tr');
        weekDays.forEach(day => {
            tableHeader.append(`<th>${day}</th>`);
        });

        // Load time slots and classes
        const tableBody = $('.schedule-table tbody');
        timeSlots.forEach(time => {
            let row = `<tr><td class="time-slot">${time}</td>`;
            weekDays.forEach(day => {
                const classItem = classes.find(c => c.day === day && c.time === time);
                if (classItem) {
                    row += `
                        <td class="class-slot has-class">
                            <div class="class-info" data-bs-toggle="modal" data-bs-target="#classModal${classItem.id}">
                                <h6 class="class-name mb-1">${classItem.name}</h6>
                                <p class="trainer-name mb-1">${classItem.trainer}</p>
                                <span class="availability">${classItem.available} spots left</span>
                            </div>
                        </td>
                    `;
                } else {
                    row += '<td class="class-slot"></td>';
                }
            });
            row += '</tr>';
            tableBody.append(row);
        });

        // Create booking modals
        createBookingModals();
    }

    // Create booking modals
    function createBookingModals() {
        const modalsContainer = $('#bookingModals');
        classes.forEach(classItem => {
            const modalHtml = `
                <div class="modal fade" id="classModal${classItem.id}" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${classItem.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <div class="class-details mb-4">
                                    <p><strong>Trainer:</strong> ${classItem.trainer}</p>
                                    <p><strong>Day:</strong> ${classItem.day}</p>
                                    <p><strong>Time:</strong> ${classItem.time}</p>
                                    <p><strong>Duration:</strong> ${classItem.duration}</p>
                                    <p><strong>Level:</strong> ${classItem.level}</p>
                                    <p><strong>Availability:</strong> ${classItem.available} spots left</p>
                                </div>

                                <form id="bookingForm${classItem.id}" class="booking-form">
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Phone</label>
                                        <input type="tel" class="form-control" required>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" form="bookingForm${classItem.id}" class="btn btn-primary">Book Class</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modalsContainer.append(modalHtml);
        });
    }

    // Handle filters
    function handleFilters() {
        const dayFilter = $('#dayFilter');
        const classFilter = $('#classFilter');
        const trainerFilter = $('#trainerFilter');

        const filters = [dayFilter, classFilter, trainerFilter];
        filters.forEach(filter => {
            filter.on('change', function () {
                const day = dayFilter.val();
                const classType = classFilter.val();
                const trainer = trainerFilter.val();

                $('.class-slot').each(function () {
                    const classInfo = $(this).find('.class-info');
                    if (classInfo.length) {
                        let show = true;

                        if (day !== 'all' && classInfo.data('day') !== day) show = false;
                        if (classType !== 'all' && !classInfo.data('class-type').includes(classType)) show = false;
                        if (trainer !== 'all' && classInfo.data('trainer') !== trainer) show = false;

                        $(this).toggle(show);
                    }
                });
            });
        });
    }

    // Handle booking form submissions
    function handleBookings() {
        $('.booking-form').on('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            // Show success message
            const modal = $(this).closest('.modal');
            const modalBody = modal.find('.modal-body');
            modalBody.html(`
                <div class="text-center">
                    <i class="bi bi-check-circle text-success" style="font-size: 3rem;"></i>
                    <h4 class="mt-3">Booking Confirmed!</h4>
                    <p>Thank you for booking. You will receive a confirmation email shortly.</p>
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
    initializeSchedule();
    handleFilters();
    handleBookings();
});