const Movies = [
  {
    id: 1,
    tile: "Avenger End Game",
    duration: "3h 2m",
    movietype: "CBFC: U/A",
    category: "Super Hero",
    image: require("../assets/movies/avenger-end.jpg"),
    desc: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.",
    rating: 7.5,
    genre: "Action/Sci-friction",
    cast: [
      {
        name: "Robert Downey Jr.",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Chris Hemsworth",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      {
        name: "Chris Evans",
        castpic: require("../assets/movies/cast/Evans.jpg"),
      },
      {
        name: "Mark Ruffalo",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Scarlett Johansson",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        name: "Anthony Russo",
        castpic: require("../assets/movies/cast/Anthony.jpg"),
      },
    ],
  },
  {
    id: 2,
    tile: "Captain America Civil War",
    category: "Super Hero",
    image: require("../assets/movies/america.jpg"),
    desc: "Political involvement in the Avengers affairs causes a rift between Captain America and Iron Man. With many people fearing the actions of super hero , the government decides to push for the Hero Registration Act, a law that limits a hero actions  This results in a division in The Avengers. Iron Man stands with this Act, claiming that their actions must be kept in check otherwise cities will continue to be destroyed, but Captain America feels that saving the world is daring enough and that they cannot rely on the government to protect the world. This escalates into an all-out war between Team Iron Man (Iron Man, Black Panther, Vision, Black Widow, War Machine, and Spider-Man) and Team Captain America (Captain America, Bucky Barnes, Falcon, Scarlet Witch, Hawkeye, and Ant Man) while a new villain emerges.",
    rating: 8.2,
    duration: "2h 27m",
    movietype: "CBFC: U/A",
    genre: "Action/Adventure",
    cast: [
      {
        name: "Robert Downey Jr.",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Sebastian Stan",
        castpic: require("../assets/movies/cast/saw.webp"),
      },
      {
        name: "Chris Evans",
        castpic: require("../assets/movies/cast/Evans.jpg"),
      },
      {
        name: "Elizabeth Olsen",
        castpic: require("../assets/movies/cast/elizabeth.webp"),
      },
      {
        name: "Scarlett Johansson",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        name: "Anthony Russo",
        castpic: require("../assets/movies/cast/Anthony.jpg"),
      },
    ],
  },
  {
    id: 3,
    tile: "atman v Superman: Dawn of Justice",
    duration: "2h 31m",
    genre: "Action/Adventure",
    movietype: "CBFC: U/A",
    category: "Super Hero",
    image: require("../assets/movies/batvssup.jpg"),
    desc: "Batman v Superman: Dawn of Justice is a 2016 American superhero film based on the DC Comics characters Batman and Superman. Produced by Warner Bros. Pictures, Atlas Entertainment and Cruel and Unusual Films, and distributed by Warner Bros., it is a follow-up to the 2013 film Man of Steel and the second film in the DC Extended Universe (DCEU).[9] The film was directed by Zack Snyder, written by Chris Terrio and David S. Goyer, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg, Diane Lane, Laurence Fishburne, Jeremy Irons, Holly Hunter, and Gal Gadot.",
    rating: 7.0,
    cast: [
      {
        name: "Ben Affleck",
        castpic: require("../assets/movies/cast/Ben.jpg"),
      },
      {
        name: "Henry Cavill",
        castpic: require("../assets/movies/cast/Henry.jpg"),
      },
      {
        name: "Jesse Eisenberg",
        castpic: require("../assets/movies/cast/MV.jpg"),
      },
      {
        name: "Gal Gadot",
        castpic: require("../assets/movies/cast/Gal.jpg"),
      },
      {
        name: "Jeremy Irons",
        castpic: require("../assets/movies/cast/jer.jpg"),
      },

      {
        name: "Zack Snyder",
        castpic: require("../assets/movies/cast/Zack.jpg"),
      },
    ],
  },
  {
    id: 4,
    tile: "IronMan 2",
    category: "Super Hero",
    duration: "2h 4m",
    genre: "Action/Adventure",
    movietype: "CBFC: U/A",
    image: require("../assets/movies/ironman.jpg"),
    desc: "ron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau and written by Justin Theroux, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Mickey Rourke, and Samuel L. Jackson. Six months after Iron Man, Tony Stark resists calls from the United States government to hand over the Iron Man technology, which is causing his declining health. Meanwhile, Russian scientist Ivan Vanko (Rourke) uses his own version of the technology to pursue a vendetta against the Stark family.",
    rating: 8.5,
    cast: [
      {
        name: "Robert Downey Jr.",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Jon Favreau",
        castpic: require("../assets/movies/cast/Jon.jpeg"),
      },
      {
        name: "Don Cheadle",
        castpic: require("../assets/movies/cast/Don.webp"),
      },

      {
        name: "Scarlett Johansson",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Gwyneth Paltrow",
        castpic: require("../assets/movies/cast/Gwyneth.jpg"),
      },
      {
        name: "Shane Black",
        castpic: require("../assets/movies/cast/iron.jpg"),
      },
    ],
  },
  {
    id: 5,
    tile: "SpiderMan Home No Way Home",
    category: "Super Hero",
    movietype: "CBFC: U/A",
    duration: "2h 28m",
    genre: "Action/Adventure",
    image: require("../assets/movies/spiderMan-home.jpg"),
    desc: "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong, the multiverse is broken open, which allows visitors from alternate realities to enter Parkers universe.",
    rating: 9.5,
    cast: [
      {
        name: "Tom Holland",
        castpic: require("../assets/movies/cast/tom.jpg"),
      },
      {
        name: "Zendaya",
        castpic: require("../assets/movies/cast/Zendaya.webp"),
      },
      {
        name: "Willem Dafoe",
        castpic: require("../assets/movies/cast/Willem.webp"),
      },
      // {
      //     name:'Mark Ruffalo',
      //     castpic:require('../assets/movies/cast/Mark.jpg')
      // },
      {
        name: "Jacob Batalon",
        castpic: require("../assets/movies/cast/Jacob.jpg"),
      },
      {
        name: "Benedict Cumberbatch",
        castpic: require("../assets/movies/cast/doc.jpg"),
      },
      {
        name: "Jon Watts",
        castpic: require("../assets/movies/cast/akq.webp"),
      },
    ],
  },
  {
    id: 6,
    tile: "Thor Love and Thunder",
    category: "Super Hero",
    movietype: "CBFC: U/A",
    duration: "1h 59m",
    genre: "Action/Adventure",
    image: require("../assets/movies/thor-love.jpg"),
    desc: "Marvel Studios  Thor: Love and Thunder Thor 4 Movie Poster OVERVIEW Marvel Studios  THOR: LOVE AND THUNDER stars Chris Hemsworth, Tessa Thompson, Natalie Portman and Christian Bale. Directed by Taika Waititi. In theaters July 8, 2022.",
    rating: 8.0,
    cast: [
      {
        name: "Chris Hemsworth",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      {
        name: "Natalie Portman",
        castpic: require("../assets/movies/cast/natalie.jpg"),
      },
      {
        name: "Chris Pratt",
        castpic: require("../assets/movies/cast/chrish.jpg"),
      },
      // {
      //     name:'Mark Ruffalo',
      //     castpic:require('../assets/movies/cast/Mark.jpg')
      // },
      {
        name: "Tessa Thompson",
        castpic: require("../assets/movies/cast/Tessa.jpg"),
      },
      {
        name: "Taika Waititi",
        castpic: require("../assets/movies/cast/Taika.jpg"),
      },

      {
        name: "Taika Waititi",
        castpic: require("../assets/movies/cast/Taika.jpg"),
      },
    ],
  },
  {
    id: 7,
    tile: "Captain Marvel",
    category: "Super Hero",
    movietype: "CBFC: U/A",
    duration: "2h 4m",
    genre: "Action/Sci-fi ‧",
    image: require("../assets/movies/capatain.jpg"),
    desc: "Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 21st film in the Marvel Cinematic Universe (MCU). The film was written and directed by Anna Boden and Ryan Fleck, with Geneva Robertson-Dworet also contributing to the screenplay. Brie Larson stars as Carol Danvers, alongside Samuel L. Jackson, Ben Mendelsohn, Djimon Hounsou, Lee Pace, Lashana Lynch, Gemma Chan, Annette Bening, Clark Gregg, and Jude Law. Set in 1995, the story follows Danvers as she becomes Captain Marvel after Earth is caught in the center of a galactic conflict between two alien civilizations.",
    rating: 7.0,
    cast: [
      {
        name: "Brie Larson",
        castpic: require("../assets/movies/cast/Brie.webp"),
      },
      {
        name: "Samuel L. Jackson",
        castpic: require("../assets/movies/cast/Samuel.jpg"),
      },
      {
        name: "Gemma Chan",
        castpic: require("../assets/movies/cast/Gemma.jpg"),
      },

      {
        name: "Lashana Lynch",
        castpic: require("../assets/movies/cast/Lashana.webp"),
      },
      {
        name: "Jude Law",
        castpic: require("../assets/movies/cast/jude.jpg"),
      },
      {
        name: "Ryan Fleck",
        castpic: require("../assets/movies/cast/Ryan.jpeg"),
      },
    ],
  },
  {
    id: 8,
    tile: "Free Guy",
    category: "Adventure",
    movietype: "CBFC: U/A",
    duration: "1h 55m",
    genre: "Comedy/Adventure",
    image: require("../assets/movies/adven/free-guy.jpg"),
    desc: 'Free Guy” is like a hyperactive puppy. It really wants to be your friend. It’s easy to like and fun to hang out with. It also has a habit of running around in circles, losing its focus, and shitting on the floor. A family action movie that targets the Fortnite Generation, "Free Guy" also preaches the importance of individuality while not only feeling like a dozen other movies but literally incorporating some of their imagery. An enjoyable cast, including movie-stealing work from Jodie Comer, holds it all together, but one can still see just enough glitches in this matrix to wish it was bette',
    rating: 8.0,
    cast: [
      {
        name: "Ryan Reynolds",
        castpic: require("../assets/movies/cast/Ryan_rey.jpg"),
      },
      {
        name: "Jodie Comer",
        castpic: require("../assets/movies/cast/Jodie.jpg"),
      },

      {
        name: "Utkarsh Ambudkar",
        castpic: require("../assets/movies/cast/utkarsh.jpg"),
      },
      {
        name: "Joe Keery",
        castpic: require("../assets/movies/cast/Joe.jpeg"),
      },
      {
        name: "Taika Waititi",
        castpic: require("../assets/movies/cast/Taika.jpg"),
      },
      {
        name: "Shawn Levy",
        castpic: require("../assets/movies/cast/shawq.jpg"),
      },
    ],
  },
  {
    id: 9,
    tile: "Jungle Cruise",
    category: "Adventure",
    movietype: "CBFC: U/A",
    duration: "2h 7m",
    genre: "Comedy/Adventure",
    image: require("../assets/movies/adven/jungle.jpg"),
    desc: "Jungle Cruise is a 2021 American fantasy adventure film directed by Jaume Collet-Serra from a screenplay written by Glenn Ficarra, John Requa, and Michael Green. It is based on Walt Disneys eponymous theme park attraction. Produced by Walt Disney Pictures, the film stars Dwayne Johnson, Emily Blunt, Édgar Ramírez, Jack Whitehall, Jesse Plemons, and Paul Giamatti. It tells the alternate history of the captain of a small riverboat who takes a scientist and her brother through a jungle in search of the Tree of Life while competing against a German expedition and cursed conquistadors.",
    rating: 6.8,
    cast: [
      {
        name: "Dwayne Johnson",
        castpic: require("../assets/movies/cast/Dwayne.jpg"),
      },
      {
        name: "Emily Blunt",
        castpic: require("../assets/movies/cast/Emily.webp"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Jack Whitehall",
        castpic: require("../assets/movies/cast/jack.webp"),
      },
      {
        name: "Sulem Calderon",
        castpic: require("../assets/movies/cast/sulem.jpg"),
      },
      {
        name: "Paul Giamatti",
        castpic: require("../assets/movies/cast/Paul.webp"),
      },
      {
        name: "Jaume Collet-Serra",
        castpic: require("../assets/movies/cast/director-jungle.webp"),
      },
    ],
  },
  {
    id: 10,
    tile: "Jurassic World Dominion",
    category: "Adventure",
    movietype: "CBFC: U/A",
    duration: "2h 27m",
    genre: "Sci-fi/Action",
    image: require("../assets/movies/adven/jurassic-world.jpg"),
    rating: 7.0,
    desc: "Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with historys most fearsome creatures in a new Era.",
    cast: [
      {
        name: "Chris Pratt",
        castpic: require("../assets/movies/cast/chrish.jpg"),
      },
      {
        name: "Laura Dern",
        castpic: require("../assets/movies/cast/dern.webp"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Jeff Goldblum",
        castpic: require("../assets/movies/cast/Jeff.jpg"),
      },
      {
        name: "Bryce Dallas Howard",
        castpic: require("../assets/movies/cast/Bryce.jpg"),
      },
      {
        name: "Sam Neill",
        castpic: require("../assets/movies/cast/sam-neil.webp"),
      },
      {
        name: "Jaume Collet-Serra",
        castpic: require("../assets/movies/cast/Jaume.jpg"),
      },
    ],
  },
  {
    id: 11,
    tile: "Cinderella",
    category: "Cartoon",
    movietype: "CBFC: U",
    duration: "1h 45m",
    genre: "Sci-fi/Action",
    image: require("../assets/movies/animation/cinderla.jpg"),
    rating: 6.9,
    desc: "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ellas fortunes begin to change after meeting a dashing stranger.",
    cast: [
      {
        name: "Chris Pratt",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Bryce Dallas Howard",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Jeff Goldblum",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Laura Dern",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Sam Neill",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        name: "Jaume Collet-Serra",
        castpic: require("../assets/movies/cast/Jaume.jpg"),
      },
    ],
  },

  {
    id: 12,
    tile: "Frozen",
    category: "Cartoon",
    image: require("../assets/movies/animation/p_frozen.jpeg"),
    rating: 6.9,
    desc: "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ellas fortunes begin to change after meeting a dashing stranger.",
    cast: [
      {
        name: "Chris Pratt",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Bryce Dallas Howard",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Jeff Goldblum",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Laura Dern",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Sam Neill",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        name: "Jaume Collet-Serra",
        castpic: require("../assets/movies/cast/Jaume.jpg"),
      },
    ],
  },
  {
    id: 13,
    tile: "The Frog",
    category: "Cartoon",
    image: require("../assets/movies/animation/the_frog.jpg"),
    rating: 6.9,
    desc: "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ellas fortunes begin to change after meeting a dashing stranger.",
    cast: [
      {
        name: "Chris Pratt",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Bryce Dallas Howard",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Jeff Goldblum",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Laura Dern",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Sam Neill",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        name: "Jaume Collet-Serra",
        castpic: require("../assets/movies/cast/Jaume.jpg"),
      },
    ],
  },
  {
    id: 14,
    tile: "The Incredibles 2",
    category: "Cartoon",
    image: require("../assets/movies/animation/The-Incredibles.jpg"),
    rating: 6.9,
    desc: "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ellas fortunes begin to change after meeting a dashing stranger.",
    cast: [
      {
        name: "Chris Pratt",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Bryce Dallas Howard",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Jeff Goldblum",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Laura Dern",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Sam Neill",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        name: "Jaume Collet-Serra",
        castpic: require("../assets/movies/cast/Jaume.jpg"),
      },
    ],
  },
  //   {
  //     id: 15,
  //     tile: "Avenger End Game",
  //     category: "marbel",
  //     image: require("../assets/movies/avenger-end.jpg"),
  //   },
  {
    id: 16,
    tile: "Samrat Prithviraj",
    category: "Bollywood",
    movietype: "CBFC: U/A",
    duration: "2h 15m",
    genre: "Action/Drama",
    image: require("../assets/movies/bolly/Pri.jpg"),
    rating: 4.5,
    desc: "Samrat Prithviraj is a 2022 Indian Hindi-language historical action drama film directed by Chandraprakash Dwivedi and produced by Yash Raj Films. The film is based on Prithviraj Raso, a Braj language epic poem about the life of Prithviraj Chauhan, a king from the Chahamana dynasty.[6] It features Akshay Kumar as Prithviraj Chauhan, while Manushi Chhillar makes her Hindi film debut playing the role of Sanyogita. The film also stars Sanjay Dutt, Sonu Sood, Manav Vij, Ashutosh Rana and Sakshi Tanwar in other pivotal roles.",
    cast: [
      {
        name: "Akshay Kumar",
        castpic: require("../assets/movies/cast/akshay.webp"),
      },
      {
        name: "Manushi Chhillar",
        castpic: require("../assets/movies/cast/manushi.webp"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Sanjay Dutt",
        castpic: require("../assets/movies/cast/Sanjay.jpg"),
      },
      {
        name: "Sonu Sood ",
        castpic: require("../assets/movies/cast/sonu.webp"),
      },
      {
        name: "Ashutosh Rana",
        castpic: require("../assets/movies/cast/rana.jpg"),
      },
      {
        name: "Chandraprakash Dwivedi",
        castpic: require("../assets/movies/cast/dr.webp"),
      },
     
    ],
  },
  {
    id: 17,
    tile: "The Kashmir Files",
    category: "Bollywood",
    image: require("../assets/movies/bolly/The_Kashmir.jpg"),
    rating: 9.0,
    desc: "The Kashmir Files is a 2022 Indian Hindi-language drama film[2] written and directed by Vivek Agnihotri.[6] The film presents a fictional storyline[1][7][a] centred around the 1990s exodus of Kashmiri Hindus from Indian-administered Kashmir.[9][10] It depicts the exodus and the events leading up to it[11] as a genocide,[12][13][14][15][16] a notion that is widely considered inaccurate.[17][18] The film claims that the facts were suppressed by a conspiracy of silence",
    cast: [
      {
        name: "Anupam Kher",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Mithun Chakraborty",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Pallavi Joshi",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Chinmay Mandlekar ",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Darshan Kumar",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Vivek Agnihotri",
        castpic: require("../assets/movies/cast/dr.webp"),
      },
     
    ],
  },
  {
    id: 18,
    tile: "Kgf Chapter 2",
    category: "South",
    image: require("../assets/movies/south/kgf2.jpg"),
    rating: 9.2,
    desc: "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second instalment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty and Prakash Raj. It follows the assassin Rocky, who after establishing himself as the kingpin of the Kolar Gold Fields, must retain his supremacy over adversaries and government officials, while also coming to terms with his past.",
    cast: [
      {
        name: "Yash",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Srinidhi Shetty",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Sanjay Dutt",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Raveena Tandon ",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Prakash Raj",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        director: "Anthony Russo",
      },
      {
        director: "Joe Russo",
      },
    ],
  },
  {
    id: 19,
    tile: "RRR",
    category: "South",
    image: require("../assets/movies/south/RRR-2.jpg"),
    rating: 8.7,
    desc: "RRR[note 1] is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli who wrote the film with V. Vijayendra Prasad. It is produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a fictional story about two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), and their fight against the British Raj. Set in 1920, the plot explores the undocumented period in their lives when both the revolutionaries chose to go into oblivion before they began the fight for their country.",
    cast: [
      {
        name: "Ram Charan",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "N. T. Rama Rao Jr.",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Olivia Morris",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Ajay Devgn",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Alia Bhatt",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        director: "Anthony Russo",
      },
      {
        director: "Joe Russo",
      },
    ],
  },
  {
    id: 20,
    tile: "Baahubali 2: The Conclusion",
    category: "South",
    image: require("../assets/movies/south/bahubali2.jpg"),
    rating: 9.2,
    desc: "Baahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by Shobu Yarlagadda and Prasad Devineni under the banner Arka Media Works. The film was produced in Tollywood,[6] the centre of Telugu language films in India and was filmed in both Telugu and Tamil languages simultaneously. The film features an ensemble cast including Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah, Ramya Krishna, Sathyaraj, Nassar, and Subbaraju. The second cinematic part in the Baahubali franchise, it is the follow-up to Baahubali: The Beginning, serving as both a sequel and a prequel.[7] The film is set in medieval India and follows the sibling rivalry between Amarendra Baahubali and Bhallaladeva; the latter conspires against the former and has him killed by Kattappa. Years later, Amarendras son returns to avenge his death.",
    cast: [
      {
        name: "Prabhas",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Anushka Shetty",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Rana Daggubati",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Ramya Krishnan",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Tamannaah",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        director: "Anthony Russo",
      },
      {
        director: "Joe Russo",
      },
    ],
  },
  {
    id: 21,
    tile: "Beast",
    category: "South",
    image: require("../assets/movies/south/Beast.jpg"),
    rating: 5.2,
    desc: "Beast is a 2022 Indian Tamil-language action comedy film[4] written and directed by Nelson and produced by Sun Pictures. The film stars Vijay and Pooja Hegde, leading an ensemble cast including Selvaraghavan, Shine Tom Chacko, Yogi Babu, Redin Kingsley, VTV Ganesh, Shaji Chen, Aparna Das, Sathish Krishnan, Lilliput and Ankur Ajit Vikal. It revolves around an ex-RAW agents crusade to rescue people held hostage in a shopping mall by terrorists.",
    cast: [
      {
        name: "Vijay",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Pooja Hegde",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Aparna Das",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Yogi Babu",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Lilliput",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        director: "Anthony Russo",
      },
      {
        director: "Joe Russo",
      },
    ],
  },
  {
    id: 22,
    tile: "Vikram",
    category: "South",
    image: require("../assets/movies/south/vikram.jpg"),
    rating: 8.0,
    desc: "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.[6] The film stars Kamal Haasan, Vijay Sethupathi and Fahadh Faasil.[7][8] Kalidas Jayaram,[9] Narain and Chemban Vinod Jose play supporting roles while Suriya makes a cameo appearance. The films soundtrack and score are composed by Anirudh Ravichander, with cinematography handled by Girish Gangadharan and editing done by Philomin Raj. The film serves as the second installment in the Lokesh Cinematic Universe (LCU).[10] The plot continues from Kaithi (2019) and follows a black-ops squad led by Amar tracking down masked vigilantes, while he learns of a drug syndicate group called Vetti Vagaiyara, led by Sandhanam, who wants the missing drugs to be delivered to his cold-blooded boss Rolex.",
    cast: [
      {
        name: "Kamal Haasan",
        castpic: require("../assets/movies/cast/Robert-Downey.jpg"),
      },
      {
        name: "Vijay Sethupathi",
        castpic: require("../assets/movies/cast/Chris.jpg"),
      },
      // {
      //     name:'Chris Evans',
      //     castpic:require('../assets/movies/cast/Evans.jpg'),
      // },
      {
        name: "Fahadh",
        castpic: require("../assets/movies/cast/Mark.jpg"),
      },
      {
        name: "Shivani Narayanan",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },
      {
        name: "Suriya",
        castpic: require("../assets/movies/cast/Scarlett.jpg"),
      },

      {
        director: "Anthony Russo",
      },
      {
        director: "Joe Russo",
      },
    ],
  },
];
export default Movies;
