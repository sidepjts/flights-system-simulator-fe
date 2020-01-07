//Install express server
const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function() {
    console.log('server running on localhost:' + port);
});
