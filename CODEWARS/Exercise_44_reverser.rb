# https://www.codewars.com/kata/reverse-letters-in-sentence

#Option 1:

def reverser2(s)
  s == " " ? s : s.split.map { |word| word.reverse }.join(" ")
end

#Option 2:

def reverser(sentence)
  if sentence == " "
    return sentence
  else
    new_sentence = []
    array = sentence.split(" ")
    array.each do |elem|
      reversed = elem.reverse!
      new_sentence << reversed
    end
  end
    return new_sentence.join(" ")
end
