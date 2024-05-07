// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

const message_score_page_data = [];

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))


app.get('/', function(request, response) {
	response.render('homepage')
});

app.get('/ratings', function(request, response) {
	response.render('ratings')
});

app.get('/lijsten', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
        console.log(apiData.data)
        response.render('lijsten.ejs', {data: apiData.data})
	});
	
})

app.get('/ratings', function (request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
      console.log(apiData.data)
      response.render('lijsten.ejs', {data: apiData.data})
});

})

app.get('/house', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_houses').then((apiData) => {
        console.log(apiData.data)
        response.render('house', {data: apiData.data})
	});
	
})



app.get('/lijsten/:id', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_list/' + request.params.id + '?fields=*.*.*').then((apiData) => {
        response.render('lijst.ejs', {list: apiData.data})  
        console.log(apiData.data.houses) 
    });
  })


  app.post('/ratings/:id', function (request, response) {
   
    message_score_page_data.push(request.body.);

    // the if enhaced can not in the oter fetch so it needs to be seperated
    fetchJson(`https://fdnd-agency.directus.app/items/f_houses/${request.params.id}/?fields=*.*.*`)
    console.log(request.body)

  })
// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})