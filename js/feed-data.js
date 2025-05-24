// NetLink - Cyberpunk 2020 Social Network
// Mock data for feed posts

const mockPosts = [
    {
        id: 1,
        user: {
            id: 101,
            username: 'V',
            handle: 'v_merc',
            profile_image: 'images/profiles/profile1.jpg'
        },
        content: 'Just took down a Maelstrom gang hideout in Watson. Found some sweet military-grade cyberware. Anyone know a good ripperdoc who won\'t ask questions? #NightCity #Maelstrom',
        image: 'images/posts/post1.jpg',
        created_at: '2020-06-15T14:32:00Z',
        likes_count: 42,
        comments_count: 7,
        shares_count: 3,
        is_liked: false,
        tags: ['NightCity', 'Maelstrom', 'Cyberware']
    },
    {
        id: 2,
        user: {
            id: 102,
            username: 'Johnny Silverhand',
            handle: 'chrome_rocker',
            profile_image: 'images/profiles/profile5.jpg'
        },
        content: 'Wake the fuck up, samurai. We have a city to burn. Arasaka will pay for what they\'ve done. #CorporateScum #Resistance',
        image: 'images/posts/post2.jpg',
        created_at: '2020-06-15T12:15:00Z',
        likes_count: 187,
        comments_count: 23,
        shares_count: 56,
        is_liked: true,
        tags: ['CorporateScum', 'Resistance', 'Arasaka']
    },
    {
        id: 3,
        user: {
            id: 103,
            username: 'Judy Alvarez',
            handle: 'judy_tech',
            profile_image: 'images/profiles/profile2.jpg'
        },
        content: 'Just finished a new BD edit. This one\'s special - full sensory immersion of skydiving over Night City at sunset. Exclusive preview at Lizzie\'s tonight. #BrainDance #Technology',
        image: 'images/posts/post3.jpg',
        created_at: '2020-06-14T23:45:00Z',
        likes_count: 76,
        comments_count: 12,
        shares_count: 5,
        is_liked: false,
        tags: ['BrainDance', 'Technology', 'Lizzies']
    },
    {
        id: 4,
        user: {
            id: 104,
            username: 'Jackie Welles',
            handle: 'jackie_welles',
            profile_image: 'images/profiles/profile3.jpg'
        },
        content: 'Drinks at Afterlife tonight, chooms! First round\'s on me if you can tell me who was the first solo to get a drink named after them. #NightCity #Afterlife #Drinks',
        created_at: '2020-06-14T20:30:00Z',
        likes_count: 34,
        comments_count: 15,
        shares_count: 2,
        is_liked: false,
        tags: ['NightCity', 'Afterlife', 'Drinks']
    },
    {
        id: 5,
        user: {
            id: 105,
            username: 'Rogue Amendiares',
            handle: 'queen_of_fixers',
            profile_image: 'images/profiles/profile4.jpg'
        },
        content: 'Looking for experienced netrunner for high-risk, high-reward gig. Must have military-grade deck and custom ICE breakers. Discretion absolute necessity. #Fixer #Gig #Netrunner',
        created_at: '2020-06-14T18:10:00Z',
        likes_count: 12,
        comments_count: 3,
        shares_count: 8,
        is_liked: false,
        tags: ['Fixer', 'Gig', 'Netrunner']
    },
    {
        id: 6,
        user: {
            id: 101,
            username: 'V',
            handle: 'v_merc',
            profile_image: 'images/profiles/profile1.jpg'
        },
        content: 'Anyone else notice increased Arasaka security around Japantown? Something big going down or just the usual corporate paranoia? #Arasaka #NightCity #Intelligence',
        created_at: '2020-06-14T15:45:00Z',
        likes_count: 28,
        comments_count: 19,
        shares_count: 4,
        is_liked: true,
        tags: ['Arasaka', 'NightCity', 'Intelligence']
    },
    {
        id: 7,
        user: {
            id: 106,
            username: 'Panam Palmer',
            handle: 'nomad_girl',
            profile_image: 'images/profiles/profile2.jpg'
        },
        content: 'Aldecaldos moving camp tonight. If you\'ve got business with us, better wrap it up quick. Back in range in a few days. #Nomad #Aldecaldos #Badlands',
        image: 'images/posts/post2.jpg',
        created_at: '2020-06-14T14:20:00Z',
        likes_count: 45,
        comments_count: 8,
        shares_count: 6,
        is_liked: false,
        tags: ['Nomad', 'Aldecaldos', 'Badlands']
    },
    {
        id: 8,
        user: {
            id: 107,
            username: 'Dexter DeShawn',
            handle: 'big_time_fixer',
            profile_image: 'images/profiles/profile3.jpg'
        },
        content: 'Looking for skilled solo for a simple smash and grab. Low risk, good eddies. Must have own gear and transport. #Fixer #Gig #Solo',
        created_at: '2020-06-14T12:05:00Z',
        likes_count: 15,
        comments_count: 7,
        shares_count: 3,
        is_liked: false,
        tags: ['Fixer', 'Gig', 'Solo']
    }
];

