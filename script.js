(() => {
const video = document.querySelector('.video')
const nav = document.querySelector('.nav')
const playBtn = document.querySelector('.play')
// const nextBtn = document.querySelector('.next')
// const settingsBtn = document.querySelector('.settings')

const idle__time = 2000
let timeout

video.addEventListener('mouseenter', showControls)
video.addEventListener('mouseleave', hideControls)

video.addEventListener('mousemove', e => {
    showControls()
    clearTimeout(timeout)
    if (e.target == video) {
        timeout = setTimeout(hideControls, idle__time)
    }
}, { passive: true })

function hideControls() {
    nav.style.opacity = '0'
    video.style.cursor = 'none'
}

function showControls() {
    nav.style.opacity = '1'
    video.style.cursor = 'default'
}

playBtn.addEventListener('click', () => {
    const state = playBtn.getAttribute('state')
    if (state == 'play') {
        pause()
        return
    }
    play()
})

function play() {
    playBtn.querySelector('img').src = './img/play.svg'
    playBtn.setAttribute('state', 'play')
}

function pause() {
    playBtn.querySelector('img').src = './img/pause.svg'
    playBtn.setAttribute('state', 'pause')
}

})()