class Api::CommentsController < ApplicationController

    def index
        # Here I want all of the comments of a given video
        @comments = Video.find(params[:video_id]).comments
        render :index
    end

    # def show

    # end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages
        end

    end

    def destroy

    end

    private
    def comment_params
        params.require(:comment).permit(:body,:video_id)
    end


end
