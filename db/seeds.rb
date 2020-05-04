# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

User.destroy_all
Video.destroy_all

user1 = User.create({username: "Demo", email: "demo@demo.com", password: "123456"})
rex = User.create({username: "dinoman", email: "dino@man.com", password: "654321"})
chaz = User.create({username: "chaz", email: "chaz@zambony.com", password: "zambony"})
courtney = User.create({username: "court", email: "dork@town.com", password: "dorksss"})
felicia = User.create({username: "fleesh", email: "fleesh@uhh.com", password: "jammin"})

video1 = Video.create({
    creator_id: felicia.id,
    title: "Baby Laughing Hysterically at Ripping Paper",
    description: "Self Explanatory",
    plays: rand(1000)
})



video2 = Video.create({
    creator_id: felicia.id,
    title: "It took the creator 50 HOURS to beat this level",
    description: "It took me 50 hours to beat this level and now I am tired",
    plays: rand(1000)
})

video3 = Video.create({
    creator_id: felicia.id,
    title: "Rick Astley - Never Gonna Give You Up (Video)",
    description: "My favorite song",
    plays: rand(1000)
})

video4 = Video.create({
    creator_id: rex.id,
    title: "Overwatch - Reinhardt Sigma & Mei NERFS! - Sinatra Quits OWL",
    description: "Overwatch is the most fun fun fun",
    plays: rand(1000)
})

video5 = Video.create({
    creator_id: rex.id,
    title: "Joe Pass - 'Ain't Misbehavin'",
    description: "Such an incredible guitarist",
    plays: rand(1000)
})

video6 = Video.create({
    creator_id: rex.id,
    title: "Super Mario Bros. Warp Zones",
    description: "Holy moly I never even new until now",
    plays: rand(1000)
})

video7 = Video.create({
    creator_id: rex.id,
    title: "The 5 Music Theory Composition Books That Most Influenced Me",
    description: "Music theory is great, Here are some books that influenced me",
    plays: rand(1000)
})

video8 = Video.create({
    creator_id: rex.id,
    title: "EASY BAKED ZITI PASTA RECIPE SAM THE COOKING GUY 4K",
    description: "mmmmmmmm me love bake ziti",
    plays: rand(1000)
})

video9 = Video.create({
    creator_id: chaz.id,
    title: "Wes Montgomery - Round Midnight",
    description: "Holy Guac Wes kills it on this tune",
    plays: rand(1000)
})

video10 = Video.create({
    creator_id: chaz.id,
    title: "New York-style pizza at home, v2.0",
    description: "NEW YORK PIZZA HOME TOWN EAT FOOD GOOD",
    plays: rand(1000)
})

video11 = Video.create({
    creator_id: chaz.id,
    title: "Keyboard Cat REINCARNATED!",
    description: "he's BACK! The keyboard cat killin it on this Duke Ellington tune",
    plays: rand(1000)
})

video12 = Video.create({
    creator_id: chaz.id,
    title: "John Pizzarelli - 'I Got Rhythm' (solo) at the Fretboard Journal",
    description: "My name is pizzarelli but tbh I am just a guitarist and I play lost o jazz",
    plays: rand(1000)
})

video13 = Video.create({
    creator_id: courtney.id,
    title: "[WR] Super Mario Bros. Any% Speedrun in 4:55.646",
    description: "World record B) B) B) B) B)",
    plays: rand(1000)
})

video14 = Video.create({
    creator_id: courtney.id,
    title: "HEYYEYAAEYAAAEYAEYAA",
    description: "You already know what it is",
    plays: rand(1000)
})

video15 = Video.create({
    creator_id: courtney.id,
    title: "Charlie Schmidt's Keyboard Cat! - THE ORIGINAL!",
    description: "The cat is back and better than forever",
    plays: rand(1000)
})

video16 = Video.create({
    creator_id: courtney.id,
    title: "Dramatic Squirrel",
    description: "Buh Buh BUHHHHHHHHH",
    plays: rand(1000)
})

