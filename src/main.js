// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.list-class a', {
    // captionsData: 'alt',
    // captionPosition: 'bottom',
    // captionDelay: 250,
  });

  lightbox.on('show.simplelightbox', function () {
    spinner: true;
    

});

const apiKey = '44855126-e7e59ad0378cdd72f172648f5';
const inputQ = document.querySelector('.input');
const galleryCard = document.querySelector('.list-class')
const searchBtn = document.querySelector('.start-btn')
const formForm = document.querySelector('.input-button')

// const query = inputQ.value;
// console.log(query)

let query = 'tower';

const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type="photo"&orientation="horizontal"&safesearch="true"`;

// function getPicture(query) {
//     return fetch (url).then((res) => {
//         console.log(res);
//         if (!res.ok) {
//             throw new Error (res.status);
//         }
//         return res.json();
//             })}

    // getPicture("tower").then ((data) => {
    //     console.log(data)
    //     // galleryCard.insertAdjacentHTML('beforeend', cardCollection(data));
    // })
    // .catch ((err) => console.error(err))

    function getPictureByTag(tags) {
        return fetch (`https://pixabay.com/api/?key=${apiKey}&q=${tags}`).then((res) => {
            console.log(res);
            if (!res.ok) {
                throw new Error (res.status);
            }
            return res.json();
                })}
    
        getPictureByTag('dogs').then ((data) => {
            console.log(data)
            galleryCard.insertAdjacentHTML('beforeend', cardCollection(data));
        })
        .catch ((err) => console.error(err))

function cardCollection({hits}) {

    const listItems = hits.map((webformatURL, largeImageURL, tags, likes, views, comments, downloads) => `
    <li class = "gallery-item"><a class="gallery-link" href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" class="gallery-img">
      <h2 class="category js-likes">Likes</h2>
      <p class="numbers js-likes-num">'${likes}'</p>
      <h2 class="category js-views">Views</h2>
      <p class="numbers js-views-num">'${views}'</p>
      <h2 class="category js-comments"></h2>
      <p class="numbers js-comments-num">'${comments}'</p>
      <h2 class="category js-downloads"></h2>
      <p class="numbers js-downloads-num">'${downloads}'</p>
    </a></li>
    `).join("")
}

formForm.addEventListener('submit', handleSearch);

function handleSearch(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const queryValue = form.elements.inputf.value;
    console.log(queryValue);
            getPicture(queryValue)
                .then(cardCollection)
                .catch(fetchError)
    form.reset()
}


function fetchError(err) {
    iziToast.show({
        message: '"Sorry, there are no images matching your search query. Please try again!"',
        messageColor: 'white',
        messageLineHeight: '150%',
        backgroundColor: '#ef4040',
        position: 'topRight'
    });;
}

