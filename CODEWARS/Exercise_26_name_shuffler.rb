# https://www.codewars.com/kata/name-shuffler/train/ruby

def name_shuffler(str)
  splitted_string = str.split(" ")
  first_name = splitted_string[0]
  last_name = splitted_string[1]
  return "#{last_name} #{first_name}"
end


def name_shuffler_1(str)
  first_name = ""
  last_name = ""
  first_name_last_letter_index = []
  to_be_swapped = str.split("")
  to_be_swapped.each_with_index do |letter, index|
    if letter == " "
      first_name_last_letter_index << letter[index-1].to_i # bez to_i zwraca nil
       return first_name_last_letter_index
    end
  end
end




person = "Anna McKaean"

p name_shuffler(person)
