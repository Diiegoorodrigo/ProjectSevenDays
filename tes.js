const bod = document.querySelector('body')
const kk = document.querySelector('.in')
const bt2 =  document.querySelector('.bt2')


document.addEventListener('click', e => {
    const element = e.target
  
    
    if(element.classList.contains('bt3')) return changeColor()
    if(element.classList.contains('bt2')) return bod.style.backgroundColor = 'red'
    if(element.classList.contains('bt')) return bod.style.backgroundColor = 'blue'

})


function changeColor(){

    
    if(kk.value == 'diego') return bod.style.backgroundColor = 'green'
    
}
