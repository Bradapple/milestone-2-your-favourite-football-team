const token = "b7b67f23aa9d47668593cf5535f5db24";

document.getElementById('team-select').addEventListener('change', function (e) {
    const teamId = e.target.value;

    if (teamId !== "") {
        fetch(`https://api.football-data.org/v4/teams/${teamId}`, {
            headers: {
                'X-Auth-Token': token
            }
        })

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //document.getElementById('team-info').textContent = data.name;
            console.log(data);
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
    }
});