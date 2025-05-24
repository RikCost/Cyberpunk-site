// NetLink - Cyberpunk 2020 Social Network
// Enhanced JavaScript for the fan project

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Initialize the application
function initApp() {
    // Set up navigation
    setupNavigation();
    
    // Load initial content (Home tab)
    loadHomeContent();
    
    // Add event listeners for post interactions
    setupPostInteractions();
    
    // Set up news tab functionality if on news page
    setupNewsTabs();
}

// Set up navigation between tabs
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default - allow actual navigation between pages
            
            // Update active tab styling
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Load Home tab content (personal feed)
function loadHomeContent() {
    console.log('Loading Home content...');
    
    // Check if we're on the home page
    const feedContainer = document.querySelector('.feed');
    if (!feedContainer) return;
    
    // Clear main content area except for post form
    const postForm = document.querySelector('.post-form');
    const postFormHTML = postForm ? postForm.outerHTML : '';
    
    // Generate feed HTML from mock data
    let feedHTML = postFormHTML;
    
    // Check if we have mock posts data
    if (typeof mockPosts !== 'undefined' && mockPosts.length > 0) {
        mockPosts.forEach(post => {
            feedHTML += createPostHTML(post);
        });
    } else {
        feedHTML += `
            <div class="post">
                <div class="post-header">
                    <img src="images/profiles/profile1.jpg" alt="V" class="post-avatar">
                    <div class="post-user">
                        <div class="post-username">V</div>
                        <div class="post-handle">@v_merc</div>
                    </div>
                    <div class="post-time">2 hours ago</div>
                </div>
                <div class="post-content">
                    Just took down a Maelstrom gang hideout in Watson. Found some sweet military-grade cyberware. Anyone know a good ripperdoc who won't ask questions? #NightCity #Maelstrom
                </div>
                <img src="images/posts/post1.jpg" alt="Post Image" class="post-image">
                <div class="post-meta">
                    <div class="post-meta-item">
                        <span class="meta-icon">❤️</span>
                        <span class="meta-count">42</span>
                    </div>
                    <div class="post-meta-item">
                        <span class="meta-icon">💬</span>
                        <span class="meta-count">7</span>
                    </div>
                    <div class="post-meta-item">
                        <span class="meta-icon">🔄</span>
                        <span class="meta-count">3</span>
                    </div>
                </div>
                <div class="post-tags">
                    <div class="post-tag">#NightCity</div>
                    <div class="post-tag">#Maelstrom</div>
                    <div class="post-tag">#Cyberware</div>
                </div>
                <div class="post-footer">
                    <button class="post-action">
                        <span class="action-icon">❤️</span>
                        <span class="action-text">Like</span>
                    </button>
                    <button class="post-action">
                        <span class="action-icon">💬</span>
                        <span class="action-text">Comment</span>
                    </button>
                    <button class="post-action">
                        <span class="action-icon">🔄</span>
                        <span class="action-text">Share</span>
                    </button>
                </div>
            </div>
            
            <div class="post">
                <div class="post-header">
                    <img src="images/profiles/profile5.jpg" alt="Johnny Silverhand" class="post-avatar">
                    <div class="post-user">
                        <div class="post-username">Johnny Silverhand</div>
                        <div class="post-handle">@chrome_rocker</div>
                    </div>
                    <div class="post-time">4 hours ago</div>
                </div>
                <div class="post-content">
                    Wake the fuck up, samurai. We have a city to burn. Arasaka will pay for what they've done. #CorporateScum #Resistance
                </div>
                <img src="images/posts/post2.jpg" alt="Post Image" class="post-image">
                <div class="post-meta">
                    <div class="post-meta-item">
                        <span class="meta-icon">❤️</span>
                        <span class="meta-count">187</span>
                    </div>
                    <div class="post-meta-item">
                        <span class="meta-icon">💬</span>
                        <span class="meta-count">23</span>
                    </div>
                    <div class="post-meta-item">
                        <span class="meta-icon">🔄</span>
                        <span class="meta-count">56</span>
                    </div>
                </div>
                <div class="post-tags">
                    <div class="post-tag">#CorporateScum</div>
                    <div class="post-tag">#Resistance</div>
                    <div class="post-tag">#Arasaka</div>
                </div>
                <div class="post-footer">
                    <button class="post-action liked">
                        <span class="action-icon">❤️</span>
                        <span class="action-text">Liked</span>
                    </button>
                    <button class="post-action">
                        <span class="action-icon">💬</span>
                        <span class="action-text">Comment</span>
                    </button>
                    <button class="post-action">
                        <span class="action-icon">🔄</span>
                        <span class="action-text">Share</span>
                    </button>
                </div>
            </div>
            
            <div class="post">
                <div class="post-header">
                    <img src="images/profiles/profile2.jpg" alt="Judy Alvarez" class="post-avatar">
                    <div class="post-user">
                        <div class="post-username">Judy Alvarez</div>
                        <div class="post-handle">@judy_tech</div>
                    </div>
                    <div class="post-time">Yesterday</div>
                </div>
                <div class="post-content">
                    Just finished a new BD edit. This one's special - full sensory immersion of skydiving over Night City at sunset. Exclusive preview at Lizzie's tonight. #BrainDance #Technology
                </div>
                <img src="images/posts/post3.jpg" alt="Post Image" class="post-image">
                <div class="post-meta">
                    <div class="post-meta-item">
                        <span class="meta-icon">❤️</span>
                        <span class="meta-count">76</span>
                    </div>
                    <div class="post-meta-item">
                        <span class="meta-icon">💬</span>
                        <span class="meta-count">12</span>
                    </div>
                    <div class="post-meta-item">
                        <span class="meta-icon">🔄</span>
                        <span class="meta-count">5</span>
                    </div>
                </div>
                <div class="post-tags">
                    <div class="post-tag">#BrainDance</div>
                    <div class="post-tag">#Technology</div>
                    <div class="post-tag">#Lizzies</div>
                </div>
                <div class="post-footer">
                    <button class="post-action">
                        <span class="action-icon">❤️</span>
                        <span class="action-text">Like</span>
                    </button>
                    <button class="post-action">
                        <span class="action-icon">💬</span>
                        <span class="action-text">Comment</span>
                    </button>
                    <button class="post-action">
                        <span class="action-icon">🔄</span>
                        <span class="action-text">Share</span>
                    </button>
                </div>
            </div>
        `;
    }
    
    // Update the feed container with our content
    if (feedContainer) {
        feedContainer.innerHTML = feedHTML;
    }
}