// Technology news articles for the News page
const techNewsArticles = [
    {
        id: 1,
        title: "Biotechnica Announces Breakthrough in Neural Interface Technology",
        category: "tech",
        source: "Tech Tomorrow",
        date: "2020-06-13",
        image: "images/posts/post3.jpg",
        summary: "Biotechnica researchers have developed a new neural interface that promises to reduce rejection rates by 78%, potentially revolutionizing the cyberware industry and making augmentations accessible to millions more consumers.",
        content: `<p>NIGHT CITY - Biotechnica has unveiled what it calls a "game-changing" advancement in neural interface technology, dramatically reducing the risk of cyberware rejection and potentially opening the door to more widespread augmentation adoption.</p>
                <p>The new "SynLink" interface uses proprietary biocompatible materials that significantly reduce the immune response typically associated with cyberware implantation. In clinical trials, rejection rates dropped by 78% compared to current industry standards.</p>
                <p>"This is the biggest advancement in neural interface technology in the last decade," said Dr. Elena Novak, Biotechnica's Chief Research Officer. "SynLink will make cyberware accessible to millions of people who previously couldn't tolerate implants due to rejection issues."</p>
                <p>The technology also promises to reduce the risk of cyberpsychosis, the dissociative mental condition associated with extensive cybernetic modification, though Biotechnica representatives were careful to note that the risk is not eliminated entirely.</p>
                <p>"While SynLink significantly improves biocompatibility, users should still adhere to recommended implantation limits," Dr. Novak cautioned. "This is not a license for unlimited chrome."</p>
                <p>Industry analysts predict the technology could increase the global cyberware market by up to 30% within five years, with Biotechnica's stock already rising 15% following the announcement.</p>
                <p>Militech and Arasaka, both major players in the military cyberware sector, are reportedly already in licensing talks with Biotechnica, though the company says it plans to make the technology widely available to all manufacturers.</p>
                <p>Consumer-grade SynLink interfaces are expected to hit the market within six months, with military and high-end applications already in production.</p>`,
        tags: ["Biotechnica", "Cyberware", "Medical", "Neural Interface"]
    },
    {
        id: 2,
        title: "Netwatch Warns of New 'Black ICE' Variant Targeting Corporate Networks",
        category: "tech",
        source: "NET Security Journal",
        date: "2020-06-12",
        image: "images/posts/post1.jpg",
        summary: "Netwatch has issued an urgent warning about a dangerous new variant of Black ICE security software that has already claimed the lives of three corporate netrunners attempting to breach protected systems.",
        content: `<p>NIGHT CITY - Netwatch has issued an urgent security advisory regarding a new variant of Black ICE (Intrusion Countermeasures Electronics) that has already claimed the lives of three corporate netrunners.</p>
                <p>The variant, dubbed "Flatline" by security researchers, employs a previously unseen neural feedback loop that can bypass standard protective measures and directly attack a netrunner's central nervous system.</p>
                <p>"This is not your standard ICE," said Netwatch Commander Sarah Chen. "Flatline doesn't just disconnect an intruder or fry their deck—it targets the brain itself. The results are... catastrophic."</p>
                <p>The three confirmed fatalities occurred during attempted breaches of Arasaka and Militech secure networks, though neither corporation has acknowledged deploying the new countermeasure.</p>
                <p>Underground sources in the netrunner community claim the ICE originated from a Militech black lab, but was stolen and has now proliferated to multiple corporate networks. This claim remains unverified.</p>
                <p>Netwatch has issued updated protection protocols for registered netrunners and is working with cyberdeck manufacturers to develop hardware countermeasures.</p>
                <p>"Until these protections are in place, we strongly advise against attempting to breach any high-security corporate systems," Commander Chen stated. "The risk is simply too great."</p>
                <p>The development marks a significant escalation in the ongoing arms race between corporate security systems and the netrunners who attempt to breach them, with some experts warning that neural interfaces themselves may need to be fundamentally redesigned.</p>`,
        tags: ["Netwatch", "Black ICE", "Netrunning", "Cybersecurity"]
    },
    {
        id: 3,
        title: "Kiroshi Optics Unveils Next-Gen 'Spectrum' Eye Implants with Unprecedented Features",
        category: "tech",
        source: "Augment Today",
        date: "2020-06-10",
        image: "images/posts/post2.jpg",
        summary: "Kiroshi's new 'Spectrum' line of ocular implants offers unprecedented visual capabilities, including infrared, ultraviolet, and electromagnetic spectrum viewing, along with 50TB of integrated memory for recording and playback.",
        content: `<p>NIGHT CITY - Kiroshi Optics, the leading manufacturer of cybernetic visual enhancement systems, has unveiled its next-generation "Spectrum" line of ocular implants, featuring capabilities that push the boundaries of enhanced human vision.</p>
                <p>The Spectrum implants offer users the ability to perceive light across the entire electromagnetic spectrum, from infrared to ultraviolet, with unprecedented clarity and control. Users can switch between spectrum modes with simple neural commands or eye movements.</p>
                <p>"We're not just enhancing human vision anymore—we're redefining it," said Takemura Hiroshi, Kiroshi's Chief Innovation Officer. "Spectrum allows users to see the world in ways previously impossible without specialized equipment."</p>
                <p>Beyond expanded spectral capabilities, the implants feature 50TB of integrated memory for continuous recording and playback, advanced zoom capabilities with up to 20x magnification, and built-in analytical software that can identify and tag objects, people, and potential threats in real-time.</p>
                <p>The military and security applications are obvious, but Kiroshi is marketing the technology primarily to corporate executives, high-end security personnel, and wealthy enthusiasts. The company has also announced plans for specialized versions tailored to medical professionals, engineers, and artists.</p>
                <p>"A surgeon with Spectrum implants can see blood vessels and tissue variations invisible to the naked eye," Hiroshi explained. "An engineer can detect structural stress points or electrical fields. The applications are limited only by imagination."</p>
                <p>The implants also feature enhanced security protocols, including biometric authentication and encrypted storage, addressing concerns about unauthorized access to recorded visual data.</p>
                <p>The Spectrum line will be available through licensed ripperdocs next month, with prices starting at ¥75,000 for the base model—roughly three times the cost of Kiroshi's current top-end implants.</p>`,
        tags: ["Kiroshi", "Cyberware", "Optics", "Augmentation"]
    },
    {
        id: 4,
        title: "Militech Debuts 'Phantom' Active Camouflage System for Military and Security Applications",
        category: "tech",
        source: "Defense Tech Review",
        date: "2020-06-08",
        image: "images/posts/post3.jpg",
        summary: "Militech's revolutionary 'Phantom' system combines advanced materials and holographic projection to render soldiers nearly invisible in combat situations, raising concerns about a new arms race in stealth technology.",
        content: `<p>NIGHT CITY - Militech Corporation has unveiled a revolutionary active camouflage system codenamed "Phantom," capable of rendering soldiers virtually invisible in combat situations.</p>
                <p>The system combines reactive metamaterials with advanced holographic projection technology to bend light around the wearer and project background imagery, effectively making them disappear from visual detection.</p>
                <p>"Phantom represents the future of tactical advantage," said Colonel James Harford, Militech's Director of Special Projects. "It's not perfect invisibility, but in low light or chaotic conditions, it provides unprecedented concealment capabilities."</p>
                <p>During the controlled demonstration, soldiers equipped with the Phantom system were able to approach within five meters of observers before being detected, even when the observers knew they were present in the room.</p>
                <p>The system is currently integrated into a full-body tactical suit, though Militech claims the technology will eventually be miniaturized for integration into standard combat armor. Power consumption remains a challenge, with the current prototype offering only 30 minutes of active camouflage before requiring recharging.</p>
                <p>Military analysts suggest the technology could dramatically change urban warfare and special operations, though concerns about proliferation have already emerged.</p>
                <p>"If this technology reaches the black market or falls into the hands of criminal organizations, law enforcement will face unprecedented challenges," said former NCPD Captain Michelle Torres. "Imagine Tyger Claws or Maelstrom with functional invisibility."</p>
                <p>Arasaka Corporation representatives declined to comment on Militech's announcement, but sources within the defense industry suggest they are developing their own competing technology.</p>
                <p>Militech states that Phantom will be available exclusively to military and authorized security forces, with extensive background checks and tracking systems built into each unit.</p>`,
        tags: ["Militech", "Military Tech", "Camouflage", "Security"]
    }
];

