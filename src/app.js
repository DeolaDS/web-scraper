const feedDisplay = document.querySelector('#feed')

//asynch JS
//fetch API
fetch('http://localhost:8000/results')
    .then(response => response.json)
    .then(data => {
        data.forEach(article => {
            const title = '<h3>' + article.title + '</h3>'
            feedDisplay.insertAdjacentHTML("beforeend", title)
        })
    })
    .catch(err=> console.log(err))