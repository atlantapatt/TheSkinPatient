class ProductWishlistsController < ApplicationController
    
    def index
        user = User.find_by(id: session[:user_id])
        wishlist = Wishlist.find_by(user_id: user)
        pwish = ProductWishlist.where(wishlist_id: wishlist)
        products = Product.where(id: pwish)
        render json: products, include: :product
    end


    def create
        pwish = ProductWishlist.create(prodwish_params)
        render json: pwish, status: :ok
    end
    

    private

    def prodwish_params
        params.permit(:wishlist_id, :product_id)
    end
end
