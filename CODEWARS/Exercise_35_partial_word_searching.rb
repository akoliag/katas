# https://www.codewars.com/kata/partial-word-searching/ruby

def findWord(query,array_of_strings)
    endarray = []
    what_to_look_for = query.downcase
    array_of_strings.each do |first|
      downcased = first.downcase
        if downcased.include?(what_to_look_for)
          endarray << first
        end
    end
  return endarray.any? ? endarray : ["Empty"]
end
