/** Webmaster Directions: 
 * 1. Copy our current BNC and LEADERSHIP_FOLDER, paste it underneath into the Archive section
 *    and rename to BNC{B&C Number}. 
 * 2. Add this new archived B&C to the list of other archived B&Cs at the bottom called
 *    BNC_ARCHIVE (Minimize old B&Cs to make looking through this file easier). 
 * 3. With the original BNC, update the LEADERSHIP_FOLDER to be the current year's
 *    folder where all the images will be stored and update the JSON information!
 * 4. In your LEADERSHIP_FOLDER, add an image named Leadership_Title.jpg (must be exactly
 *    this including file format and capitalization of jpg) to change the photo of the 
 *    HalfTitle.
 * NOTE: Remember that if you don't follow the same photo naming convention we used (ex. 
 *    Leadership_{Position}.jpg) you will have to manually change the ImgSrc values in
 *    the JSON as well!
 * 
 * FUTURE IMPROVEMENTS: If we are ever able to use a NoSQL database, that could replace
 * this perfectly. With how different bio information has been throughout the years,
 * using our MySQL database or any structured database would be a nightmare and make
 * future changes/additions very difficult. 
*/

const LEADERSHIP_FOLDER = "/images/leadership/bnc36";

/* This is our current Board and Council, what is displayed */
export const BNC = [
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_President.jpg",
      committeeName: "President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Patrick.jpg",
          text: [
            {
                name: "Patrick Yuson",
                pronouns: "he/him",
                year: "3rd year",
                major: "BA Computer Science and Cognitive Science",
                email: "ntu7de@virginia.edu",
                city: "Richmond, Virginia",
                bio: "Hey everyone, my name is Patrick and I'm so excited to be serving you all as your President for the 2023-2024 term! A little bit about me: I love to play volleyball, hang out with friends, and play guitar! Feel free to hmu about anything; I'm always down to talk - (804)663-8802 :)!",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Vice_President.jpg",
      committeeName: "Vice President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Franceszca.jpg",
          text: [
            {
                name: "Franceszca Penaredondo",
                pronouns: "she/her",
                year: "3rd year",
                major: "Nursing",
                email: "nrg8ut@virginia.edu",
                city: "Charlottesville, VA",
                bio: "Hi!! I am super excited to be your VP this year. Some things about me, I LOVE to be active and go to the gym, my favorite sports are volleyball and flag football! I am the biggest coffee addict you will ever meet. I am always down to get boba or listen to Taylor Swift. I also love meeting and getting to know people so please come say hi if you ever get the chance!! Let’s have a fun year and know that we love and support you.",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Treasurer.jpg",
      committeeName: "Treasurer",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Kyla.jpg",
          text: [
            {
                name: "Kyla Quimson",
                pronouns: "she/her",
                year: "3rd year",
                major: "Economics Major, Real Estate and Data Analytics Minor",
                email: "zjb2pq@virginia.edu",
                city: "Jacksonville, FL",
                bio: "Hiii, I'm Kyla and I will be OYFA's treasurer for the year !! Get well acquainted with my Venmo @kyla-quimson, and if you don't have Venmo, you can always reach out to me on FB messenger (Kyla Mojica Quimson). Feel free to reach out if you have any questions or just want to talk as well. I like the sims, soccer, volleyball, shopping, and kpop, so hit me up whenever. Excited to get to know oyFANS, new and old !! Hoping to make six figures for oyfa 🤞🏼",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER + "/Leadership_Corresponding_Secretary.jpg",
      committeeName: "Corresponding Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Lauren.jpg",
          text: [
            {
                name: "Lauren Asperin",
                pronouns: "she/her",
                year: "3rd year",
                major: "Biology, Psychology Minor",
                email: "nrm3jz@virginia.edu",
                city: "Virginia Beach, VA",
                bio: "Howdy! As corresponding secretary, my job is centered around physically taking space to make space even though I'm just a wittle girl. Although the procedures in place make this job frustrating, I am glad to be the woman behind the curtain. If you ever have questions about room bookings or if you just wanna hang out, I am always down. OYFA has been my place of belonging and acceptance, so if you ever feel a strong sense of imposter syndrome, please feel free to reach out to me or any OYFAn. Much love ooxxooXoXXx (hug hug, kiss kiss, hug hug, big kiss, little hug, kiss kiss, little kiss).",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER + "/Leadership_Recording_Secretary.jpg",
      committeeName: "Recording Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Nathan.jpg",
          text: [
            {
                name: "Nathan David",
                pronouns: "he/him",
                year: "2nd year",
                major: "Trolling",
                email: "mqp9jh@virginia.edu",
                city: "7",
                bio: "Whats up guys im Nathan David! Nathan David Nathan David Nathan David Nathan David Nathan David Nathan David",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Outreach_Coordinator.jpg",
      committeeName: "Outreach Coordinator",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Franky.jpg",
          text: [
            {
                name: "Franceska Padilla Coo",
                pronouns: "she/her",
                year: "3rd year",
                major: "BS Computer Science, Data Science Minor",
                email: "fdp6kz@virginia.edu",
                city: "DMV",
                bio: "I coordinate outreach for OYFA. I love to chit-chat, so let's grab a drink and talk. \"I don't have to prove anything to anyone. I only have to follow my heart and concentrate on what I want to say to the world. I run my world.\" - Beyonce",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Culture.jpg",
      committeeName: "Culture",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Sofia.jpg",
          text: [
            {
                name: "Sofia Romulo",
                pronouns: "she/her",
                year: "2nd year",
                major: "Cognitive Science Major, Entrepreneurship Minor",
                email: "tvb5pr@virginia.edu",
                city: "Chesapeake, VA",
                bio: "Hello!! It is me Sofia and I am CULTURE!!!! CULTURE CHAIR!!! and I can't wait to bring you that OYFA Barrio magic we all know and love HooooooooooooORAH see you are Barrio 2024 and BRING THE HYPE!",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Eric.jpg",
          text: [
            {
                name: "Eric Yeatts",
                pronouns: "he/him",
                year: "2nd year",
                major: "Biochemistry on Pre-Med Track",
                email: "tbw3hs@virginia.edu",
                city: "Virginia Beach, VA",
                bio: 'Hello OYFA! My name is Eric "Rizzmaster" Yeatts, but I also go by "Rick" from Rick & Morty and "Watson" from Watson and Crick (DNA scientists). I am excited to be one of your culture chairs this year, and my coochie (cochair) Sofia and I hope to have lots of fun with y\'all. I am a very goofy person, and you will 100% know when I\'m laughing (its obnoxious af). Besides this, I\'ll keep it real when needed, and if you need any advice on pre-med related endeavors then please reach out to me. Besides OYFA, I love listening to music and dancing, and the gym is my 3rd home at UVA (1st = Bice, 2nd = Clem Library :( ). I\'m always down to hang or chat, and I\'m looking forward to spending the upcoming year with everyone!!!',
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Historic.jpg",
      committeeName: "Historic",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Alyssa.jpg",
          text: [
            {
                name: "Alyssa Manalo",
                pronouns: "she/her",
                year: "3rd year",
                major: "Cognitive Science, Studio Art Minor",
                email: "ajw3tt@virginia.edu",
                city: "Richmond, Virginia",
                bio: "Hihi I'm Alyssa and I'm a rising third year majoring in Cognitive Science with a minor in Studio Art. In my free time, I like to dance (K-Edge and AKAdeMiX <3), make art, and do tarot readings (~let's bond and let me read your cards~). I am very excited to be historic chair and I'm ready to make history with you all for the next year :DDD",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Dean.jpg",
          text: [
            {
                name: "Dean Paler",
                pronouns: "he/they",
                year: "2nd year",
                major:
                  "Cognitive Science and Pyschology Double Major, Data Science Minor",
                email: "hdh4ys@virginia.edu",
                city: "Norfolk, VA",
                bio: "Hello everyone!! My name is Dean, and I am super excited to be 1/2 of your Historic chairs for this year! Some things I enjoy are photography, fashion/thrifting, basketball, cats, and Pokémon :D Ask me to take your pictures please I’m always down. I promise to do you right for sure. I’ll be at almost all OYFA events taking pictures, so don’t be afraid to say hi! Catch me at the Multicultural Student Center… probably wearing jorts. Instagram: @deanpaler",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Membership.jpg",
      committeeName: "Membership",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Tori.jpg",
          text: [
            {
                name: "Tori Ochave",
                pronouns: "she/her",
                year: "3rd year",
                major: "Studio Art Major, Art History Minor",
                email: "jcp9cb@virginia.edu",
                city: "Virginia Beach, VA",
                bio: "HELLOYFA! I'm Tori, 1/2 of your mem chairs this year (shoutout to my Co Chair Christine aka CCC)! I'm so excited to get to know everyone this year :0 Outside of OYFA you can find me wandering around Ruffin Hall or the Fralin Museum (apply 2 docents!!!!) I also am an avid swifite, big headphone girlie, and kpop enjoyer I fear.. Find me on spotify @vcochave and ig @tori.ochave! If you ever need anything at all, don't hesitate to reach out! I'm always down for a coffee date/boba run",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Christine.jpg",
          text: [
            {
                name: "Christine Amor",
                pronouns: "she/her",
                year: "3rd year",
                major: "Studio Art - New Media Concentration, ASL Minor",
                email: "cqv6ja@virginia.edu",
                city: "Aldie, Virginia",
                bio: "hello! i'm christine, one of your membership chairs for oyfa this year!! let’s hang out and talk and eat and chill and have fun and honestly do whatever you wanna do. im busy but not actually, so im down for whateva. i’m super excited for this year in oyfa to get know everyone and make meaningful memories. can’t wait to meet you all!! also… hmu if ur swag or just tryna get swaggy",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Public_Relations.jpg",
      committeeName: "Public Relations",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Jessie.jpg",
          text: [
            {
                name: "Jessie Mai",
                pronouns: "she/they",
                year: "3rd year",
                major: "Studio Art, Japanese Minor",
                email: "jm3euv@virginia.edu",
                city: "Stafford, VA",
                bio: "I art you art OYFArt",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Aliza.jpg",
          text: [
            {
                name: "Aliza Susatijo",
                pronouns: "she/her",
                year: "2nd year",
                major: "Political and Social Thought, Data Science Minor",
                email: "egg2qp@virginia.edu",
                city: "Loudoun County, VA",
                bio: "hi!! i’m aliza and i’m one of the PR chairs this year! i love to read, cook, and collect little trinkets! so very much hmu w any book recs, meals u want to share w me😮, or cute little figures (luv smiskis/sonny angels)!! i am always here for u guys and down to chat or hangout!",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Community.jpg",
      committeeName: "Community",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Jenilyn.jpg",
          text: [
            {
                name: "Jenilyn Vinluan",
                pronouns: "she/her",
                year: "2nd year",
                major: "Global Public Health",
                email: "dkj9yx@virginia.edu",
                city: "Warrenton, VA",
                bio: "Hi there! My name is Jenilyn Vinluan and I am a current second year! I am this year's Community Chairs and I'm so excited to serve the OYFA, UVA, and Charlottesville Community! :) Some of my favorite hobbies include dancing Ballet, taking group exercise classes, binge watching shows, and trying new foods with friends! I can't wait what this year has in store! Thank you everybody and I hope to see you all around!",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Karinna.jpg",
          text: [
            {
                name: "Karinna Fuglie",
                pronouns: "she/her",
                year: "2nd year",
                major: "Environmental Science Major with Global Sustainability Minor",
                email: "aze8kt@virginia.edu",
                city: "Falls Church, VA",
                bio: "Hello OYFA! I'm Karinna, one of your Community Chairs! I love reading, hiking, listening to music, and all my friends! You can find me in the library, on the field, or asleep (I don't mess around with work hard-play hard). Feel free to introduce yourself so we can be friends! Please hmu: @karinna.fuglie",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Social.jpg",
      committeeName: "Social",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Hannah.jpg",
          text: [
            {
                name: "Hannah So",
                pronouns: "she/her",
                year: "4th year",
                major: "Biochemistry and Global Public Health",
                email: "hhs5suk@virginia.edu",
                city: "Mechanicsburg, PA",
                bio: "Hello! So excited to see you found our website! I am one-half of your social chair, and I am very excited to bring everyone fun events where they can meet cool and awesome people. Hope to meet you soon!",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Sydney.jpg",
          text: [
            {
                name: "Sydney Queener",
                pronouns: "she/her",
                year: "4th year",
                major: "Marketing and IT, Anthropology Minor",
                email: "scq2xe@virginia.edu",
                city: "Fairfax, VA",
                bio: "Hii! My name is Sydney and I am a fourth-year majoring in Commerce with a Concentration in Marketing and IT. I am one of your social chairs this year and I'm so excited to plan fun events for you to meet new people and have great memories!",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Sports.jpg",
      committeeName: "Sports",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Ryan.jpg",
          text: [
            {
                name: "Ryan Dioneda",
                pronouns: "he/him",
                year: "2nd year",
                major: "Computer Science",
                email: "gfk4tg@virginia.edu",
                city: "Chesapeake, VA",
                bio: "Heyo everyone, my name is Ryan Dioneda and I am one of the OYFA sports chairs this year! A little about me is that I love playing sports (soccer and volleyball specifically), listening to music, and watching anime/movies. I'm also a big foodie who loves to eat almost anything! Instagram: @diooryan Spotify: @diooryan",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Vanessa.jpg",
          text: [
            {
                name: "Vanessa Huynh",
                pronouns: "she/her",
                year: "2nd year",
                major: "Biomedical Engineering",
                email: "bgg6ma@virginia.edu",
                city: "Virginia Beach, VA",
                bio: "Hey guys!! My name is Vanessa Huynh, and I'm a second year majoring in biomedical engineering!! I'm happy to be serving as one of your sports chairs for this year. My favorite sports are lacrosse, field hockey, and flag football. When not on the field, you will most likely find me studying at a library or hanging out with friends. I'm so excited to expand OYFA's sports community, and I can't wait for what this year has to offer.",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Advocacy.jpg",
      committeeName: "Advocacy",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Jaco.jpg",
          text: [
            {
                name: "Jaco Asistores",
                pronouns: "he/him",
                year: "2nd year",
                major: "BA Computer Science",
                email: "rnw7tc@virginia.edu",
                city: "Harrisonburg, VA",
                bio: "WASSUP GUYS I'm Jaco, I'm a second year CS major. I like watching movies, reading comics, and I'm also a big music nerd so talk to me about any cool music that you've been listening to recently 🔥🔥🔥I'm always down to hang out with people, so if you wanna know more about me come to the round table at the MSC and let's chill and talk while procrastinating on homework😼😼😼😼😼",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Olivia.jpg",
          text: [
            {
                name: "Olivia Cordero",
                pronouns: "she/her",
                year: "2nd year",
                major: "Nursing",
                email: "duk8su@virginia.edu",
                city: "Virginia Beach, VA",
                bio: "hi everyone! my name's olivia :>> i'm a 2nd year nursing student and am so excited to be one of your advocacy chairs this year! i love anything music-related and learning foreign languages! whenever i have time, i also like to edit fun little vlogs of me and my friends :b i’m always down to talk or exchange spotify playlists, so feel free to reach out anytime!",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_District_7.jpg",
      committeeName: "District 7",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Mo.jpg",
          text: [
            {
                name: "Mohammad Murad",
                pronouns: "he/him",
                year: "3rd year",
                major: "Computer Science, Data Science Minor",
                email: "vdr4jr@virginia.edu",
                city: "Stafford, VA",
                bio: "helloyfa!! I'm one of your District 7 chairs this year :) feel free to reach out to me for anything! add me on instagram: @mmurad05!! super excited to meet you all and even more excited to get you guys connect to the other D7 schools <3???!",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Maggie.jpg",
          text: [
            {
                name: "Maggie Hilado",
                pronouns: "she/her",
                year: "3rd year",
                major: "Applied Statistics on Pre-Med Track",
                email: "yaf2pf@virginia.edu",
                city: "Woodbridge, VA",
                bio: "helloyfa!! I'm one of your District 7 chairs this year :) feel free to reach out to me for anything oyfa, kpop, gaming, or stats related! add me on instagram: @maggiehilado !! super excited to meet you all and even more excited to get you guys connect to the other D7 schools <3",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Webmasters.jpg",
      committeeName: "Webmasters",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Sebastian.jpg",
          text: [
            {
                name: "Sebastian Borromeo",
                pronouns: "he/him",
                year: "3rd year",
                major: "Computer Science, Data Science Minor",
                email: "uwg3xs@virginia.edu",
                city: "South Riding, VA",
                bio: "hi guys my name is BASTY and I'm happy to be serving as one of your webmasters this year! My interests include volleyball, photography, working out, fashion, and an unhealthy obsession with fantasy football. Hit me up if you ever want to play Minecraft 😈",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Colby.jpg",
          text: [
            {
                name: "Colby Le",
                pronouns: "he/him",
                year: "3rd year",
                major: "Computer Science, Data Science Minor",
                email: "ncc9kn@virginia.edu",
                city: "Sterling, VA",
                bio: "Hi! I'm Colby and I'm one of your webmasters this year! I hope you are enjoying my child oyfaatuva.com. In my free time I be dressing (clothes not salads), shopping, listening to music, coffee-ing, gymming, and martial art-ing. In fact I run OYFA Kickboxing - come out and have a blast! This is technically my fourth year so I want to make a special effort and strive to be inclusive as a mentor and big, so know that I'm always available as a resource or a friend. Just hit me up on Instagram at @colbyy_chan and definitely subject yourself to my music stalking on Spotify: Colby Le",
              },
          ],
        },
        {
            bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Christina.jpg",
            text: [
                {
                    name: "Christina Yang",
                    pronouns: "she/her",
                    year: "2nd year",
                    major: "Computer Science",
                    email: "gca9aa@virginia.edu",
                    city: "Ashburn, VA",
                    bio: "Hi hi ! I'm Christina and I came in through interims :0 I really like to bake, gym, and just hang. I'm very much down for anything and always here for you guys <3 ig: christinnayang",
                  },
            ],
          },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Scholarship.jpg",
      committeeName: "Scholarship",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Evie.jpg",
          text: [
            {
                name: "Evie Liu",
                pronouns: "she/her",
                year: "2nd year",
                major: "Biology",
                email: "zzh7vj@virginia.edu",
                city: "Virginia Beach, VA",
                bio: "Haiiii I'm Evie and I'm super excited to be one of your Scholarship Chairs this year! Let's hang out and study or play minesweeper or watch silly romcoms.",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Rob.jpg",
          text: [
            {
                name: "Robert Cajes",
                pronouns: "he/him",
                year: "3rd year",
                major:
                  "Cognitive Science with a Neuroscience concentration, Sociology Minor",
                email: "sjd8sr@virginia.edu",
                city: "Virginia Beach, VA",
                bio: "Heyooo! I'm Robert and I'm one of your 36th Scholarship Chairs :0 Some of my hobbies are eating at Mochikos or doing no work at the MSC. As Scholarship, I hope to be able to help you all in your academic goals (i can tell you the greatest, lowkey study spots - or napping spots - on grounds). Excited to have a great year :)",
              },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER + "/Leadership_Student_Advisors.jpg",
      committeeName: "Student Advisors",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Sam.jpg",
          text: [
            {
                name: "Sam Dioneda",
                pronouns: "he/him",
                year: "4th year",
                major: "Nursing",
                email: "msd3gjj@virginia.edu",
                city: "Chesapeake, VA",
                bio: "Hi! Given this is my last year at UVA and in OYFA, I only hope to make it a great one! I hope you've found your way around the website LOL and hopefully in OYFA! When I'm not doing OYFA stuff you can usually find me running, reading manga and or cooking hehe. Please feel free to reach out to me if you need anything, and to any others as well. Be awesome, do awesome things, and eat well! See ya around!",
              },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER + "/Leadership_Josh.jpg",
          text: [
            {
                name: "Josh De Vera",
                pronouns: "he/him",
                year: "4th year",
                major: "BS Computer Science",
                email: "jvd7eqj@virginia.edu",
                city: "Manassas, VA",
                bio: "Hey what's up y'all! I'm Josh and I'm one of your Student Advisors for the 2023-24 school year! Outside of class I enjoy eating/cooking food, going to the gym, watching random tv shows on netflix, and playing a bunch of sports (even if I suck lol). If you ever wanna eat food, get involved in OYFAs sports community, or just have a random convo, catch me at the msc or reach out hehe. I'm excited to get to know everyone this year !!",
              },
          ],
        },
      ],
    },
];  

/* =========== Archive ============================================= */
const LEADERSHIP_FOLDER_35 = "/images/leadership/bnc35";

//TODO: Ask Alyssa if she wants something different for 35. Otherwise reuse 36th
export const BNC35 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_President.png",
    committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Angie.png",
        text: [
          {
            name: "Angelina Rodriguez",
            pronouns: "she/her",
            year: "4th year",
            major:
              "Echols Interdisciplinary Major in Biology, Psychology, & Anthropology",
            email: "amr4rnq@virginia.edu",
            city: "Chesapeake, Virginia",
            bio: "Hello everyone! I hope this bio finds you well. I'm Angie, and I am your president for the 2022-2023 year! Given this is my last year at UVA and in OYFA, I really want to make it a special and memorable one. I'm excited to work alongside all the underclassmen that I've seen grow, and meet the new generation of oyfans to come. Feel free to reach out to me whenever and about whatever--I'd love to hear from you!",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Vice_President.png",
    committeeName: "Vice President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Nikolle.png",
        text: [
          {
            name: "Nikolle Esteban",
            pronouns: "she/her",
            year: "4th year",
            major: "Medical Anthropology and Sociology",
            email: "nve4njz@virginia.edu",
            city: "NOVA",
            bio: "Mabuhay and thanks for stopping by our website! I'm excited to spend my last year at UVA dedicating time to the organization that has given me several life lessons and even more life-long friends. OYFA is all about community building, so whether or not you're young, Filipino, or American, I hope you can find a people and a place to love in these four years. See you soon! :)",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Treasurer.png",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Julia.png",
        text: [
          {
            name: "Julia Pan",
            pronouns: "she/her",
            year: "3rd year",
            major: "Neuroscience, Government Minor",
            email: "jp5ycx@virginia.edu",
            city: "Chesapeake, VA",
            bio: "Hello everyone! I'm Julia Pan, your treasurer for this year! In my free time, I am often watching a new show or grabbing food with others. So reach out anytime if you would like to grab a meal with me at anytime! I'm trying to pick up daily reading again so also lmk if you have any book recommendations. Can't wait to meet all of you and to host financial literacy nights to share some financial tips! <3",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_35 + "/Leadership_Corresponding_Secretary.png",
    committeeName: "Corresponding Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Sam.png",
        text: [
          {
            name: "Sam Dioneda",
            pronouns: "he/him",
            year: "3rd year",
            major: "Nursing",
            email: "msd3gjj@virginia.edu",
            city: "Chesapeake, VA",
            bio: "Hi I'm Sam! I'm use he/him pronouns and am a 3rd year nursing student :3. I hope you've found your way around the website LOL and hopefully in OYFA! When I'm not doing OYFA stuff you can usually find me tending to my 3 (maybe 4 by the time you read this) beautiful sons... that are goldfish, running, reading manga and or cooking hehe. Please feel free to reach out to me if you need anything, and any others as well. Be awesome, do awesome things, and eat well! See ya around!",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_35 + "/Leadership_Recording_Secretary.png",
    committeeName: "Recording Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Patrick.png",
        text: [
          {
            name: "Patrick Yuson",
            pronouns: "he/him",
            year: "2nd year",
            major: "Computer Science and Cognitive Science",
            email: "nntu7de@virginia.edu",
            city: "Richmond, VA",
            bio: "What's up, guys! I'm your Recording Secretary for this year, so please feel free to reach out to me about anything WIO related or to j talk >:) A little bit about myself, I love to play volleyball, listen to music, and hang out with friends! Be sure to subscribe to the WIO to stay in the know about upcoming events and everything OYFA related!",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_35 + "/Leadership_Outreach_Coordinator.png",
    committeeName: "Outreach Coordinator",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Cheryll.png",
        text: [
          {
            name: "Cheryll Caalim",
            pronouns: "she/her",
            year: "3rd year",
            major: "Global Public Health w/Pre-Med",
            email: "ctc7rv@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "I joined OYFA to learn more about my Filipino heritage, and it’s been a blast getting to know such amazing individuals along the way! As Outreach Coordinator, I am beyond excited to connect OYFA and its members to resources and opportunities to elevate our identity as well as our overall well-being! Favorite Quote: “It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.” - Vincent Van Gogh",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Culture.png",
    committeeName: "Culture",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Josh.png",
        text: [
          {
            name: "Josh De Vera",
            pronouns: "he/him",
            year: "3rd year",
            major: "BSCS with a minor in health and well-being",
            email: "jvd7eqj@virginia.edu",
            city: "Manassas, VA",
            bio: "Hello! It's me, Josh, your 35th culture chair and I'm excited to bring the good vibes and energy to OYFA this year through Culturefest, Barrio, and all the events we have this year! I can't wait to see everyone and get closer as an OYFamily hehe. Reach out if you wanna play sports or eat food (or both)!",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Adrian.png",
        text: [
          {
            name: "Adrian Mamaril",
            bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Adrian.png",
            pronouns: "he/him",
            year: "4th year",
            major: "Commerce (Finance and Accounting) and Foreign Affairs",
            email: "scm5ht@virginia.edu",
            city: "Manila, Philippines",
            bio: "ask me anything!! I want to help you get through all the confusion, academics, resources, career, etc.! Instagram: adrian_mamaril_",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Historic.png",
    committeeName: "Historic",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Maddie.png",
        text: [
          {
            name: "Maddie Miles",
            pronouns: "she/her",
            year: "2nd year",
            major: "Biochemistry and Spanish with a Biology Minor",
            email: "rra6ps@virginia.edu",
            city: "Centreville, VA",
            bio: "Remember your 3 P's - Pascual, Padilla, Pangilinan.",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_John.png",
        text: [
          {
            name: "John Le",
            pronouns: "he/him",
            year: "4th year",
            major: "Cognitive Science and Entrepreneurship Minor",
            email: "jcl6mep@virginia.edu",
            city: "Sterling, VA",
            bio: "Heyo, my name is John Le and I am a fan of classical guitar, basketball, photography, meeting new friends, having deep conversations about life, and just vibing to chill music. As a fourth year, it's beginning to hit that everything will soon be my last, so I am trying to make the most of it! If you see me around, please feel free to introduce yourself and let me know how it's going :D. Instagram: @jcl.media Spotify: RA John",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Membership.png",
    committeeName: "Membership",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Jasmine.png",
        text: [
          {
            name: "Jasmine Wang",
            bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Jasmine.png",
            pronouns: "she/her",
            year: "2nd year",
            major:
              "Political & Social Thought and English Majors, Data Science Minor",
            email: "sqp8eu@virginia.edu",
            city: "NOVA",
            bio: "HAI FRIENDS! I'm Jasmine and I'll be ONE OF YOUR MEM CHAIRS THIS YEAR!! Some lil sound bites about me: I love baking, bereal, kombucha, platform shoes, and have a growing wolf shirt collection (not in a furry kind of way tho). I am so beyond excited to get to know you all and am always down to grab a bite ~phone eats first~, take a walk, or just lounge around :)). hashtag make more MEMories. BeReal: jasminewang Instagram: @jasmine.wangg Venmo: @jasminewangg Bopdrop: jasminewang",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Larry.png",
        text: [
          {
            name: "Larry Egalla",
            pronouns: "he/him",
            year: "2nd year",
            major: "Aerospace Engineering",
            email: "fmd4hs@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "Hellor friends. I am a fun and chill guy who likes to chill and have fun. But I am also your mem chair for the 2022-2023 school year >:))) I like: volleyball (5 year gang), lifting (king of squattopia), rock climbing (i am okay at this one), playing my bass (I am in a band with Patrick and Franceszca. We are called Larry's band), having fun (what can I say), and being chill (what can I say). I like to do things. I also really like talking to people :) I vibe with anyone and everyone. follow me on instagram: @larrrysweatshirt",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Public_Relations.png",
    committeeName: "Public Relations",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Alyssa.png",
        text: [
          {
            name: "Alyssa Manalo",
            email: "ajw3tt@virginia.edu",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Chris.png",
        text: [
          {
            name: "Christopher Collins",
            pronouns: "he/him",
            year: "3rd year",
            major: "Architecture",
            email: "cgc4sbm@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "Hello. My name is Christopher Collins. When I am not making oyfa graphics, I like to have long walks on the beach at sunset. My friends say I am quirky, smart, shy, but also fearless. My family [Amihan] and friends are really important to me, especially my board and council bias, Jake Ryan Ochave. I can be silly at times, I love to laugh, I'm down to earth, and I love to travel. People tend to notice my eyes and my smile, and there’s no such thing as a typical Friday night for me. Favorite Quote: 'Live, Laugh, Love', Instagram: @crispy.lifts, Minecraft Username: americanramen",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Community.png",
    committeeName: "Community",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Maggie.png",
        text: [
          {
            name: "Maggie Hilado",
            pronouns: "she/her",
            year: "2nd year",
            major: "Applied Statistics Major on Pre-Med Track",
            email: "yaf2pf@virginia.edu",
            city: "Woodbridge, VA",
            bio: "Hello all! I'm Maggie, one of the Ms in CoMMunity! I'm a second year who intends to major in Statistics on the Pre-Med Track. Hobbies include Kpop, anime, gaming, music (pls send OPM recs :P) and trying out new restaurants. I can't wait to get to know everyone and never hesitate to reach out to me if you ever want to hang! Find me studying/vibing in the Multicultural Student Center! Instagram: @maggie.hilado, Favorite Quote: 'Let [him] be King... Me? I'm going to be the deadliest piece on the board.' - The King's Men",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Marian.png",
        text: [
          {
            name: "Marian Herboso",
            pronouns: "she/her",
            year: "2nd year",
            major: "Youth & Social Innovation and Psychology",
            email: "vrn4qr@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "Helloyfa!! I'm Marian and I'm super excited to be one of the Ms in OYFA's CoMMunity <3 Through B&C, I hope that we get to connect you and people outside to their cultural identities, and bring everyone together. I'm grateful for OYFA for bringing me closer to Filipino culture and helping me define who I am, so I want to create a space where our members can feel the same way <3 In my free time, when I'm not drowning myself in school work, you can catch me watching anime, listening to k-pop, playing games, or succumbing to my boba addiction at Moge :,) I'm excited for what's to come! Being a YSI major in the School of Education, I love to advise and mentor people, so please feel free to come to me for anything!!! Hit me up whenever, to talk abt whatever hehe ヽ(⌐■_■)ノ♪♬ - Instagram: @mrnhrbso",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Social.png",
    committeeName: "Social",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Jared.png",
        text: [
          {
            name: "Jared Mirt",
            pronouns: "he/him",
            year: "4th year",
            major: "Biomedical Engineering, CS Minor",
            email: "jam9qbq@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "Heyo, I'm Jared and I am your social chair along w Ari. As you can see it is our 4th year so we are ready to have the most radical/ exciting/ wild/ wholesome/ what ever adjective you want - year and we are going to leave this place w a bang (maybe, don't hold that to me). I enjoy: cooking, snowboarding, lifting, volleyball, scary movies, music and gaming. Please reach out if you ever want to hang or have a fun idea for a social outing.",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Ariane.png",
        text: [
          {
            name: "Ariane Tiongco",
            pronouns: "she/her",
            year: "4th year",
            major:
              "Commerce (Marketing and IT concentrations), Japanese Language and Literature Minor",
            email: "apt3tv@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "Hello, my name is Ariane, and I’m super excited to serve as your social committee chair this year. Outside of oyfa, I love to read manga/manhwa, crafting, and give advice about everything, even if I have no idea what I’m talking about. I am currently entering my rhythm gaming and Pilates era. Next con: Otakon 2023",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Sports.png",
    committeeName: "Sports",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Kyla.png",
        text: [
          {
            name: "Kyla Quimson",
            pronouns: "she/her",
            year: "2nd year",
            major: "Economics",
            email: "zjb2pq@virginia.edu",
            city: "Centreville, VA",
            bio: "Hey guys! I am a second year economics major, double minoring in real estate and data science. My favorite sports are soccer and volleyball, but I am down to try any sport. I also enjoy shopping, crocheting, and playing the sims. I first got involved in OYFA through volleyball, which became a space where I could de-stress and bond with other people. I am grateful for the community I have found within OYFA and I hope I can attract others into OYFA through sports. Feel free to reach out for anything! If you ask me to go on a boba run, my answer is immediately yes. I'm so so excited to meet everyone <3 - Favorite Quote: 'Maybe I made a mistake yesterday, but yesterday’s me is still me. I am who I am today, with all my faults. Tomorrow I might be a tiny bit wiser, and that’s me, too. These faults and mistakes are what I am, making up the brightest stars in the constellation of my life. I have come to love myself for who I was, who I am, and who I hope to become.' - RM",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Franceszca.png",
        text: [
          {
            name: "Franceszca Penaredondo",
            pronouns: "she/her",
            year: "2nd year",
            major: "Nursing",
            email: "nrg8ut@virginia.edu",
            city: "Charlottesville, VA",
            bio: "Hi fam!! I’m Franceszca and I am serving as one of your sports chairs for this year!! I am a 2nd year majoring in Nursing!! I'm in club volleyball, and I occasionally coach volleyball on the side as well so I’m super excited to bring lots of fun into our upcoming sports events!! Can’t wait for this next year. love yall :) - Favorite Quote: 'Life’s a bore if you don’t challenge yourself” - Nishinoya'",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Advocacy.png",
    committeeName: "Advocacy",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Tori.png",
        text: [
          {
            name: "Tori Ochave",
            pronouns: "she/her",
            year: "2nd year",
            major: "Undecided",
            email: "jcp9cb@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "HELLOOOYFA ! My name's Tori Ochave and I'm a 2nd year currently undecided in my major :0 But you can usually find me wandering around arts grounds somewhere... In my free time I love listening to music (kpop..... tswift... its a dangerous combo), making too many spotify playlists, drawing, going to museums, etcccc. It's my first year on B&C and I'm so excited to be one of your advocacy chairs this year !!follow me on spotify (or else) vcochave",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Priscilla.png",
        text: [
          {
            name: "Priscilla Saldana",
            pronouns: "she/her",
            year: "2nd year",
            major: "English",
            email: "ssv7vb@virginia.edu",
            city: "Arlington, VA",
            bio: "Hey, Hey, Heyyy!! My name is Priscilla (but you can call me Pris :)) and I am 1/2 of your advocacy chair (give love to my amazing cochair Tori <33)!! OYFA has given me a space to learn not only about my filipino backgrounds, but also myself. I believe being in the know of what is happening in the Philippines as filipinos is so important, so hopefully I can keep yall biosrmed and advocate for you all <3333 Outside of OYFA, I am also part of an amazing community called FYP (First Year Players)-- a musical theater group hehe. This year I am head of costumes and maybe yall can come watch our shows. Anyways, if you ever need anything HMUU, my DMs are always open! I hope everyone finds a home here in OYFA just like I did!!! -- AdvocATE out snap: @pris5824 insta: @prisclla_saldana bereal: prispanda",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_District_7.png",
    committeeName: "District 7",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Lauren.png",
        text: [
          {
            name: "Lauren Asperin",
            pronouns: "she/her",
            year: "2nd year",
            major: "Biochemistry",
            email: "sjd8sr@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "Hey sexy ;) I'm so glad you're interested in OYFA. I am Lauren Asperin (pronounced like the drug), and I am half of your D7 chairs! When I joined OYFA, I immediately felt like I was part of a family. Now that I can be on council, I can't wait to be a part of so many more memories. Let me know if you need anything, and I'll be right there. D WHAAAAAT???!",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Rob.png",
        text: [
          {
            name: "Rob Cajes",
            pronouns: "he/him",
            year: "2nd year",
            major: "Neuroscience, Sociology Minor",
            email: "sjd8sr@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "D WHAT!?? Yo guys, I'm Rob and I'm one of the co-chairs for D7 this year >:) I'm a big fan of spam musubi, mayochup, hitting PRs, and wendy's. One of my favorite first year oyfa memories was D7 Olympics - shoutout OYFAtree - so I'm super excited to bring the hype with my co-chair Lauren to W&M mwahaha. Can't wait to meet and get to know all the new OYFAns!! Favorite Quote: 'Cheers to that' - Jacob Wells - Instagram: @robert.cajes",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Webmasters.png",
    committeeName: "Webmasters",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Franky.png",
        text: [
          {
            name: "Franceska Coo",
            pronouns: "she/her",
            year: "3rd year",
            major: "Computer Science (BS), Data Science",
            email: "fdp6kz@virginia.edu",
            city: "Alexandria, VA",
            bio: "hi gang <3 live love laugh oyfa you can always come to me for cafe dates, library study sessions, advice, rants, tea sessions (both physical and metaphorical), thrifting, or any sort of help. i'm here for all of you <3 - instagram: @frenchska (if it's not deactivated rn LOL) also my spotify hehehe: frankydominique",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Bernard.png",
        text: [
          {
            name: "Bernard Gonzales",
            pronouns: "he/him",
            year: "2nd year",
            major: "Computer Science & Linguistics",
            email: "qja8kc@virginia.edu",
            city: "Haymarket, VA",
            bio: "hi !! i'm a second year cs major and i'm so excited to be your webmaster this year ! in my free time, i enjoy sleeping, cooking good food, driving the bus, and playing the organ. catch me stressing about cs in the msc or driving a uts bus around grounds. see ya~ ;) - Instagram: @bernard_gonzales_",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Scholarship.png",
    committeeName: "Scholarship",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Alex.png",
        text: [
          {
            name: "Alex Paras",
            pronouns: "she/her",
            year: "2nd year",
            major: "Biochemistry (Pre-med Track)",
            email: "ksg5eu@virginia.edu",
            city: "Roanoke, VA",
            bio: "Hi! I'm Alessandra Paras, but everyone calls me Alex. I was raised in Roanoke, VA where my family became part of a tight-knit Filipino community, in which I learned to love my Filipino roots. Coming to college I wanted to keep that connection to the culture, and I thought that OYFA was a good way to do so! I'm premed student, but in my limited free time I like watching anything and everything on iWantTFC, so if you got recommendations, lmk!!! Favorite Quote: 'It always seems impossible until it's done.' - Nelson Mandela - Instagram: @_alex_paras_",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Brit.png",
        text: [
          {
            name: "Britney Hoang",
            pronouns: "she/her",
            year: "2nd year",
            major: "Foreign Affairs and American Studies",
            email: "rcq5jz@virginia.edu",
            city: "NOVA",
            bio: "Sup. LOL just kidding. Hi there! My name is Brit and I am currently a second-year! I am super excited to be serving as one of your Scholarship chairs this year! Outside of OYFA, I am currently involved with UPC, UDems, and PAFN. Some things that I love are: coffee shops, squishmallows, Korean food, Japanese stationary, shopping, volleyball, Kpop, miniature things, surprise toys, fashion, and BREAD!!! <3 I absolutely love meeting and talking to new people so don't be a stranger! I am always down for anything hehe. Catch me in Nau Hall or the Starbucks in Newcomb :P. Favorite Quote: 'Lachimolala' - Park Jimin - Instagram: @britdaknee, BeReal: missbrit, TikTok: @britdaknee",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Student_Advisors.png",
    committeeName: "Student Advisors",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Arabella.png",
        text: [
          {
            name: "Arabella Chiang",
            pronouns: "she/her",
            year: "4th year",
            major: "Statistics, Social Entreprenuership Minor",
            email: "ac7pje@virginia.edu",
            city: "Ashburn, VA",
            bio: "HANG OUT WITH ME! EAT WITH ME! ADVENTURE WITH ME! SEE YOU SOON! Favorite Quote: 'Skadoosh'",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_35 + "/Leadership_Jake.png",
        text: [
          {
            name: "Jake Ochave",
            pronouns: "he/him",
            year: "4th year",
            major: "Commerce",
            email: "jco9dz@virginia.edu",
            city: "Virginia Beach, VA",
            bio: "'There's always room for a unicorn in my life.' Favorite Quote: 'I am the wisest man alive, for I know one thing, and that is that I know nothing.' - Plato. Feel free to follow me @jakelovesrice on IG, BeReal, etc. Favorite YouTuber: Zogg from Betelgeuse",
          },
        ],
      },
    ],
  },
];

const LEADERSHIP_FOLDER_34 = "/images/leadership/bnc34";

//TODO: Check emails
export const BNC34 = [
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_President.png",
      committeeName: "President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Taylor.png",
          text: [
            {
              name: "Taylor Mendoza",
              pronouns: "he/him",
              year: "4th Year",
              major: "Economics and Commerce",
              email: "tm5gs@virginia.edu",
              city: "Eldersburg, Maryland",
              quote: "\"Here comes a feeling you thought you'd forgotten\" - Vampire Weekend",
              bio: "Howdy, OYFA. My name is Taylor Mendoza, and I'm proud to serve as President for the 2021-2022 term. I'm a fourth year majoring in Economics and Commerce and I'm from the best state in the DMV. You can usually find me at the MSC, on the tennis courts, or occasionally in class. My hobbies include spending time with my OYFAmily, collecting records, boarding of the snow and skate variety, and appreciating nonstandard corporate architecture. I'm so excited to play a part in this amazing organization in my last year at UVA, so looking forward to a great year!",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Vice_President.png",
      committeeName: "Vice President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Ariane.png",
          text: [
            {
              name: "Ariane Tiongco",
              pronouns: "she/her",
              year: "3rd Year",
              major: "Medical Anthropology and Sociology",
              email: "apt3tv@virginia.edu",
              city: "VA Beach, VA",
              quote: "\"WROWROWROWROWRO\" - Bertha",
              bio: "Hello, I'm Ariane, a 3rd year in the Comm school. I was born & raised in the 757, with 3 older brothers and then a little sister. I'm a die-hard nintendo kid. I love Zelda games, pokemon, and have a soft spot for forgotten Gameboy Advanced & Gamecube Games. I'm aquarius sun w/ a capricorn moon, so... idk how im in a relationship rn. I swear I have a leo rising somewhere tho because i crave love & attention hehe. I also have other miscellaneous hobbies, but if you wanna learn more about me hmu! we might have something in common <3"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Treasurer.png",
      committeeName: "Treasurer",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Arabella.png",
          text: [
            {
              name: "Arabella Chiang",
              pronouns: "she/her",
              year: "3rd Year",
              major: "Statistics, East Asian Minor",
              email: "jp5ycx@virginia.edu",
              city: "Ashburn, VA",
              quote: "\"It never hurts to keep looking for sunshine\" - Winnie the Pooh",
              bio: "Hey guys!!!! I'm Arabella Chiang and I'm your Treasurer this year, so be on the look out for those Venmo requests ;) I'm currently a 3rd year majoring in Statistics and minoring in East Asian Studies. I was born in Montgomery, Maryland, but was raised in Ashburn, VA, so I'm another NOVA kid here at UVA. If anyone lives in NOVA and wants to hang out over breaks hit me up :))\n Just a little about me, I love being on the go, so come out and adventure with me. There's many mountains to hike and trails to walk in Cville! I also love to just be around people and is always down to hang. I am a talker and can talk your ear off, so if you're down to hang I'm here! I am also a huge foodie, so come get food with me too. Maybe I'll cook, you never know.\n Anyways, I somehow found my way into OYFA my first year and was able to find people who I call my best friends and practically my family. I remember being hesitant in joining, until Sofia dragged me out to make Tiktoks with her and then the rest was history!",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER_34 + "/Leadership_Corresponding_Secretary.png",
      committeeName: "Corresponding Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Jazlyn.png",
          text: [
            {
              name: "Jazlyn Nguyen",
              pronouns: "she/her",
              year: "4th Year",
              major: "Cognitive Science concentrating in Computer Science",
              email: "jan3wb@virginia.edu",
              city: "Stafford, VA",
              quote: "\"Real pain for your sham friends, champagne for your real friends.\" - Anon",
              bio: "Hey guys! My name is Jazlyn Nguyen, and I’m half-Filipino and half-Vietnamese. I was born in Washington state, and moved to Virginia when I was 6. I love my relationships, and I love building community to help people feel at home! My hobbies include making music, gaming, and reading tarot cards~ Let me know if you want to see your future! Hint: It’s in OYFA"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER_34 + "/Leadership_Recording_Secretary.png",
      committeeName: "Recording Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Sam.png",
          text: [
            {
              name: "Sam Dioneda",
              pronouns: "he/him",
              year: "2nd Year",
              major: "Nursing",
              email: "msd3gjj@virginia.edu",
              city: "Chesapeake, VA",
              quote: "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\" - Mother Teresa",
              bio: "Hi hi friends - My name is Sam Dioneda, and I'm a second year nursing student serving as your Recording Secretary this school year. Outside of OYFA and being a nursing student, I am apart of MAN and was an OL this summer, so hi if you were an orientee of mine! When I'm not doing anything related to school or OYFA, I love to bake, cook, eat sugar lol, run, read manga, and binge anime.\nBesides the above, I also love to see people smile. Seeing people happy with who they are and what they do is as addicting as sugar to me, and I always strive to create that environment it whatever situation I am in.\nAs for OYFA, it may sound cliché, but OYFA has given me a home in the grand place that is UVA, and I am eternally grateful for that. Coming in as a first year during a pandemic was tough, but somehow, OYFA helped me grow in ways I never imagined, try new things I never would have given thought to (like dancing LOL), and let me meet and form friendships with people I will treasure or the rest of my life.\nSo enough of me already, we can talk about that another time. If you're reading this and you're on the website... see you at OYFA events and I hope to get to know you and see you smile :))"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER_34 + "/Leadership_Outreach_Coordinator.png",
      committeeName: "Outreach Coordinator",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Angie.png",
          text: [
            {
              name: "Angelina Rodriguez",
              pronouns: "she/her",
              year: "3rd Year",
              major: "Interdisciplinary in Biology, Psychology, and Anthropology",
              email: "amr4rnq@virginia.edu",
              city: "Chesapeake, VA",
              quote: "“A hug is always the right size” - Winnie the Pooh",
                bio: "Hello everyone! I hope this bio finds you well. I'm Angie, and I am your OC for this year! This past year, I discovered that 1) I have no self control when it comes to buying clothes, and 2) I’m obsessed with Korean food. I know this year will be all kinda of things, so you ever need anything, just lmk and I’ll help in any way I can! Regardless, I'll be here, outreaching :)"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Culture.png",
      committeeName: "Culture",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Lauren.png",
          text: [
            {
              name: "Lauren Manuel",
              pronouns: "she/they",
              year: "4th Year",
              major: "Pre-med Psychology | Health and Well-Being minor",
              email: "llm6ee@virginia.edu@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "\"The flower that blooms in adversity is the most rare and beautiful of all.\" - The Emperor, Mulan",
            bio: "Alas, I saw the bright light that dawned upon my wide eyes as I emerged from my mother's womb, and thus began the life I live today.\njk HAHA, hellOYFA all of you beautiful humans! my name is Lauren and I'm super excited to be serving as one of your Culture chairs for my last year here at UVA (': OYFA has given me some of the greatest experiences of my life throughout the past 3 years, and I can't wait to make even more memories with you all this year. outside of my academics, I enjoy being unapologetically myself, advocating for mental health and wellness (which I have struggled with for almost a decade so if you ever need someone to talk to I am always here!), and serving people in my community. my other hobbies include cooking yummy vegan recipes, going on hikes around the Blue Ridge area, tanning at the pool and beach, playing tennis, and singing even though I have awful performance anxiety. hmu if you wanna be friends <3\nPEACE. LOVE. KUL2RA."
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_JoshDa.png",
          text: [
            {
              name: "Josh Dano",
              bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Adrian.png",
              pronouns: "he/him",
              year: "4th year",
              major: "Global Public Health and Computer Science",
              email: "jgd5nm@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "\"The woods are lovely, dark and deep, but I have promises to keep, and miles to go before I sleep.\" – Robert Frost",
            bio: "Helloyfa! My name is Josh, and I am one of your Culture Chairs this year! I'm a fourth year studying Global Public Health and Computer Science (still unclear what I'll do post-grad). In my free time, I enjoy playing volleyball, thrifting, and binge watching Netflix series. Find me procrastinating in the Multicultural Student Center!\nPEACE. LOVE. KUL2RA."
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Historic.png",
      committeeName: "Historic",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Annie.png",
          text: [
            {
              name: "Annie Trinh",
              pronouns: "she/her",
              year: "2nd year",
              major: "Global Public Health, Anthropology Minor",
              email: "ant2ms@virginia.edu",
              city: "Richmond, VA",
              quote: "\"Live your life like a Studio Ghibli film, where every moment, even seemingly insignificant, is beautiful.\" - Anon",
              bio: "Hello hello, i'm Annie ! This is my first year on B&C but i'm beyond excited to be one half of your historic chairs! I'm a 2nd year, hopeful GPH major with a minor in Anthropology. I love film photography and learning languages (fun fact: i'm currently learning my 5th and 6th languages). Another thing I love doing is adding to +perfecting my coffee shop vibe playlist, so feel free to send me any good rnb/krnb/chinese-rnb song recs :))"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Emile.png",
          text: [
            {
              name: "Emile Cohen Suárez",
              pronouns: "he/him",
              year: "2nd year",
              major: "Undecided",
              email: "esc9jkx@virginia.edu",
              city: "Alexandria, VA",
              quote: "\"People say nothing is impossible, but I do nothing every day\" — Winnie the Pooh",
              bio: "Hiii I'm Emile! Currently a second year, RA, and undecided major-wise but we'll figure it out! I'm so excited to be one of your historic chairs! I love watching an unhealthy amount of television and movies at 2am. I'm always up for discussing them too! I also like to go on walks in the rain :) listen to music, play video games, read, and climb trees. Feel free to reach out just to chat or for anything at all!"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Membership.png",
      committeeName: "Membership",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_HannahS.png",
          text: [
            {
              name: "Hannah So",
              pronouns: "she/her",
              year: "2nd year",
              major: "Biochemistry",
              email: "hhs5suk@virginia.edu",
              city: "Mechanicsburg, PA",
              quote: "\"Quit, dont quit. Noodles, don't noodles. You are too concerned about what was and what will be. Yesterday is history, tomorrow is a mystery. But today is a gift, that is why it is called the 'present'\" - Master Oogway",
              bio: "Hello! I am your membership chair along with Jake this year. In my free time I love listening to music, watching cooking YouTube videos, and lying down. I also like to ice skate and impulsively purchase things I do not need .I am super excited to meet new people and make some mems :) Hope to see you soon!"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Jake.png",
          text: [
            {
              name: "Jake Ochave",
              pronouns: "he/him",
              year: "3rd year",
              major: "Commerce",
              email: "jco9dz@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "\"I need a room full of mirror so I can be surrounded by winners.\" - Kanye West",
              bio: "Who am I? I will tell you... I am Jake Ochave. The Jake Ochave. There are many stories about me. What stories have you heard? I am the Glob-glo-gab-galab. The shwabble-dabble-wabble-gabble flibba blabba blab. I'm full of shwibbly liber-kind. So please do not be in a bind, cuz' I have committed no crimes! So live life worrying about no dimes. Slime.\n*woosh *woosh*\n*Brown Streak zooms pass you and you are stunned by his stellar looks and steamy presence.*"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Public_Relations.png",
      committeeName: "Public Relations",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Sydney.png",
          text: [
            {
                name: "Sydney Queener",
                pronouns: "she/her",
                year: "2nd year",
                major: "Pre-Commerce, Anthropology Minor",
                email: "scq2xe@virginia.edu",
                city: "Springfield, VA",
                quote: "Give man fish, he eats for a day. Give man fish man eat for life <3",
                bio: "Hello! My name is Sydney Queener and I am one of the Public Relations chairs this year. I’m a second year majoring in Pre-Commerce and I am potentially minoring in Anthropology (honestly have no idea though? but it is fine). In my free time I like to shop (it is very much a problem), sew, bake, watch food videos on youtube, try new food and boba shops. I also really love dogs and cats."
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_HannahR.png",
          text: [
            {
              name: "Hannah Roldan",
              pronouns: "she/her",
              year: "2nd year",
              major: "Psychology and Media Studies",
              email: "hlr5dj@virginia.edu",
              city: "Farmville, VA",
              quote: "\"Just follow your heart, and keep smiling.\" - Kiki's Delivery Service (1989)",
              bio: "hi hi hi OYFA! My name is Hannah Roldan, and I’ll be serving OYFA as one of your Public Relations chairs for the 2021-2022 year. I’m currently a second year in the College of Arts and Sciences and currently I plan on studying Psychology and maybe also Media Studies. I’m so excited to be serving on OYFA’s B&C for the first time—Sydney and I have so many ideas we can’t wait to share with you! In my free time, I’m a freelance artist and general anime enthusiast. I also do play Genshin Impact a lot (hit me up if you wanna co-op!), and I will not hesitate to bake you a fresh batch cookies if you tell me you’re having a tough day. I look forward to getting to know you all! <3"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Community.png",
      committeeName: "Community",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Cheryll.png",
          text: [
            {
              name: "Cheryll Caalim",
              pronouns: "she/her",
              year: "2nd year",
              major: "Global Public Health",
              email: "ctc7rv@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "“It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.” - Vincent Van Gogh",
              bio: "I joined OYFA to learn more about my Filipino heritage, and it’s been a blast getting to know such amazing individuals along the way! Being community chair is only one way I can give back to this organization and to the rest of the world on whatever scale possible!"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Patrick.png",
          text: [
            {
              name: "Patrick Salvanera",
              pronouns: "he/him",
              year: "2nd year",
              major: "Chemical Engineering, Possible Sociology Minor",
              email: "pms6py@virginia.edu",
              city: "Stafford, VA",
              quote: "\"All I've had is coffee and leftover pie.\" - Laufey",
              bio: "My story?...still trying to figure it out ._."
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Social.png",
      committeeName: "Social",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Ben.png",
          text: [
            {
              name: "Ben Hill",
              pronouns: "he/him",
              year: "4th year",
              major: "Global Development Studies and Religious Studies",
              email: "bjh8wt@virginia.edu",
              city: "Manassas, VA",
              quote: "\"What's so amazing that keeps us stargazing, and what do we think we might see?\" - Kermit the Frog              ",
              bio: "What's up OYFA! My name is Ben and I'm excited to be one of your Social chairs this year! I am a fourth year studying Global Development Studies and Religion, so it's safe to say that I have NO clue what I want to do after college. I hail from the good ole 703 and my hobbies include impulsively buying vintage books, watching war movies, going to the gym, and singing covers of pop songs with 17 other guys. I can't wait to make wholesome AND heinous memories with everyone!!"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Korey.png",
          text: [
            {
              name: "Korey Busby",
              pronouns: "they/she",
              year: "4th year",
              major: "Nursing, African American Studies Minor",
              email: "kmb2rt@virginia.edu",
              city: "Houston, TX",
              quote: "\"She could beat me, but she could never beat my outfit.\" - Rihanna              ",
              bio: "My name is Korey I use they/she pronouns. I am a posse scholar studying in the School of Nursing. I was born and raised in Houston, Texas (H-Town Hottie)! I enjoy making memories with my friends, expressing myself with makeup, and being active on social media. My passions include working with kids (I have been an orientation leader, Resident Advisor, and Camp Counselor) and learning about Black history (I minor in AAS studies). When I graduate I hope to find a way to incorporate my passions with Nursing and give back to the community I was raised in."
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Sports.png",
      committeeName: "Sports",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_JoshDe.png",
          text: [
            {
              name: "Josh De Vera",
              pronouns: "he/him",
              year: "2nd year",
              major: "Computer Science, Health and Well-Being Minor",
              email: "jvd7eqj@virginia.edu",
              city: "Manassas, VA",
              quote: "\"The future belongs to those who believe in the beauty of their dreams\" - Shoyo Hinata",
              bio: "Hey y'all! I'm Josh De Vera and I'm one of your sports chairs for this year! I'm a 2nd year CS student in the e-school hoping to focus in cybersecurity. I love playing all sports and staying healthy physically and mentally. Feel free to hit me up to play sports, relax, or just talk about random things. I'm excited to see where we go with all the Sports events this year and hope to see y'all there! Fly high!"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Jay.png",
          text: [
            {
              name: "Janegela \"Jay\" Inthavong",
              pronouns: "she/her",
              year: "4th year",
              major: "Women and Gender Studies",
              email: "ji2fb@virginia.edu",
              city: "Philadelphia, PA",
              quote: "\"You can fly even higher.\" - Kageyama to Hinata",
              bio: "I am someone who is a weeb, loves edm/raves, and animals!! I also like having conversations about astrology and the universe :o Come out to volleyball and have fun with us!"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Advocacy.png",
      committeeName: "Advocacy",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Franky.png",
          text: [
            {
              name: "Franceska \"Franky\" Coo",
              pronouns: "she/her",
              year: "2nd year",
              major: "Computer Science",
              email: "fdp6kz@virginia.edu",
              city: "Alexandria, VA",
              quote: "\"Promise me you'll think about the implications!\" - Paul, The Guy Who Didn't Like Musicals",
              bio: "Heyyy! I'm Franky, and studying makes up 80% of my personality (yeah, I follow study accounts on every social media platform), which is why I'm one of your advocacy chairs! I think education and staying biosrmed is one of the most important things any individual can do for their community. The other 20% of my personality consists of constantly attempting to critique different media like a professional, upcycling/thrifting, and tennis. I also love cooking/baking and using my brain for anything >:D ! Feel free to hit me up if you ever want to rally or hold a verzuz, but just know that I'm always right..."
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Nikolle.png",
          text: [
            {
              name: "Nikolle Esteban ",
              pronouns: "she/her",
              year: "3rd year",
              major: "Medical Anthropology and Sociology",
              email: "nve4njz@virginia.edu",
              city: "Aldie, VA",
              quote: "\"Tis better to have loved and lost, Than never to have loved at all\" - In Memoriam A.H.H. by Alfred Lord Tennyson",
              bio: "Helloyfa! I'm excited to be your interim Advocacy chair this fall! We have a bunch of fun activities coming up so stay tuned!! Please reach out to me if you wanna talk, chill, or just vibe :)"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_District_7.png",
      committeeName: "District 7",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Maggie.png",
          text: [
            {
              name: "Maggie Encarnacion",
              pronouns: "she/her",
              year: "2nd year",
              major: "Undecided 🤠",
              email: "mme2hu@virginia.edu",
              city: "Farmville, VA",
              quote: "“I will not let the fact that I cannot do everything stop me from doing everything I can.” - and I forgot who said that but I read it in a book once and it stuck fnsnsmksk",
              bio: "Helloyfa helloyfa! I’m Maggie, Margaret Ann, Magrat, Maggot, Mama Maggie, or whatever you wanna call me and I’m excited to be your :D7 rep this year! I’m still figuring out what I wanna do with my life, and if you are too, then we can do it together 🥰 I’m always down for a random adventure or deep conversations about random things, so feel free to reach out hehe :)"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Sarah.png",
          text: [
            {
              name: "Sarah Menchavez",
              pronouns: "she/her",
              year: "2nd year",
              major: "Undecided",
              email: "sam7yr@virginia.edu",
              city: "Leesburg, VA",
              quote: "“Relax but don’t get comfortable” - Gucci Mane",
              bio: "Helloyfa! I’m Sarah and I’m so hyped to be your D7 rep this year!! I love OYFA with my entire heart <333 I’m also involved with Greek life at UVA as a pi phi. Hit me up if ever wanna binge Daniel Padilla movies ;)"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Webmasters.png",
      committeeName: "Webmasters",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Jared.png",
          text: [
            {
              name: "Jared Mirt",
              pronouns: "he/him",
              year: "3rd year",
              major: "Biomedical Engineering, Computer Science Minor",
              email: "jam9qbq@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "“Sometimes life is scary and dark. That is why we must find the light.” - BMO",
              bio: "What's up everyone! I'm Jared and I'm going to be one of your webmasters this year. I'm a third year studying biomedical engineer and still don't have a single clue of what I'm doing after college. I enjoy: cooking, snowboarding, anime, volleyball, scary movies, music and the limited edition lime straw from TroSmo (NOT Trop).\nI was lil late to the OYFA party and didn't join till my second semester of my first year. Even with my \"late\" start everyone was so welcoming and genuine. I quickly found my place at UVA within OYFA. So join ASAP! and come out to our meetings and events, fill out the little form, go to that dance practice even if you don't know anyone, the whole nine. I can't wait to meet you all."
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Emil.png",
          text: [
            {
              name: "Emil Diaz",
              pronouns: "he/him",
              year: "4th year",
              major: "Pre-med Biology, Computer Science Minor",
              email: "ecd4wa@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "\"Everyone forgets that Icarus also flew.\" -- Jack Gilbert, Failing and Flying",
              bio: "Hey everyone! My name is Emil, a fourth year pre-med student majoring in Biology and minoring in CS. A little about me, I was born in Manila and lived there for five years before my family moved to Virginia. I have a boxer back at home, her name is Allie. I love her with all my heart; a fun fact about her is that she sleeps like a human with her head always on a pillow and her bottom half under blanket. I like to play games--I recently migrated to PC gaming so woot woot. Some of my favorite games include the Dark Souls trilogy, Destiny, and Valorant; play with me some time! Also if you like to play chess, add me on chess.com so we can battle. Anyway, I'm really excited to meet all of you this year, and I can't wait to make memories with you all! :D"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Scholarship.png",
      committeeName: "Scholarship",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Isabel.png",
          text: [
            {
              name: "Isabel Carino",
              pronouns: "she/her",
              year: "3rd year",
              major: "Cognitive Science and Health and Well-Being",
              email: "cmc8smh@virginia.edu",
              city: "Centreville, VA",
              quote: "“May the flowers remind us why the rain was so necessary.” - Anon",
              bio: "I was born in Biñan, Laguna then moved to northern Virginia when I was 2 years old. I was grateful to grow up in such a diverse area in NOVA, but it wasn’t until I joined OYFA that I became more in touch with my Filipino roots. When I first came to UVA, I was really scared to be on my own for the first time, but OYFA quickly became a home away from home. I love having a community that I can share and appreciate my Filipino culture with! <3"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Leigh.png",
          text: [
            {
              name: "Leigh Mante",
              pronouns: "she/her",
              year: "4th year",
              major: "Global Public Health and Stastics, Global Sustainability Minor",
              email: "lm2uq@virginia.edu",
              city: "Virginia Beach, VA",
              quote: "\"Live fast, die young, bad girls do it well.\" - M.I.A.",
              bio: "I was born in Bohol, Philippines and moved to Virginia Beach when I was three. So obviously, my favorite thing to do in my free time is go to the beach, but I also enjoy thrifting, cooking, playing volleyball, working out, and getting ice cream with friends. :P My favorite time of day is golden hour, and if I could listen to one album for the rest of my life it would be Ctrl by SZA."
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Student_Advisors.png",
      committeeName: "Student Advisors",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Jana.png",
          text: [
            {
              name: "Jana Mirafuente",
              pronouns: "she/her",
              year: "4th year",
              major: "Nursing",
              email: "jbm3bd@virginia.edu",
              city: "Winston Salem, NC",
              quote: "“The butterfly counts not months but moments, and has time enough.” -Rabindranath Tagore",
              bio: "Ever since I was a kid I was always attracted to creating and making. I taught myself how to draw, paint, make jewelry, and have used creative writing as a channel for self-expression as well! This outlet has helped me a lot with mental health and personal growth/wellness, both of which I’m also really passionate about. Every day I hope to share this with my communities and to open others to their creative, freely expressive sides."
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_34 + "/Leadership_Grace.png",
          text: [
            {
              name: "Grace Yang",
              pronouns: "she/her",
              year: "4th year",
              major: "Biology, Social Entrepreneurship Minor",
              email: "gsy3ays@virginia.edu",
              city: "McLean, VA",
              quote: "\"I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.\" - Alan Watts",
              bio: "HELLOyfa it's Grace Yang one of your student advisors, and I'm so excited to see everyone back on grounds!! In my free time you can find me with my pup Luna, roller skating, or cooking--definitely hit me up if you want to explore fun things outside this year <3"
            },
          ],
        },
      ],
    },
];

const LEADERSHIP_FOLDER_33 = "/images/leadership/bnc33";

//TODO: Needs correct emails (they're copy-pasted values so incorrect)
export const BNC33 = [
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_President.JPG",
      committeeName: "President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/joshd.png",
          text: [
            {
              name: "Joshua Dano",
              pronouns: "he/him",
              year: "3rd Year",
              major: "Computer Science and Global Public Health",
              email: "jgd5nm@virginia.edu",
              city: "Virginia Beach, VA",
              bio: "Helloyfa! My name is Joshua Dano, and I am the OYFA President for this year! I'm a 3rd year majoring in Computer Science and Global Public Health (what am I doing after I graduate? Hoo knows honestly) My favorite pastimes are practicing calligraphy during class instead of actually taking notes, changing my major and life plan, and binge watching new Netflix shows!",
                extraText: [{text: "My favorite OYFA memory is the Culturefest Night Before Run Throughs during my first year. That's the moment I truly realized that OYFA was my home away from home and from then on I knew I wanted to give back to this organization as much as I can."},]
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Vice_President.JPG",
      committeeName: "Vice President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/michelle.png",
          text: [
            {
              name: "Michelle Hilado",
              year: "4th Year",
              major: "Biology",
              email: "apt3tv@virginia.edu",
              city: "Woodbridge, VA",
              extraText: [{text: "What I like about OYFA is that it connects me with other people who have a similar culture and/or upbringing to me! My favorite OYFA memories involve /attempting/ to dance at any Barrio or Culturefest practices (emphasis on attempting)."}],
              bio: "Hello friends, my name is Michelle Hilado and I am excited to serve as OYFA's Vice President for the 2020-2021 school year! I am a 4th year student in the College majoring in Biology with a minor in American Sign Language. Some things that I like are summer, bad horror movies, cute animal tiktoks, and bagels!"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Treasurer.JPG",
      committeeName: "Treasurer",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/taylor.png",
          text: [
            {
              name: "Taylor Mendoza",
              year: "3rd Year",
              major: "Economics and Commerce",
              email: "jp5ycx@virginia.edu",
              city: "Eldersburg, MD",
              extraText: [{text: "My favorite OYFA memory is shredding the mountains of Massanutten like it was nothin’ alongside many of my friends in OYFA."}],
              bio: "Howdy, OYFA. My name is Taylor Mendoza and I’ll be serving as this year's Treasurer on Board. I’m a third year in the McIntire School of Commerce, likely concentrating in Finance and IT in addition to an Economics Major. In my free time, I like to play tennis, watch movies, shoegaze, and play guitar. I’m quite excited to be serving on OYFA’s B&C again, and can’t wait to meet all of you throughout the year.",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER_33 + "/Leadership_Corresponding_Secretary.JPG",
      committeeName: "Corresponding Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/jaden.png",
          text: [
            {
              name: "Jaden Aponte",
              year: "4th Year",
              major: "Statistics",
              email: "jan3wb@virginia.edu",
              city: "Stafford, VA",
              extraText: [{text: "My favorite Oyfa memory is Assassins, because I love building trust with my friends and then betraying them. 😈"}],
              bio: "Hello hello ! It’s me, Jaden ! I am a 1975 and Carly Rae stan. Feel free to message me music recommendations please!"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER_33 + "/Leadership_Recording_Secretary.JPG",
      committeeName: "Recording Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/chris.png",
          text: [
            {
              name: "Christopher Collins",
              year: "2nd Year",
              major: "Architecture",
              email: "msd3gjj@virginia.edu",
              city: "Virginia Beach, VA",
              bio: "Ayo, was good - My name is Christopher Collins, aka your 2020-21 Recording SeChristary. I am a 2nd year in the A-school, majoring in Architecture on the pre-professional track. Besides that, I take photos, water my plants, and make a mean boba, so if any of those things interest you, hmu!",
              extraText: [{text: "Def Lakas. After the volleyball tournament in 2019, I was introduced to so many of the best facets that oyfa has to offer that thereafter, I felt like I had a home on grounds with this org. This event was the first time I ever took photos, had a conversation with some really amazing people in my family, and played with volleyball with a group (tho I’m still negative good at it). From this event, I was opened to so many opportunities that oyfa had to offer, beyond the dance/party aspect of it (which tbh ain’t my speed), and realized that there’s something for everyone here in oyfa."}]
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc:
        LEADERSHIP_FOLDER_33 + "/Leadership_Outreach_Coordinator.JPG",
      committeeName: "Outreach Coordinator",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/grace.png",
          text: [
            {
              name: "Grace Yang",
              year: "3rd Year",
              major: "Biology and Entrepreneurship minor",
              email: "amr4rnq@virginia.edu",
              city: "Mclean, VA",
              extraText: [{text: "I'll never forget first year during Assassins when I started talking to Monique in our COLA class to gain her trust, only to ask to see and hold her lime immunity because I couldn't tell if it was real. Owen swooped in from behind with his sock and made the kill. Love you Monique! <3"}],
              bio: "Hey everyone! I'm Grace Yang, your Outreach Coordinator. As a 3rd year, I'll be majoring in Biology in the College! Once we're back in person, you'll find me with my pup (Luna) on Grounds! I love music (I play bass clarinet and ukelele-ish) so let's exchange music recommendations!"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Culture.JPG",
      committeeName: "Culture",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/jazlyn.png",
          text: [
            {
              name: "Jazlyn Nguyen",
              year: "3rd Year",
              major: "Cognitive Science",
              email: "llm6ee@virginia.edu@virginia.edu",
              city: "Stafford, VA",
              extraText: [{text: "There I was, in the middle of the parking lot, left to my own devices (a nerf gun). It was dark, but not stormy, and I was petrified as I had to traverse the uneven gravel to arrive at the final destination: family reveal party. As I took a step into the unknown, I heard someone shout WATCH OUT,\" and I saw it. A nerf bullet. Coming in slow motion towards me. I bent backwards in hopes of surviving another day, and the bullet passed through the dense air. I looked around frantically, and saw a dark figure move quickly. This was my opportunity. This was my chance to prove myself worthy of OYFA. And so I lifted my nerf gun, and took a shot in the dark. I heard a grunt. I hit him. And that figure is now my big. All this to say, I love how people in OYFA go out of their way to make sure you're having a good time. The people I have met in this org will undoubtedly be my lifelong friends, and we will never stop having fun, dramatic, whacky times! #LiveLaughLOYFA\""}],
              bio: "Heyo! My name is Jazlyn Nguyen and I am 1/2 of your culture chairs! I'm a 3rd year (ew) majoring in Cognitive Science. I like reading tarot cards, playing DnD, and making space dubstep. Hit me up if ya wanna know your future! (Hint: it's in OYFA)"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/sofia.png",
          text: [
            {
              name: "Sofia Protacio",
              year: "2nd year",
              major: "Nursing",
              email: "jgd5nm@virginia.edu",
              city: "Midlothian, VA",
              extraText: [{text: "My favorite OYFA memory would be Culturefest season and growing close to the other first years through dance practices every night."}],
              bio: "Hi everyone! My name is Sofia Protacio and I am one of the culture chairs! I am a 2nd year nursing major and a fun fact is that I am a Canadian citizen but I was born in Manila, Philippines!"
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Historic.JPG",
      committeeName: "Historic",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/ken.png",
          text: [
            {
              name: "Art Ken Fontelera",
              year: "4th Year",
              major: "Mechanical Engineering",
              email: "ant2ms@virginia.edu",
              city: "Norfolk, VA",
              extraText: [{text: "When Danielle and Michelle came from NOVA to my place in Norfolk. Chris joined us for the sleepover unplanned...ended up going to Walmart and then making ramen at around 3am."},],
              bio: "Hey it’s me, Ken. I am one of your historians as well as famheads! My hobbies include but aren’t limited to: cooking, playing tennis, playing the violin, teaching, taking photos/videos and of course getting to know all of you. Please don’t hesitate to reach out to me for anything!"
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/monica.png",
          text: [
            {
              name: "Monica Do",
              year: "2nd year",
              major: "Economics and Sociology",
              email: "@virginia.edu",
              city: "Falls Church, VA",
              extraText: [{text: "I love that everyone in OYFA is so welcoming and willing to have a conversation with you. Everyone is pretty much family!"}],
              bio: "Hi Everyone! My name is Monica Thu Do and I am one of your Historic chairs! I'm a 2nd year majoring in Economics and Sociology in the College. I love writing calligraphy and painting, so hit me up if you want to do some art together."
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Membership.JPG",
      committeeName: "Membership",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/maggie.png",
          text: [
            {
              name: "Maggie Encarnacion",
              year: "2nd Year",
              major: "Linguistics",
              email: "@virginia.edu",
              city: "Farmville, VA",
              extraText: [{text: "There's too many to choose from ugh but one of my favorite OYFA memories would have to be our Secret Santa event. It was just so wholesome and seeing every smile with their gifts and people being excited to reveal who they were, coupled with that Christmas spirit, made my heart so happy. That whole time just feels like a nice warm hug."}],
              bio: "Helloyfa! I'm Maggie Encarnacion and I'm one of your mem chairs! I'm a 2nd year potentially majoring in Linguistics. I can sign the ASL alphabet backwards, I'm like kinda really short, and I love making Google forms. Music also plays a pretty big role in my life s0o if you wanna drive down 64 while listening to music and question our existence or go to a concert (once it's safe again) pls don't be shy and reach out:)) I also really got into kdramas and BTS during quarantine so if you wanna fangirl about Park Seo-joon, I'm always down <3"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/john.png",
          text: [
            {
              name: "John Le",
              year: "2nd year",
              major: "Global Public Health and Psychology",
              email: "@virginia.edu",
              city: "Sterling, VA",
              extraText: [{text: "Have you ever seen Thor Ragnarok (ofc you have) when Odin says, \"Asgard is not a place, it's a people\". I truly believe the same applies to OYFA. My favorite aspect of this org are the amazing members- that always hype you up, are always supportive of you, and ready to lend a hand whenever you need. And because the people are so awesome, every event feels special and memorable. With that being said, some notable events would include Oyfassassins, Fam Week, and Culturefest! <3"}],
              bio: "What's gooood! My name is John Le and I am literally so jazzed to be one of your MEMBERSHIP CHAIRS <3 I am currently on the pre-med track, hoping to major in GPH or Psychology! Since I love fun facts, and I will give you 3! 1. I love Hamilton 2. I once overdosed on gummy vitamins and had to get my stomach pumped, and 3. I can't wait to meet/reconnect with you all <3 HMU if you ever want to vibe, skate, edit videos, eat cheese ramen, or literally anything (that respects social distancing ;))! Stay fly and stay safe."},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Public_Relations.JPG",
      committeeName: "Public Relations",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/arabella.png",
          text: [
            {
              name: "Arabella Chiang",
              year: "2nd year",
              major: "Pre-Comm",
              email: "@virginia.edu",
              city: "Ashburn, VA",
              extraText: [{text: "There are so many OYFA memories I've created with my friends in the short year we had, but one of my favorites was for sure the dance practices for Culturefest and Barrio, even though I'm a terrible dancer. Everyone is always there to hype you up and there's never any judgement. It was always a fun time, and through these dance practices I was able to find people who I call my best friends today :)"}],
              bio: "Hey guys!!!! I'm Arabella Chiang and I'm one of your PR chairs this year! I'm currently a 2nd year hoping to get into the Comm school, but we'll see how that goes. I'm an adventurer and love to explore the outdoors. If anyone is down to go hiking or exploring around Cville, be sure to reach out to me. Can't wait to see everyone's beautiful faces on ZOOM :)"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/elise.png",
          text: [
            {
              name: "Elise Nguyen",
              year: "2nd year",
              major: "Pre-Comm and CS",
              email: "@virginia.edu",
              city: "Ashburn, VA",
              extraText: [{text: "My favorite OYFA memory was meeting my big for the first time because I felt like I found someone who I was able to talk to about anything to, and create a lifelong connection!"}],
              bio: "Hi! My name is Elise and I am one of the PR co-chairs this year! I love The Office so much that I listen to it as a podcast when I go to sleep. I also like playing Valorant but I'm not very good :( someone teach me how to click heads, uwu"},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Community.JPG",
      committeeName: "Community",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/nikolle.png",
          text: [
            {
              name: "Nikolle Esteban",
              year: "2nd year",
              major: "Anthropology; Pre-Med",
              email: "@virginia.edu",
              city: "Aldie, VA",
              extraText: [{text: "My favorite OYFA memory was the last Culturefest run throughs because it showed the organization's naturally caring, hype-man, and supportive community :)"}],
              bio: "Hello hello! I am so honored and excited to be one of OYFA's Community Chairs this year! I'm a 2nd year on the pre-med track with a currently undecided major :') I love watching movies and binging TV shows (as long as it's not horror heh) I'm also a big foodie so hmu if you want to cook or eat out together if my bank account allows!"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/isabel.png",
          text: [
            {
              name: "Isabel Carino",
              year: "2nd year",
              major: "Cognitive Science",
              email: "@virginia.edu",
              city: "Centreville, VA",
              extraText: [{text: "Some of my favorite OYFA memories are fam week and culture fest/barrio practices!! What I like most about OYFA is how supportive and welcoming everyone is, and it really is like your second family."}],
              bio: "Helloyfa! My name is Isabel and I'm one of your Community chairs! I’m a 2nd year majoring in cognitive science interested in pursuing a pre-physician assistant track. Some things I like to do in my free time are spend quality time with friends and family, listen to music (I make way to many spotify playlists), and go thrifting!!"},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Social.JPG",
      committeeName: "Social",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/danielle.png",
          text: [
            {
              name: "Danielle Borgonia",
              year: "4th year",
              major: "Biology and Biostatistics",
              email: "@virginia.edu",
              city: "Leesburg, VA",
              extraText: [{text: "My favorite memory of OYFA is definitely the hype circle the night before Barrio 2019. To see everyone excited and proud of what they've been able to accomplish over the past few months just made me really happy. And to celebrate with some of your closest friends is the best feeling in the world"}],
              bio: "Hello hello! I'm Danielle Borgonia, one of your social chairs! I'm an old 4th year double majoring in Biology and Statistics and just trying to ~live~. Hit me up if you want to jam and play some music!"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/ysabel.png",
          text: [
            {
              name: "Ysabel Sprague",
              year: "4th year",
              major: "English",
              email: "@virginia.edu",
              city: "Vienna, VA",
              extraText: [{text: "My favorite OYFA memory would have to be the entirety of the Culturefest experience. It’s a new vibe every year! I love to watch the babies have fun learning the dances, rocking their performances on stage, and letting out all their crazy energy that night. It’s an OYFA tradition I hope everyone will get the chance to live out."}],
              bio: "Hello OYFA! I’m Ysabel and this is my third and final time on OYFA B&C! I will be this year’s Social Chair along with the legend herself, Danielle Borgonia. I am a FOURTH year majoring in English. I’m ready to make the most out of this year and improve my cooking skills so hmu with some delicious recipes."},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Sports.JPG",
      committeeName: "Sports",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/jake.png",
          text: [
            {
              name: "Jake Ochave",
              year: "2nd year",
              major: "Pre-Comm",
              email: "@virginia.edu",
              city: "Virginia Beach, VA",
              extraText: [{text: "When I first laid eyes on Josh Dano... jk but that was also a great experience. What I really enjoy most about OYFA are all the little interactions I have with everyone in the organization. There is just a sense of community and inclusiveness that holds strong within the core of OYFA and that's why I love it so!"}],
              bio: "SPIKE! Oh hey, didn't see you there. The name is Jake Ochave, but you can call me Brown Streak! I love to bomb hills down in Cville and I am a Spikeball master! I am a 2nd year attempting to get into the McIntire School! Maybe I'll catch ya on Zoom but I don't know if you can catch me hehe ;)"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/sunny.png",
          text: [
            {
              name: "Sunny Hwang",
              year: "4th year",
              major: "Computer Engineering",
              email: "@virginia.edu",
              city: "Gainesville, VA",
              extraText: [{text: "Meeting my big for the first time. The man hid inside a box and bursted out of it."},],
              bio: "Hi there, It’s sunny (like the ☀️) I’m a fourth year majoring in computer engineering and am one of your sports chairs. Fun fact, I am an avid fan of all Washington sports teams especially the Washington Football Team (formerly known as Redsk***)"
            }
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Advocacy.JPG",
      committeeName: "Advocacy",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/frances.png",
          text: [
            {
              name: "Frances Mendoza",
              year: "4th year",
              major: "Government",
              email: "@virginia.edu",
              city: "Virginia Beach, VA",
              extraText: [{text: "This is cheesy, but what I like most about OYFA is the people, they're chill."}],
              bio: "Hello hello, my name is Frances and I will be one of your advocATE's this year. I love singing even though I am GREATLY terrible at it. My go to karaoke song is anything by Celine Dion -- she is an ICON. If you ever want to sing karaoke hmu because I actually have a portable karaoke (IM ALWAYS READY TO SING)."},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/jana.png",
          text: [
            {
              name: "Jana Mirafuente",
              year: "3rd year",
              major: "Nursing",
              email: "@virginia.edu",
              city: "Winston Salem, NC",
              extraText: [{text: "What I love most about OYFA is the fact that it gave me some of my closest friends. We're at a big school, and OYFA is pretty big as well, so it can get overwhelming sometimes, but finding even just a few people in an organization that (1) has a lot of people like me, and (2) already feels so close-knit like family changed my college experience in the best way possible."}],
              bio: "Hello OYFAm~ I'm Jana, I use she/her pronouns, and I'm a 3rd-year nursing student serving as 1 of 2 Advocacy Chairs this school year. Outside of OYFA and being a nurse, I was also an OL these past 2 summers and am part of WAALI. I also love to draw, play guitar, experiment with makeup, watch anime, and read. Super excited to be with you all again for another year <3"},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_District_7.JPG",
      committeeName: "District 7",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/angie.png",
          text: [
            {
              name: "Angelina Rodriguez",
              year: "2nd year",
              major: "Echols Interdisciplinary Major",
              email: "@virginia.edu",
              city: "Chesapeake, VA",
              extraText: [{text: "Everyone has their own experience within OYFA, but ultimately, they all stem from the same root: the family, support, and connections you find from it. That's the nature of OYFA; if you are a Oyfan, you are part of an extensive family, dating from alumni who even post-graduation will lend whatever help they can, to current members who share in your day-to-day life on grounds. This family that you find yourself in is incredibly supportive, something that some people never really get to experience in their lives. Whether you need someone to hype you up at an event, give you advice on classes/careers, walk you through a breakdown, or just chill with on a Friday night, there is someone--quite a few someones--who would do all that for you in a heartbeat. Frankly, you can't find better people :)"}],
              bio: "Hello hello, my name is Angie, and I am super excited to be 1/2 of your D7 reps this year (fun fact: I am also the D7 secretary hehe)! My favorite thing to do is curl up in a blanket, especially when studying, so if you're ever in need, hmu and I might just be able to help! I know this year will be all kinds of things, so feel free to msg me about ANYTHING, and I'd love to chat with you :) Take care and stay safe!"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/noah.png",
          text: [
            {
              name: "Noah Narciso",
              year: "3rd year",
              major: "Computer Science and Chemistry Minor",
              email: "@virginia.edu",
              city: "Clifton, VA",
              extraText: [{text: "My favorite OYFA memory is performing at culturefest and seeing all of the upperclassmen cheer us on for our first performance."}],
              bio: "Hello my name is Noah Narciso and I am one of the District 7 representatives. I am a 3rd year majoring in CS and minoring in Chemistry in the College. I love playing volleyball, making digital art, watching anime and cooking!"},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Webmasters.JPG",
      committeeName: "Webmasters",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/joshb.png",
          text: [
            {
              name: "Josh Buckley",
              year: "4th year",
              major: "Computer Science",
              email: "@virginia.edu",
              city: "Danville, VA",
              extraText: [{text: "One of my favorite OYFA memories is when I painted with my Big and his friends. We made Spongebob paintings, and I painted Patrick working out his exxtra thick glutes :O. It was so nice to have people to goof with-- I was worried I wouldn't find a group like that going into college."}],
              bio: "Hello! My name is Josh and I am one of the Webmasters this year. I'm studying computer science in the school of Arts and Sciences. I love hiking, tennis, soccer, food, baking, and more! Message me if you would like someone to talk to /hike with/anything else!"},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/anh.png",
          text: [
            {
              name: "Anh Nguyen",
              year: "2nd year",
              major: "Computer Science",
              email: "@virginia.edu",
              city: "Ashburn, VA",
              extraText: [{text: "One of my favorite memories in OYFA was when I went to events during fall fam week. I remember I showed up to one of the culturefest dance practices, and my fam head hyped me up and made me feel so confident even though I didn't meet her officially. Her, my bigs, and many more have made me feel so welcomed and loved at UVA."}],
              bio: "Hi! My name is Anh Nguyen and I am one of your webmaster chairs! I'm a 2nd year majoring in CS in the E-School. I love anime so lmk if you wanna binge anything or need recommendations :)"},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Scholarship.JPG",
      committeeName: "Scholarship",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/julia.png",
          text: [
            {
              name: "Julia Nakamoto",
              year: "4th year",
              major: "Statistics",
              email: "@virginia.edu",
              city: "Burke, VA",
              extraText: [{text: "KAMAYAN on 4/20!!!"}],
              bio: "Hi!! My name is Julia and I'm one of your scholarship chairs. I'm a rising 4th year, majoring in Statistics. My hobbies are watching kdramas, playing video games, and napping."},
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/ariane.png",
          text: [
            {
              name: "Ariane Tiongco",
              year: "2nd year",
              major: "Pre-Comm",
              email: "@virginia.edu",
              city: "Virginia Beach, VA",
              extraText: [{text: "My favorite OYFA memories are probably spending sleepless nights at Clark or 1815 and going in spontaneous 2am cookout runs (o^^o)"}],
              bio: "Helloyfa! My name is Ariane, and I’m 1/2 of your scholarship chair! I’m a 2nd year on the pre-Comm school track. I love watching anime, drawing, cooking, and grinding late nights at Clark with friends. Feel free to ask me for anime or manga recommendations or if you just want to hangout."},
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_33 + "/Leadership_Student_Advisors.JPG",
      committeeName: "Student Advisors",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_33 + "/dre and owen.png",
          text: [
            {
              name: "Andrea Dilao",
              year: "4th year",
              major: "Global Development Studies and Economics",
              email: "@virginia.edu",
              city: "Falls Church, VA",
              extraText: [{text: "OYFA takes me for who I am, and gave me my forever friends- the people who know all of my secrets and love me anyway, and the ones I'll grow old with and invite to my deathbed."}],
              bio: "hi there! Thanks for visiting the bio page of the OYFA website. I'm Dre Dilao and I'm one of OYFA's Student Advisors (SA). It's my last year at UVA and I am juicing all of the fun and opportunities out of it, in spite of the craziness that this world has descended into. Maningkamot at magtipid. Black Lives Matter."
            },
            {
              name: "Owen Haines",
              year: "4th year",
              major: "Systems Engineering",
              email: "@virginia.edu",
              city: "Vienne, VA",
              extraText: [{text: "My favorite thing about OYFA is the sense of community and family."}],
              bio: "Hello! My name is Owen Haines and I am one of the Student Advisors for this year! I'm a 4th year majoring in Systems Engineering. 4th year is fake and I'm in barely any classes, so hmu anytime if you want to do some distanced chilling <3"
            },
          ],
        },
      ],
    },
];

const LEADERSHIP_FOLDER_32 = "/images/leadership/bnc32";

export const BNC32 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/president.png",
    committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/president.png",
        text: [
          {
            name: "Ysabel Sprague",
            bio: "Ysabel is a 3rd year English major! She is from the town of Vienna, Virginia and joined OYFA her first year to explore her Filipino culture. She ran for President because she has a vision for what the organization can be in regards to the increased awareness of Filipino culture for both OYFA's members and the UVA/Charlottesville community. She also wants to offer a space for people Filipino and Non-Filipino alike to create lasting bonds and to feel as if they can be themselves at our university.",
            extraText: [{text: "She's happiest when she is talking and connecting with others. Her favorite quote is from the new Cinderella movie with Lily James, \"Have courage and be kind.\""},]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/vp.png",
    committeeName: "Vice President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/vp.png",
        text: [
          {
            name: "Andrea Dilao",
            bio: "Dre is a 3rd year Global Development Studies and Economics double major! She is from Falls Church, Virginia and joined OYFA her first year to maintain a connection to her Filipino identity in college. She ran for Vice President because she loved her experiences on B&C (#dubsonly Sports Chair) and wanted to build on the ways in which B&C members could feel more engaged and empowered in their personal roles and in OYFA as a whole. But it's mostly because she's obsessed with Google Forms, spreadsheets, and slides.",
            extraText: [{text: "Dre's favorite quote is \"Go ahead, make my day\", as made famous by Clint Eastwood. She is happiest when she's doing completely spontaenous activities or travel with no planning involved."},]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/treasurer.png",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/treasurer.png",
        text: [
          {
            name: "Owen Haines",
            bio: "Owen is a 3rd year Systems Engineering major. He is from Vienna, Virginia and joined OYFA his first year. He ran for treasurer in order to further give back and help promote financial accesibility in OYFA.",
            extraText: [{text: "His favorite quote is any of the dumb sayings on the side of those Lulu Lemon Bags and you can hit him up on venmo @ohainesva."},]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_32 + "/oc.png",
    committeeName: "Outreach Coordinator",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/oc.png",
        text: [
          {
            name: "Sophia Molly Williams",
            bio: "Sophia Williams is a 4th year Foreign Affairs major. She is from Virginia Beach and joined OYFA her first year. She ran for Outreach Coordinator because she wanted to support and represent OYFA, implement meaningful changes, and give back to the organization.",
            extraText: [{text: "Sophia's favorite quote is \"Anakin, my allegiance is to the republic, to democracy!\". She is happiest when she is vibing with good music while on a road trip with friends."}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_32 + "/cosec.png",
    committeeName: "Corresponding Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/cosec.png",
        text: [
          {
            name: "Cindy Bui",
            bio: "Cindy is a 4th year Psychology and Spanish double major in the College of Arts and Sciences. She is from Atlanta, GA and joined OYFA her first year. She ran for Corresponding Secretary in order to ensure that OYFA inhabits the space they need and deserve. In addition to enjoying the plethora of spreadsheets and emails, she loves to empower others to find importance in their presence and recognize that space is more than these four walls!",
            extraText: [{text: "Cindy acknowledges that it is a hot take to favor the 2013 version of The Great Gatsby starring Leonardo DiCaprio, however, she is willing to discuss this with anyone that wants to share their opinion! \"So we beat on, boats against the current, born ceaselessly into the past.\""}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_32 + "/recsec.png",
    committeeName: "Recording Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/recsec.png",
        text: [
          {
            name: "Taylor Mendoza",
            bio: "Taylor is a second year majoring in Economics. He is from Eldersburg, Maryland and he joined OFYA his first year. He ran for Recording Secretary to connect people and share information about OYFA's awesome programming.",
            extraText: [{text: "Taylor is happiest playing tennis, and his favorite quote is the Lego r2d2 death sound."}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/advocacy.png",
    committeeName: "Advocacy",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/advocacy.png",
        text: [
          {
            name: "Ben Hill",
            bio: "Ben is a second year double majoring in Religious Studies and Global Security and Justice. He is from Manassas, Virginia and joined OYFA his first year. He ran for Advocacy because he wanted to deepen his connection with his heritage and help connect others to Filipino culture.",
            extraText: [{text: "At 10 years old, Ben wanted to be a Pokemon trainer. However, given the moral implications, he has since changed his mind. His hidden talent is that he is a pro at stream-of-consciousnesses writing, and his favorite quote is \"Segundo, minuto, oras at buwan- hindi pa magiging sapat.\""}]
          },
          {
            name: "Noah Narciso",
            bio: "Noah is a 2nd year Computer Science major with a minor in Chemistry. He is from Clifton, Virginia and joined OYFA his first year. He ran for Advocacy because he wanted to have an impact on the organization. He wanted to help educate the members of the organization about different political, social and cultural events that happen in Filipino and Filipino-American peoples.",
            extraText: [{text: "Noah is happiest when he is eating any type of food. His favorite quote is \"Why do we Shower?\""}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/community.png",
    committeeName: "Community",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/community.png",
        text: [
          {
            name: "Alanna Zoscak",
            bio: "Alanna is a 2nd year Computer Science major. She is from Haymarket, Virginia and joined OYFA her first year. She ran for Community because she has a passion for giving back through service.",
            extraText: [{text: "She loves writing, and her favorite quote is \"Nothing works unless you do,\" by Maya Angelou."}]
          },
          {
            name: "Leigh Mante",
            bio: "Leigh is a second year studying Global Public Health and Statistics. Born in Bohol, she moved to Virginia Beach when she was three (#757). She joined OYFA her first year and loved every second of it. She ran for Community because she wanted to give back to the organization and encourage members to explore the power and strength of their identities on a bigger scale while connecting to the greater Charlottesville and UVA community.",
            extraText: [{text: "Leigh is most happy when she's driving down London Bridge Road in Virginia Beach with the windows down during golden hour on a warm summer day blasting \"Electric Love\" by Borns or when drinking taro milk tea with 30% sugar and oreo crumble. Her favorite quote is \"purpose fuels passion.\""}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/culture.png",
    committeeName: "Culture",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/culture.png",
        text: [
          {
            name: "Joshua Dano",
            bio: "Josh is a 2nd year studying Computer Science. He is from Virginia Beach, Virginia and joined OYFA his first year. Coming to UVa, though, he realized the importance of education of culture and the need for representation within our University.",
            extraText: [{text: "He spends a lot of time practicing calligraphy during class instead of actually taking notes, and he has had many major changes during the past two years at UVa (including dropping pre-med), but has finally decided on Computer Science (or so he hopes)! His favorite quote is \"I didn't come this far, to only come this far.\""}]
          },
          {
            name: "Lauren Manuel",
            bio: "Lauren is a 2nd year studying Psychology with minors in Health and Well-Being and Bioethics. Through participating in Culturefest and Barrio her first year, this organization quickly became a home for her. As OYFA Culture Chair, she will continue to discover even more about her own culture and provide the incoming OYFA members with just as enriching of an experience as she had.",
            extraText: [{text: "Lauren's favorite hobbies include working out at the AFC and cooking up some yummy vegan dishes, and binge-watching High School Musical: The Musical: The Series for Joshua Bassett's beauty."}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/d7.png",
    committeeName: "District 7",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/d7.png",
        text: [
          {
            name: "Ciara Barrago",
            bio: "No Bio",
            extraText: [{text: ""}]
          },
          {
            name: "Emil Diaz",
            bio: "Emil Lorenzo Cunanan Diaz is a 2nd year Biology major with a CS minor! He lives in the city of Virginia Beach, VA with his mom and dog. He joined OYFA his first year and ran for D7 because he wanted to connect not only his fellow Filipinos at UVA but as many from any other schools as possible! Culture thrives through connectivity!",
            extraText: [{text: "Emil is most happy when he is rubbing his dog's belly and laughing with friends during the late hours of the night. When he was 10, he really wanted to become a pilot, but alas, his eyes yeeted on him making him almost legally blind, crushing his childhood dream. That's okay though, because he has realized that becoming a doctor has been his true passion all along. He's also a sucker for good quotes, but his all time favorite quote is from Albert Camus, “In the midst of winter, I found there was, within me, an invincible summer.”"}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/historic.png",
    committeeName: "Historic",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/historic.png",
        text: [
          {
            name: "Jana Mirafuente",
            bio: "No Bio",
            extraText: [{text: ""}]
          },
          {
            name: "Grace Yang",
            bio: "Grace is a second year studying biology. She is from Mclean, Virginia, and she joined OYFA her first year. She decided to run for Historic because she wanted to capture and share experiences and memories with our UVA and Charlottesville community.",
            extraText: [{text: "Grace's hidden talent is that she can crack pretty much every bone in her body, and her favorite quote is \"It's a weird life, but it’s where I’m at right now.\" - Nick Miller from New Girl"}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/membership.png",
    committeeName: "Membership",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/membership.png",
        text: [
          {
            name: "Jazlyn Nguyen",
            bio: "Jazlyn is a second year studing Cognitive Science with a concentration in Computer Science and Philosophy. She's from Stafford, VA and joined OYFA her first year. She wanted to be Membership to give back to OYFA and give its members a time that was as great as hers was. She was also inspired by her relationship with her big. But there’s way more to Membership than the Big/Little system, and honestly learning about those deeper things got her to love (and hate) the position so much. The best thing about Membership to her is the people that you connect with, and the bridges you build between others.",
            extraText: [{text: "In her free time, Jazlyn likes to read tarot cards, and her favorite quote is \"Champagne for my real friends real pain for my sham friends\" — Happy Endings"}]
          },
          {
            name: "Seth Miller",
            bio: "No Bio",
            extraText: [{text: ""}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/pr.png",
    committeeName: "Public Relations",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/pr.png",
        text: [
          {
            name: "Candace Miu",
            bio: "Candace is a 2nd year majoring in Systems Engineering in the School of Engineering and Applied Science. She is from Oakton, VA and joined OYFA during her first year. Candace ran for Public Relations because she is passionate about graphic design and wanted to build a stronger relationship between the organization and the public, and further reach out to surrounding communities.",
            extraText: [{text: "Candace is most happy when she's doing anything with her friends and having a good conversation over some good food. She also likes dancing and filming tiktoks in her spare time."}]
          },
          {
            name: "Tiffany Nguyen",
            bio: "Tiffany is a 2nd year intending to double major in Spanish and Economics in the CLAS. She is from Richmond, VA, and she joined OYFA her first year. Tiffany decided to run for Public Relations due to her interest in graphic design and hope to keep general members included and informed about events happening in the organization.",
            extraText: [{text: "Tiffany enjoys watching the Bachelor/ette, spending quality time with friends, and exploring new restaurants in her free time."}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/sa.png",
    committeeName: "Student Advisors",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/sa.png",
        text: [
          {
            name: "Dorian Nguyen",
            bio: "No Bio",
            extraText: [{text: ""}]
          },
          {
            name: "Dana Kim",
            bio: "Dana is a 4th year Psychology major and Sociology minor in the CLAS. She's from Springfield, VA and joined OYFA in 2016 her first year. She applied to be a Student Advisor to support OYFA by alleviating the stress some B&C members may feel. She wants to create a healthy mindset for those dedicating their time to the organization.",
            extraText: [{text: "She's happiest when she's spending quality time with her friends, family, and herself!"}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/scholarship.png",
    committeeName: "Scholarship",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/scholarship.png",
        text: [
          {
            name: "Michelle Hilado",
            bio: "Michelle is a third year majoring in Biology with a minor in American Sign Language in the College! She is from Woodbridge, VA (703 nova gang) and joined OYFA her first year but didn't become an active member until her second year. She ran for Scholarship because she wanted to create a supportive and welcoming environment, both socially and academically, for not only the incoming first years but everyone within OYFA.",
            extraText: [{text: "Michelle is happiest when she is awake at odd hours of the night with her best friends for no reason because she has no business doing that. Her favorite quote is \"bababa ba?\" -Filipinos"}]
          },
          {
            name: "Calathea Pacifica",
            bio: "No Bio",
            extraText: [{text: ""}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/social.png",
    committeeName: "Social",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/social.png",
        text: [
          {
            name: "Ashley Deng",
            bio: "Ashley is a second year in the College of Arts and Sciences. She is from Manassas, VA and joined OYFA spring semester of her first year. She ran for Social to make sure that everyone can feel comfortable at parties, whether they drink alcohol or not, and to create fun inclusive events throughout the year.",
            extraText: [{text: "When she was little, Ashley wanted to be a dentist, but that was before she realized how bad she was at science:( Also, her hidden talent is that she can bend her elbows backwards!"}]
          },
          {
            name: "Kenneth Ross",
            bio: "No Bio",
            extraText: [{text: ""}]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/sports.png",
    committeeName: "Sports",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/sports.png",
        text: [
          {
            name: "Ravael Loho",
            bio: "Ravael is a third year double majoring in Global Development Studies and Anthropology in the CLAS. He is from Philadelphia, and he joined OYFA this year. He decided to run for Sports because he wants to get people up and active both to promote health and as a way for members to build each other up!",
            extraText: [{text: "Ravael's hidden talent is that he is really good at horticulture, and his favorite quote is \"The most difficult thing is the decision to act, the rest is merely tenacity.\" -Amelia Earhart"}]
          },
          {
            name: "Isabelle Talicuran",
            bio: "Izzy is a second year studying Biomedical Engineering and minoring in Computer Science. She is from Virginia Beach, VA (ayeee 757), and joined OYFA her first year. She ran to help foster community within OYFA through sports and other fun activities. Another one of her goals was to promote and maintain good mental health through education and activities as well.",
            extraText: [{text: "Izzy's hidden talent is that she can belly roll, and her favorite quote is \"Open your eyes and see what you can with them before they close forever\" - Anthony Doerr"}]
          },
        ],
      },
      {
        name: "Joey Havens",
      }
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_32 + "/webmasters.jpg",
    committeeName: "Webmasters",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_32 + "/webmasters.jpg",
        text: [
          {
            name: "Mara Li Hart",
            bio: "Mara is a 2nd year computer science major in the engineering school! She's from Virginia Beach and joined OYFA her first year. Before this role, she didn't know where to start with web development, but quickly learned. She ran for webmaster because she wanted to use technology to teach others what Filipino culture at UVA means!",
            extraText: [{text: "She's happiest when she's planning her next to-do whether it's coding projects, travel itineraries, or passion projects. Her favorite quote is \"Our parents didn't give us this planet; our children loaned it to us\" by unknown."}]
          },
        ],
      },
      {
        name: "Brandon Ongtingco"
      }
    ],
  },
];

const LEADERSHIP_FOLDER_31 = "/images/leadership/bnc31";

//TODO: Create entire bio from old php files
export const BNC31 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/joe.jpg",
    committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/joe.jpg",
        text: [
          {
            name: "Joseph Malasa",
            year: "2019",
            major: "Psychology/American Studies",
            email: "jpm5ye@virginia.edu",
            extraText: [
              {
                header: "Why did you decide to run for this position?",
                text: "Knowing the impact OYFA has had on my life, I knew that this position involved tremendous pressure. Because of OYFA, I was supported by so many people during one of the most difficult and shifting periods of my life. I believed that OYFA was invaluable and unexplainably amazing, so I struggled to see myself as the facilitator for more. Although I love OYFA to death, I saw so many parts of the organization that made my life more stressful and challenging. The first time I ran for President, I set out to make a change to make the organization the best place to be the best version of themselves. The reason I ran a second time, I realized that I still want to make that change. We can constantly revise the organization to reflect what the community needs. However, before I leave UVA, I want to call out the issues affecting the whole University and hold administration accountable so that OYFA and the AAPI community can thrive. OYFA deserves to be a space where students at UVA can celebrate what it means to be Filipino-American, and I intend to make that last for generations."
              },
              {
                header: "What is your favorite OYFA memory?",
                text: "My favorite OYFA memories are any opportunity OYFA has given me to yell at the top of my lungs. I remember losing my voice at parties, at Tom Deluca, at conferences, at hangouts, and at elections. I will never forget how many times I loudly told someone to make the best decision you'll ever make by joining OYFA at the Activities Fair. Whether it be screaming out to my upperclassmen when they are walking across the stage getting their diploma or my first baby class when they danced during Barrio, I am always so grateful for OYFA giving me a reason to raise my voice. I've been empowered by the people I've met in this org to use my voice, not just for me, but my community."
              },
              {
                header: "What is one goal you want to accomplish by the end of the year?",
                text: "Throughout my life, but especially during my college career, I've struggled with my identity regarding mental health and Asian masculinity. Raised in a family where my parents reserve discussing their personal problems and surrounded in environments where I was supposed to be 'amazing at everything', I often felt inferior when it came to my appearance, body, and identity. These conversations are ones that I think a lot about more as I'm involved with Asian American representation, sexual assault prevention, and mental health awareness, but I still don't allow myself to feel or process through my insecurities about myself. By the end of next year, I need to find a therapist I trust and do what I need to do in order to become more comfortable with who I am as an individual. I don't want people to just hear about the goals that I'm comfortable in saying, I want people to hold me accountable for who I really am."
              },
              {
                header: "Favorite class at UVA and why?",
                text: "Asian American Studies with Sylvia Chong! This class really started my journey to understand what it means to be an Asian American in modern day America. Rather than consuming what mainstream white institutions have said about 'Asians', I was able to develop my own opinions about my identity. In the class we learned about what Asians have gone through in the past 200 years and how they are represented in today's society. Understanding that the racialization of people have hugely affected their livelihood is something that isn't really discussed in typical 'favorite' classes, especially about Asian Americans. So many diversity discussions are seen in black and white, so I will forever preach people to take the class!"
              }
            ]
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/reginah.jpg",
    committeeName: "Vice President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/reginah.jpg",
        text: [
          {
            name: "Regina Yap",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/treasurer.jpg",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/hurst.jpg",
        text: [
          {
            name: "Michael Hurst",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_31 + "/kanata.jpg",
    committeeName: "Outreach Coordinator",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/kanata.jpg",
        text: [
          {
            name: "Kanata Omori",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_31 + "/chelsea.jpg",
    committeeName: "Corresponding Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/chelsea.jpg",
        text: [
          {
            name: "Chelsea Bengson",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc:
      LEADERSHIP_FOLDER_31 + "/megan.jpeg",
    committeeName: "Recording Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/megan.jpeg",
        text: [
          {
            name: "Megan Lee",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/rose.jpg",
    committeeName: "Advocacy",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/rose.jpg",
        text: [
          {
            name: "Roseanna Quinanola",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/maryam.jpg",
    committeeName: "Advocacy",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/maryam.jpg",
        text: [
          {
            name: "Maryam Zaher",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/celter.jpg",
    committeeName: "Community",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/celter.jpg",
        text: [
          {
            name: "Celeter Odango Jr.",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/gabbys.jpg",
    committeeName: "Community",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/gabbys.jpg",
        text: [
          {
            name: "Gabby Garvey",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/dan.png",
    committeeName: "Culture",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/dan.png",
        text: [
          {
            name: "Danielle Borgonia",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/cindy.jpeg",
    committeeName: "Culture",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/cindy.jpeg",
        text: [
          {
            name: "Cindy Bui",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/doriann.jpg",
    committeeName: "Historic",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/doriann.jpg",
        text: [
          {
            name: "Dorian Nguyen",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/catherine.jpg",
    committeeName: "Historic",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/catherine.jpg",
        text: [
          {
            name: "Catherine Phan",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/ysabel.jpeg",
    committeeName: "Membership",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/ysabel.jpeg",
        text: [
          {
            name: "Ysabel Sprague",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/phillip.jpeg",
    committeeName: "Membership",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/phillip.jpeg",
        text: [
          {
            name: "Philip Tran",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/cec.jpg",
    committeeName: "Public Relations",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/cec.jpg",
        text: [
          {
            name: "Cecilia Rabayda",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/trey.jpg",
    committeeName: "Public Relations",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/trey.jpg",
        text: [
          {
            name: "Trey Nichols",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/alexaa.jpg",
    committeeName: "Student Advisors",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/alexaa.jpg",
        text: [
          {
            name: "Alexa Gavino",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/jack.jpeg",
    committeeName: "Student Advisors",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/jack.jpeg",
        text: [
          {
            name: "Jack Chang",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/owenn.jpg",
    committeeName: "Scholarship",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/owenn.jpg",
        text: [
          {
            name: "Owen Haines",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/diana.jpg",
    committeeName: "Scholarship",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/diana.jpg",
        text: [
          {
            name: "Diana Gaiter",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/sophia.jpg",
    committeeName: "FIND D7 Representatives",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/sophia.jpg",
        text: [
          {
            name: "Sophia Xiao",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/jess.jpg",
    committeeName: "FIND D7 Representatives",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/jess.jpg",
        text: [
          {
            name: "Jessica Phan",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/julia.jpeg",
    committeeName: "Social",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/julia.jpeg",
        text: [
          {
              name: "Julia Nakamoto",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/Aisha.jpg",
    committeeName: "Social",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/Aisha.jpg",
        text: [
          {
              name: "Aisha Chiang",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/Dre.jpg",
    committeeName: "Sports",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/Dre.jpg",
        text: [
          {
            name: "Andrea Dilao",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/atman.jpeg",
    committeeName: "Sports",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/atman.jpeg",
        text: [
          {
            name: "Atman Soni",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/Sunnyh.jpg",
    committeeName: "Webmasters",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/Sunnyh.jpg",
        text: [
          {
            name: "Sunny Hwang",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_31 + "/Barry.jpg",
    committeeName: "Webmasters",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_31 + "/Barry.jpg",
        text: [
          {
            name: "Barry Chin",
          },
        ],
      },
    ],
  },
];

const LEADERSHIP_FOLDER_30 = "/images/leadership/bnc30";

//TODO: Create entire bio from old php files
export const BNC30 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/joe2.jpg",
      committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/joe2.jpg",
          text: [
          {
            name: "Joe Malasa",
          },
        ],
      },
    ]
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_30 + "/jerome2.jpg",
      committeeName: "Vice President",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_30 + "/jerome2.jpg",
          text: [
            {
              name: "Jerome Tirso",
            },
          ],
        },
      ]
    },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/jane2.jpg",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/jane2.jpg",
        text: [
          {
            name: "Jane Canteros",
          },
        ],
      },
    ]
  },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_30 + "/alexa2.jpg",
      committeeName: "Corresponding Secretary",
      bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/alex2.jpg",
        text: [
          {
            name: "Alexa Gavino",
          },
        ],
      }
      ]
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_30 + "/jaden2.jpg",
      committeeName: "Recording Secretary",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_30 + "/jaden2.jpg",
          text: [
            {
              name: "Jaden Aponte",
            },
          ],
        },
      ]
    },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017advo.jpg",
    committeeName: "Advocacy",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/2017advo.jpg",
        text: [
          {
            name: "Thyra Jensen",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/aa.jpg",
        text: [
          {
            name: "Dorian Nguyen",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017comm.jpg",
    committeeName: "Community",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/2017comm.jpg",
        text: [
          {
            name: "Gabby Garvey",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Emile.jpg",
        text: [
          {
            name: "Arielle Reyes",
          },
        ],
      },
      {
        name: 'Danielle Borgonia'
      }
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017culture.jpg",
    committeeName: "Culture",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_HannahS.jpg",
        text: [
          {
            name: "Roseanna Quinanola",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/district7.jpg",
        text: [
          {
            name: "Sophia Williams",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017d7.jpg",
    committeeName: "FIND D7 Representatives",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Sydney.jpg",
        text: [
          {
              name: "Chelsea Bengson",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_HannahR.jpg",
        text: [
          {
            name: "John Ramirez",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017historic.jpg",
    committeeName: "Historic",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Cheryll.jpg",
        text: [
          {
            name: "Jack Chang",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Patrick.jpg",
        text: [
          {
            name: "Pia Mutia",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017mem.jpg",
    committeeName: "Membership",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Ben.jpg",
        text: [
          {
            name: "Dana Kim",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Korey.jpg",
        text: [
          {
            name: "Michael Ramirez",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017pr.jpg",
    committeeName: "Public Relations",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_JoshDe.jpg",
        text: [
          {
            name: "Baohan Do",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Jay.jpg",
        text: [
          {
            name: "Hayden Williams",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017schol.jpg",
    committeeName: "Scholarship",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Franky.jpg",
        text: [
          {
            name: "Angel Jomuad",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Nikolle.jpg",
        text: [
          {
            name: "Rose Montgomery",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017social.jpg",
    committeeName: "Social",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Maggie.jpg",
        text: [
          {
            name: "Jessica Phan",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Sarah.jpg",
        text: [
          {
            name: "Sophia Xiao",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017sports.jpg",
    committeeName: "Sports",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Jared.jpg",
        text: [
          {
            name: "Sarah Lei",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Emil.jpg",
        text: [
          {
            name: "Brandon Phan",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017sa.jpg",
    committeeName: "Student Advisors",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Isabel.jpg",
        text: [
          {
            name: "Richard Dizon",
          },
        ],
      },
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Leigh.jpg",
        text: [
          {
            name: "Danielle Rodgers",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_30 + "/2017web.jpg",
    committeeName: "Webmaster",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_30 + "/Leadership_Jana.jpg",
        text: [
          {
            name: "Regina Yap",
          },
        ],
      },
      {
        name: "Andrew Zazzera",
      }
    ],
  },
];

const LEADERSHIP_FOLDER_29 = "/images/leadership/bnc29";

//TODO: Create entire bio from old php files
export const BNC29 = [
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Title.jpg",
      committeeName: "Board",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Title.jpg",
          committeeTitle: 'Corresponding Secretary',
          text: [
            {
              name: "Kanata Omori",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Title.jpg",
          committeeTitle: 'Vice President',
          text: [
            {
              name: "Alex Zarzuela",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Title.jpg",
          committeeTitle: 'President',
          text: [
            {
              name: "Madelyn Luansing",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Title.jpg",
          committeeTitle: 'Treasurer',
          text: [
            {
              name: "Jerome Tirso",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Title.jpg",
          committeeTitle: 'Recording Secretary',
          text: [
            {
              name: "Christine Le",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/advocacy.png",
      committeeName: "Advocacy",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/advocacy.png",
          text: [
            {
              name: "Oanh Dao",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/community.jpg",
          text: [
            {
              name: "Melissa Lim",
            },
          ],
        },
        {
          name: 'Amy Zhang'
        }
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/community.jpg",
      committeeName: "Community",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/community.jpg",
          text: [
            {
              name: "Celine Nguyen",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Emile.jpg",
          text: [
            {
              name: "Oliver Viyar",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/culture.jpg",
      committeeName: "Culture",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_HannahS.jpg",
          text: [
            {
              name: "Steven Ling",
            },
          ],
        },
        {
          name: 'Misha Capuno'
        }
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/district7.jpg",
      committeeName: "FIND D7 Representatives",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Sydney.jpg",
          text: [
            {
                name: "John Herrick",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_HannahR.jpg",
          text: [
            {
              name: "Danielle Rodgers",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/historic.jpg",
      committeeName: "Historic",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Cheryll.jpg",
          text: [
            {
              name: "Aaron Aguhob",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Patrick.jpg",
          text: [
            {
              name: "Larry Han",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/membership.jpg",
      committeeName: "Membership",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Ben.jpg",
          text: [
            {
              name: "Joe Malasa",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Korey.jpg",
          text: [
            {
              name: "Mark Mora",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/pr.jpg",
      committeeName: "Public Relations",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_JoshDe.jpg",
          text: [
            {
              name: "Jasmin Nguyen",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Jay.jpg",
          text: [
            {
              name: "Ky Nguyen",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/scholarship.jpg",
      committeeName: "Scholarship",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Franky.jpg",
          text: [
            {
              name: "Abigail Hoang",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Nikolle.jpg",
          text: [
            {
              name: "Caroline Pham",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/social.jpg",
      committeeName: "Social",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Maggie.jpg",
          text: [
            {
              name: "Barry Chin",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Sarah.jpg",
          text: [
            {
              name: "Jack Chang",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/sports.jpg",
      committeeName: "Sports",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Jared.jpg",
          text: [
            {
              name: "Alexa Gavino",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Emil.jpg",
          text: [
            {
              name: "Ronald Diu",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/studentadvisors.jpg",
      committeeName: "Student Advisors",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Isabel.jpg",
          text: [
            {
              name: "Vince Egalla",
            },
          ],
        },
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Leigh.jpg",
          text: [
            {
              name: "Elexa Rallos",
            },
          ],
        },
      ],
    },
    {
      committeeImgSrc: LEADERSHIP_FOLDER_29 + "/webmaster.jpg",
      committeeName: "Webmaster",
      bios: [
        {
          bioImgSrc: LEADERSHIP_FOLDER_29 + "/Leadership_Jana.jpg",
          text: [
            {
              name: "Chris Fassoth",
            },
          ],
        },
      ],
    },
];

const LEADERSHIP_FOLDER_28 = "/images/leadership/bnc28";

//TODO: Create entire bio from old php files
export const BNC28 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_28 + "/kim_15.jpg",
    committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_28 + "/kim_15.jpg",
        text: [
          {
            name: "Kimberly Hall",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_28 + "/elexa_15.jpg",
    committeeName: "Vice President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_28 + "/elexa_15.jpg",
        text: [
          {
            name: "Elexa Rallos",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_28 + "/madelyn_15.jpg",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_28 + "/madelyn_15.jpg",
        text: [
          {
            name: "Madelyn Luansing",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_28 + "/leangelo_15.jpg",
    committeeName: "Corresponding Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_28 + "/leangelo_15.jpg",
        text: [
          {
            name: "Leangelo Acuna",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_28 + "/smalljayrome.jpg",
    committeeName: "Recording Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_28 + "/smalljayrome.jpg",
        text: [
          {
            name: "Jerome Tirso",
          },
        ],
      },
    ],
  },
  {
    committeeName: "Still being worked on :(",
    bios: [
      {
        text: [
          {
            name: "IN PROGRESS",
          },
        ],
      },
    ],
  },
];

const LEADERSHIP_FOLDER_27 = "/images/leadership/bnc27";

//TODO: Create entire bio from old php files, add council
export const BNC27 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_27 + "/justin.png",
    committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_27 + "/justn.png",
        text: [
          {
            name: "Justin Trinidad",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_27 + "/nicole.jpg",
    committeeName: "Vice President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_27 + "/nicole.jpg",
        text: [
          {
            name: "Nicole Winfree",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_27 + "/kim.jpg",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_27 + "/kim.jpg",
        text: [
          {
            name: "Kimberly Hall",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_27 + "/andrea.jpg",
    committeeName: "Corresponding Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_27 + "/andrea.jpg",
        text: [
          {
            name: "Andrea Valdez",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_27 + "/elexa.jpg",
    committeeName: "Recording Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_27 + "/elexa.jpg",
        text: [
          {
            name: "Elexa Rallos",
          },
        ],
      },
    ],
  },
  {
    committeeName: "Still being worked on :(",
    bios: [
      {
        text: [
          {
            name: "IN PROGRESS",
          },
        ],
      },
    ],
  },
];

const LEADERSHIP_FOLDER_26 = "/images/leadership/bnc26";

//TODO: Create entire bio from old php files, add council
export const BNC26 = [
  {
    committeeImgSrc: LEADERSHIP_FOLDER_26 + "/camille.jpg",
    committeeName: "President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_26 + "/camille.jpg",
        text: [
          {
            name: "Camille Lorenzana",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_26 + "/edric.PNG",
    committeeName: "Vice President",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_26 + "/edric.PNG",
        text: [
          {
            name: "Edric San Miguel",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_27 + "/justin.png",
    committeeName: "Treasurer",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_27 + "/justing.pngg",
        text: [
          {
            name: "Justin Trinidad",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_26 + "/allan.png",
    committeeName: "Corresponding Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_26 + "/allan.png",
        text: [
          {
            name: "Allan Bagsic",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: LEADERSHIP_FOLDER_26 + "/christine.PNG",
    committeeName: "Recording Secretary",
    bios: [
      {
        bioImgSrc: LEADERSHIP_FOLDER_26 + "/christine.PNG",
        text: [
          {
            name: "Christine Tran",
          },
        ],
      },
    ],
  },
  {
    committeeName: "Still being worked on :(",
    bios: [
      {
        text: [
          {
            name: "IN PROGRESS",
          },
        ],
      },
    ],
  },
];

export const BNC18 = [
  {
    committeeImgSrc: "/images/leadership/bnc18/Leadership_Title.jpg",
    bios: [
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Recording Secretary',
        text: [
          {
            name: "Felice Caringal",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'President',
        text: [
          {
            name: "Laurie Gonzales",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Vice President',
        text: [
          {
            name: "Aileen de Luna",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Treasurer',
        text: [
          {
            name: "Mike Ordonez",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Corresponding Secretary',
        text: [
          {
            name: "Marty San Jose",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: "/images/leadership/bnc18/council1.jpg",
    bios: [
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Social',
        text: [
          {
            name: "Matt Bugarin",
          },
          {
            name: "Ailene Dumo",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'ISIP',
        text: [
          {
            name: "Kristina Mercado",
          },
          {
            name: "Mike Tan",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Sports',
        text: [
          {
            name: "Anthony Buenafe",
          },
          {
            name: "Lyn Raymundo",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'FIND',
        text: [
          {
            name: "Eleanor Preston",
          },
          {
            name: "Sam Umali",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Webmaster',
        text: [
          {
            name: "Kelly Wu",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Student Advisors',
        text: [
          {
            name: "VJ Macasaet",
          },
          {
            name: "Miguel Guerra",
          },
        ],
      },
    ],
  },
  {
    committeeImgSrc: "/images/leadership/bnc18/council2.jpg",
    bios: [
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Culture',
        text: [
          {
            name: "Antonette Aguilar",
          },
          {
            name: "John Pineda",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Historic',
        text: [
          {
            name: "Abby Maraya",
          },
          {
            name: "Therese Enad",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Membership',
        text: [
          {
            name: "Matt Sanidad",
          },
          {
            name: "Holly Hilario",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Public Relations',
        text: [
          {
            name: "Gabe Martinez",
          },
          {
            name: "Marina Bullock",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Community',
        text: [
          {
            name: "Tiffany Adongay",
          },
          {
            name: "Corinne Abalos",
          },
        ],
      },
    ],
  },
];

export const BNC15 = [
  {
    committeeImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
    committeeName: "Board",
    bios: [
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'President',
        text: [
          {
            name: "Phillip Valmores",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Vice President',
        text: [
          {
            name: "Lawrence Gonzales",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Corresponding Secretary',
        text: [
          {
            name: "Joel Joson",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Recording Secretary',
        text: [
          {
            name: "Cal Barcoma",
          },
        ],
      },
      {
        bioImgSrc: "/images/leadership/bnc15/Leadership_Title.jpg",
        committeeTitle: 'Treasurer',
        text: [
          {
            name: "DJerame Dasco",
          },
        ],
      },
    ],
  },
  {
    committeeName: "Culture",
    bios: [
      {
        text: [
          {
            name: 'Enrico Castillo'
          }
        ]
      }
    ]
  },
  {
    committeeName: "Historic",
    bios: [
      {
        text: [
          {
            name: 'Jenni Zamora'
          },
          {
            name: 'Crystal Gomez'
          }
        ]
      }
    ]
  },
  {
    committeeName: "Membership",
    bios: [
      {
        text: [
          {
            name: 'Maritel Sanidad'
          },
          {
            name: 'Carlamae Chavez'
          }
        ]
      }
    ]
  },
  {
    committeeName: "Social",
    bios: [
      {
        text: [
          {
            name: 'Joe Carino'
          },
          {
            name: 'Jean Jiao'
          }
        ]
      }
    ]
  },
  {
    committeeName: "Sports",
    bios: [
      {
        text: [
          {
            name: 'Dennis Nguyen'
          },
          {
            name: 'Josh Adongay'
          }
        ]
      }
    ]
  },
  {
    committeeName: "ISIP",
    bios: [
      {
        text: [
          {
            name: 'Jerwin Ocampo-Tan'
          },
          {
            name: 'Frances Gotianun'
          }
        ]
      }
    ]
  },
  {
    committeeName: "Contact us at oyfaatuvawebmasters@gmail.com",
    bios: [
      {
        text: [
          {
            name: 'Help us fill out the rest of the B&Cs!'
          },
        ]
      }
    ]
  },
];

/** This is where we add a new B&C to the archive. Some optional props can be passed in as well.
 *  You can view more about how these props are used by viewing the implemntation in LeadershipGallery.
 *  
 *  Quick Overview:
 * 
 *  bncNum - Which number B&C it is
 *  bnc - Actual JSON Array of the Committees
 *  imgPath - Image used in the LeadershipArchive component (I chose to use the Title Banner image for all of them,
 *      it can be something different if you'd like).
 *  position - Vertical position of the Title Banner image in the HalfTitle component
 *  format - specific format with additional props defined in Leadership. Read more in that component but it changes
 *      things like how many members are being displayed on board, if council is missing for a given B&C, etc.
 */
export const BNC_ARCHIVE = [
  { bncNum: 35, bnc: BNC35, imgPath: "/images/leadership/bnc35/Leadership_Title.jpg" },
  { bncNum: 34, bnc: BNC34, imgPath: "/images/leadership/bnc34/Leadership_Title.jpg", position: 20 },
  { bncNum: 33, bnc: BNC33, imgPath: "/images/leadership/bnc33/Leadership_Title.jpg", position: 5 },
  { bncNum: 32, bnc: BNC32, imgPath: "/images/leadership/bnc32/Leadership_Title.jpg", position: 30 },
  { bncNum: 31, bnc: BNC31, imgPath: "/images/leadership/bnc31/Leadership_Title.jpg", position: 25 },
  { bncNum: 30, bnc: BNC30, imgPath: "/images/leadership/bnc30/Leadership_Title.jpg", position: 5, format: 3},
  { bncNum: 29, bnc: BNC29, imgPath: "/images/leadership/bnc29/Leadership_Title.jpg", position: 0, format: 0 },
  { bncNum: 28, bnc: BNC28, imgPath: "/images/leadership/bnc28/Leadership_Title.jpg", position: 27, format: 3},
  { bncNum: 27, bnc: BNC27, imgPath: "/images/leadership/bnc27/Leadership_Title.jpg", position: 0, format: 3},
  { bncNum: 26, bnc: BNC26, imgPath: "/images/leadership/bnc26/Leadership_Title.jpg", position: 0, format: 3},
  { bncNum: 18, bnc: BNC18, imgPath: "/images/leadership/bnc18/Leadership_Title.jpg", position: 15, format: 2},
  { bncNum: 15, bnc: BNC15, imgPath: "/images/leadership/bnc15/Leadership_Title.jpg", position: 15, format: 0},
];
