# https://www.codewars.com/kata/find-the-vowels/train/ruby

def vowel_indices(word)
	vowel_index = []
  word = word.split("")
  word.each_with_index do |letter, index|
    if letter =~ /[aeiouyAEIOUY]/
      vowel_index << index + 1
    end
  end
  return vowel_index
end
