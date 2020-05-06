# == Schema Information
#
# Table name: topic_inclusions
#
#  id         :bigint           not null, primary key
#  topic_id   :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class TopicInclusionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
