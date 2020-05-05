# json.partial! '/api/videos/video',video: @video

json.extract! @video, :id, :title, :plays, :description, :creator_id
json.creator @video.creator.username
json.thumbnailUrl url_for(@video.thumbnail)
json.videoUrl url_for(@video.video_file)
# json.reccomended will make sense once I implement topics