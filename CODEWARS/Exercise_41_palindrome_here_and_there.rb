# https://www.codewars.com/kata/palindromes-here-and-there/train/ruby

def convert_palindromes(numbers)
    result = []
    numbers.each do |item|
      if item.to_s == item.to_s.reverse!
        result << 1
      else
        result << 0
      end
    end
  return result
end
