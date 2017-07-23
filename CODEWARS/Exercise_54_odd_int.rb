# https://www.codewars.com/kata/find-the-odd-int/train/ruby

def find_it(seq)
  base = {}
  seq.each do |item|
    if base.key?(item) == false
      base[item] = 1
    elsif
      base[item] += 1;
    end
  end
  return base.select { |k,v| v.odd? }.first[0]
end
