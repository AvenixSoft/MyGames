// MyGames - Modern Gaming Platform Script (No Emojis - All SVG Icons & Upgraded Gameplay)

// SVG Icons Helper
const ICONS = {
    gamepad: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6 12h4m-2-2v4m7-2h.01M16 10h.01M16 14h.01M18 12h.01"/></svg>`,
    trophy: `<svg class="inline-svg trophy-svg" style="color:#f59e0b; width:36px; height:36px; margin:0 8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8m-4-4v4m-6-8V4h12v9a6 6 0 0 1-12 0Z"/><path d="M18 4h3a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-1M6 4H3a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4h1"/></svg>`,
    party: `<svg class="inline-svg party-svg" style="color:#ec4899; width:36px; height:36px; margin:0 8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    airHockey: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>`,
    ticTacToe: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
    snake: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h3l3 -9l6 18l3 -9h5"/><circle cx="19" cy="12" r="2" fill="currentColor"/></svg>`,
    memory: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="16" height="15" rx="2" ry="2"/><path d="M17 2l4 4-4 4"/><path d="M22 6H12"/></svg>`,
    flappy: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    cardBack: `<svg class="card-back-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6 12h4m-2-2v4m7-2h.01M16 10h.01M16 14h.01M18 12h.01"/></svg>`,
    xMark: `<svg class="tic-mark x-mark-svg" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    oMark: `<svg class="tic-mark o-mark-svg" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/></svg>`
};

// Global State
let currentUser = '';

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const mainSite = document.getElementById('main-site');
const playerNameInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const userNameDisplay = document.getElementById('user-name-display');
const logoutBtn = document.getElementById('logout-btn');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    loadUser();
    initWelcome();
    setupSmoothScroll();
    
    // Easter egg: press 'M' on keyboard to show welcome again (dev)
    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'm' && e.target.tagName === 'BODY') {
            if (!welcomeScreen.classList.contains('hidden')) return;
            localStorage.removeItem('mygames_user');
            location.reload();
        }
    });
    
    console.log('%c[MyGames] Main script initialized successfully', 'color:#06b6d4; font-weight: bold;');
});

// User Management
function loadUser() {
    const savedUser = localStorage.getItem('mygames_user');
    if (savedUser) {
        currentUser = savedUser;
        showMainSite();
    }
}

function initWelcome() {
    if (!startBtn || !playerNameInput) return;
    
    startBtn.addEventListener('click', handleStart);
    
    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleStart();
        }
    });
    
    playerNameInput.focus();
}

function handleStart() {
    const name = playerNameInput.value.trim();
    if (!name) {
        playerNameInput.style.borderColor = '#ef4444';
        playerNameInput.focus();
        return;
    }
    
    playerNameInput.style.borderColor = 'rgba(71, 85, 105, 0.6)';
    currentUser = name;
    localStorage.setItem('mygames_user', name);
    
    showWelcomeMessage();
}

function showWelcomeMessage() {
    const welcomeContent = welcomeScreen.querySelector('.welcome-content');
    
    welcomeContent.innerHTML = `
        <div style="text-align: center;">
            <div class="logo" style="justify-content: center; margin-bottom: 24px;">
                <div class="logo-icon">${ICONS.gamepad}</div>
            </div>
            <h2 style="font-size: 28px; margin-bottom: 10px; color: #f8fafc;">سلام ${currentUser}!</h2>
            <p style="font-size: 17px; color: #94a3b8;">به پلتفرم مدرن MyGames خوش آمدید</p>
            
            <div style="margin-top: 36px;">
                <button id="enter-site-btn" class="btn-primary large">ورود به پلتفرم</button>
            </div>
        </div>
    `;
    
    const enterBtn = document.getElementById('enter-site-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', showMainSite);
    }
}

function showMainSite() {
    if (userNameDisplay) {
        userNameDisplay.textContent = currentUser;
    }
    
    welcomeScreen.style.transition = 'opacity 0.4s ease';
    welcomeScreen.style.opacity = '0';
    
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        mainSite.classList.remove('hidden');
        mainSite.style.opacity = '0';
        mainSite.style.transition = 'opacity 0.5s ease';
        setTimeout(() => mainSite.style.opacity = '1', 50);
    }, 400);
    
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            localStorage.removeItem('mygames_user');
            location.reload();
        };
    }
}

// Smooth Scroll for Navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Game Modal System
function createGameModal(gameType, title, gameHTML) {
    const existingModal = document.querySelector('.game-modal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.innerHTML = `
        <div class="game-modal-content">
            <div class="game-modal-header">
                <h2>${title}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="game-container">
                ${gameHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    document.body.style.overflow = 'hidden';
    return modal;
}

function closeModal(modal) {
    modal.style.transition = 'opacity 0.25s ease';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = 'visible';
        window.currentGame = null;
    }, 250);
}

