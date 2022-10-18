let filterValue;
let parentElement;
let filteredMovies;

const emptyMovieList = () => {
    parentElement = document.getElementById('movie_images_list');
    while (parentElement.firstChild) { parentElement.removeChild(parentElement.firstChild) };
};

const makeMovieList = () => {
    filterValue === 'new_movies' ?
        filteredMovies = movies.filter(movie => movie.year >= 2014) :
        filterValue === undefined ?
            filteredMovies = movies :
            filteredMovies = movies.filter(movie => movie.title.includes(filterValue));
    filteredMovies.forEach((movie) => {
        const list = document.getElementById('movie_images_list');
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        const imageItem = document.createElement('img');
        linkItem.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        linkItem.setAttribute('target', '_blank')
        imageItem.setAttribute('src', movie.poster);
        imageItem.setAttribute('alt', movie.title);
        list.appendChild(listItem);
        listItem.appendChild(linkItem);
        linkItem.appendChild(imageItem);
    })
};

const handleOnChangeEvent = e => {
    switch (e.target.value) {
        case 'all_movies':
            filterValue = undefined;
            emptyMovieList();
            makeMovieList();
            break;
        case 'new_movies':
            filterValue = 'new_movies';
            emptyMovieList();
            makeMovieList();
            break;
        case 'avengers_movies':
            filterValue = 'Avengers';
            emptyMovieList();
            makeMovieList();
            break;
        case 'x-men_movies':
            filterValue = 'X-Men';
            emptyMovieList();
            makeMovieList();
            break;
        case 'princess_movies':
            filterValue = 'Princess';
            emptyMovieList();
            makeMovieList();
            break;
        case 'batman_movies':
            filterValue = 'Batman';
            emptyMovieList();
            makeMovieList();
            break;
    }
};

const movieSelector = document.getElementsByName('movie_selector');
movieSelector.forEach(radio_button => {
    radio_button.addEventListener('change', handleOnChangeEvent);
});

makeMovieList();