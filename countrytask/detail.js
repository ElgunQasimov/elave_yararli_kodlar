let params = new URLSearchParams(document.location.search)
let name = params.get("name")
console.log(name)

fetch ('https://restcountries.com/v3.1/name/{name}?fullText=true').then(res => res.json()).then(data =>{
    console.log(data)



})