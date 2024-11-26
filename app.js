const express = require('express');
const cors = require('cors');
const app = express();

// routes 
const authorRoutes = require('./routes/authorRoutes')
const bookRoutes = require('./routes/bookRoutes')
const genreRoutes = require('./routes/genreRoutes')

app.use(cors());
app.use(express.json());
app.use('/api', authorRoutes)
app.use('/api', bookRoutes)
app.use('/api', genreRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})