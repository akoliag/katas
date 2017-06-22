# https://www.codewars.com/kata/inspiring-strings/train/ruby

# Option 1:

def longest_word(string_of_words)
  string_of_words.split.sort_by(&:size).last
end

# Option 2:

def longest_word_1(string_of_words)
    array = string_of_words.split(" ")
    array.sort_by! {|obj| obj.size}
    array[-1]
end
