console.log('js');carla
function median(arr) {
    console.log(arr)
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log(arr)
    var lowMiddle = Math.floor((arr.length - 1) / 2);
    var highMiddle = Math.ceil((arr.length - 1) / 2);
    return (arr[lowMiddle] + arr[highMiddle]) / 2;
  };
  var test = [4, 2, 100, 5, 6, 10]
  console.log(median(test))