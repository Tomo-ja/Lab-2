let menu = [{"Name": "Pizza", "Price": 14, "Popularity": "high"},
			{"Name": "Hamburger", "Price": 12, "Popularity": "high"},
			{"Name": "Sushi", "Price": 15, "Popularity": "high"}]


const parentTable = document.getElementById('table')

//create initial table head in table
let newTableHead = document.createElement('thead')
newTableHead.innerHTML = '<tr><td>Name</td><td>Price</td><td>Popularity</td><td></td></tr>'
parentTable.appendChild(newTableHead)

//create initial table body in table
let newTableBody = document.createElement('tbody')
newTableBody.id = "table-body"
parentTable.appendChild(newTableBody)

//create initial table rows based on given menu array
let tableBody = document.getElementById('table-body')
for (i=0; i<menu.length; i++){
	let newRow = document.createElement('tr')
	newRow.innerHTML = `<td>${menu[i].Name}</td><td>${menu[i].Price}</td><td>${menu[i].Popularity}</td><td>x</td>`
	tableBody.appendChild(newRow)
}

//assign the rows we just created into array oject
let tableRows = tableBody.getElementsByTagName('tr')
let tableRowsArray = Array.from(tableRows)

//change the color of the row user's hovering on 
tableRowsArray.forEach(row => {
	row.addEventListener('mouseover', ()=>{
		row.style.backgroundColor = "gray"
	})
	row.addEventListener('mouseleave', ()=>{
		row.style.backgroundColor = "white"
	})
});

//assign form element to valuable
const form = document.getElementById('form')
const nameOfNew = document.getElementById('name')
const priceOfNew = document.getElementById('price')
const popularityOfNew = document.getElementById('popularity')

//event after a user submit the form
form.addEventListener('submit',(e)=>{
	e.preventDefault() // not to refresh the page
	let name = nameOfNew.value
	name = name.charAt(0).toUpperCase() + name.slice(1) // make first letter be capital
	let price = priceOfNew.value
	let popularity = popularityOfNew.value

	// add input info into the table 
	let newRow = document.createElement('tr')
	newRow.innerHTML = `<td>${name}</td><td>${price}</td><td>${popularity}</td><td>X</td>`
	tableBody.appendChild(newRow)

	let message = `New menu is ${name}. Price is ${price}. it would be ${popularity} popularity`
	alert(message)

	// delete old info in the inputs
	nameOfNew.value = ""
	priceOfNew.value = ""
	popularityOfNew.value = ""

	addDeleteFunction()
})

// add event on every delete button
function addDeleteFunction () {
	tableBody = document.getElementById('table-body')
	tableRows = tableBody.getElementsByTagName('tr')
	tableRowsArray = Array.from(tableRows)

	tableRowsArray.forEach(row => {
		let cells = row.getElementsByTagName('td')
		let cellsArray = Array.from(cells)
		let deleteBtns = cellsArray[cellsArray.length -1]
		deleteBtns.addEventListener('click', ()=>{
			let parentRow = deleteBtns.parentNode
			parentRow.style.display = "none"
		})
	})
}

addDeleteFunction()