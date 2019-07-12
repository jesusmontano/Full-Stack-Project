# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Team.delete_all
Venue.delete_all
Event.delete_all
Ticket.delete_all

jesus = User.create!(username: 'jesus.montano', email: 'jesus@aa.io', password: 'example')
kevin = User.create!(username: 'kevin', email: 'kevin@aa.io', password: '123456')
demo = User.create!(username: 'demo', email: 'demo@user.com', password: 'password')
spencer = User.create!(username: 'spencer', email: 'spencer@user.com', password: 'password')
fatima = User.create!(username: 'fatima', email: 'fatima@user.com', password: '123456')

lakers = Team.create!(name: 'Los Angeles Lakers') #1
warriors = Team.create!(name: 'Golden State Warriors') #2
knicks = Team.create!(name: 'New York Knicks') #3
nets = Team.create!(name: 'Brooklyn Nets') #4
clippers = Team.create!(name: 'Los Angeles Clippers') #5
celtics = Team.create!(name: 'Boston Celtics') #6
heat = Team.create!(name: 'Miami Heat') #7
rockets = Team.create!(name: 'Houston Rockets') #8
bulls = Team.create!(name: 'Chicago Bulls') #9
sixers = Team.create!(name: 'Philadelphia 76ers') #10


staples = Venue.create!(name: 'Staples Center', city: 'Los Angeles', state: 'California') #1
oracle = Venue.create!(name: 'Oracle Arena', city: 'Oakland', state: 'California') #2
msg = Venue.create!(name: 'Madison Square Garden', city: 'New York City', state: 'New York') #3
barclays = Venue.create!(name: 'Barclays Center', city: 'Brooklyn', state: 'New York') #4
td = Venue.create!(name: 'TD Garden', city: 'Boston', state: 'Massachusetts') #5
aaarena = Venue.create!(name: 'AmericanAirlines Arena', city: 'Miami', state: 'Florida') #6
toyota = Venue.create!(name: 'Toyota Center', city: 'Houston', state: 'Texas') #7
united = Venue.create!(name: 'United Center', city: 'Chicago', state: 'Illinois') #8
wells = Venue.create!(name: 'Wells Fargo Center', city: 'Philadelphia', state: 'Pennsylvania') #9
chase = Venue.create!(name: 'Chase Center', city: 'San Francisco', state: 'California') #10

event1 = Event.create!(date: Date.new(2019, 12, 25), home_team_id: lakers.id, away_team_id: warriors.id, venue_id: staples.id, sport: 'Basketball') #LAKERS HOME GAMES
event2 = Event.create!(date: Date.new(2020, 1, 25), home_team_id: lakers.id, away_team_id: knicks.id, venue_id: staples.id, sport: 'Basketball')
event3 = Event.create!(date: Date.new(2020, 2, 25), home_team_id: lakers.id, away_team_id: nets.id, venue_id: staples.id, sport: 'Basketball')
event4 = Event.create!(date: Date.new(2020, 3, 25), home_team_id: lakers.id, away_team_id: clippers.id, venue_id: staples.id, sport: 'Basketball')
event5 = Event.create!(date: Date.new(2020, 4, 25), home_team_id: lakers.id, away_team_id: bulls.id, venue_id: staples.id, sport: 'Basketball')

event6 = Event.create!(date: Date.new(2019, 12, 26), home_team_id: warriors.id, away_team_id: lakers.id, venue_id: oracle.id, sport: 'Basketball') #WARRIOR HOME GAMES
event7 = Event.create!(date: Date.new(2020, 1, 26), home_team_id: warriors.id, away_team_id: nets.id, venue_id: oracle.id, sport: 'Basketball')
event8 = Event.create!(date: Date.new(2020, 2, 26), home_team_id: warriors.id, away_team_id: sixers.id, venue_id: oracle.id, sport: 'Basketball')
event9 = Event.create!(date: Date.new(2020, 3, 26), home_team_id: warriors.id, away_team_id: heat.id, venue_id: oracle.id, sport: 'Basketball')
event10 = Event.create!(date: Date.new(2020, 4, 26), home_team_id: warriors.id, away_team_id: celtics.id, venue_id: oracle.id, sport: 'Basketball')

