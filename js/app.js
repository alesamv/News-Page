
//Url to connect to api
const url = 'https://newsapi.org/v2/everything?' +
'q=digital-economy&' +
'apiKey=d56e63af081f44c9ac43b3bc5a59619a';

//Get the data and display in the html
const infoNewCard = (info) => {
    const newsCardContainer = document.querySelector(".news")
    info.articles.forEach((infoNewCard) => {


	    //Adding a new card
        const div = document.createElement("div")
        div.className = "new"
        div.innerHTML = `
    
            <img src="${infoNewCard.urlToImage}" alt='${infoNewCard.title}'/>
            <div class="data">
                <h3>${infoNewCard.source.name}</h3>
                <h4>${infoNewCard.publishedAt}</h4>
            </div>
            <h2>${infoNewCard.title}</h2>
            <p>${infoNewCard.description}</p>
            <div class ='btn'>
                <a class='btn-new' target='_blank' href="${infoNewCard.url}">Read more</a>
            </div>
            `
      newsCardContainer.appendChild(div)
			
    })
}

fetch(url)
    .then(response => response.json())
    .then(infoNewCard)
