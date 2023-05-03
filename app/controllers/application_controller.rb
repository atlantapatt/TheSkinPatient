class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  
  def authorized
    # p 'uncomment authorization'
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
