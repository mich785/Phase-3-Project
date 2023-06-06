require 'net/http'
require 'json'

puts "Deleting old data..."
Book.destroy_all
User.destroy_all

# Reset auto-increment sequence for User table
ActiveRecord::Base.connection.execute("DELETE FROM sqlite_sequence WHERE name = 'users'")
# Reset auto-increment sequence for Product table
ActiveRecord::Base.connection.execute("DELETE FROM sqlite_sequence WHERE name = 'book'")

puts "Seeding ..."
url = URI.parse("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2j4LI82UJRjtAiP5Z4NQG0hQWp4BoaCv")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url.request_uri)

response = http.request(request)

if response.code == "200"
  data = JSON.parse(response.body)
  
  if data["status"] == "OK"
    books = data["results"]["books"]

    books.each do |book|
        # Create the book record
        new_book = Book.create(
          title: book["title"],
          author: book["author"],
          book_image: book["book_image"],
          amazon_product_url: book["amazon_product_url"]
        )
      
        # Create a review for each book
        new_book.reviews.create(
          comment: "This book is great!",
          user: User.create(
            name: Faker::Name.name,
            email: Faker::Internet.email
          )
        )
      end
    
  else
    puts "API request failed"
  end
else
  puts "Failed to connect to the API"
end
puts "Done seeding."