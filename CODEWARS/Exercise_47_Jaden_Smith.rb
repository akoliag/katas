# https://www.codewars.com/kata/jaden-casing-strings/train/ruby

  def toJadenCase(word)
    self.split(" ").map {|e| e.capitalize}.join(" ")
  end


word = "How can mirrors be real if our eyes aren't real"
p toJadenCase(word)
