import data from './data.js'
const itemList = document.getElementById('item-list')
const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('items');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	// put new div inside items container
	itemsContainer.appendChild(newDiv)
  // create a paragraph element for a description
  const desc = document.createElement('p')
  // give the paragraph text from the data
  desc.innerText = data[i].desc
  // append the paragraph to the div
  newDiv.appendChild(desc)
  // do the same thing for price
  const price = document.createElement('p')
  price.innerText = data[i].price
  newDiv.appendChild(price)
  const button = document.createElement('button')
  button.id = data[i].name
  button.dataset.price = data[i].price
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)
}
const all_items_button = Array.from(document.querySelectorAll("button"))
  all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))