video17 = Video.create({
    creator_id: courtney.id,
    title: "Yardbird Suite - Mike Oria, solo guitar",
    description: "Best arrangement of this tune that I have ever seen on guitar",
    plays: rand(1000)
})

video18 = Video.create({
    creator_id: chaz.id,
    title: "TSM Bjergsen picks Rumble & duo TSM Doublelift",
    description: "Destroying solo q",
    plays: rand(1000)
})

video19 = Video.create({
    creator_id: felicia.id,
    title: "30 MOUTH-WATERING FOOD IDEAS THAT YOU'LL WANT TO TRY",
    description: "",
    plays: rand(1000)
})

video20 = Video.create({
    creator_id: felicia.id,
    title: "Charlie bit my finger! ORIGINAL",
    description: "Charlie likes to bite fingers",
    plays: rand(1000)
})

video21 = Video.create({
    creator_id: felicia.id,
    title: "25 UNUSUAL WAYS OF COOKING YOU NEED TO TRY",
    description: "So many different styles of cooking what will you discover next???",
    plays: rand(1000)
})

video22 = Video.create({
    creator_id: felicia.id,
    title: "'Chocolate Rain' Original Song by Tay Zonday",
    description: "The OG",
    plays: rand(1000)
})

thumb1 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/1.jpg')
vid1 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/1.mp4')
# # s3://tubetube-seed/videos/1.mp4
# # https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/1.mp4
thumb2 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/2.jpg')
vid2 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/2.mp4')

thumb3 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/3.jpg')
vid3 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/3.mp4')

thumb4 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/4.jpg')
vid4 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/4.mp4')

thumb5 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/5.jpg')
vid5 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/5.mp4')

thumb6 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/6.jpg')
vid6 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/6.mp4')

thumb7 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/7.jpg')
vid7 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/7.mp4')

thumb8 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/8.jpg')
vid8 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/8.mp4')

thumb9 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/9.jpg')
vid9 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/9.mp4')

thumb10 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/10.jpg')
vid10 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/10.mp4')

thumb11 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/11.jpg')
vid11 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/11.mp4')

thumb12 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/12.jpg')
vid12 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/12.mp4')

thumb13 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/13.jpg')
vid13 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/13.mp4')

thumb14 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/14.jpg')
vid14 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/14.mp4')

thumb15 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/15.jpg')
vid15 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/15.mp4')

thumb16 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/16.jpg')
vid16 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/16.mp4')

thumb17 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/17.jpg')
vid17 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/17.mp4')

thumb18 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/18.jpg')
vid18 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/18.mp4')

thumb19 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/19.jpg')
vid19 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/19.mp4')

thumb20 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/20.jpg')
vid20 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/20.mp4')

thumb21 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/21.jpg')
vid21 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/21.mp4')

thumb22 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/22.jpg')
vid22 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/videos/22.mp4')

video1.thumbnail.attach(io:thumb1, filename:'1.jpg')
video1.video_file.attach(io:vid1, filename:'1.mp4')

video2.thumbnail.attach(io:thumb2, filename:'2.jpg')
video2.video_file.attach(io:vid2, filename:'2.mp4')

video3.thumbnail.attach(io:thumb3, filename:'3.jpg')
video3.video_file.attach(io:vid3, filename:'3.mp4')

video4.thumbnail.attach(io:thumb4, filename:'4.jpg')
video4.video_file.attach(io:vid4, filename:'4.mp4')

video5.thumbnail.attach(io:thumb5, filename:'5.jpg')
video5.video_file.attach(io:vid5, filename:'5.mp4')

video6.thumbnail.attach(io:thumb6, filename:'6.jpg')
video6.video_file.attach(io:vid6, filename:'6.mp4')

video7.thumbnail.attach(io:thumb7, filename:'7.jpg')
video7.video_file.attach(io:vid7, filename:'7.mp4')

video8.thumbnail.attach(io:thumb8, filename:'8.jpg')
video8.video_file.attach(io:vid8, filename:'8.mp4')

