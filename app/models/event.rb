# == Schema Information
#
# Table name: events
#
#  id           :bigint           not null, primary key
#  date         :date             not null
#  home_team_id :integer          not null
#  away_team_id :integer          not null
#  venue_id     :integer          not null
#  sport        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
    belongs_to :home_team,
        foreign_key: :home_team_id,
        class_name: :Team

    belongs_to :away_team,
        foreign_key: :away_team_id,
        class_name: :Team
    
    belongs_to :venue,
        foreign_key: :venue_id,
        class_name: :Venue

    has_many :tickets,
        foreign_key: :event_id,
        class_name: :Ticket
end
