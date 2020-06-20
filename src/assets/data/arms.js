const { hydrate } = require("react-dom")

const rebellion = {
       0: {name: `Rebellion`},
       1: {title: `The Bane of Destiny`},
       2: {origin: `A mysterious keepsake from the devil knight Sparda, retrieved from his family home after Dante conspired to take his revenge against demonkind years later. Sparda trained his progeny thoroughly enough for him to retain his childhood skills with it and continued to hone his ability through years of practical engagements, eventually compensating for the otherwise disproportionate size and weight with his own supernatural strength so he could use it like a professional fencer. It has served as his go-to weapon throughout the years, and was the catalyst to awakening his latent demonic power through contact with the most vital concentrations of his own blood.`},
       3: {discovery: `At the resetting of his entire timeline Rebellion was heavily damaged and began to drain his energy the more it was used, stifling his survival in the primordial world of the demon-controlled past. What was to be the Reign of the Dark Baron left Dante in a pure human state, right before he was impaled by his own weapon and clinically murdered - but upon coming to terms with his Reason, the blade was repaired, reformed, and reattuned to become a corporeal manifestation of his willpower - his ‘soul force’. `},
       4: {construction: `Rebellion’s power is no longer based in demon magic, but in the underlying force of his will, or Soul Force: a foundational yet aberrant constant found in all aspects of observable reality, from the laws of the sciences down to the never-ending conundrum of sapient thought. For that reason it is wholly indestructible, as the very thought of breaking it would imply a shattering of Dante’s will. In spite of this - or perhaps [i]because[/i] of this - the residual power it generates can be rather fickle and dependent on how resolute Dante is in his task. `}, 
       5: {use: `This is also affected by the lingering magic within the blade that previously served to unlock his power: the more blood the sword tastes, the more ‘familiar’ it becomes with them, the more it goes beyond simple physical damage, the more it begins to cut away at one’s very sanity. Thus Rebellion’s strength is not in any numerical output, but its ability to change a foundation.`},
       6: {curse: `Only those that are full match to his Reason are able to so much as lift it - otherwise it is an impossibly heavy claymore that adjusts its weight to be beyond the threshold of any attempting to lift it, and quickly becoming hot as a star if the user is in opposition to the will of the sword.`}
}

const agniRudra = {
    0: {name: `Agni & Rudra`},
    1: {title: `The Firestorm`},
    2: {origin: `Twin incubi named after the Hindu gods of the flame and the storm, possessing a long history of tempting the weak of will into adopting the power they offered to slay their enemies - demon and human alike - and slowly turning their minds and bodies into their newest vessels. Sparda defeated the brothers and bound them as a pair among many guardians within Temen-ni-gru. The centuries following their chaining have taken a toll on these previously malevolent beings, rendering them mostly benign and cordial outside of their tasks to prevent the wayward from progressing further into the tower.`},
    3: {discovery: `Dante encountered these guardians in his trek through the evil tower, immediately put off by them talking so much about the most inane of subjects. They became his Arms after he bested them in combat and begged him to take them, the toll on their sanity shining through at finally finding someone worthy of their power. He agreed on the ground of them never speaking again.`},
    4: {construction: `Angi and Rudra both take on the form of wide-bladed scimitars. The weapons consist of a curved support to which a series of backward-pointed segments are fixed, each with its own rear-sloping cutting edge that form a vicious serrated design reminiscent of a spinal cord. They are colored for their respective elements - with the exception of the cutting edges of the bare metal blade segments and golden hilts. The shriveled heads of the twins are mounted in the ends of the pommels, and the guards are simple discs.`}, 
    5: {use: `The individual weapons, while their control over fire and wind are exceptional, are never used apart - for their cohesion in combat is what made them worthy of being a Temen-ni-gru guardian in the first place: The stormy wind feeds the flames and the wild flame generates winds for the storms to summon their namesake to destroy the enemy before them. This renders it more of a ‘pure’ elemental set than anything, but the natural destructive power this dynamic carries is more than enough to compensate.`},
    6: {curse: `Outside of Dante’s hands they allow new users to utilize their power without any ill effects - but if they deem them to be inadequate their old natures begin to shine through, and they slowly turn their intended hosts into the long-forgotten images of their previous forms. If they are not torn asunder by the subjugation of fire and wind first.`}
}

const alastor = {
    0: {name: `Alastor`},
    1: {title: `The Spirit of Lightning`},
    2: {origin: ``},
    3: {discovery: ``}, 
    4: {construction: ``}, 
    5: {use: ``},
    6: {curse: ``}
}

const sparda = {
    0: {name: `The Sword of Sparda`},
    1: {title: `The Demon-forged Edge`},
    2: {origin: ``},
    3: {discovery: ``},
    4: {construction: ``},  
    5: {use: ``},
    6: {curse: ``}
}

const gilgamesh = {
    0: {name: `Gilgamesh`},
    1: {title: `The Shock Steel`},
    2: {origin: ``},
    3: {discovery: ``}, 
    4: {construction: ``}, 
    5: {use: ``},
    6: {curse: ``}
}

const lucifer = {
    0: {name: `Lucifer`},
    1: {title: `The Inexhaustible Blade`},
    2: {origin: ``},
    3: {discovery: ``}, 
    4: {construction: ``}, 
    5: {use: ``},
    6: {curse: ``}
}


// const weaponName = {
//     0: {name: ``},
//     1: {title: ``},
//     2: {origin: ``},
//     3: {discovery: ``}, 
//     4: {construction: ``}, 
//     5: {use: ``},
//     6: {curse: ``}
// }

// rebellion
// cerberus
// agni & rudra
// nevan
// beowulf
// alastor
// ifrit
// sparda the legendary devil sword
// gilgamesh
// pandora
// lucifer
// urshanabi
// nagaraja
// hydra
// vendetta
// merciless
// vergil & yamato

export { rebellion, agniRudra, alastor, sparda, gilgamesh, lucifer }