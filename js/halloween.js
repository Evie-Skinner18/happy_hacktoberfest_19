window.addEventListener('load', () => {
    const jackolantern = document.getElementById('jackolantern');
    var offImg= "./images/off.jpg";
    var onImg= "./images/on.jpg";

    jackolantern.addEventListener('click', (e) => {
        if (jackolantern.getAttribute('src') == offImg) {
            jackolantern.src = onImg;
        }
        else {
            jackolantern.src = offImg;
        }
        e.preventDefault()
    });
});
