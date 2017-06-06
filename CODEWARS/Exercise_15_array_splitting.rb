# https://www.codewars.com/kata/enumerable-magic-number-30-split-that-array/train/ruby

def partition list, &block
  list.partition {|item| block.call(item)}
end
