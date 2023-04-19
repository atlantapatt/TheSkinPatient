class Review < ApplicationRecord


    validates :rating, prescence: :true
end
