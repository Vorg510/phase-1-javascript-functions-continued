// code your solution

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(mondayActivity = "go to the office") {
  return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(adj='*'){
    return function (msg){
        return `You are ${adj}${msg}${adj}!`
    }
}

wrapAdjective('||')('a dedicated programmer')