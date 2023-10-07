$(document).ready(function(){ 
    $("#checkoutbutton").click(function() {
        let order  = {
            "products" : JSON.parse(sessionStorage.getItem("items")),
            "timestamp" : Date.now(),
            "price" : calculate()
        }

        $.post("/checkout", order , function(data, status){ 
            
            if(status === "success"){
                console.log(data);
                sessionStorage.setItem("items", JSON.stringify({"products": []}));
            }else{
                console.log(data);
            }
        });
        
    });
    $.get("/products", (data, status)=> {
        
        }
    );
});



function calculate(){
    let price = 0;
    let rawdata = sessionStorage.getItem('kosarica');
    let data = JSON.parse(rawdata);
    for (const product of data.products){
        price+= product.Price * quantity; 
    }
    console.log(price)
    return price;
}