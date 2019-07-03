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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
