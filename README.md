This is a web application that provides weather details based on a user-selected position on a map. Simply select a location on the map, and the application will retrieve and display the relevant weather information for that location.

To run this app follow this steps : 

Install angular if it's not installed:

npm install -g @angular/cli

Clone this repository:

git clone https://github.com/aymen-omri/weather-app-angular.git

Open this project and in the terminal run:

npm install

Create an account on MapTiler, and navigate to the 'myCloud' section. From there, go to the 'API Keys' section and copy your API key.

Go to weather -> map -> map.component.ts 

In line 27 change <Your MAPTILER API KEY> with you maptiler api key 

Go to favourite-cities -> map-for-locations ->map-for-locations.component.ts 

In line 27 change <Your MAPTILER API KEY> with your maptiler api key 
  
for the weather API i used WeatherAPI: https://www.weatherapi.com/

Create an account, verify your email, from there you will be redirected to your dashboard where you will find your API key 

Copy the key 

Go to servises -> weather.service.ts 

In line 22 change <YOUR WEATHER API KEY> with your WeatherAPI key

In line 34 change <YOUR WEATHER API KEY> with your WeatherAPI key
  
In the terminal run : 
  npm start  or  ng serve 
  
And you will have a fully working weather angular application!
  
  App screenshots:
![1](https://user-images.githubusercontent.com/101984852/231236892-3a3690a1-05d7-4f4f-bbc6-a7da2492a430.png)
![2](https://user-images.githubusercontent.com/101984852/231236934-2a578ff9-17fb-43ce-ac6f-85b16996f302.png)
![3](https://user-images.githubusercontent.com/101984852/231236953-8b4450ac-4c0a-4251-ba3f-ca3b872170c0.png)
![4](https://user-images.githubusercontent.com/101984852/231236994-aec29eea-830f-41b1-8028-34d6e87bf1c0.png)
![5](https://user-images.githubusercontent.com/101984852/231236998-b16c6eec-b846-4a13-b575-d75134175c15.png)
![6](https://user-images.githubusercontent.com/101984852/231237011-480cffc5-9d95-47c7-8a9e-e7b6bff03e9f.png)


