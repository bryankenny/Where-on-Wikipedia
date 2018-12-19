async function seedDb() {

  require("dotenv").config();
  const mongo = require("mongodb");

  const client = new mongo.MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true});

  const db = await client.connect()
    .then((client) => {
      return client.db(process.env.DB_NAME);
    });

  console.log("Connected to database at: " + process.env.MONGODB_URI);
  console.log("Clearing 'games', seeding example game");

  const exampleGame = {
    "suspect": {
      "pageid": 2124741,
      "ns": 0,
      "title": "Grinch",
      "links": [
        {
          "ns": 0,
          "title": "ABC-CLIO"
        },
        {
          "ns": 0,
          "title": "A Christmas Carol"
        },
        {
          "ns": 0,
          "title": "A Fish out of Water (book)"
        },
        {
          "ns": 0,
          "title": "A Visit from St. Nicholas"
        },
        {
          "ns": 0,
          "title": "Adoration of the Magi"
        },
        {
          "ns": 0,
          "title": "Adoration of the Shepherds"
        },
        {
          "ns": 0,
          "title": "Advent"
        },
        {
          "ns": 0,
          "title": "Advent Conspiracy"
        },
        {
          "ns": 0,
          "title": "Advent calendar"
        },
        {
          "ns": 0,
          "title": "Advent candle"
        },
        {
          "ns": 0,
          "title": "Advent wreath"
        },
        {
          "ns": 0,
          "title": "Amazing World of Dr. Seuss Museum"
        },
        {
          "ns": 0,
          "title": "And to Think That I Saw It on Mulberry Street"
        },
        {
          "ns": 0,
          "title": "Annunciation"
        },
        {
          "ns": 0,
          "title": "Annunciation to the shepherds"
        },
        {
          "ns": 0,
          "title": "Apple cider"
        },
        {
          "ns": 0,
          "title": "Avocado green"
        },
        {
          "ns": 0,
          "title": "Badalisc"
        },
        {
          "ns": 0,
          "title": "Baptism of the Lord"
        },
        {
          "ns": 0,
          "title": "Bartholomew Cubbins"
        },
        {
          "ns": 0,
          "title": "Bartholomew and the Oobleck"
        },
        {
          "ns": 0,
          "title": "Befana"
        },
        {
          "ns": 0,
          "title": "Beginner Books"
        },
        {
          "ns": 0,
          "title": "Belsnickel"
        },
        {
          "ns": 0,
          "title": "Benedict Cumberbatch"
        },
        {
          "ns": 0,
          "title": "Bethlehem"
        },
        {
          "ns": 0,
          "title": "Biblical Magi"
        },
        {
          "ns": 0,
          "title": "Black Friday (partying)"
        },
        {
          "ns": 0,
          "title": "Black Friday (shopping)"
        },
        {
          "ns": 0,
          "title": "Blue Christmas (holiday)"
        },
        {
          "ns": 0,
          "title": "Boar's Head Feast"
        },
        {
          "ns": 0,
          "title": "Boris Karloff"
        },
        {
          "ns": 0,
          "title": "Boxing Day"
        },
        {
          "ns": 0,
          "title": "Broadway theatre"
        },
        {
          "ns": 0,
          "title": "Bronner's Christmas Wonderland"
        },
        {
          "ns": 0,
          "title": "Burmese python"
        },
        {
          "ns": 0,
          "title": "CBS News"
        },
        {
          "ns": 0,
          "title": "CBS Studios International"
        },
        {
          "ns": 0,
          "title": "Caganer"
        },
        {
          "ns": 0,
          "title": "Candy cane"
        },
        {
          "ns": 0,
          "title": "Carols by Candlelight"
        },
        {
          "ns": 0,
          "title": "Carols for Choirs"
        },
        {
          "ns": 0,
          "title": "Cavalcade of Magi"
        },
        {
          "ns": 0,
          "title": "Champurrado"
        },
        {
          "ns": 0,
          "title": "Charles Dickens"
        },
        {
          "ns": 0,
          "title": "Children's Day"
        },
        {
          "ns": 0,
          "title": "Christingle"
        },
        {
          "ns": 0,
          "title": "Christkind"
        },
        {
          "ns": 0,
          "title": "Christmas"
        },
        {
          "ns": 0,
          "title": "Christmas Day (Trading) Act 2004"
        },
        {
          "ns": 0,
          "title": "Christmas Eve"
        },
        {
          "ns": 0,
          "title": "Christmas Mountains"
        },
        {
          "ns": 0,
          "title": "Christmas and holiday season"
        },
        {
          "ns": 0,
          "title": "Christmas by medium"
        },
        {
          "ns": 0,
          "title": "Christmas cake"
        },
        {
          "ns": 0,
          "title": "Christmas card"
        },
        {
          "ns": 0,
          "title": "Christmas carol"
        },
        {
          "ns": 0,
          "title": "Christmas club"
        },
        {
          "ns": 0,
          "title": "Christmas controversies"
        },
        {
          "ns": 0,
          "title": "Christmas cookie"
        },
        {
          "ns": 0,
          "title": "Christmas cracker"
        },
        {
          "ns": 0,
          "title": "Christmas creep"
        },
        {
          "ns": 0,
          "title": "Christmas decoration"
        },
        {
          "ns": 0,
          "title": "Christmas dinner"
        },
        {
          "ns": 0,
          "title": "Christmas elf"
        },
        {
          "ns": 0,
          "title": "Christmas gift-bringer"
        },
        {
          "ns": 0,
          "title": "Christmas ham"
        },
        {
          "ns": 0,
          "title": "Christmas in August (Yellowstone)"
        },
        {
          "ns": 0,
          "title": "Christmas in Australia and New Zealand"
        },
        {
          "ns": 0,
          "title": "Christmas in Hawaii"
        },
        {
          "ns": 0,
          "title": "Christmas in Hungary"
        },
        {
          "ns": 0,
          "title": "Christmas in Iceland"
        },
        {
          "ns": 0,
          "title": "Christmas in Indonesia"
        },
        {
          "ns": 0,
          "title": "Christmas in Ireland"
        },
        {
          "ns": 0,
          "title": "Christmas in July"
        },
        {
          "ns": 0,
          "title": "Christmas in Mexico"
        },
        {
          "ns": 0,
          "title": "Christmas in Norway"
        },
        {
          "ns": 0,
          "title": "Christmas in Poland"
        },
        {
          "ns": 0,
          "title": "Christmas in Puritan New England"
        },
        {
          "ns": 0,
          "title": "Christmas in Romania"
        },
        {
          "ns": 0,
          "title": "Christmas in Russia"
        },
        {
          "ns": 0,
          "title": "Christmas in Scotland"
        },
        {
          "ns": 0,
          "title": "Christmas in Sweden"
        },
        {
          "ns": 0,
          "title": "Christmas in Ukraine"
        },
        {
          "ns": 0,
          "title": "Christmas in the American Civil War"
        },
        {
          "ns": 0,
          "title": "Christmas in the Philippines"
        },
        {
          "ns": 0,
          "title": "Christmas in the post-war United States"
        },
        {
          "ns": 0,
          "title": "Christmas lights"
        },
        {
          "ns": 0,
          "title": "Christmas market"
        },
        {
          "ns": 0,
          "title": "Christmas music"
        },
        {
          "ns": 0,
          "title": "Christmas ornament"
        },
        {
          "ns": 0,
          "title": "Christmas ornaments"
        },
        {
          "ns": 0,
          "title": "Christmas pudding"
        },
        {
          "ns": 0,
          "title": "Christmas pyramid"
        },
        {
          "ns": 0,
          "title": "Christmas seal"
        },
        {
          "ns": 0,
          "title": "Christmas stamp"
        },
        {
          "ns": 0,
          "title": "Christmas stocking"
        },
        {
          "ns": 0,
          "title": "Christmas traditions"
        },
        {
          "ns": 0,
          "title": "Christmas tree"
        },
        {
          "ns": 0,
          "title": "Christmas truce"
        }
      ],
      "linkshere": [
        {
          "pageid": 4312,
          "ns": 0,
          "title": "Bethlehem"
        },
        {
          "pageid": 4681,
          "ns": 0,
          "title": "Boxing Day"
        },
        {
          "pageid": 6237,
          "ns": 0,
          "title": "Christmas"
        },
        {
          "pageid": 7565,
          "ns": 0,
          "title": "Christmas in Poland"
        },
        {
          "pageid": 7770,
          "ns": 0,
          "title": "Christmas tree"
        },
        {
          "pageid": 8855,
          "ns": 0,
          "title": "Dr. Seuss"
        },
        {
          "pageid": 11561,
          "ns": 0,
          "title": "Father Christmas"
        },
        {
          "pageid": 21946,
          "ns": 0,
          "title": "Nutcracker"
        },
        {
          "pageid": 33875,
          "ns": 0,
          "title": "Wenceslaus I, Duke of Bohemia"
        },
        {
          "pageid": 34282,
          "ns": 0,
          "title": "Yule"
        },
        {
          "pageid": 34342,
          "ns": 0,
          "title": "Yes, Virginia, there is a Santa Claus"
        },
        {
          "pageid": 34393,
          "ns": 0,
          "title": "Yule log"
        },
        {
          "pageid": 48453,
          "ns": 0,
          "title": "Myra"
        },
        {
          "pageid": 49431,
          "ns": 0,
          "title": "Francis Pharcellus Church"
        },
        {
          "pageid": 54938,
          "ns": 0,
          "title": "Saint Nicholas"
        },
        {
          "pageid": 60164,
          "ns": 0,
          "title": "It's a Wonderful Life"
        },
        {
          "pageid": 64495,
          "ns": 0,
          "title": "Tamale"
        },
        {
          "pageid": 67260,
          "ns": 0,
          "title": "Boris Karloff"
        },
        {
          "pageid": 67761,
          "ns": 0,
          "title": "Herod the Great"
        },
        {
          "pageid": 67762,
          "ns": 0,
          "title": "Massacre of the Innocents"
        },
        {
          "pageid": 70129,
          "ns": 0,
          "title": "Mistletoe"
        },
        {
          "pageid": 73513,
          "ns": 0,
          "title": "Mary, mother of Jesus"
        },
        {
          "pageid": 73670,
          "ns": 0,
          "title": "A Christmas Carol"
        },
        {
          "pageid": 73830,
          "ns": 0,
          "title": "Gerald McBoing-Boing"
        },
        {
          "pageid": 75998,
          "ns": 0,
          "title": "Lord of Misrule"
        },
        {
          "pageid": 83490,
          "ns": 0,
          "title": "Advent"
        },
        {
          "pageid": 86665,
          "ns": 0,
          "title": "Jim Carrey"
        },
        {
          "pageid": 91017,
          "ns": 0,
          "title": "Santa Claus, Indiana"
        },
        {
          "pageid": 105449,
          "ns": 0,
          "title": "North Pole, Alaska"
        },
        {
          "pageid": 108159,
          "ns": 0,
          "title": "Monte Sereno, California"
        },
        {
          "pageid": 113226,
          "ns": 0,
          "title": "A Charlie Brown Christmas"
        },
        {
          "pageid": 141883,
          "ns": 0,
          "title": "Josh Ryan Evans"
        },
        {
          "pageid": 143540,
          "ns": 0,
          "title": "Poinsettia"
        },
        {
          "pageid": 148731,
          "ns": 0,
          "title": "The Cat in the Hat"
        },
        {
          "pageid": 153568,
          "ns": 0,
          "title": "Christmas carol"
        },
        {
          "pageid": 153569,
          "ns": 0,
          "title": "Christmas music"
        },
        {
          "pageid": 156576,
          "ns": 0,
          "title": "Ebenezer Scrooge"
        },
        {
          "pageid": 157222,
          "ns": 0,
          "title": "Rudolph the Red-Nosed Reindeer"
        },
        {
          "pageid": 157627,
          "ns": 0,
          "title": "Christmas Eve"
        },
        {
          "pageid": 159525,
          "ns": 0,
          "title": "Gabriel"
        },
        {
          "pageid": 166368,
          "ns": 0,
          "title": "Mulled wine"
        },
        {
          "pageid": 170506,
          "ns": 0,
          "title": "Christmas card"
        },
        {
          "pageid": 171449,
          "ns": 0,
          "title": "Nativity scene"
        },
        {
          "pageid": 172753,
          "ns": 0,
          "title": "Christmas cracker"
        },
        {
          "pageid": 176827,
          "ns": 0,
          "title": "White Christmas (weather)"
        },
        {
          "pageid": 186071,
          "ns": 0,
          "title": "Golden Globe Award for Best Actor – Motion Picture Musical or Comedy"
        },
        {
          "pageid": 194010,
          "ns": 0,
          "title": "Las Posadas"
        },
        {
          "pageid": 196476,
          "ns": 0,
          "title": "Private Snafu"
        },
        {
          "pageid": 207223,
          "ns": 0,
          "title": "Carol (music)"
        },
        {
          "pageid": 209068,
          "ns": 0,
          "title": "Biblical Magi"
        },
        {
          "pageid": 232111,
          "ns": 0,
          "title": "Candy cane"
        },
        {
          "pageid": 261019,
          "ns": 0,
          "title": "Nativity of Jesus"
        },
        {
          "pageid": 274562,
          "ns": 0,
          "title": "Nine Lessons and Carols"
        },
        {
          "pageid": 277665,
          "ns": 0,
          "title": "Jack Frost"
        },
        {
          "pageid": 355539,
          "ns": 0,
          "title": "Christmas seal"
        },
        {
          "pageid": 366477,
          "ns": 0,
          "title": "Black Friday (shopping)"
        },
        {
          "pageid": 373969,
          "ns": 0,
          "title": "Santa Claus parade"
        },
        {
          "pageid": 376775,
          "ns": 0,
          "title": "List of Christmas dishes"
        },
        {
          "pageid": 381362,
          "ns": 0,
          "title": "Clement Clarke Moore"
        },
        {
          "pageid": 381378,
          "ns": 0,
          "title": "A Visit from St. Nicholas"
        },
        {
          "pageid": 381549,
          "ns": 0,
          "title": "Yule Log (TV program)"
        },
        {
          "pageid": 389578,
          "ns": 0,
          "title": "Twelve Days of Christmas"
        },
        {
          "pageid": 392056,
          "ns": 0,
          "title": "SantaCon"
        },
        {
          "pageid": 392298,
          "ns": 0,
          "title": "List of Christmas carols"
        },
        {
          "pageid": 394081,
          "ns": 0,
          "title": "Seussical"
        },
        {
          "pageid": 394089,
          "ns": 0,
          "title": "Horton Hears a Who!"
        },
        {
          "pageid": 399905,
          "ns": 0,
          "title": "Advent wreath"
        },
        {
          "pageid": 403936,
          "ns": 0,
          "title": "Christmas pudding"
        },
        {
          "pageid": 411562,
          "ns": 0,
          "title": "Xmas"
        },
        {
          "pageid": 414438,
          "ns": 0,
          "title": "Holiday Trail of Lights"
        },
        {
          "pageid": 417262,
          "ns": 0,
          "title": "Christmas truce"
        },
        {
          "pageid": 421897,
          "ns": 0,
          "title": "Turrón"
        },
        {
          "pageid": 423819,
          "ns": 0,
          "title": "Olentzero"
        },
        {
          "pageid": 434499,
          "ns": 0,
          "title": "Tió de Nadal"
        },
        {
          "pageid": 438349,
          "ns": 0,
          "title": "It's a Small World"
        },
        {
          "pageid": 448939,
          "ns": 0,
          "title": "Mummers play"
        },
        {
          "pageid": 471952,
          "ns": 0,
          "title": "King cake"
        },
        {
          "pageid": 476654,
          "ns": 0,
          "title": "Little Christmas"
        },
        {
          "pageid": 520006,
          "ns": 0,
          "title": "Sinterklaas"
        },
        {
          "pageid": 526729,
          "ns": 0,
          "title": "Johnny Marks"
        },
        {
          "pageid": 540638,
          "ns": 0,
          "title": "Apple cider"
        },
        {
          "pageid": 572380,
          "ns": 0,
          "title": "Christmastide"
        },
        {
          "pageid": 572933,
          "ns": 0,
          "title": "The Cat in the Hat Comes Back"
        },
        {
          "pageid": 574577,
          "ns": 0,
          "title": "Hans Conried"
        },
        {
          "pageid": 585174,
          "ns": 0,
          "title": "Companions of Saint Nicholas"
        },
        {
          "pageid": 590469,
          "ns": 0,
          "title": "Fox in Socks"
        },
        {
          "pageid": 600974,
          "ns": 0,
          "title": "Joulupöytä"
        },
        {
          "pageid": 608115,
          "ns": 0,
          "title": "Star of Bethlehem"
        },
        {
          "pageid": 618287,
          "ns": 0,
          "title": "The Father Christmas Letters"
        },
        {
          "pageid": 641293,
          "ns": 0,
          "title": "Green Eggs and Ham"
        },
        {
          "pageid": 652811,
          "ns": 0,
          "title": "Twelfth Night (holiday)"
        },
        {
          "pageid": 657682,
          "ns": 0,
          "title": "List of Family Guy characters"
        },
        {
          "pageid": 659064,
          "ns": 0,
          "title": "Marvin K. Mooney Will You Please Go Now!"
        },
        {
          "pageid": 666585,
          "ns": 0,
          "title": "Befana"
        },
        {
          "pageid": 672113,
          "ns": 0,
          "title": "Wassail"
        },
        {
          "pageid": 705167,
          "ns": 0,
          "title": "Saint Nicholas Day"
        },
        {
          "pageid": 712145,
          "ns": 0,
          "title": "Advent calendar"
        },
        {
          "pageid": 785372,
          "ns": 0,
          "title": "Christmas stocking"
        },
        {
          "pageid": 791483,
          "ns": 0,
          "title": "Christmas lights"
        },
        {
          "pageid": 871053,
          "ns": 0,
          "title": "Tom and Jerry"
        }
      ],
      "categories": [
        {
          "ns": 14,
          "title": "Category:Animated series villains"
        },
        {
          "ns": 14,
          "title": "Category:Christmas characters"
        },
        {
          "ns": 14,
          "title": "Category:Dr. Seuss characters"
        },
        {
          "ns": 14,
          "title": "Category:Fantasy film characters"
        },
        {
          "ns": 14,
          "title": "Category:Fictional characters introduced in 1955"
        },
        {
          "ns": 14,
          "title": "Category:Fictional hermits"
        },
        {
          "ns": 14,
          "title": "Category:Fictional humanoids"
        },
        {
          "ns": 14,
          "title": "Category:Fictional thieves"
        }
      ],
      "contentmodel": "wikitext",
      "pagelanguage": "en",
      "pagelanguagehtmlcode": "en",
      "pagelanguagedir": "ltr",
      "touched": "2018-12-17T22:33:00Z",
      "lastrevid": 874226566,
      "length": 11173,
      "fullurl": "https://en.wikipedia.org/wiki/Grinch",
      "editurl": "https://en.wikipedia.org/w/index.php?title=Grinch&action=edit",
      "canonicalurl": "https://en.wikipedia.org/wiki/Grinch"
    },
    "steps": [
      {
        "pageid": 8840384,
        "ns": 0,
        "title": "Wiederau transmitter",
        "links": [
          {
            "ns": 0,
            "title": "Allies of World War II"
          },
          {
            "ns": 0,
            "title": "Blosenbergturm"
          },
          {
            "ns": 0,
            "title": "Demolition"
          },
          {
            "ns": 0,
            "title": "Explosive"
          },
          {
            "ns": 0,
            "title": "FM broadcasting"
          },
          {
            "ns": 0,
            "title": "Fading"
          },
          {
            "ns": 0,
            "title": "Geographic coordinate system"
          },
          {
            "ns": 0,
            "title": "German Democratic Republic"
          },
          {
            "ns": 0,
            "title": "German reunification"
          },
          {
            "ns": 0,
            "title": "Germany"
          },
          {
            "ns": 0,
            "title": "Groundwave"
          },
          {
            "ns": 0,
            "title": "KHz"
          },
          {
            "ns": 0,
            "title": "KW"
          },
          {
            "ns": 0,
            "title": "Medium-wave"
          },
          {
            "ns": 0,
            "title": "Monopole antenna"
          },
          {
            "ns": 0,
            "title": "Mühlacker Transmitter"
          },
          {
            "ns": 0,
            "title": "Pegau"
          },
          {
            "ns": 0,
            "title": "Radio jamming"
          },
          {
            "ns": 0,
            "title": "Radio masts and towers"
          },
          {
            "ns": 0,
            "title": "Radio navigation"
          },
          {
            "ns": 0,
            "title": "Radio network"
          },
          {
            "ns": 0,
            "title": "Radio programming"
          },
          {
            "ns": 0,
            "title": "Saxony"
          },
          {
            "ns": 0,
            "title": "Short wave"
          },
          {
            "ns": 0,
            "title": "Skywave"
          },
          {
            "ns": 0,
            "title": "Soviet Military Administration in Germany"
          },
          {
            "ns": 0,
            "title": "Strategic bombing during World War II"
          },
          {
            "ns": 0,
            "title": "Structurae"
          },
          {
            "ns": 0,
            "title": "Television"
          },
          {
            "ns": 0,
            "title": "Transmitter Wachenbrunn"
          },
          {
            "ns": 0,
            "title": "Voice of Russia"
          },
          {
            "ns": 0,
            "title": "Wave plan of Geneva"
          },
          {
            "ns": 0,
            "title": "Wiederau"
          },
          {
            "ns": 0,
            "title": "World War II"
          }
        ],
        "linkshere": [
          {
            "pageid": 1273047,
            "ns": 0,
            "title": "Lattice tower"
          },
          {
            "pageid": 1384760,
            "ns": 0,
            "title": "List of European medium wave transmitters"
          },
          {
            "pageid": 1625783,
            "ns": 0,
            "title": "List of transmission sites"
          },
          {
            "pageid": 1849790,
            "ns": 0,
            "title": "List of tallest structures in Germany"
          },
          {
            "pageid": 8840668,
            "ns": 0,
            "title": "Golm transmitter"
          }
        ],
        "categories": [
          {
            "ns": 14,
            "title": "Category:Radio masts and towers in Germany"
          }
        ],
        "contentmodel": "wikitext",
        "pagelanguage": "en",
        "pagelanguagehtmlcode": "en",
        "pagelanguagedir": "ltr",
        "touched": "2018-12-01T02:18:50Z",
        "lastrevid": 857563290,
        "length": 6429,
        "fullurl": "https://en.wikipedia.org/wiki/Wiederau_transmitter",
        "editurl": "https://en.wikipedia.org/w/index.php?title=Wiederau_transmitter&action=edit",
        "canonicalurl": "https://en.wikipedia.org/wiki/Wiederau_transmitter",
        "destinations": [
          "Voice of Russia",
          "Groundwave",
          "Mühlacker Transmitter",
          "Structurae",
          "Radio navigation"
        ],
        "clues": [
          "The suspect asked for directions to an article mentioned in 'U.S. National Geodetic Survey'",
          "The suspect asked for directions to an article mentioned in 'Direction finding'",
          "The suspect expressed an interest in 'Category:Angle'",
          "The suspect asked for directions to an article mentioned in 'SantaCon'",
          "The suspect asked for directions to an article mentioned in 'Boxing Day'"
        ]
      },
      {
        "pageid": 153095,
        "ns": 0,
        "title": "Radio navigation",
        "links": [
          {
            "ns": 0,
            "title": "AM radio"
          },
          {
            "ns": 0,
            "title": "Aircraft"
          },
          {
            "ns": 0,
            "title": "Airport"
          },
          {
            "ns": 0,
            "title": "Airway (aviation)"
          },
          {
            "ns": 0,
            "title": "Alpha (radio navigation)"
          },
          {
            "ns": 0,
            "title": "Ambrose Channel pilot cable"
          },
          {
            "ns": 0,
            "title": "Amelia Earhart"
          },
          {
            "ns": 0,
            "title": "American Practical Navigator"
          },
          {
            "ns": 0,
            "title": "Atlantic Ocean"
          },
          {
            "ns": 0,
            "title": "Atomic clock"
          },
          {
            "ns": 0,
            "title": "Automatic direction finder"
          },
          {
            "ns": 0,
            "title": "Battle of the Beams"
          },
          {
            "ns": 0,
            "title": "BeiDou Navigation Satellite System"
          },
          {
            "ns": 0,
            "title": "Blind landing"
          },
          {
            "ns": 0,
            "title": "Bomber"
          },
          {
            "ns": 0,
            "title": "Bombsight"
          },
          {
            "ns": 0,
            "title": "Chain Home"
          },
          {
            "ns": 0,
            "title": "Cockpit (aviation)"
          },
          {
            "ns": 0,
            "title": "DORIS (geodesy)"
          },
          {
            "ns": 0,
            "title": "Decca Navigator System"
          },
          {
            "ns": 0,
            "title": "Differential GPS"
          },
          {
            "ns": 0,
            "title": "Direction (geometry)"
          },
          {
            "ns": 0,
            "title": "Directional antenna"
          },
          {
            "ns": 0,
            "title": "Distance measuring equipment"
          },
          {
            "ns": 0,
            "title": "Doppler shift"
          },
          {
            "ns": 0,
            "title": "EGNOS"
          },
          {
            "ns": 0,
            "title": "Earth"
          },
          {
            "ns": 0,
            "title": "Electric beacon"
          },
          {
            "ns": 0,
            "title": "Electronic warfare"
          },
          {
            "ns": 0,
            "title": "European Geostationary Navigation Overlay Service"
          },
          {
            "ns": 0,
            "title": "GLONASS"
          },
          {
            "ns": 0,
            "title": "GNSS augmentation"
          },
          {
            "ns": 0,
            "title": "GNSS reflectometry"
          },
          {
            "ns": 0,
            "title": "GPS"
          },
          {
            "ns": 0,
            "title": "GPS Aided GEO Augmented Navigation"
          },
          {
            "ns": 0,
            "title": "GPS·C"
          },
          {
            "ns": 0,
            "title": "Galileo (satellite navigation)"
          },
          {
            "ns": 0,
            "title": "Galileo positioning system"
          },
          {
            "ns": 0,
            "title": "Gee-H (navigation)"
          },
          {
            "ns": 0,
            "title": "Gee (navigation)"
          },
          {
            "ns": 0,
            "title": "Global Navigation Satellite System"
          },
          {
            "ns": 0,
            "title": "Global Positioning System"
          },
          {
            "ns": 0,
            "title": "Hyperbolic navigation"
          },
          {
            "ns": 0,
            "title": "Identification friend or foe"
          },
          {
            "ns": 0,
            "title": "Indian Regional Navigation Satellite System"
          },
          {
            "ns": 0,
            "title": "Instrument approach"
          },
          {
            "ns": 0,
            "title": "Instrument flight rules"
          },
          {
            "ns": 0,
            "title": "Instrument landing system"
          },
          {
            "ns": 0,
            "title": "Instrument landing system glide path"
          },
          {
            "ns": 0,
            "title": "Instrument landing system localizer"
          },
          {
            "ns": 0,
            "title": "Integrated circuit"
          },
          {
            "ns": 0,
            "title": "Intelligence service"
          },
          {
            "ns": 0,
            "title": "International Standard Book Number"
          },
          {
            "ns": 0,
            "title": "Jeep"
          },
          {
            "ns": 0,
            "title": "Joint Precision Approach and Landing System"
          },
          {
            "ns": 0,
            "title": "Kalman filter"
          },
          {
            "ns": 0,
            "title": "LORAN"
          },
          {
            "ns": 0,
            "title": "Line-line intersection"
          },
          {
            "ns": 0,
            "title": "List of World War II British naval radar"
          },
          {
            "ns": 0,
            "title": "Local Area Augmentation System"
          },
          {
            "ns": 0,
            "title": "Lockheed Model 10 Electra"
          },
          {
            "ns": 0,
            "title": "Loop antenna"
          },
          {
            "ns": 0,
            "title": "Loran-C"
          },
          {
            "ns": 0,
            "title": "Lorenz beam"
          },
          {
            "ns": 0,
            "title": "Low frequency"
          },
          {
            "ns": 0,
            "title": "Low frequency radio range"
          },
          {
            "ns": 0,
            "title": "MTSAT Satellite Augmentation System"
          },
          {
            "ns": 0,
            "title": "Marker beacon"
          },
          {
            "ns": 0,
            "title": "Microwave landing system"
          },
          {
            "ns": 0,
            "title": "Morse code"
          },
          {
            "ns": 0,
            "title": "Multilateration"
          },
          {
            "ns": 0,
            "title": "National Diet Library"
          },
          {
            "ns": 0,
            "title": "Navigational chart"
          },
          {
            "ns": 0,
            "title": "Networked Transport of RTCM via Internet Protocol"
          },
          {
            "ns": 0,
            "title": "Non-directional beacon"
          },
          {
            "ns": 0,
            "title": "Nondirectional beacon"
          },
          {
            "ns": 0,
            "title": "Oboe (navigation)"
          },
          {
            "ns": 0,
            "title": "Omega Navigation System"
          },
          {
            "ns": 0,
            "title": "Orfordness Beacon"
          },
          {
            "ns": 0,
            "title": "Oscilloscope"
          },
          {
            "ns": 0,
            "title": "Phase (waves)"
          },
          {
            "ns": 0,
            "title": "Position fixing"
          },
          {
            "ns": 0,
            "title": "Quasi-Zenith Satellite System"
          },
          {
            "ns": 0,
            "title": "RAF Bomber Command"
          },
          {
            "ns": 0,
            "title": "RAF Coastal Command"
          },
          {
            "ns": 0,
            "title": "Radar"
          },
          {
            "ns": 0,
            "title": "Radar navigation"
          },
          {
            "ns": 0,
            "title": "Radio"
          },
          {
            "ns": 0,
            "title": "Radio direction finder"
          },
          {
            "ns": 0,
            "title": "Radio fix"
          },
          {
            "ns": 0,
            "title": "Radio station"
          },
          {
            "ns": 0,
            "title": "Radiodetermination"
          },
          {
            "ns": 0,
            "title": "Radiolocation"
          },
          {
            "ns": 0,
            "title": "Ranging"
          },
          {
            "ns": 0,
            "title": "Real-time locating"
          },
          {
            "ns": 0,
            "title": "Rebecca/Eureka transponding radar"
          },
          {
            "ns": 0,
            "title": "Receiver Autonomous Integrity Monitoring"
          },
          {
            "ns": 0,
            "title": "SCR-277"
          },
          {
            "ns": 0,
            "title": "Satellite navigation"
          },
          {
            "ns": 0,
            "title": "Satellite navigation system"
          }
        ],
        "linkshere": [
          {
            "pageid": 2039,
            "ns": 0,
            "title": "Avionics"
          },
          {
            "pageid": 8949,
            "ns": 0,
            "title": "Decca Navigator System"
          },
          {
            "pageid": 18376,
            "ns": 0,
            "title": "Loran-C"
          },
          {
            "pageid": 18935,
            "ns": 0,
            "title": "Morse code"
          },
          {
            "pageid": 21854,
            "ns": 0,
            "title": "Navigation"
          },
          {
            "pageid": 25522,
            "ns": 0,
            "title": "History of radio"
          },
          {
            "pageid": 26945,
            "ns": 0,
            "title": "Saint Helena"
          },
          {
            "pageid": 28738,
            "ns": 0,
            "title": "Synchronization"
          },
          {
            "pageid": 31049,
            "ns": 0,
            "title": "Time transfer"
          },
          {
            "pageid": 32740,
            "ns": 0,
            "title": "V bomber"
          },
          {
            "pageid": 57974,
            "ns": 0,
            "title": "Battle of Britain"
          },
          {
            "pageid": 78446,
            "ns": 0,
            "title": "Doppler radar"
          },
          {
            "pageid": 79537,
            "ns": 0,
            "title": "Flight instruments"
          },
          {
            "pageid": 82981,
            "ns": 0,
            "title": "Charles Lindbergh"
          },
          {
            "pageid": 85234,
            "ns": 0,
            "title": "Amelia Earhart"
          },
          {
            "pageid": 112274,
            "ns": 0,
            "title": "The Blitz"
          },
          {
            "pageid": 143335,
            "ns": 0,
            "title": "Celestial navigation"
          },
          {
            "pageid": 152678,
            "ns": 0,
            "title": "Grantham"
          },
          {
            "pageid": 160505,
            "ns": 0,
            "title": "Very low frequency"
          },
          {
            "pageid": 167815,
            "ns": 0,
            "title": "Douglas DC-3"
          },
          {
            "pageid": 169148,
            "ns": 0,
            "title": "Vickers Valiant"
          },
          {
            "pageid": 181557,
            "ns": 0,
            "title": "Waypoint"
          },
          {
            "pageid": 185868,
            "ns": 0,
            "title": "Wireless"
          },
          {
            "pageid": 192108,
            "ns": 0,
            "title": "Radio direction finder"
          },
          {
            "pageid": 192479,
            "ns": 0,
            "title": "Battle of the Beams"
          },
          {
            "pageid": 249888,
            "ns": 0,
            "title": "Royal Radar Establishment"
          },
          {
            "pageid": 271195,
            "ns": 0,
            "title": "Radio propagation"
          },
          {
            "pageid": 276900,
            "ns": 0,
            "title": "Omega (navigation system)"
          },
          {
            "pageid": 286550,
            "ns": 0,
            "title": "Safety-critical system"
          },
          {
            "pageid": 316393,
            "ns": 0,
            "title": "Air navigation"
          },
          {
            "pageid": 317574,
            "ns": 0,
            "title": "Samora Machel"
          },
          {
            "pageid": 351603,
            "ns": 0,
            "title": "Piloting (navigation)"
          },
          {
            "pageid": 351899,
            "ns": 0,
            "title": "VHF omnidirectional range"
          },
          {
            "pageid": 366696,
            "ns": 0,
            "title": "Sukhoi Su-25"
          },
          {
            "pageid": 375290,
            "ns": 0,
            "title": "Operation Ivory Coast"
          },
          {
            "pageid": 425509,
            "ns": 0,
            "title": "McDonnell Douglas T-45 Goshawk"
          },
          {
            "pageid": 474706,
            "ns": 0,
            "title": "RAF Bomber Command"
          },
          {
            "pageid": 491787,
            "ns": 0,
            "title": "Position fixing"
          },
          {
            "pageid": 536357,
            "ns": 0,
            "title": "Ford Trimotor"
          },
          {
            "pageid": 567983,
            "ns": 0,
            "title": "LZ 127 Graf Zeppelin"
          },
          {
            "pageid": 590945,
            "ns": 0,
            "title": "Gee (navigation)"
          },
          {
            "pageid": 634183,
            "ns": 0,
            "title": "Radio spectrum"
          },
          {
            "pageid": 653812,
            "ns": 0,
            "title": "Telefunken"
          },
          {
            "pageid": 682931,
            "ns": 0,
            "title": "Aviation safety"
          },
          {
            "pageid": 729760,
            "ns": 0,
            "title": "List of United States Navy ratings"
          },
          {
            "pageid": 820724,
            "ns": 0,
            "title": "Direction finding"
          },
          {
            "pageid": 847029,
            "ns": 0,
            "title": "Airline transport pilot licence"
          },
          {
            "pageid": 854435,
            "ns": 0,
            "title": "U.S. National Geodetic Survey"
          },
          {
            "pageid": 859962,
            "ns": 0,
            "title": "Glossary of German military terms"
          },
          {
            "pageid": 862429,
            "ns": 0,
            "title": "David Edward Hughes"
          },
          {
            "pageid": 892747,
            "ns": 0,
            "title": "Pathfinder (RAF)"
          },
          {
            "pageid": 921111,
            "ns": 0,
            "title": "Frederick Lindemann, 1st Viscount Cherwell"
          },
          {
            "pageid": 977047,
            "ns": 0,
            "title": "H2S (radar)"
          },
          {
            "pageid": 977092,
            "ns": 0,
            "title": "Naxos radar detector"
          },
          {
            "pageid": 1024004,
            "ns": 0,
            "title": "Homebuilt aircraft"
          },
          {
            "pageid": 1069414,
            "ns": 0,
            "title": "Airway (aviation)"
          },
          {
            "pageid": 1182106,
            "ns": 0,
            "title": "Buttonville Municipal Airport"
          },
          {
            "pageid": 1246322,
            "ns": 0,
            "title": "Mykines, Faroe Islands"
          },
          {
            "pageid": 1280053,
            "ns": 0,
            "title": "History of radar"
          },
          {
            "pageid": 1409379,
            "ns": 0,
            "title": "Gee-H (navigation)"
          },
          {
            "pageid": 1416009,
            "ns": 0,
            "title": "Airband"
          },
          {
            "pageid": 1416223,
            "ns": 0,
            "title": "Orford Ness"
          },
          {
            "pageid": 1444212,
            "ns": 0,
            "title": "Telecommunications Research Establishment"
          },
          {
            "pageid": 1515653,
            "ns": 0,
            "title": "Satellite navigation"
          },
          {
            "pageid": 1545979,
            "ns": 0,
            "title": "Minimum reception altitude"
          },
          {
            "pageid": 1905405,
            "ns": 0,
            "title": "Differential GPS"
          },
          {
            "pageid": 1941545,
            "ns": 0,
            "title": "Vertical stabilizer"
          },
          {
            "pageid": 1986817,
            "ns": 0,
            "title": "Magnetic deviation"
          },
          {
            "pageid": 2047887,
            "ns": 0,
            "title": "Harold E. Johns"
          },
          {
            "pageid": 2048773,
            "ns": 0,
            "title": "Letter beacon"
          },
          {
            "pageid": 2208016,
            "ns": 0,
            "title": "Geolocation"
          },
          {
            "pageid": 2349852,
            "ns": 0,
            "title": "Index of radiation articles"
          },
          {
            "pageid": 2490859,
            "ns": 0,
            "title": "Flight management system"
          },
          {
            "pageid": 2509184,
            "ns": 0,
            "title": "Canada Flight Supplement"
          },
          {
            "pageid": 2777270,
            "ns": 0,
            "title": "USCGC Itasca (1929)"
          },
          {
            "pageid": 3173887,
            "ns": 0,
            "title": "Heinz-Wolfgang Schnaufer"
          },
          {
            "pageid": 3219130,
            "ns": 0,
            "title": "List of Rainbow Codes"
          },
          {
            "pageid": 3509072,
            "ns": 0,
            "title": "Alpha (navigation)"
          },
          {
            "pageid": 3516652,
            "ns": 0,
            "title": "Multilateration"
          },
          {
            "pageid": 3518572,
            "ns": 0,
            "title": "Kaliakra"
          },
          {
            "pageid": 3601218,
            "ns": 0,
            "title": "DUATS"
          },
          {
            "pageid": 3738867,
            "ns": 0,
            "title": "Sunday Times Golden Globe Race"
          },
          {
            "pageid": 3855928,
            "ns": 0,
            "title": "Procedural control"
          },
          {
            "pageid": 3972623,
            "ns": 0,
            "title": "SCR-584 radar"
          },
          {
            "pageid": 4312667,
            "ns": 0,
            "title": "Spectrum management"
          },
          {
            "pageid": 4885491,
            "ns": 0,
            "title": "Rebecca/Eureka transponding radar"
          },
          {
            "pageid": 5138454,
            "ns": 0,
            "title": "Bombsight"
          },
          {
            "pageid": 5540651,
            "ns": 0,
            "title": "Microwave transmission"
          },
          {
            "pageid": 5619549,
            "ns": 0,
            "title": "Microsoft Flight Simulator X"
          },
          {
            "pageid": 5817669,
            "ns": 0,
            "title": "Mykines, Mykines"
          },
          {
            "pageid": 6376380,
            "ns": 0,
            "title": "CHAYKA"
          },
          {
            "pageid": 6638573,
            "ns": 0,
            "title": "Navigational aid"
          },
          {
            "pageid": 6867743,
            "ns": 0,
            "title": "Astrodome (aeronautics)"
          },
          {
            "pageid": 6914425,
            "ns": 0,
            "title": "Telefunken Kompass Sender"
          },
          {
            "pageid": 6954110,
            "ns": 0,
            "title": "Frank Cordell"
          },
          {
            "pageid": 7631057,
            "ns": 0,
            "title": "1986 Mozambican Tupolev Tu-134 crash"
          },
          {
            "pageid": 7720031,
            "ns": 0,
            "title": "BCPA Flight 304"
          },
          {
            "pageid": 7771934,
            "ns": 0,
            "title": "British United Air Ferries"
          },
          {
            "pageid": 8423613,
            "ns": 0,
            "title": "Pearl Aviation"
          },
          {
            "pageid": 8840384,
            "ns": 0,
            "title": "Wiederau transmitter"
          }
        ],
        "categories": [
          {
            "ns": 14,
            "title": "Category:Air traffic control"
          },
          {
            "ns": 14,
            "title": "Category:Angle"
          },
          {
            "ns": 14,
            "title": "Category:Euclidean geometry"
          },
          {
            "ns": 14,
            "title": "Category:Navigation"
          },
          {
            "ns": 14,
            "title": "Category:Radio navigation"
          },
          {
            "ns": 14,
            "title": "Category:Surveying"
          },
          {
            "ns": 14,
            "title": "Category:Wireless locating"
          }
        ],
        "contentmodel": "wikitext",
        "pagelanguage": "en",
        "pagelanguagehtmlcode": "en",
        "pagelanguagedir": "ltr",
        "touched": "2018-12-14T17:44:18Z",
        "lastrevid": 821781161,
        "length": 30767,
        "fullurl": "https://en.wikipedia.org/wiki/Radio_navigation",
        "editurl": "https://en.wikipedia.org/w/index.php?title=Radio_navigation&action=edit",
        "canonicalurl": "https://en.wikipedia.org/wiki/Radio_navigation",
        "destinations": [
          "Orfordness Beacon",
          "List of World War II British naval radar",
          "Gee (navigation)",
          "Identification friend or foe",
          "Indian Regional Navigation Satellite System"
        ],
        "clues": [
          "The suspect asked for directions to an article mentioned in 'Very low frequency'",
          "The suspect expressed an interest in 'Category:Satellite constellations'",
          "The suspect asked for directions to an article mentioned in 'National Remote Sensing Centre'",
          "The suspect asked for directions to an article mentioned in 'Inter-Range Instrumentation Group'",
          "The suspect expressed an interest in 'Category:Satellite navigation systems'"
        ]
      },
      {
        "pageid": 9936493,
        "ns": 0,
        "title": "Indian Regional Navigation Satellite System",
        "links": [
          {
            "ns": 0,
            "title": "130th meridian east"
          },
          {
            "ns": 0,
            "title": "30th meridian east"
          },
          {
            "ns": 0,
            "title": "30th parallel south"
          },
          {
            "ns": 0,
            "title": "50th parallel north"
          },
          {
            "ns": 0,
            "title": "ANUSAT"
          },
          {
            "ns": 0,
            "title": "ATA (radio station)"
          },
          {
            "ns": 0,
            "title": "Aditya-L1"
          },
          {
            "ns": 0,
            "title": "Advanced Technology Vehicle"
          },
          {
            "ns": 0,
            "title": "Analemma"
          },
          {
            "ns": 0,
            "title": "Antrix Corporation"
          },
          {
            "ns": 0,
            "title": "Ariane Passenger Payload Experiment"
          },
          {
            "ns": 0,
            "title": "Aryabhata (satellite)"
          },
          {
            "ns": 0,
            "title": "AstroSat-2"
          },
          {
            "ns": 0,
            "title": "Astrosat"
          },
          {
            "ns": 0,
            "title": "Atomic clock"
          },
          {
            "ns": 0,
            "title": "Augmented Satellite Launch Vehicle"
          },
          {
            "ns": 0,
            "title": "BPC (time signal)"
          },
          {
            "ns": 0,
            "title": "BPL (time service)"
          },
          {
            "ns": 0,
            "title": "BPM (time service)"
          },
          {
            "ns": 0,
            "title": "BSF (time service)"
          },
          {
            "ns": 0,
            "title": "BeiDou Navigation Satellite System"
          },
          {
            "ns": 0,
            "title": "Beta (time signal)"
          },
          {
            "ns": 0,
            "title": "Bhaskara (satellite)"
          },
          {
            "ns": 0,
            "title": "Binary offset carrier"
          },
          {
            "ns": 0,
            "title": "Byalalu"
          },
          {
            "ns": 0,
            "title": "CE-20"
          },
          {
            "ns": 0,
            "title": "CE-7.5"
          },
          {
            "ns": 0,
            "title": "CHU (radio station)"
          },
          {
            "ns": 0,
            "title": "Cartosat"
          },
          {
            "ns": 0,
            "title": "Cartosat-1"
          },
          {
            "ns": 0,
            "title": "Cartosat-2"
          },
          {
            "ns": 0,
            "title": "Cartosat-2A"
          },
          {
            "ns": 0,
            "title": "Cartosat-2B"
          },
          {
            "ns": 0,
            "title": "Cartosat-2C"
          },
          {
            "ns": 0,
            "title": "Cartosat-2D"
          },
          {
            "ns": 0,
            "title": "Cartosat-2E"
          },
          {
            "ns": 0,
            "title": "Cartosat-2F"
          },
          {
            "ns": 0,
            "title": "Cartosat-3"
          },
          {
            "ns": 0,
            "title": "Chandrayaan-1"
          },
          {
            "ns": 0,
            "title": "Chandrayaan-2"
          },
          {
            "ns": 0,
            "title": "Chandrayaan programme"
          },
          {
            "ns": 0,
            "title": "Code-division multiple access"
          },
          {
            "ns": 0,
            "title": "Coordinated Universal Time"
          },
          {
            "ns": 0,
            "title": "Crew Module Atmospheric Re-entry Experiment"
          },
          {
            "ns": 0,
            "title": "DCF77"
          },
          {
            "ns": 0,
            "title": "DORIS (geodesy)"
          },
          {
            "ns": 0,
            "title": "Deccan Chronicle"
          },
          {
            "ns": 0,
            "title": "Department of Space"
          },
          {
            "ns": 0,
            "title": "Development and Educational Communication Unit"
          },
          {
            "ns": 0,
            "title": "Discrete Global Grid"
          },
          {
            "ns": 0,
            "title": "ED50"
          },
          {
            "ns": 0,
            "title": "Earth's circumference"
          },
          {
            "ns": 0,
            "title": "Earth radius"
          },
          {
            "ns": 0,
            "title": "Encryption"
          },
          {
            "ns": 0,
            "title": "Ephemeris"
          },
          {
            "ns": 0,
            "title": "Equator"
          },
          {
            "ns": 0,
            "title": "European Geostationary Navigation Overlay Service"
          },
          {
            "ns": 0,
            "title": "European Terrestrial Reference System 1989"
          },
          {
            "ns": 0,
            "title": "FM band"
          },
          {
            "ns": 0,
            "title": "Figure of the Earth"
          },
          {
            "ns": 0,
            "title": "Frequency spectrum"
          },
          {
            "ns": 0,
            "title": "GEO Imaging Satellite"
          },
          {
            "ns": 0,
            "title": "GLONASS"
          },
          {
            "ns": 0,
            "title": "GNSS"
          },
          {
            "ns": 0,
            "title": "GNSS augmentation"
          },
          {
            "ns": 0,
            "title": "GNSS reflectometry"
          },
          {
            "ns": 0,
            "title": "GPS-aided GEO augmented navigation"
          },
          {
            "ns": 0,
            "title": "GPS Aided GEO Augmented Navigation"
          },
          {
            "ns": 0,
            "title": "GPS Almanac"
          },
          {
            "ns": 0,
            "title": "GPS·C"
          },
          {
            "ns": 0,
            "title": "GRS 80"
          },
          {
            "ns": 0,
            "title": "GSAT"
          },
          {
            "ns": 0,
            "title": "GSAT-1"
          },
          {
            "ns": 0,
            "title": "GSAT-10"
          },
          {
            "ns": 0,
            "title": "GSAT-11"
          },
          {
            "ns": 0,
            "title": "GSAT-12"
          },
          {
            "ns": 0,
            "title": "GSAT-14"
          },
          {
            "ns": 0,
            "title": "GSAT-15"
          },
          {
            "ns": 0,
            "title": "GSAT-16"
          },
          {
            "ns": 0,
            "title": "GSAT-17"
          },
          {
            "ns": 0,
            "title": "GSAT-18"
          },
          {
            "ns": 0,
            "title": "GSAT-19"
          },
          {
            "ns": 0,
            "title": "GSAT-2"
          },
          {
            "ns": 0,
            "title": "GSAT-20"
          },
          {
            "ns": 0,
            "title": "GSAT-22"
          },
          {
            "ns": 0,
            "title": "GSAT-23"
          },
          {
            "ns": 0,
            "title": "GSAT-24"
          },
          {
            "ns": 0,
            "title": "GSAT-29"
          },
          {
            "ns": 0,
            "title": "GSAT-3"
          },
          {
            "ns": 0,
            "title": "GSAT-4"
          },
          {
            "ns": 0,
            "title": "GSAT-5P"
          },
          {
            "ns": 0,
            "title": "GSAT-6A"
          },
          {
            "ns": 0,
            "title": "GSAT-7"
          },
          {
            "ns": 0,
            "title": "GSAT-7A"
          },
          {
            "ns": 0,
            "title": "GSAT-8"
          },
          {
            "ns": 0,
            "title": "Gaganyaan"
          },
          {
            "ns": 0,
            "title": "Galileo (satellite navigation)"
          },
          {
            "ns": 0,
            "title": "Geo URI scheme"
          },
          {
            "ns": 0,
            "title": "Geodesic"
          },
          {
            "ns": 0,
            "title": "Geodesy"
          }
        ],
        "linkshere": [
          {
            "pageid": 11866,
            "ns": 0,
            "title": "Global Positioning System"
          },
          {
            "pageid": 12608,
            "ns": 0,
            "title": "Geodesy"
          },
          {
            "pageid": 13009,
            "ns": 0,
            "title": "Galileo (satellite navigation)"
          },
          {
            "pageid": 17617,
            "ns": 0,
            "title": "Longitude"
          },
          {
            "pageid": 21854,
            "ns": 0,
            "title": "Navigation"
          },
          {
            "pageid": 31049,
            "ns": 0,
            "title": "Time transfer"
          },
          {
            "pageid": 40239,
            "ns": 0,
            "title": "Geosynchronous orbit"
          },
          {
            "pageid": 46149,
            "ns": 0,
            "title": "GLONASS"
          },
          {
            "pageid": 48361,
            "ns": 0,
            "title": "Geographic coordinate system"
          },
          {
            "pageid": 57980,
            "ns": 0,
            "title": "Shortwave radio"
          },
          {
            "pageid": 62682,
            "ns": 0,
            "title": "A. P. J. Abdul Kalam"
          },
          {
            "pageid": 87327,
            "ns": 0,
            "title": "Polar Satellite Launch Vehicle"
          },
          {
            "pageid": 91096,
            "ns": 0,
            "title": "Geodesic"
          },
          {
            "pageid": 133996,
            "ns": 0,
            "title": "Transit (satellite)"
          },
          {
            "pageid": 142999,
            "ns": 0,
            "title": "Circle of latitude"
          },
          {
            "pageid": 146689,
            "ns": 0,
            "title": "Earth radius"
          },
          {
            "pageid": 153095,
            "ns": 0,
            "title": "Radio navigation"
          },
          {
            "pageid": 160505,
            "ns": 0,
            "title": "Very low frequency"
          },
          {
            "pageid": 160518,
            "ns": 0,
            "title": "Low frequency"
          },
          {
            "pageid": 164511,
            "ns": 0,
            "title": "Radio clock"
          },
          {
            "pageid": 176244,
            "ns": 0,
            "title": "Geoid"
          },
          {
            "pageid": 176813,
            "ns": 0,
            "title": "Physical geodesy"
          },
          {
            "pageid": 178937,
            "ns": 0,
            "title": "High frequency"
          },
          {
            "pageid": 180855,
            "ns": 0,
            "title": "Kalman filter"
          },
          {
            "pageid": 182672,
            "ns": 0,
            "title": "Time from NPL (MSF)"
          },
          {
            "pageid": 182679,
            "ns": 0,
            "title": "Time signal"
          },
          {
            "pageid": 199645,
            "ns": 0,
            "title": "European Geostationary Navigation Overlay Service"
          },
          {
            "pageid": 233636,
            "ns": 0,
            "title": "Spherical Earth"
          },
          {
            "pageid": 233654,
            "ns": 0,
            "title": "World Geodetic System"
          },
          {
            "pageid": 233663,
            "ns": 0,
            "title": "History of geodesy"
          },
          {
            "pageid": 233668,
            "ns": 0,
            "title": "Figure of the Earth"
          },
          {
            "pageid": 285856,
            "ns": 0,
            "title": "CHU (radio station)"
          },
          {
            "pageid": 285860,
            "ns": 0,
            "title": "Radio VNG"
          },
          {
            "pageid": 286957,
            "ns": 0,
            "title": "BPM (time service)"
          },
          {
            "pageid": 316393,
            "ns": 0,
            "title": "Air navigation"
          },
          {
            "pageid": 325620,
            "ns": 0,
            "title": "WWV (radio station)"
          },
          {
            "pageid": 325626,
            "ns": 0,
            "title": "WWVH"
          },
          {
            "pageid": 325728,
            "ns": 0,
            "title": "WWVB"
          },
          {
            "pageid": 327022,
            "ns": 0,
            "title": "RWM"
          },
          {
            "pageid": 335268,
            "ns": 0,
            "title": "JJY"
          },
          {
            "pageid": 336118,
            "ns": 0,
            "title": "DCF77"
          },
          {
            "pageid": 358970,
            "ns": 0,
            "title": "BeiDou Navigation Satellite System"
          },
          {
            "pageid": 360033,
            "ns": 0,
            "title": "Ordnance Survey National Grid"
          },
          {
            "pageid": 362086,
            "ns": 0,
            "title": "Rakesh Sharma"
          },
          {
            "pageid": 442197,
            "ns": 0,
            "title": "YVTO"
          },
          {
            "pageid": 510905,
            "ns": 0,
            "title": "Geomatics"
          },
          {
            "pageid": 531552,
            "ns": 0,
            "title": "Ground proximity warning system"
          },
          {
            "pageid": 621182,
            "ns": 0,
            "title": "Reference ellipsoid"
          },
          {
            "pageid": 633244,
            "ns": 0,
            "title": "Indian National Satellite System"
          },
          {
            "pageid": 711716,
            "ns": 0,
            "title": "GRS 80"
          },
          {
            "pageid": 740275,
            "ns": 0,
            "title": "ISO 6709"
          },
          {
            "pageid": 862061,
            "ns": 0,
            "title": "Wide Area Augmentation System"
          },
          {
            "pageid": 995417,
            "ns": 0,
            "title": "Geodetic datum"
          },
          {
            "pageid": 1005861,
            "ns": 0,
            "title": "Geosynchronous Satellite Launch Vehicle"
          },
          {
            "pageid": 1016885,
            "ns": 0,
            "title": "European Terrestrial Reference System 1989"
          },
          {
            "pageid": 1019722,
            "ns": 0,
            "title": "Indian Space Research Organisation"
          },
          {
            "pageid": 1024431,
            "ns": 0,
            "title": "Chandrayaan-1"
          },
          {
            "pageid": 1080219,
            "ns": 0,
            "title": "Inter-University Centre for Astronomy and Astrophysics"
          },
          {
            "pageid": 1090611,
            "ns": 0,
            "title": "Irish grid reference system"
          },
          {
            "pageid": 1104242,
            "ns": 0,
            "title": "Vikram Sarabhai"
          },
          {
            "pageid": 1129259,
            "ns": 0,
            "title": "Vikram Sarabhai Space Centre"
          },
          {
            "pageid": 1248939,
            "ns": 0,
            "title": "Allouis longwave transmitter"
          },
          {
            "pageid": 1250649,
            "ns": 0,
            "title": "Tata Institute of Fundamental Research"
          },
          {
            "pageid": 1286587,
            "ns": 0,
            "title": "Satish Dhawan"
          },
          {
            "pageid": 1290804,
            "ns": 0,
            "title": "Anthorn Radio Station"
          },
          {
            "pageid": 1300398,
            "ns": 0,
            "title": "Beta (time signal)"
          },
          {
            "pageid": 1336421,
            "ns": 0,
            "title": "Satellite geodesy"
          },
          {
            "pageid": 1351149,
            "ns": 0,
            "title": "National Remote Sensing Centre"
          },
          {
            "pageid": 1416719,
            "ns": 0,
            "title": "Thumba"
          },
          {
            "pageid": 1424473,
            "ns": 0,
            "title": "Krishnaswamy Kasturirangan"
          },
          {
            "pageid": 1424483,
            "ns": 0,
            "title": "Udupi Ramachandra Rao"
          },
          {
            "pageid": 1515653,
            "ns": 0,
            "title": "Satellite navigation"
          },
          {
            "pageid": 1516323,
            "ns": 0,
            "title": "Military Grid Reference System"
          },
          {
            "pageid": 1691194,
            "ns": 0,
            "title": "National Centre for Radio Astrophysics"
          },
          {
            "pageid": 1752490,
            "ns": 0,
            "title": "Instrument approach"
          },
          {
            "pageid": 1851168,
            "ns": 0,
            "title": "Indian Remote Sensing Programme"
          },
          {
            "pageid": 1851379,
            "ns": 0,
            "title": "Cartosat-1"
          },
          {
            "pageid": 1851405,
            "ns": 0,
            "title": "HAMSAT"
          },
          {
            "pageid": 1873251,
            "ns": 0,
            "title": "Indian Astronomical Observatory"
          },
          {
            "pageid": 1905405,
            "ns": 0,
            "title": "Differential GPS"
          },
          {
            "pageid": 1984084,
            "ns": 0,
            "title": "Aryabhata (satellite)"
          },
          {
            "pageid": 2042949,
            "ns": 0,
            "title": "ED50"
          },
          {
            "pageid": 2391257,
            "ns": 0,
            "title": "GSAT-3"
          },
          {
            "pageid": 2392999,
            "ns": 0,
            "title": "Indian Institute of Astrophysics"
          },
          {
            "pageid": 2440905,
            "ns": 0,
            "title": "Ariane Passenger Payload Experiment"
          },
          {
            "pageid": 2445275,
            "ns": 0,
            "title": "GSAT"
          },
          {
            "pageid": 2446478,
            "ns": 0,
            "title": "GSAT-1"
          },
          {
            "pageid": 2446767,
            "ns": 0,
            "title": "GSAT-2"
          },
          {
            "pageid": 2496664,
            "ns": 0,
            "title": "Satish Dhawan Space Centre"
          },
          {
            "pageid": 2514694,
            "ns": 0,
            "title": "Universal Transverse Mercator coordinate system"
          },
          {
            "pageid": 2704144,
            "ns": 0,
            "title": "Ravish Malhotra"
          },
          {
            "pageid": 2961833,
            "ns": 0,
            "title": "Spatial reference system"
          },
          {
            "pageid": 2979302,
            "ns": 0,
            "title": "Inter-Range Instrumentation Group"
          },
          {
            "pageid": 3335034,
            "ns": 0,
            "title": "Local-area augmentation system"
          },
          {
            "pageid": 3569670,
            "ns": 0,
            "title": "Physical Research Laboratory"
          },
          {
            "pageid": 3587974,
            "ns": 0,
            "title": "Guided bomb"
          },
          {
            "pageid": 3613493,
            "ns": 0,
            "title": "Quasi-Zenith Satellite System"
          },
          {
            "pageid": 3637988,
            "ns": 0,
            "title": "Rohini (satellite)"
          },
          {
            "pageid": 3639402,
            "ns": 0,
            "title": "Satellite Launch Vehicle"
          },
          {
            "pageid": 3843984,
            "ns": 0,
            "title": "Augmented Satellite Launch Vehicle"
          }
        ],
        "categories": [
          {
            "ns": 14,
            "title": "Category:2013 establishments in India"
          },
          {
            "ns": 14,
            "title": "Category:IRNSS satellites"
          },
          {
            "ns": 14,
            "title": "Category:ISRO programs"
          },
          {
            "ns": 14,
            "title": "Category:Satellite constellations"
          },
          {
            "ns": 14,
            "title": "Category:Satellite navigation systems"
          },
          {
            "ns": 14,
            "title": "Category:Space programme of India"
          }
        ],
        "contentmodel": "wikitext",
        "pagelanguage": "en",
        "pagelanguagehtmlcode": "en",
        "pagelanguagedir": "ltr",
        "touched": "2018-12-16T13:38:12Z",
        "lastrevid": 871826008,
        "length": 27540,
        "fullurl": "https://en.wikipedia.org/wiki/Indian_Regional_Navigation_Satellite_System",
        "editurl": "https://en.wikipedia.org/w/index.php?title=Indian_Regional_Navigation_Satellite_System&action=edit",
        "canonicalurl": "https://en.wikipedia.org/wiki/Indian_Regional_Navigation_Satellite_System",
        "destinations": [
          "Antrix Corporation",
          "ATA (radio station)",
          "BPC (time signal)",
          "Frequency spectrum",
          "Cartosat-2A"
        ],
        "clues": [
          "The suspect expressed an interest in 'Category:Spacecraft launched by PSLV rockets'",
          "The suspect expressed an interest in 'Category:Spacecraft launched by PSLV rockets'",
          "The suspect expressed an interest in 'Category:Spacecraft launched in 2008'",
          "The suspect asked for directions to an article mentioned in 'Columbus (ISS module)'",
          "The suspect expressed an interest in 'Category:Fictional humanoids'"
        ]
      },
      {
        "pageid": 16950400,
        "ns": 0,
        "title": "Cartosat-2A",
        "links": [
          {
            "ns": 0,
            "title": "2007 in spaceflight"
          },
          {
            "ns": 0,
            "title": "2008 in spaceflight"
          },
          {
            "ns": 0,
            "title": "2009 in spaceflight"
          },
          {
            "ns": 0,
            "title": "AAUSAT-II"
          },
          {
            "ns": 0,
            "title": "AMC-14"
          },
          {
            "ns": 0,
            "title": "AMC-21"
          },
          {
            "ns": 0,
            "title": "ANUSAT"
          },
          {
            "ns": 0,
            "title": "Aditya-L1"
          },
          {
            "ns": 0,
            "title": "Advanced Technology Vehicle"
          },
          {
            "ns": 0,
            "title": "Amos-3"
          },
          {
            "ns": 0,
            "title": "Antrix Corporation"
          },
          {
            "ns": 0,
            "title": "Apsis"
          },
          {
            "ns": 0,
            "title": "Arab Satellite Communications Organization"
          },
          {
            "ns": 0,
            "title": "Ariane Passenger Payload Experiment"
          },
          {
            "ns": 0,
            "title": "Arirang-1"
          },
          {
            "ns": 0,
            "title": "Arirang-2"
          },
          {
            "ns": 0,
            "title": "Aryabhata (satellite)"
          },
          {
            "ns": 0,
            "title": "Astra 1M"
          },
          {
            "ns": 0,
            "title": "AstroSat-2"
          },
          {
            "ns": 0,
            "title": "Astrosat"
          },
          {
            "ns": 0,
            "title": "Augmented Satellite Launch Vehicle"
          },
          {
            "ns": 0,
            "title": "August 2008 Safir launch failure"
          },
          {
            "ns": 0,
            "title": "Bangalore"
          },
          {
            "ns": 0,
            "title": "Banxing"
          },
          {
            "ns": 0,
            "title": "Bhaskara (satellite)"
          },
          {
            "ns": 0,
            "title": "Biak"
          },
          {
            "ns": 0,
            "title": "Black-and-white"
          },
          {
            "ns": 0,
            "title": "C/NOFS"
          },
          {
            "ns": 0,
            "title": "CE-20"
          },
          {
            "ns": 0,
            "title": "CE-7.5"
          },
          {
            "ns": 0,
            "title": "COSMO-SkyMed"
          },
          {
            "ns": 0,
            "title": "CUTE-1.7 + APD II"
          },
          {
            "ns": 0,
            "title": "Camera"
          },
          {
            "ns": 0,
            "title": "Canada"
          },
          {
            "ns": 0,
            "title": "Canadian Advanced Nanospace eXperiment Program"
          },
          {
            "ns": 0,
            "title": "Cartosat"
          },
          {
            "ns": 0,
            "title": "Cartosat-1"
          },
          {
            "ns": 0,
            "title": "Cartosat-2"
          },
          {
            "ns": 0,
            "title": "Cartosat-2B"
          },
          {
            "ns": 0,
            "title": "Cartosat-2C"
          },
          {
            "ns": 0,
            "title": "Cartosat-2D"
          },
          {
            "ns": 0,
            "title": "Cartosat-2E"
          },
          {
            "ns": 0,
            "title": "Cartosat-2F"
          },
          {
            "ns": 0,
            "title": "Cartosat-3"
          },
          {
            "ns": 0,
            "title": "Celestis"
          },
          {
            "ns": 0,
            "title": "Cerise (satellite)"
          },
          {
            "ns": 0,
            "title": "Chandrayaan-1"
          },
          {
            "ns": 0,
            "title": "Chandrayaan-2"
          },
          {
            "ns": 0,
            "title": "Chandrayaan programme"
          },
          {
            "ns": 0,
            "title": "China"
          },
          {
            "ns": 0,
            "title": "ChinaSat 9"
          },
          {
            "ns": 0,
            "title": "Choma (satellite)"
          },
          {
            "ns": 0,
            "title": "Choros (satellite)"
          },
          {
            "ns": 0,
            "title": "Chuang Xin 1B"
          },
          {
            "ns": 0,
            "title": "Clémentine (satellite)"
          },
          {
            "ns": 0,
            "title": "Columbus (ISS module)"
          },
          {
            "ns": 0,
            "title": "Compass-1"
          },
          {
            "ns": 0,
            "title": "Crew Module Atmospheric Re-entry Experiment"
          },
          {
            "ns": 0,
            "title": "Defence Intelligence Fusion Centre"
          },
          {
            "ns": 0,
            "title": "Delfi-C3"
          },
          {
            "ns": 0,
            "title": "Department of Space"
          },
          {
            "ns": 0,
            "title": "Development and Educational Communication Unit"
          },
          {
            "ns": 0,
            "title": "Dextre"
          },
          {
            "ns": 0,
            "title": "DirecTV-11"
          },
          {
            "ns": 0,
            "title": "ELISA (satellite)"
          },
          {
            "ns": 0,
            "title": "EROS A"
          },
          {
            "ns": 0,
            "title": "EROS B"
          },
          {
            "ns": 0,
            "title": "EROS C"
          },
          {
            "ns": 0,
            "title": "Earth observation satellite"
          },
          {
            "ns": 0,
            "title": "EchoStar XI"
          },
          {
            "ns": 0,
            "title": "Ekspress AM-33"
          },
          {
            "ns": 0,
            "title": "Electromagnetic spectrum"
          },
          {
            "ns": 0,
            "title": "Epoch (astronomy)"
          },
          {
            "ns": 0,
            "title": "Essaim (satellite)"
          },
          {
            "ns": 0,
            "title": "Eutelsat 48D"
          },
          {
            "ns": 0,
            "title": "Fanhui Shi Weixing"
          },
          {
            "ns": 0,
            "title": "Feng Yun 2E"
          },
          {
            "ns": 0,
            "title": "Feng Yun 3A"
          },
          {
            "ns": 0,
            "title": "Fermi Gamma-ray Space Telescope"
          },
          {
            "ns": 0,
            "title": "France"
          },
          {
            "ns": 0,
            "title": "GEO Imaging Satellite"
          },
          {
            "ns": 0,
            "title": "GIOVE"
          },
          {
            "ns": 0,
            "title": "GPS-aided GEO augmented navigation"
          },
          {
            "ns": 0,
            "title": "GSAT"
          },
          {
            "ns": 0,
            "title": "GSAT-1"
          },
          {
            "ns": 0,
            "title": "GSAT-10"
          },
          {
            "ns": 0,
            "title": "GSAT-11"
          },
          {
            "ns": 0,
            "title": "GSAT-12"
          },
          {
            "ns": 0,
            "title": "GSAT-14"
          },
          {
            "ns": 0,
            "title": "GSAT-15"
          },
          {
            "ns": 0,
            "title": "GSAT-16"
          },
          {
            "ns": 0,
            "title": "GSAT-17"
          },
          {
            "ns": 0,
            "title": "GSAT-18"
          },
          {
            "ns": 0,
            "title": "GSAT-19"
          },
          {
            "ns": 0,
            "title": "GSAT-2"
          },
          {
            "ns": 0,
            "title": "GSAT-20"
          },
          {
            "ns": 0,
            "title": "GSAT-22"
          },
          {
            "ns": 0,
            "title": "GSAT-23"
          },
          {
            "ns": 0,
            "title": "GSAT-24"
          },
          {
            "ns": 0,
            "title": "GSAT-29"
          }
        ],
        "linkshere": [
          {
            "pageid": 53366,
            "ns": 0,
            "title": "Reconnaissance satellite"
          },
          {
            "pageid": 142833,
            "ns": 0,
            "title": "Radarsat-1"
          },
          {
            "pageid": 179132,
            "ns": 0,
            "title": "Spacelab"
          },
          {
            "pageid": 227956,
            "ns": 0,
            "title": "Columbus (ISS module)"
          },
          {
            "pageid": 229698,
            "ns": 0,
            "title": "Kibo (ISS module)"
          },
          {
            "pageid": 387175,
            "ns": 0,
            "title": "Landsat program"
          },
          {
            "pageid": 399678,
            "ns": 0,
            "title": "Fermi Gamma-ray Space Telescope"
          },
          {
            "pageid": 470926,
            "ns": 0,
            "title": "Advanced Spaceborne Thermal Emission and Reflection Radiometer"
          },
          {
            "pageid": 541538,
            "ns": 0,
            "title": "SPOT (satellite)"
          },
          {
            "pageid": 633244,
            "ns": 0,
            "title": "Indian National Satellite System"
          },
          {
            "pageid": 735869,
            "ns": 0,
            "title": "Multi-Purpose Logistics Module"
          },
          {
            "pageid": 903921,
            "ns": 0,
            "title": "Dextre"
          },
          {
            "pageid": 922614,
            "ns": 0,
            "title": "Hélios 1B"
          },
          {
            "pageid": 1019722,
            "ns": 0,
            "title": "Indian Space Research Organisation"
          },
          {
            "pageid": 1024431,
            "ns": 0,
            "title": "Chandrayaan-1"
          },
          {
            "pageid": 1290515,
            "ns": 0,
            "title": "Helios 2 (satellite)"
          },
          {
            "pageid": 1305528,
            "ns": 0,
            "title": "Shenzhou 7"
          },
          {
            "pageid": 1373447,
            "ns": 0,
            "title": "Radarsat-2"
          },
          {
            "pageid": 1455620,
            "ns": 0,
            "title": "Ofeq"
          },
          {
            "pageid": 1846031,
            "ns": 0,
            "title": "Cerise (satellite)"
          },
          {
            "pageid": 1851168,
            "ns": 0,
            "title": "Indian Remote Sensing Programme"
          },
          {
            "pageid": 1851379,
            "ns": 0,
            "title": "Cartosat-1"
          },
          {
            "pageid": 1851405,
            "ns": 0,
            "title": "HAMSAT"
          },
          {
            "pageid": 1934667,
            "ns": 0,
            "title": "List of Earth observation satellites"
          },
          {
            "pageid": 1984084,
            "ns": 0,
            "title": "Aryabhata (satellite)"
          },
          {
            "pageid": 2391257,
            "ns": 0,
            "title": "GSAT-3"
          },
          {
            "pageid": 2440905,
            "ns": 0,
            "title": "Ariane Passenger Payload Experiment"
          },
          {
            "pageid": 2445275,
            "ns": 0,
            "title": "GSAT"
          },
          {
            "pageid": 2446478,
            "ns": 0,
            "title": "GSAT-1"
          },
          {
            "pageid": 2446767,
            "ns": 0,
            "title": "GSAT-2"
          },
          {
            "pageid": 3010932,
            "ns": 0,
            "title": "Vinasat-1"
          },
          {
            "pageid": 3274867,
            "ns": 0,
            "title": "STS-122"
          },
          {
            "pageid": 3328574,
            "ns": 0,
            "title": "RapidEye"
          },
          {
            "pageid": 3350239,
            "ns": 0,
            "title": "EROS (satellite)"
          },
          {
            "pageid": 3637988,
            "ns": 0,
            "title": "Rohini (satellite)"
          },
          {
            "pageid": 3720914,
            "ns": 0,
            "title": "SAR-Lupe"
          },
          {
            "pageid": 4142398,
            "ns": 0,
            "title": "Interstellar Boundary Explorer"
          },
          {
            "pageid": 5267044,
            "ns": 0,
            "title": "Fanhui Shi Weixing"
          },
          {
            "pageid": 5377365,
            "ns": 0,
            "title": "STS-126"
          },
          {
            "pageid": 5979301,
            "ns": 0,
            "title": "INSAT-4C"
          },
          {
            "pageid": 6002567,
            "ns": 0,
            "title": "STS-123"
          },
          {
            "pageid": 6002579,
            "ns": 0,
            "title": "STS-124"
          },
          {
            "pageid": 6067445,
            "ns": 0,
            "title": "Soyuz TMA-12"
          },
          {
            "pageid": 6168385,
            "ns": 0,
            "title": "Arirang-2"
          },
          {
            "pageid": 6181444,
            "ns": 0,
            "title": "Arirang-1"
          },
          {
            "pageid": 6863715,
            "ns": 0,
            "title": "DirecTV-11"
          },
          {
            "pageid": 7193416,
            "ns": 0,
            "title": "Technology Experiment Satellite"
          },
          {
            "pageid": 7300050,
            "ns": 0,
            "title": "National Technical Research Organisation"
          },
          {
            "pageid": 7818844,
            "ns": 0,
            "title": "Indian Human Spaceflight Programme"
          },
          {
            "pageid": 8538369,
            "ns": 0,
            "title": "Information Gathering Satellite"
          },
          {
            "pageid": 8749892,
            "ns": 0,
            "title": "Space Capsule Recovery Experiment"
          },
          {
            "pageid": 8916212,
            "ns": 0,
            "title": "Resourcesat-1"
          },
          {
            "pageid": 9070010,
            "ns": 0,
            "title": "Astrosat"
          },
          {
            "pageid": 9384401,
            "ns": 0,
            "title": "2008 in spaceflight"
          },
          {
            "pageid": 9386968,
            "ns": 0,
            "title": "GSAT-4"
          },
          {
            "pageid": 9450005,
            "ns": 0,
            "title": "Soyuz TMA-13"
          },
          {
            "pageid": 9465973,
            "ns": 0,
            "title": "Cartosat-2"
          },
          {
            "pageid": 9798810,
            "ns": 0,
            "title": "Galaxy 19"
          },
          {
            "pageid": 9936493,
            "ns": 0,
            "title": "Indian Regional Navigation Satellite System"
          },
          {
            "pageid": 11385141,
            "ns": 0,
            "title": "Stretched Rohini Satellite Series"
          },
          {
            "pageid": 11393692,
            "ns": 0,
            "title": "Bhaskara (satellite)"
          },
          {
            "pageid": 12178327,
            "ns": 0,
            "title": "Ocean Surface Topography Mission"
          },
          {
            "pageid": 12439262,
            "ns": 0,
            "title": "THEOS (satellite)"
          },
          {
            "pageid": 13357973,
            "ns": 0,
            "title": "Ofek-7"
          },
          {
            "pageid": 13667013,
            "ns": 0,
            "title": "WINDS"
          },
          {
            "pageid": 13701026,
            "ns": 0,
            "title": "GeoEye-1"
          },
          {
            "pageid": 14212631,
            "ns": 0,
            "title": "Clémentine (satellite)"
          },
          {
            "pageid": 14836618,
            "ns": 0,
            "title": "TecSAR"
          },
          {
            "pageid": 15431891,
            "ns": 0,
            "title": "Cartosat-3"
          },
          {
            "pageid": 15485704,
            "ns": 0,
            "title": "AAUSAT-II"
          },
          {
            "pageid": 15670439,
            "ns": 0,
            "title": "Thor 5"
          },
          {
            "pageid": 16050235,
            "ns": 0,
            "title": "AMC-14"
          },
          {
            "pageid": 16193250,
            "ns": 0,
            "title": "Jules Verne ATV"
          },
          {
            "pageid": 16762227,
            "ns": 0,
            "title": "C/NOFS"
          },
          {
            "pageid": 16851366,
            "ns": 0,
            "title": "Amos-3"
          },
          {
            "pageid": 17130480,
            "ns": 0,
            "title": "Tianlian I"
          },
          {
            "pageid": 17183079,
            "ns": 0,
            "title": "IMS-1"
          },
          {
            "pageid": 17255055,
            "ns": 0,
            "title": "Star One C2"
          },
          {
            "pageid": 17399746,
            "ns": 0,
            "title": "Galaxy 18"
          },
          {
            "pageid": 17403343,
            "ns": 0,
            "title": "Yubileiny"
          },
          {
            "pageid": 17420620,
            "ns": 0,
            "title": "Skynet 5C"
          },
          {
            "pageid": 17420783,
            "ns": 0,
            "title": "USA-200"
          },
          {
            "pageid": 17420797,
            "ns": 0,
            "title": "USA-201"
          },
          {
            "pageid": 17446165,
            "ns": 0,
            "title": "Türksat 3A"
          },
          {
            "pageid": 17461650,
            "ns": 0,
            "title": "Delfi-C3"
          },
          {
            "pageid": 17860602,
            "ns": 0,
            "title": "ChinaSat 9"
          },
          {
            "pageid": 17921749,
            "ns": 0,
            "title": "Trailblazer (satellite)"
          },
          {
            "pageid": 18063105,
            "ns": 0,
            "title": "Megha-Tropiques"
          },
          {
            "pageid": 18195859,
            "ns": 0,
            "title": "NanoSail-D"
          },
          {
            "pageid": 18377485,
            "ns": 0,
            "title": "Inmarsat-4 F3"
          },
          {
            "pageid": 18523057,
            "ns": 0,
            "title": "Indian Telegraph Act, 1885"
          },
          {
            "pageid": 18632859,
            "ns": 0,
            "title": "Superbird-C2"
          },
          {
            "pageid": 18633149,
            "ns": 0,
            "title": "AMC-21"
          },
          {
            "pageid": 18724673,
            "ns": 0,
            "title": "PRESat"
          },
          {
            "pageid": 19261860,
            "ns": 0,
            "title": "Nimiq-4"
          },
          {
            "pageid": 19508165,
            "ns": 0,
            "title": "Ratsat"
          },
          {
            "pageid": 19842601,
            "ns": 0,
            "title": "Compass-1"
          },
          {
            "pageid": 19842769,
            "ns": 0,
            "title": "SEEDS-2"
          },
          {
            "pageid": 19842842,
            "ns": 0,
            "title": "Rubin-8"
          },
          {
            "pageid": 19880944,
            "ns": 0,
            "title": "Banxing"
          }
        ],
        "categories": [
          {
            "ns": 14,
            "title": "Category:Earth observation satellites of India"
          },
          {
            "ns": 14,
            "title": "Category:Spacecraft launched by PSLV rockets"
          },
          {
            "ns": 14,
            "title": "Category:Spacecraft launched in 2008"
          }
        ],
        "contentmodel": "wikitext",
        "pagelanguage": "en",
        "pagelanguagehtmlcode": "en",
        "pagelanguagedir": "ltr",
        "touched": "2018-12-16T13:38:12Z",
        "lastrevid": 869916073,
        "length": 6625,
        "fullurl": "https://en.wikipedia.org/wiki/Cartosat-2A",
        "editurl": "https://en.wikipedia.org/w/index.php?title=Cartosat-2A&action=edit",
        "canonicalurl": "https://en.wikipedia.org/wiki/Cartosat-2A",
        "destinations": [
          "GSAT-20",
          "Arirang-2",
          "ChinaSat 9",
          "Cartosat",
          "GSAT-1"
        ],
        "clues": [
          "The suspect asked for directions to an article mentioned in 'GSAT-5P'",
          "The suspect asked for directions to an article mentioned in 'PROBA'",
          "The suspect expressed an interest in 'Category:2001 in India'",
          "The suspect expressed an interest in 'Category:GSAT satellites'",
          "The suspect asked for directions to an article mentioned in 'Mylswamy Annadurai'"
        ]
      },
      {
        "pageid": 2446478,
        "ns": 0,
        "title": "GSAT-1",
        "links": [
          {
            "ns": 0,
            "title": "2000 in spaceflight"
          },
          {
            "ns": 0,
            "title": "2001 Mars Odyssey"
          },
          {
            "ns": 0,
            "title": "2001 in spaceflight"
          },
          {
            "ns": 0,
            "title": "2002 in spaceflight"
          },
          {
            "ns": 0,
            "title": "ANUSAT"
          },
          {
            "ns": 0,
            "title": "Aditya-L1"
          },
          {
            "ns": 0,
            "title": "Apogee"
          },
          {
            "ns": 0,
            "title": "Apsis"
          },
          {
            "ns": 0,
            "title": "Ariane Passenger Payload Experiment"
          },
          {
            "ns": 0,
            "title": "Artemis (satellite)"
          },
          {
            "ns": 0,
            "title": "Aryabhata (satellite)"
          },
          {
            "ns": 0,
            "title": "Astra 2C"
          },
          {
            "ns": 0,
            "title": "Astrosat"
          },
          {
            "ns": 0,
            "title": "BIRD (satellite)"
          },
          {
            "ns": 0,
            "title": "BSAT-2a"
          },
          {
            "ns": 0,
            "title": "BSAT-2b"
          },
          {
            "ns": 0,
            "title": "Badr-B"
          },
          {
            "ns": 0,
            "title": "Bhaskara (satellite)"
          },
          {
            "ns": 0,
            "title": "Cartosat"
          },
          {
            "ns": 0,
            "title": "Cartosat-1"
          },
          {
            "ns": 0,
            "title": "Cartosat-2"
          },
          {
            "ns": 0,
            "title": "Cartosat-2A"
          },
          {
            "ns": 0,
            "title": "Cartosat-2B"
          },
          {
            "ns": 0,
            "title": "Cartosat-2C"
          },
          {
            "ns": 0,
            "title": "Cartosat-2D"
          },
          {
            "ns": 0,
            "title": "Cartosat-2E"
          },
          {
            "ns": 0,
            "title": "Cartosat-2F"
          },
          {
            "ns": 0,
            "title": "Cartosat-3"
          },
          {
            "ns": 0,
            "title": "Celestis"
          },
          {
            "ns": 0,
            "title": "Chandrayaan-1"
          },
          {
            "ns": 0,
            "title": "Chandrayaan-2"
          },
          {
            "ns": 0,
            "title": "Chandrayaan programme"
          },
          {
            "ns": 0,
            "title": "Communications satellite"
          },
          {
            "ns": 0,
            "title": "Crew Module Atmospheric Re-entry Experiment"
          },
          {
            "ns": 0,
            "title": "Destiny (ISS module)"
          },
          {
            "ns": 0,
            "title": "DirecTV-4S"
          },
          {
            "ns": 0,
            "title": "Ekran-M No.18L"
          },
          {
            "ns": 0,
            "title": "Epoch (astronomy)"
          },
          {
            "ns": 0,
            "title": "Eutelsat 28A"
          },
          {
            "ns": 0,
            "title": "Eutelsat 8 West A"
          },
          {
            "ns": 0,
            "title": "GEO Imaging Satellite"
          },
          {
            "ns": 0,
            "title": "GOES 12"
          },
          {
            "ns": 0,
            "title": "GSAT"
          },
          {
            "ns": 0,
            "title": "GSAT-10"
          },
          {
            "ns": 0,
            "title": "GSAT-11"
          },
          {
            "ns": 0,
            "title": "GSAT-12"
          },
          {
            "ns": 0,
            "title": "GSAT-14"
          },
          {
            "ns": 0,
            "title": "GSAT-15"
          },
          {
            "ns": 0,
            "title": "GSAT-16"
          },
          {
            "ns": 0,
            "title": "GSAT-17"
          },
          {
            "ns": 0,
            "title": "GSAT-18"
          },
          {
            "ns": 0,
            "title": "GSAT-19"
          },
          {
            "ns": 0,
            "title": "GSAT-2"
          },
          {
            "ns": 0,
            "title": "GSAT-20"
          },
          {
            "ns": 0,
            "title": "GSAT-21"
          },
          {
            "ns": 0,
            "title": "GSAT-22"
          },
          {
            "ns": 0,
            "title": "GSAT-23"
          },
          {
            "ns": 0,
            "title": "GSAT-24"
          },
          {
            "ns": 0,
            "title": "GSAT-25"
          },
          {
            "ns": 0,
            "title": "GSAT-26"
          },
          {
            "ns": 0,
            "title": "GSAT-27"
          },
          {
            "ns": 0,
            "title": "GSAT-28"
          },
          {
            "ns": 0,
            "title": "GSAT-29"
          },
          {
            "ns": 0,
            "title": "GSAT-3"
          },
          {
            "ns": 0,
            "title": "GSAT-30"
          },
          {
            "ns": 0,
            "title": "GSAT-31"
          },
          {
            "ns": 0,
            "title": "GSAT-4"
          },
          {
            "ns": 0,
            "title": "GSAT-5"
          },
          {
            "ns": 0,
            "title": "GSAT-5P"
          },
          {
            "ns": 0,
            "title": "GSAT-6A"
          },
          {
            "ns": 0,
            "title": "GSAT-7"
          },
          {
            "ns": 0,
            "title": "GSAT-7A"
          },
          {
            "ns": 0,
            "title": "GSAT-7C"
          },
          {
            "ns": 0,
            "title": "GSAT-7R"
          },
          {
            "ns": 0,
            "title": "GSAT-8"
          },
          {
            "ns": 0,
            "title": "GSAT-UHF"
          },
          {
            "ns": 0,
            "title": "GSLV"
          },
          {
            "ns": 0,
            "title": "Gaganyaan"
          },
          {
            "ns": 0,
            "title": "Genesis (spacecraft)"
          },
          {
            "ns": 0,
            "title": "Geocentric orbit"
          },
          {
            "ns": 0,
            "title": "Geostationary orbit"
          },
          {
            "ns": 0,
            "title": "Geosynchronous Satellite Launch Vehicle"
          },
          {
            "ns": 0,
            "title": "Geosynchronous orbit"
          },
          {
            "ns": 0,
            "title": "Globus No.14L"
          },
          {
            "ns": 0,
            "title": "Gonets-D1 No.10"
          },
          {
            "ns": 0,
            "title": "Gonets-D1 No.11"
          },
          {
            "ns": 0,
            "title": "Gonets-D1 No.12"
          },
          {
            "ns": 0,
            "title": "HAMSAT"
          },
          {
            "ns": 0,
            "title": "HySIS"
          },
          {
            "ns": 0,
            "title": "I-2K"
          },
          {
            "ns": 0,
            "title": "ICO F2"
          },
          {
            "ns": 0,
            "title": "IMS-1"
          },
          {
            "ns": 0,
            "title": "INSAT-1A"
          },
          {
            "ns": 0,
            "title": "INSAT-1B"
          },
          {
            "ns": 0,
            "title": "INSAT-1C"
          },
          {
            "ns": 0,
            "title": "INSAT-1D"
          },
          {
            "ns": 0,
            "title": "INSAT-2A"
          },
          {
            "ns": 0,
            "title": "INSAT-2B"
          },
          {
            "ns": 0,
            "title": "INSAT-2C"
          },
          {
            "ns": 0,
            "title": "INSAT-2D"
          }
        ],
        "linkshere": [
          {
            "pageid": 18959,
            "ns": 0,
            "title": "2001 Mars Odyssey"
          },
          {
            "pageid": 186468,
            "ns": 0,
            "title": "Wilkinson Microwave Anisotropy Probe"
          },
          {
            "pageid": 187407,
            "ns": 0,
            "title": "Genesis (spacecraft)"
          },
          {
            "pageid": 405175,
            "ns": 0,
            "title": "Soyuz TM-32"
          },
          {
            "pageid": 557242,
            "ns": 0,
            "title": "STS-98"
          },
          {
            "pageid": 557244,
            "ns": 0,
            "title": "STS-102"
          },
          {
            "pageid": 557246,
            "ns": 0,
            "title": "STS-100"
          },
          {
            "pageid": 557251,
            "ns": 0,
            "title": "STS-104"
          },
          {
            "pageid": 557255,
            "ns": 0,
            "title": "STS-105"
          },
          {
            "pageid": 557259,
            "ns": 0,
            "title": "STS-108"
          },
          {
            "pageid": 633244,
            "ns": 0,
            "title": "Indian National Satellite System"
          },
          {
            "pageid": 851205,
            "ns": 0,
            "title": "Soyuz TM-33"
          },
          {
            "pageid": 869796,
            "ns": 0,
            "title": "Shenzhou 2"
          },
          {
            "pageid": 877033,
            "ns": 0,
            "title": "Destiny (ISS module)"
          },
          {
            "pageid": 926429,
            "ns": 0,
            "title": "Quest Joint Airlock"
          },
          {
            "pageid": 926547,
            "ns": 0,
            "title": "Pirs (ISS module)"
          },
          {
            "pageid": 965569,
            "ns": 0,
            "title": "Jason-1"
          },
          {
            "pageid": 1005861,
            "ns": 0,
            "title": "Geosynchronous Satellite Launch Vehicle"
          },
          {
            "pageid": 1019722,
            "ns": 0,
            "title": "Indian Space Research Organisation"
          },
          {
            "pageid": 1024431,
            "ns": 0,
            "title": "Chandrayaan-1"
          },
          {
            "pageid": 1248472,
            "ns": 0,
            "title": "TIMED"
          },
          {
            "pageid": 1616963,
            "ns": 0,
            "title": "QuickBird"
          },
          {
            "pageid": 1725590,
            "ns": 0,
            "title": "Eutelsat 33C"
          },
          {
            "pageid": 1851168,
            "ns": 0,
            "title": "Indian Remote Sensing Programme"
          },
          {
            "pageid": 1851379,
            "ns": 0,
            "title": "Cartosat-1"
          },
          {
            "pageid": 1851405,
            "ns": 0,
            "title": "HAMSAT"
          },
          {
            "pageid": 1984084,
            "ns": 0,
            "title": "Aryabhata (satellite)"
          },
          {
            "pageid": 2391257,
            "ns": 0,
            "title": "GSAT-3"
          },
          {
            "pageid": 2440905,
            "ns": 0,
            "title": "Ariane Passenger Payload Experiment"
          },
          {
            "pageid": 2445275,
            "ns": 0,
            "title": "GSAT"
          },
          {
            "pageid": 2446767,
            "ns": 0,
            "title": "GSAT-2"
          },
          {
            "pageid": 3376745,
            "ns": 0,
            "title": "Odin (satellite)"
          },
          {
            "pageid": 3637988,
            "ns": 0,
            "title": "Rohini (satellite)"
          },
          {
            "pageid": 3801832,
            "ns": 0,
            "title": "PROBA"
          },
          {
            "pageid": 4487597,
            "ns": 0,
            "title": "Mylswamy Annadurai"
          },
          {
            "pageid": 4513837,
            "ns": 0,
            "title": "Astra 2C"
          },
          {
            "pageid": 5979301,
            "ns": 0,
            "title": "INSAT-4C"
          },
          {
            "pageid": 7193416,
            "ns": 0,
            "title": "Technology Experiment Satellite"
          },
          {
            "pageid": 7818844,
            "ns": 0,
            "title": "Indian Human Spaceflight Programme"
          },
          {
            "pageid": 8285667,
            "ns": 0,
            "title": "2001 in spaceflight"
          },
          {
            "pageid": 8749892,
            "ns": 0,
            "title": "Space Capsule Recovery Experiment"
          },
          {
            "pageid": 8916212,
            "ns": 0,
            "title": "Resourcesat-1"
          },
          {
            "pageid": 9070010,
            "ns": 0,
            "title": "Astrosat"
          },
          {
            "pageid": 9386968,
            "ns": 0,
            "title": "GSAT-4"
          },
          {
            "pageid": 9465973,
            "ns": 0,
            "title": "Cartosat-2"
          },
          {
            "pageid": 9936493,
            "ns": 0,
            "title": "Indian Regional Navigation Satellite System"
          },
          {
            "pageid": 11385141,
            "ns": 0,
            "title": "Stretched Rohini Satellite Series"
          },
          {
            "pageid": 11393692,
            "ns": 0,
            "title": "Bhaskara (satellite)"
          },
          {
            "pageid": 14195532,
            "ns": 0,
            "title": "Badr-B"
          },
          {
            "pageid": 15431891,
            "ns": 0,
            "title": "Cartosat-3"
          },
          {
            "pageid": 15721607,
            "ns": 0,
            "title": "Artemis (satellite)"
          },
          {
            "pageid": 16950400,
            "ns": 0,
            "title": "Cartosat-2A"
          },
          {
            "pageid": 17183079,
            "ns": 0,
            "title": "IMS-1"
          },
          {
            "pageid": 18063105,
            "ns": 0,
            "title": "Megha-Tropiques"
          },
          {
            "pageid": 18277970,
            "ns": 0,
            "title": "Türksat 2A"
          },
          {
            "pageid": 19884971,
            "ns": 0,
            "title": "Chandrayaan-2"
          },
          {
            "pageid": 19914731,
            "ns": 0,
            "title": "Moon Impact Probe"
          },
          {
            "pageid": 20148645,
            "ns": 0,
            "title": "Aditya-L1"
          },
          {
            "pageid": 20328936,
            "ns": 0,
            "title": "Gaganyaan"
          },
          {
            "pageid": 22087603,
            "ns": 0,
            "title": "ANUSAT"
          },
          {
            "pageid": 22451995,
            "ns": 0,
            "title": "RISAT-2"
          },
          {
            "pageid": 22664274,
            "ns": 0,
            "title": "INSAT-3B"
          },
          {
            "pageid": 22917160,
            "ns": 0,
            "title": "Oceansat-2"
          },
          {
            "pageid": 22963976,
            "ns": 0,
            "title": "Resourcesat-2"
          },
          {
            "pageid": 23128673,
            "ns": 0,
            "title": "Progress M-45"
          },
          {
            "pageid": 23128694,
            "ns": 0,
            "title": "Progress M-44"
          },
          {
            "pageid": 23129648,
            "ns": 0,
            "title": "Progress M1-7"
          },
          {
            "pageid": 23129755,
            "ns": 0,
            "title": "Progress M1-6"
          },
          {
            "pageid": 23130768,
            "ns": 0,
            "title": "Progress M-SO1"
          },
          {
            "pageid": 23134956,
            "ns": 0,
            "title": "Progress M1-5"
          },
          {
            "pageid": 23415304,
            "ns": 0,
            "title": "List of Indian satellites"
          },
          {
            "pageid": 23503408,
            "ns": 0,
            "title": "INSAT-2DT"
          },
          {
            "pageid": 23548032,
            "ns": 0,
            "title": "GOES 12"
          },
          {
            "pageid": 23652536,
            "ns": 0,
            "title": "RISAT-1"
          },
          {
            "pageid": 23733824,
            "ns": 0,
            "title": "INSAT-1B"
          },
          {
            "pageid": 23910497,
            "ns": 0,
            "title": "INSAT-2E"
          },
          {
            "pageid": 24155350,
            "ns": 0,
            "title": "Space Capsule Recovery Experiment II"
          },
          {
            "pageid": 24287560,
            "ns": 0,
            "title": "StudSat"
          },
          {
            "pageid": 26639031,
            "ns": 0,
            "title": "Jugnu (satellite)"
          },
          {
            "pageid": 26739291,
            "ns": 0,
            "title": "Pratham (satellite)"
          },
          {
            "pageid": 26979739,
            "ns": 0,
            "title": "SARAL"
          },
          {
            "pageid": 27120738,
            "ns": 0,
            "title": "Cartosat-2B"
          },
          {
            "pageid": 29888774,
            "ns": 0,
            "title": "INSAT-3D"
          },
          {
            "pageid": 30156089,
            "ns": 0,
            "title": "INSAT-3E"
          },
          {
            "pageid": 30165087,
            "ns": 0,
            "title": "INSAT-3A"
          },
          {
            "pageid": 30166945,
            "ns": 0,
            "title": "INSAT-3C"
          },
          {
            "pageid": 30175121,
            "ns": 0,
            "title": "INSAT-4A"
          },
          {
            "pageid": 30184925,
            "ns": 0,
            "title": "GSAT-5P"
          },
          {
            "pageid": 30718950,
            "ns": 0,
            "title": "IRS-1D"
          },
          {
            "pageid": 31573564,
            "ns": 0,
            "title": "YouthSat"
          },
          {
            "pageid": 31859088,
            "ns": 0,
            "title": "GSAT-8"
          },
          {
            "pageid": 32304938,
            "ns": 0,
            "title": "GSAT-12"
          },
          {
            "pageid": 33395912,
            "ns": 0,
            "title": "INSAT-4CR"
          },
          {
            "pageid": 34209573,
            "ns": 0,
            "title": "SRMSAT"
          },
          {
            "pageid": 35385119,
            "ns": 0,
            "title": "GSAT-14"
          },
          {
            "pageid": 35386311,
            "ns": 0,
            "title": "IRNSS-1A"
          },
          {
            "pageid": 35470132,
            "ns": 0,
            "title": "GSAT-10"
          },
          {
            "pageid": 35470774,
            "ns": 0,
            "title": "GSAT-11"
          },
          {
            "pageid": 35546633,
            "ns": 0,
            "title": "Kosmos 2379"
          },
          {
            "pageid": 35971075,
            "ns": 0,
            "title": "INSAT-4E"
          }
        ],
        "categories": [
          {
            "ns": 14,
            "title": "Category:2001 in India"
          },
          {
            "ns": 14,
            "title": "Category:GSAT satellites"
          },
          {
            "ns": 14,
            "title": "Category:Satellite launch failures"
          },
          {
            "ns": 14,
            "title": "Category:Spacecraft launched in 2001"
          }
        ],
        "contentmodel": "wikitext",
        "pagelanguage": "en",
        "pagelanguagehtmlcode": "en",
        "pagelanguagedir": "ltr",
        "touched": "2018-12-10T13:23:50Z",
        "lastrevid": 833160063,
        "length": 4750,
        "fullurl": "https://en.wikipedia.org/wiki/GSAT-1",
        "editurl": "https://en.wikipedia.org/w/index.php?title=GSAT-1&action=edit",
        "canonicalurl": "https://en.wikipedia.org/wiki/GSAT-1"
      }
    ]
  };

  exampleGame["_id"] = "example";

  await db.collection("games").drop();
  await db.collection("games").insertOne(exampleGame);

  console.log("All done!");

  client.close();

}

seedDb();
