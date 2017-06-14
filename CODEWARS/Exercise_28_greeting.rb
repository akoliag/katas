# https://www.codewars.com/kata/greetings-with-first-name-and-last-name/train/ruby

class Person
attr_accessor :first_name, :last_name

def initialize(first_name, last_name)
  @first_name = first_name
  @last_name = last_name
end

def greeting
  "Hello, #{self.first_name} #{self.last_name}!"
end
end
