

const players = [
    //KKCZ
    { name: "Yago dos Santos", height: 175, age: 25, jersey: 99, country: "Brazil", position: "PG", team: "Crvena zvezda" },
    { name: "Miloš Teodosić", height: 196, age: 38, jersey: 4, country: "Serbia", position: "PG", team: "Crvena zvezda" },
    { name: "Codi Miller-McIntyre", height: 191, age: 30, jersey: 0, country: "USA", position: "PG", team: "Crvena zvezda" },
    { name: "Isaiah Canaan", height: 183, age: 32, jersey: 3, country: "USA", position: "SG", team: "Crvena zvezda" },
    { name: "Nemanja Nedović", height: 191, age: 33, jersey: 36, country: "Serbia", position: "SG", team: "Crvena zvezda" },
    { name: "Ognjen Dobrić", height: 198, age: 30, jersey: 13, country: "Serbia", position: "SG", team: "Crvena zvezda" },
    { name: "Rokas Giedraitis", height: 200, age: 32, jersey: 31, country: "Lithuania", position: "SF", team: "Crvena zvezda" },
    { name: "Dejan Davidovac", height: 202, age: 29, jersey: 7, country: "Serbia", position: "PF", team: "Crvena zvezda" },
    { name: "Andrej Kostić", height: 198, age: 18, jersey: 47, country: "Serbia", position: "SG", team: "Crvena zvezda" },
    { name: "Mike Daum", height: 206, age: 29, jersey: 24, country: "USA", position: "PF", team: "Crvena zvezda" },
    { name: "Luka Mitrović", height: 206, age: 31, jersey: 9, country: "Serbia", position: "C", team: "Crvena zvezda" },
    { name: "Filip Petrušev", height: 213, age: 24, jersey: 30, country: "Serbia", position: "C", team: "Crvena zvezda" },
    { name: "Joel Bolomboy", height: 206, age: 31, jersey: 21, country: "USA", position: "C", team: "Crvena zvezda" },
    { name: "Uroš Plavšić", height: 216, age: 26, jersey: 33, country: "Serbia", position: "C", team: "Crvena zvezda" },
    { name: "John Brown III", height: 203, age: 32, jersey: 1, country: "USA", position: "PF", team: "Crvena zvezda" },
    { name: "Branko Lazić", height: 196, age: 34, jersey: 10, country: "Serbia", position: "SG", team: "Crvena zvezda" },
    //KKCZ

    //Partizan
    { name: "Vanja Marinković", height: 198, age: 27, jersey: 9, country: "Serbia", position: "SG", team: "Partizan" },
    { name: "Brandon Davies", height: 208, age: 33, jersey: 0, country: "USA", position: "C", team: "Partizan" },
    { name: "Iffe Lundberg", height: 193, age: 30, jersey: 1, country: "Denmark", position: "PG", team: "Partizan" },
    { name: "Carlik Jones", height: 185, age: 27, jersey: 2, country: "South Sudan", position: "PG", team: "Partizan" },
    { name: "Frank Ntilikina", height: 196, age: 26, jersey: 3, country: "France", position: "PG", team: "Partizan" },
    { name: "Duane Washington Jr.", height: 191, age: 24, jersey: 4, country: "USA", position: "SG", team: "Partizan" },
    { name: "Mario Nakić", height: 202, age: 23, jersey: 7, country: "Serbia", position: "SF", team: "Partizan" },
    { name: "Isaac Bonga", height: 203, age: 25, jersey: 17, country: "Germany", position: "SF", team: "Partizan" },
    { name: "Mitar Bošnjaković", height: 198, age: 22, jersey: 20, country: "Serbia", position: "SF", team: "Partizan" },
    { name: "Aleksej Pokuševski", height: 213, age: 22, jersey: 11, country: "Serbia", position: "PF", team: "Partizan" },
    { name: "Isiaha Mike", height: 203, age: 27, jersey: 24, country: "USA", position: "PF", team: "Partizan" },
    { name: "Tyrique Jones", height: 206, age: 27, jersey: 88, country: "USA", position: "C", team: "Partizan" },
    { name: "Balša Koprivica", height: 213, age: 24, jersey: 5, country: "Serbia", position: "C", team: "Partizan" },
    { name: "Arijan Lakić", height: 197, age: 22, jersey: 19, country: "Serbia", position: "SG", team: "Partizan" },
    { name: "Sterling Brown", height: 197, age: 30, jersey: 12, country: "USA", position: "SG", team: "Partizan" },
    //Partizan

    //Pariz
    { name: "T.J. Shorts", height: 175, age: 27, jersey: 0, country: "USA", position: "PG", team: "Paris Basketball" },
    { name: "Tyson Ward", height: 198, age: 27, jersey: 3, country: "USA", position: "SF", team: "Paris Basketball" },
    { name: "Mikael Jantunen", height: 204, age: 24, jersey: 20, country: "Finland", position: "PF", team: "Paris Basketball" },
    { name: "Kevarrius Hayes", height: 206, age: 27, jersey: 13, country: "USA", position: "C", team: "Paris Basketball" },
    { name: "Nadir Hifi", height: 188, age: 22, jersey: 2, country: "Algeria", position: "G", team: "Paris Basketball" },
    { name: "Daulton Hommes", height: 204, age: 28, jersey: 34, country: "USA", position: "F", team: "Paris Basketball" },
    { name: "Collin Malcolm", height: 201, age: 27, jersey: 1, country: "USA", position: "SF", team: "Paris Basketball" },
    { name: "Bandja Sy", height: 204, age: 34, jersey: 5, country: "France", position: "F", team: "Paris Basketball" },
    { name: "Yakuba Ouattara", height: 192, age: 33, jersey: 24, country: "France", position: "SG", team: "Paris Basketball" },
    { name: "Maodo Lo", height: 191, age: 32, jersey: 12, country: "Germany", position: "PG", team: "Paris Basketball" },
    { name: "Sebastian Herrera", height: 193, age: 27, jersey: 7, country: "Germany", position: "SG", team: "Paris Basketball" },
    { name: "Léopold Cavalière", height: 203, age: 28, jersey: 4, country: "France", position: "PF", team: "Paris Basketball" },
    { name: "Enzo Shahrvin", height: 201, age: 22, jersey: 18, country: "France", position: "PF", team: "Paris Basketball" },
    { name: "Leon Kratzer", height: 211, age: 28, jersey: 8, country: "Germany", position: "C", team: "Paris Basketball" },
    //Pariz

    //Barcelona
        { name: "Nicolas Laprovittola", height: 190, age: 34, jersey: 20, country: "Argentina", position: "PG", team: "FC Barcelona" },
        { name: "Juan Núñez", height: 191, age: 21, jersey: 17, country: "Spain", position: "PG", team: "FC Barcelona" },
        { name: "Dame Sarr", height: 198, age: 18, jersey: 2, country: "Italy", position: "SG", team: "FC Barcelona" },
        { name: "Kevin Punter", height: 193, age: 32, jersey: 0, country: "USA", position: "SG", team: "FC Barcelona" },
        { name: "Tomáš Satoranský", height: 201, age: 33, jersey: 13, country: "Czech Republic", position: "SG", team: "FC Barcelona" },
        { name: "Darío Brizuela", height: 188, age: 30, jersey: 8, country: "Spain", position: "SG", team: "FC Barcelona" },
        { name: "Alex Abrines", height: 198, age: 31, jersey: 21, country: "Spain", position: "SF", team: "FC Barcelona" },
        { name: "Justin Anderson", height: 198, age: 31, jersey: 1, country: "USA", position: "SF", team: "FC Barcelona" },
        { name: "Jabari Parker", height: 203, age: 29, jersey: 22, country: "USA", position: "PF", team: "FC Barcelona" },
        { name: "Willy Hernangómez", height: 210, age: 30, jersey: 14, country: "Spain", position: "C", team: "FC Barcelona" },
        { name: "Jan Veselý", height: 213, age: 34, jersey: 6, country: "Czech Republic", position: "C", team: "FC Barcelona" },
        { name: "Joel Parra", height: 202, age: 24, jersey: 44, country: "Spain", position: "PF", team: "FC Barcelona" },
        { name: "Youssoupha Fall", height: 221, age: 29, jersey: 19, country: "Senegal", position: "C", team: "FC Barcelona" },
        { name: "Chimezie Metu", height: 206, age: 28, jersey: 10, country: "Nigeria", position: "PF", team: "FC Barcelona" },
      //Barcelona

    //Panata
        { name: "Panagiotis Kalaitzakis", height: 200, age: 25, jersey: 0, country: "Greece", position: "SG", team: "Panathinaikos" },
        { name: "Lorenzo Brown", height: 196, age: 34, jersey: 2, country: "USA", position: "PG", team: "Panathinaikos" },
        { name: "Dimitris Moraitis", height: 194, age: 26, jersey: 6, country: "Greece", position: "PG", team: "Panathinaikos" },
        { name: "Kostas Sloukas", height: 190, age: 35, jersey: 10, country: "Greece", position: "PG", team: "Panathinaikos" },
        { name: "Cedi Osman", height: 201, age: 29, jersey: 16, country: "Turkey", position: "SF", team: "Panathinaikos" },
        { name: "Alexandros Samontourov", height: 210, age: 20, jersey: 20, country: "Greece", position: "PF", team: "Panathinaikos" },
        { name: "Ioannis Papapetrou", height: 206, age: 30, jersey: 21, country: "Greece", position: "SF", team: "Panathinaikos" },
        { name: "Jerian Grant", height: 196, age: 32, jersey: 22, country: "USA", position: "PG", team: "Panathinaikos" },
        { name: "Kendrick Nunn", height: 188, age: 29, jersey: 25, country: "USA", position: "SG", team: "Panathinaikos" },
        { name: "Mathias Lessort", height: 206, age: 29, jersey: 26, country: "France", position: "C", team: "Panathinaikos" },
        { name: "Kostas Antetokounmpo", height: 208, age: 27, jersey: 37, country: "Greece", position: "C", team: "Panathinaikos" },
        { name: "Marius Grigonis", height: 198, age: 30, jersey: 40, country: "Lithuania", position: "SG", team: "Panathinaikos" },
        { name: "Juancho Hernangómez", height: 206, age: 29, jersey: 41, country: "Spain", position: "PF", team: "Panathinaikos" },
        { name: "Dinos Mitoglou", height: 210, age: 28, jersey: 44, country: "Greece", position: "PF", team: "Panathinaikos" },
        { name: "Omer Yurtseven", height: 213, age: 26, jersey: 77, country: "Turkey", position: "C", team: "Panathinaikos" },
        { name: "Wenyen Gabriel", height: 206, age: 27, jersey: 32, country: "South Sudan", position: "C", team: "Panathinaikos" },
        { name: "Tibor Pleiss", height: 218, age: 35, jersey: 24, country: "Germany", position: "C", team: "Panathinaikos" },
    //Panata
      
    // ALBA

        { name: "Martin Hermannsson", height: 190, age: 30, jersey: 15, country: "Iceland", position: "PG", team: "ALBA Berlin" },
        { name: "William McDowell-White", height: 191, age: 26, jersey: 7, country: "Australia", position: "PG", team: "ALBA Berlin" },
        { name: "Matt Thomas", height: 193, age: 30, jersey: 11, country: "USA", position: "SG", team: "ALBA Berlin" },
        { name: "Malte Delow", height: 194, age: 23, jersey: 6, country: "Germany", position: "SG", team: "ALBA Berlin" },
        { name: "Matteo Spagnolo", height: 193, age: 22, jersey: 3, country: "Italy", position: "SG", team: "ALBA Berlin" },
        { name: "Jonas Mattisseck", height: 194, age: 25, jersey: 9, country: "Germany", position: "SG", team: "ALBA Berlin" },
        { name: "Yannick Wetzell", height: 208, age: 28, jersey: 5, country: "New Zealand", position: "PF", team: "ALBA Berlin" },
        { name: "Tim Schneider", height: 208, age: 27, jersey: 10, country: "Germany", position: "PF", team: "ALBA Berlin" },
        { name: "Louis Olinde", height: 205, age: 26, jersey: 19, country: "Germany", position: "SF", team: "ALBA Berlin" },
        { name: "Gabriele Procida", height: 201, age: 22, jersey: 1, country: "Italy", position: "SF", team: "ALBA Berlin" },
        { name: "Justin Bean", height: 201, age: 28, jersey: 34, country: "USA", position: "SF", team: "ALBA Berlin" },
        { name: "David McCormack", height: 208, age: 25, jersey: 33, country: "USA", position: "C", team: "ALBA Berlin" },
        { name: "Amon Doerries", height: 210, age: 19, jersey: 22, country: "Germany", position: "SF", team: "ALBA Berlin" },
        { name: "Elias Rapieque", height: 200, age: 21, jersey: 25, country: "Germany", position: "SF", team: "ALBA Berlin" },

    // Efes

        { name: "Shane Larkin", height: 182, age: 32, jersey: 0, country: "USA", position: "PG", team: "Anadolu Efes" },
        { name: "Darius Thompson", height: 193, age: 29, jersey: 11, country: "USA", position: "PG", team: "Anadolu Efes" },
        { name: "Rodrigue Beaubois", height: 188, age: 37, jersey: 1, country: "France", position: "SG", team: "Anadolu Efes" },
        { name: "Elijah Bryant", height: 196, age: 29, jersey: 6, country: "USA", position: "SG", team: "Anadolu Efes" },
        { name: "Dogus Ozdemiroglu", height: 191, age: 28, jersey: 18, country: "Turkey", position: "PG", team: "Anadolu Efes" },
        { name: "Jordan Nwora", height: 203, age: 26, jersey: 3, country: "USA", position: "SF", team: "Anadolu Efes" },
        { name: "Stanley Johnson", height: 198, age: 28, jersey: 14, country: "USA", position: "SF", team: "Anadolu Efes" },
        { name: "Rolands Šmits", height: 207, age: 29, jersey: 11, country: "Latvia", position: "PF", team: "Anadolu Efes" },
        { name: "Derek Willis", height: 206, age: 30, jersey: 35, country: "USA", position: "PF", team: "Anadolu Efes" },
        { name: "Ercan Osmani", height: 208, age: 26, jersey: 24, country: "Turkey", position: "PF", team: "Anadolu Efes" },
        { name: "Vincent Poirier", height: 213, age: 31, jersey: 17, country: "France", position: "C", team: "Anadolu Efes" },
        { name: "Daniel Oturu", height: 203, age: 25, jersey: 25, country: "USA", position: "C", team: "Anadolu Efes" },
        { name: "P.J. Dozier", height: 198, age: 28, jersey: 15, country: "USA", position: "SF", team: "Anadolu Efes" },
        { name: "Erkan Yilmaz", height: 197, age: 27, jersey: 33, country: "Turkey", position: "PF", team: "Anadolu Efes" },

    // Monaco

        { name: "Mike James", height: 185, age: 34, jersey: 55, country: "USA", position: "PG", team: "AS Monaco" },
        { name: "Nick Calathes", height: 198, age: 36, jersey: 33, country: "Greece", position: "PG", team: "AS Monaco" },
        { name: "Matthew Strazel", height: 182, age: 22, jersey: 32, country: "France", position: "PG", team: "AS Monaco" },
        { name: "Jordan Loyd", height: 193, age: 31, jersey: 8, country: "USA", position: "SG", team: "AS Monaco" },
        { name: "Juhann Begarin", height: 196, age: 22, jersey: 0, country: "France", position: "SG", team: "AS Monaco" },
        { name: "Elie Okobo", height: 191, age: 27, jersey: 0, country: "France", position: "SG", team: "AS Monaco" },
        { name: "Alpha Diallo", height: 201, age: 27, jersey: 11, country: "USA", position: "SF", team: "AS Monaco" },
        { name: "Terry Tarpey", height: 195, age: 30, jersey: 22, country: "USA", position: "SG", team: "AS Monaco" },
        { name: "Jaron Blossomgame", height: 201, age: 31, jersey: 4, country: "USA", position: "SF", team: "AS Monaco" },
        { name: "Vitto Brown", height: 203, age: 29, jersey: 30, country: "USA", position: "PF", team: "AS Monaco" },
        { name: "Petr Cornelie", height: 211, age: 29, jersey: 12, country: "France", position: "PF", team: "AS Monaco" },
        { name: "Daniel Theis", height: 203, age: 32, jersey: 10, country: "Germany", position: "C", team: "AS Monaco" },
        { name: "Donatas Motiejunas", height: 213, age: 34, jersey: 20, country: "Lithuania", position: "C", team: "AS Monaco" },
        { name: "Georgios Papagiannis", height: 220, age: 27, jersey: 9, country: "Greece", position: "C", team: "AS Monaco" },
        { name: "Mam Jaiteh", height: 208, age: 30, jersey: 14, country: "France", position: "C", team: "AS Monaco" },

    // Baskonia

        { name: "Trent Forrest", height: 193, age: 26, jersey: 11, country: "USA", position: "PG", team: "Baskonia" },
        { name: "Kamar Baldwin", height: 185, age: 27, jersey: 44, country: "USA", position: "PG", team: "Baskonia" },
        { name: "Markus Howard", height: 178, age: 25, jersey: 0, country: "USA", position: "PG", team: "Baskonia" },
        { name: "Pavel Savkov", height: 200, age: 22, jersey: 6, country: "Russia", position: "SG", team: "Baskonia" },
        { name: "Ognjen Jaramaz", height: 193, age: 29, jersey: 10, country: "Serbia", position: "SG", team: "Baskonia" },
        { name: "Timothe Luwawu-Cabarrot", height: 198, age: 29, jersey: 9, country: "France", position: "SF", team: "Baskonia" },
        { name: "Sander Raieste", height: 204, age: 25, jersey: 2, country: "Estonia", position: "SF", team: "Baskonia" },
        { name: "Tadas Sedekerskis", height: 206, age: 27, jersey: 8, country: "Lithuania", position: "SF", team: "Baskonia" },
        { name: "Chima Moneke", height: 198, age: 29, jersey: 95, country: "Nigeria", position: "PF", team: "Baskonia" },
        { name: "Nikos Rogkavopoulos", height: 203, age: 23, jersey: 17, country: "Greece", position: "SF", team: "Baskonia" },
        { name: "Ousmane Ndiaye", height: 211, age: 20, jersey: 46, country: "Senegal", position: "PF", team: "Baskonia" },
        { name: "Donta Hall", height: 208, age: 27, jersey: 45, country: "USA", position: "C", team: "Baskonia" },
        { name: "Khalifa Diop", height: 211, age: 23, jersey: 18, country: "Senegal", position: "C", team: "Baskonia" },
        { name: "Luka Samanic", height: 208, age: 25, jersey: 99, country: "Croatia", position: "PF", team: "Baskonia" },

        // Milan

            { name: "Nenad Dimitrijevic", height: 190, age: 27, jersey: 1, country: "North Macedonia", position: "PG", team: "Emporio Armani Milan" },
            { name: "Armoni Brooks", height: 191, age: 26, jersey: 12, country: "USA", position: "SG", team: "Emporio Armani Milan" },
            { name: "Leandro Bolmaro", height: 198, age: 24, jersey: 10, country: "Argentina", position: "SG", team: "Emporio Armani Milan" },
            { name: "Freddie Gillespie", height: 211, age: 27, jersey: 55, country: "USA", position: "C", team: "Emporio Armani Milan" },
            { name: "Nico Mannion", height: 188, age: 23, jersey: 2, country: "Italy", position: "PG", team: "Emporio Armani Milan" },
            { name: "Fabien Causeur", height: 196, age: 37, jersey: 5, country: "France", position: "SG", team: "Emporio Armani Milan" },
            { name: "Stefano Tonut", height: 194, age: 31, jersey: 7, country: "Italy", position: "SG", team: "Emporio Armani Milan" },
            { name: "Diego Flaccadori", height: 193, age: 28, jersey: 21, country: "Italy", position: "PG", team: "Emporio Armani Milan" },
            { name: "Shavon Shields", height: 201, age: 30, jersey: 31, country: "Denmark", position: "SF", team: "Emporio Armani Milan" },
            { name: "Ousmane Diop", height: 203, age: 25, jersey: 25, country: "Senegal", position: "C", team: "Emporio Armani Milan" },
            { name: "Nikola Mirotic", height: 208, age: 34, jersey: 33, country: "Montenegro", position: "PF", team: "Emporio Armani Milan" },
            { name: "Josh Nebo", height: 206, age: 27, jersey: 32, country: "USA", position: "C", team: "Emporio Armani Milan" },
            { name: "Zach LeDay", height: 202, age: 30, jersey: 16, country: "USA", position: "PF", team: "Emporio Armani Milan" },
            { name: "Giampaolo Ricci", height: 202, age: 33, jersey: 17, country: "Italy", position: "PF", team: "Emporio Armani Milan" },

        // Bayern

        
            { name: "Carsen Edwards", height: 180, age: 26, jersey: 3, country: "USA", position: "PG", team: "Bayern Munich" },
            { name: "Nick Weiler-Babb", height: 196, age: 29, jersey: 0, country: "Germany", position: "SG", team: "Bayern Munich" },
            { name: "Vladimir Lucic", height: 204, age: 35, jersey: 11, country: "Serbia", position: "SF", team: "Bayern Munich" },
            { name: "Niels Giffey", height: 200, age: 33, jersey: 5, country: "Germany", position: "SF", team: "Bayern Munich" },
            { name: "Andreas Obst", height: 191, age: 28, jersey: 13, country: "Germany", position: "SG", team: "Bayern Munich" },
            { name: "Shabazz Napier", height: 183, age: 33, jersey: 8, country: "USA", position: "PG", team: "Bayern Munich" },
            { name: "Ivan Kharchenkov", height: 198, age: 18, jersey: 10, country: "Germany", position: "SG", team: "Bayern Munich" },
            { name: "Devin Booker", height: 205, age: 33, jersey: 31, country: "USA", position: "C", team: "Bayern Munich" },
            { name: "Danko Brankovic", height: 217, age: 24, jersey: 22, country: "Croatia", position: "C", team: "Bayern Munich" },
            { name: "Onuralp Bitim", height: 198, age: 25, jersey: 17, country: "Turkey", position: "SG/SF", team: "Bayern Munich" },
            { name: "Elias Harris", height: 203, age: 35, jersey: 20, country: "Germany", position: "PF", team: "Bayern Munich" },
            { name: "Oscar da Silva", height: 206, age: 26, jersey: 1, country: "Germany", position: "PF", team: "Bayern Munich" },
            { name: "Johannes Voigtmann", height: 211, age: 32, jersey: 7, country: "Germany", position: "C", team: "Bayern Munich" },
            { name: "Kevin Yebo", height: 207, age: 28, jersey: 53, country: "Germany", position: "PF", team: "Bayern Munich" },

        // Fener

            { name: "Wade Baldwin IV", height: 193, age: 28, jersey: 2, country: "USA", position: "PG", team: "Fenerbahce" },
            { name: "Scottie Wilbekin", height: 188, age: 31, jersey: 3, country: "USA", position: "PG", team: "Fenerbahce" },
            { name: "Marko Guduric", height: 196, age: 29, jersey: 23, country: "Serbia", position: "SG", team: "Fenerbahce" },
            { name: "Devon Hall", height: 196, age: 29, jersey: 20, country: "USA", position: "SG", team: "Fenerbahce" },
            { name: "Nigel Hayes-Davis", height: 203, age: 30, jersey: 11, country: "USA", position: "PF", team: "Fenerbahce" },
            { name: "Melih Mahmutoglu", height: 191, age: 34, jersey: 10, country: "Turkey", position: "SG", team: "Fenerbahce" },
            { name: "Nicolo Melli", height: 205, age: 34, jersey: 4, country: "Italy", position: "PF", team: "Fenerbahce" },
            { name: "Tarik Biberovic", height: 201, age: 24, jersey: 13, country: "Turkey", position: "SF", team: "Fenerbahce" },
            { name: "Dyshawn Pierre", height: 198, age: 31, jersey: 21, country: "Canada", position: "SF", team: "Fenerbahce" },
            { name: "Bonzie Colson", height: 198, age: 28, jersey: 50, country: "USA", position: "SF", team: "Fenerbahce" },
            { name: "Arturs Zagars", height: 190, age: 24, jersey: 32, country: "Latvia", position: "PG", team: "Fenerbahce" },
            { name: "Khem Birch", height: 206, age: 32, jersey: 92, country: "Canada", position: "C", team: "Fenerbahce" },
            { name: "Sertac Sanli", height: 212, age: 33, jersey: 5, country: "Turkey", position: "C", team: "Fenerbahce" },
            { name: "Jilson Bango", height: 208, age: 26, jersey: 44, country: "Angola", position: "C", team: "Fenerbahce" },
            { name: "Errick McCollum", height: 188, age: 37, jersey: 0, country: "USA", position: "PG", team: "Fenerbahce" },

        // Asvel

        
            { name: "Paris Lee", height: 183, age: 29, jersey: 3, country: "USA", position: "PG", team: "LDLC ASVEL" },
            { name: "Edwin Jackson", height: 190, age: 35, jersey: 11, country: "France", position: "SG", team: "LDLC ASVEL" },
            { name: "Nando De Colo", height: 196, age: 37, jersey: 12, country: "France", position: "SG", team: "LDLC ASVEL" },
            { name: "Charles Kahudi", height: 196, age: 38, jersey: 5, country: "France", position: "SF", team: "LDLC ASVEL" },
            { name: "Theo Maledon", height: 192, age: 23, jersey: 6, country: "France", position: "PG", team: "LDLC ASVEL" },
            { name: "Joffrey Lauvergne", height: 211, age: 33, jersey: 7, country: "France", position: "C", team: "LDLC ASVEL" },
            { name: "Mbaye Ndiaye", height: 203, age: 25, jersey: 24, country: "Senegal", position: "PF", team: "LDLC ASVEL" },
            { name: "David Lighty", height: 195, age: 36, jersey: 23, country: "USA", position: "SG", team: "LDLC ASVEL" },
            { name: "Melvin Ajinca", height: 203, age: 20, jersey: 8, country: "France", position: "SF", team: "LDLC ASVEL" },
            { name: "Andre Roberson", height: 201, age: 33, jersey: 21, country: "USA", position: "SF", team: "LDLC ASVEL" },
            { name: "Yohann Sissoko", height: 188, age: 19, jersey: 30, country: "France", position: "PG", team: "LDLC ASVEL" },
            { name: "Tarik Black", height: 206, age: 33, jersey: 28, country: "USA", position: "C", team: "LDLC ASVEL" },
            { name: "Mbiya Paul", height: 200, age: 19, jersey: 34, country: "France", position: "SF", team: "LDLC ASVEL" },
            { name: "Shaquille Harrison", height: 190, age: 31, jersey: 1, country: "USA", position: "PG", team: "LDLC ASVEL" },
            { name: "Ben Bentil", height: 206, age: 29, jersey: 50, country: "Ghana", position: "PF", team: "LDLC ASVEL" },
            { name: "Neal Sako", height: 211, age: 25, jersey: 13, country: "France", position: "C", team: "LDLC ASVEL" },

        // Maccabi

        
            { name: "Jimmy Clark III", height: 191, age: 25, jersey: 2, country: "USA", position: "PG", team: "Maccabi" },
            { name: "Rokas Jokubaitis", height: 193, age: 24, jersey: 31, country: "Lithuania", position: "PG", team: "Maccabi" },
            { name: "Jaylen Hoard", height: 205, age: 25, jersey: 1, country: "France", position: "PF", team: "Maccabi" },
            { name: "Tamir Blatt", height: 185, age: 27, jersey: 45, country: "Israel", position: "PG", team: "Maccabi" },
            { name: "Rafi Menco", height: 198, age: 30, jersey: 8, country: "Israel", position: "SF", team: "Maccabi" },
            { name: "John DiBartolomeo", height: 183, age: 33, jersey: 12, country: "USA", position: "PG", team: "Maccabi" },
            { name: "Jasiel Rivero", height: 206, age: 31, jersey: 14, country: "Cuba", position: "C", team: "Maccabi" },
            { name: "Jake Cohen", height: 210, age: 34, jersey: 15, country: "USA/Israel", position: "C", team: "Maccabi" },
            { name: "Levi Randolph", height: 196, age: 32, jersey: 20, country: "USA", position: "SG", team: "Maccabi" },
            { name: "Marial Shayok", height: 196, age: 29, jersey: 3, country: "South Sudan", position: "SG", team: "Maccabi" },
            { name: "Will Rayman", height: 203, age: 27, jersey: 11, country: "USA", position: "PF", team: "Maccabi" },
            { name: "Omer Mayer", height: 188, age: 18, jersey: 10, country: "Israel", position: "PG", team: "Maccabi" },
            { name: "Roman Sorkin", height: 208, age: 28, jersey: 9, country: "Israel", position: "C", team: "Maccabi" },
            { name: "Trevion Williams", height: 208, age: 24, jersey: 50, country: "USA", position: "C", team: "Maccabi" },
          
          // Olympiacos

          
            { name: "Thomas Walkup", height: 193, age: 32, jersey: 0, country: "Greece", position: "PG", team: "Olympiacos" },
            { name: "Tyler Dorsey", height: 196, age: 29, jersey: 22, country: "USA", position: "SG", team: "Olympiacos" },
            { name: "Saben Lee", height: 188, age: 25, jersey: 9, country: "USA", position: "PG", team: "Olympiacos" },
            { name: "Evan Fournier", height: 199, age: 32, jersey: 94, country: "France", position: "SG", team: "Olympiacos" },
            { name: "Shaquille McKissic", height: 195, age: 34, jersey: 77, country: "USA", position: "SF", team: "Olympiacos" },
            { name: "Kostas Papanikolaou", height: 204, age: 34, jersey: 16, country: "Greece", position: "SF", team: "Olympiacos" },
            { name: "Alec Peters", height: 206, age: 29, jersey: 25, country: "USA", position: "PF", team: "Olympiacos" },
            { name: "Keenan Evans", height: 191, age: 28, jersey: 12, country: "USA", position: "PG", team: "Olympiacos" },
            { name: "Moustapha Fall", height: 218, age: 33, jersey: 10, country: "France", position: "C", team: "Olympiacos" },
            { name: "Nikola Milutinov", height: 213, age: 30, jersey: 33, country: "Serbia", position: "C", team: "Olympiacos" },
            { name: "Naz Mitrou-Long", height: 193, age: 31, jersey: 3, country: "Canada", position: "PG", team: "Olympiacos" },
            { name: "Sasha Vezenkov", height: 206, age: 29, jersey: 14, country: "Bulgaria", position: "PF", team: "Olympiacos" },
            { name: "Giannoulis Larentzakis", height: 196, age: 31, jersey: 25, country: "Greece", position: "SG", team: "Olympiacos" },
            { name: "Nathan Mensah", height: 208, age: 26, jersey: 31, country: "Ghana", position: "C", team: "Olympiacos" },
            { name: "Moses Wright", height: 203, age: 26, jersey: 2, country: "USA", position: "C", team: "Olympiacos" },
            { name: "Luca Vildoza", height: 191, age: 29, jersey: 8, country: "Argentina", position: "PG", team: "Olympiacos" },
          

        // Real

            { name: "Facundo Campazzo", height: 181, age: 33, jersey: 7, country: "Argentina", position: "PG", team: "Real Madrid" },
            { name: "Sergio Llull", height: 190, age: 37, jersey: 23, country: "Spain", position: "SG", team: "Real Madrid" },
            { name: "Andres Feliz", height: 188, age: 27, jersey: 24, country: "Dominican Republic", position: "PG", team: "Real Madrid" },
            { name: "Xavier Rathan-Mayes", height: 193, age: 30, jersey: 8, country: "Canada", position: "SG", team: "Real Madrid" },
            { name: "Dzanan Musa", height: 205, age: 25, jersey: 31, country: "Bosnia and Herzegovina", position: "SF", team: "Real Madrid" },
            { name: "Mario Hezonja", height: 203, age: 30, jersey: 11, country: "Croatia", position: "SF", team: "Real Madrid" },
            { name: "Gabriel Deck", height: 198, age: 30, jersey: 14, country: "Argentina", position: "SF", team: "Real Madrid" },
            { name: "Alberto Abalde", height: 202, age: 29, jersey: 6, country: "Spain", position: "SF", team: "Real Madrid" },
            { name: "Hugo Gonzalez", height: 198, age: 19, jersey: 9, country: "Spain", position: "SG", team: "Real Madrid" },
            { name: "Eli Ndiaye", height: 203, age: 20, jersey: 30, country: "Spain", position: "PF", team: "Real Madrid" },
            { name: "Usman Garuba", height: 203, age: 22, jersey: 16, country: "Spain", position: "PF", team: "Real Madrid" },
            { name: "Walter Tavares", height: 220, age: 32, jersey: 22, country: "Cape Verde", position: "C", team: "Real Madrid" },
            { name: "Serge Ibaka", height: 208, age: 35, jersey: 18, country: "Spain", position: "C", team: "Real Madrid" },
            { name: "Bruno Fernando", height: 206, age: 26, jersey: 20, country: "Angola", position: "C", team: "Real Madrid" },

        // Virtus


            { name: "Matt Morgan", height: 188, age: 27, jersey: 30, country: "USA", position: "PG", team: "Virtus Bologna" },
            { name: "Isaia Cordinier", height: 197, age: 28, jersey: 0, country: "France", position: "SG", team: "Virtus Bologna" },
            { name: "Marco Belinelli", height: 196, age: 38, jersey: 3, country: "Italy", position: "SG", team: "Virtus Bologna" },
            { name: "Rayjon Tucker", height: 191, age: 27, jersey: 59, country: "USA", position: "SG", team: "Virtus Bologna" },
            { name: "Alessandro Pajola", height: 194, age: 25, jersey: 6, country: "Italy", position: "PG", team: "Virtus Bologna" },
            { name: "Daniel Hackett", height: 199, age: 37, jersey: 23, country: "Italy", position: "PG", team: "Virtus Bologna" },
            { name: "Will Clyburn", height: 201, age: 34, jersey: 8, country: "USA", position: "SF", team: "Virtus Bologna" },
            { name: "Nicola Akele", height: 203, age: 26, jersey: 45, country: "Italy", position: "PF", team: "Virtus Bologna" },
            { name: "Tornike Shengelia", height: 206, age: 33, jersey: 21, country: "Georgia", position: "PF", team: "Virtus Bologna" },
            { name: "Andrejs Grazulis", height: 202, age: 31, jersey: 24, country: "Latvia", position: "PF", team: "Virtus Bologna" },
            { name: "Achille Polonara", height: 205, age: 33, jersey: 33, country: "Italy", position: "PF", team: "Virtus Bologna" },
            { name: "Ante Zizic", height: 210, age: 28, jersey: 41, country: "Croatia", position: "C", team: "Virtus Bologna" },
            { name: "Mouhamet Diouf", height: 206, age: 23, jersey: 35, country: "Italy", position: "C", team: "Virtus Bologna" },
            { name: "Justin Holiday", height: 198, age: 35, jersey: 1, country: "USA", position: "SG", team: "Virtus Bologna" },

        // Zalgiris

            { name: "Sylvain Francisco", height: 188, age: 27, jersey: 3, country: "France", position: "PG", team: "Zalgiris" },
            { name: "Lukas Lekavicius", height: 181, age: 30, jersey: 4, country: "Lithuania", position: "PG", team: "Zalgiris" },
            { name: "Dovydas Giedraitis", height: 193, age: 24, jersey: 9, country: "Lithuania", position: "SG", team: "Zalgiris" },
            { name: "Ignas Brazdeikis", height: 198, age: 26, jersey: 8, country: "Lithuania", position: "SF", team: "Zalgiris" },
            { name: "Edgaras Ulanovas", height: 199, age: 33, jersey: 92, country: "Lithuania", position: "SF", team: "Zalgiris" },
            { name: "Arnas Butkevicius", height: 198, age: 32, jersey: 51, country: "Lithuania", position: "SF", team: "Zalgiris" },
            { name: "Alen Smailagic", height: 208, age: 24, jersey: 18, country: "Serbia", position: "PF", team: "Zalgiris" },
            { name: "Deividas Sirvydis", height: 204, age: 24, jersey: 91, country: "Lithuania", position: "SF", team: "Zalgiris" },
            { name: "Laurynas Birutis", height: 213, age: 27, jersey: 15, country: "Lithuania", position: "C", team: "Zalgiris" },
            { name: "Isaiah Wong", height: 191, age: 24, jersey: 2, country: "USA", position: "SG", team: "Zalgiris" },
            { name: "Bryant Dunston", height: 203, age: 38, jersey: 42, country: "USA", position: "C", team: "Zalgiris" },
            { name: "Brady Manek", height: 206, age: 26, jersey: 45, country: "USA", position: "PF", team: "Zalgiris" },
            { name: "Matt Mitchell", height: 198, age: 25, jersey: 21, country: "USA", position: "SF", team: "Zalgiris" }
          
];

