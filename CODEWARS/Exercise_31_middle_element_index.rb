# https://www.codewars.com/kata/find-the-middle-element/train/ruby

def gimme(input_array)
  min = input_array.sort[0]
  max = input_array.sort[-1]
   input_array.each do |digit|
     if digit > min && digit < max
        return input_array.index(digit)
     end
   end
end
