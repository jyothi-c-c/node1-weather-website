const path = require('path')
const express = require('express')
const hbs = require('hbs')

const forecast = require('./utils/forecast')


//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))

const app = express()
const port = process.env.PORT || 3000

//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath =path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')            //handleBar setup
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setuo static directoty to serves
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'jyo'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about me',
        name:"jyothi"
    })

})
app.get('/help',(req,res)=>{
    res.render('help',{
        helptext:'help page',
       title:'help',
       name:'jyothi c c'
    })

})

/*app.get('',(req,res)=>{             //app.com
    res.send('<h1>weather</h1>')   
})

app.get('/help',(req,res)=>{            //app.com/help
    res.send([{
        name:'jyo',                    //sending json response as array
        age:20
    },{
        name:'bla',
        age:56
    }])        
})

app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>')      //app.com/about
})*/

//query string
app.get('/weather',(req,res)=>{          //app.com/weather
    if(!req.query.address){
        return res.send({
            error:'you must provide an address'
        })
    }
     /*forecast(latitude, longitude, (error,forecastData)=>{
        if(error){
            return res.send({error})
        }
        res.send({
            forecast:forecastData,
            location,
            address:req.query.address
        })
     })*/
    res.send({
        forecast:'it is snowing',              //sending json response
        location:'india',
        address:req.query.address

    })   
     
})

//query string
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must provide search term'
        })

    }
    //console.log(req.query)
    console.log(req.query.search)
    res.send({
        products:[]
    })

})

app.get('/help/*',(req,res)=>{
    //res.send('help article not found')             //when search url is help/something 
    res.render('404',{
        title:'404',
        name:'jyoo',
        errorMessage:'help article not found'
    })
})

app.get('*',(req,res)=>{                                    //404 pages
    // res.send('my 404 page')
    res.render('404',{
        title:'404',
        name:'jyooo',
        errorMessage:'page not found'
    })
})

app.listen(port,()=>{
console.log('server is up on port'+port)
})