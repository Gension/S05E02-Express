const express = require('express');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.use(blogRouter);
app.use(userRouter);


app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});