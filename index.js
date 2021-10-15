
const newArray = [
    { year: 1966, result: "L" },
    { year: 1969, result: "W" },
    { year: 1970, result: "not available" },
]

function superbowlWin(newArray) {
    let theWin = newArray.find(object => object.result === "W")
    if (theWin === undefined) {
        return undefined
    } else {
        return theWin.year
    }

}
superbowlWin(newArray)

