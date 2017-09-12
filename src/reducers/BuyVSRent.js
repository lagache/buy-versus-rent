import { SET_NUMBER_OF_YEAR } from '../Actions';

function futureValue(rate, nper, pmt, pv, type) {
  var pow = Math.pow(1 + rate, nper),
     fv;
  if (rate) {
   fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
  } else {
   fv = -1 * (pv + pmt * nper);
  }
  return fv.toFixed(2);
}
console.log(futureValue(0.05*(1-33/100)/12, 12, 0, -1000, 0))

export default function buyVSRent(state = [], action = {}) {
    switch (action.type) {
    	case SET_NUMBER_OF_YEAR:
    		return {
    			numberOfYear: action.numberOfYear
    		}
    	default:
            return {
            	numberOfYear: 10
            };
    }
}