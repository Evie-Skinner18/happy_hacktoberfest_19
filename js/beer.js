window.addEventListener('load', () => {
    const kriek = document.getElementById('kriek');
    const lightBeer = document.getElementById('lightBeer');
    const darkBeer = document.getElementById('darkBeer');
    const liquid = document.getElementById('liquid');

    const beers = {kriek: '#631526', lightBeer: '#FAAF25', darkBeer: '#400000'};

    kriek.addEventListener('click', (e) => {
        liquid.style.backgroundColor = beers.kriek;
        e.preventDefault()
    });

    lightBeer.addEventListener('click', (e) => {
        liquid.style.backgroundColor = beers.lightBeer;
        e.preventDefault();

    });

    darkBeer.addEventListener('click', (e) => {
        liquid.style.backgroundColor = beers.darkBeer;
        e.preventDefault();
    })

});