// Game state variables
let dailyTargetPlayer;
let unlimitedTargetPlayer;
let currentMode = 'daily'; // Default mode
let dailyGuesses = [];
let unlimitedGuesses = [];
let dailyStartTime = null;
let unlimitedStartTime = null;
let dailyTimerInterval = null;
let unlimitedTimerInterval = null;

// Function to get a seed based on the current date (for Daily mode)
function getDailySeed() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to get the current date as a string (YYYY-MM-DD)
function getCurrentDateString() {
    const now = new Date();
    return now.toISOString().split('T')[0]; // e.g., "2025-03-02"
}

// Function to select a random player (Daily mode uses seed, Unlimited uses random)
function selectPlayer(isDailyMode) {
    if (!players || players.length === 0) {
        console.error("Players array is empty or undefined");
        return { name: "Unknown Player", height: 0, age: 0, jersey: 0, country: "Unknown", position: "Unknown", team: "Unknown" };
    }
    if (isDailyMode) {
        const seed = getDailySeed();
        const randomIndex = (seed % players.length + players.length) % players.length;
        return players[randomIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * players.length);
        return players[randomIndex];
    }
}

// Set initial target players
dailyTargetPlayer = selectPlayer(true);
unlimitedTargetPlayer = selectPlayer(false);
console.log("Daily Target Player:", dailyTargetPlayer);
console.log("Unlimited Target Player:", unlimitedTargetPlayer);

