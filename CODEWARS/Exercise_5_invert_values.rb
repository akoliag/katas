=begin
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
=end

def invert(list)
  list.map do |item|
    item > 0 ? -item : item.abs
  end
end
