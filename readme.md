## Profiles data scrapper
this is a simple scrapper that uses selenium to scrappe a the profile with the given url and extract multiple data.

## Technologies
* nestjs
* vuejs
* selenium
* mysql




## config
because linkedin is a bit tricky to scrape i had to login first. so the login data has to be provided and this can be found under:
server\src\Profile\profile.service.ts

the db configs can be set under server\src\database\database.providers.ts
 
## scripts
the installation and the run / build scripts can be found in the appl and server folders