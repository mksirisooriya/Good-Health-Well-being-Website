const p1Quantity = document.getElementById("p1-Quantity")
const p2Quantity = document.getElementById("p2-Quantity")
const p3Quantity = document.getElementById("p3-Quantity")
const p4Quantity = document.getElementById("p4-Quantity")
const p5Quantity = document.getElementById("p5-Quantity")
const p6Quantity = document.getElementById("p6-Quantity")

const IncrementbtnP1 = document.getElementById("Increment-btnP1").addEventListener("click", function () {
    incrementQuantity(p1Quantity)
})
const DecrementbtnP1 = document.getElementById("Decrement-btnP1").addEventListener("click", function () {
    decrementQuantity(p1Quantity)
})
const IncrementbtnP2 = document.getElementById("Increment-btnP2").addEventListener("click", function () {
    incrementQuantity(p2Quantity)
})
const DecrementbtnP2 = document.getElementById("Decrement-btnP2").addEventListener("click", function () {
    decrementQuantity(p2Quantity)
})
const IncrementbtnP3 = document.getElementById("Increment-btnP3").addEventListener("click", function () {
    incrementQuantity(p3Quantity)
})
const DecrementbtnP3 = document.getElementById("Decrement-btnP3").addEventListener("click", function () {
    decrementQuantity(p3Quantity)
})
const IncrementbtnP4 = document.getElementById("Increment-btnP4").addEventListener("click", function () {
    incrementQuantity(p4Quantity)
})
const DecrementbtnP4 = document.getElementById("Decrement-btnP4").addEventListener("click", function () {
    decrementQuantity(p4Quantity)
})
const IncrementbtnP5 = document.getElementById("Increment-btnP5").addEventListener("click", function () {
    incrementQuantity(p5Quantity)
})
const DecrementbtnP5 = document.getElementById("Decrement-btnP5").addEventListener("click", function () {
    decrementQuantity(p5Quantity)
})
const IncrementbtnP6 = document.getElementById("Increment-btnP6").addEventListener("click", function () {
    incrementQuantity(p6Quantity)
})
const DecrementbtnP6 = document.getElementById("Decrement-btnP6").addEventListener("click", function () {
    decrementQuantity(p6Quantity)
})
const addToCartbtnP1 = document.getElementById("addToCart-btnP1").addEventListener("click", function () {
    addToCart(p1Title, p1Price, p1Quantity)
})
const addToCartbtnP2 = document.getElementById("addToCart-btnP2").addEventListener("click", function () {
    addToCart(p2Title, p2Price, p2Quantity)
})
const addToCartbtnP3 = document.getElementById("addToCart-btnP3").addEventListener("click", function () {
    addToCart(p3Title, p3Price, p3Quantity)
})
const addToCartbtnP4 = document.getElementById("addToCart-btnP4").addEventListener("click", function () {
    addToCart(p4Title, p4Price, p4Quantity)
})
const addToCartbtnP5 = document.getElementById("addToCart-btnP5").addEventListener("click", function () {
    addToCart(p5Title, p5Price, p5Quantity)
})
const addToCartbtnP6 = document.getElementById("addToCart-btnP6").addEventListener("click", function () {
    addToCart(p6Title, p6Price, p6Quantity)
})

const p1Title = document.getElementById("p1-Title")
const p1Price = document.getElementById("p1-Price")

const cartItems = document.getElementById("cart-Items")
const cartTotal = document.getElementById("cart-Total")

const p2Title = document.getElementById("p2-Title")
const p2Price = document.getElementById("p2-Price")

const p3Title = document.getElementById("p3-Title")
const p3Price = document.getElementById("p3-Price")

const p4Title = document.getElementById("p4-Title")
const p4Price = document.getElementById("p4-Price")

const p5Title = document.getElementById("p5-Title")
const p5Price = document.getElementById("p5-Price")

const p6Title = document.getElementById("p6-Title")
const p6Price = document.getElementById("p6-Price")

const clearCartBtn = document.getElementById("clearCart-btn").addEventListener("click", function () {
    clearCart()
})
const checkoutBtn = document.getElementById("checkout-btn").addEventListener("click", function () {
    checkout()
})
const checkoutMessage = document.getElementById("checkout-Message")

function incrementQuantity(productQuantity) {
    productQuantity.textContent = Number(productQuantity.textContent) + 1

}

function decrementQuantity(productQuantity) {
    if (Number(productQuantity.textContent) > 0) {
        productQuantity.textContent = Number(productQuantity.textContent) - 1
    }
}

function addToCart(productTitle, productPrice, productQuantity) {
    if (Number(productQuantity.textContent) > 0) {
        cartItems.innerHTML +=
            `<li> 
         ${productTitle.textContent} x ${productQuantity.textContent} <br>
        Rs ${Number(productPrice.textContent) * Number(productQuantity.textContent)}     
        </li> <hr>    
    `
        let totalProductPrice = Number(productPrice.textContent) * Number(productQuantity.textContent)
        cartTotal.textContent = Number(cartTotal.textContent) + totalProductPrice
    }

}

function clearCart() {
    cartTotal.textContent = 0
    cartItems.innerHTML = ""
}

function checkout() {
    if (Number(cartTotal.textContent) == 0) {
        checkoutMessage.textContent = "Add atleast one poster to the cart to checkout"
    }
    else {
        window.location.href = "checkout.html"
        let orderDetails = cartItems.innerHTML
        localStorage.setItem("orderDetails", orderDetails)
        localStorage.setItem("cartTotal", cartTotal.textContent)

    }
}