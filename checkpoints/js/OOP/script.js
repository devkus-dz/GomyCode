class Product {

    constructor(id, name, description, unitPrice, productImage){
        this.id = id;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.productImage = productImage;
    }

}

class Cart {

    constructor(){
        this.items = [];
    }
    // adding products to the array by calling the CartItem class  
    addItem(product, quantity){
        const existingItem = this.items.find((item) => item.product.id === product.id);
        (existingItem) ? existingItem.quantity += quantity : this.items.push(new CartItem(product, quantity));       
    }

    // Remove item from the cart
    removeItem(productId) {
        this.items = this.items.filter((item) => item.product.id !== productId);
        this.displayCart();
    }

    // Updating the quantity 
    updateQuantity(productId, action) {
        const item = this.items.find((item) => item.product.id === productId);
        if (item) {
            if (action === "increase") {
                item.increaseQuantity();
            } else if (action === "decrease") {
                item.decreaseQuantity();
            }
            this.displayCart();
        }
    }

    // Calculating the Cart total of all elements
    getCartTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0); // Sum all item totals
    }

    // Display cart items
    displayCart() {
        const listProducts = document.querySelector(".list-products");
        listProducts.innerHTML = ""; 

        if (this.items.length === 0) {
            listProducts.insertAdjacentHTML("beforeend", "<h1> Your cart is empty. </h1>");
        }

        this.items.forEach((item) => {
            // Card template to display for each element
            const productHTML =  `
                    <div class="card-body">
                        <div class="card" style="width: 18rem">
                            <img src="${item.product.productImage}" class="card-img-top" alt="${item.product.name}"/>
                        <div class="card-body">
                            <h5 class="card-title">${item.product.name}</h5>
                            <p class="card-text">${item.product.description}</p>
                            <h4 class="unit-price">${item.product.unitPrice} $</h4>
                            <div>
                                <i class="fas fa-plus-circle" data-id="${item.product.id}" data-action="increase"></i>
                                <span class="quantity">${item.quantity}</span>
                                <i class="fas fa-minus-circle" data-id="${item.product.id}" data-action="decrease"></i>
                            </div>
                            <div>
                                <i class="fas fa-trash-alt" data-id="${item.product.id}"></i>
                                <i class="fas fa-heart" data-id="${item.product.id}" style="color: ${item.like ? 'red' : 'black'}" ></i>
                            </div>
                        </div>
                        </div>
                    </div>
            `;
            // Insert items 
            listProducts.insertAdjacentHTML("beforeend", productHTML);
        });

        // Attach event listeners after rendering to remove item
        document.querySelectorAll(".fa-trash-alt").forEach(elem => {
            elem.addEventListener('click', (e) => {
                const id = Number(e.target.getAttribute("data-id"));
                this.removeItem(id);
            });
        });

        // Attach event listeners after rendering to like item
        document.querySelectorAll(".fa-heart").forEach(elem => {
            elem.addEventListener("click", (e) => {
                const id = Number(e.target.getAttribute("data-id"));
                const item = this.items.find(item => item.product.id === id);
                if (item) {
                    item.toggleLike();
                    this.displayCart();
                }
            });
        });

        // Attach event listeners after rendering to change quantity
        document.querySelectorAll(".fa-plus-circle, .fa-minus-circle").forEach(elem => {
            elem.addEventListener("click", (e) => {
                const id = Number(e.target.getAttribute("data-id"));
                const action = e.target.getAttribute("data-action");
                this.updateQuantity(id, action);
            });
        });

        // Updating the total HTML class
        document.querySelector('.total').textContent = this.getCartTotal().toFixed(2) + " $";
    
    }

}

class CartItem {

    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
        this.like = false;
    }


    // Get total of items inside the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Like button
    toggleLike() {
        this.like = !this.like;
    }

    // Adjust Quantity
    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    // Calculate total price for the item
    getTotalPrice() {
        return this.quantity * this.product.unitPrice; 
    }

}

const product1 = new Product(1, "Baskets", "This is a basket", 100, "assets/baskets.png");
const product2 = new Product(2, "Socks", "This is a socks", 20, "assets/socks.png");
const product3 = new Product(3, "Bag", "this is a bag", 80, "assets/bag.png");
const product4 = new Product(4, "Playstation 5", "this is a PS5", 800, "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg");

const myCart = new Cart();
myCart.addItem(product1, 3);
myCart.addItem(product2, 5);
myCart.addItem(product3, 2);
myCart.addItem(product4, 1);

myCart.displayCart();

