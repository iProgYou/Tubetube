class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
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
        @video = Video.find(params[:id])
        @video.creator_id = current_user.id
        # debugger
        if @video.update(video_params)
            render :show
        else
            render json: video.errors.full_messages
        end
    end

    def destroy
        @video = Video.find(params[:id])
        if @video.delete()
        else
            render json: video.errors.full_messages
        end
    end

    private

    def video_params
        params.require(:video).permit(:title,:description,:thumbnail,:video_file)
    end
end
