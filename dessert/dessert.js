function showQuantityControl(button) {
    const quantityControls = button.nextElementSibling; // Get the next sibling (quantity-controls)
    quantityControls.classList.toggle('hidden'); // Toggle visibility
    button.style.display = 'none'; // Hide the button
}

function adjustQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantitySpan.textContent);
    currentQuantity += change;
    if (currentQuantity < 0) currentQuantity = 0; // Ensure quantity doesn't go below 0
    quantitySpan.textContent = currentQuantity;
}