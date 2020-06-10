# #ARRAY
# json.array! @videos do |video|
#     json.partial! '/api/videos/video', video: video 
# end

#NESTED OBJECT
@videos.each do |video|
    json.set! video.id do
        # json.partial! '/api/videos/video', video: video
        json.extract! video, :id, :title, :plays, :description, :created_at
        json.thumbnailUrl url_for(video.thumbnail)
        json.creator video.creator.username
    end
end