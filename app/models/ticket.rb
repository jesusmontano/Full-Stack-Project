# == Schema Information
#
# Table name: tickets
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  venue_id   :integer          not null
#  event_id   :integer          not null
#  price      :float            not null
#  row        :integer          not null
#  section    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ticket < ApplicationRecord
    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    belongs_to :venue,
        foreign_key: :venue_id,
        class_name: :Venue

    belongs_to :event,
        foreign_key: :event_id,
        class_name: :Event
end
