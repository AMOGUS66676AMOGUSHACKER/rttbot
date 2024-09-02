// Replace 'YOUR_API_KEY' with your actual Brawl Stars API key
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMxZGNmOTNhLWMzZjYtNDhhZi05MGRlLTkwZWU5ZWFlMDZmOCIsImlhdCI6MTcyNTI5NDE1Mywic3ViIjoiZGV2ZWxvcGVyLzQ1ZmY1YzM3LTBiNTgtMWE3My1iZTlkLWRkZTE5MjhiMGNmYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNzguNTUuNzkuMTAyIl0sInR5cGUiOiJjbGllbnQifV19.4i79LjVmkfwFgo6o6E_uicDvzGnf_PjMR0wduRszWSe8RVHM4efvH-0UDodW7UtYTQ-dPABmTN_4Vtv8DQzOPA';

document.getElementById('fetchStats').addEventListener('click', () => {
    const playerTag = document.getElementById('playerTag').value.replace('#', '%23');
    const url = `https://api.brawlstars.com/v1/players/${playerTag}`;

    fetch(url, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayPlayerStats(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to fetch player stats. Please check the tag and try again.');
    });
});

function displayPlayerStats(data) {
    const statsContainer = document.getElementById('playerStats');
    statsContainer.style.display = 'block';
    statsContainer.innerHTML = `
        <h3>${data.name} (#${data.tag})</h3>
        <p><strong>Trophies:</strong> ${data.trophies}</p>
        <p><strong>Highest Trophies:</strong> ${data.highestTrophies}</p>
        <p><strong>Solo Victories:</strong> ${data.soloVictories}</p>
        <p><strong>Duo Victories:</strong> ${data.duoVictories}</p>
        <p><strong>3v3 Victories:</strong> ${data['3vs3Victories']}</p>
        <p><strong>Best Time as Big Brawler:</strong> ${data.bestTimeAsBigBrawler}</p>
    `;
}
