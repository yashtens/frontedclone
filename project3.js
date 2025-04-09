function addFoodItem() {
    let foodInput = document.getElementById('food-item');
    let foodList = document.getElementById('food-list');

    if (foodInput.value !== '') {
        let li = document.createElement('li');
        li.textContent = foodInput.value;
        foodList.appendChild(li);
        foodInput.value = '';
    } else {
        alert('Please enter a food item.');
    }
}
