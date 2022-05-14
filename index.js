/* require  reads a JavaScript file, executes the file, 
and then proceeds to return the exports object.
Includes modules existing in separate files */
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const PORT = 8000 /**Want our server to run on this port */

const app = express()

/* List to PORT and see if any changes are made 
() Callback */

app.listen(PORT, ()=> console.log("Server running on ${PORT}"))