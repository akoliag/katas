# https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

def first_non_consecutive(arr)
    arr.each_with_index do |i, index|
      if arr[index + 1] != i + 1
        return arr[index + 1]
      end
    end
end

tablica = [-1, 0, 1, 2, 4, 5, 6]

p first_non_consecutive(tablica)
