class WishlistsController < ApplicationController
    
    def index
        wishlist = Wishlist.all
        render json: wishlist, status: :ok
    end
    
    def show
        user = User.find_by(id: params[:id])
        wishlist = Wishlist.where(user_id: user)
        if wishlist
            render json: wishlist, status: :ok
        end
    end
end