// Entertainment news articles for the News page
const entertainmentNewsArticles = [
    {
        id: 1,
        title: "Samurai Reunion Concert Sells Out in 3 Minutes",
        category: "entertainment",
        source: "Night City Beat",
        date: "2020-06-14",
        image: "images/posts/post2.jpg",
        summary: "Legendary rockerboy band Samurai's surprise reunion concert at the Red Dirt sold out in just three minutes, crashing ticket servers and leaving thousands of fans scrambling for black market options.",
        content: `<p>NIGHT CITY - Tickets for the surprise Samurai reunion concert at the Red Dirt venue sold out in a record-breaking three minutes yesterday, crashing multiple ticket servers and sending thousands of disappointed fans to the black market.</p>
                <p>The legendary rockerboy band, fronted by the infamous Johnny Silverhand, announced the one-night-only performance just 24 hours before tickets went on sale, creating a frenzy among fans old and new.</p>
                <p>"This is unprecedented," said Red Dirt owner Kovacs Miklos. "We've had big shows before, but nothing like this. Our entire system went down within seconds of the tickets going live."</p>
                <p>The 5,000-capacity venue could have sold out many times over, according to ticket platform analytics. Black market resellers are already offering tickets at up to twenty times the original ¥500 price.</p>
                <p>Samurai, known for anti-corporate anthems like "Chippin' In" and "Never Fade Away," hasn't performed together since their explosive breakup in 2008. The reunion features original members Johnny Silverhand, Kerry Eurodyne, Denny, and Nancy, with a new bassist replacing the late Henry.</p>
                <p>"This isn't just a concert, it's a political statement," said music journalist Iris Zhang. "Samurai has always been about resistance against corporate control. With tensions between corps and citizens at an all-time high, their message resonates now more than ever."</p>
                <p>The band has not commented on whether additional shows will be added, though rumors of a full tour continue to circulate online.</p>
                <p>NCPD has issued a statement warning of increased security around the Red Dirt on the night of the concert, citing concerns about potential corporate sabotage or anti-corporate demonstrations.</p>`,
        tags: ["Samurai", "Johnny Silverhand", "Concert", "Music"]
    },
    {
        id: 2,
        title: "US Cracks Top 10 in Braindance Charts with Controversial 'Chrome Dreams'",
        category: "entertainment",
        source: "BD Weekly",
        date: "2020-06-12",
        image: "images/posts/post3.jpg",
        summary: "Rising braindance artist US has broken into the top 10 with 'Chrome Dreams,' a visceral exploration of cyberpsychosis that has mental health advocates concerned about its graphic content and potential psychological effects.",
        content: `<p>NIGHT CITY - Controversial braindance artist US has broken into the top 10 charts with "Chrome Dreams," a visceral exploration of cyberpsychosis that has mental health advocates raising alarms about its graphic content.</p>
                <p>The BD, which allows users to experience the descent into cyberpsychosis from a first-person perspective, has become the most-downloaded experience on the underground BD network XBD.NET, despite—or perhaps because of—its disturbing content.</p>
                <p>"Chrome Dreams pushes the boundaries of what's acceptable in braindance," said BD critic Maya Rodriguez. "It's technically brilliant, with unprecedented sensory fidelity, but the psychological impact is concerning. Users don't just watch someone lose their humanity—they feel it happening to themselves."</p>
                <p>The experience follows a corporate security specialist who gradually replaces more and more of their body with cybernetics, eventually triggering a psychotic break during which they massacre their colleagues. What makes the BD particularly controversial is that it doesn't end with the break—it continues through the rampage and subsequent MaxTac intervention.</p>
                <p>"This isn't art, it's psychological damage for profit," said Dr. Thomas Chen of the Night City Mental Health Coalition. "We're already seeing cases of temporary dissociation and panic attacks in people who've experienced this BD."</p>
                <p>US, whose real identity remains unknown, defended the work in an encrypted message to BD Weekly: "Chrome Dreams isn't glorifying cyberpsychosis—it's a warning about the human cost of unchecked augmentation. Sometimes the truth needs to hurt."</p>
                <p>The NCPD has launched an investigation into the BD's origins, particularly concerned about how US obtained the raw neural recordings of an actual cyberpsychotic episode.</p>
                <p>Despite the controversy, or perhaps because of it, "Chrome Dreams" continues to climb the charts, with underground BD clubs across Night City featuring it as their main attraction.</p>`,
        tags: ["Braindance", "US", "Cyberpsychosis", "Entertainment"]
    },
    {
        id: 3,
        title: "Lizzie's Bar Launches Exclusive 'Deep Dive' BD Experience Room",
        category: "entertainment",
        source: "Night City Nights",
        date: "2020-06-10",
        image: "images/posts/post1.jpg",
        summary: "Lizzie's Bar has unveiled a new premium 'Deep Dive' BD suite offering high-end, custom-crafted experiences in luxurious private rooms, with prices starting at ¥5,000 per hour and a waiting list already stretching to three months.",
        content: `<p>NIGHT CITY - Lizzie's Bar, already known as one of Night City's premier braindance establishments, has unveiled a new premium "Deep Dive" suite offering high-end, custom-crafted BD experiences in luxurious private rooms.</p>
                <p>The exclusive new area, hidden behind a biometrically secured door on the bar's upper level, features five private rooms equipped with state-of-the-art BD technology and staffed by some of the city's most talented BD editors and technicians.</p>
                <p>"This isn't your standard BD booth experience," said Lizzie's owner Mateo Thorne. "Deep Dive offers completely personalized sessions tailored to individual preferences, with sensory fidelity and emotional depth you can't find anywhere else in Night City."</p>
                <p>Each room features a different aesthetic theme—from futuristic minimalism to opulent vintage luxury—and includes amenities such as premium synthetic alcohol, personalized climate control, and even pheromone enhancement systems to complement the BD experience.</p>
                <p>The real draw, however, is the exclusive content. Lizzie's has contracted with elite BD artists and editors, including the renowned Judy Alvarez, to create experiences unavailable anywhere else.</p>
                <p>"We're not just offering the standard thrills," Thorne explained. "Our clients can experience anything from climbing Mount Everest to performing with Samurai at their peak, all with emotional and sensory detail that makes it indistinguishable from reality."</p>
                <p>The premium service comes with a premium price tag: sessions start at ¥5,000 per hour, with custom experiences costing significantly more. Despite this, the waiting list already stretches to three months, with corporate executives and Night City celebrities making up much of the clientele.</p>
                <p>Critics have raised concerns about the potential for addiction with such high-fidelity experiences, but Thorne insists that all clients undergo psychological screening and are monitored during sessions to prevent adverse reactions.</p>
                <p>"Deep Dive is about expanding human experience, not escaping reality," he said. "Though we understand why some might prefer our worlds to the real one."</p>`,
        tags: ["Lizzie's Bar", "Braindance", "Entertainment", "Luxury"]
    },
    {
        id: 4,
        title: "Virtual Reality Combat Sport 'Chrome Clash' Announced with ¥10 Million Prize Pool",
        category: "entertainment",
        source: "Game Vortex",
        date: "2020-06-08",
        image: "images/posts/post2.jpg",
        summary: "Orbital Entertainment has unveiled 'Chrome Clash,' a revolutionary full-dive VR combat sport where competitors control customized avatar fighters with neural links, competing for a record-breaking ¥10 million prize pool.",
        content: `<p>NIGHT CITY - Orbital Entertainment has unveiled "Chrome Clash," a revolutionary full-dive virtual reality combat sport featuring a record-breaking ¥10 million prize pool for its inaugural tournament.</p>
                <p>Unlike traditional esports, Chrome Clash utilizes cutting-edge neural interface technology that allows competitors to directly control customized avatar fighters in a virtual arena, experiencing every punch, kick, and special move as if they were physically present.</p>
                <p>"This is the future of competitive entertainment," said Orbital Entertainment CEO Jackson Wei during the announcement event at Afterlife. "The physical limitations of the human body no longer constrain what's possible in combat sports. In Chrome Clash, if you can imagine it, you can execute it."</p>
                <p>The game features extensive customization options, allowing competitors to design fighters with various cybernetic enhancements, weapons, and special abilities. Matches take place in destructible virtual environments ranging from traditional fighting arenas to fantastical landscapes.</p>
                <p>While competitors feel the sensation of combat, safety protocols prevent any actual physical harm, though the neural feedback is described as intensely realistic.</p>
                <p>"It's like nothing I've ever experienced," said beta tester and former MMA fighter Zoe Martinez. "You feel every impact, every movement. The adrenaline rush is identical to real combat, but without the lasting damage."</p>
                <p>The announcement has already drawn interest from professional fighters, esports competitors, and corporations looking to sponsor teams. Preliminary qualifiers for the tournament will begin next month, with the finals scheduled to be broadcast globally from Night City Arena.</p>
                <p>Medical experts have expressed concerns about the potential psychological impact of such realistic combat experiences, but Orbital Entertainment insists that all competitors will undergo rigorous screening and monitoring.</p>
                <p>Registration for Chrome Clash opens next week, with the company expecting over 10,000 competitors to vie for the 128 tournament slots.</p>`,
        tags: ["Chrome Clash", "Virtual Reality", "Esports", "Gaming"]
    }
];