event11 = Event.create!(date: Date.new(2019, 12, 29), home_team_id: knicks.id, away_team_id: nets.id, venue_id: msg.id, sport: 'Basketball') #KNICKS HOME GAMES
event12 = Event.create!(date: Date.new(2020, 1, 29), home_team_id: knicks.id, away_team_id: warriors.id, venue_id: msg.id, sport: 'Basketball')
event13 = Event.create!(date: Date.new(2020, 2, 29), home_team_id: knicks.id, away_team_id: lakers.id, venue_id: msg.id, sport: 'Basketball')
event14 = Event.create!(date: Date.new(2020, 3, 29), home_team_id: knicks.id, away_team_id: sixers.id, venue_id: msg.id, sport: 'Basketball')
event15 = Event.create!(date: Date.new(2020, 4, 29), home_team_id: knicks.id, away_team_id: nets.id, venue_id: msg.id, sport: 'Basketball')

event16 = Event.create!(date: Date.new(2019, 12, 19), home_team_id: nets.id, away_team_id: knicks.id, venue_id: barclays.id, sport: 'Basketball') #NETS HOME GAMES
event17 = Event.create!(date: Date.new(2020, 1, 19), home_team_id: nets.id, away_team_id: heat.id, venue_id: barclays.id, sport: 'Basketball')
event18 = Event.create!(date: Date.new(2020, 2, 19), home_team_id: nets.id, away_team_id: sixers.id, venue_id: barclays.id, sport: 'Basketball')
event19 = Event.create!(date: Date.new(2020, 3, 19), home_team_id: nets.id, away_team_id: rockets.id, venue_id: barclays.id, sport: 'Basketball')
event20 = Event.create!(date: Date.new(2020, 4, 19), home_team_id: nets.id, away_team_id: rockets.id, venue_id: barclays.id, sport: 'Basketball')

event21 = Event.create!(date: Date.new(2019, 12, 15), home_team_id: clippers.id, away_team_id: lakers.id, venue_id: staples.id, sport: 'Basketball') #CLIPPERS HOME GAMES
event22 = Event.create!(date: Date.new(2020, 1, 15), home_team_id: clippers.id, away_team_id: warriors.id, venue_id: staples.id, sport: 'Basketball')
event23 = Event.create!(date: Date.new(2020, 2, 15), home_team_id: clippers.id, away_team_id: rockets.id, venue_id: staples.id, sport: 'Basketball')
event24 = Event.create!(date: Date.new(2020, 3, 15), home_team_id: clippers.id, away_team_id: sixers.id, venue_id: staples.id, sport: 'Basketball')
event25 = Event.create!(date: Date.new(2020, 4, 15), home_team_id: clippers.id, away_team_id: lakers.id, venue_id: staples.id, sport: 'Basketball')

event26 = Event.create!(date: Date.new(2019, 12, 11), home_team_id: celtics.id, away_team_id: sixers.id, venue_id: td.id, sport: 'Basketball') #CELTICS HOME GAMES
event27 = Event.create!(date: Date.new(2020, 1, 11), home_team_id: celtics.id, away_team_id: lakers.id, venue_id: td.id, sport: 'Basketball')
event28 = Event.create!(date: Date.new(2020, 2, 11), home_team_id: celtics.id, away_team_id: heat.id, venue_id: td.id, sport: 'Basketball')
event29 = Event.create!(date: Date.new(2020, 3, 11), home_team_id: celtics.id, away_team_id: nets.id, venue_id: td.id, sport: 'Basketball')
event30 = Event.create!(date: Date.new(2020, 4, 11), home_team_id: celtics.id, away_team_id: clippers.id, venue_id: td.id, sport: 'Basketball')

