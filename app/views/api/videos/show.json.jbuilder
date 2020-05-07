# json.partial! '/api/videos/video',video: @video

json.extract! @video, :id, :title, :plays, :description, :creator_id, :created_at
json.creator @video.creator.username
json.thumbnailUrl url_for(@video.thumbnail)
json.videoUrl url_for(@video.video_file)
json.commentIds @video.comments.map { |comment| comment.id }

# json.commentIds do
#     json.array! @video.comments do |comment|
#         comment.id
#     end
# end
# json.reccomended will make sense once I implement topics