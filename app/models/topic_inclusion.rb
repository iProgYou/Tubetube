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
class TopicInclusion < ApplicationRecord
    validates :topic_id, :video_id, presence: true
    validates_uniqueness_of :topic_id, scope: [:video_id]

    belongs_to :topic

    belongs_to :video

end
