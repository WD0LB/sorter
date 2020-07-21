//Sorter is an app , it allow you sort your words
let input = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let sortBtn = document.getElementById('sortBtn');
let orderBtn = document.getElementById('orderBtn');
let restartBtn = document.getElementById('restartBtn');
let cvBtn = document.getElementById('cvBtn');
let footer = document.getElementById('footer');
let ul = document.getElementById('ul');
const MaxNumItem = 10000;
let array = [];
let arraySorted = [];
let orderArray = ['Ascend', 'Descend'];
//FUN
function addItem() {
	let iv = input.value.trim();
	let al = array.length;
	if (iv !== '' && al < MaxNumItem) {
		if (al === 0) {
			ul.innerHTML = '';
		}
		array.push(iv);
		showItem(input.value);
		input.value = "";
	} else if(al >= MaxNumItem){
		let txt_0 = "Contact developer for sort more 10000 items";
		input.value = txt_0;
		addBtn.innerText = txt_0;
		cvBtn.removeAttribute('hidden', true);
		footer.removeAttribute('hidden', true);
		restartBtn.removeAttribute('hidden', true);
	}
}

function showItem(text) {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(text));
	ul.appendChild(li);
}

function sortArray() {
		showArray("sort");
}

function choiceOrderChecker(choiceOrder) {
	if (choiceOrder === "sort") {
		arraySorted = array.sort();
		orderBtn.innerText = 'Ascend';
	} else if (choiceOrder === "toggle"){
		arraySorted = array.reverse();
		let or = orderArray.reverse();
		orderBtn.innerText = or[0];
	}
}

function showArray(choiceOrder) {
	if (array.length !== 0) {
		choiceOrderChecker(choiceOrder);
		ul.innerHTML = "";
		for (let i = 0; i < arraySorted.length; i++) {
			showItem(arraySorted[i]);
		}
		restartBtn.removeAttribute('hidden', true);
		cvBtn.removeAttribute('hidden', true);
		footer.removeAttribute('hidden', true);
	}
}
function toggleOrder() {
		showArray("toggle");
}

function restart() {
	array = [];
	input.value = "";
	ul.innerHTML = "";
	orderBtn.innerText = "ORDER";
	addBtn.innerText = "ADD";
	inputFocus();
	showItem("Welcome");
	showItem("Again");
	footer.setAttribute("hidden", true);
	restartBtn.setAttribute('hidden', true);
}

function inputFocus() {
	input.focus();
}
function inputFn(ev) {
	if (ev.key === 'Enter') {
	addItem();		
	}
}
function addFn(argument) {
	addItem();
	inputFocus();
}
//EVENTS
addBtn.addEventListener("click", addFn);
input.addEventListener("keypress", (ev) => { inputFn(ev) });
sortBtn.addEventListener("click", sortArray);
orderBtn.addEventListener("click", toggleOrder);
restartBtn.addEventListener("click", restart);