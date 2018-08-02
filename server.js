/**
 * when dependecies version get changed and it's installed on Heroku or AWS, it always installs the latest. Yarn.lock makes sure we use the same version of dependencies everyhwere and hence
 * You should not .gitignore yarn.lock
 * Yarn has local caching. when  we install express 4.1.6 and next time if we run the same command, it grabd ot from local cache (Offline mode)
 * It might take a minute for NPM where Yarn takes 30 seconds (Really fast eh!)
 * yarn run <script_name> to run the script in package.json
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