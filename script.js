function celebrate() {
    // Hide the question
    document.getElementById('question-section').style.display = 'none';
    // Show the success section
    document.getElementById('success').style.display = 'block';
}



function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.left = x + 'px';
    document.getElementById('noBtn').style.top = y + 'px';
}
function showGallery() {
    document.getElementById('main-card').style.display = 'none';
    const gallery = document.getElementById('photo-gallery');
    gallery.style.display = 'block';

    // Forces the browser to scroll back to the top of the screen
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let isPlaying = false;

function showGallery() {
    document.getElementById('main-card').style.display = 'none';
    document.getElementById('photo-gallery').style.display = 'block';
    
    // Auto-scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Start music automatically (Note: Browsers might block auto-play until user clicks)
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music waiting for user interaction"));
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');

    if (music.muted) {
        music.muted = false;
        btn.innerHTML = "🔊 Mute";
    } else {
        music.muted = true;
        btn.innerHTML = "🔇 Unmute";
    }
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Randomly pick a heart style
    const hearts = ['❤️', '💖', '💗', '💓'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Random Position
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random Speed (between 3 and 6 seconds)
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    // Random Size
    heart.style.fontSize = Math.random() * 10 + 15 + "px";
    
    document.body.appendChild(heart);

    // Remove heart after it falls to save memory
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

function showGallery() {
    // Hide card and show gallery
    document.getElementById('main-card').style.display = 'none';
    document.getElementById('photo-gallery').style.display = 'block';
    
    // START THE HEART RAIN
    // This creates a heart every 200 milliseconds
    setInterval(createHeart, 200);

    // Play your music
    const music = document.getElementById('bgMusic');
    music.play().catch(error => {
        console.log("Autoplay blocked, user needs to click Unmute.");
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMessagePage() {
    // Hide the gallery and show the message
    document.getElementById('photo-gallery').style.display = 'none';
    document.getElementById('message-page').style.display = 'flex';
    
    // Jump to the top so she starts reading from the beginning
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGalleryFromMsg() {
    // Go back to the photo grid
    document.getElementById('message-page').style.display = 'none';
    document.getElementById('photo-gallery').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}