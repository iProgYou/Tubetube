# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :text
#  plays       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: "User"

        
    has_one_attached :video

end
