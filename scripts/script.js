let themeDots = document.getElementsByClassName("theme-dot")

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('option clicked')
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css'
        document.getElementById('profile_pic').src = 'images/light_profile_pic.jpeg'
    }
    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'css/dark.css'
        document.getElementById('profile_pic').src = 'images/dark_profile_pic.jpeg'
    }

    localStorage.setItem('theme', mode)
}