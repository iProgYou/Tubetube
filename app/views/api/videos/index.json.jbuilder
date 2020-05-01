# #ARRAY
# json.array! @videos do |video|
#     json.partial! '/api/videos/video', video: video 
# end

#NESTED OBJECT
@videos.each do |video|
    json.set! video.id do
        json.partial! '/api/videos/video', video: video
    end
end