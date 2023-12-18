let doc = document.querySelector('body')

async function getdata() {
    let data = await fetch('https://github.com/nshardy/Farmers-Nightmare/blob/wiki/docs/dingledork.html')
    let json = await data.json()

    doc.innerHTML += json.name
}

getdata()