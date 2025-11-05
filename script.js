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

	  let ansDiv = document.getElementById("ans");
      if (!ansDiv) {
        ansDiv = document.createElement("div");
        ansDiv.id = "ans";
        document.body.appendChild(ansDiv);
      }

      ansDiv.textContent = total;
};

getSumBtn.addEventListener("click", getSum);

