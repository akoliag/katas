# https://www.codewars.com/kata/compoundarray/train/ruby

def compound_array(a, b)
  if a.empty?
    return b
  elsif b.empty?
    return a
  else
    compund = []
    temp = a.size < b.size ? b.size : a.size
    i = 0
    while i < temp
      compund << a[i]
      compund << b[i]
      i += 1
    end
   end
   compund.compact
end
