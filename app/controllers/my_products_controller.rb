class MyProductsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        myProducts = MyProduct.find_by(id: user)
        products = Product.where(id: myProducts)
        render json: products, include: :product
    end

    def create
        my_products = MyProducts.create(my_products_params)
        render json: my_products, status: :created
    end


    private

    def my_products_params
        params.permit(:product_id, :user_id)
    end
    
end
