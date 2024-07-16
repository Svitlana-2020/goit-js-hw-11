// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getPictureByQuery } from "./js/pixabay-api";
import { lightbox, renderGalleryMarkup } from "./js/render-functions";
import { refs } from "./js/refs";


refs.formForm.addEventListener('submit', handleSearch);

            function handleSearch(e) {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const queryValue = form.elements.inputf.value.trim();
                        refs.galleryCard.innerHTML = '';
                        refs.loader.classList.remove('hidden');
                        if (queryValue === "") {
                            {
                                refs.loader.classList.add('hidden');
                                form.reset();
                        iziToast.show({
                                    message: '"Enter a search query in a search field. Pls try again"',
                                    messageColor: 'white',
                                    messageLineHeight: '150%',
                                    backgroundColor: '#ef4040',
                                    position: 'topRight'
                                            })
                                    }
                                    return;
                        }
                                                        getPictureByQuery(queryValue)
                                    .then(({ hits }) => {
                                        if (hits && hits.length > 0) {
                                                                   renderGalleryMarkup(hits);}
                                        else {
                                            return Promise.reject(new Error(''));
                                        }
                                    })
                                    .catch(fetchError)
                        .finally(() => {
                            refs.loader.classList.add('hidden');
                        form.reset(); 
    });
                    }

                    function fetchError(err) {
                        // refs.loader.style.display = 'none';
                        iziToast.show({
                            message: '"Sorry, there are no images matching your search query. Please try again!"',
                            messageColor: 'white',
                            messageLineHeight: '150%',
                            backgroundColor: '#ef4040',
                            position: 'topRight'
                                    })
                            }

// lightbox.on('show.simplelightbox', function () {
//         });

