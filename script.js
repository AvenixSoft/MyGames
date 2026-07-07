/* MyGames - Modern Gaming Platform Styles */

:root {
    --primary: #6366f1;
    --primary-light: #818cf8;
    --primary-dark: #4f46e5;
    --accent: #06b6d4;
    --accent-pink: #ec4899;
    --accent-amber: #f59e0b;
    --accent-emerald: #10b981;
    --success: #10b981;
    --danger: #ef4444;
    --bg-dark: #0b0f19;
    --bg-main: #0f172a;
    --bg-card: rgba(30, 41, 59, 0.75);
    --bg-light: rgba(51, 65, 85, 0.6);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --border: rgba(71, 85, 105, 0.6);
    --border-glow: rgba(99, 102, 241, 0.4);
    --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
    --neon-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Vazirmatn', 'Inter', system-ui, -apple-system, sans-serif;
    background-color: var(--bg-dark);
    background-image: 
        radial-gradient(at 10% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
        radial-gradient(at 90% 80%, rgba(6, 182, 212, 0.12) 0px, transparent 50%),
        radial-gradient(at 50% 50%, rgba(236, 72, 153, 0.08) 0px, transparent 50%);
    background-attachment: fixed;
    color: var(--text-primary);
    line-height: 1.6;
    direction: rtl;
    overflow-x: hidden;
    min-height: 100vh;
}

/* Utility Classes & Icon Sizing */
.hidden {
    display: none !important;
}

.svg-icon {
    display: inline-block;
    vertical-align: middle;
    width: 1.25em;
    height: 1.25em;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.inline-svg {
    display: inline-block;
    vertical-align: middle;
    width: 1.3em;
    height: 1.3em;
    margin-left: 6px;
    filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.3));
}

.key-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(51, 65, 85, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    padding: 2px 8px;
    font-family: monospace;
    font-size: 13px;
    font-weight: bold;
    color: var(--accent);
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    margin: 0 2px;
}

/* Buttons */
.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 12px 28px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
}

.btn-primary::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
}

.btn-primary:hover::after {
    left: 100%;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5), 0 0 15px rgba(6, 182, 212, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-primary.large {
    padding: 16px 42px;
    font-size: 17px;
    border-radius: 16px;
}

.btn-secondary {
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(8px);
    color: var(--text-primary);
    border: 1px solid var(--border);
    padding: 10px 22px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-secondary:hover {
    background: rgba(51, 65, 85, 0.9);
    border-color: var(--primary-light);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary.small {
    padding: 6px 14px;
    font-size: 13px;
    border-radius: 8px;
}

/* Welcome Screen */
.welcome-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(15, 23, 42, 0.95) 0%, rgba(11, 15, 25, 0.98) 100%);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.welcome-content {
    background: rgba(30, 41, 59, 0.65);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 50px 40px;
    border-radius: 28px;
    max-width: 480px;
    width: 100%;
    text-align: center;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(99, 102, 241, 0.2);
    animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.92) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 24px;
}

.logo-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
    animation: pulseGlow 3s infinite alternate;
}

.logo-icon svg {
    width: 34px;
    height: 34px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

@keyframes pulseGlow {
    0% { box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4); transform: scale(1); }
    100% { box-shadow: 0 15px 35px rgba(6, 182, 212, 0.6); transform: scale(1.05); }
}

.logo h1 {
    font-size: 34px;
    font-weight: 800;
    background: linear-gradient(135deg, #fff 0%, #a5b4fc 50%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
}

.welcome-text h2 {
    font-size: 24px;
    margin-bottom: 8px;
    color: #f8fafc;
    font-weight: 700;
}

.welcome-text p {
    color: var(--text-secondary);
    margin-bottom: 32px;
    font-size: 15px;
}

.name-input-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 30px;
}

#player-name {
    background: rgba(15, 23, 42, 0.8);
    border: 2px solid var(--border);
    padding: 16px 20px;
    border-radius: 14px;
    color: var(--text-primary);
    font-size: 16px;
    font-family: inherit;
    text-align: center;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

#player-name:focus {
    border-color: var(--primary-light);
    background: rgba(15, 23, 42, 0.95);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2), inset 0 2px 4px rgba(0,0,0,0.2);
}

