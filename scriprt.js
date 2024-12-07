
let btn = document.querySelector('.btn')
let int = document.querySelector('.form-control')
let con = document.querySelector('.js-card-container')


btn.addEventListener('click', function(){
    intvalue = int.value.trim()
    let pocTempl = document.querySelector('#pokemon-template').innerHTML
    let pocComplete = Handlebars.compile(pocTempl)
    fetch(`https://pokeapi.co/api/v2/pokemon/${intvalue.toLowerCase()}`,{
        method:'GET'
    })
    .then(Response =>{
        if(!Response.ok){
            console.log('error')
        }
        return Response.json()
    })
    .then(value =>{

        let pocOk = pocComplete(value)
        con.innerHTML = pocOk
    })
    .catch(error =>{
        console.error(error)
    })



})