// Start specific game
function startGame(gameType) {
    let gameHTML = '';
    let title = '';
    
    switch(gameType) {
        case 'air-hockey':
            title = `${ICONS.airHockey} ایرهاکی`;
            gameHTML = `
                <div id="air-hockey-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="air-hockey-canvas" class="game-canvas air-hockey-canvas" width="800" height="500"></canvas>
                    
                    <div class="game-info-bar" style="margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#3b82f6;">بازیکن ۱ (آبی)</span>
                                <span id="player1-score" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#ec4899;">بازیکن ۲ (صورتی)</span>
                                <span id="player2-score" class="score-value">0</span>
                            </div>
                        </div>
                        
                        <div>
                            <button id="air-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="controls-info" style="margin-top:12px;">
                        <strong>بازیکن ۱:</strong> کلیدهای <kbd class="key-badge">W</kbd> <kbd class="key-badge">A</kbd> <kbd class="key-badge">S</kbd> <kbd class="key-badge">D</kbd> &nbsp;&nbsp;|&nbsp;&nbsp; 
                        <strong>بازیکن ۲:</strong> کلیدهای جهت‌دار <kbd class="key-badge">↑</kbd> <kbd class="key-badge">↓</kbd> <kbd class="key-badge">←</kbd> <kbd class="key-badge">→</kbd>
                    </div>
                </div>
            `;
            break;
            
        case 'tic-tac-toe':
            title = `${ICONS.ticTacToe} دایره و ضربدر`;
            gameHTML = `
                <div id="tic-tac-toe-container" style="display:flex; flex-direction:column; align-items:center;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 340px; margin-bottom: 18px; background: rgba(15,23,42,0.6); padding: 12px 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);">
                        <div>
                            <div style="font-size: 13px; color: #94a3b8; margin-bottom: 4px;">نوبت بازی</div>
                            <div id="tic-turn" style="height: 36px; display: flex; align-items: center;">${ICONS.xMark}</div>
                        </div>
                        <div class="score-display" style="margin: 0; gap: 24px;">
                            <div class="score">
                                <span class="score-label" style="color:#ec4899;">بازیکن X</span>
                                <span id="tic-score-x" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#06b6d4;">بازیکن O</span>
                                <span id="tic-score-o" class="score-value">0</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tic-tac-toe-grid" id="tic-grid"></div>
                    
                    <div style="margin-top: 22px; display: flex; gap: 12px;">
                        <button id="tic-reset-btn" class="btn-secondary">شروع دوباره</button>
                    </div>
                    
                    <div class="controls-info" style="margin-top: 14px;">بازی دو نفره استراتژیک - برای ثبت علامت روی خانه‌ها کلیک کنید</div>
                </div>
            `;
            break;
            
        case 'snake':
            title = `${ICONS.snake} مار سایبری`;
            gameHTML = `
                <div id="snake-container" style="display:flex; flex-direction:column; align-items:center;">
                    <canvas id="snake-canvas" class="game-canvas snake-canvas" width="500" height="500"></canvas>
                    
                    <div class="game-info-bar" style="max-width: 500px; margin-top: 16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label">امتیاز جمع‌شده</span>
                                <span id="snake-score" class="score-value">0</span>
                            </div>
                        </div>
                        
                        <div>
                            <button id="snake-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="controls-info" style="margin-top: 12px;">
                        <strong>کنترل حرکت:</strong> کلیدهای جهت‌دار <kbd class="key-badge">↑</kbd> <kbd class="key-badge">↓</kbd> <kbd class="key-badge">←</kbd> <kbd class="key-badge">→</kbd> یا کشیدن انگشت (Swipe)
                    </div>
                </div>
            `;
            break;
            
        case 'memory-card':
            title = `${ICONS.memory} حافظه کارت`;
            gameHTML = `
                <div id="memory-container" style="display:flex; flex-direction:column; align-items:center;">
                    <div class="game-info-bar" style="max-width: 520px; margin-bottom: 18px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label">تعداد حرکت‌ها</span>
                                <span id="memory-moves" class="score-value">0</span>
                            </div>
                        </div>
                        
                        <div>
                            <button id="memory-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="memory-grid" id="memory-grid"></div>
                    
                    <div class="controls-info" style="margin-top: 16px;">کارت‌های مشابه را دو به دو پیدا کرده و قدرت حافظه خود را بسنجید</div>
                </div>
            `;
            break;
            
        case 'flappy-bird':
            title = `${ICONS.flappy} سایبر برد`;
            gameHTML = `
                <div id="flappy-container" style="display:flex; flex-direction:column; align-items:center;">
                    <canvas id="flappy-canvas" class="game-canvas flappy-canvas" width="380" height="520"></canvas>
                    
                    <div class="game-info-bar" style="max-width: 380px; margin-top: 16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label">امتیاز کسب‌شده</span>
                                <span id="flappy-score" class="score-value">0</span>
                            </div>
                        </div>
                        
                        <div>
                            <button id="flappy-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="controls-info" style="margin-top: 12px;">
                        <strong>کنترل پرواز:</strong> کلید <kbd class="key-badge">Space</kbd> یا کلیک روی صفحه بازی
                    </div>
                </div>
            `;
            break;
            
        default:
            console.error('Unknown game type:', gameType);
            return;
    }
    
    const modal = createGameModal(gameType, title, gameHTML);
    window.currentGame = gameType;
    
    setTimeout(() => {
        initSpecificGame(gameType, modal);
    }, 150);
}

function initSpecificGame(gameType, modal) {
    try {
        switch(gameType) {
            case 'air-hockey':
                initAirHockey();
                break;
            case 'tic-tac-toe':
                initTicTacToe();
                break;
            case 'snake':
                initSnake();
                break;
            case 'memory-card':
                initMemoryCard();
                break;
            case 'flappy-bird':
                initFlappyBird();
                break;
            default:
                throw new Error('Unknown game: ' + gameType);
        }
    } catch (err) {
        console.error('Error initializing game:', err);
        const container = modal.querySelector('.game-container');
        if (container) {
            container.innerHTML = `<div style="padding: 60px; text-align: center; color: #94a3b8;">
                <p>متأسفانه در بارگذاری بازی مشکلی رخ داد.</p>
                <p style="font-size:13px;color:#64748b;margin-top:8px;">${err.message}</p>
                <button onclick="location.reload()" class="btn-primary" style="margin-top: 20px;">بارگذاری مجدد</button>
            </div>`;
        }
    }
}

