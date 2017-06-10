# https://www.codewars.com/kata/find-all-non-consecutive-numbers

def All_Non_Consecutive(array)
  all_non_consecutive = Hash.new
    array.each_with_index do |number, index|
      if array[index + 1] != number + 1 && array[index + 1] != nil
        all_non_consecutive[array[index+1]] = index +1
      end
    end
  return all_non_consecutive
end
