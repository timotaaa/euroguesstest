

const players = [
    //KKCZ
    { name: "Yago dos Santos", height: 175, age: 25, jersey: 99, country: "Brazil", position: "G", team: "Crvena zvezda" },
    { name: "Miloš Teodosić", height: 196, age: 38, jersey: 4, country: "Serbia", position: "G", team: "Crvena zvezda" },
    { name: "Codi Miller-McIntyre", height: 191, age: 30, jersey: 0, country: "USA", position: "G", team: "Crvena zvezda" },
    { name: "Isaiah Canaan", height: 183, age: 32, jersey: 3, country: "USA", position: "G", team: "Crvena zvezda" },
    { name: "Nemanja Nedović", height: 191, age: 33, jersey: 36, country: "Serbia", position: "G", team: "Crvena zvezda" },
    { name: "Ognjen Dobrić", height: 198, age: 30, jersey: 13, country: "Serbia", position: "G", team: "Crvena zvezda" },
    { name: "Rokas Giedraitis", height: 200, age: 32, jersey: 31, country: "Lithuania", position: "F", team: "Crvena zvezda" },
    { name: "Dejan Davidovac", height: 202, age: 29, jersey: 7, country: "Serbia", position: "F", team: "Crvena zvezda" },
    { name: "Andrej Kostić", height: 198, age: 18, jersey: 47, country: "Serbia", position: "G", team: "Crvena zvezda" },
    { name: "Mike Daum", height: 206, age: 29, jersey: 24, country: "USA", position: "F", team: "Crvena zvezda" },
    { name: "Luka Mitrović", height: 206, age: 31, jersey: 9, country: "Serbia", position: "C", team: "Crvena zvezda" },
    { name: "Filip Petrušev", height: 213, age: 24, jersey: 30, country: "Serbia", position: "C", team: "Crvena zvezda" },
    { name: "Joel Bolomboy", height: 206, age: 31, jersey: 21, country: "USA", position: "C", team: "Crvena zvezda" },
    { name: "Uroš Plavšić", height: 216, age: 26, jersey: 33, country: "Serbia", position: "C", team: "Crvena zvezda" },
    { name: "John Brown III", height: 203, age: 32, jersey: 1, country: "USA", position: "F", team: "Crvena zvezda" },
    { name: "Branko Lazić", height: 196, age: 34, jersey: 10, country: "Serbia", position: "G", team: "Crvena zvezda" },
    { name: "Nikola Kalinić", height: 202, age: 33, jersey: 12, country: "Serbia", position: "F", team: "Crvena zvezda" },
    //KKCZ

    //Partizan
    { name: "Vanja Marinković", height: 198, age: 27, jersey: 9, country: "Serbia", position: "G", team: "Partizan" },
    { name: "Brandon Davies", height: 208, age: 33, jersey: 0, country: "USA", position: "C", team: "Partizan" },
    { name: "Iffe Lundberg", height: 193, age: 30, jersey: 1, country: "Denmark", position: "G", team: "Partizan" },
    { name: "Carlik Jones", height: 185, age: 27, jersey: 2, country: "South Sudan", position: "G", team: "Partizan" },
    { name: "Frank Ntilikina", height: 196, age: 26, jersey: 3, country: "France", position: "G", team: "Partizan" },
    { name: "Duane Washington Jr.", height: 191, age: 24, jersey: 4, country: "USA", position: "G", team: "Partizan" },
    { name: "Mario Nakić", height: 202, age: 23, jersey: 7, country: "Serbia", position: "F", team: "Partizan" },
    { name: "Isaac Bonga", height: 203, age: 25, jersey: 17, country: "Germany", position: "F", team: "Partizan" },
    { name: "Mitar Bošnjaković", height: 198, age: 22, jersey: 20, country: "Serbia", position: "F", team: "Partizan" },
    { name: "Aleksej Pokuševski", height: 213, age: 22, jersey: 11, country: "Serbia", position: "F", team: "Partizan" },
    { name: "Isiaha Mike", height: 203, age: 27, jersey: 24, country: "USA", position: "F", team: "Partizan" },
    { name: "Tyrique Jones", height: 206, age: 27, jersey: 88, country: "USA", position: "C", team: "Partizan" },
    { name: "Balša Koprivica", height: 213, age: 24, jersey: 5, country: "Serbia", position: "C", team: "Partizan" },
    { name: "Arijan Lakić", height: 197, age: 22, jersey: 19, country: "Serbia", position: "G", team: "Partizan" },
    { name: "Sterling Brown", height: 197, age: 30, jersey: 12, country: "USA", position: "G", team: "Partizan" },
    //Partizan

    //Pariz
    { name: "T.J. Shorts", height: 175, age: 27, jersey: 0, country: "USA", position: "G", team: "Paris Basketball" },
    { name: "Tyson Ward", height: 198, age: 27, jersey: 3, country: "USA", position: "F", team: "Paris Basketball" },
    { name: "Mikael Jantunen", height: 204, age: 24, jersey: 20, country: "Finland", position: "F", team: "Paris Basketball" },
    { name: "Kevarrius Hayes", height: 206, age: 27, jersey: 13, country: "USA", position: "C", team: "Paris Basketball" },
    { name: "Nadir Hifi", height: 188, age: 22, jersey: 2, country: "Algeria", position: "G", team: "Paris Basketball" },
    { name: "Daulton Hommes", height: 204, age: 28, jersey: 34, country: "USA", position: "F", team: "Paris Basketball" },
    { name: "Collin Malcolm", height: 201, age: 27, jersey: 1, country: "USA", position: "F", team: "Paris Basketball" },
    { name: "Bandja Sy", height: 204, age: 34, jersey: 5, country: "France", position: "F", team: "Paris Basketball" },
    { name: "Yakuba Ouattara", height: 192, age: 33, jersey: 24, country: "France", position: "G", team: "Paris Basketball" },
    { name: "Maodo Lo", height: 191, age: 32, jersey: 12, country: "Germany", position: "G", team: "Paris Basketball" },
    { name: "Sebastian Herrera", height: 193, age: 27, jersey: 7, country: "Germany", position: "G", team: "Paris Basketball" },
    { name: "Leopold Cavalière", height: 203, age: 28, jersey: 4, country: "France", position: "F", team: "Paris Basketball" },
    { name: "Enzo Shahrvin", height: 201, age: 22, jersey: 18, country: "France", position: "F", team: "Paris Basketball" },
    { name: "Leon Kratzer", height: 211, age: 28, jersey: 8, country: "Germany", position: "C", team: "Paris Basketball" },
    //Pariz

    //Barcelona
        { name: "Nicolas Laprovittola", height: 190, age: 34, jersey: 20, country: "Argentina", position: "G", team: "FC Barcelona" },
        { name: "Juan Nunez", height: 191, age: 21, jersey: 17, country: "Spain", position: "G", team: "FC Barcelona" },
        { name: "Dame Sarr", height: 198, age: 18, jersey: 2, country: "Italy", position: "G", team: "FC Barcelona" },
        { name: "Kevin Punter", height: 193, age: 32, jersey: 0, country: "USA", position: "G", team: "FC Barcelona" },
        { name: "Tomaš Satoransky", height: 201, age: 33, jersey: 13, country: "Czech Republic", position: "G", team: "FC Barcelona" },
        { name: "Dario Brizuela", height: 188, age: 30, jersey: 8, country: "Spain", position: "G", team: "FC Barcelona" },
        { name: "Alex Abrines", height: 198, age: 31, jersey: 21, country: "Spain", position: "F", team: "FC Barcelona" },
        { name: "Justin Anderson", height: 198, age: 31, jersey: 1, country: "USA", position: "F", team: "FC Barcelona" },
        { name: "Jabari Parker", height: 203, age: 29, jersey: 22, country: "USA", position: "F", team: "FC Barcelona" },
        { name: "Willy Hernangómez", height: 210, age: 30, jersey: 14, country: "Spain", position: "C", team: "FC Barcelona" },
        { name: "Jan Vesely", height: 213, age: 34, jersey: 6, country: "Czech Republic", position: "C", team: "FC Barcelona" },
        { name: "Joel Parra", height: 202, age: 24, jersey: 44, country: "Spain", position: "F", team: "FC Barcelona" },
        { name: "Youssoupha Fall", height: 221, age: 29, jersey: 19, country: "Senegal", position: "C", team: "FC Barcelona" },
        { name: "Chimezie Metu", height: 206, age: 28, jersey: 10, country: "Nigeria", position: "F", team: "FC Barcelona" },
      //Barcelona

    //Panata
        { name: "Panagiotis Kalaitzakis", height: 200, age: 25, jersey: 0, country: "Greece", position: "G", team: "Panathinaikos" },
        { name: "Lorenzo Brown", height: 196, age: 34, jersey: 2, country: "USA", position: "G", team: "Panathinaikos" },
        { name: "Dimitris Moraitis", height: 194, age: 26, jersey: 6, country: "Greece", position: "G", team: "Panathinaikos" },
        { name: "Kostas Sloukas", height: 190, age: 35, jersey: 10, country: "Greece", position: "G", team: "Panathinaikos" },
        { name: "Cedi Osman", height: 201, age: 29, jersey: 16, country: "Turkey", position: "F", team: "Panathinaikos" },
        { name: "Alexandros Samontourov", height: 210, age: 20, jersey: 20, country: "Greece", position: "F", team: "Panathinaikos" },
        { name: "Ioannis Papapetrou", height: 206, age: 30, jersey: 21, country: "Greece", position: "F", team: "Panathinaikos" },
        { name: "Jerian Grant", height: 196, age: 32, jersey: 22, country: "USA", position: "G", team: "Panathinaikos" },
        { name: "Kendrick Nunn", height: 188, age: 29, jersey: 25, country: "USA", position: "G", team: "Panathinaikos" },
        { name: "Mathias Lessort", height: 206, age: 29, jersey: 26, country: "France", position: "C", team: "Panathinaikos" },
        { name: "Kostas Antetokounmpo", height: 208, age: 27, jersey: 37, country: "Greece", position: "C", team: "Panathinaikos" },
        { name: "Marius Grigonis", height: 198, age: 30, jersey: 40, country: "Lithuania", position: "G", team: "Panathinaikos" },
        { name: "Juancho Hernangomez", height: 206, age: 29, jersey: 41, country: "Spain", position: "F", team: "Panathinaikos" },
        { name: "Dinos Mitoglou", height: 210, age: 28, jersey: 44, country: "Greece", position: "F", team: "Panathinaikos" },
        { name: "Omer Yurtseven", height: 213, age: 26, jersey: 77, country: "Turkey", position: "C", team: "Panathinaikos" },
        { name: "Wenyen Gabriel", height: 206, age: 27, jersey: 32, country: "South Sudan", position: "C", team: "Panathinaikos" },
        { name: "Tibor Pleiss", height: 218, age: 35, jersey: 24, country: "Germany", position: "C", team: "Panathinaikos" },
    //Panata
      
    // ALBA

        { name: "Martin Hermannsson", height: 190, age: 30, jersey: 15, country: "Iceland", position: "G", team: "ALBA Berlin" },
        { name: "William McDowell-White", height: 191, age: 26, jersey: 7, country: "Australia", position: "G", team: "ALBA Berlin" },
        { name: "Matt Thomas", height: 193, age: 30, jersey: 11, country: "USA", position: "G", team: "ALBA Berlin" },
        { name: "Malte Delow", height: 194, age: 23, jersey: 6, country: "Germany", position: "G", team: "ALBA Berlin" },
        { name: "Matteo Spagnolo", height: 193, age: 22, jersey: 3, country: "Italy", position: "G", team: "ALBA Berlin" },
        { name: "Jonas Mattisseck", height: 194, age: 25, jersey: 9, country: "Germany", position: "G", team: "ALBA Berlin" },
        { name: "Yannick Wetzell", height: 208, age: 28, jersey: 5, country: "New Zealand", position: "F", team: "ALBA Berlin" },
        { name: "Tim Schneider", height: 208, age: 27, jersey: 10, country: "Germany", position: "F", team: "ALBA Berlin" },
        { name: "Louis Olinde", height: 205, age: 26, jersey: 19, country: "Germany", position: "F", team: "ALBA Berlin" },
        { name: "Gabriele Procida", height: 201, age: 22, jersey: 1, country: "Italy", position: "F", team: "ALBA Berlin" },
        { name: "Justin Bean", height: 201, age: 28, jersey: 34, country: "USA", position: "F", team: "ALBA Berlin" },
        { name: "David McCormack", height: 208, age: 25, jersey: 33, country: "USA", position: "C", team: "ALBA Berlin" },
        { name: "Amon Doerries", height: 210, age: 19, jersey: 22, country: "Germany", position: "F", team: "ALBA Berlin" },
        { name: "Elias Rapieque", height: 200, age: 21, jersey: 25, country: "Germany", position: "F", team: "ALBA Berlin" },

    // Efes

        { name: "Shane Larkin", height: 182, age: 32, jersey: 0, country: "USA", position: "G", team: "Anadolu Efes" },
        { name: "Darius Thompson", height: 193, age: 29, jersey: 11, country: "USA", position: "G", team: "Anadolu Efes" },
        { name: "Rodrigue Beaubois", height: 188, age: 37, jersey: 1, country: "France", position: "G", team: "Anadolu Efes" },
        { name: "Elijah Bryant", height: 196, age: 29, jersey: 6, country: "USA", position: "G", team: "Anadolu Efes" },
        { name: "Dogus Ozdemiroglu", height: 191, age: 28, jersey: 18, country: "Turkey", position: "G", team: "Anadolu Efes" },
        { name: "Jordan Nwora", height: 203, age: 26, jersey: 3, country: "USA", position: "F", team: "Anadolu Efes" },
        { name: "Stanley Johnson", height: 198, age: 28, jersey: 14, country: "USA", position: "F", team: "Anadolu Efes" },
        { name: "Rolands Šmits", height: 207, age: 29, jersey: 11, country: "Latvia", position: "F", team: "Anadolu Efes" },
        { name: "Derek Willis", height: 206, age: 30, jersey: 35, country: "USA", position: "F", team: "Anadolu Efes" },
        { name: "Ercan Osmani", height: 208, age: 26, jersey: 24, country: "Turkey", position: "F", team: "Anadolu Efes" },
        { name: "Vincent Poirier", height: 213, age: 31, jersey: 17, country: "France", position: "C", team: "Anadolu Efes" },
        { name: "Daniel Oturu", height: 203, age: 25, jersey: 25, country: "USA", position: "C", team: "Anadolu Efes" },
        { name: "P.J. Dozier", height: 198, age: 28, jersey: 15, country: "USA", position: "F", team: "Anadolu Efes" },
        { name: "Erkan Yilmaz", height: 197, age: 27, jersey: 33, country: "Turkey", position: "F", team: "Anadolu Efes" },

    // Monaco

        { name: "Mike James", height: 185, age: 34, jersey: 55, country: "USA", position: "G", team: "AS Monaco" },
        { name: "Nick Calathes", height: 198, age: 36, jersey: 33, country: "Greece", position: "G", team: "AS Monaco" },
        { name: "Matthew Strazel", height: 182, age: 22, jersey: 32, country: "France", position: "G", team: "AS Monaco" },
        { name: "Jordan Loyd", height: 193, age: 31, jersey: 8, country: "USA", position: "G", team: "AS Monaco" },
        { name: "Juhann Begarin", height: 196, age: 22, jersey: 0, country: "France", position: "G", team: "AS Monaco" },
        { name: "Elie Okobo", height: 191, age: 27, jersey: 0, country: "France", position: "G", team: "AS Monaco" },
        { name: "Alpha Diallo", height: 201, age: 27, jersey: 11, country: "USA", position: "F", team: "AS Monaco" },
        { name: "Terry Tarpey", height: 195, age: 30, jersey: 22, country: "USA", position: "G", team: "AS Monaco" },
        { name: "Jaron Blossomgame", height: 201, age: 31, jersey: 4, country: "USA", position: "F", team: "AS Monaco" },
        { name: "Vitto Brown", height: 203, age: 29, jersey: 30, country: "USA", position: "F", team: "AS Monaco" },
        { name: "Petr Cornelie", height: 211, age: 29, jersey: 12, country: "France", position: "F", team: "AS Monaco" },
        { name: "Daniel Theis", height: 203, age: 32, jersey: 10, country: "Germany", position: "C", team: "AS Monaco" },
        { name: "Donatas Motiejunas", height: 213, age: 34, jersey: 20, country: "Lithuania", position: "C", team: "AS Monaco" },
        { name: "Georgios Papagiannis", height: 220, age: 27, jersey: 9, country: "Greece", position: "C", team: "AS Monaco" },
        { name: "Mam Jaiteh", height: 208, age: 30, jersey: 14, country: "France", position: "C", team: "AS Monaco" },

    // Baskonia

        { name: "Trent Forrest", height: 193, age: 26, jersey: 11, country: "USA", position: "G", team: "Baskonia" },
        { name: "Kamar Baldwin", height: 185, age: 27, jersey: 44, country: "USA", position: "G", team: "Baskonia" },
        { name: "Markus Howard", height: 178, age: 25, jersey: 0, country: "USA", position: "G", team: "Baskonia" },
        { name: "Pavel Savkov", height: 200, age: 22, jersey: 6, country: "Russia", position: "G", team: "Baskonia" },
        { name: "Ognjen Jaramaz", height: 193, age: 29, jersey: 10, country: "Serbia", position: "G", team: "Baskonia" },
        { name: "Timothe Luwawu-Cabarrot", height: 198, age: 29, jersey: 9, country: "France", position: "F", team: "Baskonia" },
        { name: "Sander Raieste", height: 204, age: 25, jersey: 2, country: "Estonia", position: "F", team: "Baskonia" },
        { name: "Tadas Sedekerskis", height: 206, age: 27, jersey: 8, country: "Lithuania", position: "F", team: "Baskonia" },
        { name: "Chima Moneke", height: 198, age: 29, jersey: 95, country: "Nigeria", position: "F", team: "Baskonia" },
        { name: "Nikos Rogkavopoulos", height: 203, age: 23, jersey: 17, country: "Greece", position: "F", team: "Baskonia" },
        { name: "Ousmane Ndiaye", height: 211, age: 20, jersey: 46, country: "Senegal", position: "F", team: "Baskonia" },
        { name: "Donta Hall", height: 208, age: 27, jersey: 45, country: "USA", position: "C", team: "Baskonia" },
        { name: "Khalifa Diop", height: 211, age: 23, jersey: 18, country: "Senegal", position: "C", team: "Baskonia" },
        { name: "Luka Šamanić", height: 208, age: 25, jersey: 99, country: "Croatia", position: "F", team: "Baskonia" },

        //Armani

            { name: "Nenad Dimitrijević", height: 190, age: 27, jersey: 1, country: "North Macedonia", position: "G", team: "Emporio Armani" },
            { name: "Armoni Brooks", height: 191, age: 26, jersey: 12, country: "USA", position: "G", team: "Emporio Armani" },
            { name: "Leandro Bolmaro", height: 198, age: 24, jersey: 10, country: "Argentina", position: "G", team: "Emporio Armani" },
            { name: "Freddie Gillespie", height: 211, age: 27, jersey: 55, country: "USA", position: "C", team: "Emporio Armani" },
            { name: "Nico Mannion", height: 188, age: 23, jersey: 2, country: "Italy", position: "G", team: "Emporio Armani" },
            { name: "Fabien Causeur", height: 196, age: 37, jersey: 5, country: "France", position: "G", team: "Emporio Armani" },
            { name: "Stefano Tonut", height: 194, age: 31, jersey: 7, country: "Italy", position: "G", team: "Emporio Armani" },
            { name: "Diego Flaccadori", height: 193, age: 28, jersey: 21, country: "Italy", position: "G", team: "Emporio Armani" },
            { name: "Shavon Shields", height: 201, age: 30, jersey: 31, country: "Denmark", position: "F", team: "Emporio Armani" },
            { name: "Ousmane Diop", height: 203, age: 25, jersey: 25, country: "Senegal", position: "C", team: "Emporio Armani" },
            { name: "Nikola Mirotić", height: 208, age: 34, jersey: 33, country: "Montenegro", position: "F", team: "Emporio Armani" },
            { name: "Josh Nebo", height: 206, age: 27, jersey: 32, country: "USA", position: "C", team: "Emporio Armani" },
            { name: "Zach LeDay", height: 202, age: 30, jersey: 16, country: "USA", position: "F", team: "Emporio Armani" },
            { name: "Giampaolo Ricci", height: 202, age: 33, jersey: 17, country: "Italy", position: "F", team: "Emporio Armani" },

        // Bayern

            { name: "Carsen Edwards", height: 180, age: 26, jersey: 3, country: "USA", position: "G", team: "Bayern Munich" },
            { name: "Nick Weiler-Babb", height: 196, age: 29, jersey: 0, country: "Germany", position: "G", team: "Bayern Munich" },
            { name: "Vladimir Lučić", height: 204, age: 35, jersey: 11, country: "Serbia", position: "F", team: "Bayern Munich" },
            { name: "Niels Giffey", height: 200, age: 33, jersey: 5, country: "Germany", position: "F", team: "Bayern Munich" },
            { name: "Andreas Obst", height: 191, age: 28, jersey: 13, country: "Germany", position: "G", team: "Bayern Munich" },
            { name: "Shabazz Napier", height: 183, age: 33, jersey: 8, country: "USA", position: "G", team: "Bayern Munich" },
            { name: "Ivan Kharchenkov", height: 198, age: 18, jersey: 10, country: "Germany", position: "G", team: "Bayern Munich" },
            { name: "Devin Booker", height: 205, age: 33, jersey: 31, country: "USA", position: "C", team: "Bayern Munich" },
            { name: "Danko Branković", height: 217, age: 24, jersey: 22, country: "Croatia", position: "C", team: "Bayern Munich" },
            { name: "Onuralp Bitim", height: 198, age: 25, jersey: 17, country: "Turkey", position: "G/F", team: "Bayern Munich" },
            { name: "Elias Harris", height: 203, age: 35, jersey: 20, country: "Germany", position: "F", team: "Bayern Munich" },
            { name: "Oscar da Silva", height: 206, age: 26, jersey: 1, country: "Germany", position: "F", team: "Bayern Munich" },
            { name: "Johannes Voigtmann", height: 211, age: 32, jersey: 7, country: "Germany", position: "C", team: "Bayern Munich" },
            { name: "Kevin Yebo", height: 207, age: 28, jersey: 53, country: "Germany", position: "F", team: "Bayern Munich" },

        // Fener

            { name: "Wade Baldwin IV", height: 193, age: 28, jersey: 2, country: "USA", position: "G", team: "Fenerbahce" },
            { name: "Scottie Wilbekin", height: 188, age: 31, jersey: 3, country: "USA", position: "G", team: "Fenerbahce" },
            { name: "Marko Gudurić", height: 196, age: 29, jersey: 23, country: "Serbia", position: "G", team: "Fenerbahce" },
            { name: "Devon Hall", height: 196, age: 29, jersey: 20, country: "USA", position: "G", team: "Fenerbahce" },
            { name: "Nigel Hayes-Davis", height: 203, age: 30, jersey: 11, country: "USA", position: "F", team: "Fenerbahce" },
            { name: "Melih Mahmutoglu", height: 191, age: 34, jersey: 10, country: "Turkey", position: "G", team: "Fenerbahce" },
            { name: "Nicolo Melli", height: 205, age: 34, jersey: 4, country: "Italy", position: "F", team: "Fenerbahce" },
            { name: "Tarik Biberović", height: 201, age: 24, jersey: 13, country: "Turkey", position: "F", team: "Fenerbahce" },
            { name: "Dyshawn Pierre", height: 198, age: 31, jersey: 21, country: "Canada", position: "F", team: "Fenerbahce" },
            { name: "Bonzie Colson", height: 198, age: 28, jersey: 50, country: "USA", position: "F", team: "Fenerbahce" },
            { name: "Arturs Zagars", height: 190, age: 24, jersey: 32, country: "Latvia", position: "G", team: "Fenerbahce" },
            { name: "Khem Birch", height: 206, age: 32, jersey: 92, country: "Canada", position: "C", team: "Fenerbahce" },
            { name: "Sertac Sanli", height: 212, age: 33, jersey: 5, country: "Turkey", position: "C", team: "Fenerbahce" },
            { name: "Jilson Bango", height: 208, age: 26, jersey: 44, country: "Angola", position: "C", team: "Fenerbahce" },
            { name: "Errick McCollum", height: 188, age: 37, jersey: 0, country: "USA", position: "G", team: "Fenerbahce" },

        // Asvel
        
            { name: "Paris Lee", height: 183, age: 29, jersey: 3, country: "USA", position: "G", team: "LDLC Asvel" },
            { name: "Edwin Jackson", height: 190, age: 35, jersey: 11, country: "France", position: "G", team: "LDLC Asvel" },
            { name: "Nando De Colo", height: 196, age: 37, jersey: 12, country: "France", position: "G", team: "LDLC Asvel" },
            { name: "Charles Kahudi", height: 196, age: 38, jersey: 5, country: "France", position: "F", team: "LDLC Asvel" },
            { name: "Theo Maledon", height: 192, age: 23, jersey: 6, country: "France", position: "G", team: "LDLC Asvel" },
            { name: "Joffrey Lauvergne", height: 211, age: 33, jersey: 7, country: "France", position: "C", team: "LDLC Asvel" },
            { name: "Mbaye Ndiaye", height: 203, age: 25, jersey: 24, country: "Senegal", position: "F", team: "LDLC Asvel" },
            { name: "David Lighty", height: 195, age: 36, jersey: 23, country: "USA", position: "G", team: "LDLC Asvel" },
            { name: "Melvin Ajinca", height: 203, age: 20, jersey: 8, country: "France", position: "F", team: "LDLC Asvel" },
            { name: "Andre Roberson", height: 201, age: 33, jersey: 21, country: "USA", position: "F", team: "LDLC Asvel" },
            { name: "Yohann Sissoko", height: 188, age: 19, jersey: 30, country: "France", position: "G", team: "LDLC Asvel" },
            { name: "Tarik Black", height: 206, age: 33, jersey: 28, country: "USA", position: "C", team: "LDLC Asvel" },
            { name: "Mbiya Paul", height: 200, age: 19, jersey: 34, country: "France", position: "F", team: "LDLC Asvel" },
            { name: "Shaquille Harrison", height: 190, age: 31, jersey: 1, country: "USA", position: "G", team: "LDLC Asvel" },
            { name: "Ben Bentil", height: 206, age: 29, jersey: 50, country: "Ghana", position: "F", team: "LDLC Asvel" },
            { name: "Neal Sako", height: 211, age: 25, jersey: 13, country: "France", position: "C", team: "LDLC Asvel" },

        // Maccabi

            { name: "Jimmy Clark III", height: 191, age: 25, jersey: 2, country: "USA", position: "G", team: "Maccabi" },
            { name: "Rokas Jokubaitis", height: 193, age: 24, jersey: 31, country: "Lithuania", position: "G", team: "Maccabi" },
            { name: "Jaylen Hoard", height: 205, age: 25, jersey: 1, country: "France", position: "F", team: "Maccabi" },
            { name: "Tamir Blatt", height: 185, age: 27, jersey: 45, country: "Israel", position: "G", team: "Maccabi" },
            { name: "Rafi Menco", height: 198, age: 30, jersey: 8, country: "Israel", position: "F", team: "Maccabi" },
            { name: "John DiBartolomeo", height: 183, age: 33, jersey: 12, country: "USA", position: "G", team: "Maccabi" },
            { name: "Jasiel Rivero", height: 206, age: 31, jersey: 14, country: "Cuba", position: "C", team: "Maccabi" },
            { name: "Jake Cohen", height: 210, age: 34, jersey: 15, country: "USA/Israel", position: "C", team: "Maccabi" },
            { name: "Levi Randolph", height: 196, age: 32, jersey: 20, country: "USA", position: "G", team: "Maccabi" },
            { name: "Marial Shayok", height: 196, age: 29, jersey: 3, country: "South Sudan", position: "G", team: "Maccabi" },
            { name: "Will Rayman", height: 203, age: 27, jersey: 11, country: "USA", position: "F", team: "Maccabi" },
            { name: "Omer Mayer", height: 188, age: 18, jersey: 10, country: "Israel", position: "G", team: "Maccabi" },
            { name: "Roman Sorkin", height: 208, age: 28, jersey: 9, country: "Israel", position: "C", team: "Maccabi" },
            { name: "Trevion Williams", height: 208, age: 24, jersey: 50, country: "USA", position: "C", team: "Maccabi" },
          
          // Olympiacos

            { name: "Thomas Walkup", height: 193, age: 32, jersey: 0, country: "Greece", position: "G", team: "Olympiacos" },
            { name: "Tyler Dorsey", height: 196, age: 29, jersey: 22, country: "USA", position: "G", team: "Olympiacos" },
            { name: "Saben Lee", height: 188, age: 25, jersey: 9, country: "USA", position: "G", team: "Olympiacos" },
            { name: "Evan Fournier", height: 199, age: 32, jersey: 94, country: "France", position: "G", team: "Olympiacos" },
            { name: "Shaquille McKissic", height: 195, age: 34, jersey: 77, country: "USA", position: "F", team: "Olympiacos" },
            { name: "Kostas Papanikolaou", height: 204, age: 34, jersey: 16, country: "Greece", position: "F", team: "Olympiacos" },
            { name: "Alec Peters", height: 206, age: 29, jersey: 25, country: "USA", position: "F", team: "Olympiacos" },
            { name: "Keenan Evans", height: 191, age: 28, jersey: 12, country: "USA", position: "G", team: "Olympiacos" },
            { name: "Moustapha Fall", height: 218, age: 33, jersey: 10, country: "France", position: "C", team: "Olympiacos" },
            { name: "Nikola Milutinov", height: 213, age: 30, jersey: 33, country: "Serbia", position: "C", team: "Olympiacos" },
            { name: "Naz Mitrou-Long", height: 193, age: 31, jersey: 3, country: "Canada", position: "G", team: "Olympiacos" },
            { name: "Sasha Vezenkov", height: 206, age: 29, jersey: 14, country: "Bulgaria", position: "F", team: "Olympiacos" },
            { name: "Giannoulis Larentzakis", height: 196, age: 31, jersey: 25, country: "Greece", position: "G", team: "Olympiacos" },
            { name: "Nathan Mensah", height: 208, age: 26, jersey: 31, country: "Ghana", position: "C", team: "Olympiacos" },
            { name: "Moses Wright", height: 203, age: 26, jersey: 2, country: "USA", position: "C", team: "Olympiacos" },
            { name: "Luca Vildoza", height: 191, age: 29, jersey: 8, country: "Argentina", position: "G", team: "Olympiacos" },
        
        // Real

            { name: "Facundo Campazzo", height: 181, age: 33, jersey: 7, country: "Argentina", position: "G", team: "Real Madrid" },
            { name: "Sergio Llull", height: 190, age: 37, jersey: 23, country: "Spain", position: "G", team: "Real Madrid" },
            { name: "Andres Feliz", height: 188, age: 27, jersey: 24, country: "Dominican Republic", position: "G", team: "Real Madrid" },
            { name: "Xavier Rathan-Mayes", height: 193, age: 30, jersey: 8, country: "Canada", position: "G", team: "Real Madrid" },
            { name: "Dzanan Musa", height: 205, age: 25, jersey: 31, country: "Bosnia and Herzegovina", position: "F", team: "Real Madrid" },
            { name: "Mario Hezonja", height: 203, age: 30, jersey: 11, country: "Croatia", position: "F", team: "Real Madrid" },
            { name: "Gabriel Deck", height: 198, age: 30, jersey: 14, country: "Argentina", position: "F", team: "Real Madrid" },
            { name: "Alberto Abalde", height: 202, age: 29, jersey: 6, country: "Spain", position: "F", team: "Real Madrid" },
            { name: "Hugo Gonzalez", height: 198, age: 19, jersey: 9, country: "Spain", position: "G", team: "Real Madrid" },
            { name: "Eli Ndiaye", height: 203, age: 20, jersey: 30, country: "Spain", position: "F", team: "Real Madrid" },
            { name: "Usman Garuba", height: 203, age: 22, jersey: 16, country: "Spain", position: "F", team: "Real Madrid" },
            { name: "Walter Tavares", height: 220, age: 32, jersey: 22, country: "Cape Verde", position: "C", team: "Real Madrid" },
            { name: "Serge Ibaka", height: 208, age: 35, jersey: 18, country: "Spain", position: "C", team: "Real Madrid" },
            { name: "Bruno Fernando", height: 206, age: 26, jersey: 20, country: "Angola", position: "C", team: "Real Madrid" },

        // Virtus

            { name: "Matt Morgan", height: 188, age: 27, jersey: 30, country: "USA", position: "G", team: "Virtus" },
            { name: "Isaia Cordinier", height: 197, age: 28, jersey: 0, country: "France", position: "G", team: "Virtus" },
            { name: "Marco Belinelli", height: 196, age: 38, jersey: 3, country: "Italy", position: "G", team: "Virtus" },
            { name: "Rayjon Tucker", height: 191, age: 27, jersey: 59, country: "USA", position: "G", team: "Virtus" },
            { name: "Alessandro Pajola", height: 194, age: 25, jersey: 6, country: "Italy", position: "G", team: "Virtus" },
            { name: "Daniel Hackett", height: 199, age: 37, jersey: 23, country: "Italy", position: "G", team: "Virtus" },
            { name: "Will Clyburn", height: 201, age: 34, jersey: 8, country: "USA", position: "F", team: "Virtus" },
            { name: "Nicola Akele", height: 203, age: 26, jersey: 45, country: "Italy", position: "F", team: "Virtus" },
            { name: "Tornike Shengelia", height: 206, age: 33, jersey: 21, country: "Georgia", position: "F", team: "Virtus" },
            { name: "Andrejs Grazulis", height: 202, age: 31, jersey: 24, country: "Latvia", position: "F", team: "Virtus" },
            { name: "Achille Polonara", height: 205, age: 33, jersey: 33, country: "Italy", position: "F", team: "Virtus" },
            { name: "Ante Žizić", height: 210, age: 28, jersey: 41, country: "Croatia", position: "C", team: "Virtus" },
            { name: "Mouhamet Diouf", height: 206, age: 23, jersey: 35, country: "Italy", position: "C", team: "Virtus" },
            { name: "Justin Holiday", height: 198, age: 35, jersey: 1, country: "USA", position: "G", team: "Virtus" },

        // Zalgiris

            { name: "Sylvain Francisco", height: 188, age: 27, jersey: 3, country: "France", position: "G", team: "Zalgiris" },
            { name: "Lukas Lekavicius", height: 181, age: 30, jersey: 4, country: "Lithuania", position: "G", team: "Zalgiris" },
            { name: "Dovydas Giedraitis", height: 193, age: 24, jersey: 9, country: "Lithuania", position: "G", team: "Zalgiris" },
            { name: "Ignas Brazdeikis", height: 198, age: 26, jersey: 8, country: "Lithuania", position: "F", team: "Zalgiris" },
            { name: "Edgaras Ulanovas", height: 199, age: 33, jersey: 92, country: "Lithuania", position: "F", team: "Zalgiris" },
            { name: "Arnas Butkevicius", height: 198, age: 32, jersey: 51, country: "Lithuania", position: "F", team: "Zalgiris" },
            { name: "Alen Smailagić", height: 208, age: 24, jersey: 18, country: "Serbia", position: "F", team: "Zalgiris" },
            { name: "Deividas Sirvydis", height: 204, age: 24, jersey: 91, country: "Lithuania", position: "F", team: "Zalgiris" },
            { name: "Laurynas Birutis", height: 213, age: 27, jersey: 15, country: "Lithuania", position: "C", team: "Zalgiris" },
            { name: "Isaiah Wong", height: 191, age: 24, jersey: 2, country: "USA", position: "G", team: "Zalgiris" },
            { name: "Bryant Dunston", height: 203, age: 38, jersey: 42, country: "USA", position: "C", team: "Zalgiris" },
            { name: "Brady Manek", height: 206, age: 26, jersey: 45, country: "USA", position: "F", team: "Zalgiris" },
            { name: "Matt Mitchell", height: 198, age: 25, jersey: 21, country: "USA", position: "F", team: "Zalgiris" }
          
];

