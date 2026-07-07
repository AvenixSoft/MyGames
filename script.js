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
    pong: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="3" height="12" rx="1.5"/><rect x="19" y="6" width="3" height="12" rx="1.5"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="6" stroke-dasharray="2 2"/><line x1="12" y1="18" x2="12" y2="21" stroke-dasharray="2 2"/></svg>`,
    connect4: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="3"/><circle cx="7" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="17" cy="8" r="2"/><circle cx="7" cy="14" r="2" fill="currentColor"/><circle cx="12" cy="14" r="2" fill="currentColor"/><circle cx="17" cy="14" r="2" fill="currentColor"/></svg>`,
    tanks: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M5 16h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"/><path d="M2 10v4m20-4v4"/><circle cx="12" cy="12" r="3"/><path d="M12 9V3"/></svg>`,
    tron: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18V6a2 2 0 0 1 2-2h12"/><path d="M20 6v12a2 2 0 0 1-2 2H6"/><path d="M8 16h4a4 4 0 0 0 4-4V8"/><path d="M8 8h4"/><circle cx="8" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="8" r="2" fill="currentColor"/></svg>`,
    reversi: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="2.5" fill="currentColor"/><circle cx="16" cy="8" r="2.5"/><circle cx="8" cy="16" r="2.5"/><circle cx="16" cy="16" r="2.5" fill="currentColor"/></svg>`,
    soccer: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 6 4 3-1.5 5h-5L8 9l4-3Z"/><path d="M4.5 9.5 8 9m8 0 3.5.5M9.5 14 8 19m6.5-5 1.5 5"/></svg>`,
    sumo: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/><path d="M8 8V4m8 4V4M8 16v4m8-4v4"/><path d="M11.5 12h1"/></svg>`,
    reaction: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z"/><path d="M4 20h4M16 4h4"/></svg>`,
    dots: `<svg class="inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="1.8" fill="currentColor"/><circle cx="18" cy="6" r="1.8" fill="currentColor"/><circle cx="6" cy="18" r="1.8" fill="currentColor"/><circle cx="18" cy="18" r="1.8" fill="currentColor"/><path d="M6 6h12M6 6v12M18 6v12M6 18h12"/></svg>`,
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
            
        case 'laser-pong':
            title = `${ICONS.pong} پونگ لیزری`;
            gameHTML = `
                <div id="pong-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="pong-canvas" class="game-canvas pong-canvas" width="800" height="500"></canvas>
                    
                    <div class="game-info-bar" style="margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#ef4444;">بازیکن ۱ (چپ)</span>
                                <span id="pong-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#06b6d4;">بازیکن ۲ (راست)</span>
                                <span id="pong-score2" class="score-value">0</span>
                            </div>
                        </div>
                        
                        <div>
                            <button id="pong-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="controls-info" style="margin-top:12px;">
                        <strong>بازیکن ۱:</strong> کلیدهای <kbd class="key-badge">W</kbd> و <kbd class="key-badge">S</kbd> &nbsp;&nbsp;|&nbsp;&nbsp; 
                        <strong>بازیکن ۲:</strong> کلیدهای جهت‌دار <kbd class="key-badge">↑</kbd> و <kbd class="key-badge">↓</kbd>
                    </div>
                </div>
            `;
            break;
            
        case 'connect-four':
            title = `${ICONS.connect4} دوز ۴ تایی`;
            gameHTML = `
                <div id="connect4-container" style="display:flex; flex-direction:column; align-items:center;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 440px; margin-bottom: 18px; background: rgba(15,23,42,0.6); padding: 12px 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);">
                        <div>
                            <div style="font-size: 13px; color: #94a3b8; margin-bottom: 4px;">نوبت بازی</div>
                            <div id="connect4-turn" style="font-weight:bold; font-size:16px; color:#f472b6; display:flex; align-items:center; gap:8px;">
                                <div style="width:20px; height:20px; border-radius:50%; background:#f472b6; box-shadow:0 0 10px #f472b6;"></div>
                                بازیکن ۱ (صورتی)
                            </div>
                        </div>
                        <div class="score-display" style="margin: 0; gap: 24px;">
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">بازیکن ۱</span>
                                <span id="c4-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">بازیکن ۲</span>
                                <span id="c4-score2" class="score-value">0</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="connect4-grid" id="connect4-grid"></div>
                    
                    <div style="margin-top: 22px; display: flex; gap: 12px;">
                        <button id="connect4-reset-btn" class="btn-secondary">شروع دوباره</button>
                    </div>
                    
                    <div class="controls-info" style="margin-top: 14px;">برای رها کردن مهره روی ستون مورد نظر کلیک کنید (اولین نفری که ۴ مهره متصل بسازد برنده است)</div>
                </div>
            `;
            break;
            
        case 'cyber-tanks':
            title = `${ICONS.tanks} نبرد تانک‌ها`;
            gameHTML = `
                <div id="tanks-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="tanks-canvas" class="game-canvas tanks-canvas" width="800" height="500"></canvas>
                    
                    <div class="game-info-bar" style="margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">تانک آبی (P1) HP:</span>
                                <span id="tank-hp1" class="score-value">5</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">تانک صورتی (P2) HP:</span>
                                <span id="tank-hp2" class="score-value">5</span>
                            </div>
                        </div>
                        
                        <div>
                            <button id="tanks-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="controls-info" style="margin-top:12px;">
                        <strong>تانک ۱:</strong> حرکت <kbd class="key-badge">WASD</kbd> شلیک <kbd class="key-badge">Space</kbd> &nbsp;&nbsp;|&nbsp;&nbsp; 
                        <strong>تانک ۲:</strong> حرکت <kbd class="key-badge">جهت‌دار</kbd> شلیک <kbd class="key-badge">Enter</kbd> یا <kbd class="key-badge">L</kbd>
                    </div>
                    <div class="touch-controls" aria-label="کنترل لمسی تانک‌ها">
                        <div class="touch-pad">
                            <span class="touch-title" style="color:#38bdf8;">تانک ۱</span>
                            <div class="dpad-grid">
                                <span></span><button class="touch-btn" data-tank-key="w">↑</button><span></span>
                                <button class="touch-btn" data-tank-key="a">←</button><button class="touch-btn shoot-btn" data-tank-key="space">شلیک</button><button class="touch-btn" data-tank-key="d">→</button>
                                <span></span><button class="touch-btn" data-tank-key="s">↓</button><span></span>
                            </div>
                        </div>
                        <div class="touch-pad">
                            <span class="touch-title" style="color:#f472b6;">تانک ۲</span>
                            <div class="dpad-grid">
                                <span></span><button class="touch-btn" data-tank-key="arrowup">↑</button><span></span>
                                <button class="touch-btn" data-tank-key="arrowleft">←</button><button class="touch-btn shoot-btn" data-tank-key="enter">شلیک</button><button class="touch-btn" data-tank-key="arrowright">→</button>
                                <span></span><button class="touch-btn" data-tank-key="arrowdown">↓</button><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            

            
        case 'neon-riders':
            title = `${ICONS.tron} نورسواران نئونی`;
            gameHTML = `
                <div id="tron-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="tron-canvas" class="game-canvas tron-canvas" width="720" height="480"></canvas>
                    
                    <div class="game-info-bar" style="margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">بازیکن ۱ (آبی)</span>
                                <span id="tron-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">بازیکن ۲ (صورتی)</span>
                                <span id="tron-score2" class="score-value">0</span>
                            </div>
                        </div>
                        <div>
                            <button id="tron-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div id="tron-status" class="controls-info" style="margin-top: 12px; color:#f8fafc;">اولین بازیکنی که به ۳ امتیاز برسد برنده است</div>
                    <div class="controls-info" style="margin-top: 8px;">
                        <strong>بازیکن ۱:</strong> <kbd class="key-badge">WASD</kbd> &nbsp;&nbsp;|&nbsp;&nbsp;
                        <strong>بازیکن ۲:</strong> کلیدهای جهت‌دار <kbd class="key-badge">↑</kbd> <kbd class="key-badge">↓</kbd> <kbd class="key-badge">←</kbd> <kbd class="key-badge">→</kbd>
                    </div>
                    <div class="controls-info" style="margin-top:8px;">لمسی: روی نیمه آبی/صورتی صفحه بازی سوایپ کنید یا از دکمه‌های زیر استفاده کنید.</div>
                    <div class="touch-controls" aria-label="کنترل لمسی نورسواران">
                        <div class="touch-pad">
                            <span class="touch-title" style="color:#38bdf8;">بازیکن ۱</span>
                            <div class="dpad-grid">
                                <span></span><button class="touch-btn" data-tron-player="1" data-dir="up">↑</button><span></span>
                                <button class="touch-btn" data-tron-player="1" data-dir="left">←</button><span></span><button class="touch-btn" data-tron-player="1" data-dir="right">→</button>
                                <span></span><button class="touch-btn" data-tron-player="1" data-dir="down">↓</button><span></span>
                            </div>
                        </div>
                        <div class="touch-pad">
                            <span class="touch-title" style="color:#f472b6;">بازیکن ۲</span>
                            <div class="dpad-grid">
                                <span></span><button class="touch-btn" data-tron-player="2" data-dir="up">↑</button><span></span>
                                <button class="touch-btn" data-tron-player="2" data-dir="left">←</button><span></span><button class="touch-btn" data-tron-player="2" data-dir="right">→</button>
                                <span></span><button class="touch-btn" data-tron-player="2" data-dir="down">↓</button><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'neon-reversi':
            title = `${ICONS.reversi} ریورسی نئونی`;
            gameHTML = `
                <div id="reversi-container" style="display:flex; flex-direction:column; align-items:center;">
                    <div style="display:flex; align-items:center; justify-content:space-between; width: 520px; max-width:100%; margin-bottom:18px; background:rgba(15,23,42,0.6); padding:12px 20px; border-radius:16px; border:1px solid rgba(255,255,255,0.08); gap:16px; flex-wrap:wrap;">
                        <div>
                            <div style="font-size:13px; color:#94a3b8; margin-bottom:4px;">نوبت بازی</div>
                            <div id="reversi-turn" style="font-weight:bold; font-size:16px; color:#f472b6; display:flex; align-items:center; gap:8px;"></div>
                        </div>
                        <div class="score-display" style="margin:0; gap:24px;">
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">صورتی</span>
                                <span id="rev-score1" class="score-value">2</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">آبی</span>
                                <span id="rev-score2" class="score-value">2</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="reversi-grid" id="reversi-grid"></div>
                    
                    <div style="margin-top:22px; display:flex; gap:12px;">
                        <button id="reversi-reset-btn" class="btn-secondary">شروع دوباره</button>
                    </div>
                    
                    <div id="reversi-status" class="controls-info" style="margin-top:14px;">روی خانه‌های سبز لمس/کلیک کنید؛ مهره‌های بین دو مهره شما برمی‌گردند.</div>
                </div>
            `;
            break;
            
        case 'neon-soccer':
            title = `${ICONS.soccer} فوتبال نئونی`;
            gameHTML = `
                <div id="soccer-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="soccer-canvas" class="game-canvas soccer-canvas" width="800" height="480"></canvas>
                    
                    <div class="game-info-bar" style="margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">بازیکن ۱ (آبی)</span>
                                <span id="soccer-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">بازیکن ۲ (صورتی)</span>
                                <span id="soccer-score2" class="score-value">0</span>
                            </div>
                        </div>
                        <div>
                            <button id="soccer-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div class="controls-info" style="margin-top:12px;">
                        <strong>بازیکن ۱:</strong> <kbd class="key-badge">WASD</kbd> &nbsp;&nbsp;|&nbsp;&nbsp;
                        <strong>بازیکن ۲:</strong> کلیدهای جهت‌دار <kbd class="key-badge">↑</kbd> <kbd class="key-badge">↓</kbd> <kbd class="key-badge">←</kbd> <kbd class="key-badge">→</kbd>
                    </div>
                    <div class="controls-info" style="margin-top:8px;">لمسی: هر بازیکن می‌تواند در نیمه خودش انگشت را بکشد یا از دکمه‌های زیر استفاده کند.</div>
                    <div class="touch-controls" aria-label="کنترل لمسی فوتبال">
                        <div class="touch-pad">
                            <span class="touch-title" style="color:#38bdf8;">بازیکن ۱</span>
                            <div class="dpad-grid">
                                <span></span><button class="touch-btn" data-soccer-key="w">↑</button><span></span>
                                <button class="touch-btn" data-soccer-key="a">←</button><span></span><button class="touch-btn" data-soccer-key="d">→</button>
                                <span></span><button class="touch-btn" data-soccer-key="s">↓</button><span></span>
                            </div>
                        </div>
                        <div class="touch-pad">
                            <span class="touch-title" style="color:#f472b6;">بازیکن ۲</span>
                            <div class="dpad-grid">
                                <span></span><button class="touch-btn" data-soccer-key="arrowup">↑</button><span></span>
                                <button class="touch-btn" data-soccer-key="arrowleft">←</button><span></span><button class="touch-btn" data-soccer-key="arrowright">→</button>
                                <span></span><button class="touch-btn" data-soccer-key="arrowdown">↓</button><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;


            
        case 'sumo-arena':
            title = `${ICONS.sumo} سومو نئونی`;
            gameHTML = `
                <div id="sumo-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="sumo-canvas" class="game-canvas sumo-canvas" width="720" height="480"></canvas>
                    
                    <div class="game-info-bar" style="margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">بازیکن ۱ (آبی)</span>
                                <span id="sumo-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">بازیکن ۲ (صورتی)</span>
                                <span id="sumo-score2" class="score-value">0</span>
                            </div>
                        </div>
                        <div>
                            <button id="sumo-reset-btn" class="btn-secondary">شروع دوباره</button>
                        </div>
                    </div>
                    
                    <div id="sumo-status" class="controls-info" style="margin-top:12px; color:#f8fafc;">لمسی: هر بازیکن روی نیمه خودش انگشت را بکشد؛ هدف بیرون انداختن حریف است.</div>
                    <div class="controls-info" style="margin-top:8px;">
                        <strong>کیبورد:</strong> بازیکن ۱ <kbd class="key-badge">WASD</kbd> | بازیکن ۲ کلیدهای جهت‌دار
                    </div>
                </div>
            `;
            break;
            
        case 'reaction-duel':
            title = `${ICONS.reaction} دوئل واکنش`;
            gameHTML = `
                <div id="reaction-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <div class="game-info-bar" style="max-width:780px; margin-bottom:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">بازیکن ۱</span>
                                <span id="reaction-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">بازیکن ۲</span>
                                <span id="reaction-score2" class="score-value">0</span>
                            </div>
                        </div>
                        <button id="reaction-reset-btn" class="btn-secondary">شروع دوباره</button>
                    </div>
                    <div id="reaction-status" class="controls-info" style="margin-bottom:14px; color:#f8fafc; font-size:16px;">برای شروع راند آماده شوید...</div>
                    <div id="reaction-light" class="reaction-light waiting"></div>
                    <div class="reaction-stage" style="margin-top:18px;">
                        <button id="reaction-p1" class="reaction-panel p1" type="button">
                            <h3 style="color:#38bdf8;">بازیکن ۱</h3>
                            <div class="reaction-big" style="color:#38bdf8;">لمس</div>
                            <span class="controls-info">یا کلید A</span>
                        </button>
                        <button id="reaction-p2" class="reaction-panel p2" type="button">
                            <h3 style="color:#f472b6;">بازیکن ۲</h3>
                            <div class="reaction-big" style="color:#f472b6;">لمس</div>
                            <span class="controls-info">یا کلید L</span>
                        </button>
                    </div>
                    <div class="controls-info" style="margin-top:14px;">وقتی چراغ سبز شد سریع لمس کنید؛ لمس زودهنگام یعنی باخت راند!</div>
                </div>
            `;
            break;
            
        case 'dots-boxes':
            title = `${ICONS.dots} نقطه و جعبه`;
            gameHTML = `
                <div id="dots-container" style="width:100%; display:flex; flex-direction:column; align-items:center;">
                    <canvas id="dots-canvas" class="game-canvas dots-canvas" width="560" height="560"></canvas>
                    
                    <div class="game-info-bar" style="max-width:560px; margin-top:16px;">
                        <div class="score-display">
                            <div class="score">
                                <span class="score-label" style="color:#38bdf8;">بازیکن ۱</span>
                                <span id="dots-score1" class="score-value">0</span>
                            </div>
                            <div class="score">
                                <span class="score-label" style="color:#f472b6;">بازیکن ۲</span>
                                <span id="dots-score2" class="score-value">0</span>
                            </div>
                        </div>
                        <button id="dots-reset-btn" class="btn-secondary">شروع دوباره</button>
                    </div>
                    <div id="dots-turn" class="controls-info" style="margin-top:12px; color:#38bdf8;">نوبت بازیکن ۱: یک خط را لمس کنید</div>
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
            case 'laser-pong':
                initLaserPong();
                break;
            case 'connect-four':
                initConnectFour();
                break;
            case 'cyber-tanks':
                initCyberTanks();
                break;
            case 'neon-riders':
                initNeonRiders();
                break;
            case 'neon-reversi':
                initNeonReversi();
                break;
            case 'neon-soccer':
                initNeonSoccer();
                break;
            case 'sumo-arena':
                initSumoArena();
                break;
            case 'reaction-duel':
                initReactionDuel();
                break;
            case 'dots-boxes':
                initDotsBoxes();
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

