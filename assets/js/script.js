const token = "b7b67f23aa9d47668593cf5535f5db24";

document.getElementById('teamSelect').addEventListener('change', function (e) {
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
            // Show the result on the page
            document.getElementById('team-info').textContent = data.name;
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
    }
});