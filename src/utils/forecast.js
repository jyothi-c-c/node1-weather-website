const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=c146ea5da4fd0e8f5909a896a149a696&query=' +latitude+',' + longitude+'&units=f'
    request({url:url,json:true},(error,response)=>{
      if(error){
        callback('unable to connect',undefined)
      }else if(response.body.error){
        callback('unable to find location',undefined)

      }else{
        callback(undefined,response.body.current.weather_descriptions[0]+'.it is currently '+ response.body.current.temperature +  'degrees out. it feels like '+ response.body.current.feelslike+'degrees out. The humidity is '+response.body.current.humidity +'%.')

      }
    })
}

module.exports=forecast