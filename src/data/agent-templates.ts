/**
 * Agent codename + achievement templates for the scanner.
 * Edit this file to add or change templates. Each scan picks one at random
 * and avoids repeating codenames until all are used.
 */
export type AgentTemplate = {
  code_name: string;
  achievement_title: string;
  story: string;
};

export const AGENT_TEMPLATES: AgentTemplate[] = [
  {
    code_name: "Agent Zero-Calorie",
    achievement_title: "The Pastry Protector",
    story:
      "This operative scaled the Burj Khalifa using only two suction-cup plungers to retrieve a stolen microchip that a villain was using as a coaster.",
  },
  {
    code_name: "The Glitch",
    achievement_title: "The Volcano Tech",
    story:
      "This specialist base-jumped into a live volcano to swap a thermal regulator because the world's 'Check Engine' light started blinking.",
  },
  {
    code_name: "Specter 7",
    achievement_title: "The Stationery Saboteur",
    story:
      "They stopped a continental blackout by hot-wiring a mainframe with a single paperclip and a half-eaten granola bar.",
  },
  {
    code_name: "The Comet",
    achievement_title: "The Orbital Auditor",
    story:
      "This scout hacked a private space station to secure a quantum chip because the lead scientist forgot to credit them in a research paper.",
  },
  {
    code_name: "Echo One",
    achievement_title: "The Deep-Sea Host",
    story:
      "They infiltrated a high-security undersea gala and secured a Doomsday drive without spilling a single drop of their martini.",
  },
  {
    code_name: "The Commuter",
    achievement_title: "The Canyon Crosser",
    story:
      "This agent ziplined across the Grand Canyon to nab a stolen hard drive simply because the bridge traffic was deemed unacceptable.",
  },
  {
    code_name: "Static",
    achievement_title: "The Sky-High Tourist",
    story:
      "This operative scaled a 100-story skyscraper to intercept a nuclear trigger because they heard the view from the top was to die for.",
  },
  {
    code_name: "Wiretap",
    achievement_title: "The Signal Snatcher",
    story:
      "They neutralized a global satellite threat mid-air using only a bungee cord, a stolen processor, and a very aggressive can-do attitude.",
  },
  {
    code_name: "Neon",
    achievement_title: "The Disco Disruptor",
    story:
      "This specialist dance-battled a warlord for forty minutes to distract them while a drone swapped their launch codes for a pizza menu.",
  },
  {
    code_name: "The Architect",
    achievement_title: "The Blueprint Burglar",
    story:
      "They memorized the entire layout of a hidden fortress just by looking at the villain's Pinterest board for 'Evil Lair Aesthetics'.",
  },
  {
    code_name: "Cipher",
    achievement_title: "The Wi-Fi Warrior",
    story:
      "This agent hacked the Pentagon from a smart fridge in a laundromat just to prove that the 'Low Milk' alert was actually a coded threat.",
  },
  {
    code_name: "Ghost-Writer",
    achievement_title: "The Script Swapper",
    story:
      "They replaced a dictator's declaration of war with a very emotional slam poem about a lonely turtle.",
  },
  {
    code_name: "The Mechanic",
    achievement_title: "The Submarine Savior",
    story:
      "This operative fixed a leaking nuclear sub using nothing but bubblegum and a very firm 'shush' to the engine.",
  },
  {
    code_name: "Riptide",
    achievement_title: "The Surfing Spy",
    story:
      "They rode a tsunami into a secret island base to deliver a virus that only works if the server room is at sea level.",
  },
  {
    code_name: "The Janitor",
    achievement_title: "The Clean Sweep",
    story:
      "This specialist dismantled an entire mercenary army by placing 'Wet Floor' signs in very strategic locations.",
  },
  {
    code_name: "Apex",
    achievement_title: "The Mountain Mover",
    story:
      "They carried a 500-pound server up Mt. Everest because the villain's cloud storage was literally in the clouds.",
  },
  {
    code_name: "Blink",
    achievement_title: "The Flash Photographer",
    story:
      "This agent successfully photographed a secret treaty while falling at terminal velocity, ensuring the lighting was perfect for the dossier.",
  },
  {
    code_name: "The Baker",
    achievement_title: "The Knead for Speed",
    story:
      "They smuggled a world-saving microchip inside a loaf of sourdough that was so good the guards asked for the recipe.",
  },
  {
    code_name: "Low-Key",
    achievement_title: "The Invisible Man",
    story:
      "This operative stood perfectly still in a museum for three days, disguised as a statue, just to overhear a password.",
  },
  {
    code_name: "The Pilot",
    achievement_title: "The Cloud Chaser",
    story:
      "They landed a jumbo jet on a moving train to recover a stolen USB drive that contained the world's last copy of a secret sauce.",
  },
  {
    code_name: "Vector",
    achievement_title: "The Geometry Genius",
    story:
      "This specialist calculated a perfect bank shot with a coin to knock out a guard and deactivate a laser grid simultaneously.",
  },
  {
    code_name: "The Tailor",
    achievement_title: "The Sharp Dresser",
    story:
      "They sewed a GPS tracker into a villain's cape while they were still wearing it and monologue-ing.",
  },
  {
    code_name: "Hard Drive",
    achievement_title: "The Road Warrior",
    story:
      "This agent drove a motorcycle across a frozen lake to stop a bio-weapon, mostly because they had a 'buy one get one free' coupon that expired at midnight.",
  },
  {
    code_name: "The Gardener",
    achievement_title: "The Root Cause",
    story:
      "They successfully infiltrated a fortress by posing as a very convincing hedge for six weeks.",
  },
  {
    code_name: "The Librarian",
    achievement_title: "The Silent Assassin",
    story:
      "This operative took down a rogue AI by reading it a Terms and Conditions agreement until it self-terminated out of boredom.",
  },
  {
    code_name: "The Barista",
    achievement_title: "The Caffeine Commando",
    story:
      "This agent successfully infiltrated a secret volcano lair by posing as the only person in the world who could fix the villain’s espresso machine.",
  },
  {
    code_name: "Drift",
    achievement_title: "The Arctic Architect",
    story:
      "They built a functional decoy base out of snow in under an hour just to trick a satellite into scanning a polar bear instead of the team.",
  },
  {
    code_name: "The Ornithologist",
    achievement_title: "The Pigeon Postmaster",
    story:
      "This operative trained a flock of pigeons to steal a microchip from a balcony while they watched from a café across the street.",
  },
  {
    code_name: "Signal",
    achievement_title: "The Frequency Freak",
    story:
      "They jammed an entire mercenary radio network by broadcasting a 24-hour loop of a goat yodeling.",
  },
  {
    code_name: "The Plumber",
    achievement_title: "The Pipe Professional",
    story:
      "This specialist neutralized a biochemical threat by rerouting the lab’s ventilation through a giant vat of peppermint tea.",
  },
  {
    code_name: "Altitude",
    achievement_title: "The Cloud Climber",
    story:
      "They climbed a skyscraper using only industrial-strength velcro gloves just to prove that the elevator was too slow.",
  },
  {
    code_name: "The Librarian",
    achievement_title: "The Dewey Decimal Destroyer",
    story:
      "This agent organized a villain's chaotic secret files so efficiently that the villain surrendered out of pure respect for the filing system.",
  },
  {
    code_name: "Flashpoint",
    achievement_title: "The Human Flare",
    story:
      "They guided a rescue plane to a dark island by wearing a suit made entirely of glow-sticks and doing the macarena.",
  },
  {
    code_name: "The Curator",
    achievement_title: "The Masterpiece Mimic",
    story:
      "This operative spent four hours posing as a modern art sculpture in a high-security gallery to swap a stolen ruby for a cherry.",
  },
  {
    code_name: "Bolt",
    achievement_title: "The Static Strategist",
    story:
      "They generated enough static electricity by rubbing their socks on a carpet to jumpstart a getaway boat's dead battery.",
  },
  {
    code_name: "The Sommelier",
    achievement_title: "The Vintage Vault-Cracker",
    story:
      "This specialist cracked a high-tech audio-safe by hitting a high C with a wine glass they found in the villain's kitchen.",
  },
  {
    code_name: "Gale Force",
    achievement_title: "The Wind Weaver",
    story:
      "They used a high-powered leaf blower to paraglide across a border after their parachute was confiscated at customs.",
  },
  {
    code_name: "The Tourist",
    achievement_title: "The Selfie Saboteur",
    story:
      "This agent took down a high-security firewall by 'accidentally' leaning on a server while trying to find a better angle for a photo.",
  },
  {
    code_name: "Tether",
    achievement_title: "The High-Wire Hero",
    story:
      "They walked a tightrope between two moving cargo planes to deliver a microchip because the Wi-Fi transfer was taking too long.",
  },
  {
    code_name: "The Locksmith",
    achievement_title: "The Keynote Speaker",
    story:
      "This operative picked the lock of a nuclear silo using nothing but a discarded toothpick and a very positive attitude.",
  },
  {
    code_name: "Orbit",
    achievement_title: "The Zero-G Gymnast",
    story:
      "They retrieved a falling satellite data-recorder by jumping out of a plane with a giant butterfly net.",
  },
  {
    code_name: "The Tailor",
    achievement_title: "The Hemline Hero",
    story:
      "This specialist disabled a laser grid by throwing a perfectly weighted silk scarf to block the sensors.",
  },
  {
    code_name: "Static",
    achievement_title: "The Radio Rebel",
    story:
      "They intercepted a coded message by using their metal braces as a makeshift antenna during a thunderstorm.",
  },
  {
    code_name: "The Chef",
    achievement_title: "The Michelin Mercenary",
    story:
      "This agent convinced an entire security team to leave their posts by promising them the 'best grilled cheese in the hemisphere'.",
  },
  {
    code_name: "Anchor",
    achievement_title: "The Deep-Sea Diver",
    story:
      "They retrieved a hard drive from a shipwreck using a magnet tied to a fishing pole while sitting in a swan-shaped paddle boat.",
  },
  {
    code_name: "The Intern",
    achievement_title: "The Paperwork Powerhouse",
    story:
      "This operative shut down a rogue agency by filing so many 'Request for Information' forms that the servers melted.",
  },
  {
    code_name: "Vortex",
    achievement_title: "The Spin Doctor",
    story:
      "They survived a 50-story fall by spinning their trench coat like a helicopter blade, landing perfectly in a fountain.",
  },
  {
    code_name: "The Florist",
    achievement_title: "The Pollen Provider",
    story:
      "This specialist used a bouquet of sneezing powder flowers to neutralize a room full of guards without throwing a single punch.",
  },
  {
    code_name: "Rover",
    achievement_title: "The Mars Mimic",
    story:
      "They spent a week in the desert pretending to be a rock just to intercept a transmission from a rogue satellite.",
  },
  {
    code_name: "The Clockmaker",
    achievement_title: "The Second Saver",
    story:
      "This agent stopped a countdown with one second left by jamming the gears with a very small, very stubborn piece of Swiss cheese.",
  },
  {
    code_name: "Reflex",
    achievement_title: "The Laser Leaper",
    story:
      "They navigated a complex laser hallway by doing a series of aggressive backflips because they forgot their glasses.",
  },
  {
    code_name: "The Optician",
    achievement_title: "The Visionary",
    story:
      "This operative blinded a high-tech security camera by reflecting the sun off their very shiny forehead.",
  },
  {
    code_name: "Zenith",
    achievement_title: "The Apex Auditor",
    story:
      "They successfully audited a villain’s offshore accounts while hanging upside down from a moving helicopter.",
  },
  {
    code_name: "The Groomer",
    achievement_title: "The Poodle Professional",
    story:
      "This specialist hid a tracking device in a villain’s prize-winning poodle during a high-stakes dog show.",
  },
  {
    code_name: "Mosaic",
    achievement_title: "The Tile Tracker",
    story:
      "They tracked a target across three countries just by identifying the specific brand of shoe polish left on their footprints.",
  },
  {
    code_name: "The Carpenter",
    achievement_title: "The Shelving Savior",
    story:
      "This agent trapped a rogue agent in a room by building a bookshelf in front of the door in under three minutes.",
  },
  {
    code_name: "Velocity",
    achievement_title: "The Speed Reader",
    story:
      "They memorized a 500-page manifesto while running through a burning building, later citing it to win an argument with the villain.",
  },
  {
    code_name: "The Electrician",
    achievement_title: "The Circuit Circumnavigator",
    story:
      "This operative rewired a whole city's power grid to play 'Twinkle Twinkle Little Star' as a distraction for a heist.",
  },
  {
    code_name: "Riddle",
    achievement_title: "The Logic Leaper",
    story:
      "They convinced a computer to give up its password by asking it if it 'really felt like working today'.",
  },
  {
    code_name: "The Yoga Master",
    achievement_title: "The Flexible Fugitive",
    story:
      "This specialist escaped a maximum-security cell by folding themselves into a standard-sized lunchbox.",
  },
  {
    code_name: "Catalyst",
    achievement_title: "The Chemical Chaos-Maker",
    story:
      "They turned a villain's swimming pool into giant Jell-O to prevent their getaway speedboat from starting.",
  },
  {
    code_name: "The Tutor",
    achievement_title: "The Grammar Guard",
    story:
      "This agent delayed a nuclear launch by correcting the typos in the villain's final ultimatum until the timer ran out.",
  },
  {
    code_name: "Aura",
    achievement_title: "The Mood Modifier",
    story:
      "They calmed a room of 50 angry mercenaries by playing a very soothing pan-flute solo over the intercom.",
  },
  {
    code_name: "The Cobbler",
    achievement_title: "The Sole Survivor",
    story:
      "This operative built a functioning GPS tracker into a heel using only a discarded calculator and some gum.",
  },
  {
    code_name: "Impact",
    achievement_title: "The Cushion Creator",
    story:
      "They survived a fall into a canyon by landing on a very large, very surprised flock of sheep.",
  },
  {
    code_name: "The Barman",
    achievement_title: "The Shaken Strategist",
    story:
      "This specialist extracted a confession from a double agent by serving them a drink so good they forgot they were lying.",
  },
  {
    code_name: "Friction",
    achievement_title: "The Slide Specialist",
    story:
      "They escaped a rooftop chase by sliding down a mile-long power line using only a coat hanger.",
  },
  {
    code_name: "The Linguist",
    achievement_title: "The Dialect Detective",
    story:
      "This agent successfully infiltrated a secret society by learning their ancient, dead language via a weekend crash course.",
  },
  {
    code_name: "Prism",
    achievement_title: "The Light Leaper",
    story:
      "They used a disco ball to redirect a security laser and accidentally start an impromptu dance party.",
  },
  {
    code_name: "The Coach",
    achievement_title: "The Team Talker",
    story:
      "This operative convinced a group of henchmen to go on strike for better dental benefits, leaving the villain undefended.",
  },
  {
    code_name: "Hazard",
    achievement_title: "The Safety Super-Spy",
    story:
      "They shut down an evil lab by reporting it to the local council for not having enough fire extinguishers.",
  },
  {
    code_name: "The Courier",
    achievement_title: "The Parcel Protector",
    story:
      "This specialist delivered a world-saving microchip through a warzone by hiding it inside a 'Return to Sender' envelope.",
  },
  {
    code_name: "Bunker",
    achievement_title: "The Interior Decorator",
    story:
      "They hid a safe-room inside a walk-in closet so well that even they forgot where the handle was for two days.",
  },
  {
    code_name: "The Fisherman",
    achievement_title: "The Hook, Line, and Sinker",
    story:
      "This agent caught a runaway submarine by snagging the propeller with a very heavy-duty industrial fishing net.",
  },
  {
    code_name: "Zen",
    achievement_title: "The Calm Crusader",
    story:
      "They successfully disarmed a bomb while taking a 20-minute power nap, waking up just in time to cut the blue wire.",
  },
];