// Game state variables
let dailyTargetPlayer;
let unlimitedTargetPlayer;
let currentMode = 'daily';
let dailyGuesses = [];
let unlimitedGuesses = [];
let dailyStartTime = null;
let unlimitedStartTime = null;
let dailyTimerInterval = null;
let unlimitedTimerInterval = null;
let dailyGameCompleted = false;
let unlimitedGameCompleted = false;
let currentStreak = 0;

function getDailySeed() {
    const now = new Date();
    const utcStart = new Date(Date.UTC(now.getUTCFullYear(), 0, 0));
    const utcNow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const diff = utcNow - utcStart;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getCurrentDateString() {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).toISOString().split('T')[0];
}

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

function loadGameState() {
    // Load daily game state
    const storedDailyGuesses = localStorage.getItem('dailyGuesses');
    const storedDailyStartTime = localStorage.getItem('dailyStartTime');
    const storedDailyTarget = localStorage.getItem('dailyTargetPlayer');
    const storedDailyCompleted = localStorage.getItem('dailyGameCompleted');
    if (storedDailyGuesses) {
        dailyGuesses = JSON.parse(storedDailyGuesses);
    }
    if (storedDailyStartTime) {
        dailyStartTime = parseInt(storedDailyStartTime);
    }
    if (storedDailyTarget) {
        dailyTargetPlayer = JSON.parse(storedDailyTarget);
    } else {
        dailyTargetPlayer = selectPlayer(true);
        localStorage.setItem('dailyTargetPlayer', JSON.stringify(dailyTargetPlayer));
    }
    dailyGameCompleted = storedDailyCompleted === 'true';

    // Load unlimited game state
    const storedUnlimitedGuesses = localStorage.getItem('unlimitedGuesses');
    const storedUnlimitedStartTime = localStorage.getItem('unlimitedStartTime');
    const storedUnlimitedTarget = localStorage.getItem('unlimitedTargetPlayer');
    const storedUnlimitedCompleted = localStorage.getItem('unlimitedGameCompleted');
    if (storedUnlimitedGuesses) {
        unlimitedGuesses = JSON.parse(storedUnlimitedGuesses);
    }
    if (storedUnlimitedStartTime) {
        unlimitedStartTime = parseInt(storedUnlimitedStartTime);
    }
    if (storedUnlimitedTarget) {
        unlimitedTargetPlayer = JSON.parse(storedUnlimitedTarget);
    } else {
        unlimitedTargetPlayer = selectPlayer(false);
        localStorage.setItem('unlimitedTargetPlayer', JSON.stringify(unlimitedTargetPlayer));
    }
    unlimitedGameCompleted = storedUnlimitedCompleted === 'true';

    // Load current mode
    const storedMode = localStorage.getItem('currentMode');
    if (storedMode) {
        currentMode = storedMode;
    }

    // Load streak
    const storedStreak = localStorage.getItem('currentStreak');
    if (storedStreak) {
        currentStreak = parseInt(storedStreak);
    }
    updateStreakDisplay();
}

