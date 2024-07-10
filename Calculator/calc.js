let screen = document.getElementById('#calcBar')
let input = document.querySelector('#calcBar') 
let specSpan = document.querySelectorAll("#keysSec span")
let arr=[]
let str

let clique = function(event){
    event.preventDefault()
    let span = event.currentTarget
    let usedKey = event.currentTarget.innerText
    if(span.innerText === 'C'){
        console.clear()    
        input.value = ''
    } else if (span.innerText === '=' ){       
        str = document.querySelector('#calcBar').value
        arr = str.split('')
        if (arr.some(x => x==='m')){
            let iOfM = arr.indexOf('m')
            let iOfD = arr.indexOf('d')
            let sliced = arr.slice(0,iOfM)
            let result = (eval(sliced.join('')))%(eval(arr.slice(iOfD+1).join('')))
            
            console.log(result)
            document.querySelector('#calcBar').value = `${str} = ${result}`
        } else{
            console.log(eval(str))
            let result = eval(str)
             document.querySelector('#calcBar').value = `${str} = ${result}`}     
    } 
    else{
     document.querySelector('#calcBar').value += usedKey
     }
}
specSpan.forEach(function(element){
    element.addEventListener('click',clique)
})