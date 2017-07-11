# https://www.codewars.com/kata/isograms/train/ruby

# Option 1:
def is_isogram1(string)
  word = string.downcase.chars
  word.uniq.size == word.size
end


# Option 2:
def is_isogram(string)
  array = []
  string = string.downcase.split("")
  string.each do  |item|
     if array.include?(item)
       return false
     else
       array << item
     end
  end
  array.size == string.size
end
