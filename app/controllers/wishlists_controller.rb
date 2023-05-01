class WishlistsController < ApplicationController
    
    def index
        wishlist = Wishlist.all
        render json: wishlist, status: :ok
    end
    
    def show
        user = User.find_by(id: params[:id])
        wishlist = Wishlist.find_by(user_id: user)
        if wishlist
            render json: wishlist, status: :ok
        end
    end

    def topThree
        user = User.find_by(id: params[:id])
        wishlist = Wishlist.find_by(user_id: user)
        if wishlist
            render json: wishlist, status: :ok
        end
    end


    def create
        wishlist = Wishlist.create(wishlist_params)
        render json: wishlist, status: :created
    end

    private

    def wishlist_params
        params.permit(:user_id)
    end

end
