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
    validates :title, :plays, presence: true

    validate :ensure_video_file
    validate :ensure_thumbnail

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: "User"

        
    has_one_attached :video_file
    has_one_attached :thumbnail

    def ensure_video_file
        unless self.video_file.attached?
            errors[:video_file] << "Must be attached"
        end
    end

    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:thumbnail] << "Must be attached"
        end
    end
    # before_validation :randomize_views

    # def randomize_views
    #     self.plays = rand(1000)
    #     # self.save
    # end

    def increment_plays
        self.plays += 1
        # video.save
    end

end