// Timer functions
function startTimer(mode) {
    stopTimer(mode);

    console.log(`Starting ${mode} timer...`);
    if (mode === 'daily') {
        dailyStartTime = Date.now();
        dailyTimerInterval = setInterval(() => {
            console.log(`Timer tick for ${mode}`);
            updateTimer(mode);
        }, 1000);
        console.log(`dailyTimerInterval set to: ${dailyTimerInterval}`);
    } else {
        unlimitedStartTime = Date.now();
        unlimitedTimerInterval = setInterval(() => {
            console.log(`Timer tick for ${mode}`);
            updateTimer(mode);
        }, 1000);
        console.log(`unlimitedTimerInterval set to: ${unlimitedTimerInterval}`);
    }
}

function updateTimer(mode) {
    const startTime = mode === 'daily' ? dailyStartTime : unlimitedStartTime;
    if (!startTime) {
        console.warn(`No start time for ${mode} timer`);
        return;
    }
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const timerDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById("timer").textContent = timerDisplay;
    console.log(`${mode} timer updated to: ${timerDisplay}`);
}

function stopTimer(mode) {
    if (mode === 'daily') {
        if (dailyTimerInterval) {
            console.log(`Stopping daily timer with ID: ${dailyTimerInterval}`);
            clearInterval(dailyTimerInterval);
            dailyTimerInterval = null;
            dailyStartTime = null;
        } else {
            console.log("No daily timer to stop");
        }
    } else {
        if (unlimitedTimerInterval) {
            console.log(`Stopping unlimited timer with ID: ${unlimitedTimerInterval}`);
            clearInterval(unlimitedTimerInterval);
            unlimitedTimerInterval = null;
            unlimitedStartTime = null;
        } else {
            console.log("No unlimited timer to stop");
        }
    }
}

