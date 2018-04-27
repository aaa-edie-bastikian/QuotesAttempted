export function getQuotesAttempted(quotes) {
    return{
        type: 'QUOTES_ATTEMPTED',
        payload: quotes
    }
}

export function getLastDateAttempted(date) {
    return{
        type: 'LAST_DATE_ATTEMPTED',
        payload: date
    }
}