const apiKey = '44855126-e7e59ad0378cdd72f172648f5';
const inputQ = document.querySelector('.input');
const galleryCard = document.querySelector('.list-class')
const searchBtn = document.querySelector('.start-btn')

// const query = inputQ.value;
// console.log(query)

let query = 'tower';

const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type="photo"&orientation="horizontal"&safesearch="true"`;

function getPicture(query) {
    return fetch ("url").then((res) => {
        console.log(res);
        if (!res.ok) {
            throw new Error (res.status);
        }
        return res.json();
    })
};

// function cardCollection(array) {

//     return array.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>`
//     <li class = "gallery-item"><a class="gallery-link" href="${largeImageURL}">
//       <img src="${webformatURL}" alt="${tags}" class="gallery-img">
//       <h2 class="category js-likes">Likes</h2>
//       <p class="numbers js-likes-num">'${likes}'</p>
//       <h2 class="category js-views">Views</h2>
//       <p class="numbers js-views-num">'${views}'</p>
//       <h2 class="category js-comments"></h2>
//       <p class="numbers js-comments-num">'${comments}'</p>
//       <h2 class="category js-downloads"></h2>
//       <p class="numbers js-downloads-num">'${downloads}'</p>
//     </a></li>
//     `).join("")
// }

// searchBtn.addEventListener ('click', (e) => 
//     {getPicture(query)
//         .then ((data) => {
//             // console.log(data)
//            const cardsnewC = cardCollection(data);
//             galleryCard.insertAdjacentHTML('beforeend', cardsnewC);
//         })
//         .catch ((err) => console.log(err))
//     }
// )


// galleryCard.insertAdjacentHTML('beforeend', cardCollection(data));

// getPicture("cat")
// .then ((data) => {
//     console.log(data)})
// .catch ((err) => console.log(err))

