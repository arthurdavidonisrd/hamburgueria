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
    updateCartModal()
    
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


//funcao opcional para fechar modal
menu.addEventListener("click", function(event){
    let parentBtn = event.target.closest(".add-to-cart-btn")

    if(parentBtn){ 
        const name = parentBtn.getAttribute("data-name");
        const price = parseFloat(parentBtn.getAttribute("data-price"))

        addToCart(name, price)
    }
})

//fim da funcao opcional fechar modal

function addToCart(name,price){

    const existingItem = cart.find(item => item.name === name)

    if(existingItem){
        existingItem.qtd += 1
    }
    else{
        cart.push({
            name,
            price,
            qtd: 1,
        })

    }

    updateCartModal()
  
}

//Att cart

function updateCartModal(){
    cartItensContainer.innerHTML = "";
    let total = 0


    cart.forEach(item =>{
        const cartItemElement = document.createElement("section")

        cartItemElement.innerHTML = `
            <section>
                <div class="mt-6">
                    <p class="font-medium">nome: ${item.name}</p>
                    <p class="">Qtd: ${item.qtd}</p>
                    <p class="font-medium mt-2">R$: ${item.price.toFixed(2)}</p>
                    <hr>

                </div>
            </section>
        `

        total += item.price * item.qtd

        cartItensContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total;
    cartCounter.innerText = cart.length;
}



addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value;

    if(inputValue !== ""){
        addressWarning.classList.add("hidden")
    }

})


checkoutBtn.addEventListener("click", function(){
    if(cart.length === 0 ) return;
   
    if(addressInput.value === ""){
        addressWarning.classList.remove("hidden")
        addressWarning.style.color = "red"

    }

    const cartItens = cart.map((item) =>{
        return(
           ` ${item.name} Quantidade: (${item.qtd}) Preço: R$ ${item.price} |`
        )
    }).join("")

    const message = encodeURIComponent(cartItens)
    const phone = "4699331931"

    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`)
})







