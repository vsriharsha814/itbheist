export type AgentTemplate = {
  code_name: string;
  achievement_title: string;
  story: string;
};

export const AGENT_TEMPLATES: AgentTemplate[] = [
  {
    code_name: "Zero-Day",
    achievement_title: "The Kernel Infiltrator",
    story: "Infiltrated an air-gapped military server by modulating the LED pulses on a networked printer to transmit binary data to a high-altitude drone.",
  },
  {
    code_name: "The Architect",
    achievement_title: "The Structural Saboteur",
    story: "Neutralized a mountain-fortress by identifying a harmonic frequency in the ventilation shafts, using three synchronized acoustic dampeners to collapse the inner bulkhead.",
  },
  {
    code_name: "Cold Boot",
    achievement_title: "The Memory Specialist",
    story: "Extracted encryption keys from a liquid-nitrogen-cooled RAM stick during a live raid, maintaining the data's integrity while under heavy suppression fire.",
  },
  {
    code_name: "Black Box",
    achievement_title: "The Forensic Ghost",
    story: "Recovered a shattered flight recorder from a 10,000-meter trench, manually reconstructing the magnetic tape to reveal a global conspiracy.",
  },
  {
    code_name: "The Weaver",
    achievement_title: "The Signal Sovereign",
    story: "Intercepted a 4096-bit encrypted transmission by using a city’s smart-grid infrastructure as a massive distributed antenna.",
  },
  {
    code_name: "Apex",
    achievement_title: "The Kinetic Specialist",
    story: "Calculated a seven-point ricochet path for a non-lethal projectile to disable a getaway vehicle’s fuel pump from two kilometers away.",
  },
  {
    code_name: "Sentinel 7",
    achievement_title: "The Perimeter Wraith",
    story: "Maintained a deep-cover position inside a high-security lab for six months by mapping the exact blind spots of a rotating lidar array.",
  },
  {
    code_name: "Cipher 0",
    achievement_title: "The Logic Executioner",
    story: "Neutralized a rogue AI by feeding it a recursive linguistic paradox disguised as a standard firmware update.",
  },
  {
    code_name: "The Nomad",
    achievement_title: "The Biometric Mimic",
    story: "Bypassed a retinal scanner by using a synthetic ocular lens printed with the target's vascular mapping in real-time.",
  },
  {
    code_name: "Packet Loss",
    achievement_title: "The Network Ghost",
    story: "Successfully exfiltrated 50TB of data by hiding the packets within the background noise of a live global television broadcast.",
  },
  {
    code_name: "The Handler",
    achievement_title: "The Asset Architect",
    story: "Turned an entire enemy platoon into double agents by planting personalized psychological triggers in their daily briefing metadata.",
  },
  {
    code_name: "Vector",
    achievement_title: "The Orbital Auditor",
    story: "Reprogrammed a de-orbiting satellite using a handheld laser designator to pulse commands directly into its optical sensors.",
  },
  {
    code_name: "The Chemist",
    achievement_title: "The Molecular Saboteur",
    story: "Disabled a fleet of stealth bombers by introducing a catalytic agent into the fuel supply that only activates at supersonic speeds.",
  },
  {
    code_name: "Static",
    achievement_title: "The Frequency Phantom",
    story: "Vanished from a locked room by localizing an EMP burst that blinded all digital sensors within a 50-meter radius.",
  },
  {
    code_name: "The Pilot",
    achievement_title: "The Low-Alt Legend",
    story: "Flew a heavy lift transport through a canyon below the radar ceiling, delivering a tactical team directly into a mountain hangars' exhaust port.",
  },
  {
    code_name: "Root",
    achievement_title: "The System Overlord",
    story: "Took control of a private mercenary army’s logistics by injecting a self-replicating worm into their proprietary encrypted comms.",
  },
  {
    code_name: "The Ghost",
    achievement_title: "The Thermal Void",
    story: "Walked through a field of infrared sensors by wearing a suit that recycled body heat into a directional energy beam.",
  },
  {
    code_name: "Iron Sight",
    achievement_title: "The Long-Range Legend",
    story: "Eliminated a target's hardware encryption from 1.5 miles away by firing a specialized probe through a three-pane glass window.",
  },
  {
    code_name: "The Courier",
    achievement_title: "The Data Drifter",
    story: "Crossed three international borders with a quantum processor hidden in plain sight as a functional vintage wristwatch.",
  },
  {
    code_name: "Monolith",
    achievement_title: "The Defensive Titan",
    story: "Held a server room against a cyber-assault team for twelve hours by manually re-routing physical fiber-optic cables.",
  },
  {
    code_name: "The Tailor",
    achievement_title: "The Fabricator",
    story: "Produced a perfect set of diplomatic credentials and a bespoke tuxedo in under four hours to infiltrate a royal gala.",
  },
  {
    code_name: "Deadlock",
    achievement_title: "The Encryption Wall",
    story: "Prevented a nuclear launch by physically welding the primary circuit breakers shut while under heavy gas attack.",
  },
  {
    code_name: "The Librarian",
    achievement_title: "The Archive Assassin",
    story: "Recovered a redacted 1960s blueprint from a flooded basement, using chemical restoration to uncover a hidden base's location.",
  },
  {
    code_name: "Flashpoint",
    achievement_title: "The Diversion Expert",
    story: "Triggered a false-flag sensor alert in a neighboring country to pull an entire security detail away from the target zone.",
  },
  {
    code_name: "The Surgeon",
    achievement_title: "The Precision Striker",
    story: "Removed a tracking microchip from an asset's carotid artery using improvised tools during a high-speed chase.",
  },
  {
    code_name: "Echo One",
    achievement_title: "The Sonar Scout",
    story: "Mapped an undersea base’s internal layout by analyzing the reverberations of a passing whale’s song.",
  },
  {
    code_name: "The Clockmaker",
    achievement_title: "The Temporal Specialist",
    story: "Synchronized a multi-city blackout to occur within a 10-millisecond window, allowing for a simultaneous three-site heist.",
  },
  {
    code_name: "Vortex",
    achievement_title: "The Aerodynamicist",
    story: "Designed a specialized glider wing that allowed a HALO jumper to travel 50 miles horizontally to a silent landing.",
  },
  {
    code_name: "The Gardener",
    achievement_title: "The Bio-Surveillance Lead",
    story: "Engineered a strain of bioluminescent moss to grow over a facility’s security cameras, rendering them useless.",
  },
  {
    code_name: "Hard Drive",
    achievement_title: "The Mechanical Master",
    story: "Rebuilt a destroyed diesel engine in a warzone using only parts salvaged from a kitchen and a broken radio.",
  },
  {
    code_name: "The Auditor",
    achievement_title: "The Paperwork Predator",
    story: "Bankrupted a global terror cell by identifying a 0.01% discrepancy in their offshore accounts and triggering an automated freeze.",
  },
  {
    code_name: "Drift",
    achievement_title: "The Arctic Ace",
    story: "Navigated a blizzard to rescue a stranded team, using only the stars and a handheld magnetic sensor to avoid crevasses.",
  },
  {
    code_name: "The Smith",
    achievement_title: "The Lockbreaker",
    story: "Cracked a mechanical vault with over a billion combinations by feeling the heat signature of the tumblers' friction.",
  },
  {
    code_name: "Signal",
    achievement_title: "The Radio Rebel",
    story: "Broadcasted a message across a jammed continent by bouncing a high-frequency signal off the moon’s surface.",
  },
  {
    code_name: "The Groomer",
    achievement_title: "The Social Engineer",
    story: "Infiltrated a high-society cult by assuming the identity of a missing heir, passing a three-day intensive interrogation.",
  },
  {
    code_name: "Mosaic",
    achievement_title: "The Pattern Analyst",
    story: "Predicted a terrorist attack's location by analyzing the subtle shift in shipping container traffic across three oceans.",
  },
  {
    code_name: "The Carpenter",
    achievement_title: "The Stealth Builder",
    story: "Constructed a hidden floor within a target’s office in under six hours, allowing for a permanent listening post.",
  },
  {
    code_name: "Velocity",
    achievement_title: "The Rapid Responder",
    story: "Secured a falling hard drive from a mid-air plane explosion by diving without a parachute and docking with a rescue craft.",
  },
  {
    code_name: "The Electrician",
    achievement_title: "The Grid Guardian",
    story: "Stopped a city-wide surge by manually grounding a high-voltage transformer using a titanium cable.",
  },
  {
    code_name: "Riddle",
    achievement_title: "The Codebreaker",
    story: "Deciphered a one-time pad encryption by recognizing the author's unique literary bias in the ciphertext.",
  },
  {
    code_name: "Yoga Master",
    achievement_title: "The Infiltration Artist",
    story: "Entered a secure facility through a 10-inch diameter pneumatic tube, bypassing all external security doors.",
  },
  {
    code_name: "Catalyst",
    achievement_title: "The Reaction Specialist",
    story: "Started a rebellion within a high-security prison by manipulating the food supply to trigger a specific neurochemical response.",
  },
  {
    code_name: "The Tutor",
    achievement_title: "The Information Broker",
    story: "Extracted a confession from a hardened general by using a series of subtle linguistic traps and cold-reading techniques.",
  },
  {
    code_name: "Aura",
    achievement_title: "The Sensory Specialist",
    story: "Navigated a pitch-black chemical plant using only a specialized sonar belt and a heightened sense of smell.",
  },
  {
    code_name: "The Cobbler",
    achievement_title: "The Tech Integrator",
    story: "Designed a pair of shoes that generate a localized jamming field, allowing the wearer to walk past wireless alarms.",
  },
  {
    code_name: "Impact",
    achievement_title: "The Ballistics Expert",
    story: "Stopped an armored convoy by firing a single shot into a specific geological fault line, causing a controlled rockslide.",
  },
  {
    code_name: "The Barman",
    achievement_title: "The Chemical Mixologist",
    story: "Infiltrated a cartel summit and neutralized the leadership using a slow-acting aerosol hidden in the ice buckets.",
  },
  {
    code_name: "Friction",
    achievement_title: "The Surface Specialist",
    story: "Scaled a glass skyscraper during a thunderstorm using improvised vacuum-sealed climbing pads.",
  },
  {
    code_name: "The Linguist",
    achievement_title: "The Polyglot Prophet",
    story: "Infiltrated an isolated tribe to recover a downed satellite, learning a previously undocumented language in four days.",
  },
  {
    code_name: "Prism",
    achievement_title: "The Optical Illusionist",
    story: "Hid a tactical team in an open field by using a series of specialized mirrors to bend light around their position.",
  },
  {
    code_name: "The Coach",
    achievement_title: "The Tactical Trainer",
    story: "Turned a group of raw recruits into an elite extraction unit in under a week to rescue a captured ambassador.",
  },
  {
    code_name: "Hazard",
    achievement_title: "The Bio-Threat Specialist",
    story: "Contained a viral outbreak in a remote research station by re-engineering the HVAC system to act as a centrifuge.",
  },
  {
    code_name: "The Courier",
    achievement_title: "The High-Value Escort",
    story: "Protected a royal family during a coup by navigating them through an active sewer system and onto a waiting sub.",
  },
  {
    code_name: "Bunker",
    achievement_title: "The Siege Specialist",
    story: "Survives a 48-hour bombardment of a safehouse by utilizing a series of pre-built reinforced 'coffins' in the foundation.",
  },
  {
    code_name: "The Fisherman",
    achievement_title: "The Deep-Sea Retrieval",
    story: "Recovered a nuclear warhead from a volcanic trench using a custom-built, remote-operated submersible.",
  },
  {
    code_name: "Zen",
    achievement_title: "The Focus Master",
    story: "Disarmed a pressure-sensitive bomb while suspended upside down in an active elevator shaft.",
  },
  {
    code_name: "The Optician",
    achievement_title: "The Visual Vanguard",
    story: "Detected a hidden laser grid by using a specialized spray that reveals the refraction of light in high-humidity air.",
  },
  {
    code_name: "Zenith",
    achievement_title: "The Peak Performer",
    story: "Completed a solo ascent of K2 to plant a listening post that monitors communications across the entire border region.",
  },
  {
    code_name: "The Groomer",
    achievement_title: "The Animal Handler",
    story: "Trained a swarm of bees to carry microscopic listening devices into a garden party hosted by a warlord.",
  },
  {
    code_name: "Mosaic",
    achievement_title: "The Visual Strategist",
    story: "Reconstructed a shredded document containing 10,000 pieces by using a proprietary AI vision algorithm.",
  },
  {
    code_name: "The Carpenter",
    achievement_title: "The Fortification Expert",
    story: "Turned a standard hotel room into a Level-5 secure facility in under 30 minutes to protect a high-value witness.",
  },
  {
    code_name: "Velocity",
    achievement_title: "The Speed Specialist",
    story: "Drove a modified interceptor through a crowded city at 150mph to deliver an antidote before the toxin became permanent.",
  },
  {
    code_name: "The Electrician",
    achievement_title: "The Power Player",
    story: "Drained a facility’s backup generators by inducing a massive, controlled short-circuit through the plumbing.",
  },
  {
    code_name: "Riddle",
    achievement_title: "The Enigma",
    story: "Fooled a polygraph and a neuro-imaging scan while being interrogated by the world's most advanced intelligence agency.",
  },
  {
    code_name: "The Contortionist",
    achievement_title: "The Flexible Infiltrator",
    story: "Hid inside the chassis of a moving truck for twelve hours to infiltrate a heavily guarded manufacturing plant.",
  },
  {
    code_name: "The Catalyst",
    achievement_title: "The Instigator",
    story: "Orchestrated a massive market crash to force a corrupt CEO into a desperate, traceable liquid asset transfer.",
  },
  {
    code_name: "The Tutor",
    achievement_title: "The Mentor",
    story: "Infiltrated an academy for young assassins and successfully exfiltrated the top three students before their final 'test'.",
  },
  {
    code_name: "Aura",
    achievement_title: "The Mood Specialist",
    story: "Neutralized an entire room of guards by using a low-frequency infrasound generator to induce paralyzing fear.",
  },
  {
    code_name: "The Cobbler",
    achievement_title: "The Gadgeteer",
    story: "Built a fully functional, untraceable handgun using only a 3D printer and high-density ceramic filament.",
  },
  {
    code_name: "Impact",
    achievement_title: "The Force Multiplier",
    story: "Stopped a massive cyber-attack by physically destroying the main server hub with a single, precision-placed explosive.",
  },
  {
    code_name: "The Barman",
    achievement_title: "The Deep-Cover Asset",
    story: "Gained the trust of a reclusive billionaire by posing as their personal assistant and managing their entire life for two years.",
  },
  {
    code_name: "Friction",
    achievement_title: "The Chase Specialist",
    story: "Escaped a high-speed chase by using a specialized oil slick that only affects high-performance tires.",
  },
  {
    code_name: "The Linguist",
    achievement_title: "The Polyglot Prophet",
    story: "Translated a secret, ancient code that revealed the location of a lost city and its advanced technology.",
  },
  {
    code_name: "Prism",
    achievement_title: "The Spectrum Spy",
    story: "Used a specialized UV light to reveal a hidden map written in invisible ink on a priceless painting.",
  },
  {
    code_name: "The Coach",
    achievement_title: "The Heist Lead",
    story: "Planned and executed a flawless heist of a national museum, stealing the crown jewels without leaving a single trace.",
  },
  {
    code_name: "Hazard",
    achievement_title: "The Toxicologist",
    story: "Developed a personalized toxin that only affects a specific individual's DNA, allowing for a clean, targeted strike.",
  },
  {
    code_name: "The Courier",
    achievement_title: "The Lifeline",
    story: "Delivered a critical organ for transplant to a high-ranking official through a warzone in record time.",
  },
  {
    code_name: "Bunker",
    achievement_title: "The Shield",
    story: "Protected a group of scientists from a massive explosion by using a specialized blast shield they built on the spot.",
  },
  {
    code_name: "The Fisherman",
    achievement_title: "The Angler",
    story: "Captured a high-ranking target by using a specialized 'hook' that attaches to their vehicle from a distance.",
  },
  {
    code_name: "Zen",
    achievement_title: "The Peaceful Warrior",
    story: "Infiltrated a high-security monastery and stole a sacred scroll without alerting any of the monks.",
  },
  {
    code_name: "The Optician",
    achievement_title: "The Insight",
    story: "Identified a hidden bug in a high-ranking official's office by using a specialized thermal imaging camera.",
  },
  {
    code_name: "Zenith",
    achievement_title: "The Apex Hunter",
    story: "Completed a mission to the moon to recover a lost piece of technology that could change the world.",
  },
  {
    code_name: "The Groomer",
    achievement_title: "The Avian Trainer",
    story: "Trained a group of falcons to intercept and destroy enemy drones.",
  },
  {
    code_name: "Mosaic",
    achievement_title: "The Puzzler",
    story: "Solved a complex, multi-layered riddle that revealed the identity of a mysterious international criminal.",
  },
  {
    code_name: "The Carpenter",
    achievement_title: "The Invisible Builder",
    story: "Constructed a hidden base in the middle of a desert that is completely invisible to satellite surveillance.",
  },
  {
    code_name: "Velocity",
    achievement_title: "The Swift Extractor",
    story: "Recovered a stolen microchip from a speeding train by using a specialized grappling hook and a parachute.",
  },
  {
    code_name: "The Electrician",
    achievement_title: "The Spark",
    story: "Restored power to a hospital in a warzone by bypassing a damaged transformer and using a nearby power line.",
  },
  {
    code_name: "Riddle",
    achievement_title: "The Escape Artist",
    story: "Disappeared from a high-security prison by using a series of hidden tunnels and a clever disguise.",
  },
  {
    code_name: "The Yoga Master",
    achievement_title: "The Beam Navigator",
    story: "Escaped a room filled with lasers by using their incredible flexibility to navigate through the beams.",
  },
  {
    code_name: "Catalyst",
    achievement_title: "The Regime Breaker",
    story: "Started a movement that led to the downfall of a corrupt government.",
  },
  {
    code_name: "The Tutor",
    achievement_title: "The Rebel Mentor",
    story: "Taught a group of rebels how to use advanced technology to fight back against their oppressors.",
  },
  {
    code_name: "Aura",
    achievement_title: "The Charisma Sovereign",
    story: "Used their incredible charisma to convince a group of enemy soldiers to surrender without a fight.",
  },
  {
    code_name: "The Cobbler",
    achievement_title: "The Satellite Fixer",
    story: "Repaired a damaged communication satellite using only parts they found on a nearby space station.",
  },
  {
    code_name: "Impact",
    achievement_title: "The AI Destroyer",
    story: "Destroyed a rogue AI's core by using a specialized EMP device.",
  },
  {
    code_name: "The Barman",
    achievement_title: "The Archive Keeper",
    story: "Maintained a secret archive of information that could bring down the world's most powerful people.",
  },
  {
    code_name: "Friction",
    achievement_title: "The Moto Specialist",
    story: "Successfully escaped a high-speed chase on a motorcycle by using their incredible driving skills.",
  },
  {
    code_name: "The Linguist",
    achievement_title: "The Peace Maker",
    story: "Negotiated a peace treaty between two warring nations that had been at war for decades.",
  },
  {
    code_name: "Prism",
    achievement_title: "The Sniper Spotter",
    story: "Used their incredible eyesight to spot a hidden sniper from over a mile away.",
  },
  {
    code_name: "The Coach",
    achievement_title: "The Rescue Lead",
    story: "Led a successful mission to rescue a group of hostages from a high-security prison.",
  },
  {
    code_name: "Hazard",
    achievement_title: "The Neutralizer",
    story: "Neutralized a chemical weapon before it could be launched into a crowded city.",
  },
];
