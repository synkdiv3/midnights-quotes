const words =["It's me, hi, I'm the problem, it's me.",
"Flying in a dream, stars by the pocketful.",
"All of me changed like midnight.",
"You did some bad things, but I'm the worst of them.",
"Best believe I'm still bejeweled, when I walk in the room, I can still make the whole place shimmer.",
"I'll be gettin' over you my whole life.",
"Karma's a relaxing thought, aren't you envious that for you it's not?",
"All that you ever wanted from me was sweet nothing.",
"What if I told you I'm a mastermind?",
"What could've been, would've been you.", 
"Meet me at midnight"]
const songs = ["Anti-Hero", "Snow On The Beach", "Midnight Rain", "Vigilante Shit", "Bejeweled", "Labyrinth", "Karma", "Sweet Nothing", "Mastermind", "Would’ve, Could’ve, Should’ve", "Lavender Haze"]
const colors = ['#AC9FB8', '#D18E54', '#AE7268', '#87A6BB']

const generate = document.querySelector('.generate')
const lyrics = document.getElementById('lyrics')
const source = document.getElementById('source')

generate.addEventListener('click', function() {
    const randomLyrics = getRandomNumber()
    const randomColor = getRandomNumber2()

    lyrics.textContent = words[randomLyrics]
    source.textContent = songs[randomLyrics]
    document.body.style.backgroundColor = colors[randomColor]
})

function getRandomNumber() {
    return Math.floor(Math.random() * words.length) // returns a random index of words 
}

function getRandomNumber2() {
    return Math.floor(Math.random() * colors.length)
}