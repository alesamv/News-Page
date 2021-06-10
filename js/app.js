
//Calling to principal function to show the news in the page for the first time
retrieve()

var cont = 0; //Counter to control the alert
var rf = document.getElementById("refresh"); //Get the button
rf.addEventListener("click", retrieve); //Event to the button to refresh the news

//Get the actual date in milliseconds
function date() {
    var f = new Date();
    actualDate = (f.getFullYear()+ "-"+ (f.getMonth() +1) + "-" + f.getDate());
    actualDate = new Date(actualDate).getTime();
    return actualDate;
}

//Get the news from the api and show in the page
function retrieve(){
    //Counter to show the alert
    cont += 1;
    if (cont > 0) {
        alert("The list has been updated");
    }

    //Url to connect to api
    const url = 'https://newsapi.org/v2/everything?' +
                'q=coronavirus&' +
                'apiKey=d56e63af081f44c9ac43b3bc5a59619a';

    //Request the data from the api
    var req = new Request(url);
    fetch(req).then(response => response.json())
        .then((info) => {

            //Get the data and display in the html
            const newsCardContainer = document.querySelector(".news-container")
            info.articles.forEach((infoNewCard) => {

                date(); //actual date
                //Get the substring that corresponds to the date of the news in milliseconds
                var subString = new Date(infoNewCard.publishedAt.substring(0,10)).getTime();
                var diff = (actualDate - subString); //Get the diference between the dates
                
                //Obtain how many days ago the news was published
                dias = Math.round(diff/(1000*60*60*24)); 
                
                //Adding a new card
                const div = document.createElement("div")
                div.className = "new-card"
                div.innerHTML = `
                    <a href="${infoNewCard.url}" target=”_blank”>
                        <img src="${infoNewCard.urlToImage}" alt='${infoNewCard.title}'/>
                    </a>
                    <div class="data">
                        <h3>${infoNewCard.source.name}</h3>
                        <h4>Publicado hace ${dias} días</h4>
                    </div>
                    <a href="${infoNewCard.url}" target=”_blank”>
                        <h2>${infoNewCard.title}</h2>
                    </a>
                    <p>${infoNewCard.description}</p>   
                    `
                newsCardContainer.appendChild(div)		
            })
        })
}

