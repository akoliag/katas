# https://www.codewars.com/kata/difference-between-two-collections/train/ruby

def diff(a, b)
    common = b & a
    difference = (a + b) - common
    return difference.sort.uniq
end
