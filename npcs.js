const npcContainer = document.querySelector('#npcs-container')
const npcs = ['./docs/dingledork.json', '/docs/dinglepork.json']


async function getdata() {
    for (let i = 0; i < npcs.length; i++) {
        await fetch(npcs[i])
            .then(res => res.json())
            .then((npcJSON) => {
                let finalCard = `
                    <div class="card">
                        <span class="card--id">#${npcJSON.npcid}</span>
                        <h1 class="card--name">${npcJSON.name}</h1>
                    </div>
                `
                npcContainer.innerHTML += finalCard
            });
    }
}


if (npcContainer != null)
    getdata()