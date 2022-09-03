# Fuels Uruguay API.

This is an API to retrieve current fuel prices in Uruguay.

## How do I access the information.

There are 7 different fuel types: 
- Super 95 30S 
- Premium 97 30S
- Gas Oil 10S
- Gas Oil 50S
- Jet A1
- AvGas 110/130
- Queroseno

In order to get access to the latest available price you will need to run a GET request adding /api/get/[fuelType]

You will get a JSON message containing the information requested, each message contains data related to that specific fuel type. If you need another fuel you need to request it.

## Response

Te folowing structire is show on the response:

source:"URSEA"
*Source of current fuel prices*
fuel_type:"Premium 97 30S"
*Fuel Type*
pep:70.01
*PEP = Precio Ex Planta de Ancap*
pmit:71.55
*PMIT = Precio Máximo Intermedio Transitorio*
pvp:79.85
*PVP = Precio máximo de Venta al Público*
*This is the final price on the market*
currency:"UYU"
*Currency on the response*
request:"premium97"
*Internal code for mapping*
since:"2022-09-01T03:00:00.000Z"
*Since when the price is available*

## Future things.

We are working to provide historical data.

If you want to contact me, you can drop me an [e-mail](mailto:mariano@bordon.uy).
