=begin

In this kata you will create a function that takes a list of non-negative
integers and strings and returns a new list with the strings filtered out.

=end
def filter_list(l)
 l.select {|num| num.is_a?(Fixnum)}
end
