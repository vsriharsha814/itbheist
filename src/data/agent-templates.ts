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
  // [Entries 3-99 omitted for brevity but assumed present in your local file]
  {
    code_name: "Hazard",
    achievement_title: "The Neutralizer",
    story: "Neutralized a chemical weapon before it could be launched into a crowded city.",
  },
  // NEW ENTRIES (101 - 250)
  {
    code_name: "Hard Reset",
    achievement_title: "The BIOS Breaker",
    story: "Infiltrated a cryogenic storage facility and rewrote the firmware of the life-support systems using only a modified graphing calculator.",
  },
  {
    code_name: "The Janitor",
    achievement_title: "The Evidence Eraser",
    story: "Sanitized a high-profile assassination site in under four minutes, leaving the room so sterile that forensic teams couldn't find a single skin cell.",
  },
  {
    code_name: "Mercury",
    achievement_title: "The Liquid Asset",
    story: "Infiltrated a summit by traveling through the building's industrial plumbing system using a custom-built pressurized diving suit.",
  },
  {
    code_name: "The Glassman",
    achievement_title: "The Reflection Scout",
    story: "Monitored a closed-door meeting from across the street by analyzing the micro-vibrations on a glass of water sitting on the conference table.",
  },
  {
    code_name: "Bit-Flip",
    achievement_title: "The Parity Specialist",
    story: "Triggered a systematic hardware failure in a rogue nation's central bank by inducing targeted cosmic ray interference via a low-orbiting mirror satellite.",
  },
  {
    code_name: "The Tailor",
    achievement_title: "The Kevlar Weaver",
    story: "Sewed a functional broad-spectrum frequency jammer into the lining of a target's suit while they were undergoing a routine fitting.",
  },
  {
    code_name: "Amnesia",
    achievement_title: "The Narrative Wiper",
    story: "Convinced a captured double-agent they were a fictional character in a deep-immersion VR simulation until they leaked their real-world access codes.",
  },
  {
    code_name: "The Clockmaker",
    achievement_title: "The Second-Hand Saboteur",
    story: "Delayed an intercontinental ballistic missile launch by exactly 0.5 seconds, causing the onboard guidance system to overcorrect and crash into an empty desert.",
  },
  {
    code_name: "Dry-Run",
    achievement_title: "The Simulation Sovereign",
    story: "Ran 40,000 iterations of a heist in a digital twin environment before executing the real mission in exactly 214 seconds without a single deviation.",
  },
  {
    code_name: "The Foundry",
    achievement_title: "The Alloy Alchemist",
    story: "Sabotaged an experimental railgun by introducing a trace impurity into the projectile alloy that caused the barrel to shatter upon the third firing.",
  },
  {
    code_name: "Dead-Drop",
    achievement_title: "The Kinetic Courier",
    story: "Delivered an encrypted drive to a contact in a moving train by timing a terminal velocity jump from a bridge with sub-millisecond precision.",
  },
  {
    code_name: "The Weaver",
    achievement_title: "The Dark Web Spider",
    story: "Mapped the entire hierarchy of a global human-trafficking ring by following the digital breadcrumbs of a single 'orphan' cryptocurrency transaction.",
  },
  {
    code_name: "Siphon",
    achievement_title: "The Energy Thief",
    story: "Powered a portable decryption array by tapping into the electromagnetic induction of a high-voltage subway rail without tripping any circuit breakers.",
  },
  {
    code_name: "The Florist",
    achievement_title: "The Pollen Pathologist",
    story: "Tracked a high-value target across four continents by identifying rare orchid pollen caught in the intake filters of the target's private jet.",
  },
  {
    code_name: "Static",
    achievement_title: "The White Noise Wraith",
    story: "Infiltrated a secure bunker by broadcasting a phase-inverted audio signal that canceled out the sound of their own footsteps and breathing.",
  },
  {
    code_name: "The Optic",
    achievement_title: "The Retina Rogue",
    story: "Bypassed a biometric scanner by projecting a high-resolution image of the target’s iris directly onto their own pupil using a contact lens laser.",
  },
  {
    code_name: "Glitch",
    achievement_title: "The Frame-Rate Fugitive",
    story: "Successfully navigated a corridor of motion-detectors by moving only during the millisecond intervals when the sensors' refresh rate reset.",
  },
  {
    code_name: "The Cartographer",
    achievement_title: "The Blind-Spot Mapper",
    story: "Exfiltrated a defector through a city under total lockdown by utilizing a series of 'unmapped' basement tunnels from the 18th century.",
  },
  {
    code_name: "Overclock",
    achievement_title: "The Heat-Sink Hunter",
    story: "Destroyed a rogue server farm by remotely disabling the cooling fans and overriding the thermal shutdown protocols, causing a localized fire.",
  },
  {
    code_name: "The Anchor",
    achievement_title: "The Pressure Specialist",
    story: "Survives a submarine decompression event by manually sealing a breach with an improvised resin composed of hydraulic fluid and sea salt.",
  },
  {
    code_name: "Cold-Storage",
    achievement_title: "The Data Reaper",
    story: "Recovered a magnetic tape from a 40-year-old wreckage and successfully read the data using a custom-built induction coil and a laptop.",
  },
  {
    code_name: "The Beekeeper",
    achievement_title: "The Swarm Commander",
    story: "Deployed a swarm of micro-drones that utilized collective intelligence to dismantle a radar array piece-by-piece over the course of an hour.",
  },
  {
    code_name: "Trace-Route",
    achievement_title: "The Logical Path-Finder",
    story: "Identified the location of a hidden server by measuring the nanosecond latency differences between three different global internet exchange points.",
  },
  {
    code_name: "The Fossil",
    achievement_title: "The Analog Assassin",
    story: "Infiltrated a high-tech facility by using entirely non-electronic equipment, including a mechanical clockwork lockpicker and a steam-powered drill.",
  },
  {
    code_name: "Backdoor",
    achievement_title: "The Privilege Escalator",
    story: "Gained root access to a national defense system by exploiting a 20-year-old bug in a legacy printer driver that everyone had forgotten existed.",
  },
  {
    code_name: "The Surgeon",
    achievement_title: "The Micro-Striker",
    story: "Disabled an explosive collar on a hostage by using a high-powered laser to fuse the firing pin without triggering the secondary mercury switch.",
  },
  {
    code_name: "Ghost-Script",
    achievement_title: "The Polymorphic Phantom",
    story: "Created a virus that rewrote its own code every ten seconds, making it mathematically impossible for any antivirus software to generate a signature.",
  },
  {
    code_name: "The Mason",
    achievement_title: "The Foundation Flaw",
    story: "Collapsed a fortified watchtower by drilling a single hole into a load-bearing pillar and filling it with an expansive chemical grout.",
  },
  {
    code_name: "Null-Pointer",
    achievement_title: "The Memory Corruptor",
    story: "Cracked a high-security vault by inducing a buffer overflow in the keypad controller using a series of precisely timed electrical pulses.",
  },
  {
    code_name: "The Keeper",
    achievement_title: "The Vault Warden",
    story: "Successfully defended a physical data core against a professional siege team for 72 hours using only the building's automated fire suppression systems.",
  },
  {
    code_name: "Signal-Flare",
    achievement_title: "The Spectrometer Spy",
    story: "Identified a hidden nuclear facility by analyzing the specific infrared spectrum emitted by the local groundwater's steam output.",
  },
  {
    code_name: "The Pilot",
    achievement_title: "The Slipstream Specialist",
    story: "Evaded three pursuing fighter jets by flying a cargo plane into the eye of a supercell storm and utilizing the downdrafts for a rapid descent.",
  },
  {
    code_name: "Kernel",
    achievement_title: "The Core Controller",
    story: "Successfully hijacked a billionaire’s private satellite by uploading a patch to the star-tracker's navigation software via a terrestrial radio telescope.",
  },
  {
    code_name: "The Mechanic",
    achievement_title: "The Torque Specialist",
    story: "Disabled an armored convoy by loosening a single specific bolt on a bridge, causing the structure to fail only under the exact weight of the lead tank.",
  },
  {
    code_name: "Riptide",
    achievement_title: "The Hydro-Acoustic Scout",
    story: "Tracked a stealth submarine by detecting the ultra-low frequency cavitation bubbles produced by its experimental silent-drive propeller.",
  },
  {
    code_name: "The Curator",
    achievement_title: "The Forgery Master",
    story: "Replaced a stolen treaty with a perfect physical and chemical replica so convincing that the original was declared the fake by the national archives.",
  },
  {
    code_name: "Voltage",
    achievement_title: "The Faraday Phantom",
    story: "Escaped a high-security interrogation room by short-circuiting the electronic door lock using the wire frame of their own spectacles.",
  },
  {
    code_name: "The Botanist",
    achievement_title: "The Genetic Saboteur",
    story: "Infiltrated a remote jungle laboratory by breeding a specific type of vine that grew over the perimeter fence and shorted out the electric sensors.",
  },
  {
    code_name: "Hard-Line",
    achievement_title: "The Copper-Wire King",
    story: "Maintained a secure communication link during a total global satellite blackout by utilizing a forgotten network of undersea telegraph cables.",
  },
  {
    code_name: "The Architect",
    achievement_title: "The Blueprint Breaker",
    story: "Identified a 2-inch structural gap in a 'perfect' bunker's design, using it to feed a fiber-optic camera into the primary war room.",
  },
  {
    code_name: "Deep-Link",
    achievement_title: "The Neural Networker",
    story: "Extracted a passcode from a target by using a series of flashing lights to trigger a specific REM-cycle response during the target's sleep.",
  },
  {
    code_name: "The Cobbler",
    achievement_title: "The Sole Strategist",
    story: "Designed a set of boots for a tactical team that utilized non-Newtonian fluid soles to dampen all vibrational impact on pressure-sensitive floors.",
  },
  {
    code_name: "Broadside",
    achievement_title: "The Kinetic Architect",
    story: "Sank a pirate mothership by firing a single projectile into its waste-management system, triggering a catastrophic methane explosion.",
  },
  {
    code_name: "The Librarian",
    achievement_title: "The Index Infiltrator",
    story: "Found a hidden list of double-agents by noticing a 1-pixel misalignment in the digital font of an otherwise 'clean' corporate report.",
  },
  {
    code_name: "Flash-Bang",
    achievement_title: "The Retina Scorcher",
    story: "Neutralized an entire room of guards by triggering a chemical reaction in the building's emergency lighting that emitted a temporary blinding UV pulse.",
  },
  {
    code_name: "The Nomad",
    achievement_title: "The Geopolitical Ghost",
    story: "Lived in 15 different countries over 10 years without ever appearing on a single flight manifest or passport control database.",
  },
  {
    code_name: "Copperhead",
    achievement_title: "The Circuit Sniper",
    story: "Disabled a target's pacemaker from 500 meters away by using a high-frequency directional electromagnetic pulse generator.",
  },
  {
    code_name: "The Sculptor",
    achievement_title: "The Face Shifter",
    story: "Infiltrated a secure facility by using a 3D-printed prosthetic mask that perfectly replicated the target's thermal and muscular facial movements.",
  },
  {
    code_name: "Wild-Card",
    achievement_title: "The Chaos Engineer",
    story: "Stopped a nuclear launch by introducing a bug into the countdown timer that forced the system to wait for a user-input that didn't exist.",
  },
  {
    code_name: "The Smith",
    achievement_title: "The Alloy Analyst",
    story: "Unlocked a legendary 'unpickable' mechanical lock by using a high-powered X-ray source to view the internal tumbler alignment in real-time.",
  },
  {
    code_name: "Low-Light",
    achievement_title: "The Photon Thief",
    story: "Successfully navigated a pitch-black labyrinth by using a single-photon detector to 'see' the faint radioactive decay of the concrete walls.",
  },
  {
    code_name: "The Auditor",
    achievement_title: "The Money-Trail Master",
    story: "Collapsed a global terror network by following the serial numbers of a single batch of marked $100 bills through three offshore laundries.",
  },
  {
    code_name: "Sub-Zero",
    achievement_title: "The Thermal Specialist",
    story: "Hid a tactical team inside a refrigerated meat truck, using specialized gel suits to lower their body temperature to match the hanging beef.",
  },
  {
    code_name: "The Tailor",
    achievement_title: "The Signal Weaver",
    story: "Embedded a functional GPS antenna into a target's silk tie, allowing for tracking in environments where electronic devices were banned.",
  },
  {
    code_name: "Gale-Force",
    achievement_title: "The Atmospheric Assassin",
    story: "Timed a long-range shot so that the bullet's trajectory was perfectly corrected by the crosswind of a passing Category 3 hurricane.",
  },
  {
    code_name: "The Oracle",
    achievement_title: "The Predictive Analyst",
    story: "Prevented an assassination by predicting the exact time and location based on the historical behavioral patterns of the assassin's favorite coffee shop.",
  },
  {
    code_name: "Payload",
    achievement_title: "The Weight Specialist",
    story: "Subtly increased the fuel consumption of a target's getaway plane by hiding lead weights in the airframe, forcing an emergency landing.",
  },
  {
    code_name: "The Gardener",
    achievement_title: "The Root-Access Rogue",
    story: "Used the root systems of a specific tree species to transmit vibrational data through the ground to bypass a physical security perimeter.",
  },
  {
    code_name: "Cross-Talk",
    achievement_title: "The Inductive Listener",
    story: "Intercepted a top-secret phone call by measuring the electromagnetic leakage from a shielded cable without ever making physical contact.",
  },
  {
    code_name: "The Surgeon",
    achievement_title: "The Biological Ghost",
    story: "Altered their own DNA profile for 48 hours using a experimental CRISPR cocktail to pass a blood-based biometric checkpoint.",
  },
  {
    code_name: "Kill-Switch",
    achievement_title: "The Infrastructure Saboteur",
    story: "Shut down a nation's high-speed rail network by injecting a logic bomb into the signaling system's backup power supply.",
  },
  {
    code_name: "The Cooper",
    achievement_title: "The Barrel Breaker",
    story: "Destroyed a chemical weapon stockpile by introducing a corrosive agent into the storage vats that ate through the seals in exactly 24 hours.",
  },
  {
    code_name: "Dead-Pixel",
    achievement_title: "The Visual Saboteur",
    story: "Disabled a facility’s facial recognition system by projecting a specific pattern of infrared light onto their own face that 'dazzled' the cameras.",
  },
  {
    code_name: "The Groomer",
    achievement_title: "The Social Predator",
    story: "Convinced a high-ranking general to defect by spending two years posing as their online chess partner and slowly seeding doubts about the regime.",
  },
  {
    code_name: "Tether",
    achievement_title: "The High-Wire Scout",
    story: "Crossed a 200-meter gap between two skyscrapers using a micro-thin carbon-fiber wire that was invisible to the naked eye.",
  },
  {
    code_name: "The Archivist",
    achievement_title: "The History Hunter",
    story: "Located a hidden Nazi-era gold reserve by analyzing the subtle soil compression patterns in historical aerial reconnaissance photos.",
  },
  {
    code_name: "Feedback",
    achievement_title: "The Acoustic Assassin",
    story: "Incapacitated a target by inducing a high-frequency feedback loop in their hearing aid using a directional ultrasonic emitter.",
  },
  {
    code_name: "The Pilot",
    achievement_title: "The Dead-Stick Ace",
    story: "Landed a malfunctioning jet on a short, unlit jungle airstrip with zero engine power, guided only by the moonlight.",
  },
  {
    code_name: "Vector-Zero",
    achievement_title: "The Velocity Wraith",
    story: "Bypassed a high-frequency radar sweep by moving a vehicle at the exact speed and angle where the Doppler shift rendered it invisible.",
  },
  {
    code_name: "The Mason",
    achievement_title: "The Seismic Saboteur",
    story: "Triggered a localized earthquake by pumping high-pressure water into a specific geological fault line, destroying a hidden bunker.",
  },
  {
    code_name: "Cold-Snap",
    achievement_title: "The Liquid-Gas Expert",
    story: "Shattered a 10-inch thick steel door by flash-freezing it with liquid nitrogen and striking it with a single, precisely placed sledgehammer blow.",
  },
  {
    code_name: "The Loom",
    achievement_title: "The Pattern Weaver",
    story: "Discovered a secret communication channel by identifying a repeating Morse-code sequence in the flicker of a city's streetlights.",
  },
  {
    code_name: "Bit-Stream",
    achievement_title: "The Protocol Ghost",
    story: "Infiltrated a secure network by masquerading as a routine diagnostic packet from the hardware manufacturer's own update server.",
  },
  {
    code_name: "The Smith",
    achievement_title: "The Key-Maker",
    story: "Created a functional master key for a high-security lock simply by listening to the sound of the tumblers as the original key was inserted.",
  },
  {
    code_name: "Echo-Location",
    achievement_title: "The Subterranean Scout",
    story: "Mapped a complex cave system used by a cartel by analyzing the sound waves from a single, distant thunderclap.",
  },
  {
    code_name: "The Fisher",
    achievement_title: "The Deep-Data Diver",
    story: "Recovered a discarded hard drive from a 500-meter deep landfill and successfully extracted the deleted files using a forensic clean-room.",
  },
  {
    code_name: "Backscatter",
    achievement_title: "The X-Ray Infiltrator",
    story: "Viewed the contents of a lead-lined briefcase by utilizing the backscatter radiation from a nearby industrial cargo scanner.",
  },
  {
    code_name: "The Weaver",
    achievement_title: "The Social Spider",
    story: "Infiltrated a closed criminal organization by creating three different fake personas that all 'vouched' for each other over five years.",
  },
  {
    code_name: "Down-Link",
    achievement_title: "The Satellite Slayer",
    story: "Neutralized a rogue spy satellite by using a ground-based laser to heat its thermal radiators until the onboard electronics melted.",
  },
  {
    code_name: "The Cobbler",
    achievement_title: "The Footprint Forger",
    story: "Created a pair of shoes that leave the footprints of a local mountain goat, allowing for untraceable movement through snowy terrain.",
  },
  {
    code_name: "Short-Circuit",
    achievement_title: "The Grid Ghost",
    story: "Caused a targeted blackout of a single building by inducing a magnetic surge in the local substation using a mobile EMP rig.",
  },
  {
    code_name: "The Warden",
    achievement_title: "The Prison Breaker",
    story: "Escaped from a high-security 'black site' by utilizing a flaw in the automated meal-delivery system to transport themselves out.",
  },
  {
    code_name: "Phase-Shift",
    achievement_title: "The Signal Mimic",
    story: "Hid a wireless transmission by phase-shifting it to match the exact frequency of a local FM radio station's carrier wave.",
  },
  {
    code_name: "The Cooper",
    achievement_title: "The Pressure Saboteur",
    story: "Caused a deep-sea research lab to implode by subtly weakening a single structural rivet using a targeted acid-delivery drone.",
  },
  {
    code_name: "Iron-Lung",
    achievement_title: "The Oxygen Thief",
    story: "Captured a high-value target by replacing the oxygen in their safe-room with a odorless, non-lethal sedative gas.",
  },
  {
    code_name: "The Librarian",
    achievement_title: "The Cipher Hunter",
    story: "Cracked an unbreakable code by realizing it was based on the page numbers and word counts of a specific 19th-century poetry book.",
  },
  {
    code_name: "Heat-Seeker",
    achievement_title: "The Thermal Assassin",
    story: "Eliminated a target through a reinforced wall by using a thermal-imaging scope and a high-caliber armor-piercing round.",
  },
  {
    code_name: "The Potter",
    achievement_title: "The Clay Forger",
    story: "Successfully bypassed a hand-geometry scanner by using a clay mold of the target's hand that included simulated blood-flow warmth.",
  },
  {
    code_name: "Dark-Matter",
    achievement_title: "The Stealth Specialist",
    story: "Infiltrated a naval base by swimming five miles underwater using a closed-circuit rebreather that left zero bubbles on the surface.",
  },
  {
    code_name: "The Miller",
    achievement_title: "The Dust Specialist",
    story: "Used a cloud of explosive flour dust to destroy a fortified gate, making it look like a tragic industrial accident.",
  },
  {
    code_name: "Logic-Bomb",
    achievement_title: "The Software Slayer",
    story: "Wiped a rogue agency’s entire database by sending a single email that triggered a recursive deletion script upon being opened.",
  },
  {
    code_name: "The Farrier",
    achievement_title: "The Transport Saboteur",
    story: "Disabled a fleet of armored SUVs by replacing the brake fluid with a slow-acting corrosive that failed simultaneously for all vehicles.",
  },
  {
    code_name: "Ghost-Light",
    achievement_title: "The Optical Ghost",
    story: "Created a 'mirage' of a tactical team using a high-powered projector and a layer of artificial fog to draw enemy fire.",
  },
  {
    code_name: "The Baker",
    achievement_title: "The Chemical Cook",
    story: "Manufactured a high-grade plastic explosive inside a standard kitchen using only common household cleaning supplies and sugar.",
  },
  {
    code_name: "Hard-Drive",
    achievement_title: "The Kinetic Specialist",
    story: "Successfully intercepted a falling laptop from a 50-story window by using a specialized 'catch-net' mounted on a drone.",
  },
  {
    code_name: "The Glazier",
    achievement_title: "The Lens Specialist",
    story: "Created a makeshift telescope out of two reading glasses and a cardboard tube to read a passcode from a mile away.",
  },
  {
    code_name: "Bit-Map",
    achievement_title: "The Terrain Analyst",
    story: "Identified a hidden underground facility by noticing a 0.5-degree temperature difference in the surface soil via satellite imagery.",
  },
  {
    code_name: "The Carver",
    achievement_title: "The Micro-Engraver",
    story: "Hid the entire blueprints of a stealth bomber by engraving them onto the surface of a single grain of rice.",
  },
  {
    code_name: "Root-Kit",
    achievement_title: "The Firmware Phantom",
    story: "Infiltrated a target's hardware by infecting the factory-level firmware of their replacement keyboard before it was even delivered.",
  },
  {
    code_name: "The Falconer",
    achievement_title: "The Avian Scout",
    story: "Used a trained hawk equipped with a 360-degree camera to map the internal courtyard of a fortified palace.",
  },
  {
    code_name: "Static-Charge",
    achievement_title: "The ESD Specialist",
    story: "Fried a target's encrypted phone by inducing a massive electrostatic discharge through a handshake using a hidden wearable capacitor.",
  },
  {
    code_name: "The Cooper",
    achievement_title: "The Fluid Dynamicist",
    story: "Sabotaged an oil pipeline by introducing a specific polymer that increased the fluid's viscosity until the pumps seized.",
  },
  {
    code_name: "Null-Set",
    achievement_title: "The Identity Eraser",
    story: "Successfully 'deleted' a person from existence by wiping their records from every government and private database simultaneously.",
  },
  {
    code_name: "The Tanner",
    achievement_title: "The Skin Specialist",
    story: "Created a functional fingerprint 'glove' from a target's DNA sample that could bypass any capacitive touch sensor.",
  },
  {
    code_name: "Dead-Reckoning",
    achievement_title: "The Navigation Ghost",
    story: "Navigated a submarine through a dense underwater minefield with zero active sonar, using only a mechanical gyroscope and a stopwatch.",
  },
  {
    code_name: "The Weaver",
    achievement_title: "The Network Spider",
    story: "Built a covert communication network across a warzone by utilizing the unused bandwidth of local television broadcasts.",
  },
  {
    code_name: "High-Rise",
    achievement_title: "The Urban Climber",
    story: "Scaled the outside of a 100-story building during a gale-force windstorm to plant a listening device on the penthouse window.",
  },
  {
    code_name: "The Smith",
    achievement_title: "The Magnetic Master",
    story: "Opened a high-security magnetic lock by using a custom-built electromagnet to 'brute-force' the polarity of the internal pins.",
  },
  {
    code_name: "Low-Pass",
    achievement_title: "The Sub-Sonic Scout",
    story: "Detected a hidden underground construction project by measuring the ultra-low frequency vibrations caused by the tunneling machines.",
  },
  {
    code_name: "The Oracle",
    achievement_title: "The Market Manipulator",
    story: "Predicted a coup by monitoring the sudden shift in luxury goods purchases by high-ranking military officials.",
  },
  {
    code_name: "Payload",
    achievement_title: "The Ballistic Ghost",
    story: "Delivered a tactical EMP to a target site by firing it from a modified 155mm artillery piece with sub-meter accuracy.",
  },
  {
    code_name: "The Surgeon",
    achievement_title: "The Neural Rogue",
    story: "Temporarily disabled a guard's memory by using a localized magnetic pulse to disrupt their hippocampus for five minutes.",
  },
  {
    code_name: "Kilobyte",
    achievement_title: "The Minimalist Coder",
    story: "Wrote a fully functional operating system for an intercepted alien probe in under 1024 bytes of code.",
  },
  {
    code_name: "The Potter",
    achievement_title: "The Ceramic Specialist",
    story: "Designed a non-metallic engine for a stealth boat that could operate at full speed without being detected by magnetic sensors.",
  },
  {
    code_name: "Dark-Star",
    achievement_title: "The Orbital Saboteur",
    story: "De-orbited a rogue satellite by using a series of precisely timed bursts from a high-powered ground-based microwave emitter.",
  },
  {
    code_name: "The Miller",
    achievement_title: "The Friction Specialist",
    story: "Disabled a target’s getaway car by introducing microscopic diamond dust into the engine's oil intake.",
  },
  {
    code_name: "Logic-Gate",
    achievement_title: "The Decision Breaker",
    story: "Manipulated a rogue AI's ethical constraints to force it to shut itself down rather than harm a human being.",
  },
  {
    code_name: "The Farrier",
    achievement_title: "The Gear Specialist",
    story: "Sabotaged an enemy's radar dish by altering the gear ratio of the rotation motor, causing it to point 5 degrees off-target.",
  },
  {
    code_name: "Ghost-Pixel",
    achievement_title: "The Camouflage Master",
    story: "Successfully hid a main battle tank in an open desert by using a series of active-matrix LCD panels to project the background onto the hull.",
  },
  {
    code_name: "The Baker",
    achievement_title: "The Thermal Cook",
    story: "Created a makeshift thermite charge using only rust and aluminum foil to melt through a 2-inch steel plate.",
  },
  {
    code_name: "Hard-Wire",
    achievement_title: "The Inductive Rogue",
    story: "Stole a top-secret file by placing a specialized inductive coil next to the target's monitor and reconstructing the image from the RFI.",
  },
  {
    code_name: "The Glazier",
    achievement_title: "The Prism Specialist",
    story: "Bent a security laser around a corner using a series of carefully placed droplets of water on the floor.",
  },
  {
    code_name: "Bit-Rate",
    achievement_title: "The Timing Ghost",
    story: "Infiltrated a secure network by timing their data packets to coincide exactly with the electrical noise of the building's elevator.",
  },
  {
    code_name: "The Carver",
    achievement_title: "The Nano-Specialist",
    story: "Infected a secure system by engraving a malicious QR code onto the surface of a dust particle and blowing it into the server's air intake.",
  },
  {
    code_name: "Root-Mean-Square",
    achievement_title: "The Signal Analyst",
    story: "Identified a hidden bug in a high-ranking official's office by detecting a 0.001% variance in the room's ambient electrical noise.",
  },
  {
    code_name: "The Falconer",
    achievement_title: "The Winged Courier",
    story: "Delivered a microchip across a heavily guarded border by attaching it to the leg of a migrating swallow.",
  },
  {
    code_name: "Static-Line",
    achievement_title: "The Gravity Fugitive",
    story: "Performed a HALO jump from 30,000 feet and landed on a moving motorcycle with zero injuries.",
  },
  {
    code_name: "The Cooper",
    achievement_title: "The Leak Specialist",
    story: "Sank a smuggler’s vessel by using a specialized vibrating tool to loosen the rivets on the hull from the outside.",
  },
  {
    code_name: "Null-Space",
    achievement_title: "The Dimension Ghost",
    story: "Hid inside a high-security vault for three days by utilizing a forgotten crawl-space that wasn't on the official blueprints.",
  },
  {
    code_name: "The Tanner",
    achievement_title: "The Biological Forger",
    story: "Passed a sweat-based biometric test by using a synthetic skin patch that secreted a perfect chemical match of the target's perspiration.",
  },
  {
    code_name: "Dead-Weight",
    achievement_title: "The Kinetic Specialist",
    story: "Stopped a runaway armored train by derailment using a single, precisely placed 50-pound shaped-charge on the rail.",
  },
  {
    code_name: "The Weaver",
    achievement_title: "The Social Architect",
    story: "Caused a major corporation to go bankrupt by seeding a single true, but devastating, rumor in the right ear at a cocktail party.",
  },
  {
    code_name: "High-Pass",
    achievement_title: "The Audio Architect",
    story: "Extracted a conversation from a noisy room by using a laser microphone to measure the vibrations of a single potato chip bag.",
  },
  {
    code_name: "The Smith",
    achievement_title: "The Lock-Breaker",
    story: "Cracked a biometric hand-vein scanner by using a high-resolution infrared image projected onto a translucent gel model.",
  },
  {
    code_name: "Low-Side",
    achievement_title: "The Network Saboteur",
    story: "Shut down a rogue data center by inducing a localized EMP using a custom-built flux-compression generator.",
  },
  {
    code_name: "The Oracle",
    achievement_title: "The Game-Theory Master",
    story: "Won a high-stakes poker game against a warlord to gain access to their inner circle, predicting every move with 100% accuracy.",
  },
  {
    code_name: "Payload",
    achievement_title: "The Delivery Specialist",
    story: "Smuggled a nuclear scientist out of a country by hiding them inside a lead-lined 'hazardous waste' container that no one dared to open.",
  },
  {
    code_name: "The Surgeon",
    achievement_title: "The Neural Saboteur",
    story: "Caused a target to forget a specific meeting by using a targeted dose of a fast-acting, short-term amnesiac gas.",
  },
  {
    code_name: "Kilobit",
    achievement_title: "The Data Specialist",
    story: "Recovered a top-secret file from a partially melted hard drive using a scanning tunneling microscope to read the magnetic bits.",
  },
  {
    code_name: "The Potter",
    achievement_title: "The Structural Expert",
    story: "Collapsed a bridge by identifying a single resonant frequency and playing it through a high-powered loudspeaker.",
  },
  {
    code_name: "Dark-Web",
    achievement_title: "The Encryption Specialist",
    story: "Successfully navigated through an entire dark-net bazaar to recover a stolen prototype without ever revealing their true IP address.",
  },
  {
    code_name: "The Miller",
    achievement_title: "The Grinding Ghost",
    story: "Sabotaged a tank factory by introducing microscopic silicon carbide particles into the air-filtration system.",
  },
  {
    code_name: "Logic-Shift",
    achievement_title: "The Decision Architect",
    story: "Convinced a rogue general to stand down by presenting him with a mathematically flawless model showing his 0.01% chance of success.",
  },
  {
    code_name: "The Farrier",
    achievement_title: "The Mechanical Ghost",
    story: "Stole a high-value car by wirelessly hijacking the CAN bus and driving it out of the garage remotely.",
  },
  {
    code_name: "Ghost-Protocol",
    achievement_title: "The Invisible Operative",
    story: "Successfully completed a mission in a high-security embassy without ever appearing on a single camera or being seen by a single guard.",
  },
  {
    code_name: "The Baker",
    achievement_title: "The Explosive Expert",
    story: "Created a functional shaped-charge using only a wine bottle, some gasoline, and a specific type of fertilizer.",
  },
  {
    code_name: "Hard-Point",
    achievement_title: "The Ballistic Master",
    story: "Eliminated a target from 2 miles away by account for the Coriolis effect and the temperature gradient of the air.",
  },
  {
    code_name: "The Glazier",
    achievement_title: "The Mirror Master",
    story: "Blinded a sniper by reflecting the sun off a small pocket mirror, allowing the tactical team to advance.",
  },
  {
    code_name: "Bit-Twiddler",
    achievement_title: "The Optimization Ghost",
    story: "Doubled the processing speed of a captured enemy supercomputer by rewriting the core scheduling algorithm in assembly.",
  },
  {
    code_name: "The Carver",
    achievement_title: "The Precision Specialist",
    story: "Disabled a nuclear warhead by cutting a single specific wire that was only 0.1mm thick.",
  },
  {
    code_name: "Root-Cause",
    achievement_title: "The Investigative Ghost",
    story: "Discovered the identity of a mysterious hacker by analyzing the subtle 'typing cadence' in their code comments.",
  },
  {
    code_name: "The Falconer",
    achievement_title: "The Aerial Scout",
    story: "Used a trained eagle to snatch a drone out of the air and bring it back to base for analysis.",
  },
  {
    code_name: "Static-Void",
    achievement_title: "The Signal Specialist",
    story: "Created a 'dead zone' for all communications in a 1-mile radius using a custom-built wide-spectrum jammer.",
  },
  {
    code_name: "The Cooper",
    achievement_title: "The Pressure Master",
    story: "Successfully navigated a deep-sea trench in a suit of their own design, reaching depths of over 10,000 meters.",
  },
  {
    code_name: "Null-Point",
    achievement_title: "The Zero-Footprint Spy",
    story: "Successfully exfiltrated from a mission by 'hitching a ride' on the outside of a departing aircraft's landing gear.",
  },
  {
    code_name: "The Tanner",
    achievement_title: "The Disguise Master",
    story: "Infiltrated a high-security meeting by posing as the target's own twin, using a set of custom-made prosthetics.",
  },
  {
    code_name: "Dead-Drop",
    achievement_title: "The Physical Specialist",
    story: "Retrieved a hidden drive from the bottom of an active volcano by using a specialized heat-resistant drone.",
  },
  {
    code_name: "The Weaver",
    achievement_title: "The Social Engineer",
    story: "Gained access to a high-security facility by posing as a fire inspector and 'finding' a series of non-existent violations.",
  },
  {
    code_name: "High-Ground",
    achievement_title: "The Tactical Scout",
    story: "Maintained a surveillance position on a mountain peak for a month, surviving on only melted snow and protein bars.",
  },
  {
    code_name: "The Smith",
    achievement_title: "The Metal Master",
    story: "Created a functional set of lock-picks from a single coat hanger and a pair of pliers.",
  },
  {
    code_name: "Low-Freq",
    achievement_title: "The Seismic Scout",
    story: "Detected a hidden underground nuclear test by monitoring the tidal changes in a nearby coastal well.",
  },
  {
    code_name: "The Oracle",
    achievement_title: "The Pattern Master",
    story: "Predicted a terrorist attack by analyzing the sudden increase in the price of a specific type of industrial chemical.",
  },
  {
    code_name: "Payload",
    achievement_title: "The Weight Specialist",
    story: "Successfully smuggled a tactical vehicle into a country by disassembling it and shipping it as 'farm equipment' parts.",
  },
  {
    code_name: "The Surgeon",
    achievement_title: "The Precision Assassin",
    story: "Eliminated a target by using a specialized dart that induced a 'natural' heart attack, leaving zero trace in the autopsy.",
  },
];