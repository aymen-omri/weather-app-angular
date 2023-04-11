
# Angular weather app

This is a web application that provides weather details based on a user-selected position on a map. Simply select a location on the map, and the application will retrieve and display the relevant weather information for that location.

## Acknowledgements

 - [MapTiler](https://cloud.maptiler.com/)
 - [WeatherAPI](https://www.weatherapi.com/)


## Deployment

To run this project

```bash
  npm install -g @angular/cli
```
Clone the repository
```bash
  git clone https://github.com/aymen-omri/weather-app-angular.git
```
Open this project and in the terminal run:
```bash
npm install
```
Create an account on MapTiler, and navigate to the 'myCloud' section. From there, go to the 'API Keys' section and copy your API key.

Go to weather -> map -> map.component.ts

In line 27 change with you maptiler api key

Go to favourite-cities -> map-for-locations ->map-for-locations.component.ts

In line 27 change with your maptiler api key

for the weather API i used WeatherAPI: https://www.weatherapi.com/

Create an account, verify your email, from there you will be redirected to your dashboard where you will find your API key

Copy the key

Go to servises -> weather.service.ts

In line 22 change with your WeatherAPI key

In line 34 change with your WeatherAPI key

run the project:
```bash
  npm run start
```
And you will have a fully working weather angular application!
