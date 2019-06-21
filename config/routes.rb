Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do

    resources :profile, only: [:index, :show, :update]
    resources :list, only: [:show, :update]
    resources :post, only: [:index, :show, :update]
    resources :comment, only: [:index, :update]
    
    get "my_profile", to: "profile#my_profile"
    get "my_friends", to: "profile/my_friends"
  end
end
