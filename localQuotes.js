const localQuotes = [
  {
    text: "Very neat! That ugly head of yours does have a brain!",
    author: 'Joker',
  },
  {
    text: "I'm not mad at all. I'm just differently sane",
    author: 'Joker',
  },
  {
    text: "Yay! We're all going to Hell!",
    author: 'Joker',
  },
  {
    text: "Smile, because it confuses people. Smile, because it’s easier than explaining what is killing you inside.",
    author: 'Joker',
  },
  {
    text: "They need you right now, but when they don’t, they’ll cast you out like a leper!",
    author: 'Joker',
  },
  {
    text: "As you know, madness is like gravity…all it takes is a little push.",
    author: 'Joker',
  },
  {
    text: "We stopped checking for monsters under our bed, when we realized they were inside us.",
    author: 'Joker',
  },
  {
    text: "When the chips are down, these civilized people, they’ll eat each other",
    author: 'Joker',
  },
  {
    text: "They Laugh At me Because I’m Different. I laugh At Then Because The’re all the same",
    author: 'Joker',
  },
  {
    text: "Madness is the emergency exit. You can just step outside, and close the door on all those dreadful things that happened. You can lock them away… forever.",
    author: 'Joker',
  },
  {
    text: "Why so serious?",
    author: 'Joker',
  },
  {
    text: "The pen, is truly mightier than the sword!",
    author: 'Joker',
  },
  {
    text: "When They Treat You Like A Joke, Leave Them Like Its Funny.",
    author: 'Joker',
  },
  {
    text: "Sometimes you have to play the role of a fool to fool the fool who thinks they are fooling you.",
    author: 'Joker',
  },
  {
    text: "I hope my death makes more sense cents than my life.",
    author: 'Joker',
  },
  {
    text: "When The Fox Hears The Rabbit Scream, He Comes A-Runnin', But Not To Help!",
    author: 'Hannibal Lecter',
  },
  {
    text: "I Do Wish We Could Chat Longer, But I'm Having An Old Friend For Dinner.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Remarkable Boy. I Do Admire Your Courage. I Think I'll Eat Your Heart!",
    author: 'Hannibal Lecter',
  },
  {
    text: "Killing Must Feel Good To God, Too. He Does It All The Time.",
    author: 'Hannibal Lecter',
  },
  {
    text: "A Census Taker Once Tried To Test Me. I Ate His Liver With Some Fava Beans, And A Nice Chianti.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Without Death, We'd Be At A Loss. It's The Prospect Of Death That Drives Us To Greatness.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Cruelty Is A Gift Humanity Has Given Itself.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Well Clarice, Have The Lambs Stopped Screaming?",
    author: 'Hannibal Lecter',
  },
  {
    text: "I Never Feel Guilty Eating Anything.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Buu turn you into candy and eat you!",
    author: 'Buu',
  },
  {
    text: "You help Buu, but Buu still hate you.",
    author: 'Buu',
  },
  {
    text: "You help Buu fight, but Buu still won't share pudding!",
    author: 'Buu',
  },
  {
    text: "Live fast. Love hard. Die young. Leave a good-smelling corpse.",
    author: 'Catwoman',
  },
  {
    text: "Honey, I’m home! Oh, I forgot, I’m not married.",
    author: 'Catwoman',
  },
  {
    text: "Freedom is power. To live a life untamed and unafraid is the gift that I’ve been given, and so my journey begins.",
    author: 'Catwoman',
  },
  {
    text: "You’re the second man who killed me this week, but I’ve got seven lives left.",
    author: 'Catwoman',
  },
  {
    text: "Cats come when they feel like it. Not when they’re told.",
    author: 'Catwoman',
  },
  {
    text: "a kiss could be deadlier if you mean it.",
    author: 'Catwoman',
  },
  {
    text: "The day I died was the day I started to live.",
    author: 'Catwoman',
  },
  {
    text: "They may suspect me, but they’ll never see me. They may chase me, but they’ll never catch me.",
    author: 'Catwoman',
  },
  {
    text: "Somebody say fish? I haven’t be fed all day!",
    author: 'Catwoman',
  },
  {
    text: "Heroes Are Forgettable. They Try To Save The World... But Villains Are The Ones Who Change It.",
    author: 'Dabi',
  },
  {
    text: "Heroes And Villains Both Thrive On Violence, But We're Still Categorized... In The End, You're Just A Tool For Violence, Made To Keep Us Down. And Violence Only Breeds More Violence.",
    author: 'Tomura Shigaraki',
  },
  {
    text: "All We Wish Is To Show Him That There Are Other Ways. Because You Kids Today... You Have Your Values Chosen For You.",
    author: 'Mr. Compress',
  },
  {
    text: "You Heroes Pretended To Be Society's Guardians. For Generations, You Pretended Not To See Those You Couldn't Protect & Swept Their Pain Under The Rug.",
    author: 'Tomura Shigaraki',
  },
  {
    text: "When I Was Little, I Was Told To Stop Being Me! But That Doesn't Work! When You Shut Your Feeling Away, It Only Grows Inside!",
    author: 'Himiko Toga',
  },
  {
    text: "There is no good and evil, there is only power and those too weak to seek it.",
    author: 'Voldemort',
  },
  {
    text: "I'm The Bad Guy! I Don't Save The Day, I Don't Fly Off Into The Sunset, & I Don't Get The Girl! I'm Going Home.",
    author: 'Megamind',
  },
  {
    text: "The world is my prison. I will rule it or die.",
    author: 'Bane',
  },
  {
    text: "There is no such thing as childhood. It's a myth",
    author: 'Bane',
  },
  {
    text: "I Love Soul Food.",
    author: 'Freddy Krueger',
  },
  {
    text: "Death is the only adventure you have left.",
    author: 'Captain Hook',
  },
  {
    text: "You either die a hero, or you live long enough to see yourself become the villain.",
    author: 'Harvey Dent',
  },
  {
    text: "Never send a human to do a machine's job.",
    author: 'Agent Smith',
  },
  {
    text: "You move to an area and you multiply and multiply until every natural resource is consumed and the only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is? A virus.",
    author: 'Agent Smith',
  },
  {
    text: "Still using all the muscles except the one that matters?",
    author: 'Agent Smith',
  },
  {
    text: "The purpose of life is to end.",
    author: 'Agent Smith',
  },
  {
    text: "We're Not Here Because We're Free. We're Here Because We're NOT Free.",
    author: 'Agent Smith',
  }
]