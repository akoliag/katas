# https://www.codewars.com/kata/get-the-middle-character/train/ruby

def get_middle(s)
  new_string = ""
  if s.size.even?
     divided = s.size/2
     new_string << s[divided-1]
     new_string << s[divided]
   else
     divided_odd = s.size/2
     new_string << s[divided_odd]
  end
 return new_string
end
