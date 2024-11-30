const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const currentYear = new Date().getFullYear();
        const currentAge = (person.yearOfDeath || currentYear)-person.yearOfBirth;
        const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
        
        return currentAge > oldestAge ? person : oldestPerson;
    });
};

function calculateAge(person) {
    return person.yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
