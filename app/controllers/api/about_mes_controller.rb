class Api::AboutMesController < ApplicationController
    before_action :set_aboutme, only: [:show, :update, :destroy]
    
    def index
        render json: current_user.about_mes
    end

    def show
        render json: @about_me
    end

    def create
        about_me = current_user.about_mes.new(aboutme_params)
        if about_me.save
            render json: about_me
        else
            render json: about_me.errors, status 422
        end
    end

    def update

        if @about_me.update(aboutme_params)
            render json: @about_me
        else
            render json: @about_me.errors, status: 422
        end
    end

    def destroy
        @about_me.destroy
    end
    
    private

    def set_aboutme
        @about_me = current_user.about_mes.find(params[:id])
    end

    def aboutme_params
        params.require(:about_me).permit(:bio, :name, :nickname, 
            :current_city, :image, :relationship, :birthday, :hometown,
            :job_title, :fav_book, :fav_movie, :fav_quote,)
    end
end
