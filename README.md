# NetLink - Cyberpunk 2020 Social Network

A fan-created social media platform inspired by the Cyberpunk 2020 tabletop RPG and Cyberpunk 2077 video game universe. Experience Night City's digital underground through an authentic cyberpunk interface.

![NetLink Interface](https://github.com/user-attachments/assets/ef0d03ac-99e0-4098-9d83-8330a4646896)
![Profile View](https://github.com/user-attachments/assets/9c96a898-170a-46b7-a98d-ed80a96b51c5)

## 🌃 About NetLink

NetLink is a fictional social network that exists within the Cyberpunk 2020/2077 universe. It serves as a secure communication platform for mercenaries, netrunners, fixers, and other denizens of Night City. The interface combines the gritty aesthetic of cyberpunk with modern social media functionality.


## 📁 Project Structure

```
cyberpunk-site/
├── index.html              # Main social feed page
├── news.html              # News and updates page
├── watchable_profiles.html # Character profiles directory
├── messages.html          # Direct messaging interface
├── css/
│   └── styles.css        # Main stylesheet (embedded in HTML)
├── js/
│   ├── main-enhanced.js  # Core JavaScript functionality
│   └── feed-data.js      # Post data and content
├── images/
│   ├── profiles/         # Character profile pictures
│   ├── posts/           # Post images and media
│   └── backgrounds/     # Cover images and banners
└── README.md           # This file
```


## 🛠️ Customization

### Adding New Characters
1. Create character profile in HTML
2. Add profile image to `images/profiles/`
3. Update character data in JavaScript files
4. Customize role-specific styling

### Modifying Themes
```css
:root {
    --neon-blue: #00f3ff;     /* Primary accent color */
    --neon-pink: #ff00a0;     /* Secondary accent color */
    --neon-yellow: #ffff00;   /* Tertiary accent color */
    --dark-bg: #0a0a12;       /* Main background */
    --panel-bg: rgba(20, 20, 35, 0.7); /* Panel backgrounds */
}
```

### Adding New Posts
```javascript
// In js/feed-data.js
const posts = [
    {
        id: 'unique-id',
        user: 'Character Name',
        handle: '@username',
        avatar: 'images/profiles/avatar.jpg',
        content: 'Post content here...',
        timestamp: 'Time ago',
        likes: 0,
        reposts: 0,
        comments: 0
    }
];
```

## 🎯 Planned Features
- [ ] **Job board integration**: Post and accept gigs
- [ ] **Gang territory maps**: Interactive Night City districts
- [ ] **Cyberware marketplace**: Buy/sell chrome and tech
- [ ] **Netrunner tools**: Hacking simulators and ICE databases

## 🤝 Contributing

This is a fan project welcoming contributions from the cyberpunk community!

### How to Contribute
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- New character profiles and backstories
- Additional cyberpunk UI components
- Enhanced animations and effects
- Mobile responsiveness improvements
- Accessibility features


## ⚖️ Legal Notice

This is a non-commercial fan project created for educational and entertainment purposes. All Cyberpunk 2020 and Cyberpunk 2077 intellectual property belongs to CD Projekt RED and R. Talsorian Games.

**Disclaimer**: This project is not affiliated with, endorsed by, or connected to CD Projekt RED, R. Talsorian Games, or any official Cyberpunk properties.

## 🎖️ Credits

- **Original Concept**: Mike Pondsmith (Cyberpunk 2020 RPG)
- **Visual Inspiration**: CD Projekt RED (Cyberpunk 2077)
- **Fonts**: Google Fonts (Rajdhani, Share Tech Mono)
- **Icons**: Custom CSS implementations
- **Community**: Cyberpunk fans and developers
---

*"Wake the f*ck up, samurai. We've got a city to browse."*

**NetLink v2.077** - *Connecting Night City's Underground*
