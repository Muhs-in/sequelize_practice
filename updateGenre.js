document.addEventListener('DOMContentLoaded', () => {
    const genreSelect = document.getElementById('genreSelect');
    const form = document.getElementById('updateGenreForm');

    fetch('http://localhost:3000/api/genres')
        .then(response => response.json())
        .then(genres => {
            genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;
                option.textContent = genre.name;
                genreSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching genres:', error));

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const genreId = genreSelect.value;
        const newGenreName = document.getElementById('newGenreName').value;

        const updatedGenreData = {
            name: newGenreName,
        };

        try {
            const response = await fetch(`http://localhost:3000/api/genres/${genreId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedGenreData),
            });

            if (response.ok) {
                alert('Genre updated successfully!');

            } else {
                const errorData = await response.json();
                alert('Error updating genre: ' + errorData.error);
            }
        } catch (error) {
            console.error('Error in request:', error);
            alert('Error updating genre');
        }
    });
});
