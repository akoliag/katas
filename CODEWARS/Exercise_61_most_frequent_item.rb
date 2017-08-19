#https://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array/train/ruby
def most_frequent_item_count(collection)
  if collection.size == 0
    return 0
   end
  result = collection.group_by {|i| i}
  result.sort_by {|key, value| -value.size}.first[1].size
end
