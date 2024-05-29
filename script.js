document.addEventListener('DOMContentLoaded', (event) => {
    function animationTitle() {
        const myTitle = document.getElementById('sub-title');
        const subtitle = document.getElementById('noticias')
        myTitle.classList.add('animated');
        subtitle.classList.add('animated');
    };
    
    function animationButton() {
        const myButton = document.getElementById('myButton');
        const myButton2 = document.getElementById('myButton2');
        const myButton3 = document.getElementById('button-fin');
        const myButton5 = document.getElementById('leyends-button');
        myButton.classList.add('animated');
        myButton2.classList.add('animated');
        myButton3.classList.add('animated');
        myButton5.classList.add('animated');
    };
    
    
    function myFunctions(){
        animationTitle();
        animationButton();
    }
    
    myFunctions();
    
    const API_KEY = 'e5e446466ce1488f9c92db4326cd127f';
    
    async function fetchNews() {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=tennis&language=es&apiKey=${API_KEY}`)
            const data = await response.json();

            console.log("API Response: ", data);

            const newsContainer = document.getElementById('news-container');
            if(!newsContainer) {
                console.error("No se encontro el contenedor de noticias");
                return;
            }
            if(data.articles && data.articles.length > 0) {
                newsContainer.innerHTML = data.articles.map(article => `
                <div class = "news">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Leer más</a>
                </div>
                `).join('');
            } else {
                newsContainer.innerHTML = "<p>No se encuentran noticias de tenis. </p>";
            }
        } catch (error) {
            console.error("Error fetching news: ", error);
            document.getElementById('news-container').innerHTML = "<p>Error al buscar noticias</p>";
        }
    }
    fetchNews();

    const myTitleElement = document.getElementById('main-footer');
    if(myTitleElement) {
        document.getElementById('myButton2').addEventListener('click', function(event) {
            const NoticiaElement = document.getElementById('main-footer')
            if(NoticiaElement) {
                NoticiaElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    const myTitleElement2 = document.getElementById('noticias');
    if(myTitleElement2) {
        document.getElementById('button-fin').addEventListener('click', function (event) {
            const buttonElement = document.getElementById('noticias');
            if(buttonElement) {
                buttonElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

const myTitle3 = document.getElementById('myTitle');
if(myTitle3) {
    document.getElementById('title-footer').addEventListener('click', function(event) {
        const myForm = document.getElementById('myTitle');
        if(myForm) {
            myForm.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

const myButton4 = document.getElementById('leyends-container');
if(myButton4) {
    document.getElementById('myButton').addEventListener('click', function(event) {
        const myElement3 = document.getElementById('leyends-container');
        if(myElement3){
        myElement3.scrollIntoView({
            behavior: 'smooth'
        });
        }
    });
}

const myLeyends = document.getElementById('noticias');
if(myLeyends){
    document.getElementById('leyends-button').addEventListener('click', function(event){
        const myElement6 = document.getElementById('noticias');
        if(myElement6) {
            myElement6.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}