function saveGameState() {
    localStorage.setItem('dailyGuesses', JSON.stringify(dailyGuesses));
    localStorage.setItem('unlimitedGuesses', JSON.stringify(unlimitedGuesses));
    localStorage.setItem('dailyStartTime', dailyStartTime ? dailyStartTime.toString() : '');
    localStorage.setItem('unlimitedStartTime', unlimitedStartTime ? unlimitedStartTime.toString() : '');
    localStorage.setItem('dailyGameCompleted', dailyGameCompleted.toString());
    localStorage.setItem('unlimitedGameCompleted', unlimitedGameCompleted.toString());
    localStorage.setItem('currentMode', currentMode);
    localStorage.setItem('currentStreak', currentStreak.toString());
}

function updateStreakDisplay() {
    const streakElements = document.querySelectorAll('#current-streak');
    streakElements.forEach(element => {
        element.textContent = currentStreak;
    });
}

function updateStreak(won) {
    const lastPlayedDate = localStorage.getItem('dailyLastPlayedDate');
    const currentDate = getCurrentDateString();

    // Check if the last played date is not today or the previous day
    if (lastPlayedDate && lastPlayedDate !== currentDate && lastPlayedDate !== new Date(Date.now() - 86400000).toISOString().split('T')[0]) {
        currentStreak = 0;
    }

    if (won) {
        currentStreak += 1;
    } else {
        currentStreak = 0;
    }

    localStorage.setItem('currentStreak', currentStreak.toString());
    updateStreakDisplay();
}

