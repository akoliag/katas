# https://www.codewars.com/kata/average-array/train/ruby

def avg_array(arr)
arr.transpose.map { |item| item.inject(:+).to_f/arr.size}
end
