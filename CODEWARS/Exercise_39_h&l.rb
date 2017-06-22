# https://www.codewars.com/kata/highest-and-lowest


def high_and_low(numbers)
    array = numbers.split(" ").map(&:to_i).sort!
    return "#{array[-1]} #{array[0]}"
end
