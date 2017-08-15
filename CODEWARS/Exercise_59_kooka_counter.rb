# https://www.codewars.com/kata/kooka-counter/train/ruby
def kooka_counter(laughing)
    f = laughing.scan(/hahaha/).length
    m = laughing.scan(/HaHaHa/).length
    return f + m
end
