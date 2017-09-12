export const SET_NUMBER_OF_YEAR = 'SET_NUMBER_OF_YEAR';
export const SET_MONEY_AVAILABLE_NOW = 'SET_MONEY_AVAILABLE_NOW';
export const SET_MONEY_AVAILABLE_FORTNIGHTLY = 'SET_MONEY_AVAILABLE_FORTNIGHTLY';
export const SET_WEEKLY_RENT = 'SET_WEEKLY_RENT';
export const SET_SAVING_INTEREST_RATE = 'SET_SAVING_INTEREST_RATE';
export const SET_TAX_RATE = 'SET_TAX_RATE';

export function setNumberOfYear(numberOfYear) {
    return {
        type: SET_NUMBER_OF_YEAR,
        numberOfYear: numberOfYear
    };
}

export function setMoneyAvailableNow(amount) {
    return {
        type: SET_MONEY_AVAILABLE_NOW,
        amount: amount
    };
}

export function setMoneyAvailableFortnightly(amount) {
    return {
        type: SET_MONEY_AVAILABLE_FORTNIGHTLY,
        amount: amount
    };
}

export function setWeeklyRent(amount) {
    return {
        type: SET_WEEKLY_RENT,
        amount: amount
    };
}

export function setsavingInterestRate(rate) {
    return {
        type: SET_SAVING_INTEREST_RATE,
        rate: rate
    };
}

export function setTaxRate(rate) {
    return {
        type: SET_TAX_RATE,
        rate: rate
    };
}
