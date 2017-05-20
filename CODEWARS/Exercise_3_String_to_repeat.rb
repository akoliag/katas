=begin
Write a function called repeatStr which repeats the given
string string exactly n times.
=end

def repeat_str (n, s)
  result = ""
  n.times {result += s}
  result
end
