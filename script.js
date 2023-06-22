
let clrchange = () =>{
        let color = document.getElementById("clrslct").value
        let disp = document.getElementById("circle")
        disp.style.background=color
    }
let add = () => {
    let counter = document.getElementById("cnt")
    let val = counter.innerText
    val++
    counter.innerText=val
}
let dec = () => {
    let counter = document.getElementById("cnt")
    let val = counter.innerText
    val--
    counter.innerText=val
}
let clr = () => {
    let counter = document.getElementById("cnt")
    counter.innerText=0
}

    