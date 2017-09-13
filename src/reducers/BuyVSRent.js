import { SET_NUMBER_OF_YEAR, 
	     SET_MONEY_AVAILABLE_NOW, 
	     SET_MONEY_AVAILABLE_FUTURE, 
	     SET_TAX_RATE,
	     SET_SAVING_INTEREST_RATE,
	     SET_WEEKLY_RENT,
	     SET_HOUSE_PRICE,
	     SET_MORTGAGE_RATE} from '../Actions';

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

function getFutureBalanceSavings(state) {
	let moneyAvailableNow = state.moneyAvailableNow || 0,
	    moneyAvailableFuture = state.moneyAvailableFuture || 0,
	    taxRate = state.taxRate || 0,
	    weeklyRent = state.weeklyRent || 0;

	return futureValue(state.savingInterestRate/100*(1-taxRate/100)/12, 12*state.numberOfYear, 
		               -1*(moneyAvailableFuture - weeklyRent), 
		               -1*moneyAvailableNow, 
		               0);
}

function getMortgageMoneyLeftToPay(state) {
	// TODO
	return state.housePrice - 10000*state.numberOfYear;
}

export default function buyVSRent(state = [], action = {}) {
	let newState;
    switch (action.type) {
    	case SET_NUMBER_OF_YEAR:
    		newState = Object.assign({}, state, {
		    	numberOfYear: action.numberOfYear
		    });
		    newState.futureBalanceSavings = getFutureBalanceSavings(newState);
		    newState.mortgageMoneyLeftToPay = getMortgageMoneyLeftToPay(state);
		    return newState;
		case SET_MONEY_AVAILABLE_NOW:
		    newState = Object.assign({}, state, {
		    	moneyAvailableNow: action.moneyAvailableNow
		    });
		    newState.futureBalanceSavings = getFutureBalanceSavings(newState);
		    newState.mortgageMoneyLeftToPay = getMortgageMoneyLeftToPay(state);
    		return newState;
		case SET_MONEY_AVAILABLE_FUTURE:
		    newState = Object.assign({}, state, {
		    	moneyAvailableFuture: action.moneyAvailableFuture
		    });
		    newState.futureBalanceSavings = getFutureBalanceSavings(newState);
		    newState.mortgageMoneyLeftToPay = getMortgageMoneyLeftToPay(state);
		    return newState;
		case SET_TAX_RATE:
		    newState = Object.assign({}, state, {
		    	taxRate: action.taxRate
		    });
		    newState.futureBalanceSavings = getFutureBalanceSavings(newState);
		    return newState;
		 case SET_SAVING_INTEREST_RATE:
		    newState = Object.assign({}, state, {
		    	savingInterestRate: action.savingInterestRate
		    });
		    newState.futureBalanceSavings = getFutureBalanceSavings(newState);
		    return newState;
		 case SET_WEEKLY_RENT:
		    newState = Object.assign({}, state, {
		    	weeklyRent: action.weeklyRent
		    });
		    newState.futureBalanceSavings = getFutureBalanceSavings(newState);
		    return newState;
        
        case SET_HOUSE_PRICE:
		    newState = Object.assign({}, state, {
		    	housePrice: action.housePrice
		    });
		    newState.mortgageMoneyLeftToPay = getMortgageMoneyLeftToPay(state);
		    return newState;
		case SET_MORTGAGE_RATE:
		    newState = Object.assign({}, state, {
		    	mortgageRate: action.mortgageRate
		    });
		    newState.mortgageMoneyLeftToPay = getMortgageMoneyLeftToPay(state);
		    return newState;

    	default:
            return {
            	numberOfYear: 10,
            	futureBalanceSavings: 0.00,
            	savingInterestRate: 2.5,
            	taxRate: 33
            };
    }
}