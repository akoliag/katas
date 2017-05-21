=begin
https://www.codewars.com/kata/55908aad6620c066bc00002a
=end


def XO(str)
  x_letter = ""
  o_letter = ""
  str.each_char do |letter|
    if letter == "x" || letter == "X"
      x_letter << letter
    elsif letter == "o" || letter == "O"
      o_letter << letter
    end
  end
  x_letter.size == o_letter.size
end
