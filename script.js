 // Initialize item quantities and likes
 const quantities = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    // Add more items as needed
  };

  const likes = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    // Add more items as needed
  };

  // Function to increase the quantity
  function increaseQuantity(itemId) {
    quantities[itemId]++;
    updateQuantity(itemId);
    updateTotalPrice();
  }

  // Function to decrease the quantity
  function decreaseQuantity(itemId) {
    if (quantities[itemId] > 1) {
      quantities[itemId]--;
      updateQuantity(itemId);
      updateTotalPrice();
    }
  }

  // Function to update quantity display
  function updateQuantity(itemId) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    quantityElement.textContent = quantities[itemId];
  }

  // Function to delete an item
  function deleteItem(itemId) {
    const cartItem = document.querySelector(`.cart-item:nth-child(${itemId})`);
    cartItem.remove();
    updateTotalPrice();
  }

  // Function to toggle item like
  function toggleLike(itemId) {
    likes[itemId] = !likes[itemId];
    const heartButton = document.querySelector(`.heart-button:nth-child(${itemId})`);
    heartButton.classList.toggle('active', likes[itemId]);
  }

  // Function to update total price
  function updateTotalPrice() {
    let totalPrice = 0;
    // Calculate total based on item prices and quantities
    // You may need to adjust this based on your actual data
    // For simplicity, let's assume all items cost $10
    for (const itemId in quantities) {
      totalPrice += quantities[itemId] * 10;
    }

    // Update the total price display
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  // Initial update of total price
  updateTotalPrice();
