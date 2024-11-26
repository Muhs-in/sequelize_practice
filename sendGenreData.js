document.addEventListener('DOMContentLoaded', () => {
    const genreForm = document.getElementById('genreForm');
    const genreNameInput = document.getElementById('genreName');
    const genreListDiv = document.getElementById('genreList');

    const fetchGenres = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/genres');
            const genres = await response.json();
            genreListDiv.innerHTML = '';
            genres.forEach(genre => {
                const genreItem = document.createElement('p');
                genreItem.textContent = genre.name;
                genreListDiv.appendChild(genreItem);
            });
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    fetchGenres();

    genreForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const genreName = genreNameInput.value;

        try {
            const response = await fetch('http://localhost:3000/api/genres', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: genreName })
            });

            if (response.ok) {
                alert('Genre added successfully!');
                genreNameInput.value = '';
                fetchGenres();
            } else {
                const errorData = await response.json();
                console.error('Error creating genre:', errorData.error);
                alert('Error creating genre');
            }
        } catch (error) {
            console.error('Request failed:', error);
            alert('Request failed');
        }
    });
});
