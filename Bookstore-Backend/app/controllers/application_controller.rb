class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/books'do 
  book = Book.all
  book.to_json
 end
  
  
end
