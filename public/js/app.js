
console.log('client side javascript file is loaded')
//const fetch = require('fetch')


//browser http requests with fetch
/*
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
      console.log(data)
    })

})
fetch('http://localhost:3000/weather?address=india').then((response)=>{
response.json().then((data)=>{
    if(data.error){
console.log(data.error)
    }else{
console.log(data.location)
console.log(data.forecast)
    }

})
})*/

//to submit form
const weatherForm = document.querySelector('form')
const search =document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent='from js'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()  
    const location = search.value
    messageOne.textContent='loading...'
    messageTwo.textContent=''                    
    //console.log(location)
    fetch('/weather?address=' + location).then((response)=>{
response.json().then((data)=>{
    if(data.error){
         messageOne.textContent=data.error
    }else{
        messageOne.textContent=data.location
        messageTwo.textContent=data.forecast

    }

})
})
})