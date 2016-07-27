
const globalCategories = [
  { id: 1365, name: 'Action & Adventure' },
  { id: 43040, name: 'Action Comedies' },
  { id: 1568, name: 'Action Sci-Fi & Fantasy' },
  { id: 43048, name: 'Action Thrillers' },
  { id: 11881, name: 'Adult Animation' },
  { id: 7442, name: 'Adventures' },
  { id: 3761, name: 'African Movies' },
  { id: 3327, name: 'Alien Sci-Fi' },
  { id: 5507, name: 'Animal Tales' },
  { id: 7424, name: 'Anime' },
  { id: 2653, name: 'Anime Action' },
  { id: 9302, name: 'Anime Comedies' },
  { id: 452, name: 'Anime Dramas' },
  { id: 11146, name: 'Anime Fantasy' },
  { id: 3063, name: 'Anime Features' },
  { id: 10695, name: 'Anime Horror' },
  { id: 2729, name: 'Anime Sci-Fi' },
  { id: 6721, name: 'Anime Series' },
  { id: 29764, name: 'Art House Movies' },
  { id: 77232, name: 'Asian Action Movies' },
  { id: 5230, name: 'Australian Movies' },
  { id: 8195, name: 'B-Horror Movies' },
  { id: 12339, name: 'Baseball Movies' },
  { id: 12762, name: 'Basketball Movies' },
  { id: 262, name: 'Belgian Movies' },
  { id: 3652, name: 'Biographical Documentaries' },
  { id: 3179, name: 'Biographical Dramas' },
  { id: 12443, name: 'Boxing Movies' },
  { id: 10757, name: 'British Movies' },
  { id: 52117, name: 'British TV Shows' },
  { id: 1252, name: 'Campy Movies' },
  { id: 783, name: 'Children & Family Movies' },
  { id: 3960, name: 'Chinese Movies' },
  { id: 46576, name: 'Classic Action & Adventure' },
  { id: 31694, name: 'Classic Comedies' },
  { id: 29809, name: 'Classic Dramas' },
  { id: 32473, name: 'Classic Foreign Movies' },
  { id: 31574, name: 'Classic Movies' },
  { id: 32392, name: 'Classic Musicals' },
  { id: 31273, name: 'Classic Romantic Movies' },
  { id: 47147, name: 'Classic Sci-Fi & Fantasy' },
  { id: 46588, name: 'Classic Thrillers' },
  { id: 46553, name: 'Classic TV Shows' },
  { id: 48744, name: 'Classic War Movies' },
  { id: 47465, name: 'Classic Westerns' },
  { id: 6548, name: 'Comedies' },
  { id: 10118, name: 'Comic Book and Superhero Movies' },
  { id: 1105, name: 'Country & Western/Folk' },
  { id: 2748, name: 'Courtroom Dramas' },
  { id: 6895, name: 'Creature Features' },
  { id: 9584, name: 'Crime Action & Adventure' },
  { id: 9875, name: 'Crime Documentaries' },
  { id: 6889, name: 'Crime Dramas' },
  { id: 10499, name: 'Crime Thrillers' },
  { id: 26146, name: 'Crime TV Shows' },
  { id: 9434, name: 'Cult Comedies' },
  { id: 10944, name: 'Cult Horror Movies' },
  { id: 7627, name: 'Cult Movies' },
  { id: 4734, name: 'Cult Sci-Fi & Fantasy' },
  { id: 74652, name: 'Cult TV Shows' },
  { id: 869, name: 'Dark Comedies' },
  { id: 45028, name: 'Deep Sea Horror Movies' },
  { id: 67673, name: 'Disney' },
  { id: 59433, name: 'Disney Musicals' },
  { id: 6839, name: 'Documentaries' },
  { id: 5763, name: 'Dramas' },
  { id: 4961, name: 'Dramas based on Books' },
  { id: 3653, name: 'Dramas based on real life' },
  { id: 10606, name: 'Dutch Movies' },
  { id: 5254, name: 'Eastern European Movies' },
  { id: 10659, name: 'Education for Kids' },
  { id: 52858, name: 'Epics' },
  { id: 11079, name: 'Experimental Movies' },
  { id: 26835, name: 'Faith & Spirituality' },
  { id: 52804, name: 'Faith & Spirituality Movies' },
  { id: 51056, name: 'Family Features' },
  { id: 9744, name: 'Fantasy Movies' },
  { id: 7687, name: 'Film Noir' },
  { id: 72436, name: 'Food & Travel TV' },
  { id: 12803, name: 'Football Movies' },
  { id: 11828, name: 'Foreign Action & Adventure' },
  { id: 4426, name: 'Foreign Comedies' },
  { id: 5161, name: 'Foreign Documentaries' },
  { id: 2150, name: 'Foreign Dramas' },
  { id: 8243, name: 'Foreign Gay & Lesbian Movies' },
  { id: 8654, name: 'Foreign Horror Movies' },
  { id: 7462, name: 'Foreign Movies' },
  { id: 6485, name: 'Foreign Sci-Fi & Fantasy' },
  { id: 10306, name: 'Foreign Thrillers' },
  { id: 58807, name: 'French Movies' },
  { id: 31851, name: 'Gangster Movies' },
  { id: 500, name: 'Gay & Lesbian Dramas' },
  { id: 58886, name: 'German Movies' },
  { id: 61115, name: 'Greek Movies' },
  { id: 5349, name: 'Historical Documentaries' },
  { id: 89585, name: 'Horror Comedy' },
  { id: 8711, name: 'Horror Movies' },
  { id: 11804, name: 'Independent Action & Adventure' },
  { id: 4195, name: 'Independent Comedies' },
  { id: 384, name: 'Independent Dramas' },
  { id: 7077, name: 'Independent Movies' },
  { id: 3269, name: 'Independent Thrillers' },
  { id: 10463, name: 'Indian Movies' },
  { id: 58750, name: 'Irish Movies' },
  { id: 8221, name: 'Italian Movies' },
  { id: 10398, name: 'Japanese Movies' },
  { id: 10271, name: 'Jazz & Easy Listening' },
  { id: 751423, name: 'Kids Faith & Spirituality' },
  { id: 52843, name: 'Kids Music' },
  { id: 27346, name: 'Kids’ TV' },
  { id: 5685, name: 'Korean Movies' },
  { id: 67879, name: 'Korean TV Shows' },
  { id: 1402, name: 'Late Night Comedies' },
  { id: 1613, name: 'Latin American Movies' },
  { id: 10741, name: 'Latin Music' },
  { id: 8985, name: 'Martial Arts Movies' },
  { id: 6695, name: 'Martial Arts, Boxing & Wrestling' },
  { id: 5875, name: 'Middle Eastern Movies' },
  { id: 2125, name: 'Military Action & Adventure' },
  { id: 4006, name: 'Military Documentaries' },
  { id: 11, name: 'Military Dramas' },
  { id: 25804, name: 'Military TV Shows' },
  { id: 4814, name: 'Miniseries' },
  { id: 26, name: 'Mockumentaries' },
  { id: 947, name: 'Monster Movies' },
  { id: 10056, name: 'Movies based on children’s books' },
  { id: 6796, name: 'Movies for ages 0 to 2' },
  { id: 6218, name: 'Movies for ages 2 to 4' },
  { id: 5455, name: 'Movies for ages 5 to 7' },
  { id: 561, name: 'Movies for ages 8 to 10' },
  { id: 6962, name: 'Movies for ages 11 to 12' },
  { id: 90361, name: 'Music & Concert Documentaries' },
  { id: 1701, name: 'Music' },
  { id: 13335, name: 'Musicals' },
  { id: 9994, name: 'Mysteries' },
  { id: 63782, name: 'New Zealand Movies' },
  { id: 12123, name: 'Period Pieces' },
  { id: 2700, name: 'Political Comedies' },
  { id: 7018, name: 'Political Documentaries' },
  { id: 6616, name: 'Political Dramas' },
  { id: 10504, name: 'Political Thrillers' },
  { id: 5505, name: 'Psychological Thrillers' },
  { id: 36103, name: 'Quirky Romance' },
  { id: 9833, name: 'Reality TV' },
  { id: 10005, name: 'Religious Documentaries' },
  { id: 3278, name: 'Rock & Pop Concerts' },
  { id: 5475, name: 'Romantic Comedies' },
  { id: 1255, name: 'Romantic Dramas' },
  { id: 502675, name: 'Romantic Favorites' },
  { id: 7153, name: 'Romantic Foreign Movies' },
  { id: 9916, name: 'Romantic Independent Movies' },
  { id: 8883, name: 'Romantic Movies' },
  { id: 11567, name: 'Russian' },
  { id: 6998, name: 'Satanic Stories' },
  { id: 4922, name: 'Satires' },
  { id: 9292, name: 'Scandinavian Movies' },
  { id: 1492, name: 'Sci-Fi & Fantasy' },
  { id: 6926, name: 'Sci-Fi Adventure' },
  { id: 3916, name: 'Sci-Fi Dramas' },
  { id: 1694, name: 'Sci-Fi Horror Movies' },
  { id: 11014, name: 'Sci-Fi Thrillers' },
  { id: 2595, name: 'Science & Nature Documentaries' },
  { id: 52780, name: 'Science & Nature TV' },
  { id: 9702, name: 'Screwball Comedies' },
  { id: 5012, name: 'Showbiz Dramas' },
  { id: 13573, name: 'Showbiz Musicals' },
  { id: 53310, name: 'Silent Movies' },
  { id: 10256, name: 'Slapstick Comedies' },
  { id: 8646, name: 'Slasher and Serial Killer Movies' },
  { id: 12549, name: 'Soccer Movies' },
  { id: 3675, name: 'Social & Cultural Documentaries' },
  { id: 3947, name: 'Social Issue Dramas' },
  { id: 9196, name: 'Southeast Asian Movies' },
  { id: 58741, name: 'Spanish Movies' },
  { id: 2760, name: 'Spiritual Documentaries' },
  { id: 9327, name: 'Sports & Fitness' },
  { id: 5286, name: 'Sports Comedies' },
  { id: 180, name: 'Sports Documentaries' },
  { id: 7243, name: 'Sports Dramas' },
  { id: 4370, name: 'Sports Movies' },
  { id: 10702, name: 'Spy Action & Adventure' },
  { id: 9147, name: 'Spy Thrillers' },
  { id: 55774, name: 'Stage Musicals' },
  { id: 11559, name: 'Stand-up Comedy' },
  { id: 35800, name: 'Steamy Romantic Movies' },
  { id: 972, name: 'Steamy Thrillers' },
  { id: 42023, name: 'Supernatural Horror Movies' },
  { id: 11140, name: 'Supernatural Thrillers' },
  { id: 6384, name: 'Tearjerkers' },
  { id: 3519, name: 'Teen Comedies' },
  { id: 9299, name: 'Teen Dramas' },
  { id: 52147, name: 'Teen Screams' },
  { id: 60951, name: 'Teen TV Shows' },
  { id: 8933, name: 'Thrillers' },
  { id: 1159, name: 'Travel & Adventure Documentaries' },
  { id: 10673, name: 'TV Action & Adventure' },
  { id: 11177, name: 'TV Cartoons' },
  { id: 10375, name: 'TV Comedies' },
  { id: 10105, name: 'TV Documentaries' },
  { id: 11714, name: 'TV Dramas' },
  { id: 83059, name: 'TV Horror' },
  { id: 4366, name: 'TV Mysteries' },
  { id: 1372, name: 'TV Sci-Fi & Fantasy' },
  { id: 83, name: 'TV Shows' },
  { id: 9472, name: 'Urban & Dance Concerts' },
  { id: 75804, name: 'Vampire Horror Movies' },
  { id: 75930, name: 'Werewolf Horror Movies' },
  { id: 7700, name: 'Westerns' },
  { id: 2856, name: 'World Music Concerts' },
  { id: 75405, name: 'Zombie Horror Movies' }
];

