# https://www.codewars.com/kata/turn-any-word-into-a-beef-taco/train/ruby

def tacofy(word)
    word = word.downcase
    recipe = ["shell"]
    ingredients = {"a" => "beef",
                   "e" => "beef",
                   "i" => "beef",
                   "o" => "beef",
                   "u" => "beef",
                   "t" => "tomato",
                   "l" => "lettuce",
                   "c" => "cheese",
                   "g" => "guacamole",
                   "s" => "salsa"}
  word.each_char do |char|
      if ingredients.has_key?(char)
        recipe << ingredients[char]
      end
  end
  return recipe << "shell"
end
