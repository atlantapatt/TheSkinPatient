class Product < ApplicationRecord
    has_many :product_routines
    has_many :reviews
    has_many :product_wishlists
    has_many :my_products
    has_many :routines, through: :product_routines

end