function resetTimer(mode) {
    stopTimer(mode);
    if (mode === 'daily') {
        dailyStartTime = null;
        localStorage.removeItem('dailyStartTime');
        document.getElementById("dailyTimer").textContent = "00:00";
    } else {
        unlimitedStartTime = null;
        localStorage.removeItem('unlimitedStartTime');
        document.getElementById("unlimitedTimer").textContent = "00:00";
    }
}

function startTimer(mode) {
    stopTimer(mode);

    console.log(`Starting ${mode} timer...`);
    if (mode === 'daily') {
        if (!dailyStartTime) {
            dailyStartTime = Date.now();
            localStorage.setItem('dailyStartTime', dailyStartTime.toString());
        }
        dailyTimerInterval = setInterval(() => {
            updateTimer(mode);
        }, 1000);
    } else {
        if (!unlimitedStartTime) {
            unlimitedStartTime = Date.now();
            localStorage.setItem('unlimitedStartTime', unlimitedStartTime.toString());
        }
        unlimitedTimerInterval = setInterval(() => {
            updateTimer(mode);
        }, 1000);
    }
}

function updateTimer(mode) {
    const startTime = mode === 'daily' ? dailyStartTime : unlimitedStartTime;
    const timerElement = mode === 'daily' ? document.getElementById("dailyTimer") : document.getElementById("unlimitedTimer");
    if (!startTime || !timerElement) {
        console.warn(`No start time or timer element for ${mode} timer`);
        return;
    }
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const timerDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerElement.textContent = timerDisplay;
}

