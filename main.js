let formEl = document.getElementById('first-form')
let formGoal = document.getElementById('goal-dropdown')
let formGoalLength = document.getElementById('length-dropdown')


formEl.onsubmit = async (e) => {
    e.preventDefault()

    let data = new FormData(e.target)
    let value = Object.fromEntries(data.entries())

    console.log(value)
}