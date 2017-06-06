def bubble_sort(list)
  #init variables
  sorted = false
  skips = 1 # set to 1 to avoid out of bound in array loop
  # loop until no swaps
    until sorted == true
      sorted = true
      # loop the list minus the n skips already done as end of array is sorted
      # already
      (0...list.length - skips).each do |i|
        if list[i] > list[i + 1]
          # swap values if out of order
          sorted = false
          temp = list[i]
          list[i] = list[i + 1]
          list[i + 1] = temp
        end
    end
    skips += 1
  end
  list
end


list_1 = [98, 102, 6, 15190, 2, -3, 99]

p bubble_sort(list_1)
