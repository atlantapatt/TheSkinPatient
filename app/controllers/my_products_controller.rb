class MyProductsController < ApplicationController


    def create
        my_products = MyProducts.create(my_products_params)
        render json: my_products, status: :created
    end


    private

    def my_products_params
        params.permit(:product_id, :user_id)
    end
    
end
