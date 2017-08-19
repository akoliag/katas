# https://www.codewars.com/kata/kooka-counter/train/ruby
def kooka_counter(laughing)
    f = laughing.scan(/ha$|haHa/).length
    m = laughing.scan(/Ha$|Haha/).length
    return f + m
end
