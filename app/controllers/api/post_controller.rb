class Api::PostController < ApplicationController
  def index
  end

  def create
    post = current_user.post.new(post_params)
    if post.save
        render json: post
    else
        render json: post.errors, status 422
    end
  end


  def update
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :heart)
  end

end
