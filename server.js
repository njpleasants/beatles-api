const express = require('express')
const app = express()
const PORT = 8000

const members = {
    'paul': {
        'birthName': 'James Paul McCartney',
        'birthdate': '18 June 1942', 
        'birthLocation': 'Liverpool, England',
        'spouse': 'Linda Eastman, Heather Mills, Nancy Shevell',
        'instrument': 'vocals, bass guitar, guitar, keyboards',
        'children': 5
    },
    'john':{
        'birthName': 'John Winston Lennon',
        'birthdate': '9 October 1940', 
        'birthLocation': 'Liverpool, England',
        'spouse': 'Cynthia Powell, Yoko Ono',
        'instrument': 'vocals, harmonica, guitar, keyboards',
        'children': 2
    },
    'george':{
        'birthName': 'George Harrison',
        'birthdate': '25 February 1943', 
        'birthLocation': 'Liverpool, England',
        'spouse': 'Pattie Boyd, Olivia Arias',
        'instrument': 'vocals, guitar, sitar, keyboards',
        'children': 1
    },
    'ringo':{
        'birthName': 'Richard Starkey',
        'birthdate': '7 July 1940', 
        'birthLocation': 'Liverpool, England',
        'spouse': 'Maureen Cox, Barbara Bach',
        'instrument': 'vocals, drums',
        'children': 3
    },
    'unknown':{
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'spouse': 'unknown',
        'instrument': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const memberName = request.params.name.toLowerCase()
    if( members[memberName] ){
        response.json(members[memberName])
    }else{
        response.json(members['unknown'])
    }
})
app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})