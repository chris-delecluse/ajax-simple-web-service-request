const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        console.log('connected with api')
    }
}

const generate = () => {
    xhr.onload = () => {
        let response = xhr.response
        let responseParseToJson = JSON.parse(response)

        if (xhr.status === 200) {

            document.getElementsByClassName('card__img')[0].src = responseParseToJson.photo
            document.getElementsByClassName('card__author')[0].innerHTML = responseParseToJson.author
            document.getElementById('quote').innerHTML = responseParseToJson.quote

        } else {

            console.log(`Error, connexion cant be established`)
        }

    }

    xhr.open('GET', 'https://thatsthespir.it/api', true)
    xhr.send()
}

generate()

document.getElementById('button').addEventListener('click', () => {
    generate()
})