window.addEventListener('load', () => {
    const kriek = document.getElementById('kriek');
    const lightBeer = document.getElementById('lightBeer');
    const darkBeer = document.getElementById('darkBeer');
    const liquid = document.getElementById('liquid');
    const defaultBeer = window.getComputedStyle(liquid).backgroundImage;

    const beers = {kriek: '#631526', lightBeer: '#FAAF25', darkBeer: '#400000'};

    kriek.addEventListener('click', (e) => {
        liquid.style["background-image"] = defaultBeer.replace("light","kriek");
        reset(liquid);
        e.preventDefault()
    });

    lightBeer.addEventListener('click', (e) => {
        liquid.style["background-image"] = defaultBeer;
        reset(liquid);
        e.preventDefault();

    });

    darkBeer.addEventListener('click', (e) => {
        liquid.style["background-image"] = defaultBeer.replace("light","dark");
        reset(liquid);
        e.preventDefault();
    })

});

function reset(element){
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = null;
}