// Create HTML for a post
function createPostHTML(post) {
    return `
        <div class="post" data-post-id="${post.id}">
            <div class="post-header">
                <img src="${post.user.profile_image}" alt="${post.user.username}" class="post-avatar">
                <div class="post-user">
                    <div class="post-username">${post.user.username}</div>
                    <div class="post-handle">@${post.user.handle}</div>
                </div>
                <div class="post-time">${formatTimestamp(post.created_at)}</div>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            ${post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : ''}
            <div class="post-meta">
                <div class="post-meta-item">
                    <span class="meta-icon">❤️</span>
                    <span class="meta-count">${post.likes_count}</span>
                </div>
                <div class="post-meta-item">
                    <span class="meta-icon">💬</span>
                    <span class="meta-count">${post.comments_count}</span>
                </div>
                <div class="post-meta-item">
                    <span class="meta-icon">🔄</span>
                    <span class="meta-count">${post.shares_count}</span>
                </div>
            </div>
            ${post.tags && post.tags.length > 0 ? `
                <div class="post-tags">
                    ${post.tags.map(tag => `<div class="post-tag">#${tag}</div>`).join('')}
                </div>
            ` : ''}
            <div class="post-footer">
                <button class="post-action ${post.is_liked ? 'liked' : ''}">
                    <span class="action-icon">❤️</span>
                    <span class="action-text">${post.is_liked ? 'Liked' : 'Like'}</span>
                </button>
                <button class="post-action">
                    <span class="action-icon">💬</span>
                    <span class="action-text">Comment</span>
                </button>
                <button class="post-action">
                    <span class="action-icon">🔄</span>
                    <span class="action-text">Share</span>
                </button>
            </div>
        </div>
    `;
}

