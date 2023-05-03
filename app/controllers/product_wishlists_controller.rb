class ProductWishlistsController < ApplicationController
    

    def show
        user = User.find_by(id: params[:id])
        wishlist = Wishlist.find_by(user_id: user)
        pwish = ProductWishlist.where(wishlist_id: wishlist)
        products = Product.where(id: pwish)
        if wishlist
            render json: products, include: :product
        end
    end


    def index
        pwish = ProductWishlist.all
        render json: pwish
    end

    

    def topThree
        user = User.find_by(id: params[:id])
        wishlist = Wishlist.find_by(user_id: user)
        pwish = ProductWishlist.where(wishlist_id: wishlist)
        products = Product.where(id: pwish).last(3)
        if wishlist
            render json: products, status: :ok
        end
    end


    def create
        pwish = ProductWishlist.create(prodwish_params)
        render json: pwish, status: :ok
    end

    def delete
        product = Product.find_by(id: params[:id])
        pwish = ProductWishlist.find_by(product_id: product)
        if pwish
            pwish.destroy
            head :no_content
        end
    end
    

    private

    def prodwish_params
        params.permit(:wishlist_id, :product_id)
    end
end
