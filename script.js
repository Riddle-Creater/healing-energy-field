// Healing Energy Field - Interactive JavaScript

class HealingEnergyField {
    constructor() {
        this.audio = document.getElementById('meditationAudio');
        this.playBtn = document.getElementById('playBtn');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.progressFill = document.getElementById('progressFill');
        this.energyBoostBtn = document.getElementById('energyBoostBtn');
        this.energyMessage = document.getElementById('energyMessage');
        this.crystalModeToggle = document.getElementById('crystalModeToggle');
        this.dailyQuote = document.getElementById('dailyQuote');
        this.moodResponse = document.getElementById('moodResponse');
        this.moodQuote = document.getElementById('moodQuote');
        this.moodSuggestion = document.getElementById('moodSuggestion');
        this.body = document.body;
        
        this.isPlaying = false;
        this.currentMood = null;
        
        this.quotes = [
            "In the gentle embrace of stillness, we find the strength to heal and the wisdom to grow.",
            "Your energy is a reflection of your inner peace. Breathe deeply and let it flow.",
            "Every moment of calm is a step toward healing. Trust in your journey.",
            "The universe whispers healing words to those who listen with their hearts.",
            "You are surrounded by love and light. Let it fill every cell of your being.",
            "Peace comes not from the absence of problems, but from the presence of inner strength.",
            "Your soul knows the way to healing. Trust its gentle guidance.",
            "In the space between breaths, find your center and your power.",
            "You are worthy of peace, love, and all the healing energy that surrounds you.",
            "Let go of what no longer serves you and embrace the light within."
        ];
        
        this.energyMessages = [
            "Your energy is rising... ✨",
            "Feel the healing vibrations flowing through you... 🌟",
            "You are becoming lighter and brighter... 💫",
            "Your aura is expanding with love and light... 🌈",
            "The universe is aligning with your highest good... 🌙",
            "You are a beacon of positive energy... 🔮",
            "Your chakras are opening and flowing freely... 🎯",
            "You are connected to the infinite source of healing... ⚡"
        ];
        
        // Mood-specific quotes and suggestions
        this.moodData = {
            happy: {
                quotes: [
                    "Your joy is a beautiful light that brightens the world around you.",
                    "Happiness is not something ready-made. It comes from your own actions.",
                    "Your positive energy is contagious and healing to others.",
                    "Celebrate this moment of joy and let it fill your heart completely."
                ],
                suggestions: [
                    "Share your happiness with someone who needs it today.",
                    "Take a moment to express gratitude for this beautiful feeling.",
                    "Let your joy inspire others to find their own happiness.",
                    "Channel this positive energy into a creative project."
                ]
            },
            anxious: {
                quotes: [
                    "Breathe deeply and know that this moment will pass. You are safe.",
                    "Your anxiety does not define you. You are stronger than your fears.",
                    "In the midst of chaos, find your center. You are grounded and secure.",
                    "Trust that you have the strength to navigate through uncertainty."
                ],
                suggestions: [
                    "Take 5 deep breaths, counting to 4 on inhale and 6 on exhale.",
                    "Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.",
                    "Listen to calming music and focus on the rhythm.",
                    "Write down your worries and then let them go with each breath."
                ]
            },
            tired: {
                quotes: [
                    "Rest is not a luxury, it's a necessity. Honor your need for renewal.",
                    "Your body is asking for care. Listen to its gentle wisdom.",
                    "In rest, you find the strength to continue your journey.",
                    "Sleep is the best meditation. Let your mind and body restore."
                ],
                suggestions: [
                    "Take a 10-minute power nap if possible.",
                    "Drink a glass of water and stretch gently.",
                    "Dim the lights and reduce screen time for the next hour.",
                    "Practice gentle breathing exercises to restore energy."
                ]
            },
            energized: {
                quotes: [
                    "Your vibrant energy is a gift. Use it to create something beautiful.",
                    "Channel this power into positive action and meaningful work.",
                    "Your enthusiasm is contagious and inspiring to others.",
                    "This energy is your creative force. Let it flow freely."
                ],
                suggestions: [
                    "Start that project you've been thinking about.",
                    "Go for a walk or exercise to channel this energy.",
                    "Connect with friends or family and share your positive vibes.",
                    "Use this momentum to tackle something challenging."
                ]
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupAudioControls();
        this.setupEnergyBoost();
        this.setupCrystalMode();
        this.setupQuoteRotation();
        this.setupMoodTracker();
        this.createFloatingParticles();
        this.setupProgressBar();
    }
    
    setupMoodTracker() {
        const moodButtons = document.querySelectorAll('.mood-btn');
        
        moodButtons.forEach(button => {
            button.addEventListener('click', () => {
                const mood = button.dataset.mood;
                this.selectMood(mood, button);
            });
        });
    }
    
    selectMood(mood, selectedButton) {
        // Remove previous selections
        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selection to clicked button
        selectedButton.classList.add('selected');
        
        // Update current mood
        this.currentMood = mood;
        
        // Change background color
        this.body.className = `mood-${mood}`;
        
        // Get mood-specific content
        const moodContent = this.moodData[mood];
        const randomQuote = moodContent.quotes[Math.floor(Math.random() * moodContent.quotes.length)];
        const randomSuggestion = moodContent.suggestions[Math.floor(Math.random() * moodContent.suggestions.length)];
        
        // Update mood response
        this.moodQuote.textContent = randomQuote;
        this.moodSuggestion.textContent = randomSuggestion;
        
        // Show mood response with animation
        this.moodResponse.classList.add('show');
        
        // Create mood-specific particles
        this.createMoodParticles(mood);
        
        // Auto-hide response after 8 seconds
        setTimeout(() => {
            this.moodResponse.classList.remove('show');
        }, 8000);
    }
    
    createMoodParticles(mood) {
        const moodEmojis = {
            happy: ['😊', '🌟', '✨', '💫', '🌈'],
            anxious: ['🕊️', '🌸', '🍃', '💙', '☁️'],
            tired: ['🌙', '💤', '🛏️', '🌿', '🕯️'],
            energized: ['⚡', '🔥', '💪', '🚀', '⭐']
        };
        
        const emojis = moodEmojis[mood];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'mood-particle';
                particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                particle.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${window.innerHeight + 20}px;
                    font-size: ${20 + Math.random() * 15}px;
                    pointer-events: none;
                    z-index: 1000;
                    animation: moodParticleFloat 4s ease-out forwards;
                `;
                
                document.body.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 4000);
            }, i * 150);
        }
    }
    
    setupAudioControls() {
        // Play/Pause functionality
        this.playBtn.addEventListener('click', () => {
            if (this.isPlaying) {
                this.pauseAudio();
            } else {
                this.playAudio();
            }
        });
        
        // Volume control
        this.volumeSlider.addEventListener('input', (e) => {
            this.audio.volume = e.target.value / 100;
        });
        
        // Audio ended event
        this.audio.addEventListener('ended', () => {
            this.pauseAudio();
        });
        
        // Audio time update for progress bar
        this.audio.addEventListener('timeupdate', () => {
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            this.progressFill.style.width = `${progress}%`;
        });
    }
    
    playAudio() {
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            this.playBtn.classList.add('playing');
        }).catch(error => {
            console.log('Audio play failed:', error);
        });
    }
    
    pauseAudio() {
        this.audio.pause();
        this.isPlaying = false;
        this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
        this.playBtn.classList.remove('playing');
    }
    
    setupProgressBar() {
        // Click on progress bar to seek
        const progressBar = document.querySelector('.progress-bar');
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const seekTime = (clickX / width) * this.audio.duration;
            this.audio.currentTime = seekTime;
        });
    }
    
    setupEnergyBoost() {
        this.energyBoostBtn.addEventListener('click', () => {
            this.triggerEnergyBoost();
        });
    }
    
    triggerEnergyBoost() {
        // Add animation class
        this.energyBoostBtn.classList.add('energy-boost-active');
        
        // Play audio if not already playing
        if (!this.isPlaying) {
            this.playAudio();
        }
        
        // Show random energy message
        const randomMessage = this.energyMessages[Math.floor(Math.random() * this.energyMessages.length)];
        this.energyMessage.textContent = randomMessage;
        this.energyMessage.classList.add('show');
        
        // Create floating particles effect
        this.createEnergyParticles();
        
        // Remove animation class after animation completes
        setTimeout(() => {
            this.energyBoostBtn.classList.remove('energy-boost-active');
        }, 2000);
        
        // Hide message after 4 seconds
        setTimeout(() => {
            this.energyMessage.classList.remove('show');
        }, 4000);
    }
    
    createEnergyParticles() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                this.createParticle();
            }, i * 100);
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'energy-particle';
        particle.innerHTML = '✨';
        particle.style.cssText = `
            position: fixed;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 20}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: particleFloat 3s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }
    
    createFloatingParticles() {
        // Add CSS for particle animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-${window.innerHeight + 100}px) scale(0);
                    opacity: 0;
                }
            }
            
