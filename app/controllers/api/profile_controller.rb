class Api::ProfileController < ApplicationController
  before_action :set_profile, only: [:show, :update]
    
  def index
      render json: current_user.profile_pages
    #   render json: User.random_friend(current_user.liked_friends)
  end

  def show
      render json: @profile
  end 

  def create
      profile = current_user.profile.new(profile_params)
      if profile.save
          render json: profile
      else
          render json: profile.errors, status 422
      end
  end

  def update
      if @profile.update(profile_params)
          render json: @profile
      else
          render json: @profile.errors, status: 422
      end

      # current_user.liked_friends << params[:id].to_i
      # current_user.save
  end

  # def my_friends
  #     render json: User.liked(current_user.liked_friends)
  # end

  # def top_friends
  #     current_user.top_friends << params[:id].to_i
  #     current_user.save
  #     render json: User.top_friends(current_user.top_friends)
  # end

  # def destroy
  #     @profile_page.destroy
  # end
  
  private

  def set_profile
      @profile = current_user.profile_.find(params[:id])
  end

  def profile_params
      params.require(:profile).permit(:bio, :name, :nickname, 
          :current_city, :image, :email, :relationship, :birthday, :hometown,
          :job_title, :fav_book, :fav_movie, :fav_quote, :spirit_animal, :alumni, :constellation)
  end
end
