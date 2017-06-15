# https://www.codewars.com/kata/split-in-parts/train/ruby

# Option 1 with regular expression:
def split_in_parts (s, part_length = 3)
  splitted = s.scan(/.{1,#{part_length}}/)
  splitted.join(" ")
end


# Option 2 with a loop:
def split_by_three(s, part_length = 3)
    splitted = []
    i = 0
      while i < s.size do
        splitted << s.slice(i, part_length)
        i = i + part_length
      end
      splitted.join(" ")
end
