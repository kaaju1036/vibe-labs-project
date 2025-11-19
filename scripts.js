
        let cart = [];

        function addToCart(name, price) {
            cart.push({ name: name, price: price });
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');

            // Clear existing cart items
            cartItems.innerHTML = '';

            let total = 0;

            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(listItem);
                total += item.price;
            });

            cartTotal.textContent = total.toFixed(2);
        }

        function checkout() {
            alert('Thank you for your order! Total: $' + document.getElementById('cart-total').textContent);
            cart = [];
            updateCart();
        }
    