// Format timestamp for display
function formatTimestamp(timestamp) {
    if (!timestamp) return 'Just now';
    
    // If it's a string, convert to Date object
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    const now = new Date();
    
    // Calculate time difference in milliseconds
    const diff = now - date;
    
    // Convert to seconds
    const seconds = Math.floor(diff / 1000);
    
    // Less than a minute
    if (seconds < 60) {
        return 'Just now';
    }
    
    // Less than an hour
    if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    
    // Less than a day
    if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    
    // Less than a week
    if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        if (days === 1) return 'Yesterday';
        return `${days} days ago`;
    }
    
    // Format as date
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Set up post interactions
function setupPostInteractions() {
    // Like button functionality
    document.querySelectorAll('.post-action').forEach(button => {
        if (button.querySelector('.action-text').textContent.includes('Like')) {
            button.addEventListener('click', function() {
                const isLiked = this.classList.contains('liked');
                const countElement = this.closest('.post').querySelector('.post-meta-item:first-child .meta-count');
                let count = parseInt(countElement.textContent);
                
                if (isLiked) {
                    this.classList.remove('liked');
                    this.querySelector('.action-text').textContent = 'Like';
                    count--;
                } else {
                    this.classList.add('liked');
                    this.querySelector('.action-text').textContent = 'Liked';
                    count++;
                }
                
                countElement.textContent = count;
            });
        }
    });
}