// Check if the player has already played today in Daily mode
function hasPlayedToday() {
    const lastPlayedDate = localStorage.getItem('dailyLastPlayedDate');
    const currentDate = getCurrentDateString();
    return lastPlayedDate === currentDate;
}

// Store the current date as the last played date when the game ends
function markGameAsPlayed() {
    localStorage.setItem('dailyLastPlayedDate', getCurrentDateString());
}

function resetUnlimitedGame() {
    unlimitedTargetPlayer = selectPlayer(false);
    unlimitedGuesses = [];
    stopTimer('unlimited');
    const guessList = document.getElementById("guessList");
    guessList.innerHTML = `
        <li class="empty-row"><span class="guess-number">1</span></li>
        <li class="empty-row"><span class="guess-number">2</span></li>
        <li class="empty-row"><span class="guess-number">3</span></li>
        <li class="empty-row"><span class="guess-number">4</span></li>
        <li class="empty-row"><span class="guess-number">5</span></li>
        <li class="empty-row"><span class="guess-number">6</span></li>
        <li class="empty-row"><span class="guess-number">7</span></li>
    `;
    document.getElementById("playerInput").value = "";
    document.getElementById("playerInput").disabled = false;
    const button = document.querySelector("button");
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
    document.getElementById("timer").textContent = "00:00";
    console.log("New Unlimited Target Player:", unlimitedTargetPlayer);

    const guessContainer = document.querySelector(".guess-container");
    guessContainer.classList.remove("reset-animate");
    void guessContainer.offsetWidth; // Trigger reflow
    guessContainer.classList.add("reset-animate");

    startTimer('unlimited');
}

