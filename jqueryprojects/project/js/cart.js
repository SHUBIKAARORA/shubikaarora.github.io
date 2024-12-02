$(document).ready(function () {
    // Initialize an empty cart array
    var cart = [];

    // Function to update the cart display
    function updateCart() {
        // Get the cart-items container element to display cart items
        var cartItems = $("#cart-items");
        // Initialize total price to 0
        var totalPrice = 0;
        // Clear the current cart display
        cartItems.empty();

        // Loop through each item in the cart to display it
        cart.forEach(function (item, index) {
            // Create a new list item for each cart item
            var cartItem = $("<li></li>");

            // Create an image element and set the source to the product image
            var productImg = $("<img>").attr("src", item.img);
            cartItem.append(productImg);

            // Create a span element to display product name and price
            var productInfo = $("<span></span>").text(
                item.name + " - $" + item.price
            );
            cartItem.append(productInfo);

            // Create a container for quantity control buttons
            var quantityControl = $('<span class="quantity-buttons"></span>');
            // Create a span to display current quantity
            var quantityDisplay = $("<span></span>").text(
                "Qty: " + item.quantity
            );
            quantityControl.append(quantityDisplay);

            // Create a button to decrease quantity
            var decreaseBtn = $("<button>-</button>").click(function () {
                // If quantity is greater than 1, decrease it
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    // If quantity is 1, remove the item from the cart
                    cart.splice(index, 1);
                }
                // Update the cart display
                updateCart();
            });

            // Create a button to increase quantity
            var increaseBtn = $("<button>+</button>").click(function () {
                // Increase the quantity of the item
                item.quantity++;
                // Update the cart display
                updateCart();
            });

            // Append the decrease and increase buttons to the quantity control
            quantityControl.append(decreaseBtn).append(increaseBtn);
            cartItem.append(quantityControl);

            // Create a button to remove the item from the cart entirely
            var removeButton = $("<button>Remove</button>").click(function () {
                // Remove the item from the cart array
                cart.splice(index, 1);
                // Update the cart display
                updateCart();
            });
            cartItem.append(removeButton);

            // Add the created cart item to the cart list
            cartItems.append(cartItem);

            // Add to the total price the price of this item multiplied by its quantity
            totalPrice += item.price * item.quantity;
        });

        // Update the total price display
        $("#total-price").text(totalPrice);
    }

    // Event listener for the "Add to Cart" button
    $(".add-to-cart").click(function () {
        // Get the closest product element to the clicked button
        var product = $(this).closest(".product");
        // Retrieve product data attributes (ID, Name, Price, Image)
        var productId = product.data("id");
        var productName = product.data("name");
        var productPrice = product.data("price");
        var productImg = product.data("img");

        // Check if the item is already in the cart
        var existingItem = cart.find((item) => item.id === productId);
        if (existingItem) {
            // If the item exists, just increase its quantity
            existingItem.quantity++;
        } else {
            // If the item doesn't exist, add it to the cart with a quantity of 1
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1,
            });
        }

        // Update the cart display
        updateCart();
    });
});