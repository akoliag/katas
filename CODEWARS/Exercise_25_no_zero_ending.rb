# https://www.codewars.com/kata/no-zeros-for-heros/train/ruby
def no_boring_zeros(num)
  no_zero = num.to_s
  no_zero.each_char do |last|
    last = "0"
    no_zero[-1] == last ? no_zero.chomp!(last) : no_zero
  end
  return no_zero.to_i
end
