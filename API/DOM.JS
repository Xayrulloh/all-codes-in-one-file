(async () => {let response = await fetch('https://jsonplaceholder.typicode.com/photos'); 
response = await response.json()
for (const a in response) {
    let c = document.createElement("p")
    let b = document.createElement("a")
    c.textContent = response[a].title
    b.textContent = response[a].url
    b.href = response[a].url
    prosta.append(c, b)
}
})()