/* ==========================================================================
   1. AIR HOCKEY - UPGRADED WITH CYBER EFFECTS & PARTICLE TRAIL
   ========================================================================== */
function initAirHockey() {
    const canvas = document.getElementById('air-hockey-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    
    let player1 = { x: 150, y: HEIGHT / 2, radius: 28, speed: 7.5 };
    let player2 = { x: WIDTH - 150, y: HEIGHT / 2, radius: 28, speed: 7.5 };
    let puck = { x: WIDTH / 2, y: HEIGHT / 2, radius: 18, vx: 0, vy: 0 };
    let puckTrail = [];
    let sparks = [];
    
    let score1 = 0;
    let score2 = 0;
    let gameRunning = true;
    let keys = {};
    
    const MAX_SPEED = 11;
    const FRICTION = 0.988;
    const WIN_SCORE = 5;
    
    const score1El = document.getElementById('player1-score');
    const score2El = document.getElementById('player2-score');
    const resetBtn = document.getElementById('air-reset-btn');
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            keys[e.key.toLowerCase()] = true;
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                if (document.getElementById('air-hockey-canvas')) e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            keys[e.key.toLowerCase()] = false;
        });
        
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleTouch(e);
        }, {passive: false});
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            handleTouch(e);
        }, {passive: false});
    }
    
    function handleTouch(e) {
        const rect = canvas.getBoundingClientRect();
        for (let i = 0; i < e.touches.length; i++) {
            const touchX = (e.touches[i].clientX - rect.left) * (WIDTH / rect.width);
            const touchY = (e.touches[i].clientY - rect.top) * (HEIGHT / rect.height);
            
            if (touchX < WIDTH / 2) {
                player1.x = Math.max(player1.radius, Math.min(WIDTH / 2 - 40, touchX));
                player1.y = Math.max(player1.radius, Math.min(HEIGHT - player1.radius, touchY));
            } else {
                player2.x = Math.max(WIDTH / 2 + 40, Math.min(WIDTH - player2.radius, touchX));
                player2.y = Math.max(player2.radius, Math.min(HEIGHT - player2.radius, touchY));
            }
        }
    }
    
    function resetPuck() {
        puck.x = WIDTH / 2;
        puck.y = HEIGHT / 2;
        puck.vx = (Math.random() * 2 + 4) * (Math.random() > 0.5 ? 1 : -1);
        puck.vy = (Math.random() * 4 - 2);
        puckTrail = [];
    }
    
    function spawnSparks(x, y, color) {
        for (let i = 0; i < 12; i++) {
            sparks.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                radius: Math.random() * 3 + 1,
                color: color,
                alpha: 1
            });
        }
    }
    
    function updatePlayerMovement() {
        if (!gameRunning) return;
        
        if (keys['w']) player1.y -= player1.speed;
        if (keys['s']) player1.y += player1.speed;
        if (keys['a']) player1.x -= player1.speed;
        if (keys['d']) player1.x += player1.speed;
        
        if (keys['arrowup']) player2.y -= player2.speed;
        if (keys['arrowdown']) player2.y += player2.speed;
        if (keys['arrowleft']) player2.x -= player2.speed;
        if (keys['arrowright']) player2.x += player2.speed;
        
        player1.x = Math.max(player1.radius, Math.min(WIDTH / 2 - 35, player1.x));
        player1.y = Math.max(player1.radius, Math.min(HEIGHT - player1.radius, player1.y));
        
        player2.x = Math.max(WIDTH / 2 + 35, Math.min(WIDTH - player2.radius, player2.x));
        player2.y = Math.max(player2.radius, Math.min(HEIGHT - player2.radius, player2.y));
    }
    
    function updatePuck() {
        if (!gameRunning) return;
        
        puckTrail.push({ x: puck.x, y: puck.y });
        if (puckTrail.length > 10) puckTrail.shift();
        
        for (let i = sparks.length - 1; i >= 0; i--) {
            sparks[i].x += sparks[i].vx;
            sparks[i].y += sparks[i].vy;
            sparks[i].alpha -= 0.05;
            if (sparks[i].alpha <= 0) sparks.splice(i, 1);
        }
        
        puck.x += puck.vx;
        puck.y += puck.vy;
        
        puck.vx *= FRICTION;
        puck.vy *= FRICTION;
        
        if (puck.y - puck.radius < 0 || puck.y + puck.radius > HEIGHT) {
            puck.vy = -puck.vy * 0.95;
            puck.y = Math.max(puck.radius, Math.min(HEIGHT - puck.radius, puck.y));
            spawnSparks(puck.x, puck.y, '#06b6d4');
        }
        
        if (puck.x - puck.radius < 0) {
            if (puck.y > 140 && puck.y < 360) {
                score2++;
                spawnSparks(puck.x, puck.y, '#ec4899');
                updateScores();
                checkWin();
                resetPuck();
            } else {
                puck.vx = -puck.vx * 0.95;
                puck.x = puck.radius;
                spawnSparks(puck.x, puck.y, '#06b6d4');
            }
        }
        
        if (puck.x + puck.radius > WIDTH) {
            if (puck.y > 140 && puck.y < 360) {
                score1++;
                spawnSparks(puck.x, puck.y, '#3b82f6');
                updateScores();
                checkWin();
                resetPuck();
            } else {
                puck.vx = -puck.vx * 0.95;
                puck.x = WIDTH - puck.radius;
                spawnSparks(puck.x, puck.y, '#06b6d4');
            }
        }
        
        checkPlayerCollision(player1, '#3b82f6');
        checkPlayerCollision(player2, '#ec4899');
    }
    
    function checkPlayerCollision(player, color) {
        const dx = puck.x - player.x;
        const dy = puck.y - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < player.radius + puck.radius) {
            const angle = Math.atan2(dy, dx);
            const overlap = player.radius + puck.radius - distance;
            puck.x += Math.cos(angle) * overlap * 1.2;
            puck.y += Math.sin(angle) * overlap * 1.2;
            
            const playerVelX = (player.x - (player.lastX || player.x)) * 1.5;
            const playerVelY = (player.y - (player.lastY || player.y)) * 1.5;
            
            puck.vx = Math.cos(angle) * MAX_SPEED + playerVelX * 0.8;
            puck.vy = Math.sin(angle) * MAX_SPEED + playerVelY * 0.8;
            
            const speed = Math.sqrt(puck.vx * puck.vx + puck.vy * puck.vy);
            if (speed > MAX_SPEED) {
                puck.vx = (puck.vx / speed) * MAX_SPEED;
                puck.vy = (puck.vy / speed) * MAX_SPEED;
            }
            
            spawnSparks(puck.x, puck.y, color);
        }
        
        player.lastX = player.x;
        player.lastY = player.y;
    }
    
    function updateScores() {
        score1El.textContent = score1;
        score2El.textContent = score2;
    }
    
    function checkWin() {
        if (score1 >= WIN_SCORE || score2 >= WIN_SCORE) {
            gameRunning = false;
            const winner = score1 >= WIN_SCORE ? 'بازیکن ۱ (آبی)' : 'بازیکن ۲ (صورتی)';
            setTimeout(() => showGameOver(winner), 700);
        }
    }
    
    function showGameOver(winner) {
        const container = document.getElementById('air-hockey-container');
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} برنده بازی: ${winner}!</h2>
            <p>امتیاز نهایی: <strong>${score1} - ${score2}</strong></p>
            <button class="btn-primary game-btn" id="air-restart-final">شروع دوباره</button>
        `;
        
        container.style.position = 'relative';
        container.appendChild(overlay);
        
        document.getElementById('air-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }
    
    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        // Ice rink texture / grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        for(let i = 0; i < WIDTH; i += 40) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, HEIGHT); ctx.stroke();
        }
        for(let j = 0; j < HEIGHT; j += 40) {
            ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(WIDTH, j); ctx.stroke();
        }
        
        // Center line & circle
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(WIDTH / 2, 0); ctx.lineTo(WIDTH / 2, HEIGHT); ctx.stroke();
        
        ctx.beginPath(); ctx.arc(WIDTH / 2, HEIGHT / 2, 75, 0, Math.PI * 2); ctx.stroke();
        
        // Goals
        ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.fillRect(0, 140, 12, 220);
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(12, 140); ctx.lineTo(12, 360); ctx.stroke();
        
        ctx.fillStyle = 'rgba(236, 72, 153, 0.2)';
        ctx.fillRect(WIDTH - 12, 140, 12, 220);
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(WIDTH - 12, 140); ctx.lineTo(WIDTH - 12, 360); ctx.stroke();
        
        // Draw Sparks
        sparks.forEach(s => {
            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.alpha;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;
        
        // Draw Puck Trail
        puckTrail.forEach((pos, idx) => {
            ctx.fillStyle = 'rgba(6, 182, 212, ' + (idx / puckTrail.length * 0.4) + ')';
            ctx.beginPath(); ctx.arc(pos.x, pos.y, puck.radius * (idx / puckTrail.length), 0, Math.PI * 2); ctx.fill();
        });
        
        // Draw Puck
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#06b6d4';
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(puck.x, puck.y, puck.radius, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        
        // Player 1 Mallet
        ctx.shadowBlur = 20; ctx.shadowColor = '#3b82f6';
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath(); ctx.arc(player1.x, player1.y, player1.radius, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath(); ctx.arc(player1.x, player1.y, player1.radius * 0.6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#93c5fd'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(player1.x, player1.y, player1.radius - 3, 0, Math.PI * 2); ctx.stroke();
        
        // Player 2 Mallet
        ctx.shadowBlur = 20; ctx.shadowColor = '#ec4899';
        ctx.fillStyle = '#ec4899';
        ctx.beginPath(); ctx.arc(player2.x, player2.y, player2.radius, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#831843';
        ctx.beginPath(); ctx.arc(player2.x, player2.y, player2.radius * 0.6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#fbcfe8'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(player2.x, player2.y, player2.radius - 3, 0, Math.PI * 2); ctx.stroke();
    }
    
    function gameLoop() {
        if (!gameRunning && !document.getElementById('air-hockey-canvas')) return;
        updatePlayerMovement();
        updatePuck();
        draw();
        if (gameRunning) requestAnimationFrame(gameLoop);
    }
    
    function resetGame() {
        score1 = 0; score2 = 0;
        updateScores();
        player1.x = 150; player1.y = HEIGHT / 2;
        player2.x = WIDTH - 150; player2.y = HEIGHT / 2;
        resetPuck();
        gameRunning = true;
        const overlay = document.querySelector('#air-hockey-container .game-over-screen');
        if (overlay) overlay.remove();
        requestAnimationFrame(gameLoop);
    }
    
    setupControls();
    resetPuck();
    updateScores();
    if (resetBtn) resetBtn.onclick = resetGame;
    requestAnimationFrame(gameLoop);
}

/* ==========================================================================
   2. TIC TAC TOE - UPGRADED WITH NEON SVG MARKS & WIN ANIMATIONS
   ========================================================================== */
function initTicTacToe() {
    const gridContainer = document.getElementById('tic-grid');
    if (!gridContainer) return;
    
    let board = Array(9).fill(null);
    let currentPlayer = 'X';
    let gameActive = true;
    let scores = { X: 0, O: 0 };
    
    const turnEl = document.getElementById('tic-turn');
    const scoreXEl = document.getElementById('tic-score-x');
    const scoreOEl = document.getElementById('tic-score-o');
    const resetBtn = document.getElementById('tic-reset-btn');
    
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    function createBoard() {
        gridContainer.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'tic-cell';
            cell.dataset.index = i;
            cell.addEventListener('click', () => handleCellClick(i, cell));
            gridContainer.appendChild(cell);
        }
    }
    
    function handleCellClick(index, cell) {
        if (!gameActive || board[index] !== null) return;
        
        board[index] = currentPlayer;
        cell.innerHTML = currentPlayer === 'X' ? ICONS.xMark : ICONS.oMark;
        cell.classList.add(currentPlayer.toLowerCase());
        
        const winCombo = getWinCombination();
        if (winCombo) {
            winCombo.forEach(idx => {
                if (gridContainer.children[idx]) gridContainer.children[idx].classList.add('win-cell');
            });
            endGame(false);
        } else if (checkDraw()) {
            endGame(true);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateTurnDisplay();
        }
    }
    
    function getWinCombination() {
        for (let combo of winningCombinations) {
            if (combo.every(idx => board[idx] === currentPlayer)) return combo;
        }
        return null;
    }
    
    function checkDraw() {
        return board.every(cell => cell !== null);
    }
    
    function updateTurnDisplay() {
        if (turnEl) turnEl.innerHTML = currentPlayer === 'X' ? ICONS.xMark : ICONS.oMark;
    }
    
    function updateScores() {
        if (scoreXEl) scoreXEl.textContent = scores.X;
        if (scoreOEl) scoreOEl.textContent = scores.O;
    }
    
    function endGame(isDraw) {
        gameActive = false;
        setTimeout(() => {
            const container = document.getElementById('tic-tac-toe-container');
            const overlay = document.createElement('div');
            overlay.className = 'game-over-screen';
            
            let message = '';
            if (isDraw) {
                message = `
                    <h2>مساوی!</h2>
                    <p>بازی بدون برنده به پایان رسید</p>
                `;
            } else {
                message = `
                    <h2>${ICONS.trophy} برنده بازی: بازیکن ${currentPlayer}!</h2>
                    <p>امتیاز: X (${scores.X}) - O (${scores.O})</p>
                `;
                scores[currentPlayer]++;
                updateScores();
            }
            
            overlay.innerHTML = `
                ${message}
                <button class="btn-primary game-btn" id="tic-restart-final">شروع دوباره</button>
            `;
            
            container.style.position = 'relative';
            container.appendChild(overlay);
            
            document.getElementById('tic-restart-final').onclick = () => {
                overlay.remove();
                resetGame();
            };
        }, 600);
    }
    
    function resetGame() {
        board = Array(9).fill(null);
        currentPlayer = 'X';
        gameActive = true;
        createBoard();
        updateTurnDisplay();
        const overlay = document.querySelector('#tic-tac-toe-container .game-over-screen');
        if (overlay) overlay.remove();
    }
    
    createBoard();
    updateTurnDisplay();
    updateScores();
    if (resetBtn) resetBtn.onclick = resetGame;
}

/* ==========================================================================
   3. SNAKE - UPGRADED WITH NEON GRAPHICS & PULSATING FOOD
   ========================================================================== */
function initSnake() {
    const canvas = document.getElementById('snake-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const GRID_SIZE = 20;
    const CELL_SIZE = WIDTH / GRID_SIZE;
    
    let snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    let direction = { x: 1, y: 0 };
    let nextDirection = { x: 1, y: 0 };
    let food = { x: 15, y: 15 };
    let score = 0;
    let gameRunning = true;
    let gameInterval = null;
    let foodAngle = 0;
    
    const scoreEl = document.getElementById('snake-score');
    const resetBtn = document.getElementById('snake-reset-btn');
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            if (!document.getElementById('snake-canvas') || !gameRunning) return;
            switch(e.key) {
                case 'ArrowUp': if (direction.y !== 1) nextDirection = { x: 0, y: -1 }; e.preventDefault(); break;
                case 'ArrowDown': if (direction.y !== -1) nextDirection = { x: 0, y: 1 }; e.preventDefault(); break;
                case 'ArrowLeft': if (direction.x !== 1) nextDirection = { x: -1, y: 0 }; e.preventDefault(); break;
                case 'ArrowRight': if (direction.x !== -1) nextDirection = { x: 1, y: 0 }; e.preventDefault(); break;
            }
        });
        
        let touchStartX = 0, touchStartY = 0;
        canvas.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, {passive: true});
        
        canvas.addEventListener('touchend', (e) => {
            if (!gameRunning) return;
            const diffX = e.changedTouches[0].clientX - touchStartX;
            const diffY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0 && direction.x !== -1) nextDirection = { x: 1, y: 0 };
                else if (diffX < 0 && direction.x !== 1) nextDirection = { x: -1, y: 0 };
            } else {
                if (diffY > 0 && direction.y !== -1) nextDirection = { x: 0, y: 1 };
                else if (diffY < 0 && direction.y !== 1) nextDirection = { x: 0, y: -1 };
            }
        }, {passive: true});
    }
    
    function placeFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE)
            };
        } while (snake.some(s => s.x === newFood.x && s.y === newFood.y));
        food = newFood;
    }
    
    function update() {
        if (!gameRunning) return;
        direction = { ...nextDirection };
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            endGame(); return;
        }
        if (snake.some(s => s.x === head.x && s.y === head.y)) {
            endGame(); return;
        }
        
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            if (scoreEl) scoreEl.textContent = score;
            placeFood();
        } else {
            snake.pop();
        }
        foodAngle += 0.2;
    }
    
    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        // Cyber Grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= GRID_SIZE; x++) {
            ctx.beginPath(); ctx.moveTo(x * CELL_SIZE, 0); ctx.lineTo(x * CELL_SIZE, HEIGHT); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, x * CELL_SIZE); ctx.lineTo(WIDTH, x * CELL_SIZE); ctx.stroke();
        }
        
        // Draw Food (Pulsating Diamond)
        const fx = food.x * CELL_SIZE + CELL_SIZE / 2;
        const fy = food.y * CELL_SIZE + CELL_SIZE / 2;
        ctx.save();
        ctx.translate(fx, fy);
        ctx.rotate(foodAngle);
        ctx.shadowBlur = 15; ctx.shadowColor = '#f59e0b';
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(0, -CELL_SIZE / 2 + 3);
        ctx.lineTo(CELL_SIZE / 2 - 3, 0);
        ctx.lineTo(0, CELL_SIZE / 2 - 3);
        ctx.lineTo(-CELL_SIZE / 2 + 3, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        
        // Draw Snake
        snake.forEach((s, i) => {
            const sx = s.x * CELL_SIZE;
            const sy = s.y * CELL_SIZE;
            
            if (i === 0) {
                // Head
                ctx.shadowBlur = 15; ctx.shadowColor = '#10b981';
                ctx.fillStyle = '#10b981';
                ctx.beginPath();
                ctx.roundRect(sx + 1, sy + 1, CELL_SIZE - 2, CELL_SIZE - 2, 6);
                ctx.fill();
                ctx.shadowBlur = 0;
                
                // Glowing Cyber Eyes
                ctx.fillStyle = '#0b0f19';
                if (direction.x === 1) {
                    ctx.fillRect(sx + CELL_SIZE - 8, sy + 5, 4, 4);
                    ctx.fillRect(sx + CELL_SIZE - 8, sy + CELL_SIZE - 9, 4, 4);
                } else if (direction.x === -1) {
                    ctx.fillRect(sx + 4, sy + 5, 4, 4);
                    ctx.fillRect(sx + 4, sy + CELL_SIZE - 9, 4, 4);
                } else if (direction.y === 1) {
                    ctx.fillRect(sx + 5, sy + CELL_SIZE - 8, 4, 4);
                    ctx.fillRect(sx + CELL_SIZE - 9, sy + CELL_SIZE - 8, 4, 4);
                } else {
                    ctx.fillRect(sx + 5, sy + 4, 4, 4);
                    ctx.fillRect(sx + CELL_SIZE - 9, sy + 4, 4, 4);
                }
            } else {
                // Body
                const alpha = Math.max(0.3, 1 - (i / snake.length) * 0.6);
                ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
                ctx.beginPath();
                ctx.roundRect(sx + 2, sy + 2, CELL_SIZE - 4, CELL_SIZE - 4, 4);
                ctx.fill();
            }
        });
    }
    
    function gameLoop() {
        if (!gameRunning) return;
        update();
        draw();
    }
    
    function startGameLoop() {
        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, 110);
    }
    
    function endGame() {
        gameRunning = false;
        clearInterval(gameInterval);
        const container = document.getElementById('snake-container');
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} بازی تمام شد!</h2>
            <p>امتیاز نهایی شما: <strong>${score}</strong></p>
            <button class="btn-primary game-btn" id="snake-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('snake-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }
    
    function resetGame() {
        snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
        direction = { x: 1, y: 0 };
        nextDirection = { x: 1, y: 0 };
        score = 0;
        if (scoreEl) scoreEl.textContent = score;
        gameRunning = true;
        placeFood();
        startGameLoop();
    }
    
    setupControls();
    resetGame();
    if (resetBtn) resetBtn.onclick = () => {
        const overlay = document.querySelector('#snake-container .game-over-screen');
        if (overlay) overlay.remove();
        resetGame();
    };
}

/* ==========================================================================
   4. MEMORY CARD - UPGRADED WITH 8 SCI-FI SVG ICONS & 3D FLIP
   ========================================================================== */
function initMemoryCard() {
    const gridContainer = document.getElementById('memory-grid');
    if (!gridContainer) return;
    
    const memIcons = [
        `<svg class="mem-svg" style="color:#ef4444;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
        `<svg class="mem-svg" style="color:#f59e0b;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        `<svg class="mem-svg" style="color:#10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        `<svg class="mem-svg" style="color:#06b6d4;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        `<svg class="mem-svg" style="color:#8b5cf6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 2 18 2 18 6 6 6 6 2"/><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M10 12h4"/><path d="M12 10v4"/></svg>`,
        `<svg class="mem-svg" style="color:#ec4899;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
        `<svg class="mem-svg" style="color:#a855f7;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/></svg>`,
        `<svg class="mem-svg" style="color:#3b82f6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`
    ];
    
    const movesEl = document.getElementById('memory-moves');
    const resetBtn = document.getElementById('memory-reset-btn');
    
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let isProcessing = false;
    
    function createCards() {
        gridContainer.innerHTML = '';
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        if (movesEl) movesEl.textContent = moves;
        
        let cardPairs = [];
        memIcons.forEach((svg, idx) => {
            cardPairs.push({ id: idx, svg: svg });
            cardPairs.push({ id: idx, svg: svg });
        });
        
        cardPairs.sort(() => Math.random() - 0.5);
        
        cardPairs.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.id = item.id;
            card.dataset.svg = item.svg;
            
            card.innerHTML = `<div class="card-content">${ICONS.cardBack}</div>`;
            card.addEventListener('click', () => flipCard(card));
            gridContainer.appendChild(card);
        });
    }
    
    function flipCard(card) {
        if (isProcessing || card.classList.contains('flipped') || card.classList.contains('matched')) return;
        
        card.classList.add('flipped');
        const content = card.querySelector('.card-content');
        content.innerHTML = card.dataset.svg;
        
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            isProcessing = true;
            moves++;
            if (movesEl) movesEl.textContent = moves;
            checkMatch();
        }
    }
    
    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.id === card2.dataset.id) {
            setTimeout(() => {
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedPairs++;
                flippedCards = [];
                isProcessing = false;
                if (matchedPairs === memIcons.length) {
                    setTimeout(showWinScreen, 500);
                }
            }, 500);
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                const c1 = card1.querySelector('.card-content');
                const c2 = card2.querySelector('.card-content');
                c1.innerHTML = ICONS.cardBack;
                c2.innerHTML = ICONS.cardBack;
                flippedCards = [];
                isProcessing = false;
            }, 850);
        }
    }
    
    function showWinScreen() {
        const container = document.getElementById('memory-container');
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.party} عالی بود!</h2>
            <p>شما تمامی کارت‌ها را در <strong>${moves}</strong> حرکت پیدا کردید.</p>
            <button class="btn-primary game-btn" id="memory-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('memory-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }
    
    function resetGame() {
        const overlay = document.querySelector('#memory-container .game-over-screen');
        if (overlay) overlay.remove();
        createCards();
    }
    
    createCards();
    if (resetBtn) resetBtn.onclick = resetGame;
}

