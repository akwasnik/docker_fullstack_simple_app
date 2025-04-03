# docker_fullstack_simple_app

Uruchamiana jest najpierw przykladowa baza danych postgres, ktora ma healthcheck. 

W momencie zdrowego statusu bazy danych odpalany jest server express ktory ma endpoint /time. 

(SELECT NOW() as now) Pobierany jest z bazy danych postgres

Na koncu jest uruchamiany nginx , czyli klient ze strona html, ktora zawiera skrypt wykonujacy fetch na endpoincie /time po 3 sekundach dzialania.

Tak wlasnie dochodzi do komunikacji miedzy dwoma sieciami w dockerze. W tym server ma dwie sieci (backend i frontend).
