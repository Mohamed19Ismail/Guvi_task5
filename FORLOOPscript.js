//Using For in

let hrx = new XMLHttpRequest();

hrx.open('GET', 'https://restcountries.com/v3.1/all' ,true)

hrx.send()

hrx.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    for(i in data){
        console.log(" ")
        console.log("Country Name:",data[i].name.common)
        console.log("Flags:",data[i].flags)
        console.log("Region :",data[i].region)
        console.log("SubRegion:",data[i].subregion)
        console.log("population:",data[i].population) 
    }
}


//Using For 

let hrx = new XMLHttpRequest();

hrx.open('GET', 'https://restcountries.com/v3.1/all' ,true)

hrx.send()

hrx.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    for(i=0;i<data.length;i++){
        console.log(" ")
        console.log("Country Name:",data[i].name.common)
        console.log("Flags:",data[i].flags)
        console.log("Region :",data[i].region)
        console.log("SubRegion:",data[i].subregion)
        console.log("population:",data[i].population) 
    }
}



//Using For of

let hrx = new XMLHttpRequest();

hrx.open('GET', 'https://restcountries.com/v3.1/all' ,true)

hrx.send()

hrx.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    for( i of data){
        console.log(" ")
        console.log("Country Name:",i.name.common)
        console.log("Flags:",i.flags)
        console.log("Region :",i.region)
        console.log("SubRegion:",i.subregion)
        console.log("population:",i.population) 
    }
}

//Using ForEach


let hrx = new XMLHttpRequest();

hrx.open('GET', 'https://restcountries.com/v3.1/all' ,true)

hrx.send()

hrx.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    data.forEach(myFunction);
    function myFunction(i){
        console.log(" ")
        console.log("Country Name:",i.name.common)
        console.log("Flags:",i.flags)
        console.log("Region :",i.region)
        console.log("SubRegion:",i.subregion)
        console.log("population:",i.population) 
    }
}