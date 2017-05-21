# https://www.codewars.com/kata/525f50e3b73515a6db000b83

def createPhoneNumber(numbers)
  part1 = numbers[0..2].join("")
  part2 = numbers[3..5].join("")
  part3 = numbers[6..9].join("")
  return "(#{part1}) #{part2}-#{part3}"
end
