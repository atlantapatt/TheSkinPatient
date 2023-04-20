class User < ApplicationRecord
    has_many :routines
    has_many :reviews
    has_one :wishlist
    has_many :my_products

    has_many :products, through: :my_products

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true 
end
