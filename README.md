# 🌟 Healing Energy Field 🌟

A beautiful, calming single-page web application designed to create a peaceful, healing environment for users seeking tranquility and energetic renewal.

## ✨ Features

### 🎨 Visual Design
- **Animated Background**: Soft gradient with floating particles and sparkles
- **Pastel Color Scheme**: Lavender, soft blue, rose pink, and mint green tones
- **Elegant Typography**: Quicksand, Comfortaa, and Playfair Display fonts
- **Smooth Animations**: CSS transitions and keyframe animations for gentle motion
- **Mood-Responsive Backgrounds**: Background colors change based on selected mood

### 🧘‍♀️ Interactive Components

#### 🌈 Daily Quote Box
- Rotating healing quotes that change every 30 seconds
- Gentle fade-in/fade-out transitions
- 10 carefully curated healing messages

#### 💝 Mood Tracker
- **4 Mood Options**: Happy 😊, Anxious 😰, Tired 😴, Energized ⚡
- **Personalized Responses**: Each mood triggers specific healing quotes and suggestions
- **Background Adaptation**: Gentle color changes to match the selected mood
- **Mood-Specific Particles**: Unique emoji particles for each mood state
- **Auto-Hide Responses**: Mood suggestions fade after 8 seconds

#### 🎵 Meditation Music Player
- Play/pause functionality with visual feedback
- Volume control slider
- Progress bar with click-to-seek functionality
- Sample meditation audio included

#### ⚡ Energy Boost Button
- Triggers floating particle animations
- Displays random healing messages
- Automatically starts meditation music
- Visual feedback with scaling animations

#### 🔮 Crystal Mode Toggle
- Transforms background to crystal-themed gradient
- Adds floating crystal emojis (💎, 🔮, ✨, 🌟, 💫)
- Enhanced visual effects for deeper meditation

### 🎯 User Experience
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Keyboard Shortcuts**: 
  - `Spacebar`: Play/pause audio
  - `B`: Trigger energy boost
  - `C`: Toggle crystal mode
  - `1`: Select Happy mood
  - `2`: Select Anxious mood
  - `3`: Select Tired mood
  - `4`: Select Energized mood
- **Accessibility**: Good contrast ratios and semantic HTML
- **Smooth Scrolling**: Enhanced navigation experience

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Enjoy the healing experience!

### File Structure
```
healing-energy-field/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🎨 Design Philosophy

This website is built with wellness and healing in mind:

- **Gentle Visuals**: Soft colors and smooth animations prevent sensory overload
- **Calming Interactions**: All user interactions provide gentle feedback
- **Healing Intent**: Every element is designed to promote peace and tranquility
- **Accessibility**: Inclusive design for users with different needs
- **Mood Awareness**: Personalized responses based on emotional state

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: ES6+ features for interactive functionality
- **Google Fonts**: Quicksand, Comfortaa, and Playfair Display
- **Font Awesome**: Icons for enhanced visual appeal

### Key Features
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Maintainable styling
- **ES6 Classes**: Organized JavaScript architecture
- **Event-Driven Architecture**: Responsive user interactions
- **Progressive Enhancement**: Works without JavaScript
- **Mood State Management**: Dynamic content and styling based on user selection

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎵 Audio Features

The meditation player includes:
- Sample meditation audio (gentle rain sounds)
- Volume control with visual feedback
- Progress tracking
- Auto-play prevention (browser-compliant)

## 🌈 Color Palette

The healing color scheme includes:
- **Primary**: #6a4c93 (Soft Purple)
- **Secondary**: #a8e6cf (Mint Green)
- **Accent**: #ff9a9e (Rose Pink)
- **Background**: Gradient blend of pastel tones
- **Text**: #4a4a4a (Soft Dark Gray)

### Mood-Specific Colors
- **Happy**: Warm yellow tones (#fff9c4)
- **Anxious**: Calming blue tones (#e3f2fd)
- **Tired**: Soft purple tones (#f3e5f5)
- **Energized**: Vibrant green tones (#e8f5e8)

## 📱 Responsive Design

The website adapts beautifully to different screen sizes:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Optimized layout with adjusted spacing
- **Mobile**: Touch-friendly controls and simplified layout

## 🔧 Customization

### Adding New Quotes
Edit the `quotes` array in `script.js`:
```javascript
this.quotes = [
    "Your new healing quote here.",
    // Add more quotes...
];
```

### Adding New Moods
Add new mood data to the `moodData` object in `script.js`:
```javascript
this.moodData = {
    yourNewMood: {
        quotes: ["Your mood-specific quote"],
        suggestions: ["Your mood-specific suggestion"]
    }
};
```

### Changing Colors
Modify the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding Audio
Replace the audio source in `index.html`:
```html
<audio id="meditationAudio" preload="auto">
    <source src="path/to/your/audio.mp3" type="audio/mpeg">
</audio>
```

## 🌟 Future Enhancements

Potential features for future versions:
- Multiple meditation tracks
- Timer functionality
- Breathing exercises
- Chakra visualization
- Sound frequency therapy
- User preferences storage
- Offline functionality
- Mood history tracking
- Personalized recommendations
- Integration with wellness apps

## 📄 License

This project is created for healing and wellness purposes. Feel free to use and modify for personal or educational use.

## 🙏 Acknowledgments

- Healing quotes inspired by spiritual wisdom traditions
- Color palette designed for therapeutic environments
- Animations crafted for gentle, non-overwhelming experience
- Mood tracking concept based on emotional wellness practices

---

**Created with healing intentions and love** ❤️

*May this digital space bring peace and renewal to all who visit.* 