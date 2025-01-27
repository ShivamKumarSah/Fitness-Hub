$(document).ready(function () {
    // Schedule Data
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = [
        '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
    ];
    const classes = [
        // Monday Classes
        {
            id: 1,
            name: 'Strength Training',
            trainer: 'Ravi Dey',
            day: 'Monday',
            time: '06:00 AM',
            duration: '60 min',
            capacity: 15,
            available: 8,
            level: 'All Levels',
            type: 'strength'
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
            level: 'Intermediate',
            type: 'cardio'
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
            level: 'All Levels',
            type: 'yoga'
        },
        // Tuesday Classes
        {
            id: 4,
            name: 'Pilates',
            trainer: 'Shreya Dutta',
            day: 'Tuesday',
            time: '07:00 AM',
            duration: '50 min',
            capacity: 10,
            available: 6,
            level: 'All Levels',
            type: 'pilates'
        },
        {
            id: 5,
            name: 'CrossFit',
            trainer: 'Ravi Dey',
            day: 'Tuesday',
            time: '09:00 AM',
            duration: '60 min',
            capacity: 15,
            available: 7,
            level: 'Advanced',
            type: 'strength'
        },
        // Wednesday Classes
        {
            id: 6,
            name: 'Zumba',
            trainer: 'Ishita Roy',
            day: 'Wednesday',
            time: '06:00 AM',
            duration: '45 min',
            capacity: 25,
            available: 12,
            level: 'All Levels',
            type: 'cardio'
        },
        {
            id: 7,
            name: 'Strength Training',
            trainer: 'Ravi Dey',
            day: 'Wednesday',
            time: '08:00 AM',
            duration: '60 min',
            capacity: 15,
            available: 5,
            level: 'Intermediate',
            type: 'strength'
        },
        // Thursday Classes
        {
            id: 8,
            name: 'Yoga',
            trainer: 'Shreya Dutta',
            day: 'Thursday',
            time: '07:00 AM',
            duration: '60 min',
            capacity: 12,
            available: 8,
            level: 'All Levels',
            type: 'yoga'
        },
        {
            id: 9,
            name: 'HIIT',
            trainer: 'Ishita Roy',
            day: 'Thursday',
            time: '05:00 PM',
            duration: '45 min',
            capacity: 20,
            available: 10,
            level: 'Intermediate',
            type: 'cardio'
        },
        // Friday Classes
        {
            id: 10,
            name: 'CrossFit',
            trainer: 'Ravi Dey',
            day: 'Friday',
            time: '06:00 AM',
            duration: '60 min',
            capacity: 15,
            available: 6,
            level: 'Advanced',
            type: 'strength'
        },
        {
            id: 11,
            name: 'Pilates',
            trainer: 'Shreya Dutta',
            day: 'Friday',
            time: '09:00 AM',
            duration: '50 min',
            capacity: 10,
            available: 4,
            level: 'All Levels',
            type: 'pilates'
        },
        // Saturday Classes
        {
            id: 12,
            name: 'Zumba',
            trainer: 'Ishita Roy',
            day: 'Saturday',
            time: '08:00 AM',
            duration: '45 min',
            capacity: 25,
            available: 15,
            level: 'All Levels',
            type: 'cardio'
        },
        {
            id: 13,
            name: 'Yoga',
            trainer: 'Shreya Dutta',
            day: 'Saturday',
            time: '10:00 AM',
            duration: '60 min',
            capacity: 12,
            available: 7,
            level: 'All Levels',
            type: 'yoga'
        },
        // Sunday Classes
        {
            id: 14,
            name: 'Strength Training',
            trainer: 'Ravi Dey',
            day: 'Sunday',
            time: '09:00 AM',
            duration: '60 min',
            capacity: 15,
            available: 9,
            level: 'All Levels',
            type: 'strength'
        },
        {
            id: 15,
            name: 'HIIT',
            trainer: 'Ishita Roy',
            day: 'Sunday',
            time: '11:00 AM',
            duration: '45 min',
            capacity: 20,
            available: 12,
            level: 'Intermediate',
            type: 'cardio'
        }
    ];

    // Initialize schedule
    function initializeSchedule() {
        // Load days filter
        const dayFilter = $('#dayFilter');
        dayFilter.empty();
        dayFilter.append('<option value="all">All Days</option>');
        weekDays.forEach(day => {
            dayFilter.append(`<option value="${day}">${day}</option>`);
        });

        // Load table header
        const tableHeader = $('.schedule-table thead tr');
        tableHeader.empty();
        tableHeader.append('<th>Time</th>');
        weekDays.forEach(day => {
            tableHeader.append(`<th>${day}</th>`);
        });

        // Load time slots and classes
        loadScheduleTable();
    }

    // Load schedule table based on filters
    function loadScheduleTable(dayFilter = 'all', classFilter = 'all', trainerFilter = 'all') {
        const tableBody = $('.schedule-table tbody');
        tableBody.empty();

        timeSlots.forEach(time => {
            let row = `<tr><td class="time-slot">${time}</td>`;
            weekDays.forEach(day => {
                const classItems = classes.filter(c => {
                    let matches = c.day === day && c.time === time;
                    if (dayFilter !== 'all') matches = matches && c.day === dayFilter;
                    if (classFilter !== 'all') matches = matches && c.type === classFilter;
                    if (trainerFilter !== 'all') matches = matches && c.trainer === trainerFilter;
                    return matches;
                });

                if (classItems.length > 0) {
                    const classItem = classItems[0];
                    row += `
                        <td class="class-slot has-class">
                            <div class="class-info" data-bs-toggle="modal" data-bs-target="#classModal${classItem.id}"
                                 data-day="${classItem.day}" data-class-type="${classItem.type}" data-trainer="${classItem.trainer}">
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

        // Recreate booking modals
        createBookingModals();
    }

    // Create booking modals
    function createBookingModals() {
        const modalsContainer = $('#bookingModals');
        modalsContainer.empty();
        
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
            filter.on('change', function() {
                const day = dayFilter.val();
                const classType = classFilter.val();
                const trainer = trainerFilter.val();
                loadScheduleTable(day, classType, trainer);
            });
        });
    }

    // Handle booking form submissions
    function handleBookings() {
        $(document).on('submit', '.booking-form', function(e) {
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
    $('.newsletter-form').on('submit', function(e) {
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