#player-name::placeholder {
    color: #64748b;
}

.welcome-footer p {
    font-size: 13px;
    color: var(--text-secondary);
    opacity: 0.8;
}

/* Main Site */
.main-site {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Navbar */
.navbar {
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.nav-brand .logo-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
}

.nav-brand .logo-icon svg {
    width: 24px;
    height: 24px;
}

.brand-name {
    font-size: 22px;
    font-weight: 800;
    background: linear-gradient(135deg, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: all 0.2s ease;
    position: relative;
    padding: 6px 0;
}

.nav-links a:hover {
    color: var(--text-primary);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transition: width 0.3s ease;
    border-radius: 2px;
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-user {
    display: flex;
    align-items: center;
    gap: 14px;
    background: rgba(30, 41, 59, 0.6);
    padding: 6px 14px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.user-avatar {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--primary), var(--accent-pink));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.user-avatar svg {
    width: 18px;
    height: 18px;
}

#user-name-display {
    font-weight: 600;
    font-size: 14px;
    color: var(--text-primary);
}

/* Hero Section */
.hero {
    max-width: 1200px;
    margin: 40px auto 60px;
    padding: 40px 24px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
}

.hero-content h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.25;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #38bdf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-content p {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 36px;
    max-width: 500px;
    line-height: 1.8;
}

.hero-stats {
    display: flex;
    gap: 24px;
    margin-bottom: 40px;
}

.stat {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 16px 24px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.stat:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.4);
}

.stat-number {
    font-size: 28px;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--primary-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
}

.stat-number svg {
    width: 28px;
    height: 28px;
    stroke: var(--accent);
}

.stat-label {
    font-size: 13px;
    color: var(--text-secondary);
    margin-top: 4px;
    font-weight: 500;
}

.hero-visual {
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-games {
    position: relative;
    width: 320px;
    height: 320px;
}

.float-card {
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgba(30, 41, 59, 0.85);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.2);
    animation: float 6s ease-in-out infinite;
    color: var(--accent);
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.float-card svg {
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 2px 8px rgba(6, 182, 212, 0.4));
}

.float-card:hover {
    transform: scale(1.15) !important;
    border-color: var(--accent);
    z-index: 10;
}

.float-card:nth-child(1) {
    top: 5%;
    left: 10%;
    animation-delay: 0s;
    color: #38bdf8;
}

.float-card:nth-child(2) {
    top: 15%;
    right: 5%;
    animation-delay: -1.2s;
    color: #ec4899;
}

.float-card:nth-child(3) {
    bottom: 10%;
    left: 20%;
    animation-delay: -2.4s;
    color: #10b981;
}

.float-card:nth-child(4) {
    bottom: 20%;
    right: 15%;
    animation-delay: -3.6s;
    color: #f59e0b;
}

.float-card:nth-child(5) {
    top: 45%;
    left: 40%;
    animation-delay: -4.8s;
    color: #a855f7;
    width: 90px;
    height: 90px;
}

.float-card:nth-child(5) svg {
    width: 46px;
    height: 46px;
}

.float-card:nth-child(6) {
    top: 75%;
    left: 8%;
    animation-delay: -1.5s;
    color: #ef4444;
}

.float-card:nth-child(7) {
    top: 5%;
    left: 55%;
    animation-delay: -3.5s;
    color: #6366f1;
}

.float-card:nth-child(8) {
    bottom: 12%;
    right: 40%;
    animation-delay: -2.5s;
    color: #14b8a6;
    width: 75px;
    height: 75px;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(4deg); }
}

/* Games Section */
.games-section {
    max-width: 1200px;
    margin: 0 auto 80px;
    padding: 0 24px;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.section-header p {
    color: var(--text-secondary);
    font-size: 17px;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
}

.game-card {
    background: rgba(30, 41, 59, 0.65);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
}

.game-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(99, 102, 241, 0.15), transparent 40%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 1;
}

.game-card:hover::before {
    opacity: 1;
}

.game-card:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.2);
}

