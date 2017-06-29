# https://www.codewars.com/kata/count-the-characters
def count_char(string, char)
  character = ""
  string.downcase.each_char do |letter|
    char.downcase!
    if letter == char
    character << char
    end
  end
  return character.size
end
