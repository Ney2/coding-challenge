function gradingStudents(grades) {
    let finalgrade = [];
    for(let i=0; i<grades.length; i++) {
        if(((5 - (grades[i]%5) ) + grades[i]) < 38){
            finalgrade.push(grades[i]);
        } else {
            let num = (5 - (grades[i]%5) ) + grades[i];
            let round = num - grades[i];
            if(round < 3) {
                finalgrade.push(num);
            } else {
                finalgrade.push(grades[i]);
            }
        }
    }
   return finalgrade;
}