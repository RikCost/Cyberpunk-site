// NetLink - Cyberpunk 2020 Social Network
// API Integration for dynamic content

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Global variables
let currentTab = 'home'; // Default tab
let currentUser = null;
let posts = [];
let messages = [];
let authToken = null;

// Initialize the application
function initApp() {
    // Check for existing auth token in localStorage
    authToken = localStorage.getItem('netlink_auth_token');
    
    // Set up navigation
    setupNavigation();
    
    // Load initial content (Home tab)
    loadHomeContent();
    
    // Add event listeners for post interactions
    setupPostInteractions();
    
    // If no auth token, simulate user login (in a real app, redirect to login)
    if (!authToken) {
        simulateUserLogin();
    } else {
        // Fetch current user data
        fetchCurrentUser();
    }
}

// Set up navigation between tabs
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab name from the link id
            const tabName = this.id.split('-')[0];
            
            // Don't reload if we're already on this tab
            if (tabName === currentTab) return;
            
            // Update current tab
            currentTab = tabName;
            
            // Update active tab styling
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Load content based on selected tab
            switch(tabName) {
                case 'home':
                    loadHomeContent();
                    break;
                case 'explore':
                    loadExploreContent();
                    break;
                case 'messages':
                    loadMessagesContent();
                    break;
                case 'profile':
                    loadProfileContent();
                    break;
                default:
                    loadHomeContent();
            }
        });
    });
    
    // Add active class to home tab initially
    document.getElementById('home-tab').classList.add('active');
}

// Load Home tab content (personal feed)
function loadHomeContent() {
    console.log('Loading Home content...');
    
    // Clear main content area
    const feedContainer = document.querySelector('.feed');
    
    // Keep the post form at the top
    const postForm = document.querySelector('.post-form');
    const postFormHTML = postForm ? postForm.outerHTML : '';
    
    // Show loading state
    feedContainer.innerHTML = postFormHTML + '<div class="loading">Loading your feed...</div>';
    
    // Fetch personal feed data from API
    fetchFromAPI('/api/feed/personal')
        .then(feedData => {
            // Update posts global variable
            posts = feedData.posts || [];
            
            // Render the feed
            let feedHTML = postFormHTML;
            
            if (posts.length === 0) {
                feedHTML += `
                    <div class="empty-posts">
                        <p>Your feed is empty. Follow some users to see their posts here!</p>
                    </div>
                `;
            } else {
                posts.forEach(post => {
                    feedHTML += createPostHTML(post);
                });
            }
            
            feedContainer.innerHTML = feedHTML;
            
            // Re-attach event listeners to new content
            setupPostInteractions();
        })
        .catch(error => {
            console.error('Error loading home content:', error);
            feedContainer.innerHTML = postFormHTML + '<div class="error-message">Error loading feed. Please try again.</div>';
            
            // If unauthorized, simulate login
            if (error.status === 401) {
                simulateUserLogin();
            }
        });
}

