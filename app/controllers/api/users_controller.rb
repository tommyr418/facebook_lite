class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/sessions/show.json.jbuilder'
    else
      user_errors = []
      @user.errors.full_messages.each do |error|
        user_errors << error
      end
      render json: user_errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id]).includes(:profiles)
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :birthdate,
                                 :sex, :password)
  end
end
