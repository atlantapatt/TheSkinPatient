Rails.application.routes.draw do
  
  resources :my_products
  resources :product_wishlists
  resources :wishlists
  resources :reviews
  resources :product_routines
  resources :products
  resources :routines
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
