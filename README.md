# docker_fullstack_simple_app

Uruchamiana jest najpierw przykladowa baza danych postgres, ktora ma healthcheck. 
![image](https://github.com/user-attachments/assets/ae4d9a6a-8855-41cf-a754-bc0e10012adc)

W momencie zdrowego statusu bazy danych odpalany jest server express ktory ma endpoint /time. 
![image](https://github.com/user-attachments/assets/7eaa01d8-6ebd-4c47-a8c0-4c66f1c57cb0)

(SELECT NOW() as now) Pobierany jest z bazy danych postgres.

Na koncu jest uruchamiany nginx , czyli klient ze strona html, ktora zawiera skrypt wykonujacy fetch na endpoincie /time po 3 sekundach dzialania.
![image](https://github.com/user-attachments/assets/22a96e2e-4acc-4eaa-a57d-ee9f1606eb1f)

Tak wlasnie dochodzi do komunikacji miedzy dwoma sieciami w dockerze. W tym server ma dwie sieci (backend i frontend).
