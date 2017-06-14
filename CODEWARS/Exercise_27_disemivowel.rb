# https://www.codewars.com/kata/exclamation-marks-series-number-11-
# replace-all-vowel-to-exclamation-mark-in-the-sentence/train/ruby

def replace(s)
  s.gsub(/[aeiouAEIOU]/, "!")
end
