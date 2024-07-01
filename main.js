document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const beatleName = document.querySelector('input').value
    try{
        const response = await fetch(`link for hosting website`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.fact
    }catch(error){
        console.log(error)
    }
}