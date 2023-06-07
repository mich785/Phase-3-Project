class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/' do
    books = Book.all
    books.to_json
  end

  get '/reviews' do
    reviews = Review.all
    reviews.to_json
  end
  
  post '/reviews' do
    review = Review.create(comment: params[:comment], user_id: params[:user_id], book_id: params[:book_id])
    review.to_json
  end

  get '/reviews/:id' do
    review = Review.find(params[:id])
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(comment: params[:comment])
    review.to_json
  end
  
  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

  get '/books/:id' do
    book = Book.find(params[:id])
    book.to_json
  end

  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(
      title: params[:title],
      author: params[:author],
      description: params[:description],
      genre: params[:genre],
      publisher: params[:publisher]
    )
    book.to_json
  end

  delete '/books/:id' do
    book = Book.find(params[:id])
    book.destroy
    book.to_json
  end

  get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end

  patch '/users/:id' do
    user = User.find(params[:id])
    user.update(
      username: params[:username],
      password: params[:password]
    )
    user.to_json
  end

  delete '/users/:id' do
    user = User.find(params[:id])
    user.destroy
    user.to_json
  end
end
