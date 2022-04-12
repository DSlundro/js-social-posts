// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post. 
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
//      id del post, numero progressivo da 1 a n
//      nome autore,
//      foto autore,
//      data in formato americano (mm-gg-yyyy),
//      testo del post,
//      immagine (non tutti i post devono avere una immagine),
//      numero di likes.


// creo un array con tutti gli oggetti e infomraioni
const objects = [
    {
        "id": '1',
        "autore": {
                "nome": 'Monkey D. Luffy',
                "foto": './assets/img/luffy_avatar.webp',
                },
        "data": '04-12-2022',
        "testo": `Monkey D. Rufy è il protagonista del manga One Piece, scritto e disegnato da Eiichirō Oda, e delle sue opere derivate. Nell'edizione italiana della serie televisiva anime è soprannominato Rubber fino all'episodio 578, mentre a partire dall'episodio 579 e nei film usciti al cinema anche in Italia viene mantenuta la sua traslitterazione ufficiale Monkey D. Luffy`,
        "img": './assets/img/luffy_post.jpg',
        "likes": '486'
    },
    {
        "id": '2',
        "autore": {
                "nome": 'Roronoa Zoro',
                "foto": './assets/img/zoro_avatar.png',
                },
        "data": '05-17-2021',
        "testo": `Roronoa Zoro è uno dei protagonisti del manga One Piece, scritto e disegnato da Eiichirō Oda, e delle sue opere derivate.
                Entra a far parte della ciurma di Cappello di paglia come primo membro dopo che Monkey D. Rufy lo salva dall'esecuzione da parte del capitano della Marina Morgan. Nativo del Villaggio di Shimotsuki nel Mare Orientale, Zoro si è allenato fin dall'infanzia all'uso della spada, sviluppando un peculiare stile di combattimento a tre spade, reggendone una con la bocca. Il suo sogno è di diventare il più grande spadaccino del mondo.`,
        "img": './assets/img/zoro_post.jpg',
        "likes": '836'
    },
    {
        "id": '3',
        "autore": {
                "nome": 'Nami',
                "foto": './assets/img/nami_avatar.jpg',
                },
        "data": '11-08-2021',
        "testo": `Nami è una dei protagonisti del manga One Piece, scritto e disegnato da Eiichirō Oda, e delle sue opere derivate. È una ladra che incrocia il cammino di Monkey D. Rufy e della sua ciurma nel Mare Orientale. Inizialmente una subordinata di Arlong, con la sconfitta dell'uomo-pesce Nami entra definitivamente a far parte della ciurma di Cappello di paglia in qualità di navigatrice. Il suo sogno è di disegnare una mappa perfetta del mondo, impresa mai compiuta a causa della rigida natura della Rotta Maggiore.`,
        "img": './assets/img/nami_post.jpg',
        "likes": '1485'
    },
    {
        "id": '4',
        "autore": {
                "nome": 'Portuguese D. Ace',
                "foto": './assets/img/ace_avatar.jpg',
                },
        "data": '12-31-2021',
        "testo": `Portuguese D. Ace, nato Gol D. Ace, è un personaggio del manga One Piece, scritto e disegnato da Eiichirō Oda, e delle sue opere derivate.
        Figlio del Re dei pirati Gol D. Roger, alla morte del padre venne adottato come nipote da Monkey D. Garp e cresciuto da Curly Dadan insieme a Monkey D. Rufy. La forte amicizia che lega i due e Sabo li spinge a considerarsi fratelli adottivi. Dopo aver lasciato il villaggio Foosha tre anni prima di Rufy, fondò la ciurma dei pirati di Picche e in seguito divenne il comandante della seconda flotta dei pirati di Barbabianca. Catturato da Marshall D. Teach e consegnato alla Marina, Ace viene ucciso dall'ammiraglio Akainu durante la battaglia di Marineford per salvare il fratello Rufy. Ha ingerito il Frutto del diavolo Foco Foco, che gli consente di trasformarsi in fuoco e produrre e manipolare le fiamme.`,
        "img": './assets/img/ace_post.jpg',
        "likes": '5893'
    },
]

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.


const arrayLike = [];
const elementi = document.getElementById('container');

function generaPost(elementiPost){
    const { id, autore, testo, img, likes, data} = elementiPost;
    return `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${autore.foto}" alt="${autore.nome}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${autore.nome}</div>
                    <div class="post-meta__time">${data}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${testo}</div>
        <div class="post__image">
            <img src="${img}" alt="Immagine post con id ${id}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div>
        </div>
    </div>
    `;
}

objects.forEach((element) => {
    elementi.innerHTML += generaPost(element);
});




const bottoneLike = document.querySelectorAll(`.js-like-button`);
const contatoreLIke = document.querySelectorAll(`.js-likes-counter`);


for (let i = 0 ; i < bottoneLike.length ; i++){

    const element = bottoneLike[i];

    element.addEventListener('click', (event) => {
        event.preventDefault();

        if ( element.classList.contains('like-button--liked') ){
            element.classList.remove('like-button--liked');
            contatoreLIke[i].innerHTML = parseInt(contatoreLIke[i].innerHTML) - 1;
            arrayLike.splice( arrayLike.indexOf(bottoneLike[i].getAttribute('data-postid') ));

        } else {
            element.classList.add('like-button--liked');
            contatoreLIke[i].innerHTML = parseInt(contatoreLIke[i].innerHTML) + 1;
            arrayLike.push(bottoneLike[i].getAttribute('data-postid'));
        }
        console.log(arrayLike)
    })
}