// Initialize on page load
function initializeGame() {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById("dailyChallenge").textContent = `Daily EuroGuess - ${now.toLocaleDateString('en-US', options)}`;

    // Mode toggle buttons
    document.getElementById("dailyModeButton").addEventListener("click", () => switchMode('daily'));
    document.getElementById("unlimitedModeButton").addEventListener("click", () => switchMode('unlimited'));

    // Check if player has already played today in Daily mode
    if (currentMode === 'daily' && hasPlayedToday()) {
        showAlreadyPlayedMessage();
        disableInputAndButton();
        stopTimer('daily');
    } else {
        startTimer(currentMode);
    }

    // Add event listener for Try Again button
    document.getElementById("tryAgainButton").addEventListener("click", () => {
        document.getElementById("unlimitedGameOverModal").style.display = "none";
        resetUnlimitedGame();
    });
}

function switchMode(mode) {
    if (mode === currentMode) return;
    console.log(`Switching to ${mode} mode`);
    currentMode = mode;

    // Trigger animation on mode toggle
    const modeToggle = document.querySelector(".mode-toggle");
    modeToggle.classList.remove("animate");
    void modeToggle.offsetWidth;
    modeToggle.classList.add("animate");

    // Stop both timers
    stopTimer('daily');
    stopTimer('unlimited');

    // Update button styles and title
    document.getElementById("dailyModeButton").classList.toggle("active", mode === 'daily');
    document.getElementById("unlimitedModeButton").classList.toggle("active", mode === 'unlimited');
    document.getElementById("dailyChallenge").textContent = mode === 'daily' ? `Daily EuroGuess - ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : "Unlimited EuroGuess";

    // Reset guess list
    const guessList = document.getElementById("guessList");
    guessList.innerHTML = `
        <li class="empty-row"><span class="guess-number">1</span></li>
        <li class="empty-row"><span class="guess-number">2</span></li>
        <li class="empty-row"><span class="guess-number">3</span></li>
        <li class="empty-row"><span class="guess-number">4</span></li>
        <li class="empty-row"><span class="guess-number">5</span></li>
        <li class="empty-row"><span class="guess-number">6</span></li>
        <li class="empty-row"><span class="guess-number">7</span></li>
    `;

    // Reset input and button
    document.getElementById("playerInput").value = "";
    document.getElementById("playerInput").disabled = false;
    const button = document.querySelector("button");
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";

    // Hide any existing already played message
    const alreadyPlayedMessage = document.getElementById("alreadyPlayedMessage");
    if (alreadyPlayedMessage) {
        alreadyPlayedMessage.style.display = "none";
    }

    // Check if player can play in Daily mode
    if (mode === 'daily' && hasPlayedToday()) {
        showAlreadyPlayedMessage();
        disableInputAndButton();
        stopTimer('daily');
    } else {
        document.getElementById("timer").textContent = "00:00";
        startTimer(mode);
    }
}

window.addEventListener('load', initializeGame);

function showSuggestions() {
    const input = document.getElementById("playerInput").value.toLowerCase();
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";
    if (!input) return;

    const matches = players.filter(player => player.name.toLowerCase().includes(input));
    matches.forEach(player => {
        const div = document.createElement("div");
        div.classList.add("autocomplete-suggestion");
        div.textContent = player.name;
        div.onclick = function() {
            document.getElementById("playerInput").value = player.name;
            suggestionsDiv.innerHTML = "";
        };
        suggestionsDiv.appendChild(div);
    });
}

function showSuccessMessage() {
    const successDiv = document.createElement("div");
    successDiv.classList.add("success-message");

    if (currentMode === 'daily') {
        successDiv.innerHTML = `
            Congrats! You got it!
            <button id="shareButton" class="share-button">Share</button>
        `;
        document.body.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);

        document.getElementById('shareButton').addEventListener('click', () => {
            const guesses = 7 - document.querySelectorAll('.guess-list li.empty-row').length;
            const resultText = `I guessed the ELWordle player in ${guesses} tries! 🏀 Play at [your-site-url] #ELWordle`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'ELWordle Result',
                    text: resultText,
                    url: window.location.href,
                }).catch(err => console.log('Share failed:', err));
            } else {
                navigator.clipboard.writeText(resultText).then(() => {
                    alert('Result copied to clipboard! Share it with your friends.');
                }).catch(err => console.log('Copy failed:', err));
            }
        });

        // Mark the game as played in Daily mode
        markGameAsPlayed();
    } else {
        successDiv.innerHTML = `Congrats! You got it!`;
        document.body.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
    }
}

