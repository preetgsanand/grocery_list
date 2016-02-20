function checkName() {
	var nameLabel = document.getElementById("nameLabel");
	if(elName.value.length < 5) {
		
		nameLabel.innerHTML = "<b>Invalid Name...";
		truthValue = false;
	}
	else {
		nameLabel.innerHTML = "";
		truthValue = true;
	}
}
function checkPrice() {
	var priceLabel = document.getElementById("priceLabel");
	if(elPrice.value.length < 1) {
		
		priceLabel.innerHTML = "<b>Invalid Price...";
	}
	else {
		priceLabel.innerHTML = "";
	}
}
function addItem() {
	if(truthValue == true) {
		var elName = document.getElementById("i_name");
		var elPrice = document.getElementById("i_price");
		var elGrocery = document.getElementById("table");

		var row = elGrocery.insertRow(0);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		cell1.innerHTML = elName.value;
		cell2.innerHTML = elPrice.value;
		cell0.innerHTML =  "<input type = checkbox class = checkbox id = checkbox>";

		//---------------------------------------------------------
		
		var totalItem = document.getElementById("totalItem");
		var totalPrice = document.getElementById("totalPrice");
		totalPrice.value = parseInt(totalPrice.value) + parseInt(elPrice.value);
		totalItem.value++;
	}
}
function checkCheckbox(e) {
	var target = e.target;
	if(target.type == "checkbox") {
		var totalItem = document.getElementById("totalItem");
		var totalPrice = document.getElementById("totalPrice");
		if(target.checked == 1) {
			totalItem.value--;
			totalPrice.value = parseInt(totalPrice.value) - parseInt(target.parentNode.parentNode.lastChild.innerHTML,10);
		}
		else {
			totalItem.value++;
			totalPrice.value = parseInt(totalPrice.value) + parseInt(target.parentNode.parentNode.lastChild.innerHTML,10);	 
		}
	}
}

var truthValue = false;
var elName = document.getElementById("i_name");
var elPrice = document.getElementById("i_price");
elName.addEventListener("blur",checkName,false);
elPrice.addEventListener("blur".checkPrice,false);


var elSubmit = document.getElementById("submit");
elSubmit.onclick = addItem;


var elTable = document.getElementById("table");
elTable.addEventListener("click",function (e) {
	checkCheckbox(e);
},false);