function stopTimer(mode) {
    if (mode === 'daily') {
        if (dailyTimerInterval) {
            clearInterval(dailyTimerInterval);
            dailyTimerInterval = null;
        }
    } else {
        if (unlimitedTimerInterval) {
            clearInterval(unlimitedTimerInterval);
            unlimitedTimerInterval = null;
        }
    }
}

function updateTimerDisplay() {
    const dailyTimer = document.getElementById("dailyTimer");
    const unlimitedTimer = document.getElementById("unlimitedTimer");
    if (dailyTimer && unlimitedTimer) {
        dailyTimer.classList.toggle("hidden", currentMode !== 'daily');
        unlimitedTimer.classList.toggle("hidden", currentMode !== 'unlimited');
    }
}

function hasPlayedToday() {
    const lastPlayedDate = localStorage.getItem('dailyLastPlayedDate');
    const currentDate = getCurrentDateString();
    return lastPlayedDate === currentDate;
}

function markGameAsPlayed() {
    localStorage.setItem('dailyLastPlayedDate', getCurrentDateString());
    dailyGameCompleted = true;
    saveGameState();
}

function resetUnlimitedGame() {
    unlimitedTargetPlayer = selectPlayer(false);
    unlimitedGuesses = [];
    unlimitedGameCompleted = false;
    resetTimer('unlimited');

    // Clear unlimited mode storage
    localStorage.removeItem('unlimitedGuesses');
    localStorage.removeItem('unlimitedStartTime');
    localStorage.removeItem('unlimitedGameCompleted');
    localStorage.setItem('unlimitedTargetPlayer', JSON.stringify(unlimitedTargetPlayer));

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
    document.getElementById("unlimitedTimer").textContent = "00:00";

    const guessContainer = document.querySelector(".guess-container");
    guessContainer.classList.remove("reset-animate");
    void guessContainer.offsetWidth;
    guessContainer.classList.add("reset-animate");

    startTimer('unlimited');
    updateTimerDisplay();
    saveGameState();
}

