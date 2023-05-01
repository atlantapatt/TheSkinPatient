Rails.application.routes.draw do
  
  resources :my_products
  resources :product_wishlists
  resources :wishlists
  resources :reviews
  resources :product_routines
  resources :products
  resources :routines
  resources :users

  # root 'users#index'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/recentWishlist', to: 'product_wishlists#topThree'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
