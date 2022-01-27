import cathedral_rus from '../audio/cathedral_rus.mp3';
import cathedral_eng from '../audio/cathedral_eng.mp3';
import cathedral_deu from '../audio/cathedral_deu.mp3';
import cathedral_esp from '../audio/cathedral_esp.mp3';
import cathedral_ita from '../audio/cathedral_ita.mp3';
import cathedral_fra from '../audio/cathedral_fra.mp3';
import cathedral_ukr from '../audio/cathedral_ukr.mp3';
import torture_rus from '../audio/torture_rus.mp3';
import torture_eng from '../audio/torture_eng.mp3';
import torture_deu from '../audio/torture_deu.mp3';
import torture_esp from '../audio/torture_esp.mp3';
import torture_ita from '../audio/torture_ita.mp3';
import torture_fra from '../audio/torture_fra.mp3';
import torture_ukr from '../audio/torture_ukr.mp3';
import prison_rus from '../audio/prison_rus.mp3';
import prison_eng from '../audio/prison_eng.mp3';
import prison_deu from '../audio/prison_deu.mp3';
import prison_esp from '../audio/prison_esp.mp3';
import prison_ita from '../audio/prison_ita.mp3';
import prison_fra from '../audio/prison_fra.mp3';
import prison_ukr from '../audio/prison_ukr.mp3';
import faberge_rus from '../audio/faberge_rus.wav';
import faberge_eng from '../audio/faberge_eng.m4a';
import faberge_deu from '../audio/faberge_deu.m4a';
import faberge_esp from '../audio/faberge_esp.m4a';
import faberge_ita from '../audio/faberge_ita.m4a';
import faberge_fra from '../audio/faberge_fra.m4a';
import faberge_ukr from '../audio/faberge_ukr.m4a';
import hermitage_rus from '../audio/hermitage_rus.m4a';
import hermitage_eng from '../audio/hermitage_eng.m4a';
import hermitage_deu from '../audio/hermitage_deu.m4a';
import hermitage_esp from '../audio/hermitage_esp.m4a';
import hermitage_ita from '../audio/hermitage_ita.m4a';
import hermitage_fra from '../audio/hermitage_fra.m4a';
import hermitage_ukr from '../audio/hermitage_ukr.m4a';
import spit_rus from '../audio/spit_rus.m4a';
import spit_eng from '../audio/spit_eng.m4a';
import spit_deu from '../audio/spit_deu.m4a';
import spit_esp from '../audio/spit_esp.m4a';
import spit_ita from '../audio/spit_ita.m4a';
import spit_fra from '../audio/spit_fra.m4a';
import spit_ukr from '../audio/spit_ukr.m4a';