/* ==========================================================================
   6. LASER PONG - 2 PLAYER COMPETITIVE CYBER PONG
   ========================================================================== */
function initLaserPong() {
    const canvas = document.getElementById('pong-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    
    let player1 = { x: 30, y: HEIGHT / 2 - 45, width: 14, height: 90, speed: 8, score: 0 };
    let player2 = { x: WIDTH - 44, y: HEIGHT / 2 - 45, width: 14, height: 90, speed: 8, score: 0 };
    let ball = { x: WIDTH / 2, y: HEIGHT / 2, radius: 10, vx: 5, vy: 3, speed: 6.5 };
    let ballTrail = [];
    let sparks = [];
    
    let gameRunning = true;
    let keys = {};
    const WIN_SCORE = 5;
    
    const score1El = document.getElementById('pong-score1');
    const score2El = document.getElementById('pong-score2');
    const resetBtn = document.getElementById('pong-reset-btn');
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            keys[e.key.toLowerCase()] = true;
            if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(e.key) && document.getElementById('pong-canvas')) {
                e.preventDefault();
            }
        });
        window.addEventListener('keyup', (e) => {
            keys[e.key.toLowerCase()] = false;
        });
        
        canvas.addEventListener('touchstart', handleTouch, {passive: false});
        canvas.addEventListener('touchmove', handleTouch, {passive: false});
    }
    
    function handleTouch(e) {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        for (let i = 0; i < e.touches.length; i++) {
            const touchX = (e.touches[i].clientX - rect.left) * (WIDTH / rect.width);
            const touchY = (e.touches[i].clientY - rect.top) * (HEIGHT / rect.height);
            if (touchX < WIDTH / 2) {
                player1.y = Math.max(0, Math.min(HEIGHT - player1.height, touchY - player1.height / 2));
            } else {
                player2.y = Math.max(0, Math.min(HEIGHT - player2.height, touchY - player2.height / 2));
            }
        }
    }
    
    function resetBall(direction) {
        ball.x = WIDTH / 2;
        ball.y = HEIGHT / 2;
        ball.speed = 6.5;
        ball.vx = (direction || (Math.random() > 0.5 ? 1 : -1)) * ball.speed;
        ball.vy = (Math.random() * 4 - 2);
        ballTrail = [];
    }
    
    function spawnSparks(x, y, color) {
        for (let i = 0; i < 15; i++) {
            sparks.push({
                x: x, y: y,
                vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10,
                radius: Math.random() * 3 + 1, color: color, alpha: 1
            });
        }
    }
    
    function update() {
        if (!gameRunning) return;
        
        if (keys['w']) player1.y -= player1.speed;
        if (keys['s']) player1.y += player1.speed;
        if (keys['arrowup']) player2.y -= player2.speed;
        if (keys['arrowdown']) player2.y += player2.speed;
        
        player1.y = Math.max(0, Math.min(HEIGHT - player1.height, player1.y));
        player2.y = Math.max(0, Math.min(HEIGHT - player2.height, player2.y));
        
        ballTrail.push({ x: ball.x, y: ball.y });
        if (ballTrail.length > 12) ballTrail.shift();
        
        for (let i = sparks.length - 1; i >= 0; i--) {
            sparks[i].x += sparks[i].vx; sparks[i].y += sparks[i].vy; sparks[i].alpha -= 0.05;
            if (sparks[i].alpha <= 0) sparks.splice(i, 1);
        }
        
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > HEIGHT) {
            ball.vy = -ball.vy;
            ball.y = Math.max(ball.radius, Math.min(HEIGHT - ball.radius, ball.y));
            spawnSparks(ball.x, ball.y, '#f59e0b');
        }
        
        if (ball.x - ball.radius <= player1.x + player1.width && ball.x + ball.radius >= player1.x && ball.y >= player1.y && ball.y <= player1.y + player1.height) {
            let hitPoint = (ball.y - (player1.y + player1.height / 2)) / (player1.height / 2);
            let angle = hitPoint * (Math.PI / 3);
            ball.speed = Math.min(15, ball.speed + 0.5);
            ball.vx = ball.speed * Math.cos(angle);
            ball.vy = ball.speed * Math.sin(angle);
            ball.x = player1.x + player1.width + ball.radius;
            spawnSparks(ball.x, ball.y, '#ef4444');
        }
        
        if (ball.x + ball.radius >= player2.x && ball.x - ball.radius <= player2.x + player2.width && ball.y >= player2.y && ball.y <= player2.y + player2.height) {
            let hitPoint = (ball.y - (player2.y + player2.height / 2)) / (player2.height / 2);
            let angle = hitPoint * (Math.PI / 3);
            ball.speed = Math.min(15, ball.speed + 0.5);
            ball.vx = -ball.speed * Math.cos(angle);
            ball.vy = ball.speed * Math.sin(angle);
            ball.x = player2.x - ball.radius;
            spawnSparks(ball.x, ball.y, '#06b6d4');
        }
        
        if (ball.x < 0) {
            player2.score++;
            if (score2El) score2El.textContent = player2.score;
            spawnSparks(ball.x, ball.y, '#06b6d4');
            checkWin();
            resetBall(1);
        } else if (ball.x > WIDTH) {
            player1.score++;
            if (score1El) score1El.textContent = player1.score;
            spawnSparks(ball.x, ball.y, '#ef4444');
            checkWin();
            resetBall(-1);
        }
    }
    
    function checkWin() {
        if (player1.score >= WIN_SCORE || player2.score >= WIN_SCORE) {
            gameRunning = false;
            const winner = player1.score >= WIN_SCORE ? 'بازیکن ۱ (چپ)' : 'بازیکن ۲ (راست)';
            setTimeout(() => {
                const container = document.getElementById('pong-container');
                const overlay = document.createElement('div');
                overlay.className = 'game-over-screen';
                overlay.innerHTML = `
                    <h2>${ICONS.trophy} برنده بازی: ${winner}!</h2>
                    <p>امتیاز نهایی: <strong>${player1.score} - ${player2.score}</strong></p>
                    <button class="btn-primary game-btn" id="pong-restart-final">شروع دوباره</button>
                `;
                container.style.position = 'relative';
                container.appendChild(overlay);
                document.getElementById('pong-restart-final').onclick = () => {
                    overlay.remove();
                    resetGame();
                };
            }, 500);
        }
    }
    
    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 4;
        ctx.setLineDash([12, 12]);
        ctx.beginPath(); ctx.moveTo(WIDTH / 2, 0); ctx.lineTo(WIDTH / 2, HEIGHT); ctx.stroke();
        ctx.setLineDash([]);
        
        sparks.forEach(s => {
            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.alpha;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;
        
        ballTrail.forEach((pos, idx) => {
            ctx.fillStyle = 'rgba(245, 158, 11, ' + (idx / ballTrail.length * 0.4) + ')';
            ctx.beginPath(); ctx.arc(pos.x, pos.y, ball.radius * (idx / ballTrail.length), 0, Math.PI * 2); ctx.fill();
        });
        
        ctx.shadowBlur = 15; ctx.shadowColor = '#f59e0b';
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.shadowBlur = 15; ctx.shadowColor = '#ef4444';
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.roundRect(player1.x, player1.y, player1.width, player1.height, 6); ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.shadowBlur = 15; ctx.shadowColor = '#06b6d4';
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath(); ctx.roundRect(player2.x, player2.y, player2.width, player2.height, 6); ctx.fill();
        ctx.shadowBlur = 0;
    }
    
    function gameLoop() {
        if (!gameRunning && !document.getElementById('pong-canvas')) return;
        update();
        draw();
        if (gameRunning) requestAnimationFrame(gameLoop);
    }
    
    function resetGame() {
        player1.score = 0; player2.score = 0;
        if (score1El) score1El.textContent = 0;
        if (score2El) score2El.textContent = 0;
        player1.y = HEIGHT / 2 - 45; player2.y = HEIGHT / 2 - 45;
        resetBall();
        gameRunning = true;
        const overlay = document.querySelector('#pong-container .game-over-screen');
        if (overlay) overlay.remove();
        requestAnimationFrame(gameLoop);
    }
    
    setupControls();
    resetBall();
    if (resetBtn) resetBtn.onclick = resetGame;
    requestAnimationFrame(gameLoop);
}

