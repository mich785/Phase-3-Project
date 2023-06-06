class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get '/'do 
    book = Book.all
    book.to_json
   end

   get'/reviews'do
   review = Review.all
   review.to_json
  end
  
  post'/reviews'do
   review = Review.create(comment: params[:comment],user_id: params[:user_id],book_id:params[:book_id])
  end
    
  end