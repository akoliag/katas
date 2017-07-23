#http://www.codewars.com/kata/complementary-dna

#Option 1:
def DNA_strand(dna)
  dna.tr('ATCG','TAGC')
end

=begin
Use tr when you want to replace single characters. tr checks single characters
(not via a regular expression), so the characters don't need to occur
in the same order in the string. When a character is found, it is replaced
(translated) by a character (by the one with the same index) from the second
argument.

=end


# Option 2:
def DNA_strand(dna)
  complementary_dna = ""
  dna.each_char do |char|
    if char == "T"
      complementary_dna << "A"
    elsif char == "A"
      complementary_dna << "T"
    elsif char == "G"
      complementary_dna << "C"
    elsif char == "C"
      complementary_dna << "G"
    end
  end
  return complementary_dna
end
