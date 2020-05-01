json.extract! video, :id, :title, :plays, :description
json.creator video.creator.username
# json.photoUrl url_for(post.photo)