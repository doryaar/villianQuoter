const localQuotes = [
  {
    text: "Very neat! That ugly head of yours does have a brain!",
    author: 'Joker',
  },
  {
    text: "I'm not mad at all. I'm just differently sane.",
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
    text: "When the chips are down, these civilized people, they’ll eat each other.",
    author: 'Joker',
  },
  {
    text: "They Laugh At me Because I’m Different. I laugh At Then Because The’re all the same.",
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
    text: "When they treat you like a joke, leave them like its funny.",
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
    text: "When the fox hears the rabbit scream, he comes a-runnin', but not to help!",
    author: 'Hannibal Lecter',
  },
  {
    text: "I do wish we could chat longer, but I'm having an old friend for dinner.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Remarkable boy. I do admire your courage. I think I'll eat your heart!",
    author: 'Hannibal Lecter',
  },
  {
    text: "Killing must feel good to god, too. He does it all the time.",
    author: 'Hannibal Lecter',
  },
  {
    text: "A census taker once tried to test me. I ate his liver with some fava beans, and a nice Chianti.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Without death, we'd be at a loss. It's the prospect of death that drives us to greatness.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Cruelty is a gift humanity has given itself.",
    author: 'Hannibal Lecter',
  },
  {
    text: "Well Clarice, have the lambs stopped screaming?",
    author: 'Hannibal Lecter',
  },
  {
    text: "I never feel guilty eating anything.",
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
    text: "Heroes are forgettable. They try to save the world... But villains are the ones who change it.",
    author: 'Dabi',
  },
  {
    text: "Heroes and villains both thrive on violence, but we're still categorized... In the end, you're just a tool for violence, made to keep us down. And violence only breeds more violence.",
    author: 'Tomura Shigaraki',
  },
  {
    text: "All we wish is to show him that there are other ways. Because you kids today... You have your values chosen for you.",
    author: 'Mr. Compress',
  },
  {
    text: "You heroes pretended to be society's guardians. For generations, you pretended not to see those you couldn't protect and swept their pain under the rug.",
    author: 'Tomura Shigaraki',
  },
  {
    text: "When I was little, I was told to stop being me! But that doesn't work! When you shut your feeling away, it only grows inside!",
    author: 'Himiko Toga',
  },
  {
    text: "There is no good and evil, there is only power and those too weak to seek it.",
    author: 'Voldemort',
  },
  {
    text: "I'm the bad guy! I don't save the day, I don't fly off into the sunset, & I don't get the girl! I'm going home.",
    author: 'Megamind',
  },
  {
    text: "The world is my prison. I will rule it or die.",
    author: 'Bane',
  },
  {
    text: "There is no such thing as childhood. It's a myth.",
    author: 'Bane',
  },
  {
    text: "I love soul food.",
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
    text: "We're not here because we're free. We're here because we're not free.",
    author: 'Agent Smith',
  }
]
