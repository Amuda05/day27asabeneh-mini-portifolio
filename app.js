// const content =  document.querySelector('marquee')
// const a = ['<i class="fa-solid fa-fire-flame-simple">Girisimci',' <i class="fa-solid fa-book" ></i>']

// let i = 0

// setInterval (function(){
//     if(i >=a.length){
//         i=0
//     }
// },1000)

const p2 = document.querySelector('p2')
p2.innerHTML = `Ogrendigim Teknolojiler <b><span id="year"></span></b>`

let year = document.querySelector('#year')
const randomColor = () => {
    let one = Math.floor(Math.random()*255)
    let two = Math.floor(Math.random()*255)
    let three = Math.floor(Math.random()*255)
    color = `rgb(${one},${two},${three})`
    year.style.color = color
    year.style.fontSize = '35px'
    const  a = ['HTML','CSS','JAVASCRIPT','REACT']

    let i = 0
    setInterval(function(){
        if(i>=a.length){
            i=0
        }
        year.innerHTML = a[i++]
    },1000)
}
setInterval(randomColor,1000)