// Set up news tabs functionality
function setupNewsTabs() {
    // Check if we're on the news page
    const newsTabs = document.querySelectorAll('.news-tab');
    if (newsTabs.length === 0) return;
    
    // Add Technology and Entertainment content if not already present
    addTechAndEntertainmentContent();
    
    // Add tab switching functionality
    newsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            newsTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            const tabName = this.getAttribute('data-tab');
            document.querySelectorAll('.news-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelector(`.${tabName}-section`).classList.add('active');
        });
    });
    
    // Read More button functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const articleId = this.getAttribute('data-article');
            document.getElementById(`${articleId}-article`).classList.add('active');
        });
    });
    
    // Close full article
    const closeButtons = document.querySelectorAll('.full-article-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.full-article').classList.remove('active');
        });
    });
    
    // Close full article when clicking outside
    document.querySelectorAll('.full-article').forEach(article => {
        article.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
}

// Add Technology and Entertainment content to the news page
function addTechAndEntertainmentContent() {
    // Check if we're on the news page and if the tech section exists
    const techSection = document.querySelector('.tech-section');
    const entertainmentSection = document.querySelector('.entertainment-section');
    
    if (!techSection || !entertainmentSection) return;
    
    // Check if we have the news articles data
    if (typeof techNewsArticles === 'undefined' || typeof entertainmentNewsArticles === 'undefined') {
        console.error('News articles data not found');
        return;
    }
    
    // Add Technology content
    let techHTML = `
        <div class="news-content">
            <div class="news-main">
    `;
    
    // Add tech articles
    techNewsArticles.forEach(article => {
        techHTML += `
            <div class="news-article">
                <div class="news-article-header">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="news-article-overlay">
                        <div class="news-article-category tech">Technology</div>
                        <h3 class="news-article-title">${article.title}</h3>
                        <div class="news-article-meta">
                            <div class="news-article-source">${article.source}</div>
                            <div class="news-article-date">${article.date}</div>
                        </div>
                    </div>
                </div>
                <div class="news-article-body">
                    <div class="news-article-summary">
                        ${article.summary}
                    </div>
                    <div class="news-article-footer">
                        <div class="news-article-tags">
                            ${article.tags.map(tag => `<div class="news-article-tag">${tag}</div>`).join('')}
                        </div>
                        <div class="news-article-actions">
                            <button class="news-article-action read-more" data-article="tech-${article.id}">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    techHTML += `
            </div>
            
            <div class="news-sidebar">
                <!-- Tech Trends -->
                <div class="news-sidebar-section">
                    <h3 class="news-sidebar-title">Tech Trends</h3>
                    <div class="trending-news-list">
                        <div class="trending-news-item">
                            <img src="images/posts/post3.jpg" alt="Neural Implants" class="trending-news-image">
                            <div class="trending-news-content">
                                <div class="trending-news-title">Neural Implants Market Expected to Grow 300% by 2025</div>
                                <div class="trending-news-meta">
                                    <div>Market Analysis</div>
                                    <div>3 days ago</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <img src="images/posts/post1.jpg" alt="Netrunning" class="trending-news-image">
                            <div class="trending-news-content">
                                <div class="trending-news-title">Netrunning: The Evolution of Cybersecurity in 2020</div>
                                <div class="trending-news-meta">
                                    <div>Feature</div>
                                    <div>1 week ago</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <img src="images/posts/post2.jpg" alt="Cyberware" class="trending-news-image">
                            <div class="trending-news-content">
                                <div class="trending-news-title">Top 10 Cyberware Innovations of 2020</div>
                                <div class="trending-news-meta">
                                    <div>List</div>
                                    <div>2 weeks ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Advertisement -->
                <div class="advertisement">
                    <img src="images/posts/post1.jpg" alt="Advertisement">
                </div>
                
                <!-- Tech Companies Stock -->
                <div class="news-sidebar-section">
                    <h3 class="news-sidebar-title">Tech Stocks</h3>
                    <div class="stock-market">
                        <div class="stock-list">
                            <div class="stock-item">
                                <div class="stock-info">
                                    <div class="stock-name">Biotechnica</div>
                                    <div class="stock-symbol">BIO</div>
                                </div>
                                <div class="stock-data">
                                    <div class="stock-price">¥1,856.42</div>
                                    <div class="stock-change up">+5.2%</div>
                                </div>
                            </div>
                            <div class="stock-item">
                                <div class="stock-info">
                                    <div class="stock-name">Kiroshi Optics</div>
                                    <div class="stock-symbol">KIRO</div>
                                </div>
                                <div class="stock-data">
                                    <div class="stock-price">¥987.30</div>
                                    <div class="stock-change up">+2.8%</div>
                                </div>
                            </div>
                            <div class="stock-item">
                                <div class="stock-info">
                                    <div class="stock-name">Zetatech</div>
                                    <div class="stock-symbol">ZETA</div>
                                </div>
                                <div class="stock-data">
                                    <div class="stock-price">¥432.15</div>
                                    <div class="stock-change down">-1.3%</div>
                                </div>
                            </div>
                            <div class="stock-item">
                                <div class="stock-info">
                                    <div class="stock-name">Netwatch</div>
                                    <div class="stock-symbol">NET</div>
                                </div>
                                <div class="stock-data">
                                    <div class="stock-price">¥1,245.88</div>
                                    <div class="stock-change up">+0.7%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add Entertainment content
    let entertainmentHTML = `
        <div class="news-content">
            <div class="news-main">
    `;
    
    // Add entertainment articles
    entertainmentNewsArticles.forEach(article => {
        entertainmentHTML += `
            <div class="news-article">
                <div class="news-article-header">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="news-article-overlay">
                        <div class="news-article-category entertainment">Entertainment</div>
                        <h3 class="news-article-title">${article.title}</h3>
                        <div class="news-article-meta">
                            <div class="news-article-source">${article.source}</div>
                            <div class="news-article-date">${article.date}</div>
                        </div>
                    </div>
                </div>
                <div class="news-article-body">
                    <div class="news-article-summary">
                        ${article.summary}
                    </div>
                    <div class="news-article-footer">
                        <div class="news-article-tags">
                            ${article.tags.map(tag => `<div class="news-article-tag">${tag}</div>`).join('')}
                        </div>
                        <div class="news-article-actions">
                            <button class="news-article-action read-more" data-article="entertainment-${article.id}">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    entertainmentHTML += `
            </div>
            
            <div class="news-sidebar">
                <!-- Upcoming Events -->
                <div class="news-sidebar-section">
                    <h3 class="news-sidebar-title">Upcoming Events</h3>
                    <div class="trending-news-list">
                        <div class="trending-news-item">
                            <img src="images/posts/post2.jpg" alt="Samurai Concert" class="trending-news-image">
                            <div class="trending-news-content">
                                <div class="trending-news-title">Samurai Reunion Concert - Red Dirt</div>
                                <div class="trending-news-meta">
                                    <div>Concert</div>
                                    <div>June 20, 2020</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <img src="images/posts/post3.jpg" alt="BD Festival" class="trending-news-image">
                            <div class="trending-news-content">
                                <div class="trending-news-title">Night City BD Festival - Various Venues</div>
                                <div class="trending-news-meta">
                                    <div>Festival</div>
                                    <div>July 5-12, 2020</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <img src="images/posts/post1.jpg" alt="Chrome Clash" class="trending-news-image">
                            <div class="trending-news-content">
                                <div class="trending-news-title">Chrome Clash Tournament Finals - Night City Arena</div>
                                <div class="trending-news-meta">
                                    <div>Esports</div>
                                    <div>August 15, 2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Advertisement -->
                <div class="advertisement">
                    <img src="images/posts/post2.jpg" alt="Advertisement">
                </div>
                
                <!-- Top Braindances -->
                <div class="news-sidebar-section">
                    <h3 class="news-sidebar-title">Top Braindances</h3>
                    <div class="trending-news-list">
                        <div class="trending-news-item">
                            <div class="trending-news-content">
                                <div class="trending-news-title">1. "Chrome Dreams" by US</div>
                                <div class="trending-news-meta">
                                    <div>Psychological Horror</div>
                                    <div>★★★★★</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <div class="trending-news-content">
                                <div class="trending-news-title">2. "Night City Sunset" by Judy Alvarez</div>
                                <div class="trending-news-meta">
                                    <div>Experience</div>
                                    <div>★★★★☆</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <div class="trending-news-content">
                                <div class="trending-news-title">3. "Samurai: Live at the Red Dirt 2008" (Remastered)</div>
                                <div class="trending-news-meta">
                                    <div>Concert</div>
                                    <div>★★★★☆</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <div class="trending-news-content">
                                <div class="trending-news-title">4. "Orbital Skydiving" by MaxTac</div>
                                <div class="trending-news-meta">
                                    <div>Extreme Sports</div>
                                    <div>★★★★☆</div>
                                </div>
                            </div>
                        </div>
                        <div class="trending-news-item">
                            <div class="trending-news-content">
                                <div class="trending-news-title">5. "Luxury Suite" by Clouds</div>
                                <div class="trending-news-meta">
                                    <div>Adult</div>
                                    <div>★★★★☆</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Update the sections with our content
    techSection.innerHTML = techHTML;
    entertainmentSection.innerHTML = entertainmentHTML;
    
    // Add full article views for tech articles
    let techArticlesHTML = '';
    techNewsArticles.forEach(article => {
        techArticlesHTML += `
            <div class="full-article" id="tech-${article.id}-article">
                <div class="full-article-container">
                    <button class="full-article-close">×</button>
                    <div class="full-article-header">
                        <img src="${article.image}" alt="${article.title}">
                        <div class="full-article-overlay">
                            <div class="full-article-category tech">Technology</div>
                            <h2 class="full-article-title">${article.title}</h2>
                            <div class="full-article-meta">
                                <div class="full-article-source">${article.source}</div>
                                <div class="full-article-date">${article.date}</div>
                            </div>
                        </div>
                    </div>
                    <div class="full-article-body">
                        <div class="full-article-content">
                            ${article.content}
                        </div>
                        <div class="full-article-footer">
                            <div class="full-article-tags">
                                ${article.tags.map(tag => `<div class="full-article-tag">${tag}</div>`).join('')}
                            </div>
                            <div class="full-article-actions">
                                <button class="full-article-action">Share</button>
                                <button class="full-article-action">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Add full article views for entertainment articles
    let entertainmentArticlesHTML = '';
    entertainmentNewsArticles.forEach(article => {
        entertainmentArticlesHTML += `
            <div class="full-article" id="entertainment-${article.id}-article">
                <div class="full-article-container">
                    <button class="full-article-close">×</button>
                    <div class="full-article-header">
                        <img src="${article.image}" alt="${article.title}">
                        <div class="full-article-overlay">
                            <div class="full-article-category entertainment">Entertainment</div>
                            <h2 class="full-article-title">${article.title}</h2>
                            <div class="full-article-meta">
                                <div class="full-article-source">${article.source}</div>
                                <div class="full-article-date">${article.date}</div>
                            </div>
                        </div>
                    </div>
                    <div class="full-article-body">
                        <div class="full-article-content">
                            ${article.content}
                        </div>
                        <div class="full-article-footer">
                            <div class="full-article-tags">
                                ${article.tags.map(tag => `<div class="full-article-tag">${tag}</div>`).join('')}
                            </div>
                            <div class="full-article-actions">
                                <button class="full-article-action">Share</button>
                                <button class="full-article-action">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Add the full article views to the page
    document.body.insertAdjacentHTML('beforeend', techArticlesHTML + entertainmentArticlesHTML);
}