/* ==========================================================================
   7. CONNECT FOUR - 2 PLAYER STRATEGIC 4-IN-A-ROW
   ========================================================================== */
function initConnectFour() {
    const gridContainer = document.getElementById('connect4-grid');
    if (!gridContainer) return;
    
    const ROWS = 6;
    const COLS = 7;
    let board = [];
    let currentPlayer = 1;
    let gameActive = true;
    let scores = { 1: 0, 2: 0 };
    
    const turnEl = document.getElementById('connect4-turn');
    const score1El = document.getElementById('c4-score1');
    const score2El = document.getElementById('c4-score2');
    const resetBtn = document.getElementById('connect4-reset-btn');
    
    function initBoard() {
        board = [];
        for (let r = 0; r < ROWS; r++) {
            board.push(Array(COLS).fill(0));
        }
    }
    
    function renderGrid() {
        gridContainer.innerHTML = '';
        for (let c = 0; c < COLS; c++) {
            const colDiv = document.createElement('div');
            colDiv.className = 'connect4-col';
            colDiv.dataset.col = c;
            
            for (let r = 0; r < ROWS; r++) {
                const cell = document.createElement('div');
                cell.className = 'connect4-cell';
                cell.id = `c4-cell-${r}-${c}`;
                colDiv.appendChild(cell);
            }
            
            colDiv.addEventListener('click', () => handleColClick(c));
            gridContainer.appendChild(colDiv);
        }
        updateTurnDisplay();
    }
    
    function handleColClick(col) {
        if (!gameActive) return;
        
        let row = -1;
        for (let r = ROWS - 1; r >= 0; r--) {
            if (board[r][col] === 0) {
                row = r;
                break;
            }
        }
        
        if (row === -1) return;
        
        board[row][col] = currentPlayer;
        const cell = document.getElementById(`c4-cell-${row}-${col}`);
        const token = document.createElement('div');
        token.className = `connect4-token player${currentPlayer}`;
        cell.appendChild(token);
        
        const winCells = checkWin(row, col);
        if (winCells) {
            winCells.forEach(pos => {
                const cEl = document.getElementById(`c4-cell-${pos.r}-${pos.c}`);
                if (cEl) cEl.classList.add('win-cell');
            });
            endGame(false);
        } else if (checkDraw()) {
            endGame(true);
        } else {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateTurnDisplay();
        }
    }
    
    function checkWin(r, c) {
        const player = board[r][c];
        const directions = [
            { dr: 0, dc: 1 },
            { dr: 1, dc: 0 },
            { dr: 1, dc: 1 },
            { dr: 1, dc: -1 }
        ];
        
        for (let dir of directions) {
            let cells = [{ r: r, c: c }];
            for (let i = 1; i < 4; i++) {
                let nr = r + dir.dr * i;
                let nc = c + dir.dc * i;
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === player) {
                    cells.push({ r: nr, c: nc });
                } else break;
            }
            for (let i = 1; i < 4; i++) {
                let nr = r - dir.dr * i;
                let nc = c - dir.dc * i;
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === player) {
                    cells.push({ r: nr, c: nc });
                } else break;
            }
            if (cells.length >= 4) return cells;
        }
        return null;
    }
    
    function checkDraw() {
        return board[0].every(val => val !== 0);
    }
    
    function updateTurnDisplay() {
        if (!turnEl) return;
        if (currentPlayer === 1) {
            turnEl.innerHTML = `<div style="width:20px; height:20px; border-radius:50%; background:#f472b6; box-shadow:0 0 10px #f472b6;"></div> بازیکن ۱ (صورتی)`;
            turnEl.style.color = '#f472b6';
        } else {
            turnEl.innerHTML = `<div style="width:20px; height:20px; border-radius:50%; background:#38bdf8; box-shadow:0 0 10px #38bdf8;"></div> بازیکن ۲ (آبی)`;
            turnEl.style.color = '#38bdf8';
        }
    }
    
    function updateScores() {
        if (score1El) score1El.textContent = scores[1];
        if (score2El) score2El.textContent = scores[2];
    }
    
    function endGame(isDraw) {
        gameActive = false;
        setTimeout(() => {
            const container = document.getElementById('connect4-container');
            const overlay = document.createElement('div');
            overlay.className = 'game-over-screen';
            
            let message = '';
            if (isDraw) {
                message = `<h2>مساوی!</h2><p>تمام خانه‌ها پر شد و برنده‌ای نداشتیم.</p>`;
            } else {
                const winnerName = currentPlayer === 1 ? 'بازیکن ۱ (صورتی)' : 'بازیکن ۲ (آبی)';
                message = `<h2>${ICONS.trophy} برنده بازی: ${winnerName}!</h2><p>امتیازات: بازیکن ۱ (${scores[1] + (currentPlayer === 1 ? 1 : 0)}) - بازیکن ۲ (${scores[2] + (currentPlayer === 2 ? 1 : 0)})</p>`;
                scores[currentPlayer]++;
                updateScores();
            }
            
            overlay.innerHTML = `
                ${message}
                <button class="btn-primary game-btn" id="c4-restart-final">شروع دوباره</button>
            `;
            container.style.position = 'relative';
            container.appendChild(overlay);
            document.getElementById('c4-restart-final').onclick = () => {
                overlay.remove();
                resetGame();
            };
        }, 700);
    }
    
    function resetGame() {
        initBoard();
        currentPlayer = 1;
        gameActive = true;
        renderGrid();
        const overlay = document.querySelector('#connect4-container .game-over-screen');
        if (overlay) overlay.remove();
    }
    
    initBoard();
    renderGrid();
    updateScores();
    if (resetBtn) resetBtn.onclick = resetGame;
}

/* ==========================================================================
   8. CYBER TANKS - 2 PLAYER LASER ARENA COMBAT
   ========================================================================== */
