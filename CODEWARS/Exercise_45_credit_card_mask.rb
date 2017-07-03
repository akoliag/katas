# https://www.codewars.com/kata/credit-card-mask/train/ruby

#Option 1:
def maskify1(cc)
cc.size <= 4 ? cc : '#'*(cc.length-4) + cc[-4..-1]
end

#Option 2:
def maskify(cc)
  masked = ""
  visible = cc.split("")[-4..-1]
  if cc.size <= 4
    return cc
  elsif cc.size > 4
    to_array = cc.split("")
    changed = to_array[0..-5]
      changed.each do |item|
        if item.empty? == false
          masked << '#'
        end
      end
  end
  return "#{masked}#{visible.join('')}"
end
