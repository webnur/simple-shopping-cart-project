const cart = [];

function displayProduct(){

    const totalProducts = document.getElementById('total-products');
    totalProducts.innerText = cart.length;

    const productCart = document.getElementById('products-cart');
    productCart.textContent = '';

    // total price sum
    let priceTotal = 0;

    for(let i = 0; i < cart.length; i++){
        // console.log(cart[i].productName)
        // console.log(cart[i].productPrice)
        priceTotal += cart[i].productPrice

        const tr = document.createElement('tr');

        tr.innerHTML = `
           <th>${i + 1}</th>
            <td>${cart[i].productName}</td>
            <td>${cart[i].productPrice}</td>
        `
        productCart.appendChild(tr)
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total price</td>
        <td>${priceTotal}</td>
    
    `
    productCart.appendChild(tr)
}

function addToCart(element){
 
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
   
    const product = {
        productName: productName,
        productPrice: parseFloat(productPrice) 
    };
    cart.push(product)

    displayProduct();

}
console.log(cart)