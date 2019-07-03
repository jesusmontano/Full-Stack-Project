# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
    has_many :home_events,
        foreign_key: :home_team_id,
        class_name: :Event

    has_many :away_events
        foreign_key: :away_team_id,
        class_name: :Event
end
