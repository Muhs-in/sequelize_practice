const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;

    const authorData = {
        name: name,
        bio: bio,
    };


    axios.post('http://localhost:3000/api/authors', authorData)
        .then((response) => {
            console.log('Author created:', response.data);

            location.reload()
        })
        .catch((error) => {
            console.error('There was an error creating the author:', error);
        });

});

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#response-authors tbody');

    fetch('http://localhost:3000/api/authors').then(response => response.json()).then(authors => {
        authors.forEach(author => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = author.name;
            row.appendChild(nameCell);

            const bioCell = document.createElement('td');
            bioCell.textContent = author.bio;
            row.appendChild(bioCell);



            tbody.appendChild(row);
        });
    }).catch(error => console.error('Error fetching authors:', error));
})
