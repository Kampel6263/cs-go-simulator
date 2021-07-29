let target = document.createElement('div')
const field = document.getElementById('field')

target.classList.add('target')

field.appendChild(target)

let oy
let ox

window.addEventListener('mousemove', (props) => {
  // console.log(props)
  target.style.left = props.screenX - 30 + 'px'
  target.style.top = props.screenY - 130 + 'px'
  oy = props.screenY
  ox = props.screenX
})

console.log('work')

window.addEventListener('mousedown', (props) => {
  if (props.target.classList.contains('m')) {
    // props.target.style.display = 'none'
    field.removeChild(props.target)
  }
  let audio = new Audio();
  audio.preload = 'auto';
  audio.src = './ak47-1.mp3';
  audio.play();
  let dot = document.createElement('div')
  dot.classList.add('dot')
  dot.style.left = ox - 2 + 'px'
  dot.style.top = oy - 102 + 'px'

  field.appendChild(dot)
})

let interv

// window.addEventListener('mousedown', (props) => {
//   interv = setInterval(() => {
//     console.log(props, 'dfd')
//     let audio = new Audio();
//     audio.preload = 'auto';
//     audio.src = './ak47-1.mp3';
//     audio.play();

//     let dot = document.createElement('div')
//     dot.classList.add('dot')
//     dot.style.left = ox - 2 + 'px'
//     dot.style.top = oy - 102 + 'px'

//     field.appendChild(dot)
//   }, 70)
// })

window.addEventListener('mouseup', () => {
  clearInterval(interv)
})


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


setInterval(() => {
  let m = document.createElement('div')
  m.classList.add('m')
  m.style.top = 0 + 'px'
  let lleftt = getRandomInt(50, 900)
  m.style.left = lleftt + 'px'
  let ttopp = 5

  setInterval(() => {

    m.style.top = ttopp + 'px'
    // m.style.left = lleftt + 'px'
    ttopp += 3
    lleftt += getRandomInt(-10, 10)
  }, 30)
  field.appendChild(m)
}, 1500)