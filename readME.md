### Linear Search 

A linear search algorithm is a searching method that sequentially goes through each element in a data collection until it finds the desired element or reaches the end of the collection. This method is also known as sequential search. The linear search algorithm is straightforward: it starts with the first element of the collection and moves to the next one until the desired element is found.

The basic idea is to compare the searched element with each element in the array, one by one. If the element is found, the algorithm returns its position (usually the index in the case of an array). If the element is not present in the collection, the linear search traverses all elements and typically returns a value indicating that the element was not found (for example, -1).

Although linear search is simple, it may not be efficient for large data collections because it requires time proportional to the size of the collection. More efficient search algorithms, such as binary search for sorted arrays, are often preferred in contexts where performance is crucial.