function disableInputAndButton() {
    const input = document.getElementById("playerInput");
    const button = document.querySelector("button");
    input.disabled = true;
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
}

function showAlreadyPlayedMessage() {
    let messageDiv = document.getElementById("alreadyPlayedMessage");
    if (!messageDiv) {
        messageDiv = document.createElement("div");
        messageDiv.id = "alreadyPlayedMessage";
        messageDiv.classList.add("already-played-message");
        messageDiv.textContent = "You've already played today's Daily EuroGuess. Try again tomorrow or switch to Unlimited mode!";
        document.querySelector(".input-container").insertAdjacentElement('afterend', messageDiv);
    }
    messageDiv.style.display = "block";
}

function simplifyPosition(position, isMobile) {
    if (!isMobile) return position;
    const positionMap = {
        "PG": "G",
        "SG": "G",
        "SF": "F",
        "PF": "F",
        "C": "C"
    };
    return positionMap[position] || position;
}

function createStatElement(value, correctValue, isNumeric = false) {
    const isMobile = window.innerWidth <= 480;
    let displayValue = value;

    if (!isNumeric && typeof value === "string" && ["PG", "SG", "SF", "PF", "C"].includes(value)) {
        displayValue = simplifyPosition(value, isMobile);
    }

    const element = document.createElement('span');
    element.textContent = displayValue;

    if (isNumeric && typeof value === 'number' && typeof correctValue === 'number') {
        if (value === correctValue) {
            element.classList.add('correct');
            const checkmark = document.createElement('span');
            checkmark.textContent = ' ✓';
            checkmark.style.color = '#15803d';
            checkmark.style.fontWeight = 'bold';
            element.appendChild(checkmark);
        } else {
            const difference = Math.abs(value - correctValue);
            if (difference <= 3) {
                element.classList.add('incorrect');
            }
            const arrow = document.createElement('span');
            arrow.textContent = value > correctValue ? ' ↓' : ' ↑';
            const arrowClass = value > correctValue ? 'arrow-down' : 'arrow-up';
            arrow.classList.add(arrowClass);
            arrow.style.marginLeft = '5px';
            arrow.style.fontWeight = 'bold';
            element.appendChild(arrow);
        }
    } else if (displayValue === (isMobile ? simplifyPosition(correctValue, isMobile) : correctValue)) {
        element.classList.add('correct');
        const checkmark = document.createElement('span');
        checkmark.textContent = ' ✓';
        checkmark.style.color = '#15803d';
        checkmark.style.fontWeight = 'bold';
        element.appendChild(checkmark);
    }
    return element;
}

