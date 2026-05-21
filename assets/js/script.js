const YOUR_KEY = "b2618e622a4349958c0d425840ef7cc5";

document.getElementById('team-select').addEventListener('change', function (e) {
    const teamId = e.target.value;

    if (teamId !== "") {
        fetch(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
            headers: {
                "X-RapidAPI-Key": YOUR_KEY,
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(data => {
                const team = data.response[0].team;
                const venue = data.response[0].venue;
                console.log(data);
                
                
                document.getElementById('team-info').innerHTML = `
                    <h2>${team.name}</h2>
                    <img src="${team.logo}" width="100">
                    <p><strong>Founded:</strong> ${team.founded}</p>
                    <p><strong>Country:</strong> ${team.country}</p>

                    <h3>${venue.name}</h3>
                    <img src="${venue.image}" width="200">
                    <p><strong>City:</strong> ${venue.city}</p>
                    <p><strong>Capacity:</strong> ${venue.capacity.toLocaleString()}</p>`
            })
            .catch(err => console.error(err));
    } else {
        document.getElementById('team-info').innerHTML = "";
    }
});
