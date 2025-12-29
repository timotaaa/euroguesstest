const players = [
//Crvena zvezda
{ name: "Codi Miller-McIntyre", height: 193, age: 31, jersey: 0,  country: "USA", position: "G",team: "Crvena zvezda" },
{ name: "Uroš Plavšić", height: 217, age: 27, jersey: 1,  country: "Serbia", position: "C",  team: "Crvena zvezda" },
{ name: "Stefan Miljenović", height: 190, age: 24, jersey: 2,  country: "Serbia", position: "G", team: "Crvena zvezda" },
{ name: "Isaiah Canaan", height: 183, age: 34, jersey: 3,  country: "USA", position: "G",  team: "Crvena zvezda" },
{ name: "Devonte' Graham", height: 185, age: 30, jersey: 4,  country: "USA", position: "G", team: "Crvena zvezda" },
{ name: "Jared Butler", height: 191, age: 25, jersey: 6, country: "USA", position: "G", team: "Crvena zvezda" },
{ name: "Dejan Davidovac", height: 203, age: 30, jersey: 7,  country: "Serbia", position: "F", team: "Crvena zvezda" },
{ name: "Tyson Carter", height: 193, age: 28, jersey: 11, country: "USA", position: "G", team: "Crvena zvezda" },
{ name: "Nikola Kalinić", height: 202, age: 34, jersey: 12, country: "Serbia", position: "F", team: "Crvena zvezda" },
{ name: "Ognjen Dobrić", height: 198, age: 31, jersey: 13, country: "Serbia", position: "F", team: "Crvena zvezda" },
{ name: "Jasiel Rivero", height: 206, age: 32, jersey: 14, country: "Cuba", position: "C", team: "Crvena zvezda" },
{ name: "Ebuka Izundu", height: 208, age: 29, jersey: 15, country: "Nigeria", position: "C", team: "Crvena zvezda" },
{ name: "Donatas Motiejunas", height: 213, age: 35, jersey: 20, country: "Lithuania", position: "C", team: "Crvena zvezda" },
{ name: "Jordan Nwora", height: 203, age: 27, jersey: 33, country: "USA", position: "F", team: "Crvena zvezda" },
{ name: "Semi Ojeleye", height: 201, age: 31, jersey: 37, country: "Nigeria", position: "F", team: "Crvena zvezda" },
{ name: "Chima Moneke", height: 198, age: 30, jersey: 95, country: "Nigeria", position: "F", team: "Crvena zvezda" },
{ name: "Yago dos Santos", height: 175, age: 26, jersey: 99, country: "Brazil", position: "G", team: "Crvena zvezda" },
//Crvena zvezda

//Partizan
{ name: "Carlik Jones", height: 183, age: 28, jersey: 1,  country: "USA", position: "G", team: "Partizan" },
{ name: "Shake Milton", height: 196, age: 29, jersey: 2,  country: "USA", position: "G", team: "Partizan" },
{ name: "Miikka Muurinen", height: 208, age: 18, jersey: 3,  country: "Finland", position: "F", team: "Partizan" },
{ name: "Duane Washington Jr.", height: 188, age: 25, jersey: 4,  country: "USA", position: "G", team: "Partizan" },
{ name: "Dylan Osetkowski", height: 206, age: 29, jersey: 5,  country: "USA", position: "F", team: "Partizan" },
{ name: "Mario Nakić", height: 202, age: 24, jersey: 7,  country: "Serbia", position: "F", team: "Partizan" },
{ name: "Mitar Bošnjaković", height: 196, age: 19, jersey: 8,  country: "Serbia", position: "G", team: "Partizan" },
{ name: "Vanja Marinković", height: 199, age: 28, jersey: 9,  country: "Serbia", position: "F", team: "Partizan" },
{ name: "Uroš Mijailović", height: 197, age: 17, jersey: 10, country: "Serbia", position: "G", team: "Partizan" },
{ name: "Aleksej Pokuševski", height: 214, age: 23, jersey: 11, country: "Serbia", position: "F", team: "Partizan" },
{ name: "Sterling Brown", height: 195, age: 31, jersey: 12, country: "USA", position: "G", team: "Partizan" },
{ name: "Cameron Payne", height: 191, age: 31, jersey: 15, country: "USA", position: "G", team: "Partizan" },
{ name: "Isaac Bonga", height: 203, age: 26, jersey: 17, country: "Germany", position: "F", team: "Partizan" },
{ name: "Arijan Lakić", height: 199, age: 25, jersey: 19, country: "Serbia", position: "G", team: "Partizan" },
{ name: "Jabari Parker", height: 203, age: 30, jersey: 22, country: "USA", position: "F", team: "Partizan" },
{ name: "Bruno Fernando", height: 208, age: 27, jersey: 24, country: "Angola", position: "C", team: "Partizan" },
{ name: "Nick Calathes", height: 196, age: 36, jersey: 33, country: "Greece", position: "G", team: "Partizan" },
{ name: "Tyrique Jones", height: 203, age: 28, jersey: 88, country: "USA", position: "C", team: "Partizan" },
//Partizan

//Paris Basketball
{ name: "Nadir Hifi", height: 185, age: 23, jersey: 2, country: "France", position: "G", team: "Paris Basketball" },
{ name: "Leopold Cavaliere", height: 202, age: 29, jersey: 4, country: "France", position: "F", team: "Paris Basketball" },
{ name: "Justin Robinson", height: 185, age: 28, jersey: 5, country: "USA", position: "G", team: "Paris Basketball" },
{ name: "Sebastian Herrera", height: 193, age: 28, jersey: 7, country: "Chile", position: "G", team: "Paris Basketball" },
{ name: "Jared Rhoden", height: 198, age: 26, jersey: 8, country: "USA", position: "G", team: "Paris Basketball" },
{ name: "Lamar Stevens", height: 198, age: 28, jersey: 9, country: "USA", position: "F", team: "Paris Basketball" },
{ name: "Joel Ayayi", height: 196, age: 25, jersey: 11, country: "France", position: "G", team: "Paris Basketball" },
{ name: "Allan Dokossi", height: 203, age: 26, jersey: 13, country: "France", position: "C", team: "Paris Basketball" },
{ name: "Mouhamed Faye", height: 209, age: 20, jersey: 15, country: "Senegal", position: "C", team: "Paris Basketball" },
{ name: "Enzo Shahrvin", height: 201, age: 22, jersey: 18, country: "France", position: "C", team: "Paris Basketball" },
{ name: "Jeremy Morgan", height: 199, age: 30, jersey: 20, country: "USA", position: "F", team: "Paris Basketball" },
{ name: "Ismael Bako", height: 208, age: 30, jersey: 21, country: "Belgium", position: "G", team: "Paris Basketball" },
{ name: "Amath M'Baye", height: 206, age: 36, jersey: 22, country: "France", position: "G", team: "Paris Basketball" },
{ name: "Yakuba Ouattara", height: 192, age: 33, jersey: 24, country: "France", position: "G", team: "Paris Basketball" },
{ name: "Daulton Hommes", height: 203, age: 29, jersey: 34, country: "USA", position: "F", team: "Paris Basketball" },
{ name: "Derek Willis", height: 205, age: 30, jersey: 35, country: "USA", position: "F", team: "Paris Basketball" }, 
//Paris Basketball

//Barcelona
{ name: "Kevin Punter", height: 193, age: 32, jersey: 0, country: "USA", position: "G", team: "FC Barcelona" },
{ name: "Juani Marcos", height: 190, age: 25, jersey: 2, country: "Italy", position: "G", team: "FC Barcelona" },
{ name: "Myles Cale", height: 198, age: 26, jersey: 3, country: "USA", position: "F", team: "FC Barcelona" },
{ name: "Miles Norris", height: 201, age: 25, jersey: 5, country: "USA", position: "F", team: "FC Barcelona" },
{ name: "Jan Vesely", height: 213, age: 35, jersey: 6, country: "Czech Republic", position: "C", team: "FC Barcelona" },
{ name: "Dario Brizuela", height: 188, age: 30, jersey: 8, country: "Spain", position: "G", team: "FC Barcelona" },
{ name: "Tomaš Satoransky", height: 201, age: 34, jersey: 13, country: "Czech Republic", position: "G", team: "FC Barcelona" },
{ name: "Willy Hernangómez", height: 210, age: 31, jersey: 14, country: "Spain", position: "C", team: "FC Barcelona" },
{ name: "Juan Nunez", height: 193, age: 21, jersey: 17, country: "Spain", position: "G", team: "FC Barcelona" },
{ name: "Youssoupha Fall", height: 221, age: 30, jersey: 19, country: "France", position: "C", team: "FC Barcelona" },
{ name: "Nicolas Laprovittola", height: 190, age: 35, jersey: 20, country: "Italy", position: "G", team: "FC Barcelona" },
{ name: "Will Clyburn", height: 201, age: 35, jersey: 21, country: "USA", position: "F", team: "FC Barcelona" },
{ name: "Tornike Shengelia", height: 206, age: 34, jersey: 23, country: "Georgia", position: "C", team: "FC Barcelona" },
{ name: "Sayon Keita", height: 214, age: 17, jersey: 41, country: "Mali", position: "C", team: "FC Barcelona" },
{ name: "Joel Parra", height: 202, age: 25, jersey: 44, country: "Spain", position: "F", team: "FC Barcelona" },
//Barcelona

//Panathinaikos
{ name: "TJ Shorts", height: 175, age: 28, jersey: 0, country: "USA", position: "G", team: "Panathinaikos" },
{ name: "Panagiotis Kalaitzakis", height: 200, age: 26, jersey: 5, country: "Greece", position: "G", team: "Panathinaikos" },
{ name: "Cedi Osman", height: 204, age: 30, jersey: 6, country: "Turkey", position: "F", team: "Panathinaikos" },
{ name: "Richaun Holmes", height: 206, age: 32, jersey: 8, country: "USA", position: "C", team: "Panathinaikos" },
{ name: "Kostas Sloukas", height: 190, age: 35, jersey: 10, country: "Greece", position: "G", team: "Panathinaikos" },
{ name: "Nikolaos Rogkavopoulos", height: 201, age: 24, jersey: 17, country: "Greece", position: "F", team: "Panathinaikos" },
{ name: "Alexandros Samontourov", height: 210, age: 20, jersey: 20, country: "Greece", position: "F", team: "Panathinaikos" },
{ name: "Jerian Grant", height: 196, age: 33, jersey: 22, country: "USA", position: "G", team: "Panathinaikos" },
{ name: "Ioannis Kouzeloglou", height: 204, age: 30, jersey: 24, country: "Greece", position: "C", team: "Panathinaikos" },
{ name: "Kendrick Nunn", height: 188, age: 30, jersey: 25, country: "USA", position: "G", team: "Panathinaikos" },
{ name: "Mathias Lessort", height: 206, age: 30, jersey: 26, country: "France", position: "C", team: "Panathinaikos" },
{ name: "Vassilis Toliopoulos", height: 187, age: 29, jersey: 27, country: "Greece", position: "G", team: "Panathinaikos" },
{ name: "Kenneth Faried", height: 203, age: 36, jersey: 35, country: "USA", position: "C", team: "Panathinaikos" },
{ name: "Marius Grigonis", height: 198, age: 31, jersey: 40, country: "Lithuania", position: "G", team: "Panathinaikos" },
{ name: "Juancho Hernangomez", height: 206, age: 30, jersey: 41, country: "Spain", position: "F", team: "Panathinaikos" },
{ name: "Konstantinos Mitoglou", height: 210, age: 29, jersey: 44, country: "Greece", position: "F", team: "Panathinaikos" },
{ name: "Omer Yurtseven", height: 213, age: 27, jersey: 77, country: "Turkey", position: "C", team: "Panathinaikos" },
//Panathinaikos
      
//Anadolu Efes
{ name: "Shane Larkin", height: 182, age: 33, jersey: 0, country: "USA", position: "G", team: "Anadolu Efes" },
{ name: "Rodrigue Beaubois", height: 188, age: 37, jersey: 1, country: "France", position: "G", team: "Anadolu Efes" },
{ name: "Sehmus Hazer", height: 195, age: 26, jersey: 2, country: "Turkey", position: "G", team: "Anadolu Efes" },
{ name: "Jordan Loyd", height: 194, age: 32, jersey: 3, country: "USA", position: "G", team: "Anadolu Efes" },
{ name: "Nick Weiler-Babb", height: 194, age: 30, jersey: 8, country: "Germany", position: "G", team: "Anadolu Efes" },
{ name: "Georgios Papagiannis", height: 220, age: 28, jersey: 9, country: "Greece", position: "C", team: "Anadolu Efes" },
{ name: "Isaia Cordinier", height: 196, age: 29, jersey: 10, country: "France", position: "G", team: "Anadolu Efes" },
{ name: "Rolands Šmits", height: 208, age: 30, jersey: 11, country: "Latvia", position: "F", team: "Anadolu Efes" },
{ name: "Brice Dessert", height: 211, age: 22, jersey: 13, country: "France", position: "C", team: "Anadolu Efes" },
{ name: "P.J. Dozier", height: 198, age: 29, jersey: 15, country: "USA", position: "G", team: "Anadolu Efes" },
{ name: "Vincent Poirier", height: 213, age: 32, jersey: 17, country: "France", position: "C", team: "Anadolu Efes" },
{ name: "Cole Swider", height: 206, age: 26, jersey: 21, country: "USA", position: "F", team: "Anadolu Efes" },
{ name: "David Mutaf", height: 198, age: 23, jersey: 23, country: "Turkey", position: "G", team: "Anadolu Efes" },
{ name: "Ercan Osmani", height: 210, age: 27, jersey: 24, country: "Turkey", position: "F", team: "Anadolu Efes" },
{ name: "Erkan Yilmaz", height: 197, age: 28, jersey: 33, country: "Turkey", position: "F", team: "Anadolu Efes" },
{ name: "Kai Jones", height: 211, age: 24, jersey: 88, country: "USA", position: "C", team: "Anadolu Efes" },
//Anadolu Efes

//AS Monaco
{ name: "Elie Okobo",height: 191, age: 28, jersey: 0, country: "France", position: "G", team: "AS Monaco" },
{ name: "Jaron Blossomgame", height: 200, age: 32, jersey: 4, country: "USA", position: "F", team: "AS Monaco" },
{ name: "Yoan Makoundou", height: 207, age: 25, jersey: 5, country: "France", position: "F", team: "AS Monaco" },
{ name: "David Michineau", height: 194, age: 31, jersey: 6, country: "France", position: "G", team: "AS Monaco" },
{ name: "Daniel Theis", height: 204, age: 33, jersey: 10, country: "Germany", position: "C", team: "AS Monaco" },
{ name: "Alpha Diallo", height: 201, age: 28, jersey: 11, country: "USA", position: "F", team: "AS Monaco" },
{ name: "Kevarrius Hayes", height: 206, age: 28, jersey: 13, country: "USA", position: "C", team: "AS Monaco" },
{ name: "Terry Tarpey", height: 196, age: 31, jersey: 22, country: "USA", position: "G", team: "AS Monaco" },
{ name: "Juhann Begarin", height: 196, age: 23, jersey: 23, country: "France", position: "F", team: "AS Monaco" },
{ name: "Nemanja Nedović", height: 192, age: 34, jersey: 26, country: "Serbia", position: "G", team: "AS Monaco" },
{ name: "Matthew Strazel", height: 184, age: 23, jersey: 32, country: "France", position: "G", team: "AS Monaco" },
{ name: "Nikola Mirotić", height: 208, age: 34, jersey: 33, country: "Spain", position: "C", team: "AS Monaco" },
{ name: "Mike James", height: 185, age: 35, jersey: 55, country: "USA", position: "G", team: "AS Monaco" },
//AS Monaco

//Baskonia Vitoria-Gasteiz
{ name: "Markus Howard", height: 178, age: 26, jersey: 0, country: "USA", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Mamadi Diakite", height: 210, age: 28, jersey: 1, country: "Guinea", position: "C", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Kobi Simmons", height: 192, age: 28, jersey: 2, country: "USA", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Markquis Nowell", height: 170, age: 26, jersey: 3, country: "USA", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Rafa Villar", height: 191, age: 21, jersey: 4, country: "Spain", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Eugene Omoruyi", height: 198, age: 28, jersey: 5, country: "Canada", position: "C", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Rodions Kurucs", height: 206, age: 27, jersey: 7, country: "Latvia", position: "F", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Tadas Sedekerskis", height: 206, age: 27, jersey: 8, country: "Lithuania", position: "F", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Timothe Luwawu-Cabarrot", height: 201, age: 30, jersey: 9, country: "France", position: "F", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Matteo Spagnolo", height: 193, age: 22, jersey: 10, country: "Italy", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Trent Forrest", height: 193, age: 27, jersey: 11, country: "USA", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Gytis Radzevicius", height: 198, age: 30, jersey: 17, country: "Lithuania", position: "G", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Khalifa Diop", height: 208, age: 23, jersey: 18, country: "Senegal", position: "C", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Clement Frisch", height: 201, age: 23, jersey: 25, country: "France", position: "F", team: "Baskonia Vitoria-Gasteiz" },
{ name: "Stefan Joksimović", height: 194, age: 17, jersey: 77, country: "Slovenia", position: "F", team: "Baskonia Vitoria-Gasteiz" },
//Baskonia Vitoria-Gasteiz

//Emporio Armani Milan
{ name: "Nico Mannion", height: 190, age: 24, jersey: 1, country: "Italy", position: "G", team: "Emporio Armani Milan" },
{ name: "Lorenzo Brown", height: 196, age: 35, jersey: 2, country: "USA", position: "G", team: "Emporio Armani Milan" },
{ name: "Quinn Ellis", height: 195, age: 22, jersey: 3, country: "United Kingdom", position: "G", team: "Emporio Armani Milan" },
{ name: "Devin Booker", height: 205, age: 34, jersey: 6, country: "USA", position: "C", team: "Emporio Armani Milan" },
{ name: "Stefano Tonut", height: 194, age: 32, jersey: 7, country: "Italy", position: "G", team: "Emporio Armani Milan" },
{ name: "Leandro Bolmaro", height: 198, age: 25, jersey: 10, country: "Argentina", position: "G", team: "Emporio Armani Milan" },
{ name: "Armoni Brooks", height: 194, age: 27, jersey: 12, country: "USA", position: "G", team: "Emporio Armani Milan" },
{ name: "Zach LeDay", height: 202, age: 31, jersey: 16, country: "USA", position: "F", team: "Emporio Armani Milan" },
{ name: "Giampaolo Ricci", height: 202, age: 34, jersey: 17, country: "Italy", position: "F", team: "Emporio Armani Milan" },
{ name: "Marko Gudurić", height: 196, age: 30, jersey: 23, country: "Serbia", position: "G", team: "Emporio Armani Milan" },
{ name: "Ousmane Diop", height: 204, age: 25, jersey: 25, country: "Senegal", position: "C", team: "Emporio Armani Milan" },
{ name: "Shavon Shields", height: 201, age: 31, jersey: 31, country: "Denmark", position: "F", team: "Emporio Armani Milan" },
{ name: "Josh Nebo", height: 206, age: 28, jersey: 32, country: "USA", position: "C", team: "Emporio Armani Milan" },
{ name: "Bryant Dunston", height: 203, age: 39, jersey: 42, country: "USA", position: "C", team: "Emporio Armani Milan" },
{ name: "Nathan Sestina", height: 203, age: 28, jersey: 77, country: "USA", position: "F", team: "Emporio Armani Milan" },
//Emporio Armani Milan

//Bayern Munich
{ name: "Oscar da Silva", height: 205, age: 27, jersey: 1, country: "Germany", position: "F", team: "Bayern Munich" },
{ name: "Xavier Rathan-Meyes", height: 191, age: 31, jersey: 4, country: "USA", position: "G", team: "Bayern Munich" },
{ name: "Niels Giffey", height: 200, age: 34, jersey: 5, country: "Germany", position: "F", team: "Bayern Munich" },
{ name: "Johannes Voigtmann", height: 211, age: 33, jersey: 7, country: "Germany", position: "C", team: "Bayern Munich" },
{ name: "Leon Kratzer", height: 212, age: 28, jersey: 7, country: "Germany", position: "C", team: "Bayern Munich" },
{ name: "Justinian Jessup", height: 198, age: 27, jersey: 10, country: "USA", position: "G", team: "Bayern Munich" },
{ name: "Andreas Obst", height: 191, age: 29, jersey: 13, country: "Germany", position: "G", team: "Bayern Munich" },
{ name: "Vladimir Lučić", height: 204, age: 36, jersey: 11, country: "Serbia", position: "F", team: "Bayern Munich" },
{ name: "Stefan Jović", height: 196, age: 35, jersey: 16, country: "Serbia", position: "G", team: "Bayern Munich" },
{ name: "Elias Harrias", height: 203, age: 36, jersey: 8, country: "Germany", position: "C", team: "Bayern Munich" },
{ name: "Justus Hollatz", height: 195, age: 24, jersey: 21, country: "Germany", position: "G", team: "Bayern Munich" },
{ name: "Isiaha Mike", height: 200, age: 28, jersey: 22, country: "USA", position: "F", team: "Bayern Munich" },
{ name: "Spencer Dinwiddie", height: 196, age: 32, jersey: 26, country: "USA", position: "G", team: "Bayern Munich" },
{ name: "Wenyen Gabriel", height: 206, age: 28, jersey: 32, country: "USA", position: "C", team: "Bayern Munich" },
{ name: "David McCormack", height: 208, age: 26, jersey: 33, country: "USA", position: "C", team: "Bayern Munich" },
{ name: "Kamar Baldwin", height: 185, age: 28, jersey: 44, country: "USA", position: "G", team: "Bayern Munich" },
//Bayern Munich

//Fenerbahce Beko Istanbul
{ name: "Armando Bacot Jr.", height: 208, age: 25, jersey: 0, country: "USA", position: "C", team: "Fenerbahce Beko Istanbul" },
{ name: "Metecan Birsen", height: 205, age: 30, jersey: 1, country: "Ireland", position: "F", team: "Fenerbahce Beko Istanbul" },
{ name: "Wade Baldwin IV", height: 193, age: 29, jersey: 2, country: "USA", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Scottie Wilbekin", height: 188, age: 32, jersey: 3, country: "Turkey", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Nicolo Melli", height: 205, age: 34, jersey: 4, country: "Italy", position: "F", team: "Fenerbahce Beko Istanbul" },
{ name: "Talen Horton-Tucker", height: 193, age: 25, jersey: 8, country: "USA", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Melih Mahmutoglu", height: 191, age: 35, jersey: 10, country: "Turkey", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Brandon Boston Jr.", height: 198, age: 24, jersey: 11, country: "USA", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Tarik Biberović", height: 201, age: 24, jersey: 13, country: "Turkey", position: "F", team: "Fenerbahce Beko Istanbul" },
{ name: "Onuralp Bitim", height: 196, age: 26, jersey: 17, country: "Turkey", position: "F", team: "Fenerbahce Beko Istanbul" },
{ name: "Mikael Jantunen", height: 204, age: 25, jersey: 18, country: "Finland", position: "F", team: "Fenerbahce Beko Istanbul" },
{ name: "Devon Hall", height: 196, age: 30, jersey: 20, country: "USA", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Arturs Žagars", height: 190, age: 25, jersey: 32, country: "Latvia", position: "G", team: "Fenerbahce Beko Istanbul" },
{ name: "Bonzie Colson Jr.", height: 198, age: 29, jersey: 50, country: "USA", position: "F", team: "Fenerbahce Beko Istanbul" },
{ name: "Khem Birch", height: 206, age: 33, jersey: 92, country: "Canada", position: "C", team: "Fenerbahce Beko Istanbul" },
//Fenerbahce Beko Istanbul

//LDLC Asvel
{ name: "Zachary Seljaas", height: 200, age: 28, jersey: 1, country: "USA", position: "F", team: "LDLC ASVEL" },
{ name: "Adam Atamna", height: 195, age: 18, jersey: 2, country: "France", position: "G", team: "LDLC ASVEL" },
{ name: "Shaquille Harrison", height: 193, age: 32, jersey: 3, country: "USA", position: "F", team: "LDLC ASVEL" },
{ name: "Thomas Heurtel", height: 189, age: 36, jersey: 7, country: "France", position: "G", team: "LDLC ASVEL" },
{ name: "Melvin Ajinca", height: 203, age: 21, jersey: 8, country: "France", position: "F", team: "LDLC ASVEL" },
{ name: "Bodian Massa", height: 210, age: 28, jersey: 10, country: "France", position: "F", team: "LDLC ASVEL" },
{ name: "Edwin Jackson", height: 190, age: 36, jersey: 11, country: "France", position: "F", team: "LDLC ASVEL" },
{ name: "Nando De Colo", height: 196, age: 38, jersey: 12, country: "France", position: "G", team: "LDLC ASVEL" },
{ name: "Mehdy Ngouama", height: 188, age: 30, jersey: 16, country: "France", position: "G", team: "LDLC ASVEL" },
{ name: "David Lighty", height: 198, age: 37, jersey: 23, country: "USA", position: "F", team: "LDLC ASVEL" },
{ name: "Mbaye N'Diaye", height: 204, age: 26, jersey: 24, country: "Senegal", position: "C", team: "LDLC ASVEL" },
{ name: "Glynn Watson Jr.", height: 183, age: 28, jersey: 30, country: "USA", position: "G", team: "LDLC ASVEL" },
{ name: "Bastien Vautier", height: 210, age: 27, jersey: 32, country: "France", position: "C", team: "LDLC ASVEL" },
{ name: "Armel Traore", height: 203, age: 22, jersey: 94, country: "France", position: "C", team: "LDLC ASVEL" },
//LDLC Asvel

//Maccabi Tel Aviv
{ name: "Iffe Lundberg", height: 193, age: 31, jersey: 0, country: "Denmark", position: "G", team: "Maccabi Tel Aviv" },
{ name: "Jaylen Hoard", height: 204, age: 26, jersey: 1, country: "France", position: "F", team: "Maccabi Tel Aviv" },
{ name: "Jimmy Clark III", height: 190, age: 24, jersey: 2, country: "USA", position: "G", team: "Maccabi Tel Aviv" },
{ name: "Marcio Santos", height: 204, age: 23, jersey: 3, country: "Brazil", position: "C", team: "Maccabi Tel Aviv" },
{ name: "Gur Lavi", height: 200, age: 24, jersey: 4, country: "Israel", position: "F", team: "Maccabi Tel Aviv" },
{ name: "Lonnie Walker IV", height: 196, age: 27, jersey: 8, country: "USA", position: "G", team: "Maccabi Tel Aviv" },
{ name: "Roman Sorkin", height: 208, age: 29, jersey: 9, country: "Israel", position: "F", team: "Maccabi Tel Aviv" },
{ name: "O'Shae Brissett", height: 201, age: 27, jersey: 10, country: "Canada", position: "F", team: "Maccabi Tel Aviv" },
{ name: "William Rayman", height: 203, age: 28, jersey: 11, country: "USA", position: "F", team: "Maccabi Tel Aviv" },
{ name: "John DiBartolomeo", height: 183, age: 34, jersey: 12, country: "Israel", position: "G", team: "Maccabi Tel Aviv" },
{ name: "Jeff Dowtin Jr.", height: 191, age: 28, jersey: 21, country: "USA", position: "G", team: "Maccabi Tel Aviv" },
{ name: "TJ Leaf", height: 208, age: 28, jersey: 22, country: "USA", position: "F", team: "Maccabi Tel Aviv" },
{ name: "Zachary Hankins", height: 211, age: 29, jersey: 35, country: "USA", position: "C", team: "Maccabi Tel Aviv" },
{ name: "Tamir Blatt", height: 178, age: 28, jersey: 45, country: "Israel", position: "G", team: "Maccabi Tel Aviv" },
//Maccabi Tel Aviv

// Olympiacos
{ name: "Thomas Walkup", height: 193, age: 33, jersey: 0, country: "Greece", position: "G", team: "Olympiacos Piraeus" },
{ name: "Frank Ntilikina", height: 194, age: 26, jersey: 1, country: "France", position: "G", team: "Olympiacos Piraeus" },
{ name: "Tyson Ward", height: 198, age: 28, jersey: 3, country: "USA", position: "SF", team: "Olympiacos Piraeus" },
{ name: "Giannoulis Larentzakis", height: 196, age: 32, jersey: 5, country: "Greece", position: "G", team: "Olympiacos Piraeus" },
{ name: "Saben Lee", height: 188, age: 26, jersey: 9, country: "USA", position: "G", team: "Olympiacos Piraeus" },
{ name: "Monte Morris", height: 188, age: 30, jersey: 11, country: "USA", position: "G", team: "Olympiacos Piraeus" },
{ name: "Sasha Vezenkov", height: 206, age: 30, jersey: 14, country: "Bulgaria", position: "F", team: "Olympiacos Piraeus" },
{ name: "Kostas Papanikolaou", height: 204, age: 35, jersey: 16, country: "Greece", position: "F", team: "Olympiacos Piraeus" },
{ name: "Omiros Netzipoglou", height: 193, age: 23, jersey: 21, country: "Greece", position: "G", team: "Olympiacos Piraeus" },
{ name: "Tyler Dorsey", height: 196, age: 29, jersey: 22, country: "USA", position: "G", team: "Olympiacos Piraeus" },
{ name: "Alec Peters", height: 206, age: 30, jersey: 25, country: "USA", position: "F", team: "Olympiacos Piraeus" },
{ name: "Nikola Milutinov", height: 213, age: 31, jersey: 33, country: "Serbia", position: "C", team: "Olympiacos Piraeus" },
{ name: "Kostas Antetokounmpo", height: 208, age: 28, jersey: 37, country: "Greece", position: "C", team: "Olympiacos Piraeus" },
{ name: "Donta Hall", height: 208, age: 28, jersey: 45, country: "USA", position: "C", team: "Olympiacos Piraeus" },
{ name: "Shaquielle McKissic", height: 196, age: 35, jersey: 77, country: "USA", position: "G", team: "Olympiacos Piraeus" },
{ name: "Evan Fournier", height: 198, age: 33, jersey: 94, country: "France", position: "F", team: "Olympiacos Piraeus" },
// Olympiacos

// Real Madrid
{ name: "Trey Lyles", height: 206, age: 30, jersey: 0, country: "Canada", position: "F", team: "Real Madrid" },
{ name: "David Kramer", height: 198, age: 28, jersey: 1, country: "Germany", position: "F", team: "Real Madrid" },
{ name: "Alberto Abalde", height: 202, age: 30, jersey: 6, country: "Spain", position: "F", team: "Real Madrid" },
{ name: "Facundo Campazzo", height: 181, age: 34, jersey: 7, country: "Argentina", position: "G", team: "Real Madrid" },
{ name: "Chuma Okeke", height: 201, age: 27, jersey: 8, country: "USA", position: "C", team: "Real Madrid" },
{ name: "Gabriele Procida", height: 201, age: 23, jersey: 9, country: "Italy", position: "F", team: "Real Madrid" },
{ name: "Mario Hezonja", height: 206, age: 30, jersey: 11, country: "Croatia", position: "F", team: "Real Madrid" },
{ name: "Theo Maledon", height: 193, age: 24, jersey: 12, country: "France", position: "G", team: "Real Madrid" },
{ name: "Izan Almansa", height: 208, age: 20, jersey: 13, country: "Spain", position: "F", team: "Real Madrid" },
{ name: "Gabriel Deck", height: 198, age: 30, jersey: 14, country: "Argentina", position: "F", team: "Real Madrid" },
{ name: "Usman Garuba", height: 203, age: 23, jersey: 16, country: "Spain", position: "C", team: "Real Madrid" },
{ name: "Sergio Llull", height: 190, age: 38, jersey: 23, country: "Spain", position: "G", team: "Real Madrid" },
{ name: "Andres Feliz", height: 186, age: 27, jersey: 24, country: "Spain", position: "G", team: "Real Madrid" },
{ name: "Alex Len", height: 213, age: 32, jersey: 25, country: "Ukraine", position: "C", team: "Real Madrid" }, 
{ name: "Walter Tavares", height: 220, age: 33, jersey: 22, country: "Cape Verde", position: "C", team: "Real Madrid" },
//Real Madrid

// Virtus Bologna
{ name: "Luca Vildoza", height: 191, age: 30, jersey: 1, country: "Argentina", position: "G", team: "Virtus Bologna" },
{ name: "Carsen Edwards", height: 180, age: 27, jersey: 3, country: "USA", position: "G", team: "Virtus Bologna" },
{ name: "Alessandro Pajola", height: 194, age: 26, jersey: 6, country: "Italy", position: "G", team: "Virtus Bologna" },
{ name: "Saliou Niang", height: 199, age: 21, jersey: 7, country: "Senegal", position: "F", team: "Virtus Bologna" },
{ name: "Alen Smailagić", height: 206, age: 25, jersey: 9, country: "Serbia", position: "F", team: "Virtus Bologna" },
{ name: "Brandon Taylor", height: 178, age: 31, jersey: 11, country: "USA", position: "G", team: "Virtus Bologna" },
{ name: "Derrick Alston Jr.", height: 207, age: 28, jersey: 21, country: "USA", position: "F", team: "Virtus Bologna" },
{ name: "Daniel Hackett", height: 196, age: 38, jersey: 23, country: "USA", position: "G", team: "Virtus Bologna" },
{ name: "Matthew Morgan", height: 188, age: 28, jersey: 30, country: "USA", position: "G", team: "Virtus Bologna" },
{ name: "Aliou Diarra", height: 208, age: 24, jersey: 31, country: "Mali", position: "C", team: "Virtus Bologna" },
{ name: "Karim Jallow", height: 198, age: 28, jersey: 34, country: "Germany", position: "F", team: "Virtus Bologna" },
{ name: "Mouhamet Diouf", height: 208, age: 24, jersey: 35, country: "Italy", position: "C", team: "Virtus Bologna" },
{ name: "Nicola Akele", height: 203, age: 30, jersey: 45, country: "Italy", position: "F", team: "Virtus Bologna" },
//Virtus Bologna

//Zalgiris Kaunas
{ name: "Nigel Williams-Goss", height: 191, age: 31, jersey: 1, country: "USA", position: "G", team: "Zalgiris Kaunas" },
{ name: "Sylvain Francisco", height: 185, age: 28, jersey: 3, country: "France", position: "G", team: "Zalgiris Kaunas" },
{ name: "Kajus Mikalauskas", height: 191, age: 18, jersey: 4, country: "Lithuania", position: "G", team: "Zalgiris Kaunas" },
{ name: "Moses Wright", height: 207, age: 27, jersey: 7, country: "USA", position: "C", team: "Zalgiris Kaunas" },
{ name: "Ignas Brazdeikis", height: 201, age: 26, jersey: 8, country: "Lithuania", position: "F", team: "Zalgiris Kaunas" },
{ name: "Dovydas Giedraitis", height: 193, age: 25, jersey: 9, country: "Lithuania", position: "G", team: "Zalgiris Kaunas" },
{ name: "Azuolas Tubelis", height: 208, age: 23, jersey: 10, country: "Lithuania", position: "F", team: "Zalgiris Kaunas" },
{ name: "Maodo Lo", height: 192, age: 33, jersey: 12, country: "Germany", position: "G", team: "Zalgiris Kaunas" },
{ name: "Dustin Sleva", height: 203, age: 30, jersey: 14, country: "USA", position: "F", team: "Zalgiris Kaunas" },
{ name: "Laurynas Birutis", height: 213, age: 28, jersey: 15, country: "Lithuania", position: "C", team: "Zalgiris Kaunas" },
{ name: "Mantas Rubstavicius", height: 198, age: 23, jersey: 17, country: "Lithuania", position: "F", team: "Zalgiris Kaunas" },
{ name: "Arnas Butkevicius", height: 197, age: 33, jersey: 51, country: "Lithuania", position: "F", team: "Zalgiris Kaunas" },
{ name: "Deividas Sirvydis", height: 204, age: 25, jersey: 91, country: "Lithuania", position: "G", team: "Zalgiris Kaunas" },
{ name: "Edgaras Ulanovas", height: 199, age: 33, jersey: 92, country: "Lithuania", position: "F", team: "Zalgiris Kaunas" },
//Zalgiris Kaunas

//Hapoel Tel Aviv
{ name: "Jonathan Motley", height: 206, age: 30, jersey: 0, country: "USA", position: "C", team: "Hapoel Tel Aviv" },
{ name: "Chris Jones", height: 188, age: 32, jersey: 1, country: "USA", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Antonio Blakeney", height: 193, age: 29, jersey: 2, country: "USA", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Elijah Bryant", height: 196, age: 30, jersey: 3, country: "USA", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Guy Palatin", height: 195, age: 20, jersey: 9, country: "Israel", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Bar Timor", height: 191, age: 33, jersey: 10, country: "Israel", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Tyler Ennis", height: 188, age: 31, jersey: 11, country: "USA", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Collin Malcolm", height: 200, age: 28, jersey: 17, country: "USA", position: "F", team: "Hapoel Tel Aviv" },
{ name: "Tai Odiase", height: 206, age: 30, jersey: 21, country: "USA", position: "C", team: "Hapoel Tel Aviv" },
{ name: "Vasilije Micić", height: 196, age: 31, jersey: 22, country: "Serbia", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Ish Wainright", height: 196, age: 31, jersey: 24, country: "USA", position: "F", team: "Hapoel Tel Aviv" },
{ name: "Dan Oturu", height: 208, age: 26, jersey: 25, country: "USA", position: "C", team: "Hapoel Tel Aviv" },
{ name: "Yam Madar", height: 190, age: 25, jersey: 26, country: "Israel", position: "G", team: "Hapoel Tel Aviv" },
{ name: "Tomer Ginat", height: 205, age: 31, jersey: 41, country: "Israel", position: "F", team: "Hapoel Tel Aviv" },
//Hapoel Tel Aviv

//Valenica Basket
{ name: "Brancou Badio", height: 191, age: 26, jersey: 0, country: "Senegal", position: "G", team: "Valencia Basket" },
{ name: "Kameron Taylor", height: 198, age: 31, jersey: 1, country: "USA", position: "F", team: "Valencia Basket" },
{ name: "Josep Puerto", height: 202, age: 26, jersey: 2, country: "Spain", position: "G", team: "Valencia Basket" },
{ name: "Nathan Reuvers", height: 209, age: 27, jersey: 3, country: "Hungary", position: "F", team: "Valencia Basket" },
{ name: "Jaime Pradilla", height: 205, age: 24, jersey: 4, country: "Spain", position: "C", team: "Valencia Basket" },
{ name: "Sergio de Larrea", height: 198, age: 20, jersey: 5, country: "Spain", position: "G", team: "Valencia Basket" },
{ name: "Xabi Lopez-Arostegui", height: 200, age: 28, jersey: 6, country: "Spain", position: "G", team: "Valencia Basket" },
{ name: "Braxton Key", height: 203, age: 28, jersey: 7, country: "USA", position: "F", team: "Valencia Basket" },
{ name: "Jean Montero", height: 188, age: 22, jersey: 8, country: "Dominican Republic", position: "G", team: "Valencia Basket" },
{ name: "Omari Moore", height: 198, age: 25, jersey: 10, country: "USA", position: "G", team: "Valencia Basket" },
{ name: "Neal Sako", height: 210, age: 27, jersey: 12, country: "France", position: "C", team: "Valencia Basket" },
{ name: "Darius Thompson", height: 193, age: 30, jersey: 13, country: "USA", position: "G", team: "Valencia Basket" },
{ name: "Matthew Costello", height: 208, age: 32, jersey: 24, country: "Ivory Coast", position: "C", team: "Valencia Basket" },
{ name: "Isaac Nogues", height: 195, age: 21, jersey: 32, country: "Spain", position: "G", team: "Valencia Basket" },
{ name: "Yankuba Sima", height: 209, age: 29, jersey: 77, country: "Spain", position: "C", team: "Valencia Basket" },
//Valencia Basket

//Dubai Basketball
{ name: "Nemanja Dangubić", height: 204, age: 32, jersey: 1, country: "Serbia", position: "F", team: "Dubai Basketball" },
{ name: "Dwayne Bacon", height: 204, age: 30, jersey: 3, country: "USA", position: "F", team: "Dubai Basketball" },
{ name: "Aleksa Avramović", height: 193, age: 31, jersey: 4, country: "Serbia", position: "G", team: "Dubai Basketball" },
{ name: "Awudu Abass", height: 200, age: 32, jersey: 5, country: "Italy", position: "F", team: "Dubai Basketball" },
{ name: "Klemen Prepelič", height: 192, age: 32, jersey: 7, country: "Slovenia", position: "G", team: "Dubai Basketball" },
{ name: "Davis Bertans", height: 210, age: 33, jersey: 8, country: "Latvia", position: "F", team: "Dubai Basketball" },
{ name: "Boogie Ellis", height: 188, age: 25, jersey: 9, country: "USA", position: "G", team: "Dubai Basketball" },
{ name: "Justin Anderson", height: 198, age: 32, jersey: 10, country: "USA", position: "F", team: "Dubai Basketball" },
{ name: "Kosta Kondić", height: 193, age: 24, jersey: 11, country: "Bosnia and Herzegovina", position: "G", team: "Dubai Basketball" },
{ name: "Džanan Musa", height: 206, age: 26, jersey: 13, country: "Bosnia and Herzegovina", position: "G", team: "Dubai Basketball" },
{ name: "Sertac Sanli", height: 212, age: 34, jersey: 15, country: "Turkey", position: "C", team: "Dubai Basketball" },
{ name: "Mfindou Kabengele", height: 208, age: 28, jersey: 17, country: "Canada", position: "C", team: "Dubai Basketball" },
{ name: "Taran Armstrong", height: 196, age: 23, jersey: 22, country: "Australia", position: "G", team: "Dubai Basketball" },
{ name: "McKinley Wright", height: 180, age: 27, jersey: 25, country: "USA", position: "G", team: "Dubai Basketball" },
{ name: "Filip Petrušev", height: 211, age: 25, jersey: 30, country: "Serbia", position: "C", team: "Dubai Basketball" },
{ name: "Matt Ryan", height: 198, age: 28, jersey: 32, country: "USA", position: "F", team: "Dubai Basketball" },
{ name: "Kenan Kamenjaš", height: 207, age: 25, jersey: 34, country: "Bosnia and Herzegovina", position: "C", team: "Dubai Basketball" },
//Dubai Basketball
];

// Game state variables
let dailyTargetPlayer;
let unlimitedTargetPlayer;
let currentMode = 'daily';
let dailyGuesses = [];
let unlimitedGuesses = [];
let dailyStartTime = null;
let unlimitedStartTime = null;
let dailyPausedTime = 0; // Stores elapsed seconds when paused
let unlimitedPausedTime = 0; // Stores elapsed seconds when paused
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
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}


function getSecondsUntilNextLocalMidnight() {
    const now = new Date();

    const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0, 0
    );

    return Math.max(0, Math.floor((nextMidnight - now) / 1000));
}



function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

let dailyCountdownInterval = null;

function startNextDailyCountdown() {
    const container = document.getElementById("nextDailyCountdown");
    const timer = document.getElementById("countdownTimer");

    if (!container || !timer) return;

    container.classList.remove("hidden");

    if (dailyCountdownInterval) {
        clearInterval(dailyCountdownInterval);
    }

    dailyCountdownInterval = setInterval(() => {
        const secondsLeft = getSecondsUntilNextLocalMidnight();


        if (secondsLeft <= 0) {
            clearInterval(dailyCountdownInterval);
            location.reload(); // unlock new daily
            return;
        }

        timer.textContent = formatTime(secondsLeft);
    }, 1000);
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
    const today = getCurrentDateString();
    const storedDailyTarget = localStorage.getItem('dailyTargetPlayer');
    const storedDailyDate = localStorage.getItem('dailyTargetDate');

    // ✅ If target date is not today, reset daily game
    if (storedDailyDate !== today) {
        dailyTargetPlayer = selectPlayer(true);
        dailyGuesses = [];
        dailyGameCompleted = false;
        dailyStartTime = null;

        localStorage.setItem('dailyTargetPlayer', JSON.stringify(dailyTargetPlayer));
        localStorage.setItem('dailyTargetDate', today);
        localStorage.removeItem('dailyGuesses');
        localStorage.removeItem('dailyStartTime');
        localStorage.removeItem('dailyGameCompleted');
    } else {
        // Load previous state if still the same day
        const storedDailyGuesses = localStorage.getItem('dailyGuesses');
        const storedDailyStartTime = localStorage.getItem('dailyStartTime');
        const storedDailyCompleted = localStorage.getItem('dailyGameCompleted');

        dailyGuesses = storedDailyGuesses ? JSON.parse(storedDailyGuesses) : [];
        dailyStartTime = storedDailyStartTime ? parseInt(storedDailyStartTime) : null;
        dailyTargetPlayer = storedDailyTarget ? JSON.parse(storedDailyTarget) : selectPlayer(true);
        dailyGameCompleted = storedDailyCompleted === 'true';
    }

    // Load unlimited game state (unchanged)
    const storedUnlimitedGuesses = localStorage.getItem('unlimitedGuesses');
    const storedUnlimitedStartTime = localStorage.getItem('unlimitedStartTime');
    const storedUnlimitedTarget = localStorage.getItem('unlimitedTargetPlayer');
    const storedUnlimitedCompleted = localStorage.getItem('unlimitedGameCompleted');

    unlimitedGuesses = storedUnlimitedGuesses ? JSON.parse(storedUnlimitedGuesses) : [];
    unlimitedStartTime = storedUnlimitedStartTime ? parseInt(storedUnlimitedStartTime) : null;
    unlimitedTargetPlayer = storedUnlimitedTarget ? JSON.parse(storedUnlimitedTarget) : selectPlayer(false);
    unlimitedGameCompleted = storedUnlimitedCompleted === 'true';

    // Mode + streak load
    const storedMode = localStorage.getItem('currentMode');
    if (storedMode) currentMode = storedMode;

    const storedStreak = localStorage.getItem('currentStreak');
    if (storedStreak) currentStreak = parseInt(storedStreak);

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
    localStorage.setItem('unlimitedTargetPlayer', JSON.stringify(unlimitedTargetPlayer));
    localStorage.setItem('dailyTargetPlayer', JSON.stringify(dailyTargetPlayer));
    localStorage.setItem('dailyTargetDate', getCurrentDateString());
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
        dailyPausedTime = 0;
        localStorage.removeItem('dailyStartTime');
        document.getElementById("dailyTimer").textContent = "00:00";
    } else {
        unlimitedStartTime = null;
        unlimitedPausedTime = 0;
        localStorage.removeItem('unlimitedStartTime');
        document.getElementById("unlimitedTimer").textContent = "00:00";
    }
}

function startTimer(mode) {
    stopTimer(mode);

    console.log(`Starting ${mode} timer...`);
    if (mode === 'daily') {
        if (!dailyStartTime) {
            // Start fresh, accounting for any paused time
            dailyStartTime = Date.now() - (dailyPausedTime * 1000);
            localStorage.setItem('dailyStartTime', dailyStartTime.toString());
        }
        dailyTimerInterval = setInterval(() => {
            updateTimer(mode);
        }, 1000);
    } else {
        if (!unlimitedStartTime) {
            // Start fresh, accounting for any paused time
            unlimitedStartTime = Date.now() - (unlimitedPausedTime * 1000);
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
            // Save the elapsed time when pausing
            if (dailyStartTime) {
                dailyPausedTime = Math.floor((Date.now() - dailyStartTime) / 1000);
            }
        }
    } else {
        if (unlimitedTimerInterval) {
            clearInterval(unlimitedTimerInterval);
            unlimitedTimerInterval = null;
            // Save the elapsed time when pausing
            if (unlimitedStartTime) {
                unlimitedPausedTime = Math.floor((Date.now() - unlimitedStartTime) / 1000);
            }
        }
    }
}

function updateTimerDisplay() {
    const dailyTimer = document.getElementById("dailyTimer");
    const unlimitedTimer = document.getElementById("unlimitedTimer");
    
    if (dailyTimer && unlimitedTimer) {
        // Show/hide the appropriate timer
        dailyTimer.classList.toggle("hidden", currentMode !== 'daily');
        unlimitedTimer.classList.toggle("hidden", currentMode !== 'unlimited');
        
        // Update daily timer display
        if (dailyStartTime) {
            let elapsedTime;
            if (dailyTimerInterval) {
                // Timer is running - calculate from start time
                elapsedTime = Math.floor((Date.now() - dailyStartTime) / 1000);
            } else {
                // Timer is paused - use saved paused time
                elapsedTime = dailyPausedTime;
            }
            const minutes = Math.floor(elapsedTime / 60);
            const seconds = elapsedTime % 60;
            dailyTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        
        // Update unlimited timer display
        if (unlimitedStartTime) {
            let elapsedTime;
            if (unlimitedTimerInterval) {
                // Timer is running - calculate from start time
                elapsedTime = Math.floor((Date.now() - unlimitedStartTime) / 1000);
            } else {
                // Timer is paused - use saved paused time
                elapsedTime = unlimitedPausedTime;
            }
            const minutes = Math.floor(elapsedTime / 60);
            const seconds = elapsedTime % 60;
            unlimitedTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
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
    startNextDailyCountdown(); // ✅ ADD THIS
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
    <li class="empty-row"><span class="guess-number">8</span></li>
    <li class="empty-row"><span class="guess-number">9</span></li>
    <li class="empty-row"><span class="guess-number">10</span></li>
    `;
    document.getElementById("playerInput").value = "";
    document.getElementById("playerInput").disabled = false;
    const guessButton = document.querySelector(".input-container button");
    if (guessButton) {
        guessButton.disabled = false;
        guessButton.style.opacity = "1";
        guessButton.style.cursor = "pointer";
    }
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
        <li class="empty-row"><span class="guess-number">8</span></li>
        <li class="empty-row"><span class="guess-number">9</span></li>
        <li class="empty-row"><span class="guess-number">10</span></li>
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
    
    // Save state to ensure unlimited target is persisted if it was just created
    saveGameState();

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
    startNextDailyCountdown(); // ✅ ADD THIS
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

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        // Enter key to submit guess
        if (e.key === 'Enter') {
            const input = document.getElementById("playerInput");
            if (input && !input.disabled && input.value.trim() !== '') {
                checkGuess();
            }
        }
        
        // Escape key to close modals
        if (e.key === 'Escape') {
            const modals = [helpModal, statsModal, gameOverModal, unlimitedGameOverModal];
            modals.forEach(modal => {
                if (modal && modal.style.display === 'flex') {
                    modal.style.display = 'none';
                }
            });
        }
    });

    // Add beforeunload event listener to reset timers when the page is fully closed
    window.addEventListener('beforeunload', () => {
        if (!dailyGameCompleted) {
            resetTimer('daily');
        }
        if (!unlimitedGameCompleted) {
            resetTimer('unlimited');
        }
    });
}

function switchMode(mode) {

    if (mode === currentMode) return;
    
    // Stop the previous mode's timer interval (pause it, but keep the elapsed time)
    const previousMode = currentMode;
    stopTimer(previousMode);
    
    // Update to new mode
    currentMode = mode;
    localStorage.setItem('currentMode', currentMode);

    const modeToggle = document.querySelector(".mode-toggle");
    modeToggle.classList.remove("animate");
    void modeToggle.offsetWidth;
    modeToggle.classList.add("animate");

    document.getElementById("dailyModeButton").classList.toggle("active", mode === 'daily');
    document.getElementById("unlimitedModeButton").classList.toggle("active", mode === 'unlimited');
    document.getElementById("dailyChallenge").textContent = mode === 'daily' ?
        `Daily EuroGuess - ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` :
        "Unlimited EuroGuess";

    renderGuesses();
    updateTimerDisplay(); // This will show the frozen time for the paused timer

    document.getElementById("playerInput").value = "";
    document.getElementById("playerInput").disabled = false;
    const guessButton = document.querySelector(".input-container button");
    if (guessButton) {
        guessButton.disabled = false;
        guessButton.style.opacity = "1";
        guessButton.style.cursor = "pointer";
    }

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
        // Start the timer for the new active mode (will continue from where it left off if it was paused)
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

// Close autocomplete when clicking outside
document.addEventListener('click', function(event) {
    const input = document.getElementById("playerInput");
    const suggestionsDiv = document.getElementById("suggestions");
    const isClickInsideInput = input && input.contains(event.target);
    const isClickInsideSuggestions = suggestionsDiv && suggestionsDiv.contains(event.target);
    
    if (!isClickInsideInput && !isClickInsideSuggestions) {
        if (suggestionsDiv) {
            suggestionsDiv.innerHTML = "";
        }
    }
});

// Close autocomplete when input loses focus (for mobile)
document.getElementById("playerInput").addEventListener('blur', function() {
    // Small delay to allow click on suggestion to register
    setTimeout(() => {
        const suggestionsDiv = document.getElementById("suggestions");
        if (suggestionsDiv) {
            suggestionsDiv.innerHTML = "";
        }
    }, 200);
});

function showSuccessMessage() {
    const successDiv = document.createElement("div");
    successDiv.classList.add("success-message");

    if (currentMode === 'daily') {
        successDiv.innerHTML = `
            🎉 Congrats! You got it!
            <button id="shareButton" class="share-button">Share Results</button>
        `;
        document.body.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);

        document.getElementById('shareButton').addEventListener('click', () => {
            const guesses = dailyGuesses.length;
            const totalGuesses = 10;
            
            // Generate emoji grid based on guesses
            let emojiGrid = '';
            dailyGuesses.forEach((guess) => {
                let row = '';
                const isCorrect = guess.name === dailyTargetPlayer.name;
                
                // Player name
                row += isCorrect ? '🟩' : '⬜';
                // Team
                row += guess.team === dailyTargetPlayer.team ? '🟩' : '⬜';
                // Height
                if (guess.height === dailyTargetPlayer.height) {
                    row += '🟩';
                } else if (Math.abs(guess.height - dailyTargetPlayer.height) <= 3) {
                    row += '🟨';
                } else {
                    row += '⬜';
                }
                // Age
                if (guess.age === dailyTargetPlayer.age) {
                    row += '🟩';
                } else if (Math.abs(guess.age - dailyTargetPlayer.age) <= 3) {
                    row += '🟨';
                } else {
                    row += '⬜';
                }
                // Jersey
                if (guess.jersey === dailyTargetPlayer.jersey) {
                    row += '🟩';
                } else if (Math.abs(guess.jersey - dailyTargetPlayer.jersey) <= 3) {
                    row += '🟨';
                } else {
                    row += '⬜';
                }
                // Country
                row += guess.country === dailyTargetPlayer.country ? '🟩' : '⬜';
                // Position
                row += guess.position === dailyTargetPlayer.position ? '🟩' : '⬜';
                
                emojiGrid += row + '\n';
            });
            
            const resultText = `EuroGuess ${getCurrentDateString()}\n${guesses}/${totalGuesses}\n\n${emojiGrid}\nPlay at: ${window.location.origin}`;

            if (navigator.share) {
                navigator.share({
                    title: 'EuroGuess Result',
                    text: resultText,
                }).catch(err => console.log('Share failed:', err));
            } else {
                navigator.clipboard.writeText(resultText).then(() => {
                    // Show a nice feedback message
                    const feedback = document.createElement('div');
                    feedback.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--primary); color: white; padding: 1rem 2rem; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 10000; font-weight: 600;';
                    feedback.textContent = 'Results copied to clipboard! 📋';
                    document.body.appendChild(feedback);
                    setTimeout(() => feedback.remove(), 2000);
                }).catch(err => console.log('Copy failed:', err));
            }
        });

        markGameAsPlayed();
    } else {
        successDiv.innerHTML = `🎉 Congrats! You got it!`;
        document.body.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
        unlimitedGameCompleted = true;
        saveGameState();
    }
}

function disableInputAndButton() {
    const input = document.getElementById("playerInput");
    const guessButton = document.querySelector(".input-container button");
    input.disabled = true;
    if (guessButton) {
        guessButton.disabled = true;
        guessButton.style.opacity = "0.5";
        guessButton.style.cursor = "not-allowed";
    }
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