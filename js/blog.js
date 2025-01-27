$(document).ready(function () {
    // Blog Posts Data
    const blogPosts = [
        {
            id: 1,
            title: '10 Essential Tips for Building Muscle',
            category: 'Workouts',
            image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            excerpt: 'Discover the key principles of muscle building, from proper nutrition to workout techniques that maximize your gains.',
            author: 'Ravi Dey',
            date: '2024-03-15',
            readTime: '5 min read',
            content: `
                <p>Building muscle effectively requires a combination of proper training, nutrition, and recovery. Here are the essential tips to help you achieve your muscle-building goals:</p>
                <h3>1. Progressive Overload</h3>
                <p>Gradually increase the weight, frequency, or number of repetitions in your strength training routine.</p>
                <h3>2. Proper Nutrition</h3>
                <p>Ensure you're eating enough protein and calories to support muscle growth.</p>
                <h3>3. Adequate Rest</h3>
                <p>Allow your muscles time to recover between workouts.</p>
            `
        },
        {
            id: 2,
            title: 'The Ultimate Guide to HIIT Workouts',
            category: 'Cardio',
            image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            excerpt: 'Learn how to maximize your fat burn and improve cardiovascular fitness with high-intensity interval training.',
            author: 'Ishita Roy',
            date: '2024-03-12',
            readTime: '4 min read',
            content: `
                <p>High-Intensity Interval Training (HIIT) is one of the most effective ways to burn fat and improve cardiovascular fitness.</p>
                <h3>Benefits of HIIT</h3>
                <ul>
                    <li>Increased calorie burn</li>
                    <li>Improved cardiovascular health</li>
                    <li>Time-efficient workouts</li>
                </ul>
            `
        },
        {
            id: 3,
            title: 'Nutrition Tips for Optimal Performance',
            category: 'Nutrition',
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            excerpt: 'Fuel your workouts and recovery with these essential nutrition tips for athletes and fitness enthusiasts.',
            author: 'Shreya Dutta',
            date: '2024-03-10',
            readTime: '6 min read',
            content: `
                <p>Proper nutrition is crucial for achieving your fitness goals and maintaining optimal performance during workouts.</p>
                <h3>Key Nutritional Components</h3>
                <ul>
                    <li>Proteins for muscle repair and growth</li>
                    <li>Carbohydrates for energy</li>
                    <li>Healthy fats for hormone production</li>
                </ul>
            `
        },
        {
            id: 4,
            title: 'Mindfulness and Exercise: The Perfect Combination',
            category: 'Wellness',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            excerpt: 'Discover how combining mindfulness with your workout routine can enhance both mental and physical well-being.',
            author: 'Mike Wilson',
            date: '2024-03-08',
            readTime: '4 min read',
            content: `
                <p>Incorporating mindfulness into your fitness routine can significantly improve your overall well-being and workout results.</p>
                <h3>Benefits of Mindful Exercise</h3>
                <ul>
                    <li>Better mind-muscle connection</li>
                    <li>Reduced stress and anxiety</li>
                    <li>Improved focus and performance</li>
                </ul>
            `
        }
    ];

    const categories = ['All', 'Workouts', 'Nutrition', 'Cardio', 'Wellness'];

    // Load blog posts
    function loadBlogPosts(filter = 'all') {
        const postsContainer = $('.blog-posts');
        postsContainer.empty();

        blogPosts.forEach(post => {
            if (filter === 'all' || post.category.toLowerCase() === filter.toLowerCase()) {
                const postHtml = `
                    <div class="card blog-card mb-4" data-category="${post.category.toLowerCase()}">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${post.image}" class="img-fluid rounded-start blog-image" alt="${post.title}" loading="lazy">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="badge bg-primary">${post.category}</span>
                                        <small class="text-muted">${post.readTime}</small>
                                    </div>
                                    <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text">${post.excerpt}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="author">
                                            <small class="text-muted">By ${post.author}</small>
                                        </div>
                                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postModal${post.id}">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                postsContainer.append(postHtml);
            }
        });
    }

    // Load categories
    function loadCategories() {
        const categoryContainer = $('#categoryFilters');
        categories.forEach(category => {
            const buttonHtml = `
                <button class="btn btn-outline-primary category-filter ${category === 'All' ? 'active' : ''}" 
                        data-category="${category.toLowerCase()}">
                    ${category}
                </button>
            `;
            categoryContainer.append(buttonHtml);
        });
    }

    // Create blog post modals
    function createModals() {
        const modalsContainer = $('#blogModals');
        blogPosts.forEach(post => {
            const modalHtml = `
                <div class="modal fade" id="postModal${post.id}" tabindex="-1">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${post.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${post.image}" class="img-fluid rounded mb-4" alt="${post.title}">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <span class="badge bg-primary me-2">${post.category}</span>
                                        <small class="text-muted">By ${post.author} | ${post.date}</small>
                                    </div>
                                    <small class="text-muted">${post.readTime}</small>
                                </div>
                                <div class="blog-content">
                                    ${post.content}
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary share-btn">
                                    <i class="bi bi-share me-2"></i>Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modalsContainer.append(modalHtml);
        });
    }

    // Handle category filtering
    $(document).on('click', '.category-filter', function () {
        const category = $(this).data('category');

        // Update active button
        $('.category-filter').removeClass('active');
        $(this).addClass('active');

        // Filter posts
        loadBlogPosts(category);
    });

    // Handle search
    $('#blogSearch').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        $('.blog-card').each(function () {
            const title = $(this).find('.card-title').text().toLowerCase();
            const excerpt = $(this).find('.card-text').text().toLowerCase();

            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Handle share button
    $(document).on('click', '.share-btn', function () {
        const postTitle = $(this).closest('.modal').find('.modal-title').text();
        const shareUrl = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: postTitle,
                url: shareUrl
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = shareUrl;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            alert('Link copied to clipboard!');
        }
    });

    // Handle newsletter form submission
    $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert('Thank you for subscribing! You will receive our latest updates.');
        this.reset();
    });

    // Initialize
    loadCategories();
    loadBlogPosts();
    createModals();
});