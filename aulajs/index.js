const classA = [
    {
        name: "Mayk",
        grade: 6

    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    }
]

const classB = [
    {
        name: "Ze",
        grade: 4
    },
    {
        name: "Caio",
        grade: 10
    },
    {
        name: "Ciclano",
        grade: 1
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congratulations.`)
    } else {
        console.log(`${turma} average: ${average}. It is not good enough.`)
    }
}


function markAsFlunked(student) {
    student.flunked = false

    if (student.name < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked!`)
    }
}

sendFlunkedMessage(classA)

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

sendMessage(average1, "class A")
sendMessage(average2, "class B")

studentsFlunked(classA)
studentsFlunked(classB)