Vad testar ni?
Vi testade en annan grupps arbete med namnet "Filmvisarna" i cypress och Github Actions.

H och S: Vi kommer gå igenom Trello, där har vi strukturerat och delat upp uppgifter.

Vi testar följande features:
N och S-Boka/Avboka biljett för visning = features och scenarios
N-Medlem/registera (logga in) = features och scenarios
H-Val av filmer, veckor, datum 
E-Visning av lediga plaster

 
Vad visar testerna på - finns det buggar/fel i produkten?

Förbättringsmöjligheter:
-Vi såg att man kan boka en visning trots att man inte är medlem, men inte sen går det inte att avboka.
-Det går inte att se någon bokningshistorik när man inloggad. 
-Det tar lång tid för att få upp information angående visningarna. 
-Under "visningar" kunde man ha samma lila färg som i header Nav-bar.
-Borde ha lite större "text storlek" för informationen till filmerna. 
-Det borde finnas mer information angående kraven för lösenord när man registrerar sig. 
-Det fattas "inspektera ögat" för att kontrollera och se det lösenord man skrivit in.
-Det borde finnas en grön check box om ens email är skrivet i rätt format. 
-När man filtrerar filmer (i boka sidan) så tar det lång tid innan den ändras.

Buggar:
-När man ska boka biljetter så finns det alltid 2 vuxenbiljetter valda på alla visningar. Istället så borde alla typer av biljetter vara inställda på 0. 
-Email funkar, men inte Facebook och instagram länkarna.


Finns det saker ni inte hunnit testa - vad? 
8. Som användare ska man få bekräftelsen med bokningsnummer skickad till min e-postaddress
17. Som användare ska man med registrerat konto kunna logga in för att ta de av funktioner för inloggade användare
20. Som systemägare och besökare vill jag att alla vyer (sidor) har en egen unik URL/route så att det går att bokmärka, skicka länkar vidare till vänner etc
21. Som svensktalade användare/besökare vill jag att all information ska vara på Svenska


Finns det tester det kan finnas felaktigheter/brister i själva step-definitions-koden - vilka tester i så fall?
-Kan inte få tag på den röda youtube knappen när man ska kolla på trailers? Vill inte få tag på Iframe