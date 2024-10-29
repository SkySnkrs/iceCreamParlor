//SECTION - List of Ice Creams

const iceCream = [
    { name: 'Vanilla', price: 1, quantity: 0 },
    { name: 'Chocolate', price: 1, quantity: 0 },
    { name: 'Rocky Road', price: 3, quantity: 0 },
]

const toppings = [
    { name: 'Sprinkles', price: 0.25, quantity: 0 },
    { name: 'Brownie Bits', price: 0.25, quantity: 0 },
    { name: 'Popping Candy', price: 0.25, quantity: 0 },
]


const containers = [
    { name: 'Bowl', price: 0, quantity: 0 },
    { name: 'Waffle Cone', price: 2, quantity: 0 },
    { name: 'Cone', price: 1, quantity: 0 },
]

console.table(iceCream)
console.table(containers)


// SECTION-END

//SECTION Functions


function addItemByName(itemName) {

    for (let i = 0; i < iceCream.length; i++) {
        let item = iceCream[i]
        if (item.name == itemName) {
            item.quantity += 1
            console.table([item]);
        }
    }
    for (let i = 0; i < toppings.length; i++) {
        let item = toppings[i]
        if (item.name == itemName) {
            item.quantity += 1
            console.table([item]);
        }
    }
    for (let i = 0; i < containers.length; i++) {
        let item = containers[i]
        if (item.name == itemName) {
            item.quantity += 1
            console.table([item]);
        }
    }
    drawCart()
    drawTotal()
}

function cartTotal() {
    let total = 0
    for (let i = 0; i < iceCream.length; i++) {
        let item = iceCream[i]
        total += item.price * item.quantity
    }
    for (let i = 0; i < toppings.length; i++) {
        let item = toppings[i]
        total += item.price * item.quantity
    }
    for (let i = 0; i < containers.length; i++) {
        let item = containers[i]
        total += item.price * item.quantity
    }
    console.log('total', total)
    return total
}

function checkout() {
    const checkoutTotal = cartTotal();
    const confirmed = confirm(`Are you sure you want to checkout for a total of: $${checkoutTotal}`);
    if (confirmed) {
        iceCream.forEach(item => item.quantity = 0);
        toppings.forEach(item => item.quantity = 0);
        containers.forEach(item => item.quantity = 0);

        drawCart();
    }
}



function drawCart() {
    let content = '';
    iceCream.forEach(item => {
        if (item.quantity > 0) {
            content += `
                <p>${item.quantity} x ${item.name}: $${(item.price * item.quantity).toFixed(2)}</p>
            `;
        }
    });
    toppings.forEach(item => {
        if (item.quantity > 0) {
            content += `
                <p>${item.quantity} x ${item.name}: $${(item.price * item.quantity).toFixed(2)}</p>
            `;
        }
    });
    containers.forEach(item => {
        if (item.quantity > 0) {
            content += `
                <p>${item.quantity} x ${item.name}: $${(item.price * item.quantity).toFixed(2)}</p>
            `;
        }
    });

    const cartElm = document.getElementById('cart-display');
    cartElm.innerHTML = content;
    drawTotal();
}

function drawTotal() {
    const cartTotalAmount = cartTotal();
    const totalElm = document.getElementById('cart-total');
    if (totalElm) {
        totalElm.innerText = cartTotalAmount.toFixed(2);
    }
}