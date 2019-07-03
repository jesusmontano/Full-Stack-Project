# == Schema Information
#
# Table name: venues
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  city       :string           not null
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Venue < ApplicationRecord
    has_many :events,
        foreign_key: :venue_id
        class_name: :Event
end
