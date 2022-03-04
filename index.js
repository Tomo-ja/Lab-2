let menu = [{"Name": "Pizza", "Price": 14, "Popularity": "high"},
			{"Name": "Hamburger", "Price": 12, "Popularity": "high"},
			{"Name": "Sushi", "Price": 15, "Popularity": "high"}]


const parentTable = document.getElementById('table')

let newTableHead = document.createElement('thead')
newTableHead.innerHTML = '<tr><td>Name</td><td>Price</td><td>Popularity</td><td></td></tr>'
parentTable.appendChild(newTableHead)

let newTableBody = document.createElement('tbody')
newTableBody.id = "table-body"
parentTable.appendChild(newTableBody)

const tableBody = document.getElementById('table-body')
for (i=0; i<menu.length; i++){
	let newRow = document.createElement('tr')
	newRow.innerHTML = `<td>${menu[i].Name}</td><td>${menu[i].Price}</td><td>${menu[i].Popularity}</td><td>x</td>`
	tableBody.appendChild(newRow)
}

const tableRows = tableBody.getElementsByTagName('tr')
const tableRowsArray = Array.from(tableRows)

tableRowsArray.forEach(row => {
	row.addEventListener('mouseover', ()=>{
		row.style.backgroundColor = "gray"
	})
	row.addEventListener('mouseleave', ()=>{
		row.style.backgroundColor = "white"
	})
});

const form = document.getElementById('form')
const nameOfNew = document.getElementById('name')
const priceOfNew = document.getElementById('price')
const popularityOfNew = document.getElementById('popularity')
form.addEventListener('submit',(e)=>{
	e.preventDefault()
	let name = nameOfNew.value
	name = name.charAt(0).toUpperCase() + name.slice(1)
	let price = priceOfNew.value
	let popularity = popularityOfNew.value

	let newRow = document.createElement('tr')
	newRow.innerHTML = `<td>${name}</td><td>${price}</td><td>${popularity}</td><td>X</td>`
	tableBody.appendChild(newRow)
	nameOfNew.value = ""
	priceOfNew.value = ""
	popularityOfNew.value = ""
})

tableRowsArray.forEach(row => {
	let cells = row.getElementsByTagName('td')
	let cellsArray = Array.from(cells)
	let deleteBtns = cellsArray[cellsArray.length -1]
	deleteBtns.addEventListener('click', ()=>{
		let parentRow = deleteBtns.parentNode
		parentRow.style.display = "none"
	})
})

