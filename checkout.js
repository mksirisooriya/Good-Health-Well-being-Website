const orderDetails = document.getElementById("order-Details")
orderDetails.innerHTML = localStorage.getItem("orderDetails")

const cartTotal = document.getElementById("cart-Total")
cartTotal.textContent = localStorage.getItem("cartTotal")

const PDForm = document.getElementById("PD-form")
const BAForm = document.getElementById("BA-form")
const CDForm = document.getElementById("CD-form")
const OrderMessage = document.getElementById("OrderMsg")

const resetAllBtn = document.getElementById("resetAll-Btn").addEventListener("click", function () {
    PDForm.reset()
    BAForm.reset()
    CDForm.reset()
})

const submitAllBtn = document.getElementById("submitAll-Btn").addEventListener("click", function () {

    if (PDForm.checkValidity() && BAForm.checkValidity() && CDForm.checkValidity()) {

        OrderMessage.textContent = "Thank you! Order has been placed"
        localStorage.clear()
        document.getElementById("cart-Total").textContent = 0
        document.getElementById("order-Details").textContent = ""
        PDForm.reset()
        BAForm.reset()
        CDForm.reset()
    }
    else {

        OrderMessage.textContent = "Complete all required fields to proceed"

    }

})

