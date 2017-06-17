# https://www.codewars.com/kata/mumbling

def accum(s)
  extended = ""
  i = 0
  while i < s.size
    part = s[i]*(i+1)
    extended << "#{part.capitalize}-"
    i+=1
  end
  return extended.chomp("-")
end