.game-image {
    height: 180px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.air-hockey-img { background: radial-gradient(circle at center, #1e40af, #0f172a); }
.tictactoe-img { background: radial-gradient(circle at center, #6b21a8, #0f172a); }
.snake-img { background: radial-gradient(circle at center, #15803d, #0f172a); }
.memory-img { background: radial-gradient(circle at center, #a16207, #0f172a); }
.flappy-img { background: radial-gradient(circle at center, #0284c7, #0f172a); }
.pong-img { background: radial-gradient(circle at center, #991b1b, #0f172a); }
.connect4-img { background: radial-gradient(circle at center, #4338ca, #0f172a); }
.tanks-img { background: radial-gradient(circle at center, #0f766e, #0f172a); }
.tron-img { background: radial-gradient(circle at center, #0e7490, #0f172a); }
.reversi-img { background: radial-gradient(circle at center, #7c3aed, #0f172a); }
.soccer-img { background: radial-gradient(circle at center, #16a34a, #0f172a); }

.game-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.game-icon {
    width: 80px;
    height: 80px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 2;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.game-icon svg {
    width: 44px;
    height: 44px;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
}

.game-card:hover .game-icon {
    transform: scale(1.15) rotate(5deg);
}

.game-info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    z-index: 2;
}

.game-info h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-primary);
}

.game-info p {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 20px;
    flex: 1;
    line-height: 1.7;
}

.game-meta {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: var(--text-secondary);
    font-weight: 500;
}

.meta-item svg {
    width: 16px;
    height: 16px;
    stroke: var(--accent);
}

.game-btn {
    width: 100%;
    padding: 14px;
    font-size: 15px;
    border-radius: 14px;
}

/* About Section */
.about-section {
    max-width: 1200px;
    margin: 0 auto 80px;
    padding: 60px 30px;
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 30px;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-text p {
    color: var(--text-secondary);
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.8;
}

.about-features {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.feature {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 20px;
    border-radius: 18px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature:hover {
    transform: translateX(-6px);
    border-color: rgba(99, 102, 241, 0.4);
    background: rgba(15, 23, 42, 0.8);
}

.feature-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.2));
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
}

.feature-icon svg {
    width: 24px;
    height: 24px;
}

.feature h4 {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--text-primary);
}

.feature p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
}

/* Footer */
.footer {
    background: rgba(11, 15, 25, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 40px 24px;
    margin-top: auto;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
}

.footer-brand .logo-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
}

.footer-brand .logo-icon svg {
    width: 20px;
    height: 20px;
}

.footer p {
    color: var(--text-secondary);
    font-size: 14px;
}

.footer-links {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    font-size: 14px;
}

.heart-svg {
    width: 18px;
    height: 18px;
    color: #ef4444;
    display: inline-block;
    vertical-align: middle;
    animation: heartPulse 1.5s infinite;
}

@keyframes heartPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.25); }
}

/* Responsive */
@media (max-width: 968px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .hero-content p {
        margin: 0 auto 36px;
    }
    .hero-stats {
        justify-content: center;
    }
    .hero-visual {
        height: 300px;
    }
    .about-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .nav-links {
        display: none;
    }
    .hero-content h1 {
        font-size: 34px;
    }
    .games-grid {
        grid-template-columns: 1fr;
    }
    .welcome-content {
        padding: 36px 24px;
    }
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}

/* Game Modal Styles */
.game-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(11, 15, 25, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.game-modal-content {
    background: rgba(26, 35, 50, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    max-width: 900px;
    width: 100%;
    max-height: 94vh;
    overflow-y: auto;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(99, 102, 241, 0.25);
    transform: scale(0.95) translateY(15px);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.game-modal.active {
    opacity: 1;
}

.game-modal.active .game-modal-content {
    transform: scale(1) translateY(0);
}

.game-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 28px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(15, 23, 42, 0.5);
    border-radius: 28px 28px 0 0;
}

.game-modal-header h2 {
    font-size: 22px;
    font-weight: 700;
    display: flex;
    align-items: center;
    color: #f8fafc;
}

.close-modal {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
}

.close-modal:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.5);
    color: #ef4444;
    transform: rotate(90deg);
}

/* Game Container */
.game-container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
}

.game-canvas {
    border: 2px solid rgba(99, 102, 241, 0.4);
    border-radius: 20px;
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(99, 102, 241, 0.15);
    background: #0b0f19;
    image-rendering: crisp-edges;
    max-width: 100%;
    height: auto;
}

.game-info-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 720px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 14px 28px;
    border-radius: 18px;
    font-size: 15px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.score-display {
    display: flex;
    gap: 36px;
    font-weight: 700;
}

.score {
    display: flex;
    align-items: center;
    gap: 12px;
}

.score-label {
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
}

.score-value {
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--primary-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.controls-info {
    font-size: 14px;
    color: var(--text-secondary);
    text-align: center;
    background: rgba(15, 23, 42, 0.5);
    padding: 10px 24px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.game-over-screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(11, 15, 25, 0.94);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    z-index: 100;
    animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.game-over-screen h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 12px;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
}

.game-over-screen p {
    font-size: 18px;
    margin-bottom: 32px;
    color: var(--text-secondary);
}

.game-btn {
    padding: 14px 34px;
    font-size: 16px;
}

/* Tic Tac Toe Styles */
.tic-tac-toe-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 18px;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.05);
}

.tic-cell {
    width: 105px;
    height: 105px;
    background: rgba(30, 41, 59, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
}

.tic-cell:hover {
    background: rgba(51, 65, 85, 0.8);
    border-color: rgba(99, 102, 241, 0.4);
    transform: scale(1.04);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.tic-mark {
    width: 56px;
    height: 56px;
    animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes popIn {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

.tic-cell.x { border-color: rgba(236, 72, 153, 0.3); }
.tic-cell.o { border-color: rgba(6, 182, 212, 0.3); }

.tic-cell.win-cell {
    background: rgba(16, 185, 129, 0.2);
    border-color: #10b981;
    box-shadow: 0 0 25px rgba(16, 185, 129, 0.5);
    animation: pulseWin 1s infinite alternate;
}

@keyframes pulseWin {
    from { transform: scale(1); }
    to { transform: scale(1.06); }
}

/* Memory Card Styles */
.memory-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    padding: 18px;
    max-width: 540px;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

.memory-card {
    width: 105px;
    height: 105px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.15);
    transform-style: preserve-3d;
}

.memory-card:hover:not(.flipped):not(.matched) {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 12px 25px rgba(99, 102, 241, 0.5);
    border-color: rgba(255, 255, 255, 0.3);
}

.memory-card.flipped {
    background: rgba(30, 41, 59, 0.9);
    border-color: rgba(6, 182, 212, 0.5);
    transform: rotateY(180deg);
}

.memory-card.matched {
    background: rgba(16, 185, 129, 0.2);
    border-color: #10b981;
    box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
    animation: bounceMatch 0.5s ease;
}

@keyframes bounceMatch {
    0%, 100% { transform: rotateY(180deg) scale(1); }
    50% { transform: rotateY(180deg) scale(1.12); }
}

.memory-card .card-content {
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.memory-card.flipped .card-content {
    transform: rotateY(180deg);
}

.mem-svg {
    width: 48px;
    height: 48px;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
}

.card-back-svg {
    width: 44px;
    height: 44px;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
}

.memory-card:hover .card-back-svg {
    color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
}

/* Snake Styles */
.snake-canvas {
    background: #0b0f19;
    border: 2px solid rgba(16, 185, 129, 0.4);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(16, 185, 129, 0.15);
}

/* Flappy Bird Styles */
.flappy-canvas {
    background: #0b0f19;
    border: 2px solid rgba(6, 182, 212, 0.4);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(6, 182, 212, 0.15);
}

/* Air Hockey Styles */
.air-hockey-canvas {
    background: #0b0f19;
    border: 2px solid rgba(59, 130, 246, 0.4);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(59, 130, 246, 0.15);
}

/* Laser Pong Styles */
.pong-canvas {
    background: #0b0f19;
    border: 2px solid rgba(239, 68, 68, 0.4);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(239, 68, 68, 0.15);
}

/* Connect Four Styles */
.connect4-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    background: rgba(15, 23, 42, 0.85);
    border: 2px solid rgba(99, 102, 241, 0.4);
    padding: 16px;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5), inset 0 2px 6px rgba(255,255,255,0.05);
}

.connect4-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    padding: 4px;
    border-radius: 12px;
    transition: background 0.2s ease;
}

.connect4-col:hover {
    background: rgba(255, 255, 255, 0.06);
}

.connect4-cell {
    width: 56px;
    height: 56px;
    background: #0b0f19;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 4px 8px rgba(0,0,0,0.7);
}

.connect4-token {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    animation: dropToken 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes dropToken {
    from { transform: translateY(-350px) scale(0.8); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
}

.connect4-token.player1 {
    background: radial-gradient(circle at 30% 30%, #f472b6, #be185d);
    border: 2px solid #fbcfe8;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
}

.connect4-token.player2 {
    background: radial-gradient(circle at 30% 30%, #38bdf8, #0369a1);
    border: 2px solid #bae6fd;
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
}

.connect4-cell.win-cell {
    border-color: #10b981;
    box-shadow: 0 0 20px #10b981, inset 0 0 15px #10b981;
    animation: pulseWin 0.8s infinite alternate;
}

/* Cyber Tanks Styles */
.tanks-canvas {
    background: #0b0f19;
    border: 2px solid rgba(20, 184, 166, 0.4);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(20, 184, 166, 0.15);
}


/* Neon Riders / Tron Styles */
.tron-canvas {
    background: #0b0f19;
    border: 2px solid rgba(6, 182, 212, 0.45);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(6, 182, 212, 0.18);
}

/* Neon Reversi Styles */
.reversi-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 7px;
    padding: 16px;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.75));
    border: 2px solid rgba(139, 92, 246, 0.45);
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5), inset 0 2px 6px rgba(255,255,255,0.05);
}

.reversi-cell {
    width: 54px;
    height: 54px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.22s ease;
    box-shadow: inset 0 3px 8px rgba(0,0,0,0.55);
}

.reversi-cell:hover {
    transform: scale(1.04);
    border-color: rgba(139, 92, 246, 0.55);
    background: rgba(30, 41, 59, 0.95);
}

.reversi-cell.valid::after {
    content: '';
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.32);
    border: 2px solid rgba(16, 185, 129, 0.75);
    box-shadow: 0 0 14px rgba(16, 185, 129, 0.55);
}

.reversi-disc {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    animation: popIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.reversi-disc.player1 {
    background: radial-gradient(circle at 30% 28%, #f9a8d4, #ec4899 48%, #831843);
    border: 2px solid #fbcfe8;
    box-shadow: 0 0 16px rgba(236, 72, 153, 0.65);
}

.reversi-disc.player2 {
    background: radial-gradient(circle at 30% 28%, #bae6fd, #06b6d4 48%, #164e63);
    border: 2px solid #cffafe;
    box-shadow: 0 0 16px rgba(6, 182, 212, 0.65);
}

/* Neon Soccer Styles */
.soccer-canvas {
    background: #07150f;
    border: 2px solid rgba(16, 185, 129, 0.45);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 30px rgba(16, 185, 129, 0.18);
}

@media (max-width: 640px) {
    .reversi-cell {
        width: 38px;
        height: 38px;
        border-radius: 10px;
    }
    .reversi-disc {
        width: 29px;
        height: 29px;
    }
    .reversi-grid {
        gap: 5px;
        padding: 10px;
    }
}

/* Shared Touch Controls for two-player games */
.touch-controls {
    width: 100%;
    max-width: 760px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 18px;
    margin-top: 14px;
    direction: ltr;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
}

.touch-pad {
    flex: 1;
    min-width: 145px;
    background: rgba(15, 23, 42, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 22px rgba(0,0,0,0.28);
}

.touch-title {
    direction: rtl;
    font-size: 13px;
    font-weight: 700;
    color: var(--text-secondary);
}

.dpad-grid {
    display: grid;
    grid-template-columns: repeat(3, 46px);
    grid-template-rows: repeat(3, 46px);
    gap: 7px;
}

.touch-btn {
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 14px;
    background: rgba(30, 41, 59, 0.9);
    color: #f8fafc;
    font-size: 19px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.12s ease, background 0.12s ease, box-shadow 0.12s ease;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
}

.touch-btn:hover,
.touch-btn.active,
.touch-btn:active {
    transform: scale(0.95);
    background: linear-gradient(135deg, rgba(99,102,241,0.95), rgba(6,182,212,0.85));
    box-shadow: 0 0 16px rgba(6,182,212,0.42);
}

.touch-btn.shoot-btn {
    direction: rtl;
    font-size: 11px;
    line-height: 1.1;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(239,68,68,0.85), rgba(236,72,153,0.7));
}

.tron-canvas,
.soccer-canvas,
.tanks-canvas {
    touch-action: none;
}

@media (max-width: 640px) {
    .touch-controls {
        gap: 10px;
        max-width: 100%;
    }
    .touch-pad {
        min-width: 0;
        padding: 10px 8px;
    }
    .dpad-grid {
        grid-template-columns: repeat(3, 38px);
        grid-template-rows: repeat(3, 38px);
        gap: 6px;
    }
    .touch-btn {
        width: 38px;
        height: 38px;
        border-radius: 12px;
        font-size: 16px;
    }
    .touch-title {
        font-size: 12px;
    }
}

/* New touch-friendly two-player games */
.sumo-img { background: radial-gradient(circle at center, #be123c, #0f172a); }
.reaction-img { background: radial-gradient(circle at center, #ca8a04, #0f172a); }
.dots-img { background: radial-gradient(circle at center, #2563eb, #0f172a); }

.sumo-canvas,
.dots-canvas {
    background: #0b0f19;
    touch-action: none;
}

.sumo-canvas {
    border: 2px solid rgba(244, 63, 94, 0.45);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 32px rgba(244, 63, 94, 0.16);
}

.dots-canvas {
    border: 2px solid rgba(59, 130, 246, 0.45);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 32px rgba(59, 130, 246, 0.16);
}

.reaction-stage {
    width: 100%;
    max-width: 780px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    direction: ltr;
    touch-action: manipulation;
}

.reaction-panel {
    min-height: 270px;
    border-radius: 26px;
    border: 2px solid rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    transition: transform 0.16s ease, filter 0.16s ease, box-shadow 0.16s ease;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}

.reaction-panel::before {
    content: '';
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 45%);
    opacity: 0;
    transition: opacity 0.2s ease;
}

.reaction-panel:active,
.reaction-panel.active {
    transform: scale(0.98);
    filter: brightness(1.18);
}

.reaction-panel.active::before {
    opacity: 1;
}

.reaction-panel.p1 {
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(15, 23, 42, 0.92));
    box-shadow: inset 0 0 40px rgba(56,189,248,0.16), 0 14px 32px rgba(0,0,0,0.35);
}

.reaction-panel.p2 {
    background: linear-gradient(135deg, rgba(244, 114, 182, 0.22), rgba(15, 23, 42, 0.92));
    box-shadow: inset 0 0 40px rgba(244,114,182,0.16), 0 14px 32px rgba(0,0,0,0.35);
}

.reaction-panel h3 {
    direction: rtl;
    font-size: 24px;
    margin: 0;
}

.reaction-big {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    font-weight: 900;
    background: rgba(15, 23, 42, 0.72);
    border: 2px solid rgba(255,255,255,0.15);
}

.reaction-light {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #f87171, #991b1b);
    border: 5px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 28px rgba(239, 68, 68, 0.42);
    transition: all 0.18s ease;
}

.reaction-light.ready {
    background: radial-gradient(circle at 30% 30%, #86efac, #16a34a);
    box-shadow: 0 0 42px rgba(34, 197, 94, 0.7);
}

.reaction-light.waiting {
    background: radial-gradient(circle at 30% 30%, #fde68a, #d97706);
    box-shadow: 0 0 32px rgba(245, 158, 11, 0.55);
}

@media (max-width: 640px) {
    .reaction-stage {
        gap: 10px;
    }
    .reaction-panel {
        min-height: 205px;
        border-radius: 20px;
    }
    .reaction-panel h3 {
        font-size: 18px;
    }
    .reaction-big {
        width: 72px;
        height: 72px;
        font-size: 25px;
    }
    .reaction-light {
        width: 112px;
        height: 112px;
    }
}
