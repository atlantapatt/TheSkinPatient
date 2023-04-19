class Routine < ApplicationRecord
    has_many :product_routines
    has_many :products, through: :product_routines

    validates :name, prescence: true
end
