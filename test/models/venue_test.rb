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

require 'test_helper'

class VenueTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