            @keyframes moodParticleFloat {
                0% {
                    transform: translateY(0) scale(1) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: translateY(-${window.innerHeight/2}px) scale(1.2) rotate(180deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(-${window.innerHeight + 50}px) scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupCrystalMode() {
        this.crystalModeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                this.activateCrystalMode();
            } else {
                this.deactivateCrystalMode();
            }
        });
    }
    
    activateCrystalMode() {
        this.body.classList.add('crystal-mode');
        
        // Create additional crystal particles
        this.createCrystalParticles();
        
        // Change background gradient (only if no mood is selected)
        if (!this.currentMood) {
            document.body.style.background = 'linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 25%, #f5f0ff 50%, #fff0f5 75%, #f0fff0 100%)';
        }
    }
    
    deactivateCrystalMode() {
        this.body.classList.remove('crystal-mode');
        
        // Restore mood-specific background or default
        if (this.currentMood) {
            this.body.className = `mood-${this.currentMood}`;
        } else {
            document.body.style.background = 'linear-gradient(135deg, #e0f7fa 0%, #f3e5f5 25%, #e8f5e8 50%, #fff3e0 75%, #fce4ec 100%)';
        }
        
        // Remove crystal particles
        const crystalParticles = document.querySelectorAll('.crystal-particle');
        crystalParticles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
    }
    
