export const SET_NUMBER_OF_YEAR = 'SET_NUMBER_OF_YEAR';
export const SET_MONEY_AVAILABLE_NOW = 'SET_MONEY_AVAILABLE_NOW';
export const SET_MONEY_AVAILABLE_FUTURE = 'SET_MONEY_AVAILABLE_FUTURE';
export const SET_WEEKLY_RENT = 'SET_WEEKLY_RENT';
export const SET_SAVING_INTEREST_RATE = 'SET_SAVING_INTEREST_RATE';
export const SET_TAX_RATE = 'SET_TAX_RATE';

export function setNumberOfYear(numberOfYear) {
    return {
        type: SET_NUMBER_OF_YEAR,
        numberOfYear: numberOfYear
    };
}

export function setMoneyAvailableNow(moneyAvailableNow) {
    return {
        type: SET_MONEY_AVAILABLE_NOW,
        moneyAvailableNow: moneyAvailableNow
    };
}

export function setMoneyAvailableFuture(moneyAvailableFuture) {
    return {
        type: SET_MONEY_AVAILABLE_FUTURE,
        moneyAvailableFuture: moneyAvailableFuture
    };
}

export function setWeeklyRent(weeklyRent) {
    return {
        type: SET_WEEKLY_RENT,
        weeklyRent: weeklyRent
    };
}

export function setSavingInterestRate(savingInterestRate) {
    return {
        type: SET_SAVING_INTEREST_RATE,
        savingInterestRate: savingInterestRate
    };
}

export function setTaxRate(taxRate) {
    return {
        type: SET_TAX_RATE,
        taxRate: taxRate
    };
}
