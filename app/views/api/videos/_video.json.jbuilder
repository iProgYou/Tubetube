json.extract! video, :id, :title, :plays, :description
json.creator video.creator.username
json.thumbnailUrl url_for(video.thumbnail)
json.videoUrl url_for(video.video_file)