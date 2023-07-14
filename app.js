// Get elements from the DOM
const weightInput = document.getElementById('weightInput');
const addButton = document.getElementById('addButton');
const weightList = document.getElementById('weightList');

// Add event listener to the add button
addButton.addEventListener('click', function() {
  const weight = weightInput.value;
  
  if (weight !== '') {
    const date = new Date().toLocaleDateString();
    const entry = document.createElement('li');
    entry.classList.add('weight-entry');
    entry.innerHTML = `<div class="weight-date">${date}</div><div class="weight-value">${weight} kg</div>`;
    weightList.prepend(entry);
    weightInput.value = '';
  }
});