function renderGuesses() {
    const guesses = currentMode === 'daily' ? dailyGuesses : unlimitedGuesses;
    const targetPlayer = currentMode === 'daily' ? dailyTargetPlayer : unlimitedTargetPlayer;
    const guessList = document.getElementById("guessList");

    // Reset guess list
    guessList.innerHTML = `
        <li class="empty-row"><span class="guess-number">1</span></li>
        <li class="empty-row"><span class="guess-number">2</span></li>
        <li class="empty-row"><span class="guess-number">3</span></li>
        <li class="empty-row"><span class="guess-number">4</span></li>
        <li class="empty-row"><span class="guess-number">5</span></li>
        <li class="empty-row"><span class="guess-number">6</span></li>
        <li class="empty-row"><span class="guess-number">7</span></li>
    `;

    // Render existing guesses
    const emptyRows = guessList.querySelectorAll("li.empty-row");
    guesses.forEach((guessedPlayer, index) => {
        if (index < emptyRows.length) {
            const row = emptyRows[index];
            row.classList.remove("empty-row");
            row.style.opacity = "1";
            row.innerHTML = `<strong>${guessedPlayer.name}</strong>`;

            row.append(createStatElement(guessedPlayer.team, targetPlayer.team));
            row.append(createStatElement(guessedPlayer.height, targetPlayer.height, true));
            row.append(createStatElement(guessedPlayer.age, targetPlayer.age, true));
            row.append(createStatElement(guessedPlayer.jersey, targetPlayer.jersey, true));
            row.append(createStatElement(guessedPlayer.country, targetPlayer.country));
            row.append(createStatElement(guessedPlayer.position, targetPlayer.position));

            if (guessedPlayer.name === targetPlayer.name) {
                row.querySelectorAll('span').forEach(span => span.classList.add('correct'));
            }
        }
    });
}

