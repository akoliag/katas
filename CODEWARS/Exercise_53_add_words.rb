# https://www.codewars.com/kata/adding-words-part-i/train/ruby

class Arith


  def initialize(base)
    @base = base
  end

  def add(word)
    collection =  {
             1=> "one",
             2=> "two",
             3=> "three",
             4=> "four",
             5=> "five",
             6=> "six",
             7=> "seven",
             8=> "eight",
             9=> "nine",
             10=> "ten",
             11=> "eleven",
             12=> "twelve",
             13=> "thirteen",
             14=> "fourteen",
             15=> "fifteen",
             16=> "sixteen",
             17=> "seventeen",
             18=> "eighteen",
             19=> "nineteen",
             20=> "twenty"
              }

         result = collection.key(word) + collection.key(@base)
         collection[result]
  end
end
