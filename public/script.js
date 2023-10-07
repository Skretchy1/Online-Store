window.onload = function(){
	//Cart box.
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-close');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('active');
	});


	//Adding data to localstorage.
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[1].children[0].textContent,
						no:1
					};
				if(JSON.parse(sessionStorage.getItem('items')) === null){
					items.push(item);
					sessionStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(sessionStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					sessionStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}

	//Adding data to shopping cart.
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(sessionStorage.getItem('items')).map(data=>{
		no = no+data.no;	
    });
	iconShoppingP.innerHTML = no;
	
	
	//Adding cartbox data in table.
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	tableData += '<tr><th>P No.</th><th>Item Name</th><th>Item No.</th><th>Item Price</th><th></th></tr>';
	if(JSON.parse(sessionStorage.getItem('items'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(sessionStorage.getItem('items')).map(data=>{
			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
		});
	}
	cardBoxTable.innerHTML = tableData;
    
}



// window.onload = function(){
// 	//Cart box.
// 	const iconShopping = document.querySelector('.iconShopping');
// 	const cartCloseBtn = document.querySelector('.fa-close');
// 	const cartBox = document.querySelector('.cartBox');
// 	iconShopping.addEventListener("click",function(){
// 		cartBox.classList.add('active');
// 	});
// 	cartCloseBtn.addEventListener("click",function(){
// 		cartBox.classList.remove('active');
// 	});


// 	//Adding data to localstorage.
// 	const attToCartBtn = document.getElementsByClassName('attToCart');
// 	let items = [];
// 	for(let i=0; i<attToCartBtn.length; i++){
// 		attToCartBtn[i].addEventListener("click",function(e){
// 			if(typeof(Storage) !== 'undefined'){
// 				let item = {
// 						id:i+1,
// 						name:e.target.parentElement.children[0].textContent,
// 						price:e.target.parentElement.children[1].children[0].textContent,
// 						no:1
// 					};
// 				if(JSON.parse(localStorage.getItem('items')) === null){
// 					items.push(item);
// 					localStorage.setItem("items",JSON.stringify(items));
// 					window.location.reload();
// 				}else{
// 					const localItems = JSON.parse(localStorage.getItem("items"));
// 					localItems.map(data=>{
// 						if(item.id == data.id){
// 							item.no = data.no + 1;
// 						}else{
// 							items.push(data);
// 						}
// 					});
// 					items.push(item);
// 					localStorage.setItem('items',JSON.stringify(items));
// 					window.location.reload();
// 				}
// 			}else{
// 				alert('local storage is not working on your browser');
// 			}
// 		});
// 	}

// 	//Adding data to shopping cart.
// 	const iconShoppingP = document.querySelector('.iconShopping p');
// 	let no = 0;
// 	JSON.parse(localStorage.getItem('items')).map(data=>{
// 		no = no+data.no;	
//     });
// 	iconShoppingP.innerHTML = no;
	
	
// 	//Adding cartbox data in table.
// 	const cardBoxTable = cartBox.querySelector('table');
// 	let tableData = '';
// 	tableData += '<tr><th>P No.</th><th>Item Name</th><th>Item No.</th><th>Item Price</th><th></th></tr>';
// 	if(JSON.parse(localStorage.getItem('items'))[0] === null){
// 		tableData += '<tr><td colspan="5">No items found</td></tr>'
// 	}else{
// 		JSON.parse(localStorage.getItem('items')).map(data=>{
// 			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
// 		});
// 	}
// 	cardBoxTable.innerHTML = tableData;
    
// }




//The action.
var today = new Date();
document.getElementById("example").innerHTML = today;

var d = new Date(2022, 3, 2);
document.getElementById("dateExp").innerHTML = d;
var timeDate = d - today;
document.getElementById("dateLeft").innerHTML=convert(timeDate)

// Time calculations for hours, minutes and seconds. We convert miliseconds in hours minutes and seconds.
function convert(timeDate){
    let hours,minutes,seconds;
    hours = Math.floor(timeDate/1000/60/60);
    minutes = Math.floor((timeDate/1000/60/60-hours)*60);
    seconds = Math.floor(((timeDate/1000/60/60-hours)*60-minutes)*60);
  
    if(timeDate>=0)
    return hours + " hours, " + minutes + " minutes and " + seconds + " seconds.";
    else return "Offer has finshed!";
}

function validDate() {
    let name = document.forms["newForm"]["name"].value;
    let lastname = document.forms["newForm"]["lastname"].value;
    let email = document.forms["newForm"]["email"].value;
    let phone = document.forms["newForm"]["phone"].value;
    let age =document.forms["newForm"]["age"].value;
    


    if (name == "") {
        alert("Please enter your name");
        return false;
    }
    
    if (lastname == "") {
        alert("Please enter your lastname");
        return false;
    }

    if(email.length <= 9) {
        alert("The minimal  length of email addresses are 9 characters")
        return false;
    } 
    
    if(email.length > 64) {
        alert("There is a length limit on email addresses. That limit is a maximum of 64 characters.")
        return false;
    }

    if (phone==""){
        alert("Please enter your phone number")
            return false;
    }

    if(age==""){
        alert("Please write your age")
            return false;
    }
    
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event; //condition ? if (true) : if (false).
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function calculator() {
    let package = document.forms["cena"]["type"].value;
    let quantity = document.forms["cena"]["quantity"].value;
    let price = package*quantity;
    let a = package*quantity*0.12;
    let total = price + a;
    
    
    if(package == 0) alert("Please select a package.")
    else alert("Your monthly cost is: € " + total);
    return false;
    
}



// From here the other exercise



//Adding them to the table
async function preberiIzdelke() {
    const odgovor = await fetch("json.json");
    const rawPodatki = await odgovor.text();
    let podatki = JSON.parse(rawPodatki);
    const tabela = document.getElementById("tabela-izdelkov");
    for (const izdelek of podatki) {
        let vrstica = tabela.insertRow(-1); 
		let picture = vrstica.insertCell(-1);
        picture.innerHTML = "<img src='" + izdelek.picture + "' class='img-thumbnail'>";
        let id = vrstica.insertCell(-1);
        id.innerHTML = izdelek.id;
        let name = vrstica.insertCell(-1);
        name.innerHTML = izdelek.name;
        let description = vrstica.insertCell(-1);
        description.innerHTML = izdelek.description;
        let lenght = vrstica.insertCell(-1);
        lenght.innerHTML = izdelek.lenght; 
        let price = vrstica.insertCell(-1);
        price.innerHTML = izdelek.Price; 
        let discount = vrstica.insertCell(-1);
        discount.innerHTML = izdelek.Discount; 
        let dodaj = vrstica.insertCell(-1);
        dodaj.innerHTML = "<button onclick='dodaj(" + JSON.stringify(izdelek) + ")' class='btn btn-secondary'>Dodaj v košarico</button>";
    }
}

async function dodaj(izdelek) {
    let kosarica = (JSON.parse(sessionStorage.getItem("kosarica")) || []);
    kosarica.push(izdelek);
    console.log(kosarica);
    sessionStorage.setItem("kosarica", JSON.stringify(kosarica));
}

async function pridobiKosarico() {
    let kosarica = (JSON.parse(sessionStorage.getItem("kosarica")) || []);
    const tabela = document.getElementById("tabela-kosarica");
    let skupaj = 0;
    for (const [index, izdelek] of kosarica.entries()) {
        let znesek = parseFloat(izdelek.Price) - izdelek.Discount / 100 * izdelek.Price;
        skupaj += znesek;
        let vrstica = tabela.insertRow(-1);
		// let picture = vrstica.insertCell(-1);
        // picture.innerHTML = "<img src='" + izdelek.picture + "' class='img-thumbnail' style='width: 10%;'>";
        let naziv = vrstica.insertCell(-1);
        naziv.innerHTML = izdelek.name;
        let cena = vrstica.insertCell(-1);
        cena.innerHTML = znesek;
        let odstrani = vrstica.insertCell(-1);
        odstrani.innerHTML = "<button class='btn btn-close' onclick='odstrani(" + index + ")'>Odstrani</button>";
    }
    let skupnaCena = document.getElementById("skupaj");
    skupnaCena.innerHTML = skupaj;
}

async function odstrani(index) {
    console.log(index);
    let kosarica = (JSON.parse(sessionStorage.getItem("kosarica")) || []);
    kosarica.splice(index, 1);
    sessionStorage.setItem("kosarica", JSON.stringify(kosarica));
    location.reload();
}

async function dataMatching() {
    const browse = await fetch("accounts.json");
    const data = await browse.text();
    let registeredUsers = JSON.parse(data);
    let userNam = document.forms["prijava"]["uporabnisko_ime"].value;
    let userPass = document.forms["prijava"]["geslo"].value;
    let condition = false;
    for (let user of registeredUsers) {
        if (user.userName == userNam) {
            if (user.password == userPass) {
                console.log(user);
                sessionStorage.setItem("user", JSON.stringify(user));
                condition = true;
            }
        }
    }
    if (condition == false) {
        alert("You are not registered in the system. Please register or try again!");
    }
}


let skupnaCena = document.getElementsByClassName("navbar");
skupnaCena.innerHTML = document.write("Hello");