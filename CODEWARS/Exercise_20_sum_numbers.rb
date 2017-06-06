# https://www.codewars.com/kata/sum-arrays/train/ruby

def sum(numbers)
   if numbers.empty?
      0
   else
     numbers.inject(:+)
   end
 end
