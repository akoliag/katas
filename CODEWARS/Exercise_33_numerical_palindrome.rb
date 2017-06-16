# https://www.codewars.com/kata/numerical-palindrome-number-1/train/ruby

def palindrome(num)
  if num.to_i < 0 || num.is_a?(Fixnum) == false
      return "Not valid"
    elsif num.to_s == num.to_s.reverse
      return true
  end
  false
end

test = 123322

p palindrome(test)
