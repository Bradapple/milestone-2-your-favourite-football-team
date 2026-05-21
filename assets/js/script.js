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
                    <div class="team-header">
                        <img src="${team.logo}" alt="${team.name} logo">
                        <h2>${team.name}</h2>
                    </div>

                    <div class="team-info">
                        <p><strong>Founded:</strong> ${team.founded}</p>
                        <p><strong>Country:</strong> ${team.country}</p>
                    </div>

                    <img class="venue-img" src="${venue.image}" alt="${venue.name}">

                    <div class="team-info">
                        <p><strong>Stadium:</strong> ${venue.name}</p>
                        <p><strong>City:</strong> ${venue.city}</p>
                        <p><strong>Capacity:</strong> ${venue.capacity.toLocaleString()}</p>
                    </div>`;
            })
            .catch(err => console.error(err));
    } else {
        document.getElementById('team-info').innerHTML = "";
    }
});

document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('team-info').innerHTML = "";
    document.getElementById('team-select').value = "";
});
