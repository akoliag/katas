# https://www.codewars.com/kata/5264d2b162488dc400000001

def spinWords(string)
  reversed = []
  string = string.split(" ")
  string.each do |item|
    if item.size < 5
      reversed << item
    elsif item.size >= 5
      reversed <<item.reverse
    end
  end
  return reversed.join(" ")
end
