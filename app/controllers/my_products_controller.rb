class MyProductsController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        myProducts = MyProduct.where(user_id: user)
        products = Product.where(id: myProducts)
        render json: products, only: :product
    end

    def index
        my_products = MyProduct.all
        render json: my_products
    end

    def create
        my_products = MyProduct.create(my_products_params)
        render json: my_products, status: :created
    end

    def delete
        product = Product.find_by(id: params[:id])
        my_product = MyProduct.find_by(product_id: product)
        if product
            my_product.destory
            head :no_content
        end

    end


    private

    def my_products_params
        params.permit(:product_id, :user_id)
    end
    
end