function initCyberTanks() {
    const canvas = document.getElementById('tanks-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    
    let tank1 = { x: 100, y: HEIGHT / 2, angle: 0, speed: 3.2, rotSpeed: 0.065, color: '#38bdf8', hp: 5, cooldown: 0 };
    let tank2 = { x: WIDTH - 100, y: HEIGHT / 2, angle: Math.PI, speed: 3.2, rotSpeed: 0.065, color: '#f472b6', hp: 5, cooldown: 0 };
    
    let bullets = [];
    let particles = [];
    let walls = [
        { x: WIDTH / 2 - 15, y: 100, width: 30, height: 120 },
        { x: WIDTH / 2 - 15, y: HEIGHT - 220, width: 30, height: 120 },
        { x: WIDTH / 2 - 120, y: HEIGHT / 2 - 15, width: 240, height: 30 }
    ];
    
    let gameRunning = true;
    let keys = {};
    
    const hp1El = document.getElementById('tank-hp1');
    const hp2El = document.getElementById('tank-hp2');
    const resetBtn = document.getElementById('tanks-reset-btn');
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            keys[e.key.toLowerCase()] = true;
            if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'enter', 'l'].includes(e.key.toLowerCase()) && document.getElementById('tanks-canvas')) {
                e.preventDefault();
            }
        });
        window.addEventListener('keyup', (e) => {
            keys[e.key.toLowerCase()] = false;
        });
        
        // Touch buttons for mobile/tablet play
        document.querySelectorAll('#tanks-container [data-tank-key]').forEach(btn => {
            const rawKey = btn.getAttribute('data-tank-key');
            const keyName = rawKey === 'space' ? ' ' : rawKey;
            const press = (e) => {
                e.preventDefault();
                keys[keyName] = true;
                btn.classList.add('active');
            };
            const release = (e) => {
                if (e) e.preventDefault();
                keys[keyName] = false;
                btn.classList.remove('active');
            };
            btn.addEventListener('pointerdown', press);
            btn.addEventListener('pointerup', release);
            btn.addEventListener('pointercancel', release);
            btn.addEventListener('pointerleave', release);
        });
    }
    
    function spawnExplosion(x, y, color, count = 20) {
        for (let i = 0; i < count; i++) {
            particles.push({
                x: x, y: y,
                vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8,
                radius: Math.random() * 4 + 2, color: color, alpha: 1
            });
        }
    }
    
    function shoot(t, owner) {
        if (t.cooldown > 0) return;
        const barrelLen = 24;
        const bx = t.x + Math.cos(t.angle) * barrelLen;
        const by = t.y + Math.sin(t.angle) * barrelLen;
        
        bullets.push({
            x: bx, y: by,
            vx: Math.cos(t.angle) * 8.5, vy: Math.sin(t.angle) * 8.5,
            radius: 5, color: t.color, owner: owner, bounces: 0
        });
        t.cooldown = 24;
        spawnExplosion(bx, by, t.color, 6);
    }
    
    function update() {
        if (!gameRunning) return;
        
        if (tank1.cooldown > 0) tank1.cooldown--;
        if (tank2.cooldown > 0) tank2.cooldown--;
        
        if (keys['w']) moveTank(tank1, 1);
        if (keys['s']) moveTank(tank1, -0.6);
        if (keys['a']) tank1.angle -= tank1.rotSpeed;
        if (keys['d']) tank1.angle += tank1.rotSpeed;
        if (keys[' ']) shoot(tank1, 1);
        
        if (keys['arrowup']) moveTank(tank2, 1);
        if (keys['arrowdown']) moveTank(tank2, -0.6);
        if (keys['arrowleft']) tank2.angle -= tank2.rotSpeed;
        if (keys['arrowright']) tank2.angle += tank2.rotSpeed;
        if (keys['enter'] || keys['l']) shoot(tank2, 2);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].x += particles[i].vx; particles[i].y += particles[i].vy; particles[i].alpha -= 0.04;
            if (particles[i].alpha <= 0) particles.splice(i, 1);
        }
        
        for (let i = bullets.length - 1; i >= 0; i--) {
            let b = bullets[i];
            b.x += b.vx; b.y += b.vy;
            
            let hitWall = false;
            if (b.x - b.radius < 0 || b.x + b.radius > WIDTH) { b.vx = -b.vx; hitWall = true; }
            if (b.y - b.radius < 0 || b.y + b.radius > HEIGHT) { b.vy = -b.vy; hitWall = true; }
            
            walls.forEach(w => {
                if (b.x + b.radius > w.x && b.x - b.radius < w.x + w.width && b.y + b.radius > w.y && b.y - b.radius < w.y + w.height) {
                    let prevX = b.x - b.vx;
                    if (prevX <= w.x || prevX >= w.x + w.width) b.vx = -b.vx;
                    else b.vy = -b.vy;
                    hitWall = true;
                }
            });
            
            if (hitWall) {
                b.bounces++;
                spawnExplosion(b.x, b.y, '#f59e0b', 8);
                if (b.bounces >= 2) {
                    bullets.splice(i, 1);
                    continue;
                }
            }
            
            if (b.owner !== 1 && Math.hypot(b.x - tank1.x, b.y - tank1.y) < 22) {
                tank1.hp--;
                if (hp1El) hp1El.textContent = tank1.hp;
                spawnExplosion(tank1.x, tank1.y, '#38bdf8', 25);
                bullets.splice(i, 1);
                checkWin();
                continue;
            }
            
            if (b.owner !== 2 && Math.hypot(b.x - tank2.x, b.y - tank2.y) < 22) {
                tank2.hp--;
                if (hp2El) hp2El.textContent = tank2.hp;
                spawnExplosion(tank2.x, tank2.y, '#f472b6', 25);
                bullets.splice(i, 1);
                checkWin();
                continue;
            }
        }
    }
    
    function moveTank(t, dir) {
        let nx = t.x + Math.cos(t.angle) * t.speed * dir;
        let ny = t.y + Math.sin(t.angle) * t.speed * dir;
        
        if (nx < 25 || nx > WIDTH - 25 || ny < 25 || ny > HEIGHT - 25) return;
        
        for (let w of walls) {
            if (nx + 20 > w.x && nx - 20 < w.x + w.width && ny + 20 > w.y && ny - 20 < w.y + w.height) return;
        }
        
        t.x = nx; t.y = ny;
    }
    
    function checkWin() {
        if (tank1.hp <= 0 || tank2.hp <= 0) {
            gameRunning = false;
            const winner = tank2.hp <= 0 ? 'تانک ۱ (آبی)' : 'تانک ۲ (صورتی)';
            setTimeout(() => {
                const container = document.getElementById('tanks-container');
                const overlay = document.createElement('div');
                overlay.className = 'game-over-screen';
                overlay.innerHTML = `
                    <h2>${ICONS.trophy} برنده میدان نبرد: ${winner}!</h2>
                    <p>امتیاز سلامت نهایی: آبی (${Math.max(0, tank1.hp)}) - صورتی (${Math.max(0, tank2.hp)})</p>
                    <button class="btn-primary game-btn" id="tanks-restart-final">شروع دوباره</button>
                `;
                container.style.position = 'relative';
                container.appendChild(overlay);
                document.getElementById('tanks-restart-final').onclick = () => {
                    overlay.remove();
                    resetGame();
                };
            }, 600);
        }
    }
    
    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= WIDTH; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke(); }
        for (let y = 0; y <= HEIGHT; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }
        
        walls.forEach(w => {
            ctx.shadowBlur = 10; ctx.shadowColor = '#14b8a6';
            ctx.fillStyle = '#134e4a';
            ctx.fillRect(w.x, w.y, w.width, w.height);
            ctx.strokeStyle = '#2dd4bf'; ctx.lineWidth = 2;
            ctx.strokeRect(w.x, w.y, w.width, w.height);
            ctx.shadowBlur = 0;
        });
        
        particles.forEach(p => {
            ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;
        
        bullets.forEach(b => {
            ctx.shadowBlur = 15; ctx.shadowColor = b.color;
            ctx.fillStyle = '#fff';
            ctx.beginPath(); ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
        });
        
        drawTank(tank1);
        drawTank(tank2);
    }
    
    function drawTank(t) {
        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.rotate(t.angle);
        
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(-18, -16, 36, 6);
        ctx.fillRect(-18, 10, 36, 6);
        
        ctx.shadowBlur = 15; ctx.shadowColor = t.color;
        ctx.fillStyle = t.color;
        ctx.beginPath(); ctx.roundRect(-14, -12, 28, 24, 4); ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.fillStyle = '#0f172a';
        ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(24, 0); ctx.stroke();
        
        ctx.restore();
        
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(t.x - 20, t.y - 28, 40, 6);
        ctx.fillStyle = t.color;
        ctx.fillRect(t.x - 20, t.y - 28, Math.max(0, (t.hp / 5) * 40), 6);
    }
    
    function gameLoop() {
        if (!gameRunning && !document.getElementById('tanks-canvas')) return;
        update();
        draw();
        if (gameRunning) requestAnimationFrame(gameLoop);
    }
    
    function resetGame() {
        tank1.x = 100; tank1.y = HEIGHT / 2; tank1.angle = 0; tank1.hp = 5;
        tank2.x = WIDTH - 100; tank2.y = HEIGHT / 2; tank2.angle = Math.PI; tank2.hp = 5;
        if (hp1El) hp1El.textContent = 5;
        if (hp2El) hp2El.textContent = 5;
        bullets = []; particles = [];
        gameRunning = true;
        const overlay = document.querySelector('#tanks-container .game-over-screen');
        if (overlay) overlay.remove();
        requestAnimationFrame(gameLoop);
    }
    
    setupControls();
    if (resetBtn) resetBtn.onclick = resetGame;
    requestAnimationFrame(gameLoop);
}

/* ==========================================================================
   9. NEON RIDERS - 2 PLAYER LIGHT CYCLE DUEL
   ========================================================================== */