function showUnlimitedGameOver() {
    document.getElementById("revealUnlimitedPlayer").textContent = unlimitedTargetPlayer.name;
    document.getElementById("unlimitedGameOverModal").style.display = "flex";
    stopTimer('unlimited');
}

function checkGuess() {
    // Prevent guessing in Daily mode if already played today
    if (currentMode === 'daily' && hasPlayedToday()) {
        showAlreadyPlayedMessage();
        disableInputAndButton();
        stopTimer('daily');
        return;
    }

    const input = document.getElementById("playerInput").value;
    const guessedPlayer = players.find(player => player.name.toLowerCase() === input.toLowerCase());
    if (!guessedPlayer) return;

    const targetPlayer = currentMode === 'daily' ? dailyTargetPlayer : unlimitedTargetPlayer;
    const guesses = currentMode === 'daily' ? dailyGuesses : unlimitedGuesses;

    const guessList = document.getElementById("guessList");
    const emptyRows = guessList.querySelectorAll("li.empty-row");

    if (emptyRows.length === 0) {
        console.log("No more guesses left!");
        if (currentMode === 'daily') {
            showGameOver();
            markGameAsPlayed(); // Mark game as played
            updateStats(false, 0);
            disableInputAndButton();
        } else {
            showUnlimitedGameOver();
            updateStats(false, 0);
        }
        return;
    }

    const firstEmptyRow = emptyRows[0];
    firstEmptyRow.classList.remove("empty-row");
    firstEmptyRow.style.opacity = "1";
    firstEmptyRow.innerHTML = `<strong>${guessedPlayer.name}</strong>`;

    firstEmptyRow.append(createStatElement(guessedPlayer.team, targetPlayer.team));
    firstEmptyRow.append(createStatElement(guessedPlayer.height, targetPlayer.height, true));
    firstEmptyRow.append(createStatElement(guessedPlayer.age, targetPlayer.age, true));
    firstEmptyRow.append(createStatElement(guessedPlayer.jersey, targetPlayer.jersey, true));
    firstEmptyRow.append(createStatElement(guessedPlayer.country, targetPlayer.country));
    firstEmptyRow.append(createStatElement(guessedPlayer.position, targetPlayer.position));

    document.getElementById("playerInput").value = "";
    guesses.push(guessedPlayer);

    if (guessedPlayer.name === targetPlayer.name) {
        console.log("Correct guess! Attempting to stop timer...");
        firstEmptyRow.querySelectorAll('span').forEach(span => span.classList.add('correct'));
        stopTimer(currentMode);
        showSuccessMessage();
        const guessCount = guesses.length;
        updateStats(true, guessCount);
        if (currentMode === 'daily') {
            disableInputAndButton();
        } else {
            // Add animation class before resetting
            const guessContainer = document.querySelector(".guess-container");
            guessContainer.classList.add("new-player-waiting");
            setTimeout(() => {
                resetUnlimitedGame();
                guessContainer.classList.remove("new-player-waiting"); // Remove animation class after reset
            }, 3000); // Changed to 3 seconds
        }
    } else if (emptyRows.length === 1) {
        if (currentMode === 'daily') {
            showGameOver();
            markGameAsPlayed();
            updateStats(false, 0);
            disableInputAndButton();
        } else {
            showUnlimitedGameOver();
            updateStats(false, 0);
        }
    }
}

