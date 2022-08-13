# Fuels UY API.

This is an API to retrieve current fuel prices in Uruguay.

## About Fuels UY API.

This app is an API made in Node, ussing Express and MongoDBAtlas to provide data related to fuel prices.

## How do I access the information.

You can review the following link: https://fuels-uy-api.herokuapp.com/

There are 4 different fuel types [fuelType]: super95, super97, gasoil10s, and gasoil50s.

In order to get access to the latest available price you will need to run a GET request adding /api/get/[fuelType]

You will get a JSON message containing the information requested, each message contains data related to that specific fuel type. If you need another fuel you need to request it.

## Future things.

We are working to provide historical data if needed.

If you want to contact me, you can drop me an [e-mail](mailto:mariano@bordon.uy).
