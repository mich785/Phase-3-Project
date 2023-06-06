class Review < ActiveRecords::Base
    belongs_to :user
    belongs_to :book
 end