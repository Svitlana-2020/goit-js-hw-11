// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    spinner: true,
  });


const apiKey = '44855126-e7e59ad0378cdd72f172648f5';
const inputQ = document.querySelector('.input');
const galleryCard = document.querySelector('.list-class')
const searchBtn = document.querySelector('.start-btn')
const formForm = document.querySelector('.input-button')

formForm.addEventListener('submit', handleSearch);

            function handleSearch(e) {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const queryValue = form.elements.inputf.value;
                        console.log(queryValue);
                                getPictureByQuery(queryValue)
                                    .then((data) => {
                                        console.log(data.hits);
                                        const dataHits = data.hits;
                                        const cardCollectionMarkup = cardCollection(dataHits);
                                        console.log(cardCollectionMarkup);
                                        galleryCard.insertAdjacentHTML('beforeend', cardCollectionMarkup);

                                    })
                                    .catch(fetchError)
                        form.reset();
                    }

                    function getPictureByQuery(query) {
                            return fetch (`https://pixabay.com/api/?key=${apiKey}&q=${query}`)
                            .then((res) => {
                                            console.log(res);
                                                if (!res.ok) {
                                                    throw new Error (res.status);
                                                }
                                                return res.json();
                                                    })}

                    function cardCollection ({array}) {
                            return array.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
                            <li class = "gallery-item"><a class="gallery-link" href="${largeImageURL}">
                                <a class="gallery-link" href="${original}">
                                    <img 
                                        class="gallery-img" 
                                        src="${webformatURL}" 
                                        alt="${tags}" 
                                        />
                                </a>
                                <p class="numbers js-likes-num">'Likes ${likes}'</p>
                                <p class="numbers js-views-num">'Views ${views}'</p>
                                <p class="numbers js-comments-num">'Comments ${comments}'</p>
                                <p class="numbers js-downloads-num">'Downloads ${downloads}'</p>
                            </li>
                            `  ).join('');
                            }

                    function fetchError(err) {
                        iziToast.show({
                            message: '"Sorry, there are no images matching your search query. Please try again!"',
                            messageColor: 'white',
                            messageLineHeight: '150%',
                            backgroundColor: '#ef4040',
                            position: 'topRight'
                                    })
                            }

lightbox.on('show.simplelightbox', function () {
        });

// const url = `https://pixabay.com/api/?key=${apiKey}&q=${queryValue}&image_type="photo"&orientation="horizontal"&safesearch="true"`;

    // function getPictureByQuery(query) {
    //     return fetch (`https://pixabay.com/api/?key=${apiKey}&q=${query}`).then((res) => {
    //         console.log(res);
    //         if (!res.ok) {
    //             throw new Error (res.status);
    //         }
    //         return res.json();
    //             })}
    
        // getPictureByTag('tags').then ((data) => {
        //     console.log(data)
        //     galleryCard.insertAdjacentHTML('beforeend', cardCollection(data));
        // })
        // .catch ((err) => console.error(err))

