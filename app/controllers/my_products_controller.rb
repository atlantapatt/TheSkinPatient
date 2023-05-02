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

    def delete
        product = Product.find_by(id: params[:id])
        my_product = MyProduct.find_by(product_id: product)
        if my_product
            my_product.destory
            head :no_content
        end

    end


    private

    def my_products_params
        params.permit(:product_id, :user_id)
    end
    
end
