class User < ActiveRecords::Base
    has_many :reviews
    has_many :books, through: :reviews
end    