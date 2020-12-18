/* Skriv din kod här */

const url = 'https://restcountries.eu/rest/v2/all';

fetch(url).then(
    function(response){
        return response.json()
    }
).then(
    function(data){

        let threeCountry = [];

        for( i = 0; i < 3; i++){
            let rand = Math.floor(Math.random() * data.length);

            threeCountry.push(
                new Country(data[rand].flag, data[rand].name, data[rand].timezones[0])
            )
        }

        for( c of threeCountry){
            c.displayImg();
            c.displayNamn();
            c.displyTid();
        }

    }
)

function Country(_img, _name, _tidsZon){
    this.name = _name;
    this.tidsZon = _tidsZon;
    this.img = _img;
}

Country.prototype.displayNamn = function(){

    let main = document.querySelector('main')
    let section = document.querySelector('section')

    let contName = document.querySelector('h1');
    contName.innerText = this.name;
    
    main.appendChild(section)

};

Country.prototype.displayImg = function(){

    let contImg = document.querySelector('img');
    contImg.src = this.img;

};

Country.prototype.displyTid = function(){

    let contTid = document.querySelector('h3');
    contTid.innerText = this.tidsZon;

    let timeInString = this.tidsZon;

    let subTime = timeInString.substr(4, 2);

    let plusMinusSymbol = timeInString.substr(3, 1);

    let timeToNumber = parseInt(subTime);

    let showTime = new Date();

    if( plusMinusSymbol === '+'){
        contTid.textContent = `${showTime.getUTCHours() + timeToNumber} : ${showTime.getUTCMinutes()}`;
    }else if( plusMinusSymbol === '-'){
        contTid.textContent = `${showTime.getUTCHours() - timeToNumber} : ${showTime.getUTCMinutes()}`;
    }else{
        contTid.textContent = `${showTime.getUTCHours()} : ${showTime.getUTCMinutes()}`;
    }

};