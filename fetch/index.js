const row = document.getElementById("row")
const input = document.getElementById("input")
const sort = document.getElementById("sort")
let baseURL = "https://fakestoreapi.com/products"
fetch(`${baseURL}`)
.then((rep)=>rep.json())
.then((data)=>{
    console.log(data)
    renderUI(data)
}).catch(error=>console.log(error))


function renderUI(array){
    let innerText=""
    for (let i = 0; i < array.length; i++) {
        innerText+=`
        <div class="card">
                <img src="${array[i].image}" alt="" >
                <h3>${array[i].title}</h3>
                <p>${array[i].price}</p>
                <p>${array[i].category}</p>
                <p class="lastP">${array[i].rating.rate}</p>
    
    
            </div>

        
        `
    }
    row.innerHTML+=innerText
}

input.addEventListener("keyup", (e) => {
    let searchValue = e.target.value
    fetch(`${baseURL}`)
    .then((rep) => rep.json())
    .then((data) =>{
        let searchPro = data.filter(product => 
           product.title.toLowerCase().includes(searchValue.toLowerCase()))
           row.innerHTML=""
           renderUI(searchPro)
    })
})

sort.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`${baseURL}`)
    .then((rep) => rep.json())
    .then((data) => {
        const filter = data.sort ((x,y) => x.price - y.price);
        row.innerHTML=""
        renderUI(filter);
    })

});








