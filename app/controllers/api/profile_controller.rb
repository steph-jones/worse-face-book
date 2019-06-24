class Api::ProfileController < ApplicationController
  # before_action :set_profile, only: [:show, :update]
  before_action :authenticate_user!    

  def index
      render json: Profile.all
    #   render json: User.random_friend(current_user.liked_friends)
  end

  def show
    render json: Profile.find(params[:id])
  end 

  def create
      profile = current_user.profile.new(profile_params)
      if profile.save
          render json: profile
      else
          render json: profile.errors, status: 422
      end
  end

  def update
      @profile = Profile.find(params[:id])
      if @profile.update(profile_params)
          render json: @profile
      else
          render json: @profile.errors, status: 422
      end

      # current_user.liked_friends << params[:id].to_i
      # current_user.save
  end

  def welcome
    @profile = current_user.profile.find(params[:id])
    if @profile.update(profile_params)
        render json: @profile
    else
        render json: @profile.errors, status: 422
    end

    # current_user.liked_friends << params[:id].to_i
    # current_user.save
end


  def my_profile
    # binding.pry
    # if params[:user_id].present?
      @profile = current_user.profile
    # else
    #   @profile = Profile.find(params[:id])
    # end
    render json: @profile
  end


  def my_friends
    # current_user.liked_profiles << params[:id].to_i
    # current_user.save
    render json: User.liked(current_user.liked_profiles)
  end

  def top_friends
      current_user.top_friends << params[:id].to_i
      current_user.save
      render json: User.top_friends(current_user.top_friends)
  end

  def destroy
    #   @profile_page.destroy
  end
  
  private

  # def set_profile
  #     @profile = current_user.profile_.find(params[:id])
  # end

  def profile_params
      params.require(:profile).permit(:bio, :name, :nickname, 
          :current_city, :image, :email, :relationship, :birthday, :hometown, :gender,
          :job_title, :fav_book, :fav_movie, :fav_quote, :spirit_animal, :alumni, :constellation)
  end
end
