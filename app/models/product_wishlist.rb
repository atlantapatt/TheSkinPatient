class ProductWishlist < ApplicationRecord
    belongs_to :product
    belongs_to :wislist
end