/* ==========================================================================
   5. FLAPPY BIRD - UPGRADED WITH CYBER SHIP & LASER GATES
   ========================================================================== */
function initFlappyBird() {
    const canvas = document.getElementById('flappy-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    
    let bird = { x: 80, y: HEIGHT / 2, radius: 16, velocity: 0 };
    let pipes = [];
    let stars = [];
    let thrusterTrail = [];
    
    const gravity = 0.45;
    const flapStrength = -8.2;
    const pipeSpeed = 2.8;
    const pipeWidth = 56;
    const pipeGap = 140;
    
    let score = 0;
    let gameRunning = false;
    let gameStarted = false;
    
    const scoreEl = document.getElementById('flappy-score');
    const resetBtn = document.getElementById('flappy-reset-btn');
    
    // Create Parallax Stars
    for (let i = 0; i < 40; i++) {
        stars.push({
            x: Math.random() * WIDTH,
            y: Math.random() * (HEIGHT - 60),
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.8 + 0.2
        });
    }
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            if (!document.getElementById('flappy-canvas')) return;
            if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                handleFlap();
            }
        });
        
        canvas.addEventListener('mousedown', handleFlap);
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleFlap();
        }, {passive: false});
    }
    
    function handleFlap() {
        if (!gameStarted) {
            startGame();
            return;
        }
        if (gameRunning) {
            bird.velocity = flapStrength;
            for(let i=0; i<6; i++) {
                thrusterTrail.push({
                    x: bird.x - 12,
                    y: bird.y + (Math.random() - 0.5) * 8,
                    vx: -Math.random() * 4 - 2,
                    vy: (Math.random() - 0.5) * 2,
                    radius: Math.random() * 4 + 2,
                    alpha: 1,
                    color: '#06b6d4'
                });
            }
        }
    }
    
    function startGame() {
        gameStarted = true;
        gameRunning = true;
        resetGameState();
        requestAnimationFrame(gameLoop);
    }
    
    function resetGameState() {
        bird.x = 80;
        bird.y = HEIGHT / 2;
        bird.velocity = 0;
        pipes = [];
        thrusterTrail = [];
        score = 0;
        if (scoreEl) scoreEl.textContent = score;
        for (let i = 0; i < 3; i++) {
            pipes.push({
                x: WIDTH + i * 240,
                topHeight: Math.random() * (HEIGHT - pipeGap - 140) + 60,
                passed: false
            });
        }
    }
    
    function update() {
        if (!gameRunning) return;
        
        // Stars Parallax
        stars.forEach(s => {
            s.x -= s.speed;
            if (s.x < 0) s.x = WIDTH;
        });
        
        // Thruster Particles
        for(let i = thrusterTrail.length - 1; i >= 0; i--) {
            thrusterTrail[i].x += thrusterTrail[i].vx;
            thrusterTrail[i].y += thrusterTrail[i].vy;
            thrusterTrail[i].alpha -= 0.05;
            if (thrusterTrail[i].alpha <= 0) thrusterTrail.splice(i, 1);
        }
        
        bird.velocity += gravity;
        bird.y += bird.velocity;
        
        if (bird.y - bird.radius < 0) {
            bird.y = bird.radius;
            bird.velocity = 0;
        }
        if (bird.y + bird.radius > HEIGHT - 50) {
            endGame(); return;
        }
        
        for (let i = pipes.length - 1; i >= 0; i--) {
            const p = pipes[i];
            p.x -= pipeSpeed;
            
            if (p.x + pipeWidth < 0) {
                pipes.splice(i, 1);
                pipes.push({
                    x: WIDTH + 100,
                    topHeight: Math.random() * (HEIGHT - pipeGap - 140) + 60,
                    passed: false
                });
            }
            
            if (!p.passed && p.x + pipeWidth < bird.x) {
                p.passed = true;
                score++;
                if (scoreEl) scoreEl.textContent = score;
            }
            
            if (checkCollision(p)) {
                endGame(); return;
            }
        }
    }
    
    function checkCollision(pipe) {
        const bl = bird.x - bird.radius + 3;
        const br = bird.x + bird.radius - 3;
        const bt = bird.y - bird.radius + 3;
        const bb = bird.y + bird.radius - 3;
        
        if (br > pipe.x && bl < pipe.x + pipeWidth) {
            if (bt < pipe.topHeight || bb > pipe.topHeight + pipeGap) {
                return true;
            }
        }
        return false;
    }
    
    function draw() {
        // Space Background
        const bgGrad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
        bgGrad.addColorStop(0, '#0b0f19');
        bgGrad.addColorStop(1, '#1e1b4b');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        // Stars
        ctx.fillStyle = '#f8fafc';
        stars.forEach(s => {
            ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill();
        });
        
        // Cyber Ground
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, HEIGHT - 50, WIDTH, 50);
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, HEIGHT - 50); ctx.lineTo(WIDTH, HEIGHT - 50); ctx.stroke();
        
        // Draw Laser Gate Pipes
        pipes.forEach(p => {
            // Top Gate
            const topGrad = ctx.createLinearGradient(p.x, 0, p.x + pipeWidth, 0);
            topGrad.addColorStop(0, '#1e293b'); topGrad.addColorStop(0.5, '#334155'); topGrad.addColorStop(1, '#0f172a');
            ctx.fillStyle = topGrad;
            ctx.fillRect(p.x, 0, pipeWidth, p.topHeight);
            
            ctx.shadowBlur = 12; ctx.shadowColor = '#06b6d4';
            ctx.fillStyle = '#06b6d4';
            ctx.fillRect(p.x - 4, p.topHeight - 16, pipeWidth + 8, 16);
            ctx.shadowBlur = 0;
            
            // Bottom Gate
            const botY = p.topHeight + pipeGap;
            ctx.fillStyle = topGrad;
            ctx.fillRect(p.x, botY, pipeWidth, HEIGHT - 50 - botY);
            
            ctx.shadowBlur = 12; ctx.shadowColor = '#ec4899';
            ctx.fillStyle = '#ec4899';
            ctx.fillRect(p.x - 4, botY, pipeWidth + 8, 16);
            ctx.shadowBlur = 0;
        });
        
        // Thruster Particles
        thrusterTrail.forEach(t => {
            ctx.fillStyle = t.color;
            ctx.globalAlpha = t.alpha;
            ctx.beginPath(); ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;
        
        // Draw Cyber Spaceship / Drone (Bird)
        ctx.save();
        ctx.translate(bird.x, bird.y);
        const rot = Math.min(Math.max(bird.velocity * 0.05, -0.5), 1.2);
        ctx.rotate(rot);
        
        // Ship Hull
        ctx.shadowBlur = 15; ctx.shadowColor = '#f59e0b';
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.ellipse(0, 0, bird.radius + 2, bird.radius - 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Cyber Cockpit Visor
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.ellipse(4, -2, 7, 5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Ship Wing / Thruster Engine
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.polygon || ctx.moveTo(-10, 4); ctx.lineTo(-2, 10); ctx.lineTo(-14, 8); ctx.fill();
        
        ctx.restore();
        
        if (!gameStarted) {
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 18px Vazirmatn, Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('برای شروع پرواز کلیک کنید یا Space را بزنید', WIDTH / 2, HEIGHT / 2 + 80);
        }
    }
    
    function gameLoop() {
        if (!gameRunning && !document.getElementById('flappy-canvas')) return;
        update();
        draw();
        if (gameRunning) requestAnimationFrame(gameLoop);
    }
    
    function endGame() {
        gameRunning = false;
        const container = document.getElementById('flappy-container');
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} بازی تمام شد!</h2>
            <p>امتیاز نهایی شما: <strong>${score}</strong></p>
            <button class="btn-primary game-btn" id="flappy-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('flappy-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }
    
    function resetGame() {
        const overlay = document.querySelector('#flappy-container .game-over-screen');
        if (overlay) overlay.remove();
        resetGameState();
        gameRunning = true;
        gameStarted = true;
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    setupControls();
    resetGameState();
    draw();
    if (resetBtn) resetBtn.onclick = () => {
        const overlay = document.querySelector('#flappy-container .game-over-screen');
        if (overlay) overlay.remove();
        resetGameState();
        gameRunning = false;
        gameStarted = false;
        draw();
    };
}