function initNeonRiders() {
    const canvas = document.getElementById('tron-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const CELL = 20;
    const COLS = Math.floor(WIDTH / CELL);
    const ROWS = Math.floor(HEIGHT / CELL);
    const WIN_SCORE = 3;
    
    let grid = [];
    let p1, p2;
    let score1 = 0;
    let score2 = 0;
    let roundActive = true;
    let gameInterval = null;
    
    const score1El = document.getElementById('tron-score1');
    const score2El = document.getElementById('tron-score2');
    const statusEl = document.getElementById('tron-status');
    const resetBtn = document.getElementById('tron-reset-btn');
    
    function makeGrid() {
        grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    }
    
    function setStatus(text, color = '#f8fafc') {
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.style.color = color;
    }
    
    function resetRound() {
        makeGrid();
        p1 = { x: 6, y: Math.floor(ROWS / 2), dx: 1, dy: 0, color: '#38bdf8', glow: 'rgba(56,189,248,0.65)' };
        p2 = { x: COLS - 7, y: Math.floor(ROWS / 2), dx: -1, dy: 0, color: '#f472b6', glow: 'rgba(244,114,182,0.65)' };
        grid[p1.y][p1.x] = 1;
        grid[p2.y][p2.x] = 2;
        roundActive = true;
        setStatus('مسیر نوری بسازید و با دیوار یا ردپا برخورد نکنید!', '#f8fafc');
        draw();
    }
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            if (!document.getElementById('tron-canvas')) return;
            const k = e.key.toLowerCase();
            if (['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(k)) e.preventDefault();
            if (!roundActive) return;
            if (k === 'w') changeDir(p1, 0, -1);
            if (k === 's') changeDir(p1, 0, 1);
            if (k === 'a') changeDir(p1, -1, 0);
            if (k === 'd') changeDir(p1, 1, 0);
            if (k === 'arrowup') changeDir(p2, 0, -1);
            if (k === 'arrowdown') changeDir(p2, 0, 1);
            if (k === 'arrowleft') changeDir(p2, -1, 0);
            if (k === 'arrowright') changeDir(p2, 1, 0);
        });
        
        // Swipe on the canvas: left half controls player 1, right half controls player 2
        const touchStarts = new Map();
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            for (const t of e.changedTouches) {
                const x = (t.clientX - rect.left) * (WIDTH / rect.width);
                const y = (t.clientY - rect.top) * (HEIGHT / rect.height);
                touchStarts.set(t.identifier, { x, y, player: x < WIDTH / 2 ? 1 : 2 });
            }
        }, { passive: false });
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            for (const t of e.changedTouches) {
                const start = touchStarts.get(t.identifier);
                if (!start || !roundActive) continue;
                const x = (t.clientX - rect.left) * (WIDTH / rect.width);
                const y = (t.clientY - rect.top) * (HEIGHT / rect.height);
                const dx = x - start.x;
                const dy = y - start.y;
                if (Math.hypot(dx, dy) < 22) continue;
                applyTouchDirection(start.player, Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
                touchStarts.set(t.identifier, { x, y, player: start.player });
            }
        }, { passive: false });
        
        const clearTouch = (e) => {
            for (const t of e.changedTouches) touchStarts.delete(t.identifier);
        };
        canvas.addEventListener('touchend', clearTouch);
        canvas.addEventListener('touchcancel', clearTouch);
        
        document.querySelectorAll('#tron-container [data-tron-player]').forEach(btn => {
            btn.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                if (!roundActive) return;
                applyTouchDirection(Number(btn.dataset.tronPlayer), btn.dataset.dir);
                btn.classList.add('active');
                setTimeout(() => btn.classList.remove('active'), 130);
            });
        });
    }
    
    function applyTouchDirection(playerNumber, dir) {
        const target = playerNumber === 1 ? p1 : p2;
        if (!target) return;
        if (dir === 'up') changeDir(target, 0, -1);
        if (dir === 'down') changeDir(target, 0, 1);
        if (dir === 'left') changeDir(target, -1, 0);
        if (dir === 'right') changeDir(target, 1, 0);
    }
    
    function changeDir(player, dx, dy) {
        if (player.dx + dx === 0 && player.dy + dy === 0) return;
        player.dx = dx;
        player.dy = dy;
    }
    
    function isCrash(next) {
        return next.x < 0 || next.x >= COLS || next.y < 0 || next.y >= ROWS || grid[next.y][next.x] !== 0;
    }
    
    function updateScores() {
        if (score1El) score1El.textContent = score1;
        if (score2El) score2El.textContent = score2;
    }
    
    function step() {
        if (!document.getElementById('tron-canvas')) {
            clearInterval(gameInterval);
            return;
        }
        if (!roundActive) return;
        
        const n1 = { x: p1.x + p1.dx, y: p1.y + p1.dy };
        const n2 = { x: p2.x + p2.dx, y: p2.y + p2.dy };
        let crash1 = isCrash(n1);
        let crash2 = isCrash(n2);
        
        if (n1.x === n2.x && n1.y === n2.y) {
            crash1 = true;
            crash2 = true;
        }
        
        if (crash1 || crash2) {
            roundActive = false;
            if (crash1 && crash2) {
                setStatus('هر دو همزمان برخورد کردند؛ این راند مساوی شد!', '#f59e0b');
            } else if (crash1) {
                score2++;
                setStatus('بازیکن ۲ این راند را برد!', '#f472b6');
            } else {
                score1++;
                setStatus('بازیکن ۱ این راند را برد!', '#38bdf8');
            }
            updateScores();
            draw();
            if (score1 >= WIN_SCORE || score2 >= WIN_SCORE) {
                setTimeout(showGameOver, 550);
            } else {
                setTimeout(resetRound, 1050);
            }
            return;
        }
        
        p1.x = n1.x; p1.y = n1.y;
        p2.x = n2.x; p2.y = n2.y;
        grid[p1.y][p1.x] = 1;
        grid[p2.y][p2.x] = 2;
        draw();
    }
    
    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        ctx.strokeStyle = 'rgba(255,255,255,0.035)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= WIDTH; x += CELL) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke(); }
        for (let y = 0; y <= HEIGHT; y += CELL) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }
        
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) continue;
                const isP1 = grid[r][c] === 1;
                ctx.shadowBlur = 12;
                ctx.shadowColor = isP1 ? '#38bdf8' : '#f472b6';
                ctx.fillStyle = isP1 ? 'rgba(56,189,248,0.78)' : 'rgba(244,114,182,0.78)';
                ctx.fillRect(c * CELL + 3, r * CELL + 3, CELL - 6, CELL - 6);
                ctx.shadowBlur = 0;
            }
        }
        
        drawRider(p1);
        drawRider(p2);
    }
    
    function drawRider(p) {
        const x = p.x * CELL + CELL / 2;
        const y = p.y * CELL + CELL / 2;
        ctx.shadowBlur = 18;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, CELL * 0.48, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#0b0f19';
        ctx.beginPath();
        ctx.arc(x, y, CELL * 0.22, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function showGameOver() {
        const container = document.getElementById('tron-container');
        if (!container) return;
        const winner = score1 > score2 ? 'بازیکن ۱ (آبی)' : 'بازیکن ۲ (صورتی)';
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} برنده دوئل: ${winner}!</h2>
            <p>امتیاز نهایی: <strong>${score1} - ${score2}</strong></p>
            <button class="btn-primary game-btn" id="tron-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('tron-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }
    
    function resetGame() {
        score1 = 0;
        score2 = 0;
        updateScores();
        const overlay = document.querySelector('#tron-container .game-over-screen');
        if (overlay) overlay.remove();
        resetRound();
    }
    
    setupControls();
    resetGame();
    if (resetBtn) resetBtn.onclick = resetGame;
    gameInterval = setInterval(step, 92);
}

/* ==========================================================================
   10. NEON REVERSI - 2 PLAYER STRATEGIC BOARD GAME
   ========================================================================== */
function initNeonReversi() {
    const gridEl = document.getElementById('reversi-grid');
    if (!gridEl) return;
    
    const SIZE = 8;
    let board = [];
    let currentPlayer = 1;
    let gameActive = true;
    let validMap = new Map();
    
    const turnEl = document.getElementById('reversi-turn');
    const score1El = document.getElementById('rev-score1');
    const score2El = document.getElementById('rev-score2');
    const statusEl = document.getElementById('reversi-status');
    const resetBtn = document.getElementById('reversi-reset-btn');
    
    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];
    
    function initBoard() {
        board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
        board[3][3] = 2;
        board[3][4] = 1;
        board[4][3] = 1;
        board[4][4] = 2;
        currentPlayer = 1;
        gameActive = true;
        if (statusEl) statusEl.textContent = 'روی خانه‌های سبز لمس/کلیک کنید؛ مهره‌های بین دو مهره شما برمی‌گردند.';
    }
    
    function render() {
        validMap = getValidMoves(currentPlayer);
        gridEl.innerHTML = '';
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                const cell = document.createElement('div');
                const key = `${r}-${c}`;
                cell.className = 'reversi-cell';
                if (validMap.has(key) && gameActive) cell.classList.add('valid');
                cell.dataset.r = r;
                cell.dataset.c = c;
                if (board[r][c] !== 0) {
                    const disc = document.createElement('div');
                    disc.className = `reversi-disc player${board[r][c]}`;
                    cell.appendChild(disc);
                }
                cell.addEventListener('click', () => handleMove(r, c));
                gridEl.appendChild(cell);
            }
        }
        updateInfo();
    }
    
    function inBounds(r, c) {
        return r >= 0 && r < SIZE && c >= 0 && c < SIZE;
    }
    
    function getFlipsForMove(r, c, player) {
        if (board[r][c] !== 0) return [];
        const opponent = player === 1 ? 2 : 1;
        let flips = [];
        
        for (const [dr, dc] of dirs) {
            let rr = r + dr;
            let cc = c + dc;
            let path = [];
            while (inBounds(rr, cc) && board[rr][cc] === opponent) {
                path.push([rr, cc]);
                rr += dr;
                cc += dc;
            }
            if (path.length && inBounds(rr, cc) && board[rr][cc] === player) {
                flips = flips.concat(path);
            }
        }
        return flips;
    }
    
    function getValidMoves(player) {
        const map = new Map();
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                const flips = getFlipsForMove(r, c, player);
                if (flips.length) map.set(`${r}-${c}`, flips);
            }
        }
        return map;
    }
    
    function handleMove(r, c) {
        if (!gameActive) return;
        const key = `${r}-${c}`;
        if (!validMap.has(key)) return;
        
        board[r][c] = currentPlayer;
        validMap.get(key).forEach(([fr, fc]) => {
            board[fr][fc] = currentPlayer;
        });
        
        switchTurnOrEnd();
        render();
    }
    
    function switchTurnOrEnd() {
        const nextPlayer = currentPlayer === 1 ? 2 : 1;
        const nextMoves = getValidMoves(nextPlayer);
        if (nextMoves.size > 0) {
            currentPlayer = nextPlayer;
            if (statusEl) statusEl.textContent = 'نوبت بازیکن بعدی است.';
            return;
        }
        
        const currentMoves = getValidMoves(currentPlayer);
        if (currentMoves.size > 0) {
            if (statusEl) statusEl.textContent = 'حریف حرکت مجاز ندارد؛ نوبت شما ادامه دارد.';
            return;
        }
        
        gameActive = false;
        setTimeout(showGameOver, 350);
    }
    
    function countDiscs() {
        let p1 = 0, p2 = 0;
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                if (board[r][c] === 1) p1++;
                if (board[r][c] === 2) p2++;
            }
        }
        return { p1, p2 };
    }
    
    function updateInfo() {
        const { p1, p2 } = countDiscs();
        if (score1El) score1El.textContent = p1;
        if (score2El) score2El.textContent = p2;
        if (turnEl) {
            const color = currentPlayer === 1 ? '#f472b6' : '#38bdf8';
            const name = currentPlayer === 1 ? 'بازیکن ۱ (صورتی)' : 'بازیکن ۲ (آبی)';
            turnEl.style.color = color;
            turnEl.innerHTML = `<div style="width:20px; height:20px; border-radius:50%; background:${color}; box-shadow:0 0 10px ${color};"></div>${name}`;
        }
    }
    
    function showGameOver() {
        const container = document.getElementById('reversi-container');
        if (!container) return;
        const { p1, p2 } = countDiscs();
        let title;
        if (p1 === p2) title = 'بازی مساوی شد!';
        else title = `برنده بازی: ${p1 > p2 ? 'بازیکن ۱ (صورتی)' : 'بازیکن ۲ (آبی)'}!`;
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} ${title}</h2>
            <p>تعداد مهره‌ها: صورتی (${p1}) - آبی (${p2})</p>
            <button class="btn-primary game-btn" id="reversi-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('reversi-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }
    
    function resetGame() {
        const overlay = document.querySelector('#reversi-container .game-over-screen');
        if (overlay) overlay.remove();
        initBoard();
        render();
    }
    
    resetGame();
    if (resetBtn) resetBtn.onclick = resetGame;
}

