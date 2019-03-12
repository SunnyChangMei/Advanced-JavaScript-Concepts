// Memory efficient
function heavyDuty(idx) {
  const bigArray = new Array(7).fill('🔱');
  console.log('Created!');
  return bigArray[idx];
}
heavyDuty(6);//?
heavyDuty(6);//?
heavyDuty(6);//?
//! it invoked 3 times

const getHeavyDuty = heavyDuty2();
getHeavyDuty(6);//?
getHeavyDuty(4);//?
//! only log Create Again! ONE time with closure. 

function heavyDuty2() {
  const bigArray = new Array(7).fill('Star');
  console.log('Created Again!');
  return function(idx) {
    return bigArray[idx];
  };
}


