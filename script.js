let movie1 = {
    name: "equalizer3",
    img: "https://media0026.elcinema.com/uploads/_315x420_c7689308757442fdf7c659770108fdbad1b8470571732a384be8aa208af61223.jpg"
};

let movie2 = {
    name: "retribution",
    img: "https://media0026.elcinema.com/uploads/_315x420_4d4d333f9087077b1687659f562fa36e67a83b8f15de75bbc8b52930370227b7.jpg"
}

let movie3 = {
    name: "jumanji",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"
}

let moviess = [];

moviess.push(movie1);
moviess.push(movie2);
moviess.push(movie3);

let movieContainer = document.getElementById('container');

moviess.forEach(moviess => {
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${moviess.img}" alt="movie picture" />
 <h2>${moviess.name}</h2>
 </div>
`;
});

let movies = []
let random = math.name(math.random() );
movies[random] // متغير عشوائي

