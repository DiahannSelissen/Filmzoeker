let clicked = []
let ul = document.getElementById("moviesList")

//Click on Genres
document.getElementById("genres").addEventListener("click", ()=>{  
    clicked = []
    clicked.push(event.target.id)
    console.log(clicked)
    while (ul.firstChild){
        ul.firstChild.remove()
    } let findMovies = movies.filter((movieGenres) =>{
        return movieGenres.Title.includes(clicked)
    });findMovies.forEach((item)=>{
        let li = document.createElement("li");
        let a = document.createElement("a")
        let img = document.createElement("img")
        img.setAttribute("src", item.Poster)
        a.setAttribute("href", "https://www.imdb.com/title/"+item.imdbID+"/")
        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img);
    })
})

//All
movies.forEach((item)=>{
    let li = document.createElement("li");
        let a = document.createElement("a")
        let img = document.createElement("img")
        img.setAttribute("src", item.Poster)
        a.setAttribute("href", "https://www.imdb.com/title/"+item.imdbID+"/")
        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img)
})

//Click on All
document.getElementById("All").addEventListener("click", () =>{
    while (ul.firstChild){
        ul.firstChild.remove()
    }
movies.forEach((item)=>{
    let li = document.createElement("li");
        let a = document.createElement("a")
        let img = document.createElement("img")
        img.setAttribute("src", item.Poster)
        a.setAttribute("href", "https://www.imdb.com/title/"+item.imdbID+"/")
        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img)
})})

//Click on Newest
document.getElementById("Newest").addEventListener("click", ()=>{
    while (ul.firstChild){
        ul.firstChild.remove()}
    const newer2014 = movies.filter((newerthan2014) =>{
        return newerthan2014.Year >2014;
    });newer2014.forEach((item)=>{
        let li = document.createElement("li");
        let a = document.createElement("a")
        let img = document.createElement("img")
        img.setAttribute("src", item.Poster)
        a.setAttribute("href", "https://www.imdb.com/title/"+item.imdbID+"/")
        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img)})})