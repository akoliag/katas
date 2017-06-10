# https://www.codewars.com/kata/grasshopper-summation/train/ruby

def summation(num)
  i = 0
  sum = 0
  until i == num
    sum += i
    i += 1
  end
  sum + num
end
