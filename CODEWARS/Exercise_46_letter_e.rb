# https://www.codewars.com/kata/without-the-letter-e/train/ruby
def find_e(s)
  if s.nil? || s.empty?
    return s
  end

  e = ""
  s.each_char do |char |
      if char == "e" || char == "E"
        e << char
      end
  end
  return e.size > 0 ? "#{e.size}" : "There is no \"e\"."
end
