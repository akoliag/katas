# https://www.codewars.com/kata/palindrome-strings/ruby
def is_palindrome(str)
  str.to_s.downcase == str.to_s.downcase.reverse
end
