const products = [
  { id: 1, name: "Stylo", price: 5 },
  { id: 2, name: "Cahier", price: 20 },
  { id: 3, name: "Règle", price: 10 }
];
let counter = 3
const productList = document.getElementById("productList")
const nameInput = document.getElementById("nameInput")
const priceInput = document.getElementById("priceInput")
const addBtn = document.getElementById("addBtn")
function affichage(){
    productList.innerHTML = ""
    products.forEach(product => {
    productList.innerHTML += `name: ${product.name} - price: ${product.price} <br>`
});
}
addBtn.addEventListener("click", () => {
    counter++
    let newProd  = { id: counter, name: nameInput.value, price: priceInput.value}
    products.push(newProd)
    affichage()
})
const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("input", ()=> {
    productList.innerHTML = ""
    products.forEach(product => {
        if(product.name.includes(searchInput.value))
        {
            productList.innerHTML += `name: ${product.name} - price: ${product.price} <br>`
        }
    })  
})
affichage()