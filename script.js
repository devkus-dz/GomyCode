function helloWorld (){

    let hello = document.getElementById("get-this").innerText;

    alert (hello);
    
    if(hello === "Hello world"){
        document.getElementById("get-this").innerHTML = "Hello All";
    }else{
        document.getElementById("get-this").innerHTML = "Hello world";
    }
    
}