# https://www.codewars.com/kata/vowel-count/train/ruby
def getCount(inputStr)
  vowel_size = ""
  inputStr.each_char do |char|
    if char =~ /[aeiou]/
      vowel_size << char
    end
  end
  return vowel_size.size
end
