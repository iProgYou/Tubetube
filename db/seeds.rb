# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all

user1 = User.create({username: "Demo", email: "demo@demo.com", password: "123456"})
rex = User.create({username: "dinoman", email: "dino@man.com", password: "654321"})
chaz = User.create({username: "chaz", email: "chaz@zambony.com", password: "zambony"})
courtney = User.create({username: "court", email: "dork@town.com", password: "dorksss"})
felicia = User.create({username: "fleesh", email: "fleesh@uhh.com", password: "jammin"})

Video.create({
    creator_id: felicia.id,
    title: "Baby Laughing Hysterically at Ripping Paper",
    description: "Self Explanatory"
})

Video.create({
    creator_id: felicia.id,
    title: "It took the creator 50 HOURS to beat this level",
    description: "It took me 50 hours to beat this level and now I am tired"
})

Video.create({
    creator_id: felicia.id,
    title: "Rick Astley - Never Gonna Give You Up (Video)",
    description: "My favorite song"
})

Video.create({
    creator_id: rex.id,
    title: "Overwatch - Reinhardt Sigma & Mei NERFS! - Sinatra Quits OWL",
    description: "Overwatch is the most fun fun fun"
})

Video.create({
    creator_id: rex.id,
    title: "Joe Pass - 'Ain't Misbehavin'",
    description: "Such an incredible guitarist"
})

Video.create({
    creator_id: rex.id,
    title: "Super Mario Bros. Warp Zones",
    description: "Holy moly I never even new until now"
})

Video.create({
    creator_id: rex.id,
    title: "The 5 Music Theory_Composition Books That Most Influenced Me",
    description: "Music theory is great, Here are some books that influenced me"
})

Video.create({
    creator_id: rex.id,
    title: "EASY BAKED ZITI PASTA RECIPE _ SAM THE COOKING GUY 4K",
    description: "mmmmmmmm me love bake ziti"
})

Video.create({
    creator_id: chaz.id,
    title: "Wes Montgomery - Round Midnight",
    description: "Holy Guac Wes kills it on this tune"
})

Video.create({
    creator_id: chaz.id,
    title: "New York-style pizza at home, v2.0",
    description: "NEW YORK PIZZA HOME TOWN EAT FOOD GOOD"
})

Video.create({
    creator_id: chaz.id,
    title: "Keyboard Cat REINCARNATED!",
    description: "he's BACK! The keyboard cat killin it on this Duke Ellington tune"
})

Video.create({
    creator_id: chaz.id,
    title: "John Pizzarelli - 'I Got Rhythm' (solo) at the Fretboard Journal",
    description: "My name is pizzarelli but tbh I am just a guitarist and I play lost o jazz"
})

Video.create({
    creator_id: courtney.id,
    title: "[WR] Super Mario Bros. Any% Speedrun in 4_55.646",
    description: "World record B) B) B) B) B)"
})

Video.create({
    creator_id: courtney.id,
    title: "HEYYEYAAEYAAAEYAEYAA",
    description: "You already know what it is"
})

Video.create({
    creator_id: courtney.id,
    title: "Charlie Schmidt's Keyboard Cat! - THE ORIGINAL!",
    description: "The cat is back and better than forever"
})

Video.create({
    creator_id: courtney.id,
    title: "Dramatic Squirrel",
    description: "Buh Buh BUHHHHHHHHH"
})

Video.create({
    creator_id: courtney.id,
    title: "Yardbird Suite - Mike Oria, solo guitar",
    description: "Best arrangement of this tune that I have ever seen on guitar"
})

Video.create({
    creator_id: chaz.id,
    title: "TSM Bjergsen picks Rumble & duo TSM Doublelift",
    description: "Destroying solo q"
})

Video.create({
    creator_id: felicia.id,
    title: "30 MOUTH-WATERING FOOD IDEAS THAT YOU'LL WANT TO TRY",
    description: ""
})

Video.create({
    creator_id: felicia.id,
    title: "Charlie bit my finger! ORIGINAL",
    description: "Charlie likes to bite fingers"
})

Video.create({
    creator_id: felicia.id,
    title: "25 UNUSUAL WAYS OF COOKING YOU NEED TO TRY",
    description: "So many different styles of cooking what will you discover next???"
})

Video.create({
    creator_id: felicia.id,
    title: "'Chocolate Rain' Original Song by Tay Zonday",
    description: "The OG"
})


