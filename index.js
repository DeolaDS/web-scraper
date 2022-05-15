/* require  reads a JavaScript file, executes the file, 
and then proceeds to return the exports object.
Includes modules existing in separate files */
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')
const PORT = 8000 /**Want our server to run on this port */
const app = express()
app.use(cors)
const url ="https://www.tripadvisor.com/Attractions-g187275-Activities-Germany.html"

//getting data from backend/server in browser
app.get('/', function(request, response){
    response.json("This is my first webscraper")

})

app.get('/results', (req, res)=> {
    axios(url)
    /**chaining */
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
       // console.log(pretty($.html()));
        const articles =[]
        
        //find this class in html, and for each
        $('.eHyiI', html).each(function(){ //function cant be an expression 
            //get the text 
            const title = $(this).text()

            //get the link, first the a tag and in that, get the href value
            //const link = $(this).find('a').attr('href')
            articles.push({ //add an object with title and link into the array
                title
                //link
            })
        })
        //console.log(articles)
        res.json(articles)
    }).catch(err => console.log(err))
})


/* List to PORT and see if any changes are made 
() Callback */

app.listen(PORT, () => console.log('server running on Port '+ PORT))

/** Use npm run start bc the script is named that */