# https://www.codewars.com/kata/reverse-a-number/train/ruby
def reverse_number(n)
  n_reversed =[]
  n = n.to_s.split("")
    if n[0] == "-"
      n_reversed << n[0]
      n_reversed << n[1..-1].reverse
    else
      n_reversed << n.reverse
    end
  return n_reversed.flatten.join("").to_i
end
