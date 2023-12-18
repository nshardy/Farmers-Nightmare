let doc = document.querySelector('body')

async function getdata() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/69')
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    })
    
    let json = await data.json()

    doc.innerHTML += json.name
}

getdata()