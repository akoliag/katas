# https://www.codewars.com/kata/sum-arrays/train/ruby

def sum(numbers)
    numbers.empty? ? 0 : numbers.inject(:+)
 end
