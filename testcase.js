function findAverage(array) {
    let average = 0;
    for (i = 0; i < array.length; i++) {
      
       if (array > 0) {
      const sum = (array.reduce((a, b) => a + b, 0 ))/(array.lenght)
      console.log(sum)
    }
    else
    return 0;
  }
    }
    console.log(findAverage[1, 4, 8, 34, 13])