# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :author_id, :video_id, :body, presence: true

    belongs_to :video

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"
        
end
