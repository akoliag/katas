# https://www.codewars.com/kata/57b06f90e298a7b53d000a86

def queue_time(customers, n)
  queues = Array.new(n, 0)
  counter = 0
  loop do
    queues.each_with_index do |queue ,queue_index|
      new_queue_value = queue - 1 < 0 ? 0 : queue - 1
      queues[queue_index] = new_queue_value
      if queues[queue_index] == 0 && customers.any?
          queues[queue_index] = customers.shift
      end
    end
    counter += 1
    break if are_queues_empty?(queues)
  end
  return counter - 1
end

def are_queues_empty?(queues)
    queues.all? {|num| num == 0}
end
