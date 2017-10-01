def add(number,number2)
  return number + number2
end

def subtract(number,number2)
  return number - number2
end

def multiply(number,number2)
  return number * number2
end

def divide(number,number2)
  if number2 == 0
    puts "You cannot divide a number by 0."
  else
  return number / number2
  end
end

def is_valid_operation(operation)
  ['add', 'subtract', 'multiply', 'divide', 'exit'].include? operation
end

puts "Hello, welcome to the Online Calculator! What's your name?"
name = gets.chomp

loop do
  puts "#{name}, four operations may be performed by you:\n add,\n subtract,\n multiply,\n divide.\n
  Which one would you like to perform?"
  operation = gets.chomp

  if !is_valid_operation operation
    puts 'Invalid operation!'
    next
  end

  if operation == 'exit'
    exit
  end

  puts "Please, enter the numbers."
  first_number = gets.chomp.to_i
  second_number = gets.chomp.to_i

  case operation
    when "add"
      puts "Result: #{add first_number, second_number}"
    when "subtract"
      puts subtract first_number, second_number
    when "multiply"
      puts multiply first_number, second_number
    when "divide"
      puts divide first_number, second_number
  end

  puts "Do you wish to perform another operation? Please, enter yes or no."
  response = gets.chomp
  while response != "yes" && response != "no"
    puts "Wrong! Insert yes or no "
    response = gets.chomp
  end

  if response == "yes"
    next
  elsif response == "no"
    puts "Thank you for using the Online Calculator. Hope to see you soon #{name}!"
    break
  end
end
