class MyProductsController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        myProducts = MyProduct.find_by(user_id: user)
        products = Product.where(id: myProducts.product_id)
        render json: products, only: :product
    end

    def create
        my_products = MyProduct.create(my_products_params)
        render json: my_products, status: :created
    end


    private

    def my_products_params
        params.permit(:product_id, :user_id)
    end
    
end
