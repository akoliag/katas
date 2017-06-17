# https://www.codewars.com/kata/vowel-count/train/ruby
def getCount(inputStr)
  vowels = ""
  inputStr.each_char do |char|
    if char =~ /[aeiou]/
      vowels << char
    end
  end
  return vowels.size
end
