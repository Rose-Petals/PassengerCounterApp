let count = 0;
let saveEl = document.getElementById("save-el")

function increment(){
    count++;
    document.getElementById("count-el").innerText = count
}

function save(){
    let countStr = " "+ count + "-"
    
    saveEl.innerText += countStr
    console.log(count)
}