event31 = Event.create!(date: Date.new(2019, 12, 22), home_team_id: heat.id, away_team_id: nets.id, venue_id: aaarena.id, sport: 'Basketball') #HEAT HOME GAMES
event32 = Event.create!(date: Date.new(2020, 1, 22), home_team_id: heat.id, away_team_id: sixers.id, venue_id: aaarena.id, sport: 'Basketball')
event33 = Event.create!(date: Date.new(2020, 2, 22), home_team_id: heat.id, away_team_id: knicks.id, venue_id: aaarena.id, sport: 'Basketball')
event34 = Event.create!(date: Date.new(2020, 3, 22), home_team_id: heat.id, away_team_id: celtics.id, venue_id: aaarena.id, sport: 'Basketball')
event35 = Event.create!(date: Date.new(2020, 4, 22), home_team_id: heat.id, away_team_id: celtics.id, venue_id: aaarena.id, sport: 'Basketball')

event36 = Event.create!(date: Date.new(2019, 12, 3), home_team_id: rockets.id, away_team_id: lakers.id, venue_id: toyota.id, sport: 'Basketball') #ROCKETS HOME GAMES
event37 = Event.create!(date: Date.new(2020, 1, 3), home_team_id: rockets.id, away_team_id: clippers.id, venue_id: toyota.id, sport: 'Basketball')
event38 = Event.create!(date: Date.new(2020, 2, 3), home_team_id: rockets.id, away_team_id: nets.id, venue_id: toyota.id, sport: 'Basketball')
event39 = Event.create!(date: Date.new(2020, 3, 3), home_team_id: rockets.id, away_team_id: celtics.id, venue_id: toyota.id, sport: 'Basketball')
event40 = Event.create!(date: Date.new(2020, 4, 3), home_team_id: rockets.id, away_team_id: heat.id, venue_id: toyota.id, sport: 'Basketball')

event41 = Event.create!(date: Date.new(2019, 12, 5), home_team_id: bulls.id, away_team_id: heat.id, venue_id: united.id, sport: 'Basketball') #BULLS HOME GAMES
event42 = Event.create!(date: Date.new(2020, 1, 5), home_team_id: bulls.id, away_team_id: nets.id, venue_id: united.id, sport: 'Basketball')
event43 = Event.create!(date: Date.new(2020, 2, 5), home_team_id: bulls.id, away_team_id: lakers.id, venue_id: united.id, sport: 'Basketball')
event44 = Event.create!(date: Date.new(2020, 3, 5), home_team_id: bulls.id, away_team_id: warriors.id, venue_id: united.id, sport: 'Basketball')
event45 = Event.create!(date: Date.new(2020, 4, 5), home_team_id: bulls.id, away_team_id: warriors.id, venue_id: united.id, sport: 'Basketball')

event46 = Event.create!(date: Date.new(2019, 12, 8), home_team_id: sixers.id, away_team_id: celtics.id, venue_id: wells.id, sport: 'Basketball') #76ERS HOME GAMES
event47 = Event.create!(date: Date.new(2020, 1, 8), home_team_id: sixers.id, away_team_id: warriors.id, venue_id: wells.id, sport: 'Basketball')
event48 = Event.create!(date: Date.new(2020, 2, 8), home_team_id: sixers.id, away_team_id: warriors.id, venue_id: wells.id, sport: 'Basketball')
event49 = Event.create!(date: Date.new(2020, 3, 8), home_team_id: sixers.id, away_team_id: nets.id, venue_id: wells.id, sport: 'Basketball')
event50 = Event.create!(date: Date.new(2020, 4, 8), home_team_id: sixers.id, away_team_id: heat.id, venue_id: wells.id, sport: 'Basketball')

