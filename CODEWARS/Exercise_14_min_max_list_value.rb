# https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list/train/ruby
# OPTION 1:
def min(list)
  list.sort![0]
end

def max(list)
  list.sort![-1]
end

# OPTION 2:
def min_1(list)
  min = list[0]
  list.each do |num|
    num < min ? min = num : next
    end
    return min
end

def max_1(list)
  max = list[0]
  list.each do |num|
    num > max ? max = num : next
  end
  return max
end

# OPTION 3:
def min_2(list)
  list.min
end

def max_2(list)
  list.max
end