/* ==========================================================================
   11. NEON SOCCER - 2 PLAYER ARCADE SOCCER
   ========================================================================== */
function initNeonSoccer() {
    const canvas = document.getElementById('soccer-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const GOAL_TOP = 155;
    const GOAL_BOTTOM = HEIGHT - 155;
    const WIN_SCORE = 5;
    
    let p1 = { x: 180, y: HEIGHT / 2, r: 24, speed: 5.8, color: '#38bdf8', score: 0 };
    let p2 = { x: WIDTH - 180, y: HEIGHT / 2, r: 24, speed: 5.8, color: '#f472b6', score: 0 };
    let ball = { x: WIDTH / 2, y: HEIGHT / 2, r: 15, vx: 0, vy: 0 };
    let keys = {};
    let gameRunning = true;
    let particles = [];
    let ballTrail = [];
    let touchTargets = { 1: null, 2: null };
    let touchOwners = new Map();
    
    const score1El = document.getElementById('soccer-score1');
    const score2El = document.getElementById('soccer-score2');
    const resetBtn = document.getElementById('soccer-reset-btn');
    
    function setupControls() {
        window.addEventListener('keydown', (e) => {
            if (!document.getElementById('soccer-canvas')) return;
            const k = e.key.toLowerCase();
            keys[k] = true;
            if (['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(k)) e.preventDefault();
        });
        window.addEventListener('keyup', (e) => {
            keys[e.key.toLowerCase()] = false;
        });
        
        // Drag on the canvas: touch left half for player 1 and right half for player 2
        canvas.addEventListener('touchstart', handleCanvasTouch, { passive: false });
        canvas.addEventListener('touchmove', handleCanvasTouch, { passive: false });
        canvas.addEventListener('touchend', clearCanvasTouch, { passive: false });
        canvas.addEventListener('touchcancel', clearCanvasTouch, { passive: false });
        
        // D-pad touch buttons
        document.querySelectorAll('#soccer-container [data-soccer-key]').forEach(btn => {
            const keyName = btn.getAttribute('data-soccer-key');
            const press = (e) => {
                e.preventDefault();
                keys[keyName] = true;
                btn.classList.add('active');
            };
            const release = (e) => {
                if (e) e.preventDefault();
                keys[keyName] = false;
                btn.classList.remove('active');
            };
            btn.addEventListener('pointerdown', press);
            btn.addEventListener('pointerup', release);
            btn.addEventListener('pointercancel', release);
            btn.addEventListener('pointerleave', release);
        });
    }
    
    function getCanvasPoint(touch) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (touch.clientX - rect.left) * (WIDTH / rect.width),
            y: (touch.clientY - rect.top) * (HEIGHT / rect.height)
        };
    }
    
    function handleCanvasTouch(e) {
        e.preventDefault();
        for (const t of e.changedTouches) {
            const pos = getCanvasPoint(t);
            let owner = touchOwners.get(t.identifier);
            if (!owner) {
                owner = pos.x < WIDTH / 2 ? 1 : 2;
                touchOwners.set(t.identifier, owner);
            }
            touchTargets[owner] = pos;
        }
    }
    
    function clearCanvasTouch(e) {
        e.preventDefault();
        for (const t of e.changedTouches) {
            const owner = touchOwners.get(t.identifier);
            touchOwners.delete(t.identifier);
            if (owner && ![...touchOwners.values()].includes(owner)) {
                touchTargets[owner] = null;
            }
        }
    }
    
    function spawnParticles(x, y, color, count = 12) {
        for (let i = 0; i < count; i++) {
            particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 7,
                vy: (Math.random() - 0.5) * 7,
                radius: Math.random() * 3 + 1,
                alpha: 1,
                color
            });
        }
    }
    
    function movePlayer(player, dx, dy) {
        if (dx === 0 && dy === 0) return;
        const len = Math.hypot(dx, dy) || 1;
        player.x += (dx / len) * player.speed;
        player.y += (dy / len) * player.speed;
        player.x = Math.max(player.r, Math.min(WIDTH - player.r, player.x));
        player.y = Math.max(player.r, Math.min(HEIGHT - player.r, player.y));
    }
    
    function updatePlayers() {
        let dx1 = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
        let dy1 = (keys['s'] ? 1 : 0) - (keys['w'] ? 1 : 0);
        let dx2 = (keys['arrowright'] ? 1 : 0) - (keys['arrowleft'] ? 1 : 0);
        let dy2 = (keys['arrowdown'] ? 1 : 0) - (keys['arrowup'] ? 1 : 0);
        
        const t1 = touchVector(p1, touchTargets[1]);
        const t2 = touchVector(p2, touchTargets[2]);
        dx1 += t1.dx; dy1 += t1.dy;
        dx2 += t2.dx; dy2 += t2.dy;
        
        movePlayer(p1, dx1, dy1);
        movePlayer(p2, dx2, dy2);
        keepPlayersApart();
    }
    
    function touchVector(player, target) {
        if (!target) return { dx: 0, dy: 0 };
        const dx = target.x - player.x;
        const dy = target.y - player.y;
        if (Math.hypot(dx, dy) < player.r * 0.45) return { dx: 0, dy: 0 };
        return { dx, dy };
    }
    
    function keepPlayersApart() {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy) || 1;
        const minDist = p1.r + p2.r;
        if (dist < minDist) {
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;
            p1.x -= nx * overlap;
            p1.y -= ny * overlap;
            p2.x += nx * overlap;
            p2.y += ny * overlap;
        }
    }
    
    function handleBallCollision(player) {
        const dx = ball.x - player.x;
        const dy = ball.y - player.y;
        const dist = Math.hypot(dx, dy) || 1;
        const minDist = ball.r + player.r;
        if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;
            ball.x += nx * overlap;
            ball.y += ny * overlap;
            
            let kick = 6.8;
            const movingFast = Math.abs(ball.vx) + Math.abs(ball.vy) > 7;
            if (movingFast) kick = 7.6;
            ball.vx = nx * kick + (player.lastDx || 0) * 0.45;
            ball.vy = ny * kick + (player.lastDy || 0) * 0.45;
            spawnParticles(ball.x, ball.y, player.color, 10);
        }
    }
    
    function update() {
        if (!gameRunning) return;
        const oldP1 = { x: p1.x, y: p1.y };
        const oldP2 = { x: p2.x, y: p2.y };
        updatePlayers();
        p1.lastDx = p1.x - oldP1.x; p1.lastDy = p1.y - oldP1.y;
        p2.lastDx = p2.x - oldP2.x; p2.lastDy = p2.y - oldP2.y;
        
        handleBallCollision(p1);
        handleBallCollision(p2);
        
        ballTrail.push({ x: ball.x, y: ball.y });
        if (ballTrail.length > 11) ballTrail.shift();
        
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx *= 0.985;
        ball.vy *= 0.985;
        if (Math.abs(ball.vx) < 0.025) ball.vx = 0;
        if (Math.abs(ball.vy) < 0.025) ball.vy = 0;
        
        if (ball.y - ball.r < 0 || ball.y + ball.r > HEIGHT) {
            ball.vy = -ball.vy * 0.9;
            ball.y = Math.max(ball.r, Math.min(HEIGHT - ball.r, ball.y));
            spawnParticles(ball.x, ball.y, '#10b981', 8);
        }
        
        if (ball.x - ball.r < 0) {
            if (ball.y > GOAL_TOP && ball.y < GOAL_BOTTOM) {
                p2.score++;
                updateScores();
                spawnParticles(ball.x, ball.y, '#f472b6', 30);
                checkWin();
                resetPositions(-1);
            } else {
                ball.vx = -ball.vx * 0.9;
                ball.x = ball.r;
                spawnParticles(ball.x, ball.y, '#38bdf8', 8);
            }
        }
        
        if (ball.x + ball.r > WIDTH) {
            if (ball.y > GOAL_TOP && ball.y < GOAL_BOTTOM) {
                p1.score++;
                updateScores();
                spawnParticles(ball.x, ball.y, '#38bdf8', 30);
                checkWin();
                resetPositions(1);
            } else {
                ball.vx = -ball.vx * 0.9;
                ball.x = WIDTH - ball.r;
                spawnParticles(ball.x, ball.y, '#f472b6', 8);
            }
        }
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const part = particles[i];
            part.x += part.vx;
            part.y += part.vy;
            part.alpha -= 0.045;
            if (part.alpha <= 0) particles.splice(i, 1);
        }
    }
    
    function updateScores() {
        if (score1El) score1El.textContent = p1.score;
        if (score2El) score2El.textContent = p2.score;
    }
    
    function resetPositions(direction = 0) {
        touchTargets = { 1: null, 2: null };
        touchOwners.clear();
        p1.x = 180; p1.y = HEIGHT / 2;
        p2.x = WIDTH - 180; p2.y = HEIGHT / 2;
        ball.x = WIDTH / 2;
        ball.y = HEIGHT / 2;
        ball.vx = direction * 4;
        ball.vy = (Math.random() - 0.5) * 3;
        ballTrail = [];
    }
    
    function checkWin() {
        if (p1.score >= WIN_SCORE || p2.score >= WIN_SCORE) {
            gameRunning = false;
            const winner = p1.score >= WIN_SCORE ? 'بازیکن ۱ (آبی)' : 'بازیکن ۲ (صورتی)';
            setTimeout(() => {
                const container = document.getElementById('soccer-container');
                if (!container) return;
                const overlay = document.createElement('div');
                overlay.className = 'game-over-screen';
                overlay.innerHTML = `
                    <h2>${ICONS.trophy} برنده مسابقه: ${winner}!</h2>
                    <p>نتیجه نهایی: <strong>${p1.score} - ${p2.score}</strong></p>
                    <button class="btn-primary game-btn" id="soccer-restart-final">شروع دوباره</button>
                `;
                container.style.position = 'relative';
                container.appendChild(overlay);
                document.getElementById('soccer-restart-final').onclick = () => {
                    overlay.remove();
                    resetGame();
                };
            }, 550);
        }
    }
    
    function drawField() {
        const grad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
        grad.addColorStop(0, '#06281c');
        grad.addColorStop(0.5, '#0f3b2c');
        grad.addColorStop(1, '#052117');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.lineWidth = 1;
        for (let x = 0; x < WIDTH; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke(); }
        for (let y = 0; y < HEIGHT; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }
        
        ctx.strokeStyle = 'rgba(248,250,252,0.55)';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(WIDTH / 2, 0); ctx.lineTo(WIDTH / 2, HEIGHT); ctx.stroke();
        ctx.beginPath(); ctx.arc(WIDTH / 2, HEIGHT / 2, 80, 0, Math.PI * 2); ctx.stroke();
        
        ctx.fillStyle = 'rgba(56,189,248,0.15)';
        ctx.fillRect(0, GOAL_TOP, 16, GOAL_BOTTOM - GOAL_TOP);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 4;
        ctx.strokeRect(0, GOAL_TOP, 22, GOAL_BOTTOM - GOAL_TOP);
        
        ctx.fillStyle = 'rgba(244,114,182,0.15)';
        ctx.fillRect(WIDTH - 16, GOAL_TOP, 16, GOAL_BOTTOM - GOAL_TOP);
        ctx.strokeStyle = '#f472b6';
        ctx.strokeRect(WIDTH - 22, GOAL_TOP, 22, GOAL_BOTTOM - GOAL_TOP);
    }
    
    function drawPlayer(player, label) {
        ctx.shadowBlur = 18;
        ctx.shadowColor = player.color;
        ctx.fillStyle = player.color;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#0b0f19';
        ctx.font = 'bold 15px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, player.x, player.y + 1);
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.r - 3, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    function drawBall() {
        ballTrail.forEach((pos, idx) => {
            ctx.fillStyle = `rgba(248,250,252,${(idx / ballTrail.length) * 0.25})`;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, ball.r * (idx / ballTrail.length), 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.shadowBlur = 16;
        ctx.shadowColor = '#f8fafc';
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r * 0.55, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(ball.x - ball.r, ball.y);
        ctx.lineTo(ball.x + ball.r, ball.y);
        ctx.stroke();
    }
    
    function draw() {
        drawField();
        particles.forEach(part => {
            ctx.globalAlpha = part.alpha;
            ctx.fillStyle = part.color;
            ctx.beginPath();
            ctx.arc(part.x, part.y, part.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        drawBall();
        drawPlayer(p1, 'P1');
        drawPlayer(p2, 'P2');
    }
    
    function gameLoop() {
        if (!document.getElementById('soccer-canvas')) return;
        update();
        draw();
        if (gameRunning) requestAnimationFrame(gameLoop);
    }
    
    function resetGame() {
        p1.score = 0;
        p2.score = 0;
        particles = [];
        updateScores();
        const overlay = document.querySelector('#soccer-container .game-over-screen');
        if (overlay) overlay.remove();
        resetPositions(0);
        gameRunning = true;
        requestAnimationFrame(gameLoop);
    }
    
    setupControls();
    if (resetBtn) resetBtn.onclick = resetGame;
    resetGame();
}

/* ==========================================================================
   12. SUMO ARENA - TOUCH DRAG TWO PLAYER PUSH BATTLE
   ========================================================================== */
function initSumoArena() {
    const canvas = document.getElementById('sumo-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const ring = { x: WIDTH / 2, y: HEIGHT / 2, r: 185 };
    const WIN_SCORE = 5;

    let p1, p2;
    let score1 = 0;
    let score2 = 0;
    let gameRunning = true;
    let roundActive = true;
    let keys = {};
    let touchTargets = { 1: null, 2: null };
    let touchOwners = new Map();
    let particles = [];

    const score1El = document.getElementById('sumo-score1');
    const score2El = document.getElementById('sumo-score2');
    const statusEl = document.getElementById('sumo-status');
    const resetBtn = document.getElementById('sumo-reset-btn');

    function createPlayer(x, y, color) {
        return { x, y, vx: 0, vy: 0, r: 24, color, boost: 0 };
    }

    function setStatus(text, color = '#f8fafc') {
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.style.color = color;
    }

    function setupControls() {
        window.addEventListener('keydown', (e) => {
            if (!document.getElementById('sumo-canvas')) return;
            const k = e.key.toLowerCase();
            keys[k] = true;
            if (['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(k)) e.preventDefault();
        });
        window.addEventListener('keyup', (e) => {
            keys[e.key.toLowerCase()] = false;
        });

        canvas.addEventListener('touchstart', handleTouch, { passive: false });
        canvas.addEventListener('touchmove', handleTouch, { passive: false });
        canvas.addEventListener('touchend', clearTouch, { passive: false });
        canvas.addEventListener('touchcancel', clearTouch, { passive: false });
    }

    function canvasPoint(touch) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (touch.clientX - rect.left) * (WIDTH / rect.width),
            y: (touch.clientY - rect.top) * (HEIGHT / rect.height)
        };
    }

    function handleTouch(e) {
        e.preventDefault();
        for (const t of e.changedTouches) {
            const pos = canvasPoint(t);
            let owner = touchOwners.get(t.identifier);
            if (!owner) {
                owner = pos.x < WIDTH / 2 ? 1 : 2;
                touchOwners.set(t.identifier, owner);
            }
            touchTargets[owner] = pos;
        }
    }

    function clearTouch(e) {
        e.preventDefault();
        for (const t of e.changedTouches) {
            const owner = touchOwners.get(t.identifier);
            touchOwners.delete(t.identifier);
            if (owner && ![...touchOwners.values()].includes(owner)) touchTargets[owner] = null;
        }
    }

    function resetRound() {
        p1 = createPlayer(ring.x - 72, ring.y, '#38bdf8');
        p2 = createPlayer(ring.x + 72, ring.y, '#f472b6');
        touchTargets = { 1: null, 2: null };
        touchOwners.clear();
        particles = [];
        roundActive = true;
        setStatus('حریف را از رینگ انرژی بیرون بیندازید!', '#f8fafc');
    }

    function movePlayer(p, dx, dy) {
        if (!roundActive) return;
        if (dx !== 0 || dy !== 0) {
            const len = Math.hypot(dx, dy) || 1;
            p.vx += (dx / len) * 0.42;
            p.vy += (dy / len) * 0.42;
        }
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 7.2) {
            p.vx = (p.vx / speed) * 7.2;
            p.vy = (p.vy / speed) * 7.2;
        }
    }

    function touchVector(p, target) {
        if (!target) return { dx: 0, dy: 0 };
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        if (Math.hypot(dx, dy) < 16) return { dx: 0, dy: 0 };
        return { dx, dy };
    }

    function updateInput() {
        let dx1 = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
        let dy1 = (keys['s'] ? 1 : 0) - (keys['w'] ? 1 : 0);
        let dx2 = (keys['arrowright'] ? 1 : 0) - (keys['arrowleft'] ? 1 : 0);
        let dy2 = (keys['arrowdown'] ? 1 : 0) - (keys['arrowup'] ? 1 : 0);
        const t1 = touchVector(p1, touchTargets[1]);
        const t2 = touchVector(p2, touchTargets[2]);
        movePlayer(p1, dx1 + t1.dx, dy1 + t1.dy);
        movePlayer(p2, dx2 + t2.dx, dy2 + t2.dy);
    }

    function spawnSparks(x, y, color, count = 12) {
        for (let i = 0; i < count; i++) {
            particles.push({ x, y, vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6, r: Math.random() * 3 + 1, color, a: 1 });
        }
    }

    function collidePlayers() {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy) || 1;
        const minDist = p1.r + p2.r;
        if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;
            p1.x -= nx * overlap / 2;
            p1.y -= ny * overlap / 2;
            p2.x += nx * overlap / 2;
            p2.y += ny * overlap / 2;

            const push = 1.55;
            p1.vx -= nx * push;
            p1.vy -= ny * push;
            p2.vx += nx * push;
            p2.vy += ny * push;
            spawnSparks((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, '#f59e0b', 8);
        }
    }

    function updateScores() {
        if (score1El) score1El.textContent = score1;
        if (score2El) score2El.textContent = score2;
    }

    function endRound(winner) {
        roundActive = false;
        if (winner === 1) {
            score1++;
            setStatus('بازیکن ۱ این راند را برد!', '#38bdf8');
        } else {
            score2++;
            setStatus('بازیکن ۲ این راند را برد!', '#f472b6');
        }
        updateScores();
        if (score1 >= WIN_SCORE || score2 >= WIN_SCORE) {
            setTimeout(showGameOver, 650);
        } else {
            setTimeout(resetRound, 950);
        }
    }

    function checkOut() {
        const d1 = Math.hypot(p1.x - ring.x, p1.y - ring.y);
        const d2 = Math.hypot(p2.x - ring.x, p2.y - ring.y);
        if (d1 > ring.r - p1.r) endRound(2);
        else if (d2 > ring.r - p2.r) endRound(1);
    }

    function update() {
        if (!gameRunning) return;
        if (roundActive) {
            updateInput();
            p1.x += p1.vx; p1.y += p1.vy;
            p2.x += p2.vx; p2.y += p2.vy;
            p1.vx *= 0.93; p1.vy *= 0.93;
            p2.vx *= 0.93; p2.vy *= 0.93;
            collidePlayers();
            checkOut();
        }
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].x += particles[i].vx;
            particles[i].y += particles[i].vy;
            particles[i].a -= 0.045;
            if (particles[i].a <= 0) particles.splice(i, 1);
        }
    }

    function drawPlayer(p, label) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#0b0f19';
        ctx.font = 'bold 15px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, p.x, p.y + 1);
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r - 4, 0, Math.PI * 2);
        ctx.stroke();
    }

    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= WIDTH; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke(); }
        for (let y = 0; y <= HEIGHT; y += 36) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }

        ctx.shadowBlur = 24;
        ctx.shadowColor = '#f43f5e';
        ctx.fillStyle = 'rgba(244, 63, 94, 0.08)';
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#f43f5e';
        ctx.stroke();
        ctx.shadowBlur = 0;

        particles.forEach(pt => {
            ctx.globalAlpha = pt.a;
            ctx.fillStyle = pt.color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        drawPlayer(p1, 'P1');
        drawPlayer(p2, 'P2');
    }

    function showGameOver() {
        const container = document.getElementById('sumo-container');
        if (!container) return;
        const winner = score1 > score2 ? 'بازیکن ۱ (آبی)' : 'بازیکن ۲ (صورتی)';
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} قهرمان سومو: ${winner}!</h2>
            <p>امتیاز نهایی: <strong>${score1} - ${score2}</strong></p>
            <button class="btn-primary game-btn" id="sumo-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('sumo-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }

    function gameLoop() {
        if (!document.getElementById('sumo-canvas')) return;
        update();
        draw();
        if (gameRunning) requestAnimationFrame(gameLoop);
    }

    function resetGame() {
        const overlay = document.querySelector('#sumo-container .game-over-screen');
        if (overlay) overlay.remove();
        score1 = 0;
        score2 = 0;
        updateScores();
        gameRunning = true;
        resetRound();
        requestAnimationFrame(gameLoop);
    }

    setupControls();
    if (resetBtn) resetBtn.onclick = resetGame;
    resetGame();
}