function initializeGame() {
    loadGameState();

    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById("dailyChallenge").textContent = currentMode === 'daily' ?
        `Daily EuroGuess - ${now.toLocaleDateString('en-US', options)}` :
        "Unlimited EuroGuess";

    // Mode toggle
    document.getElementById("dailyModeButton").addEventListener("click", () => switchMode('daily'));
    document.getElementById("unlimitedModeButton").addEventListener("click", () => switchMode('unlimited'));

    // Set initial mode UI
    document.getElementById("dailyModeButton").classList.toggle("active", currentMode === 'daily');
    document.getElementById("unlimitedModeButton").classList.toggle("active", currentMode === 'unlimited');

    // Render guesses for the current mode
    renderGuesses();
    updateTimerDisplay();

    // Check game completion or daily play status
    if (currentMode === 'daily' && (hasPlayedToday() || dailyGameCompleted)) {
        showAlreadyPlayedMessage();
        disableInputAndButton();
        stopTimer('daily');
    } else if (currentMode === 'unlimited' && unlimitedGameCompleted) {
        document.getElementById("revealUnlimitedPlayer").textContent = unlimitedTargetPlayer.name;
        document.getElementById("unlimitedGameOverModal").style.display = "flex";
        disableInputAndButton();
        stopTimer('unlimited');
    } else {
        startTimer(currentMode);
    }

    document.getElementById("tryAgainButton").addEventListener("click", () => {
        document.getElementById("unlimitedGameOverModal").style.display = "none";
        resetUnlimitedGame();
        renderGuesses();
    });

    // Add visibilitychange event listener to reset timers when page is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            resetTimer('daily');
            resetTimer('unlimited');
        } else if (document.visibilityState === 'visible') {
            if (!dailyGameCompleted && currentMode === 'daily') {
                startTimer('daily');
            }
            if (!unlimitedGameCompleted && currentMode === 'unlimited') {
                startTimer('unlimited');
            }
            updateTimerDisplay();
        }
    });
}

