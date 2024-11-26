document.addEventListener('DOMContentLoaded', () => {
    const bookListDiv = document.getElementById('bookList');

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/books');
            const books = await response.json();

            bookListDiv.innerHTML = '';


            books.forEach(book => {
                const bookItem = document.createElement('p');

                const bookDetails = `${book.title} - Author: ${book.Author ? book.Author.name : 'No author'}`;
                bookItem.textContent = bookDetails;

                bookListDiv.appendChild(bookItem);
            });
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    fetchBooks();

    fetch('http://localhost:3000/api/authors')
        .then(response => response.json())
        .then(authors => {
            const authorSelect = document.getElementById('authorId');
            authors.forEach(author => {
                const option = document.createElement('option');
                option.value = author.id;
                option.textContent = author.name;
                authorSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching authors:', error));

    fetch('http://localhost:3000/api/genres')
        .then(response => response.json())
        .then(genres => {
            const genreSelect = document.getElementById('genreId');
            genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;
                option.textContent = genre.name;
                genreSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching genres:', error));

    document.getElementById('bookForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const publishedDate = document.getElementById('publishedDate').value;
        const authorId = parseInt(document.getElementById('authorId').value);
        const genreId = parseInt(document.getElementById('genreId').value);

        const bookData = { title, description, publishedDate, authorId, genreId };

        try {
            const response = await fetch('http://localhost:3000/api/books', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData),
            });

            if (response.ok) {
                const newBook = await response.json();
                console.log('Book created:', newBook);
                alert('Book created successfully!');
            } else {
                const errorData = await response.json();
                console.error('Error creating book:', errorData.error);
                alert('Error creating book');
            }
        } catch (error) {
            console.error('Request failed:', error);
            alert('Request failed');
        }
    });
});
