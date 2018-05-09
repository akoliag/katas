//runtime complexity describes the performance of an algorithm

//How much more processnig power/time is required to run your algorithm
//if we double the inputs?


/*
Constant time - 1 ---> no matter how many elements we're working with,
the algorithm/operation will always take the same amount of time


Logarithmic time - log(n) ---> We have this if doubling the number of elements
we're iterating over doesn't double the amount of work. Always assume that
searching operations are log(n)


Linear Time - n ---> iterating through all elements in a collection of data.
If we see a for loop spanning from 0 to array.length, we probably have n or
linear runtime


Quasilinear Time - n * log(n) ---> We have this if doubling the number of elements
we're iterating over doesn't double the amount of work. Always assume that
any sorting operation is n*log(n)


Quadratic Time - n^2 ---> Every element in a collection has to be compared to
every other element. The 'handshake problem'


Exponential Time - 2^n ---> If we add a *single* element to a collection,
the processing power required doubles

*/
