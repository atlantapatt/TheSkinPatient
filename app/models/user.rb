class User < ApplicationRecord

    has_secure_password
    validates :username, prescence: true, uniqueness: true
    validates :password, prescence: true 
end
