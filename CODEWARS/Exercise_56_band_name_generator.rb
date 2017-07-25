# https://www.codewars.com/kata/band-name-generator/train/ruby
def band_name_generator(name)
  array = name.split("")
  if array[0] != array[-1]
   "#{"The " + name.capitalize}"
 elsif array[0] == array[-1]
   "#{name.capitalize + name[1..-1]}"
 end
end
