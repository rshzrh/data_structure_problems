/*
 * @lc app=leetcode id=853 lang=javascript
 *
 * [853] Car Fleet
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

    let cars = []
    


    for(let i = 0; i < position.length; i++)
        cars.push([position[i], speed[i]])

    cars = cars.sort((a, b) => {
        const p1 = a[0]
        const p2 = b[0]
        if(p1 < p2)
            return -1
        if(p1 > p2)
            return 1
        return 0
    })
    const stack = [cars[cars.length - 1]]
    for(let i = cars.length - 2; i >= 0; i--){
        // console.log(stack)
        const car = cars[i]
        // console.log("car", car)
        const topCar = stack[stack.length - 1]

        const currentArrivalTime = calculateArrivalTime(target, car)
        
        const topArrivalTime = calculateArrivalTime(target, topCar)
        if(currentArrivalTime > topArrivalTime)
            stack.push(car)
        
    }
    return stack.length
    
};

function calculateArrivalTime(target, car){
    const carPosition = car[0]
    const carSpeed = car[1]

    const arrivalTime = (target - carPosition) / carSpeed
    return arrivalTime
}
// @lc code=end

target = 100
position = [0, 2, 4]
speed = [4, 2, 1]
console.log(carFleet(target, position, speed))