/* ==========================================================================
   13. REACTION DUEL - TOUCH FIRST GREEN LIGHT WINS
   ========================================================================== */
function initReactionDuel() {
    const container = document.getElementById('reaction-container');
    if (!container) return;

    const p1Btn = document.getElementById('reaction-p1');
    const p2Btn = document.getElementById('reaction-p2');
    const lightEl = document.getElementById('reaction-light');
    const statusEl = document.getElementById('reaction-status');
    const score1El = document.getElementById('reaction-score1');
    const score2El = document.getElementById('reaction-score2');
    const resetBtn = document.getElementById('reaction-reset-btn');

    let score1 = 0;
    let score2 = 0;
    let ready = false;
    let roundLocked = false;
    let timeoutId = null;
    const WIN_SCORE = 5;

    function updateScores() {
        if (score1El) score1El.textContent = score1;
        if (score2El) score2El.textContent = score2;
    }

    function setStatus(text, color = '#f8fafc') {
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.style.color = color;
    }

    function startRound() {
        if (!document.getElementById('reaction-container')) return;
        clearTimeout(timeoutId);
        ready = false;
        roundLocked = false;
        lightEl.className = 'reaction-light waiting';
        setStatus('صبر کنید... وقتی چراغ سبز شد لمس کنید!', '#f59e0b');
        const delay = 1200 + Math.random() * 2600;
        timeoutId = setTimeout(() => {
            ready = true;
            lightEl.className = 'reaction-light ready';
            setStatus('حالا! سریع لمس کن!', '#22c55e');
        }, delay);
    }

    function award(player, reason) {
        if (roundLocked) return;
        roundLocked = true;
        clearTimeout(timeoutId);
        lightEl.className = 'reaction-light';
        if (player === 1) {
            score1++;
            setStatus(reason || 'بازیکن ۱ سریع‌تر بود!', '#38bdf8');
            p1Btn.classList.add('active');
        } else {
            score2++;
            setStatus(reason || 'بازیکن ۲ سریع‌تر بود!', '#f472b6');
            p2Btn.classList.add('active');
        }
        updateScores();
        setTimeout(() => {
            p1Btn.classList.remove('active');
            p2Btn.classList.remove('active');
        }, 180);

        if (score1 >= WIN_SCORE || score2 >= WIN_SCORE) {
            setTimeout(showGameOver, 600);
        } else {
            setTimeout(startRound, 1050);
        }
    }

    function press(player) {
        if (roundLocked) return;
        if (!ready) {
            award(player === 1 ? 2 : 1, `بازیکن ${player} زودتر لمس کرد و راند را باخت!`);
            return;
        }
        award(player);
    }

    function showGameOver() {
        const winner = score1 > score2 ? 'بازیکن ۱' : 'بازیکن ۲';
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} برنده دوئل: ${winner}!</h2>
            <p>امتیاز نهایی: <strong>${score1} - ${score2}</strong></p>
            <button class="btn-primary game-btn" id="reaction-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('reaction-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }

    function resetGame() {
        const overlay = document.querySelector('#reaction-container .game-over-screen');
        if (overlay) overlay.remove();
        clearTimeout(timeoutId);
        score1 = 0;
        score2 = 0;
        updateScores();
        startRound();
    }

    p1Btn.addEventListener('pointerdown', (e) => { e.preventDefault(); press(1); });
    p2Btn.addEventListener('pointerdown', (e) => { e.preventDefault(); press(2); });
    window.addEventListener('keydown', (e) => {
        if (!document.getElementById('reaction-container')) return;
        const k = e.key.toLowerCase();
        if (k === 'a') { e.preventDefault(); press(1); }
        if (k === 'l') { e.preventDefault(); press(2); }
    });
    if (resetBtn) resetBtn.onclick = resetGame;
    resetGame();
}