const arr = [
  {
    id: 1,
    coordinates: { lat: 59.9501872470237, lng: 30.31593150993791 },
    site: 'https://www.spbmuseum.ru/',
    image: [
      'https://posmotrim.by/pics/0dc8e6721.jpg',
      'https://www.visit-petersburg.ru/media/uploads/news/4222/4222_cover.jpg.1050x700_q95_crop_upscale.jpg',
      'https://putidorogi-nn.ru/images/stories/evropa/rossiya/petropavlovskiy_sobor_2.jpg',
    ],
    phone: '+7(812)498-05-26',
    language: {
      rus: {
        audio: cathedral_rus,
        titleAddress: 'Адрес',
        titleContacts: 'Контакты',
        address: 'территория Петропавловская крепость 3Ж, Санкт-Петербург',
        name: 'Петропавловский собор',
        alt: 'Музей, Достопримечательность',
        description:
          'Православный собор в Санкт-Петербурге в Петропавловской крепости, усыпальница русских императоров, памятник архитектуры петровского барокко. Автор проекта — итальянский архитектор Доминико Трезини. Возведён в 1712—1733 годах. Усыпальница династии Романовых с 1725 года. С 1733 до 2012 года собор высотой 122,5 м был самым высоким зданием Санкт-Петербурга, а до 1952 года — самым высоким в России.',
      },
      eng: {
        audio: cathedral_eng,
        titleAddress: 'Address',
        titleContacts: 'Contacts',
        address: 'Peter and Paul Fortress, St. Petersburg, 197046',
        name: 'Peter and Paul Cathedral',
        alt: 'Museum, Sight',
        description:
          'The Orthodox Cathedral in St. Petersburg in the Peter and Paul Fortress, the tomb of Russian emperors, an architectural monument of the Peter and Paul Baroque. The author of the project is the Italian architect Dominico Trezzini. Built in 1712-1733. The tomb of the Romanov dynasty since 1725. From 1733 to 2012, the 122.5 m high cathedral was the tallest building in St. Petersburg, and until 1952 - the tallest in Russia.',
      },
      deu: {
        audio: cathedral_deu,
        titleAddress: 'die Adresse',
        titleContacts: 'Kontakte',
        address: 'Peter-und-Paul-Festung, St. Petersburg, 197046',
        name: 'Peter und Paul Kathedrale',
        alt: 'Museum, Wahrzeichen',
        description:
          'Die orthodoxe Kathedrale in St. Petersburg in der Peter-und-Paul-Festung, das Grabmal der russischen Kaiser, ein Baudenkmal des Peter-und-Paul-Barocks. Autor des Projekts ist der italienische Architekt Dominico Trezzini. Erbaut 1712-1733. Das Grab der Romanow-Dynastie seit 1725. Von 1733 bis 2012 war die 122,5 m hohe Kathedrale das höchste Gebäude in St. Petersburg und bis 1952 das höchste in Russland.',
      },
      esp: {
        audio: cathedral_esp,
        titleAddress: 'La dirección',
        titleContacts: 'Contactos',
        address: 'Fortaleza de San Pedro y San Pablo, San Petersburgo, 197046',
        name: 'Catedral de San Pedro y San Pablo',
        alt: 'Museo, Punto de referencia',
        description:
          'La Catedral Ortodoxa de San Petersburgo en la Fortaleza de Pedro y Pablo, la tumba de los emperadores rusos, un monumento arquitectónico del barroco de Pedro y Pablo. El autor del proyecto es el arquitecto italiano Dominico Trezzini. Construido en 1712-1733. La tumba de la dinastía Romanov desde 1725. De 1733 a 2012, la catedral de 122,5 m de altura fue el edificio más alto de San Petersburgo y, hasta 1952, el más alto de Rusia.',
      },
      ita: {
        audio: cathedral_ita,
        titleAddress: "L'indirizzo",
        titleContacts: 'Contatti',
        address: 'Fortezza di Pietro e Paolo, San Pietroburgo, 197046',
        name: 'Cattedrale di Pietro e Paolo',
        alt: 'Museo, punto di riferimento',
        description:
          "La Cattedrale Ortodossa di San Pietroburgo nella Fortezza di Pietro e Paolo, la tomba degli imperatori russi, monumento architettonico del barocco di Pietro e Paolo. L'autore del progetto è l'architetto italiano Domenico Trezzini. Costruito nel 1712-1733. La tomba della dinastia dei Romanov dal 1725. Dal 1733 al 2012, la cattedrale alta 122,5 m era l'edificio più alto di San Pietroburgo e, fino al 1952, il più alto della Russia.",
      },
      fra: {
        audio: cathedral_fra,
        titleAddress: "L'adresse",
        titleContacts: 'Contacts',
        address: 'Forteresse Pierre et Paul, Saint-Pétersbourg, 197046',
        name: 'Cathédrale Pierre et Paul',
        alt: 'Musée, Point de repère',
        description:
          "La cathédrale orthodoxe de Saint-Pétersbourg dans la forteresse Pierre et Paul, le tombeau des empereurs russes, un monument architectural du baroque Pierre et Paul. L'auteur du projet est l'architecte italien Dominico Trezzini. Construit en 1712-1733. Le tombeau de la dynastie des Romanov depuis 1725. De 1733 à 2012, la cathédrale de 122,5 m de haut était le plus haut bâtiment de Saint-Pétersbourg et jusqu'en 1952 - le plus haut de Russie",
      },
      ukr: {
        audio: cathedral_ukr,
        titleAddress: 'Адреса',
        titleContacts: 'Контакти',
        address: 'Петропавлівська фортеця, Санкт-Петербург, 197046',
        name: 'Петропавлівський собор',
        alt: "Музей, Визначна пам'ятка",
        description:
          "Православний собор у Санкт-Петербурзі у Петропавлівській фортеці, усипальниця російських імператорів, пам'ятка архітектури петровського бароко. Автор проекту – італійський архітектор Домініко Трезіні. Зведений у 1712-1733 роках. Усипальниця династії Романових із 1725 року. З 1733 до 2012 року собор заввишки 122,5 м був найвищим будинком Санкт-Петербурга, а до 1952 року - найвищим у Росії.",
      },
    },
  },
  {
    id: 2,
    coordinates: { lat: 59.949001294958, lng: 30.31648974831176 },
    site: 'https://www.spbmuseum.ru/',
    image: [
      'https://author.today/content/2021/05/15/90da06d5b6ba40e8a377833f67652dab.jpeg',
      'https://img.tourister.ru/files/2/4/0/1/5/0/3/5/original.jpg',
      'https://img.tourister.ru/files/2/4/0/1/5/0/3/6/clones/870_580_fixedwidth.jpg',
    ],
    phone: '+7(812)230-64-31',
    language: {
      rus: {
        audio: torture_rus,
        titleAddress: 'Адрес',
        titleContacts: 'Контакты',
        address: 'территория Петропавловская Крепость, 3П, Санкт-Петербург',
        name: 'Орудия пыток Средневековья',
        alt: 'Музей',
        description:
          'Музей истории телесных наказаний был создан в Москве в 2010 году. Целью создания музея телесных наказаний была профилактика преступлений в обществе путём рассказа, что следовало за преступлением, каким образом осуществлялось наказание за провинность в Средние века в разных странах, какие для этого использовались орудия и приспособления.',
      },
      eng: {
        audio: torture_eng,
        titleAddress: 'Address',
        titleContacts: 'Contacts',
        address: 'Peter and Paul Fortress, St. Petersburg, 197046',
        name: 'Torture museum',
        alt: 'Museum',
        description:
          'The Museum of the History of Corporal Punishment was established in Moscow in 2010. The purpose of creating a museum of corporal punishment was to prevent crimes in society by telling what followed the crime, how the punishment for offense was carried out in the Middle Ages in different countries, what tools and devices were used for this.',
      },
      deu: {
        audio: torture_deu,
        titleAddress: 'die Adresse',
        titleContacts: 'Kontakte',
        address: 'Peter-und-Paul-Festung, 3, St. Petersburg, 191186',
        name: 'Mittelalterliche Folterinstrumente',
        alt: 'Museum',
        description:
          'Das Museum für die Geschichte der körperlichen Züchtigung wurde 2010 in Moskau gegründet. Der Zweck der Einrichtung eines Museums für körperliche Züchtigung war die Verhütung von Verbrechen in der Gesellschaft, indem erzählt wird, was auf die Straftat folgte, wie die Bestrafung für Straftaten im Mittelalter in verschiedenen Ländern durchgeführt wurde, welche Werkzeuge und Geräte dafür verwendet wurden.',
      },
      esp: {
        audio: torture_esp,
        titleAddress: 'La dirección',
        titleContacts: 'Contactos',
        address: 'Fortaleza de San Pedro y San Pablo, 3, San Petersburgo, 191186',
        name: 'Instrumentos de tortura medievales',
        alt: 'Museo',
        description:
          'El Museo de Historia del Castigo Corporal se estableció en Moscú en 2010. El propósito de crear un museo del castigo corporal fue la prevención de los delitos en la sociedad contando qué siguió al delito, cómo se llevó a cabo el castigo por delito en la Edad Media en diferentes países, qué herramientas y dispositivos se utilizaron para ello.',
      },
      ita: {
        audio: torture_ita,
        titleAddress: "L'indirizzo",
        titleContacts: 'Contatti',
        address: 'Fortezza di Pietro e Paolo, 3, San Pietroburgo, 191186',
        name: 'Strumenti di tortura medievali',
        alt: 'Museo',
        description:
          'Il Museo della storia delle punizioni corporali è stato istituito a Mosca nel 2010. Lo scopo di creare un museo delle punizioni corporali era la prevenzione dei crimini nella società raccontando ciò che è seguito al crimine, come veniva eseguita la punizione per il reato nel Medioevo nei diversi paesi, quali strumenti e dispositivi venivano utilizzati per questo.',
      },
      fra: {
        audio: torture_fra,
        titleAddress: "L'adresse",
        titleContacts: 'Contacts',
        address: 'Forteresse Pierre et Paul, 3, Saint-Pétersbourg, 191186',
        name: 'Instruments de torture médiévaux',
        alt: 'Musée',
        description:
          "Le Musée de l'histoire des châtiments corporels a été créé à Moscou en 2010. Le but de la création du Musée des châtiments corporels était de prévenir les crimes dans la société en racontant ce qui a suivi le crime, comment la punition pour délit était appliquée au Moyen Âge dans différents pays, quels outils ont été utilisés pour cela et les adaptations.",
      },
      ukr: {
        audio: torture_ukr,
        titleAddress: 'Адреса',
        titleContacts: 'Контакти',
        address: 'тер. Петропавлівська Фортеця, 3, Санкт-Петербург, 191186',
        name: 'Знаряддя тортур Середньовіччя',
        alt: 'Музей',
        description:
          'Музей історії тілесних покарань було створено у Москві 2010 року. Метою створення музею тілесних покарань була профілактика злочинів у суспільстві шляхом оповідання, що йшло за злочином, яким чином здійснювалося покарання за провину в Середньовіччі у різних країнах, які для цього використовувалися знаряддям та пристосуванням.',
      },
    },
  },
  {
    id: 3,
    coordinates: { lat: 59.94872, lng: 30.3135968 },
    site: 'https://www.spbmuseum.ru/',
    image: [
      'https://4traveler.ru/sites/default/files/user_images/travel/St.pt/trubetskoy/DSC01807.jpg',
      'https://peterburg2.ru/uploads/19/05/30/ga2_39.jpg',
      'https://images.spbkultura.ru/2020/06/05/2b181b65-2738-41a9-9cb6-e0f2bd9ef664.jpg',
    ],
    phone: '+7(812)498-07-03',
    language: {
      rus: {
        audio: prison_rus,
        titleAddress: 'Адрес',
        titleContacts: 'Контакты',
        address: 'территория Петропавловская Крепость, 3Д, Санкт-Петербург',
        name: 'Тюрьма Трубецкого бастиона',
        alt: 'Музей',
        description:
          'Тюрьма была построена в 1870—1872 годах по проекту инженеров К. П. Андреева и М. А. Пасыпкина. Двухэтажное, пятиугольное в плане здание было возведено на месте разобранных внутренних стен Трубецкого бастиона. Первоначально в тюрьме было 73 одиночных камеры, а с 1878 года их стало 69. Эта тюрьма была главной следственной тюрьмой для обвиняемых в политических преступлениях. В ней была создана строжайшая система одиночного заключения, целью которой была полная изоляция заключенного от внешнего мира и других арестантов. ',
      },
      eng: {
        audio: prison_eng,
        titleAddress: 'Address',
        titleContacts: 'Contacts',
        address: 'Peter and Paul Fortress, St. Petersburg, 197046',
        name: 'Prison of Trubetskoy Bastion',
        alt: 'Museum',
        description:
          'The prison was built in 1870-1872 according to the design of engineers K. P. Andreev and M. A. Pasypkin. The two-story pentagonal building was erected on the site of the dismantled inner walls of the Trubetskoy bastion. Initially, there were 73 solitary confinement cells in the prison, but since 1878 there have been 69. This prison was the main investigatory prison for those accused of political crimes. It created the strictest system of solitary confinement, the purpose of which was to completely isolate the prisoner from the outside world and other prisoners.',
      },
      deu: {
        audio: prison_deu,
        titleAddress: 'die Adresse',
        titleContacts: 'Kontakte',
        address: 'Peter-und-Paul-Festung, 6, St. Petersburg, 197198',
        name: 'Gefängnis von Trubetskoy Bastion',
        alt: 'Museum',
        description:
          'Das Gefängnis wurde 1870-1872 nach den Plänen der Ingenieure K. P. Andreev und M. A. Pasypkin gebaut. Das zweistöckige fünfeckige Gebäude wurde an der Stelle der abgebauten Innenmauern der Trubetskoy-Bastion errichtet. Anfangs gab es 73 Einzelhaftzellen im Gefängnis, seit 1878 sind es 69. Dieses Gefängnis war das Hauptuntersuchungsgefängnis für Angeklagte politischer Verbrechen. Es schuf das strengste System der Einzelhaft, dessen Zweck es war, den Gefangenen vollständig von der Außenwelt und anderen Gefangenen zu isolieren.',
      },
      esp: {
        audio: prison_esp,
        titleAddress: 'La dirección',
        titleContacts: 'Contactos',
        address: 'Territorio de la Fortaleza de San Pedro y San Pablo, 6, San Petersburgo, 197198',
        name: 'Prisión del bastión de Trubetskoy',
        alt: 'Museo',
        description:
          'La prisión fue construida en 1870-1872 según el diseño de los ingenieros K. P. Andreev y M. A. Pasypkin. El edificio pentagonal de dos pisos se erigió en el sitio de los muros interiores desmantelados del bastión de Trubetskoy. Inicialmente, había 73 celdas de aislamiento en la prisión, pero desde 1878 ha habido 69. Esta prisión fue la principal prisión de investigación para los acusados ​​de delitos políticos. Creó el sistema más estricto de confinamiento solitario, cuyo propósito era aislar completamente al preso del mundo exterior y de otros presos.',
      },
      ita: {
        audio: prison_ita,
        titleAddress: "L'indirizzo",
        titleContacts: 'Contatti',
        address: 'Territorio della Fortezza di Pietro e Paolo, 6, San Pietroburgo, 197198',
        name: 'Prigione del Bastione Trubetskoy',
        alt: 'Museo',
        description:
          "La prigione fu costruita nel 1870-1872 su progetto degli ingegneri K. P. Andreev e M. A. Pasypkin. L'edificio pentagonale a due piani fu eretto sul sito delle mura interne smantellate del bastione Trubetskoy. Inizialmente, c'erano 73 celle di isolamento nella prigione, ma dal 1878 ce ne sono state 69. Questa prigione era la principale prigione investigativa per coloro che erano accusati di crimini politici. Ha creato il più rigoroso sistema di isolamento, il cui scopo era isolare completamente il prigioniero dal mondo esterno e dagli altri prigionieri.",
      },
      fra: {
        audio: prison_fra,
        titleAddress: "L'adresse",
        titleContacts: 'Contacts',
        address: 'Territoire de la forteresse Pierre et Paul, 6, Saint-Pétersbourg, 197198',
        name: 'Prison de Bastion Troubetskoy',
        alt: 'Musée',
        description:
          "La prison a été construite en 1870-1872 selon la conception des ingénieurs K. P. Andreev et M. A. Pasypkin. Le bâtiment pentagonal de deux étages a été érigé sur le site des murs intérieurs démantelés du bastion Troubetskoy. Initialement, il y avait 73 cellules d'isolement dans la prison, mais depuis 1878, il y en a eu 69. Cette prison était la principale prison d'enquête pour les personnes accusées de crimes politiques. Il a créé le système le plus strict d'isolement cellulaire, dont le but était d'isoler complètement le détenu du monde extérieur et des autres détenus.",
      },
      ukr: {
        audio: prison_ukr,
        titleAddress: 'Адреса',
        titleContacts: 'Контакти',
        address: 'територія Петропавлівська Фортеця, 6, Санкт-Петербург, 197198',
        name: "В'язниця Трубецького бастіону",
        alt: 'Музей',
        description:
          "В'язниця була побудована в 1870-1872 роках за проектом інженерів К. П. Андрєєва та М. А. Пасипкіна. Двоповерхова, п'ятикутна у плані будівля була зведена на місці розібраних внутрішніх стін Трубецького бастіону. Спочатку у в'язниці було 73 одиночні камери, а з 1878 року їх стало 69. Ця в'язниця була головною слідчою в'язницею для обвинувачених у політичних злочинах. У ній була створена найсуворіша система поодинокого ув'язнення, метою якої була повна ізоляція ув'язненого від зовнішнього світу та інших арештантів.",
      },
    },
  },
  {
    id: 4,
    coordinates: { lat: 59.936376, lng: 30.343389 },
    site: 'fabergemuseum.ru',
    image: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhM_kgrOX6eFxgCSDxS5_tNPyMIf2tA2-srA&usqp=CAU',
      'https://kuda-spb.ru/uploads/eb41165bc1840f3e0ca9567510e5d1aa.jpg',
      'https://kuda-spb.ru/uploads/4a3a009ba12d2aa21bb50e90e9504ecc.jpg',
    ],
    phone: '+7(812)314-64-15',
    language: {
      rus: {
        audio: faberge_rus,
        titleAddress: 'Адрес',
        titleContacts: 'Контакты',
        address: 'набережная реки Фонтанки, 21, Санкт-Петербург',
        name: 'Музей Фаберже',
        alt: 'Музей',
        description:
          'Частный музей в Санкт-Петербурге, расположен во дворце Нарышкиных-Шуваловых. Обладает не имеющим аналогов собранием русского ювелирного и декоративно-прикладного искусств XIX-XX вв. Наиболее ценные и известные предметы в коллекции музея - 9 императорских пасхальных яиц, созданных фирмой Карла Густавовича Фаберже. В коллекции музея, в том числе, находятся первое и последнее из императорских яиц.',
      },
      eng: {
        audio: faberge_eng,
        titleAddress: 'Address',
        titleContacts: 'Contacts',
        address: 'Fontanka river embankment, 21, Saint Petersburg',
        name: 'Faberge Museum',
        alt: 'Museum',
        description:
          "A private museum in St. Petersburg, located in the Naryshkin-Shuvalov palace. Possesses an unparalleled collection of Russian jewelry and decorative and applied arts of the 19th-20th centuries. The most valuable and famous items in the museum's collection are 9 imperial Easter eggs created by the firm of Karl Gustavovich Faberge. The collection of the museum includes the first and the last of the imperial eggs.",
      },
      deu: {
        audio: faberge_deu,
        titleAddress: 'die Adresse',
        titleContacts: 'Kontakte',
        address: 'Fontanka-Flussufer, 21, Sankt Petersburg',
        name: 'Fabergé-Museum',
        alt: 'Museum',
        description:
          'Ein privates Museum in St. Petersburg, das sich im Naryshkin-Shuvalov-Palast befindet. Besitzt eine beispiellose Sammlung russischen Schmucks sowie dekorativer und angewandter Kunst des 19.-20. Jahrhunderts. Die wertvollsten und bekanntesten Stücke der Sammlung des Museums sind 9 kaiserliche Ostereier, die von der Firma Karl Gustavovich Faberge hergestellt wurden. Die Sammlung des Museums umfasst das erste und das letzte kaiserliche Ei.',
      },
      esp: {
        audio: faberge_esp,
        titleAddress: 'La dirección',
        titleContacts: 'Contactos',
        address: 'Terraplén del río Fontanka, 21, San Petersburgo',
        name: 'Museo Fabergé',
        alt: 'Museo',
        description:
          'Un museo privado en San Petersburgo, ubicado en el palacio Naryshkin-Shuvalov. Posee una colección inigualable de joyería rusa y artes decorativas y aplicadas de los siglos XIX y XX. Los artículos más valiosos y famosos de la colección del museo son 9 huevos de Pascua imperiales creados por la firma de Karl Gustavovich Faberge. La colección del museo incluye el primero y el último de los huevos imperiales.',
      },
      ita: {
        audio: faberge_ita,
        titleAddress: "L'indirizzo",
        titleContacts: 'Contatti',
        address: 'Argine del fiume Fontanka, 21, San Pietroburgo',
        name: 'Museo Fabergé',
        alt: 'Museo',
        description:
          "Un museo privato a San Pietroburgo, situato nel palazzo Naryshkin-Shuvalov. Possiede una collezione senza precedenti di gioielli russi e arti decorative e applicate del XIX e XX secolo. Gli oggetti più preziosi e famosi della collezione del museo sono 9 uova di Pasqua imperiali create dalla ditta di Karl Gustavovich Faberge. La collezione del museo comprende la prima e l'ultima delle uova imperiali.",
      },
      fra: {
        audio: faberge_fra,
        titleAddress: "L'adresse",
        titleContacts: 'Contacts',
        address: 'Quai de la rivière Fontanka, 21, Saint-Pétersbourg',
        name: 'Musée Fabergé',
        alt: 'Musée',
        description:
          "Un musée privé à Saint-Pétersbourg, situé dans le palais Naryshkin-Shuvalov. Possède une collection inégalée de bijoux russes et d'arts décoratifs et appliqués des XIXe et XXe siècles. Les objets les plus précieux et les plus célèbres de la collection du musée sont les 9 œufs de Pâques impériaux créés par la société Karl Gustavovich Fabergé. La collection du musée comprend le premier et le dernier des œufs impériaux.",
      },
      ukr: {
        audio: faberge_ukr,
        titleAddress: 'Адреса',
        titleContacts: 'Контакти',
        address: 'набережна річки Фонтанки, 21, Санкт-Петербург',
        name: 'Музей Фаберже',
        alt: 'Музей',
        description:
          'Приватний музей у Санкт-Петербурзі, розташований у палаці Наришкіних-Шувалових. Має збори російського ювелірного і декоративно-ужиткового мистецтв XIX-XX ст., що не мають аналогів. Найбільш цінні та відомі предмети в колекції музею – 9 імператорських великодніх яєць, створених фірмою Карла Густавовича Фаберже. У колекції музею, зокрема, знаходяться перше та останнє з імператорських яєць.',
      },
    },
  },
  {
    id: 5,
    coordinates: { lat: 59.939954, lng: 30.314508 },
    site: 'www.hermitagemuseum.org',
    image: [
      'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Hermitage.jpg',
      'https://www.advantour.com/russia/images/city/st-peterburg/landmarks-and-attractions/saint-petersburg-landmarks-and-attractions-hermitage.jpg',
      'https://путешествуем-по-россии.рф/wp-content/uploads/2020/08/%D0%9A%D0%B0%D0%BA-%D0%BB%D1%83%D1%87%D1%88%D0%B5-%D0%BF%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D1%82%D1%8C-%D0%AD%D1%80%D0%BC%D0%B8%D1%82%D0%B0%D0%B6-1920x1024.jpg',
    ],
    phone: '+7(812)571-34-65',
    language: {
      rus: {
        audio: hermitage_rus,
        panoram: 'https://yandex.ru/maps/-/CCUyBZXvdD',
        titleAddress: 'Адрес',
        titleContacts: 'Контакты',
        address: 'Дворцовая площадь 2, Санкт-Петербург',
        name: 'Эрмитаж',
        alt: 'Музей, Достопримечательность',
        description:
          'Музей изобразительного и декоративно-прикладного искусства, расположенный в городе Санкт-Петербурге Российской Федерации. Основан 7 декабря 1764 года. Является одним из крупнейших художественных музеев в мире.',
      },
      eng: {
        audio: hermitage_eng,
        titleAddress: 'Address',
        titleContacts: 'Contacts',
        address: 'Palace Square 2, St. Petersburg',
        name: 'Hermitage',
        alt: 'Museum, Sight',
        description:
          'Museum of Fine and Decorative and Applied Arts, located in the city of St. Petersburg, Russian Federation. Founded on December 7, 1764. It is one of the largest art museums in the world.',
      },
      deu: {
        audio: hermitage_deu,
        titleAddress: 'die Adresse',
        titleContacts: 'Kontakte',
        address: 'Schlossplatz 2, St. Petersburg',
        name: 'Einsiedelei',
        alt: 'Museum, Wahrzeichen',
        description:
          'Museum für bildende und dekorative und angewandte Kunst in der Stadt St. Petersburg, Russische Föderation. Gegründet am 7. Dezember 1764. Es ist eines der größten Kunstmuseen der Welt.',
      },
      esp: {
        audio: hermitage_esp,
        titleAddress: 'La dirección',
        titleContacts: 'Contactos',
        address: 'Palace Square 2, San Petersburgo',
        name: 'Ermita',
        alt: 'Museo, Punto de referencia',
        description:
          'Museo de Bellas Artes y Artes Decorativas y Aplicadas, ubicado en la ciudad de San Petersburgo, Federación de Rusia. Fundada el 7 de diciembre de 1764. Es uno de los museos de arte más grandes del mundo.',
      },
      ita: {
        audio: hermitage_ita,
        titleAddress: "L'indirizzo",
        titleContacts: 'Contatti',
        address: 'Piazza del Palazzo 2, San Pietroburgo',
        name: 'Eremo',
        alt: 'Museo, punto di riferimento',
        description:
          "Museo delle Belle Arti Decorative e Applicate, situato nella città di San Pietroburgo, Federazione Russa. Fondata il 7 dicembre 1764. È uno dei più grandi musei d'arte del mondo.",
      },
      fra: {
        audio: hermitage_fra,
        titleAddress: "L'adresse",
        titleContacts: 'Contacts',
        address: 'Place du Palais 2, Saint-Pétersbourg',
        name: 'Ermitage',
        alt: 'Musée, Point de repère',
        description:
          "Musée des Beaux-Arts Décoratifs et Appliqués, situé dans la ville de Saint-Pétersbourg, Fédération de Russie. Fondée le 7 décembre 1764. C'est l'un des plus grands musées d'art au monde.",
      },
      ukr: {
        audio: hermitage_ukr,
        titleAddress: 'Адреса',
        titleContacts: 'Контакти',
        address: 'Палацова площа 2, Санкт-Петербург',
        name: 'Ермітаж',
        alt: "Музей, Визначна пам'ятка",
        description:
          'Музей образотворчого та декоративно-ужиткового мистецтва, розташований у місті Санкт-Петербурзі Російської Федерації. Заснований 7 грудня 1764 року. Є одним із найбільших художніх музеїв у світі.',
      },
    },
  },
  {
    id: 6,
    coordinates: { lat: 59.944245, lng: 30.3071301 },
    site: 'http://visit-petersburg.ru/ru/showplace/199240',
    image: [
      'https://kuda-spb.ru/uploads/860cd490a22d831619b7940e32e35698.jpg',
      'https://kuda-spb.ru/uploads/f7ae5bbf82c112170131764da898fb3e.jpg',
      'https://fs.tonkosti.ru/a0/ma/a0mas9znwo0g8k4sw44c84go4.jpg',
    ],
    phone: '',
    language: {
      rus: {
        audio: spit_rus,
        titleAddress: 'Адрес',
        titleContacts: 'Контакты',
        address: 'Санкт-Петербург, Биржевая площадь',
        name: 'Стрелка Васильевского острова',
        alt: 'Мемориальная доска, закладной камень',
        description:
          'Мыс на восточной оконечности Васильевского острова в Санкт-Петербурге, омываемый Большой Невой и Малой Невой; один из самых известных архитектурных ансамблей города; пример гармонии архитектуры города с пейзажем берегов Невы.',
      },
      eng: {
        audio: spit_eng,
        titleAddress: 'Address',
        titleContacts: 'Contacts',
        address: 'St. Petersburg, Birzhevaya square',
        name: 'Spit of Vasilyevsky Island',
        alt: 'Memorial plaque, foundation stone',
        description:
          "Cape at the eastern end of Vasilievsky Island in St. Petersburg, washed by Bolshaya Neva and Malaya Neva; one of the most famous architectural ensembles of the city; an example of the harmony of the city's architecture with the landscape of the banks of the Neva.",
      },
      deu: {
        audio: spit_deu,
        titleAddress: 'die Adresse',
        titleContacts: 'Kontakte',
        address: 'St. Petersburg, Birzhevaya-Platz',
        name: 'Nehrung der Wassiljewski-Insel',
        alt: 'Gedenktafel, Grundstein',
        description:
          'Kap am östlichen Ende der Wassiljewski-Insel in St. Petersburg, umspült von Bolshaya Neva und Malaya Neva; eines der berühmtesten Architekturensembles der Stadt; ein Beispiel für die Harmonie der Architektur der Stadt mit der Landschaft des Ufers der Newa.',
      },
      esp: {
        audio: spit_esp,
        titleAddress: 'La dirección',
        titleContacts: 'Contactos',
        address: 'San Petersburgo, plaza Birzhevaya',
        name: 'Escupir de la isla Vasilyevsky',
        alt: 'Placa conmemorativa, primera piedra',
        description:
          'Cabo en el extremo oriental de la isla Vasilievsky en San Petersburgo, bañado por Bolshaya Neva y Malaya Neva; uno de los conjuntos arquitectónicos más famosos de la ciudad; un ejemplo de la armonía de la arquitectura de la ciudad con el paisaje de la ribera del Neva.',
      },
      ita: {
        audio: spit_ita,
        titleAddress: "L'indirizzo",
        titleContacts: 'Contatti',
        address: 'San Pietroburgo, piazza Birzhevaya',
        name: "Spiedo dell'isola Vasilyevsky",
        alt: 'Targa commemorativa, pietra di fondazione',
        description:
          "Capo all'estremità orientale dell'isola Vasilievsky a San Pietroburgo, bagnata da Bolshaya Neva e Malaya Neva; uno dei complessi architettonici più famosi della città; un esempio dell'armonia dell'architettura della città con il paesaggio delle rive della Neva.",
      },
      fra: {
        audio: spit_fra,
        titleAddress: "L'adresse",
        titleContacts: 'Contacts',
        address: 'Saint-Pétersbourg, place Birzhevaya',
        name: "Broche de l'île Vasilyevsky",
        alt: 'Plaque commémorative, première pierree',
        description:
          "Cap à l'extrémité orientale de l'île Vassilievski à Saint-Pétersbourg, baigné par Bolshaya Neva et Malaya Neva; l'un des ensembles architecturaux les plus célèbres de la ville ; un exemple de l'harmonie de l'architecture de la ville avec le paysage des rives de la Neva.",
      },
      ukr: {
        audio: spit_ukr,
        titleAddress: 'Адреса',
        titleContacts: 'Контакти',
        address: 'Санкт-Петербург, Біржова площа',
        name: 'Стрілка Василівського острова',
        alt: 'Меморіальна дошка, заставний камінь',
        description:
          'Мис на східному краю Василівського острова в Санкт-Петербурзі, омивається Великою Невою та Малою Невою; один із найвідоміших архітектурних ансамблів міста; приклад гармонії архітектури міста з краєвидом берегів Неви.',
      },
    },
  },
];
export default arr;