    createCrystalParticles() {
        const crystalEmojis = ['💎', '🔮', '✨', '🌟', '💫'];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'crystal-particle';
                particle.innerHTML = crystalEmojis[Math.floor(Math.random() * crystalEmojis.length)];
                particle.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    font-size: ${20 + Math.random() * 20}px;
                    pointer-events: none;
                    z-index: 999;
                    animation: crystalFloat ${4 + Math.random() * 4}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                `;
                
                document.body.appendChild(particle);
            }, i * 200);
        }
    }
    
    setupQuoteRotation() {
        // Change quote every 30 seconds
        setInterval(() => {
            this.changeQuote();
        }, 30000);
        
        // Initial quote change after 5 seconds
        setTimeout(() => {
            this.changeQuote();
        }, 5000);
    }
    
    changeQuote() {
        const currentQuote = this.dailyQuote.textContent;
        let newQuote;
        
        // Ensure we get a different quote
        do {
            newQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        } while (newQuote === currentQuote);
        
        // Fade out
        this.dailyQuote.style.opacity = '0';
        this.dailyQuote.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            this.dailyQuote.textContent = newQuote;
            this.dailyQuote.style.opacity = '1';
            this.dailyQuote.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Add smooth scrolling for better UX
    addSmoothScrolling() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Add keyboard shortcuts
    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    if (this.isPlaying) {
                        this.pauseAudio();
                    } else {
                        this.playAudio();
                    }
                    break;
                case 'KeyB':
                    this.triggerEnergyBoost();
                    break;
                case 'KeyC':
                    this.crystalModeToggle.checked = !this.crystalModeToggle.checked;
                    this.crystalModeToggle.dispatchEvent(new Event('change'));
                    break;
                case 'Digit1':
                    this.selectMood('happy', document.querySelector('[data-mood="happy"]'));
                    break;
                case 'Digit2':
                    this.selectMood('anxious', document.querySelector('[data-mood="anxious"]'));
                    break;
                case 'Digit3':
                    this.selectMood('tired', document.querySelector('[data-mood="tired"]'));
                    break;
                case 'Digit4':
                    this.selectMood('energized', document.querySelector('[data-mood="energized"]'));
                    break;
            }
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const healingField = new HealingEnergyField();
    
    // Add smooth scrolling
    healingField.addSmoothScrolling();
    
    // Add keyboard shortcuts
    healingField.addKeyboardShortcuts();
    
    // Add some initial sparkle to the page
    setTimeout(() => {
        healingField.createEnergyParticles();
    }, 2000);
    
    // Add CSS transitions for quote changes
    const style = document.createElement('style');
    style.textContent = `
        .daily-quote {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    console.log('🌟 Healing Energy Field initialized with love and light 🌟');
});

// Add some ambient background sounds (optional enhancement)
class AmbientSounds {
    constructor() {
        this.audioContext = null;
        this.oscillator = null;
        this.gainNode = null;
    }
    
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    playAmbientTone(frequency = 432) { // 432 Hz - healing frequency
        if (!this.audioContext) return;
        
        this.oscillator = this.audioContext.createOscillator();
        this.gainNode = this.audioContext.createGain();
        
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);
        
        this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        this.oscillator.type = 'sine';
        
        this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(0.01, this.audioContext.currentTime + 2);
        
        this.oscillator.start();
    }
    
    stopAmbientTone() {
        if (this.gainNode) {
            this.gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 1);
            setTimeout(() => {
                if (this.oscillator) {
                    this.oscillator.stop();
                }
            }, 1000);
        }
    }
}

// Optional: Initialize ambient sounds (uncomment if you want healing frequencies)
// const ambientSounds = new AmbientSounds();
// document.addEventListener('click', () => {
//     ambientSounds.init();
// }); 