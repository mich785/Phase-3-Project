Book.create(name: "To Kill a Mockingbird", author: "Harper Lee")
Book.create(name: "1984", author: "George Orwell")
Book.create(name: "Pride and Prejudice", author: "Jane Austen")

Review.create(comment: "Great book! Highly recommend.", user_id: 1, book_id: 1)
Review.create(comment: "Thought-provoking and well-written.", user_id: 2, book_id: 2)
Review.create(comment: "Classic romance novel, a must-read.", user_id: 3, book_id: 3)

User.create(name: "John Smith", email: "john@example.com")
User.create(name: "Emma Johnson", email: "emma@example.com")
User.create(name: "Michael Brown", email: "michael@example.com")