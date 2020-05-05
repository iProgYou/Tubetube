class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        # print(params)
        # debugger
        @video = Video.find(params[:id])
        # @video.increment_plays
        render :show
    end

    def create
        @video = Video.new(video_params)
        @video.creator_id = current_user.id

        if @video.save
            render :show
        else
            render json: video.errors.full_messages
        end

    end

    def update

    end

    def destroy

    end
    private
    def video_params
        params.require(:video).permit(:title,:description,:creator_id,:thumbnail,:video_file)
    end
end
