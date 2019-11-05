window.addEventListener('load', () => {
    let summary = document.querySelector(".pic-explanation");
    let currentDate = document.querySelector(".pic-date");
    let pic = document.querySelector(".potd");

    const api = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            console.log(data);

            const { explanation, date, url} = data;
            summary.textContent = explanation;
            currentDate.textContent = date;
        
            let img = document.createElement("img");
            img.src = url;

            var src = document.getElementById("real-potd");
            src.appendChild(img);

        });
});