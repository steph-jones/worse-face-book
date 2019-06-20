# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# # User.create(email: "test2@test.com", name: "test2")

# # puts("1 user created")

# # user = User.create! :name => 'John Doe', :email => 'john@gmail.com', :password => 'topsecret', :password_confirmation => 'topsecret'

@relationship = ['Single', 'Married', 'Its Complicated', 'In A Relationship']
@movies = ['Toy Story', 'Finding Nemo', 'Die Hard', 'Lord Of The Rings: The Return of the King', 
    'Casablanca', 'Blade Runner', 'Spirited Away', 'True Romance', 'The Shawshank Redemption',
    'Gone With the Wind', 'The Godfather', 'Matrix', 'The Dark Knight', 'Pulp Fiction', 'Goodfellas',
    'Forrest Gump', 'Rocky', 'Black Panther', 'A Star Is Born', 'Wonder Woman', 'Monsters, Inc.', 
    'The Incredibles', 'Princess Mononoke', 'Harry Potter and the Goblet of Fire', 'Interstellar', 'Blow']
@books = ['What I Talk About When I Talk About Running by Haruki murakami', 'The Fire Next Time by James Baldwin', 
    'Endurance by Scott Kelly', 'I Am, I Am, I Am by Maggie OFarrell', 'The Push by Tommy Caldwell', 
    'On Writing: A Memoir of the Craft by Stephen King', 'Born a Crime by Trevor Noah', 'Hillbilly Elegy by J.D. Vance',
    'When Breath becomes Air by Paul Kalanithi', '10% Happier by Dan Harris', 'The Argonauts by Maggie Nelson', 
    'Beyond the Mountain by Steve House', 'Sapiens by Yuval Noah Harari', 'Thinking, Fast and Slow by Daniel Kahneman',
    'The Soul of an Octopus by Sy Montgomery', 'Seven Brief Lessons on Physics by Carlo Rovelli', 'Oathbringer by Brandon Sanderson',
    'The Mistborn Trilogy by Brandon Sanderson', 'Scythe by Neal Shusterman', 'The Name of The Wind by Patrick Rothfuss', 'A Darker Shade of Magic by V.E. Schwab',
    'Twelve Moons by Mary Oliver', 'Practical Gods by Carl Dennis', 'Bluets by Maggie Nelson', 'Ayiti by Roxane Gay', 'The Largess of the Sea Maiden by Denis Johnson',
    'Einsteins Dreams by Alan Lightman', 'Tin Man by Sarah Winman', 'Home Fire by Kamila Shamsie', 'Medicine Walk by Richard Wagamese', 'The Myth of Sisyphus by Albert Camus'
    ]


# User.create(name: "Test",email: "test@test.com", password: 'password', password_confirmation: 'password')
# User.create(name: "Jane Doe",email: "janedoe@email.com", password: 'password', password_confirmation: 'password')
# User.create(name: "John Doe",email: "johndoe@email.com", password: 'password', password_confirmation: 'password')

# 30.times do |i|
#     User.create(
#         name: Faker::Name.name,
#         email: "test#{i+31}@test.com",
#         intro_bio: Faker::Quote.most_interesting_man_in_the_world,
#         hometown: Faker::Address.city,
#         current_city: Faker::Address.city,
#         birthday: Faker::Date.birthday(18, 65),
#         relationship: @relationship.sample,
#         fav_quote: "#{Faker::TvShows::Seinfeld.quote} - Seinfeld",
#         fav_book: @books.sample,
#         job_title: Faker::Job.title,
#         image: Faker::Avatar.image("name", '100x100', 'png', 'set2'),
#         fav_movie: @movies.sample,
#         spirit_animal: Faker::Creature::Animal.name,
#         gender: Faker::Gender.type,
#         constellation: Faker::Space.constellation,
#         superhero: "#{Faker::Superhero.suffix} #{Faker::Superhero.name} with the power of #{Faker::Superhero.power}",
#         alumni: Faker::University.name,
#         password: 'password', 
#         password_confirmation: 'password'
#     )
# end

# 50.times do |i|
#   User.create(
#         name: Faker::Name.name,
#         email: "test#{i+60}@test.com",
#         password: 'password', 
#         password_confirmation: 'password'
#   )
# end

# 50.times do |a|
#   Profile.update(a+60,
#     bio: Faker::Quote.most_interesting_man_in_the_world,
#     hometown: Faker::Address.city,
#     current_city: Faker::Address.city,
#     birthday: Faker::Date.birthday(18, 65),
#     relationship: @relationship.sample,
#     fav_quote: "#{Faker::TvShows::Seinfeld.quote} - Seinfeld",
#     fav_book: @books.sample,
#     job_title: Faker::Job.title,
#     image: Faker::Avatar.image("name", '100x100', 'png', 'set2'),
#     fav_movie: @movies.sample,
#     spirit_animal: Faker::Creature::Animal.name,
#     gender: Faker::Gender.type,
#     constellation: Faker::Space.constellation,
#     superhero: "#{Faker::Superhero.suffix} #{Faker::Superhero.name} with the power of #{Faker::Superhero.power}",
#     alumni: Faker::University.name,
#   )
# end

# puts("50 Users and Profiles Created/ Profiles Updated")
