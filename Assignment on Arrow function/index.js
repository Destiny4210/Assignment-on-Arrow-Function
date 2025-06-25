// FUNCTION ASSIGNMENT

const waec = (scores) => {
    const score1 = 'Excellent'
    const score2 = 'Very Good'
    const score3 = 'Good'
    const score4 = 'Average'
    const score5 = 'Fail'

    if (scores >= 90 && scores <= 89) {
        return score1
    } else if (scores >= 75 && scores <= 89) {
        return score2
    } else if (scores >= 65 && scores <= 74) {
        return score3
    } else if (scores >= 50 && scores <= 64) {
        return score4
    } else {
        return score5
    }
}
console.log(waec(80))

// AGE REQUIREMENTS

const age = (agee) => {
    const ab = 'Access Granted'
    const ba = 'Access Denied'

    if (agee >= 18) {
        return ab
    }

    if (agee < 18) {
        return ba
    }
}
console.log(age(15))