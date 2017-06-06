
# https://www.codewars.com/kata/most-digits

array = [12, 13, 500, "1234",  897, 999, 99992, 1000, 1001]




def find_longest(arr)
   longest = arr[0]
   longest_size = longest.to_s.size

   arr.each do |num|
    num_size = num.to_s.size
     if num_size > longest.to_s.size
       longest = num
       longest_size = num_size
     end
   end
   return longest
end

p find_longest(array)