function switchMode(mode) {
    if (mode === currentMode) return;
    currentMode = mode;
    localStorage.setItem('currentMode', currentMode);

    const modeToggle = document.querySelector(".mode-toggle");
    modeToggle.classList.remove("animate");
    void modeToggle.offsetWidth;
    modeToggle.classList.add("animate");

    stopTimer('daily');
    stopTimer('unlimited');

    document.getElementById("dailyModeButton").classList.toggle("active", mode === 'daily');
    document.getElementById("unlimitedModeButton").classList.toggle("active", mode === 'unlimited');
    document.getElementById("dailyChallenge").textContent = mode === 'daily' ?
        `Daily EuroGuess - ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` :
        "Unlimited EuroGuess";

    renderGuesses();
    updateTimerDisplay();

    document.getElementById("playerInput").value = "";
    document.getElementById("playerInput").disabled = false;
    const button = document.querySelector("button");
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";

    const alreadyPlayedMessage = document.getElementById("alreadyPlayedMessage");
    if (alreadyPlayedMessage) {
        alreadyPlayedMessage.style.display = "none";
    }

    if (mode === 'daily' && (hasPlayedToday() || dailyGameCompleted)) {
        showAlreadyPlayedMessage();
        disableInputAndButton();
        stopTimer('daily');
    } else if (mode === 'unlimited' && unlimitedGameCompleted) {
        document.getElementById("revealUnlimitedPlayer").textContent = unlimitedTargetPlayer.name;
        document.getElementById("unlimitedGameOverModal").style.display = "flex";
        disableInputAndButton();
        stopTimer('unlimited');
    } else {
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

        markGameAsPlayed();
    } else {
        successDiv.innerHTML = `Congrats! You got it!`;
        document.body.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
        unlimitedGameCompleted = true;
        saveGameState();
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

function simplifyPosition(position) {
    const positionMap = {
        'G': 'G',
        'F': 'F',
        'C': 'C'
    };
    return positionMap[position] || position;
}

function createStatElement(value, correctValue, isNumeric = false) {
    const isMobile = window.innerWidth <= 480;
    let displayValue = value;

    if (!isNumeric && typeof value === "string" && ["PG", "SG", "SF", "PF", "C"].includes(value)) {
        displayValue = simplifyPosition(value);
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
    } else if (displayValue === (isMobile ? simplifyPosition(correctValue) : correctValue)) {
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
    unlimitedGameCompleted = true;
    saveGameState();
}

function checkGuess() {
    if (currentMode === 'daily' && (hasPlayedToday() || dailyGameCompleted)) {
        showAlreadyPlayedMessage();
        disableInputAndButton();
        stopTimer('daily');
        return;
    }

    if (currentMode === 'unlimited' && unlimitedGameCompleted) {
        document.getElementById("revealUnlimitedPlayer").textContent = unlimitedTargetPlayer.name;
        document.getElementById("unlimitedGameOverModal").style.display = "flex";
        disableInputAndButton();
        stopTimer('unlimited');
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
        if (currentMode === 'daily') {
            showGameOver();
            markGameAsPlayed();
            updateStats(false, 0);
            updateStreak(false);
            disableInputAndButton();
        } else {
            showUnlimitedGameOver();
            updateStats(false, 0);
        }
        saveGameState();
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
    saveGameState();

    if (guessedPlayer.name === targetPlayer.name) {
        firstEmptyRow.querySelectorAll('span').forEach(span => span.classList.add('correct'));
        stopTimer(currentMode);
        showSuccessMessage();
        const guessCount = guesses.length;
        updateStats(true, guessCount);
        if (currentMode === 'daily') {
            updateStreak(true);
            disableInputAndButton();
            dailyGameCompleted = true;
        } else {
            const guessContainer = document.querySelector(".guess-container");
            guessContainer.classList.add("new-player-waiting");
            unlimitedGameCompleted = true;
            setTimeout(() => {
                resetUnlimitedGame();
                guessContainer.classList.remove("new-player-waiting");
                renderGuesses();
            }, 2000);
        }
        saveGameState();
    } else if (emptyRows.length === 1) {
        if (currentMode === 'daily') {
            showGameOver();
            markGameAsPlayed();
            updateStats(false, 0);
            updateStreak(false);
            disableInputAndButton();
            dailyGameCompleted = true;
        } else {
            showUnlimitedGameOver();
            updateStats(false, 0);
        }
        saveGameState();
    }
}

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

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
});

function showGameOver() {
    document.getElementById("revealPlayer").textContent = dailyTargetPlayer.name;
    gameOverModal.style.display = "flex";
    stopTimer('daily');
    dailyGameCompleted = true;
    saveGameState();
}