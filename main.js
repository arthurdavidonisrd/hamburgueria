const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItensContainer = document.getElementById("cart-itens")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarning = document.getElementById("address-warning")

let cart = []


//Open Modal
cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

//Close Modal




menu.addEventListener("click", function(event){
    let parentBtn = event.target.closest("add-to-cart-btn")

    if(parentBtn){
        const name = parentBtn.getAtributte("data-name")
        const price = parseFloat(parentBtn.getAtributte("data-price"))

        AddToCart(name, price)

    }

    

})



//function para add ao carrinho

function AddToCart(name, price){

    cart.push({
        name,
        price,
        qtd: 1
    })
}



