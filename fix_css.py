import sys

filepath = r"c:\Users\Davo Tech\Desktop\پەرستاری & دەرمانسازی\css\style.css"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's see if we can find where it broke.
# It currently has:
# .pwa-btn-secondary {
#     background: rgba(255,255,255,0.1);
#     color: #fff;
# }
#         width: 2.5rem;
#         height: 2.5rem;
#         margin-top: -1.25rem;
#         margin-left: -1.25rem;

bad_segment = """.pwa-btn-secondary {
    background: rgba(255,255,255,0.1);
    color: #fff;
}
        width: 2.5rem;
        height: 2.5rem;"""

fixed_segment = """.pwa-btn-secondary {
    background: rgba(255,255,255,0.1);
    color: #fff;
}

.pwa-btn-secondary:hover {
    background: rgba(255,255,255,0.2);
}

@keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
}

/* Animated Snake 3D Title */
.hero-3d-wrapper {
    perspective: 1200px;
    transform-style: preserve-3d;
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
    padding: 20px;
}
.hero-3d-wrapper h1 {
    transform: translateZ(1px);
    position: relative;
    margin-bottom: 0;
    font-family: 'Vazirmatn', sans-serif;
}
.snake-orbit-anim {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.5rem;
    height: 3.5rem;
    margin-top: -1.75rem;
    margin-left: -1.75rem;
    font-size: 3.5rem;
    line-height: 1;
    color: var(--primary);
    text-shadow: 0 0 15px var(--primary), 0 0 30px rgba(255,255,255,0.4);
    animation: snakeOrbit 6s linear infinite;
    pointer-events: none;
}
@keyframes snakeOrbit {
    0%   { transform: rotateY(0deg) translateX(240px) rotateY(0deg) translateY(0px) rotate(-15deg); }
    25%  { transform: rotateY(90deg) translateX(240px) rotateY(-90deg) translateY(-20px) rotate(10deg); }
    50%  { transform: rotateY(180deg) translateX(240px) rotateY(-180deg) translateY(0px) rotate(-15deg); }
    75%  { transform: rotateY(270deg) translateX(240px) rotateY(-270deg) translateY(20px) rotate(10deg); }
    100% { transform: rotateY(360deg) translateX(240px) rotateY(-360deg) translateY(0px) rotate(-15deg); }
}
@media (max-width: 768px) {
    .snake-orbit-anim {
        animation: snakeOrbitMobile 6s linear infinite;
        font-size: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;"""

content = content.replace(bad_segment, fixed_segment)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS Fixed successfully!")
