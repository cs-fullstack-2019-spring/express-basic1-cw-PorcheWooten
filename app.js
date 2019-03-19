const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to Code School')
});
// Make the root endpoint says “[YOUR NAME] created a server here!” got a get request.
app.get('/chey', (req, res) => {
    res.send('Chey created a get request here !!')
});

// Make the root endpoint to says “[YOUR NAME] got a POST request!!!” for a post request.
app.post('/chey2', (req, res) => {
    res.send('Chey created a post request here !!')
});


app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});