# E126
Opis projektu:
Aplikacja webowa umożliwiająca zarządzanie kartami Clash Royale. Użytkownik może dodawać, edytować, usuwać oraz przeglądać szczegóły kart. Projekt został wykonany w architekturze MVC z wykorzystaniem Express.js oraz bazy danych MongoDB. Widoki renderowane są po stronie serwera przy użyciu EJS.
Funkcjonalności:
- Dodawanie nowych kart Clash Royale
- Edycja istniejących kart
- Usuwanie kart
- Pogląd szczegółów pojedynczej karty
- wyświetlanie listy wszystkich kart
- Trwałe przechowywanie danych w MongoDB
Instrukcja instalacji i uruchomienia:
- Zainstaluj node.js, mongoDB, express, ejs
- Stwórz kontener w dockerze i wpisz docker run -d --name mongo_clashRoyaleCards -p 27017:27017 mongo:6.0
- stwórz połączenie w mongoDB, i dodaj w nim bazę danych o nazwie clashRoyale,
- wpisz w visual studio code npm start
Lista endpointów:
- get, /
- get, /add
- post, /add
- get, /edit/:id
- post, /edit/:id
- get, /delete/:id
- post /delete/:id
- get /show/:id
Technologie:
- Node.js
- Express
- MongoDB
- EJS
- Docker
Autor: Mateusz Zdrojewski