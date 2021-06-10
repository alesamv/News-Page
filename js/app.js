
//Url to connect to api
const url = 'https://newsapi.org/v2/everything?' +
'q=digital-economy&' +
'apiKey=d56e63af081f44c9ac43b3bc5a59619a';

//Get the data and display in the html
const data = (newsdata) => {
    const articlesDiv = document.querySelector(".news")
    newsdata.articles.forEach((article) => {

	    //Agregadno una noticia
        const div = document.createElement("div")
        div.className = "new"
        div.innerHTML = `
    
            <img src="${article.urlToImage}" alt='${article.title}'/>
            <div class="data">
                <h3>${article.source.name}</h3>
                <h4>${article.publishedAt}</h4>
            </div>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <div class ='btn'>
                <a class='btn-new' target='_blank' href="${article.url}">Read more</a>
            </div>
            `
      articlesDiv.appendChild(div)
			
    })
}



fetch(url)
    .then(response => response.json())
    .then(data)











//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.





var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })