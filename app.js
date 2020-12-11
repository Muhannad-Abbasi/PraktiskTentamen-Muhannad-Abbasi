/* Skriv din kod här */

const url = 'https://restcountries.eu/rest/v2/all';

fetch(url).then(
    function(response){
        return response.json()
    }
).then(
    function(data){
        let threeCountry = [];
        console.log(data[0])

        for( i = 0; i < 3; i++){
            let rand = Math.floor(Math.random() * data.length);
            console.log(rand)

            threeCountry.push(
                new Country(data[rand].name, data[rand].timezones ,data[rand].flag)
            )
            console.log(threeCountry)
        }
        

        for( c of threeCountry){
            c.displayNamn();
            c.displayImg();
            c.displyTid();
        }
        console.log(c)
        

    }
)

function Country(_namn, _tidsZon, _img){
    this.namn = _namn;
    this.tidsZon = _tidsZon;
    this.img = _img;
}

Country.prototype.displayNamn = function(){
    let contName = document.querySelector('h1');
    contName.innerText = this.name;
}

Country.prototype.displayImg = function(){
    let contImg = document.querySelector('img');
    contImg.src = this.img;
}

Country.prototype.displyTid = function(){
    let contTid = document.querySelector('h3');
    let date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    contTid.innerHTML = `${hour}:${min}`

}