// Load Explore tab content (global/trending feed)
function loadExploreContent() {
    console.log('Loading Explore content...');
    
    // Clear main content area
    const feedContainer = document.querySelector('.feed');
    
    // Show loading state
    feedContainer.innerHTML = '<div class="loading">Loading explore content...</div>';
    
    // Fetch trending and global feed data from API
    Promise.all([
        fetchFromAPI('/api/feed/trending'),
        fetchFromAPI('/api/feed/global')
    ])
        .then(([trendingData, globalData]) => {
            // Update posts global variable
            const trendingPosts = trendingData.posts || [];
            const globalPosts = globalData.posts || [];
            
            // Render the explore page
            let exploreHTML = `
                <div class="explore-header">
                    <h2 class="section-title">Explore Night City</h2>
                    <div class="explore-tabs">
                        <button class="explore-tab active" data-tab="trending">Trending</button>
                        <button class="explore-tab" data-tab="global">Global Feed</button>
                    </div>
                </div>
                
                <div class="explore-content">
                    <div class="explore-section trending-section active">
                        <h3>Trending in Night City</h3>
                        <div class="posts-container">
            `;
            
            // Add trending posts
            if (trendingPosts.length === 0) {
                exploreHTML += `
                    <div class="empty-posts">
                        <p>No trending posts available right now.</p>
                    </div>
                `;
            } else {
                trendingPosts.forEach(post => {
                    exploreHTML += createPostHTML(post);
                });
            }
            
            exploreHTML += `
                        </div>
                    </div>
                    
                    <div class="explore-section global-section">
                        <h3>Global Feed</h3>
                        <div class="posts-container">
            `;
            
            // Add global posts
            if (globalPosts.length === 0) {
                exploreHTML += `
                    <div class="empty-posts">
                        <p>No posts available right now.</p>
                    </div>
                `;
            } else {
                globalPosts.forEach(post => {
                    exploreHTML += createPostHTML(post);
                });
            }
            
            exploreHTML += `
                        </div>
                    </div>
                </div>
            `;
            
            feedContainer.innerHTML = exploreHTML;
            
            // Add event listeners for explore tabs
            document.querySelectorAll('.explore-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    // Update active tab
                    document.querySelectorAll('.explore-tab').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding section
                    const tabName = this.getAttribute('data-tab');
                    document.querySelectorAll('.explore-section').forEach(section => {
                        section.classList.remove('active');
                    });
                    document.querySelector(`.${tabName}-section`).classList.add('active');
                });
            });
            
            // Re-attach event listeners to new content
            setupPostInteractions();
        })
        .catch(error => {
            console.error('Error loading explore content:', error);
            feedContainer.innerHTML = '<div class="error-message">Error loading explore content. Please try again.</div>';
        });
}

