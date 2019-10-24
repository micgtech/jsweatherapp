//get latitude, longitude
window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = '${proxy}http://api.darksky.net/forecast/c97e5bb5ffd4f782f85590a2871704a8/${lat},${long}';
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                });
        });
    }
});