/* ==========================================================================
   14. DOTS & BOXES - TOUCH/CANVAS STRATEGIC LINE GAME
   ========================================================================== */
function initDotsBoxes() {
    const canvas = document.getElementById('dots-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const N = 4; // boxes per side
    const margin = 70;
    const gap = (WIDTH - margin * 2) / N;
    const threshold = 20;

    let hLines, vLines, boxes;
    let currentPlayer = 1;
    let score1 = 0;
    let score2 = 0;
    let gameActive = true;

    const score1El = document.getElementById('dots-score1');
    const score2El = document.getElementById('dots-score2');
    const turnEl = document.getElementById('dots-turn');
    const resetBtn = document.getElementById('dots-reset-btn');

    function resetGame() {
        hLines = Array.from({ length: N + 1 }, () => Array(N).fill(0));
        vLines = Array.from({ length: N }, () => Array(N + 1).fill(0));
        boxes = Array.from({ length: N }, () => Array(N).fill(0));
        currentPlayer = 1;
        score1 = 0;
        score2 = 0;
        gameActive = true;
        const overlay = document.querySelector('#dots-container .game-over-screen');
        if (overlay) overlay.remove();
        updateInfo();
        draw();
    }

    function updateInfo() {
        if (score1El) score1El.textContent = score1;
        if (score2El) score2El.textContent = score2;
        if (turnEl) {
            const color = currentPlayer === 1 ? '#38bdf8' : '#f472b6';
            turnEl.style.color = color;
            turnEl.textContent = `نوبت بازیکن ${currentPlayer}: یک خط را لمس کنید`;
        }
    }

    function point(r, c) {
        return { x: margin + c * gap, y: margin + r * gap };
    }

    function draw() {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= WIDTH; x += 35) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke(); }
        for (let y = 0; y <= HEIGHT; y += 35) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke(); }

        // claimed boxes
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                if (!boxes[r][c]) continue;
                const p = point(r, c);
                ctx.fillStyle = boxes[r][c] === 1 ? 'rgba(56,189,248,0.18)' : 'rgba(244,114,182,0.18)';
                ctx.fillRect(p.x + 8, p.y + 8, gap - 16, gap - 16);
                ctx.fillStyle = boxes[r][c] === 1 ? '#38bdf8' : '#f472b6';
                ctx.font = 'bold 26px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(boxes[r][c] === 1 ? 'P1' : 'P2', p.x + gap / 2, p.y + gap / 2);
            }
        }

        // lines
        ctx.lineCap = 'round';
        for (let r = 0; r <= N; r++) {
            for (let c = 0; c < N; c++) {
                const pA = point(r, c);
                const pB = point(r, c + 1);
                ctx.strokeStyle = hLines[r][c] === 1 ? '#38bdf8' : hLines[r][c] === 2 ? '#f472b6' : 'rgba(148,163,184,0.28)';
                ctx.lineWidth = hLines[r][c] ? 8 : 4;
                ctx.shadowBlur = hLines[r][c] ? 12 : 0;
                ctx.shadowColor = ctx.strokeStyle;
                ctx.beginPath(); ctx.moveTo(pA.x, pA.y); ctx.lineTo(pB.x, pB.y); ctx.stroke();
            }
        }
        for (let r = 0; r < N; r++) {
            for (let c = 0; c <= N; c++) {
                const pA = point(r, c);
                const pB = point(r + 1, c);
                ctx.strokeStyle = vLines[r][c] === 1 ? '#38bdf8' : vLines[r][c] === 2 ? '#f472b6' : 'rgba(148,163,184,0.28)';
                ctx.lineWidth = vLines[r][c] ? 8 : 4;
                ctx.shadowBlur = vLines[r][c] ? 12 : 0;
                ctx.shadowColor = ctx.strokeStyle;
                ctx.beginPath(); ctx.moveTo(pA.x, pA.y); ctx.lineTo(pB.x, pB.y); ctx.stroke();
            }
        }
        ctx.shadowBlur = 0;

        // dots
        for (let r = 0; r <= N; r++) {
            for (let c = 0; c <= N; c++) {
                const p = point(r, c);
                ctx.fillStyle = '#f8fafc';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#6366f1';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    }

    function getPointerPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: (clientX - rect.left) * (WIDTH / rect.width),
            y: (clientY - rect.top) * (HEIGHT / rect.height)
        };
    }

    function nearestLine(x, y) {
        let best = null;
        let bestDist = Infinity;
        for (let r = 0; r <= N; r++) {
            for (let c = 0; c < N; c++) {
                if (hLines[r][c]) continue;
                const a = point(r, c);
                const px = Math.max(a.x, Math.min(a.x + gap, x));
                const py = a.y;
                const d = Math.hypot(x - px, y - py);
                if (d < bestDist) { bestDist = d; best = { type: 'h', r, c }; }
            }
        }
        for (let r = 0; r < N; r++) {
            for (let c = 0; c <= N; c++) {
                if (vLines[r][c]) continue;
                const a = point(r, c);
                const px = a.x;
                const py = Math.max(a.y, Math.min(a.y + gap, y));
                const d = Math.hypot(x - px, y - py);
                if (d < bestDist) { bestDist = d; best = { type: 'v', r, c }; }
            }
        }
        return bestDist <= threshold ? best : null;
    }

    function isBoxComplete(r, c) {
        return hLines[r][c] && hLines[r + 1][c] && vLines[r][c] && vLines[r][c + 1];
    }

    function claimNewBoxes(line) {
        let made = 0;
        const candidates = [];
        if (line.type === 'h') {
            if (line.r > 0) candidates.push([line.r - 1, line.c]);
            if (line.r < N) candidates.push([line.r, line.c]);
        } else {
            if (line.c > 0) candidates.push([line.r, line.c - 1]);
            if (line.c < N) candidates.push([line.r, line.c]);
        }
        candidates.forEach(([r, c]) => {
            if (r >= 0 && r < N && c >= 0 && c < N && !boxes[r][c] && isBoxComplete(r, c)) {
                boxes[r][c] = currentPlayer;
                made++;
            }
        });
        if (made) {
            if (currentPlayer === 1) score1 += made;
            else score2 += made;
        }
        return made;
    }

    function totalBoxes() {
        let count = 0;
        for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (boxes[r][c]) count++;
        return count;
    }

    function handleMove(e) {
        e.preventDefault();
        if (!gameActive) return;
        const pos = getPointerPos(e);
        const line = nearestLine(pos.x, pos.y);
        if (!line) return;
        if (line.type === 'h') hLines[line.r][line.c] = currentPlayer;
        else vLines[line.r][line.c] = currentPlayer;

        const made = claimNewBoxes(line);
        if (!made) currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateInfo();
        draw();

        if (totalBoxes() === N * N) {
            gameActive = false;
            setTimeout(showGameOver, 350);
        }
    }

    function showGameOver() {
        const container = document.getElementById('dots-container');
        if (!container) return;
        let title = score1 === score2 ? 'بازی مساوی شد!' : `برنده بازی: ${score1 > score2 ? 'بازیکن ۱' : 'بازیکن ۲'}!`;
        const overlay = document.createElement('div');
        overlay.className = 'game-over-screen';
        overlay.innerHTML = `
            <h2>${ICONS.trophy} ${title}</h2>
            <p>جعبه‌ها: بازیکن ۱ (${score1}) - بازیکن ۲ (${score2})</p>
            <button class="btn-primary game-btn" id="dots-restart-final">شروع دوباره</button>
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);
        document.getElementById('dots-restart-final').onclick = () => {
            overlay.remove();
            resetGame();
        };
    }

    canvas.addEventListener('click', handleMove);
    canvas.addEventListener('touchstart', handleMove, { passive: false });
    if (resetBtn) resetBtn.onclick = resetGame;
    resetGame();
}