// Load Messages tab content
function loadMessagesContent() {
    console.log('Loading Messages content...');
    
    // Clear main content area
    const feedContainer = document.querySelector('.feed');
    
    // Show loading state
    feedContainer.innerHTML = '<div class="loading">Loading messages...</div>';
    
    // Fetch messages data from API
    fetchFromAPI('/api/messages/conversations')
        .then(conversationsData => {
            // Update messages global variable
            const conversations = conversationsData || [];
            
            // Render the messages page
            let messagesHTML = `
                <div class="messages-container">
                    <div class="messages-header">
                        <h2 class="section-title">Messages</h2>
                        <button class="new-message-btn">New Message</button>
                    </div>
                    
                    <div class="messages-list">
            `;
            
            if (conversations.length === 0) {
                messagesHTML += `
                    <div class="empty-messages">
                        <p>No messages yet. Start a conversation!</p>
                    </div>
                `;
            } else {
                conversations.forEach(conversation => {
                    const user = conversation.user;
                    const latestMessage = conversation.latest_message;
                    const unreadCount = conversation.unread_count;
                    
                    messagesHTML += `
                        <div class="message-item ${unreadCount > 0 ? 'unread' : ''}" data-user-id="${user.id}">
                            <div class="message-avatar">
                                <img src="${user.profile_image}" alt="${user.username}">
                                ${unreadCount > 0 ? '<span class="unread-indicator"></span>' : ''}
                            </div>
                            <div class="message-content">
                                <div class="message-header">
                                    <span class="message-sender">${user.username}</span>
                                    <span class="message-time">${formatTimestamp(new Date(latestMessage.created_at))}</span>
                                </div>
                                <div class="message-preview">
                                    ${latestMessage.is_sent_by_me ? 'You: ' : ''}${latestMessage.content}
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            messagesHTML += `
                    </div>
                    
                    <div class="message-detail hidden">
                        <div class="message-detail-header">
                            <button class="back-to-messages">Back</button>
                            <div class="message-recipient">
                                <img src="" alt="" class="recipient-avatar">
                                <span class="recipient-name"></span>
                            </div>
                            <div class="message-actions">
                                <button class="delete-conversation">Delete</button>
                            </div>
                        </div>
                        
                        <div class="message-thread">
                            <!-- Messages will be loaded here -->
                        </div>
                        
                        <div class="message-input-container">
                            <textarea class="message-input" placeholder="Type your message..."></textarea>
                            <button class="send-message">Send</button>
                        </div>
                    </div>
                </div>
            `;
            
            feedContainer.innerHTML = messagesHTML;
            
            // Add event listeners for message interactions
            setupMessageInteractions();
        })
        .catch(error => {
            console.error('Error loading messages content:', error);
            feedContainer.innerHTML = '<div class="error-message">Error loading messages. Please try again.</div>';
            
            // If unauthorized, simulate login
            if (error.status === 401) {
                simulateUserLogin();
            }
        });
}

// Load Profile tab content
function loadProfileContent() {
    console.log('Loading Profile content...');
    
    // Clear main content area
    const feedContainer = document.querySelector('.feed');
    
    // Show loading state
    feedContainer.innerHTML = '<div class="loading">Loading profile...</div>';
    
    // Fetch user profile data from API
    fetchFromAPI('/api/users/me')
        .then(profileData => {
            // Update current user global variable
            currentUser = profileData;
            
            // Render the profile page
            let profileHTML = `
                <div class="profile-container">
                    <div class="profile-header-banner">
                        <div class="profile-cover-image" style="background-image: url('${profileData.cover_image || 'images/profiles/cover1.jpg'}')"></div>
                        <div class="profile-header-content">
                            <div class="profile-avatar">
                                <img src="${profileData.profile_image}" alt="${profileData.username}">
                            </div>
                            <div class="profile-info-container">
                                <h2 class="profile-name">${profileData.username}</h2>
                                <div class="profile-handle">@${profileData.handle}</div>
                                <div class="profile-role">${profileData.role}</div>
                                <div class="profile-faction">${profileData.faction || 'Independent'}</div>
                                <div class="profile-stats">
                                    <div class="stat">
                                        <div class="stat-value">${profileData.post_count || 0}</div>
                                        <div class="stat-label">Posts</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-value">${profileData.follower_count || 0}</div>
                                        <div class="stat-label">Followers</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-value">${profileData.following_count || 0}</div>
                                        <div class="stat-label">Following</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-value">${profileData.street_cred || 0}</div>
                                        <div class="stat-label">Street Cred</div>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-actions">
                                <button class="edit-profile-btn">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="profile-tabs">
                        <button class="profile-tab active" data-tab="posts">Posts</button>
                        <button class="profile-tab" data-tab="cyberware">Cyberware</button>
                        <button class="profile-tab" data-tab="about">About</button>
                    </div>
                    
                    <div class="profile-content">
                        <div class="profile-section posts-section active">
                            <h3>Posts</h3>
                            <div class="posts-container">
            `;
            
            // Fetch user posts
            fetchFromAPI(`/api/feed/user/${profileData.id}`)
                .then(userPostsData => {
                    const userPosts = userPostsData.posts || [];
                    
                    // Add user posts
                    if (userPosts.length === 0) {
                        profileHTML += `
                            <div class="empty-posts">
                                <p>No posts yet. Share something with Night City!</p>
                            </div>
                        `;
                    } else {
                        userPosts.forEach(post => {
                            profileHTML += createPostHTML(post);
                        });
                    }
                    
                    profileHTML += `
                                </div>
                            </div>
                            
                            <div class="profile-section cyberware-section">
                                <h3>Installed Cyberware</h3>
                                <div class="cyberware-container">
                    `;
                    
                    // Add cyberware
                    const cyberware = profileData.cyberware ? 
                        (typeof profileData.cyberware === 'string' ? 
                            JSON.parse(profileData.cyberware) : profileData.cyberware) : [];
                    
                    if (!cyberware || cyberware.length === 0) {
                        profileHTML += `
                            <div class="empty-cyberware">
                                <p>No cyberware installed. Visit a ripperdoc to enhance yourself.</p>
                            </div>
                        `;
                    } else {
                        cyberware.forEach(ware => {
                            profileHTML += `
                                <div class="cyberware-item">
                                    <div class="cyberware-icon" style="background-color: ${getCyberwareColor(ware.type)}">
                                        <i class="${getCyberwareIcon(ware.type)}"></i>
                                    </div>
                                    <div class="cyberware-details">
                                        <div class="cyberware-name">${ware.name}</div>
                                        <div class="cyberware-type">${ware.type}</div>
                                        <div class="cyberware-description">${ware.description}</div>
                                        <div class="cyberware-stats">
                                            <span class="cyberware-stat">Quality: ${ware.quality}</span>
                                            <span class="cyberware-stat">Humanity Cost: -${ware.humanity_cost}</span>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });
                    }
                    
                    profileHTML += `
                                </div>
                            </div>
                            
                            <div class="profile-section about-section">
                                <h3>About</h3>
                                <div class="about-container">
                                    <div class="backstory">
                                        <h4>Backstory</h4>
                                        <p>${profileData.backstory || 'No backstory provided.'}</p>
                                    </div>
                                    
                                    <div class="details-grid">
                                        <div class="detail-item">
                                            <div class="detail-label">Role</div>
                                            <div class="detail-value">${profileData.role}</div>
                                        </div>
                                        <div class="detail-item">
                                            <div class="detail-label">Faction</div>
                                            <div class="detail-value">${profileData.faction || 'Independent'}</div>
                                        </div>
                                        <div class="detail-item">
                                            <div class="detail-label">Style</div>
                                            <div class="detail-value">${profileData.style || 'Undefined'}</div>
                                        </div>
                                        <div class="detail-item">
                                            <div class="detail-label">Street Cred</div>
                                            <div class="detail-value">${profileData.street_cred || 0}</div>
                                        </div>
                                        <div class="detail-item">
                                            <div class="detail-label">Joined</div>
                                            <div class="detail-value">${formatDate(new Date(profileData.created_at))}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    
                    feedContainer.innerHTML = profileHTML;
                    
                    // Add event listeners for profile tabs
                    document.querySelectorAll('.profile-tab').forEach(tab => {
                        tab.addEventListener('click', function() {
                            // Update active tab
                            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                            this.classList.add('active');
                            
                            // Show corresponding section
                            const tabName = this.getAttribute('data-tab');
                            document.querySelectorAll('.profile-section').forEach(section => {
                                section.classList.remove('active');
                            });
                            document.querySelector(`.${tabName}-section`).classList.add('active');
                        });
                    });
                    
                    // Add event listener for edit profile button
                    document.querySelector('.edit-profile-btn').addEventListener('click', function() {
                        // Show edit profile modal (would be implemented in a real app)
                        alert('Edit profile functionality would be implemented here.');
                    });
                    
                    // Re-attach event listeners to new content
                    setupPostInteractions();
                })
                .catch(error => {
                    console.error('Error loading user posts:', error);
                    document.querySelector('.posts-container').innerHTML = 
                        '<div class="error-message">Error loading posts. Please try again.</div>';
                });
        })
        .catch(error => {
            console.error('Error loading profile content:', error);
            feedContainer.innerHTML = '<div class="error-message">Error loading profile. Please try again.</div>';
            
            // If unauthorized, simulate login
            if (error.status === 401) {
                simulateUserLogin();
            }
        });
}

// Set up post interactions (likes, comments, etc.)
function setupPostInteractions() {
    // Like button functionality
    document.querySelectorAll('.post-action.like').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.closest('.post').getAttribute('data-post-id');
            const isLiked = this.classList.contains('liked');
            
            if (isLiked) {
                // Unlike post
                fetchFromAPI(`/api/posts/${postId}/unlike`, 'POST')
                    .then(() => {
                        this.classList.remove('liked');
                        const likeCount = this.querySelector('.action-count');
                        likeCount.textContent = parseInt(likeCount.textContent) - 1;
                    })
                    .catch(error => {
                        console.error('Error unliking post:', error);
                    });
            } else {
                // Like post
                fetchFromAPI(`/api/posts/${postId}/like`, 'POST')
                    .then(() => {
                        this.classList.add('liked');
                        const likeCount = this.querySelector('.action-count');
                        likeCount.textContent = parseInt(likeCount.textContent) + 1;
                    })
                    .catch(error => {
                        console.error('Error liking post:', error);
                    });
            }
        });
    });
    
    // Comment button functionality
    document.querySelectorAll('.post-action.comment').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.closest('.post').getAttribute('data-post-id');
            // In a real app, this would open a comment form or modal
            alert(`Comment functionality for post ${postId} would be implemented here.`);
        });
    });
    
    // Share button functionality
    document.querySelectorAll('.post-action.share').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.closest('.post').getAttribute('data-post-id');
            // In a real app, this would open a share modal
            alert(`Share functionality for post ${postId} would be implemented here.`);
        });
    });
    
    // Post form submission
    const postForm = document.querySelector('.post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();
        });
        
        const postButton = postForm.querySelector('.post-button');
        if (postButton) {
            postButton.addEventListener('click', function() {
                const postInput = postForm.querySelector('.post-input');
                const postContent = postInput.value.trim();
                
                if (postContent) {
                    // Create post via API
                    fetchFromAPI('/api/posts/', 'POST', {
                        content: postContent
                    })
                        .then(newPost => {
                            // Clear input
                            postInput.value = '';
                            
                            // Add new post to feed
                            const feedContainer = document.querySelector('.feed');
                            const postHTML = createPostHTML(newPost);
                            
                            // Insert after post form
                            postForm.insertAdjacentHTML('afterend', postHTML);
                            
                            // Re-attach event listeners
                            setupPostInteractions();
                        })
                        .catch(error => {
                            console.error('Error creating post:', error);
                            alert('Error creating post. Please try again.');
                        });
                }
            });
        }
    }
}

// Set up message interactions
function setupMessageInteractions() {
    // Message item click (open conversation)
    document.querySelectorAll('.message-item').forEach(item => {
        item.addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            
            // Show loading state
            document.querySelector('.messages-list').classList.add('hidden');
            document.querySelector('.message-detail').classList.remove('hidden');
            document.querySelector('.message-thread').innerHTML = '<div class="loading">Loading conversation...</div>';
            
            // Fetch conversation
            fetchFromAPI(`/api/messages/conversation/${userId}`)
                .then(conversationData => {
                    // Update recipient info
                    document.querySelector('.recipient-avatar').src = conversationData.user.profile_image;
                    document.querySelector('.recipient-avatar').alt = conversationData.user.username;
                    document.querySelector('.recipient-name').textContent = conversationData.user.username;
                    
                    // Store user ID for sending messages
                    document.querySelector('.send-message').setAttribute('data-recipient-id', userId);
                    document.querySelector('.delete-conversation').setAttribute('data-user-id', userId);
                    
                    // Load message thread
                    const messageThread = document.querySelector('.message-thread');
                    messageThread.innerHTML = '';
                    
                    conversationData.messages.forEach(message => {
                        const messageElement = document.createElement('div');
                        messageElement.className = `message-bubble ${message.is_sent_by_me ? 'outgoing' : 'incoming'}`;
                        messageElement.innerHTML = `
                            <div class="message-text">${message.content}</div>
                            <div class="message-time">${formatTimestamp(new Date(message.created_at))}</div>
                        `;
                        messageThread.appendChild(messageElement);
                    });
                    
                    messageThread.scrollTop = messageThread.scrollHeight;
                    
                    // Mark as read (UI update)
                    this.classList.remove('unread');
                    this.querySelector('.unread-indicator')?.remove();
                })
                .catch(error => {
                    console.error('Error loading conversation:', error);
                    document.querySelector('.message-thread').innerHTML = 
                        '<div class="error-message">Error loading conversation. Please try again.</div>';
                });
        });
    });
    
    // Back button click (return to messages list)
    const backButton = document.querySelector('.back-to-messages');
    if (backButton) {
        backButton.addEventListener('click', function() {
            document.querySelector('.messages-list').classList.remove('hidden');
            document.querySelector('.message-detail').classList.add('hidden');
        });
    }
    
    // New message button
    const newMessageBtn = document.querySelector('.new-message-btn');
    if (newMessageBtn) {
        newMessageBtn.addEventListener('click', function() {
            // In a real app, this would open a new message modal
            alert('New message functionality would be implemented here.');
        });
    }
    
    // Send message button
    const sendButton = document.querySelector('.send-message');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const recipientId = this.getAttribute('data-recipient-id');
            const messageInput = document.querySelector('.message-input');
            const messageText = messageInput.value.trim();
            
            if (messageText && recipientId) {
                // Send message via API
                fetchFromAPI(`/api/messages/send/${recipientId}`, 'POST', {
                    content: messageText
                })
                    .then(newMessage => {
                        // Clear input
                        messageInput.value = '';
                        
                        // Add message to thread
                        const messageThread = document.querySelector('.message-thread');
                        const messageElement = document.createElement('div');
                        messageElement.className = 'message-bubble outgoing';
                        messageElement.innerHTML = `
                            <div class="message-text">${newMessage.content}</div>
                            <div class="message-time">Just now</div>
                        `;
                        messageThread.appendChild(messageElement);
                        messageThread.scrollTop = messageThread.scrollHeight;
                    })
                    .catch(error => {
                        console.error('Error sending message:', error);
                        alert('Error sending message. Please try again.');
                    });
            }
        });
    }
    
    // Delete conversation button
    const deleteButton = document.querySelector('.delete-conversation');
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            
            if (confirm('Are you sure you want to delete this conversation? This action cannot be undone.')) {
                // Delete conversation via API
                fetchFromAPI(`/api/messages/conversation/${userId}`, 'DELETE')
                    .then(() => {
                        // Return to messages list
                        document.querySelector('.messages-list').classList.remove('hidden');
                        document.querySelector('.message-detail').classList.add('hidden');
                        
                        // Remove conversation from list
                        document.querySelector(`.message-item[data-user-id="${userId}"]`)?.remove();
                        
                        // Show empty state if no conversations left
                        if (document.querySelectorAll('.message-item').length === 0) {
                            document.querySelector('.messages-list').innerHTML = `
                                <div class="empty-messages">
                                    <p>No messages yet. Start a conversation!</p>
                                </div>
                            `;
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting conversation:', error);
                        alert('Error deleting conversation. Please try again.');
                    });
            }
        });
    }
}

// Fetch current user data
function fetchCurrentUser() {
    fetchFromAPI('/api/users/me')
        .then(userData => {
            currentUser = userData;
            updateProfileCard(currentUser);
        })
        .catch(error => {
            console.error('Error fetching current user:', error);
            
            // If unauthorized, simulate login
            if (error.status === 401) {
                simulateUserLogin();
            }
        });
}

// Simulate user login
function simulateUserLogin() {
    console.log('Simulating user login...');
    
    // In a real app, this would redirect to a login page
    // For demo purposes, we'll use a hardcoded user
    
    // Login via API
    fetchFromAPI('/api/auth/login', 'POST', {
        email: 'v@netlink.nc',
        password: 'password123'
    }, false) // false = no auth token needed
        .then(response => {
            // Store auth token
            authToken = response.token;
            localStorage.setItem('netlink_auth_token', authToken);
            
            // Store user data
            currentUser = response.user;
            
            // Update profile card
            updateProfileCard(currentUser);
            
            // Reload current tab content
            switch(currentTab) {
                case 'home':
                    loadHomeContent();
                    break;
                case 'explore':
                    loadExploreContent();
                    break;
                case 'messages':
                    loadMessagesContent();
                    break;
                case 'profile':
                    loadProfileContent();
                    break;
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
            alert('Error logging in. Using demo mode with limited functionality.');
            
            // Use demo user data
            currentUser = {
                id: 1,
                username: 'V',
                handle: 'v_merc',
                role: 'Solo',
                faction: 'Afterlife',
                street_cred: 85,
                profile_image: 'images/profiles/profile1.jpg'
            };
            
            // Update profile card
            updateProfileCard(currentUser);
        });
}

// Update profile card with user data
function updateProfileCard(user) {
    const profileCard = document.querySelector('.profile-card');
    if (!profileCard) return;
    
    const profilePic = profileCard.querySelector('.profile-pic');
    const profileName = profileCard.querySelector('.profile-name');
    const profileHandle = profileCard.querySelector('.profile-handle');
    
    if (profilePic) profilePic.src = user.profile_image;
    if (profileName) profileName.textContent = user.username;
    if (profileHandle) profileHandle.textContent = '@' + user.handle;
}

// Create HTML for a post
function createPostHTML(post) {
    const isLiked = post.is_liked || false;
    const author = post.author || {};
    const tags = post.tags ? 
        (typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags) : [];
    
    return `
        <div class="post" data-post-id="${post.id}">
            <div class="post-header">
                <img src="${author.profile_image}" alt="${author.username}" class="post-avatar">
                <div class="post-user">
                    <div class="post-username">${author.username}</div>
                    <div class="post-handle">@${author.handle}</div>
                </div>
                <div class="post-time">${formatTimestamp(new Date(post.created_at))}</div>
            </div>
            
            <div class="post-content">
                ${post.content}
            </div>
            
            ${post.media_url ? `<img src="${post.media_url}" alt="Post image" class="post-image">` : ''}
            
            ${tags && tags.length > 0 ? `
                <div class="post-tags">
                    ${tags.map(tag => `<span class="post-tag">#${tag}</span>`).join('')}
                </div>
            ` : ''}
            
            <div class="post-meta">
                ${post.location ? `
                    <div class="post-meta-item">
                        <i class="location-icon"></i>
                        ${post.location}
                    </div>
                ` : ''}
                
                ${post.mood ? `
                    <div class="post-meta-item">
                        <i class="mood-icon"></i>
                        ${post.mood}
                    </div>
                ` : ''}
                
                ${post.is_encrypted ? `
                    <div class="post-meta-item encrypted">
                        <i class="encrypted-icon"></i>
                        Encrypted
                    </div>
                ` : ''}
            </div>
            
            <div class="post-footer">
                <button class="post-action like ${isLiked ? 'liked' : ''}">
                    <i class="like-icon"></i>
                    <span class="action-count">${post.like_count || 0}</span>
                </button>
                <button class="post-action comment">
                    <i class="comment-icon"></i>
                    <span class="action-count">${post.comment_count || 0}</span>
                </button>
                <button class="post-action share">
                    <i class="share-icon"></i>
                    <span class="action-count">${post.share_count || 0}</span>
                </button>
            </div>
        </div>
    `;
}

// Format timestamp
function formatTimestamp(timestamp) {
    const now = new Date();
    const diffMs = now - timestamp;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffSec < 60) {
        return 'just now';
    } else if (diffMin < 60) {
        return `${diffMin}m ago`;
    } else if (diffHour < 24) {
        return `${diffHour}h ago`;
    } else if (diffDay < 7) {
        return `${diffDay}d ago`;
    } else {
        return timestamp.toLocaleDateString();
    }
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Get cyberware icon based on type
function getCyberwareIcon(type) {
    const icons = {
        'Neuralware': 'brain-icon',
        'Cyberoptics': 'eye-icon',
        'Cyberarm': 'arm-icon',
        'Cyberleg': 'leg-icon',
        'Internal': 'body-icon',
        'External': 'skin-icon',
        'Weapon': 'weapon-icon'
    };
    
    return icons[type] || 'chip-icon';
}

// Get cyberware color based on type
function getCyberwareColor(type) {
    const colors = {
        'Neuralware': '#00f3ff',
        'Cyberoptics': '#ff00a0',
        'Cyberarm': '#ffff00',
        'Cyberleg': '#00ff00',
        'Internal': '#ff5500',
        'External': '#aa00ff',
        'Weapon': '#ff0000'
    };
    
    return colors[type] || '#888888';
}

// Fetch data from API with authentication
function fetchFromAPI(endpoint, method = 'GET', data = null, useAuth = true) {
    const headers = {
        'Content-Type': 'application/json'
    };
    
    if (useAuth && authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
    }
    
    const options = {
        method,
        headers
    };
    
    if (data && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(data);
    }
    
    return fetch(endpoint, options)
        .then(response => {
            if (!response.ok) {
                // Create error object with status
                const error = new Error('API request failed');
                error.status = response.status;
                throw error;
            }
            return response.json();
        });
}
