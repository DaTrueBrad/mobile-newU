let formEl = document.getElementById('first-form')
let formGoal = document.getElementById('goal-dropdown')
let formGoalLength = document.getElementById('length-dropdown')


formEl.onsubmit = async (e) => {
    e.preventDefault()

    let data = new FormData(e.target)
    // let value = Object.fromEntries(data.entries())

    let { goal, goalLength, frequency, length, lowerBack, upperBack, shoulder, neck, elbow, wrist, hip, knee, ankle, foot, finger, other } = Object.fromEntries(data.entries())

    let bodyObj = {
        goal,
        goalLength,
        frequency,
        length,
        lowerBack,
        upperBack,
        shoulder,
        neck,
        elbow,
        wrist,
        hip,
        knee,
        ankle,
        foot,
        finger,
        other
    }
    console.log(bodyObj)
    // console.log(value)
}