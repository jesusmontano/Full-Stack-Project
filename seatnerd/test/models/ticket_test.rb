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

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