video9.thumbnail.attach(io:thumb9, filename:'9.jpg')
video9.video_file.attach(io:vid9, filename:'9.mp4')

video10.thumbnail.attach(io:thumb10, filename:'10.jpg')
video10.video_file.attach(io:vid10, filename:'10.mp4')

video11.thumbnail.attach(io:thumb11, filename:'11.jpg')
video11.video_file.attach(io:vid11, filename:'11.mp4')

video12.thumbnail.attach(io:thumb12, filename:'12.jpg')
video12.video_file.attach(io:vid12, filename:'12.mp4')

video13.thumbnail.attach(io:thumb13, filename:'13.jpg')
video13.video_file.attach(io:vid13, filename:'13.mp4')

video14.thumbnail.attach(io:thumb14, filename:'14.jpg')
video14.video_file.attach(io:vid14, filename:'14.mp4')

video15.thumbnail.attach(io:thumb15, filename:'15.jpg')
video15.video_file.attach(io:vid15, filename:'15.mp4')

video16.thumbnail.attach(io:thumb16, filename:'16.jpg')
video16.video_file.attach(io:vid16, filename:'16.mp4')

video17.thumbnail.attach(io:thumb17, filename:'17.jpg')
video17.video_file.attach(io:vid17, filename:'17.mp4')

video18.thumbnail.attach(io:thumb18, filename:'18.jpg')
video18.video_file.attach(io:vid18, filename:'18.mp4')

video19.thumbnail.attach(io:thumb19, filename:'19.jpg')
video19.video_file.attach(io:vid19, filename:'19.mp4')

video20.thumbnail.attach(io:thumb20, filename:'20.jpg')
video20.video_file.attach(io:vid20, filename:'20.mp4')

video21.thumbnail.attach(io:thumb21, filename:'21.jpg')
video21.video_file.attach(io:vid21, filename:'21.mp4')

video22.thumbnail.attach(io:thumb22, filename:'22.jpg')
video22.video_file.attach(io:vid22, filename:'22.mp4')

#############################################



# thumb1 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/1.jpg')
# vid1 = open('') #baby lauhghin
# thumb2 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/2.jpg')
# vid2 = open('') # 50 hours opn leve1
# thumb3 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/3.jpg')
# vid3 = open('') #Rick astle1
# thumb4 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/4.jpg')
# vid4 = open('') # overwatc1
# thumb5 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/5.jpg')
# vid5 = open('') #Joe pas1
# thumb6 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/6.jpg')
# vid6 = open('') # Super warp zones
# thumb7 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/7.jpg')
# vid7 = open('') #5 mmusic theory
# thumb8 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/8.jpg')
# vid8 = open('') # Easy baked ziti
# thumb9 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/9.jpg')
# vid9 = open('') #Wes mont
# thumb10 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/10.jpg')
# vid10 = open('') # new york pizza
# thumb11 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/11.jpg')
# vid11 = open('') # Keyboard cat REincarnated
# thumb12 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/12.jpg')
# vid12 = open('') # John pizzarellu
# thumb13 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/13.jpg')
# vid13 = open('')# WR super mario
# thumb14 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/14.jpg')
# vid14 = open('')#HEYAYEAH
# thumb15 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/15.jpg')
# vid15 = open('')# Charliechmidts keyboard
# thumb16 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/16.jpg')
# vid16 = open('')#Dramatic squirel
# thumb17 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/17.jpg')
# vid17 = open('') # Yardbird suite
# thumb18 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/18.jpg')
# vid18 = open('') #TSM
# thumb19 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/19.jpg')
# vid19 = open('')# 30 mouth watering
# thumb20 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/20.jpg')
# vid20 = open('')# charlie bit my finger
# thumb21 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/21.jpg')
# vid21 = open('') # 25 unusual ways
# thumb22 = open('https://tubetube-seed.s3-us-west-1.amazonaws.com/thumbnails/22.jpg')
# vid22 = open('') # Chocolate rain

