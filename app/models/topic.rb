# == Schema Information
#
# Table name: topics
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Topic < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :topic_inclusions,
        foreign_key: :topic_id,
        class_name: "TopicInclusion"

    has_many :videos,
        through: :topic_inclusions
end
