Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do

    resources :profiles, only: [:index, :show, :update]
    resources :lists, only: [:show, :update]
    resources :posts, only: [:index, :show, :update]
    resources :comments, only: [:index, :update]
    
  end
end