export let ptCategories = [
  { name : 'Ação & Aventura' , id: 1365 },
  { name : 'Ação e aventura estrangeira' , id: 11828 },
  { name : 'Ação e Aventura Independentes' , id: 11804 },
  { name : 'Ação e Aventura Militar' , id: 2125 },
  { name : 'Ação e Aventura Spy' , id: 10702 },
  { name : 'Ação e Aventura TV' , id: 10673 },
  { name : 'Ação Sci-Fi & Fantasia' , id: 1568 },
  { name : 'Animações para Adultos' , id: 11881 },
  { name : 'Anime de Ação' , id: 2653 },
  { name : 'Anime de Comédia' , id: 9302 },
  { name : 'Anime de drama' , id: 452 },
  { name : 'Anime de Fantasia' , id: 11146 },
  { name : 'Anime de Ficção Científica' , id: 2729 },
  { name : 'Anime Horror' , id: 10695 },
  { name : 'Anime Series' , id: 6721 },
  { name : 'Anime' , id: 7424 },
  { name : 'Art House Filmes' , id: 29764 },
  { name : 'Artes marciais Filmes' , id: 8985 },
  { name : 'Artes Marciais, Boxe e Wrestling' , id: 6695 },
  { name : 'Atrações do Anime' , id: 3063 },
  { name : 'Aventuras' , id: 7442 },
  { name : 'Cartoons TV' , id: 11177 },
  { name : 'Ciência e Natureza Documentários' , id: 2595 },
  { name : 'Ciência e Natureza TV' , id: 52780 },
  { name : 'Clássico Sci-Fi & Fantasy' , id: 47.147 },
  { name : 'Clássicos de Ação e Aventura' , id: 46.576 },
  { name : 'Clássicos Western' , id: 47465 },
  { name : 'Comédias adolescentes' , id: 3519 },
  { name : 'Comédias clássicas' , id: 31694 },
  { name : 'Comédias cult' , id: 9434 },
  { name : 'Comédias de Ação' , id: 43040 },
  { name : 'Comédias de terror' , id: 89.585 },
  { name : 'Comédias de TV' , id: 10375 },
  { name : 'Comédias esportivas' , id: 5286 },
  { name : 'Comédias estrangeiras' , id: 4426 },
  { name : 'Comédias independentes' , id: 4195 },
  { name : 'Comédias negras' , id: 869 },
  { name : 'Comédias políticas' , id: 2700 },
  { name : 'Comédias românticas' , id: 5475 },
  { name : 'Comédias' , id: 6548 },
  { name : 'Comida e viagens na TV' , id: 72.436 },
  { name : 'Concertos Urbanos e Dança' , id: 9472 },
  { name : 'Contos animais' , id: 5507 },
  { name : 'Country & Western / Folk' , id: 1105 },
  { name : 'Crianças & Família' , id: 783 },
  { name : 'Crianças Fé e Espiritualidade' , id: 751423 },
  { name : 'Criaturas características' , id: 6895 },
  { name : 'Crime, Ação e Aventura' , id: 9584 },
  { name : 'Cult Sci-Fi & Fantasy' , id: 4734 },
  { name : 'Disney' , id: 67.673 },
  { name : 'Documentários armadas' , id: 4006 },
  { name : 'Documentários biográficos' , id: 3652 },
  { name : 'Documentários de crime' , id: 9875 },
  { name : 'Documentários de Música & shows' , id: 90361 },
  { name : 'Documentários espirituais' , id: 2760 },
  { name : 'Documentários Esportes' , id: 180 },
  { name : 'Documentários estrangeiros' , id: 5161 },
  { name : 'Documentários históricos' , id: 5349 },
  { name : 'Documentários políticos' , id: 7018 },
  { name : 'Documentários Religiosos' , id: 10005 },
  { name : 'Documentários TV' , id: 10105 },
  { name : 'Documentários' , id: 6839 },
  { name : 'Dramas adolescentes' , id: 9299 },
  { name : 'Dramas baseados em fatos reais' , id: 3653 },
  { name : 'Dramas baseados em livros' , id: 4961 },
  { name : 'Dramas biográficos' , id: 3179 },
  { name : 'Dramas clássicos' , id: 29809 },
  { name : 'Dramas de crime' , id: 6889 },
  { name : 'Dramas de Ficção Científica' , id: 3916 },
  { name : 'Dramas de Gays e Lésbicas' , id: 500 },
  { name : 'Dramas de tribunal' , id: 2748 },
  { name : 'Dramas de TV' , id: 11714 },
  { name : 'Dramas estrangeiros' , id: 2150 },
  { name : 'Dramas independentes' , id: 384 },
  { name : 'Dramas militares' , id: 11 },
  { name : 'Dramas políticos' , id: 6616 },
  { name : 'Dramas questão social' , id: 3947 },
  { name : 'Dramas românticos' , id: 1255 },
  { name : 'Dramas Showbiz' , id: 5012 },
  { name : 'Dramas' , id: 5763 },
  { name : 'Educação para Crianças' , id: 10659 },
  { name : 'Épicos' , id: 52858 },
  { name : 'Esportes Dramas' , id: 7243 },
  { name : 'Estrangeiros de Ficção Científica' , id: 3327 },
  { name : 'Família' , id: 51056 },
  { name : 'Favoritos Românticos' , id: 502675 },
  { name : 'Fé e espiritualidade no cinema' , id: 52804 },
  { name : 'Fé e Espiritualidade' , id: 26835 },
  { name : 'Film Noir' , id: 7687 },
  { name : 'Filmes africanos' , id: 3761 },
  { name : 'Filmes alemães' , id: 58886 },
  { name : 'Filmes australianos' , id: 5230 },
  { name : 'Filmes baseados em livros infantis' , id: 10056 },
  { name : 'Filmes belgas' , id: 262 },
  { name : 'Filmes britânicos' , id: 10757 },
  { name : 'Filmes chineses' , id: 3960 },
  { name : 'Filmes clássicos estrangeiros' , id: 32473 },
  { name : 'Filmes clássicos românticos' , id: 31273 },
  { name : 'Filmes clássicos' , id: 31574 },
  { name : 'Filmes coreanos' , id: 5685 },
  { name : 'Filmes Cult' , id: 7627 },
  { name : 'Filmes de ação asiáticos' , id: 77232 },
  { name : 'Filmes de basquete' , id: 12762 },
  { name : 'Filmes de beisebol' , id: 12339 },
  { name : 'Filmes de boxe' , id: 12443 },
  { name : 'Filmes de esportes' , id: 4370 },
  { name : 'Filmes de fantasia' , id: 9744 },
  { name : 'Filmes de Futebol' , id: 12549 },
  { name : 'Filmes de Futebol' , id: 12803 },
  { name : 'Filmes de gângster' , id: 31851 },
  { name : 'Filmes de guerra clássicos' , id: 48744 },
  { name : 'Filmes de monstros' , id: 947 },
  { name : 'Filmes de terror B' , id: 8195 },
  { name : 'Filmes de terror com vampiros' , id: 75804 },
  { name : 'Filmes de terror com zumbis' , id: 75405 },
  { name : 'Filmes de terror cult' , id: 10944 },
  { name : 'Filmes de terror de lobisomens' , id: 75930 },
  { name : 'Filmes de terror estrangeiros' , id: 8654 },
  { name : 'Filmes de terror no fundo do mar' , id: 45028 },
  { name : 'Filmes de terror' , id: 8711 },
  { name : 'Filmes do Leste Europeu' , id: 5254 },
  { name : 'Filmes do Oriente Médio' , id: 5875 },
  { name : 'Filmes do Sudeste Asiático' , id: 9196 },
  { name : 'Filmes escandinavos' , id: 9292 },
  { name : 'Filmes espanhóis' , id: 58741 },
  { name : 'Filmes estrangeiros' , id: 7462 },
  { name : 'Filmes exagerados' , id: 1252 },
  { name : 'Filmes Experimentais' , id: 11079 },
  { name : 'Filmes franceses' , id: 58807 },
  { name : 'Filmes gregos' , id: 61115 },
  { name : 'Filmes holandeses' , id: 10606 },
  { name : 'Filmes Independentes Romântico' , id: 9916 },
  { name : 'Filmes Independentes' , id: 7077 },
  { name : 'Filmes indianos' , id: 10463 },
  { name : 'Filmes irlandeses' , id: 58750 },
  { name : 'Filmes italianos' , id: 8221 },
  { name : 'Filmes japoneses' , id: 10398 },
  { name : 'Filmes latino-americanos' , id: 1613 },
  { name : 'Filmes LGBT estrangeiros' , id: 8243 },
  { name : 'Filmes mudos' , id: 53310 },
  { name : 'Filmes para as idades de 0 a 2' , id: 6796 },
  { name : 'Filmes para as idades de 11 a 12' , id: 6962 },
  { name : 'Filmes para idades 2 a 4' , id: 6218 },
  { name : 'Filmes para idades 8-10' , id: 561 },
  { name : 'Filmes para idades de 5 a 7' , id: 5455 },
  { name : 'Filmes românticos estrangeiros' , id: 7153 },
  { name : 'Filmes românticos picantes' , id: 35800 },
  { name : 'Filmes românticos' , id: 8883 },
  { name : 'Foreign Sci-Fi & Fantasy' , id: 6485 },
  { name : 'Gritos adolescentes' , id: 52147 },
  { name : 'Histórias satânicas' , id: 6998 },
  { name : 'Horror TV' , id: 83.059 },
  { name : 'Jazz & Easy Listening' , id: 10271 },
  { name : 'Comédias de fim de noite' , id: 1402 },
  { name : 'Minissérie' , id: 4814 },
  { name : 'Mistérios' , id: 9994 },
  { name : 'Mockumentaries' , id: 26 },
  { name : 'Música Latina' , id: 10741 },
  { name : 'Música' , id: 1701 },
  { name : 'Musicais Clássico' , id: 32392 },
  { name : 'Musicais da Disney' , id: 59433 },
  { name : 'Musicais de palco' , id: 55774 },
  { name : 'Musicais para crianças' , id: 52843 },
  { name : 'Musicais' , id: 13335 },
  { name : 'Musicals Showbiz' , id: 13573 },
  { name : 'Novos Filmes Zelândia' , id: 63782 },
  { name : 'Pastelão Comédias' , id: 10256 },
  { name : 'Peças' , id: 12123 },
  { name : 'Programas de TV coreanos' , id: 67879 },
  { name : 'Programas de TV de crime' , id: 26146 },
  { name : 'Quadrinhos e super-heróis' , id: 10118 },
  { name : 'Reality TV' , id: 9833 },
  { name : 'Rock & Pop Shows' , id: 3278 },
  { name : 'Romântico peculiar' , id: 36103 },
  { name : 'Rússia' , id: 11567 },
  { name : 'Sátiras' , id: 4922 },
  { name : 'Sci-Fi & Fantasy' , id: 1492 },
  { name : 'Sci-Fi Adventure' , id: 6926 },
  { name : 'Sci-Fi Filmes de terror' , id: 1694 },
  { name : 'Sci-Fi Thrillers' , id: 11014 },
  { name : 'Screwball Comédias' , id: 9702 },
  { name : 'Shows de música' , id: 2856 },
  { name : 'Shows de TV britânica' , id: 52117 },
  { name : 'Shows de TV Clássico' , id: 46553 },
  { name : 'Shows de TV militares' , id: 25804 },
  { name : 'Shows de TV Teen' , id: 60951 },
  { name : 'Shows de TV' , id: 83 },
  { name : 'Slasher e Serial Killers' , id: 8646 },
  { name : 'Sobrenaturais' , id: 42023 },
  { name : 'Sociais e Culturais (documentários)' , id: 3675 },
  { name : 'Sports & Fitness' , id: 9327 },
  { name : 'Stand-up Comedy' , id: 11559 },
  { name : 'Suspenses de ação' , id: 43048 },
  { name : 'Tearjerkers' , id: 6384 },
  { name : 'Thrillers Clássicos' , id: 46588 },
  { name : 'Thrillers de Crime' , id: 10499 },
  { name : 'Thrillers de espião' , id: 9147 },
  { name : 'Thrillers estrangeiros' , id: 10306 },
  { name : 'Thrillers independentes' , id: 3269 },
  { name : 'Thrillers picantes' , id: 972 },
  { name : 'Thrillers políticos' , id: 10504 },
  { name : 'Thrillers psicológicos' , id: 5505 },
  { name : 'Thrillers sobrenaturais' , id: 11140 },
  { name : 'Thrillers' , id: 8933 },
  { name : 'TV cult' , id: 74.652 },
  { name : 'TV Kids ‘' , id: 27346 },
  { name : 'TV Mysteries' , id: 4366 },
  { name : 'TV Sci-Fi & Fantasy' , id: 1372 },
  { name : 'Viagens & Aventura em documentários' , id: 1159 },
  { name : 'Westerns' , id: 7700 }
]
export default globalCategories;