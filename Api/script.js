const btn = document.getElementById('Getbtn');
const display = document.getElementById('display');
let clicked = false;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

btn.addEventListener("click", async () => {
    if (clicked) { return; }
    clicked = true;
    btn.innerHTML = "Getting....";
    display.innerHTML = "";
    await fetch("https://artist.myanmarlocalartists.com/api/artists", requestOptions)
    .then(response => response.text())
    .then(result => {
        let data = JSON.parse(result);

        data.forEach(artist => {
            let d = document.createElement('div');
            d.className = "tbc";

            d.innerHTML = `
            <img src="${artist.artist_pp}" alt="pfp">
            <p>${artist.artist_name}</p>
            <p>${artist.artist_type}</p>`;

            display.appendChild(d);
        });
        btn.innerHTML = "Get Artists";
        clicked = false;
    })
    .catch(error => console.log('Error', error));
})