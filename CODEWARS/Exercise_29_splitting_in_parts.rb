# https://www.codewars.com/kata/split-in-parts/train/ruby
def split_in_parts (s, part_length = 3)
  splitted = s.scan(/. {1, #{part_length}}/)
  splitted.join(" ")
end
