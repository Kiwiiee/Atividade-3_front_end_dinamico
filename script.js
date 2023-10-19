async function getStaticProps(busca){

    if(busca == "nome"){


        const API = "https://pokeapi.co/api/v2/pokemon/"
        let pokemon = document.getElementById("pokemon").value.toLowerCase()
        let res = await fetch(`${API}${pokemon}` ,  {method: "GET"})


    if (res.status == 404){
        const resultados = document.getElementById("resultados")
        let newDiv = document.createElement("div");
        resultados.appendChild(newDiv);
        let newH2 = document.createElement("h2");
        newH2.innerHTML = `<b>${'Pokemon não encontrado'}<b>`
        newDiv.appendChild(newH2);
        newH2.style.marginTop = "5vh"
    }

    const data = await res.json()

    setTimeout(() => {

        
        const img = data.sprites.other["official-artwork"].front_default
        const h3 = data.name
        const p2 = data.types["0"].type.name

        
        const resultados = document.getElementById("resultados")
        let newDiv = document.createElement("div");
        resultados.appendChild(newDiv);
        let newImage = new Image();
        newImage.src = img;
        newImage.style.marginTop = "5vh"
        newDiv.appendChild(newImage);
        let newH3 = document.createElement("h3");
        let newP = document.createElement("p");
        newH3.innerHTML = `<b>${h3}<b>`
        newP.innerText = p2
        newH3.style.marginTop = "1vh"
        newP.style.marginTop = "1vh"
        newDiv.appendChild(newH3);
        newDiv.appendChild(newP);


    } , 5000)
    

    }else{
        const url = "https://pokeapi.co/api/v2/type/"
        let elemento =  document.getElementById("elemento").value
        let res2 = await fetch(`${url}${elemento}` ,  {method: "GET"})
        

    if (res2.status == 404){
        const resultados = document.getElementById("resultados")
        let newDiv = document.createElement("div");
        resultados.appendChild(newDiv);
        let newH2 = document.createElement("h2");
        newH2.innerHTML = `<b>${'Pokemon não encontrado'}<b>`
        newDiv.appendChild(newH2);
        newH2.style.marginTop = "5vh"
    }

    const data = await res2.json()

    
    let tipo_pokemons = data.pokemon
    for (element of tipo_pokemons) {

    let pokemon = element.pokemon.url
    let res3 = await fetch(`${pokemon}` ,  {method: "GET"}).then()
    let Ind_Pokemon = await res3.json()
    
    setTimeout(() => {
            
            let img = Ind_Pokemon.sprites.other["official-artwork"].front_default
            let nome = Ind_Pokemon.name
            console.log(element)
            const resultados = document.getElementById("resultados")
            let newDiv = document.createElement("div");
            resultados.appendChild(newDiv);
            let newImage = new Image();
            newImage.src = img;
            newImage.style.marginTop = "5vh"
            newDiv.appendChild(newImage);
            let newH3 = document.createElement("h3");
            newH3.innerHTML = `<b>${nome}<b>`
            newH3.style.marginTop = "1vh"
            newDiv.appendChild(newH3);


        } , 1000)
    }


    
    }


  
    

    // const procura = fetch()

    // let retorno = setTimeout(() => (
    //     procura.then((resposta) => {

    //         let newImage = document.createElement("div");
    //         let newDiv = document.createElement("div");
    //         let newName = document.createElement("h3");
    //         let newP = document.createElement("p");

    //         })
    // ) ,  5000);
      

      
} 


