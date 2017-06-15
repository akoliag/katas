# https://www.codewars.com/kata/is-there-a-vowel-in-there/train/ruby

def is_vow(s)
  string = ""
  s.each do |item|
    if item =~ /[aeiou]/
      string << item
    end
  end
  string.split("")
end