Ticket.create!(owner_id: demo.id, venue_id: staples.id, event_id: event1.id, price: 54.99, row: 3, section: 6) #LAKER HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event1.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event1.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event1.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event1.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event2.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event2.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: demo.id, venue_id: staples.id, event_id: event2.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event2.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event2.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event3.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event3.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event3.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event3.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event3.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event4.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event4.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event4.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event4.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event4.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event5.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event5.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event5.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event5.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event5.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event6.id, price: 54.99, row: 3, section: 6) #WARRIOR HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event6.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event6.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event6.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event6.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event7.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event7.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event7.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event7.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event7.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event8.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event8.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event8.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event8.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event8.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event9.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event9.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event9.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event9.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event9.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event10.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event10.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event10.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event10.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: oracle.id, event_id: event10.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event11.id, price: 54.99, row: 3, section: 6) #KNICKS HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event11.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event11.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event11.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event11.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event12.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event12.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event12.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event12.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event12.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event13.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event13.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event13.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event13.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event13.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event14.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event14.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event14.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event14.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event14.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event15.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event15.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event15.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event15.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: msg.id, event_id: event15.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event16.id, price: 54.99, row: 3, section: 6) #NETS HOME GAME TICKETS
Ticket.create!(owner_id: demo.id, venue_id: barclays.id, event_id: event16.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event16.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event16.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event16.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event17.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event17.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event17.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event17.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event17.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event18.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event18.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event18.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event18.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event18.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event19.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event19.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event19.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event19.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event19.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event20.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event20.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event20.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event20.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: barclays.id, event_id: event20.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event21.id, price: 54.99, row: 3, section: 6) #CLIPPERS HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event21.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event21.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event21.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event21.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event22.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event22.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event22.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event22.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event22.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event23.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event23.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event23.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event23.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event23.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event24.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event24.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event24.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event24.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event24.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event25.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event25.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event25.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event25.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: staples.id, event_id: event25.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event26.id, price: 54.99, row: 3, section: 6) #CELTICS HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event26.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event26.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event26.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event26.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event27.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event27.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event27.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event27.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event27.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event28.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event28.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event28.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event28.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event28.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event29.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event29.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event29.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event29.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event29.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event30.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event30.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event30.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event30.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: td.id, event_id: event30.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event31.id, price: 54.99, row: 3, section: 6) #HEAT HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event31.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event31.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event31.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event31.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event32.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event32.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event32.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event32.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event32.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event33.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event33.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event33.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event33.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event33.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event34.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event34.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event34.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event34.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event34.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event35.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event35.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event35.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event35.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: aaarena.id, event_id: event35.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event36.id, price: 54.99, row: 3, section: 6) #ROCKETS HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event36.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event36.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event36.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event36.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event37.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event37.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event37.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event37.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event37.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event38.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event38.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event38.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event38.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event38.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event39.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event39.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event39.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event39.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event39.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event40.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event40.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event40.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event40.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: toyota.id, event_id: event40.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event41.id, price: 54.99, row: 3, section: 6) #BULLS HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event41.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event41.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event41.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event41.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event42.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event42.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event42.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event42.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event42.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event43.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event43.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event43.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event43.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event43.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event44.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event44.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event44.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event44.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event44.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event45.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event45.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event45.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event45.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: united.id, event_id: event45.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event46.id, price: 54.99, row: 3, section: 6) #76ERS HOME GAME TICKETS
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event46.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event46.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event46.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event46.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event47.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event47.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event47.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event47.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event47.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event48.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event48.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event48.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event48.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event48.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event49.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event49.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event49.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event49.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event49.id, price: 26.99, row: 9, section: 5)

Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event50.id, price: 54.99, row: 3, section: 6)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event50.id, price: 23.49, row: 1, section: 23)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event50.id, price: 12.49, row: 2, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event50.id, price: 74.49, row: 8, section: 5)
Ticket.create!(owner_id: jesus.id, venue_id: wells.id, event_id: event50.id, price: 26.99, row: 9, section: 5)