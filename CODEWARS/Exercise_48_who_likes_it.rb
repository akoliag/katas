#https://www.codewars.com/kata/who-likes-it/train/ruby

def likes(names)
  if names.size == 0
    "no one likes this"
  elsif names.size == 1
    "#{names[0]} likes this"
  elsif names.size == 2
    "#{names[0]} and #{names[1]} like this"
  elsif names.size == 3
    "#{names[0]}, #{names[1]} and #{names[2]} like this"
  elsif names.size > 3
    "#{names[0]}, #{names[1]} and #{names[2..-1].size} others like this"
  end
end
