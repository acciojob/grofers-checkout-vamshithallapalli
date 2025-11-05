const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const priceCells = document.querySelectorAll('.price');

	let total = 0;
	priceCells.forEach( cell => {
		total += Number(cell.textContent);
	})

	const newRow = document.createElement('tr');
	const newCell = document.createElement('td');

	newCell.setAttribute('colspan', '2');
	newCell.textContent = total;

	newRow.appendChild(newCell);

	document.querySelector("table").appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

