/**
 * when dependecies version get changed and it's installed on Heroku or AWS, it always installs the latest. Yarn.lock makes sure we use the same version of dependencies everyhwere and hence
 * You should not .gitignore yarn.lock
 * 
 * 
 */
const express = require('express');
const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
    res.send('this is my Yarn project');
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});