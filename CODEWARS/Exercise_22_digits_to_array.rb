# https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits

# n.to_s.split("").map!(&:to_i).reverse

def digitize(n)
  new_array = []
  digit_array =[]
  temp = n.to_s
  temp.each_char  {|char| new_array << char}
  new_array.each {|char| digit_array << char.to_i }
  digit_array.reverse
end