// Help and Stats Modal Logic
const helpModal = document.getElementById("helpModal");
const helpButton = document.getElementById("helpButton");
const helpCloseButton = helpModal.querySelector(".close");
const statsModal = document.getElementById("statsModal");
const statsButton = document.getElementById("statsButton");
const statsCloseButton = statsModal.querySelector(".close");
const gameOverModal = document.getElementById("gameOverModal");
const gameOverCloseButton = gameOverModal.querySelector(".close");
const unlimitedGameOverModal = document.getElementById("unlimitedGameOverModal");
const unlimitedGameOverCloseButton = unlimitedGameOverModal.querySelector(".close");

helpButton.onclick = () => helpModal.style.display = "flex";
helpCloseButton.onclick = () => helpModal.style.display = "none";
statsButton.onclick = () => {
    showStats();
    statsModal.style.display = "flex";
};
statsCloseButton.onclick = () => statsModal.style.display = "none";
gameOverCloseButton.onclick = () => gameOverModal.style.display = "none";
unlimitedGameOverCloseButton.onclick = () => unlimitedGameOverModal.style.display = "none";

[helpModal, statsModal, gameOverModal, unlimitedGameOverModal].forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Statistics Tracking
function updateStats(won, guesses) {
    let stats = JSON.parse(localStorage.getItem('elwordleStats')) || {
        gamesPlayed: 0,
        wins: 0,
        totalGuesses: 0
    };

    stats.gamesPlayed += 1;
    if (won) {
        stats.wins += 1;
        stats.totalGuesses += guesses;
    }

    localStorage.setItem('elwordleStats', JSON.stringify(stats));
    return stats;
}

function showStats() {
    const stats = JSON.parse(localStorage.getItem('elwordleStats')) || {
        gamesPlayed: 0,
        wins: 0,
        totalGuesses: 0
    };

    const winRate = stats.gamesPlayed > 0 ? (stats.wins / stats.gamesPlayed * 100).toFixed(1) : 0;
    const avgGuesses = stats.wins > 0 ? (stats.totalGuesses / stats.wins).toFixed(1) : 0;

    document.getElementById('gamesPlayed').textContent = stats.gamesPlayed;
    document.getElementById('winRate').textContent = `${winRate}%`;
    document.getElementById('avgGuesses').textContent = avgGuesses;

    document.getElementById('statsModal').style.display = 'flex';
}

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
});

function showGameOver() {
    document.getElementById("revealPlayer").textContent = dailyTargetPlayer.name;
    gameOverModal.style.display = "flex";
    stopTimer('daily');
}