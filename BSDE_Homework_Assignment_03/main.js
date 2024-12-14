/**
 * Autor: Vít Zeman
 * Zadání: BSDE 2024 Winter Zadání domácí úkol / homework assignment 02
 * Škola: Unicorn University
 */
/**
 * Main function that generates a list of employees based on input parameters.
 * @param {object} dtoIn - Input data for the function.
 * @param {number} dtoIn.count - Number of employees to generate.
 * @param {object} dtoIn.age - Age range for generated employees.
 * @param {number} dtoIn.age.min - Minimum age of employees.
 * @param {number} dtoIn.age.max - Maximum age of employees.
 * @returns {Array<object>} List of generated employees.
 * @throws {Error} Throws an error if input parameters are invalid.
 * @example
 * // Example input:
 * const dtoIn = {
 *   count: 5,
 *   age: {
 *     min: 21,
 *     max: 24
 *   }
 * };
 * const employees = main(dtoIn);
 * console.log(employees);
 * // Example output:
 * // [
 * //   {
 * //     gender: "male",
 * //     birthdate: "2002-08-15T00:00:00.000Z",
 * //     name: "Jan",
 * //     surname: "Novák",
 * //     workload: 40
 * //   },
 * //   ...
 * // ]
 */
export function main(dtoIn) {
    const dtoOut = [];
    const names = [
        "Jan", "Petr", "Jiří", "Martin", "Tomáš",
        "Lukáš", "Marek", "Josef", "Jaroslav", "Václav",
        "Milan", "Radek", "Roman", "Karel", "David",
        "Michal", "Ondřej", "Filip", "Aleš", "Zdeněk",
        "Eva", "Marie", "Jana", "Petra", "Martina",
        "Lenka", "Alena", "Kateřina", "Veronika", "Hana",
        "Lucie", "Michaela", "Markéta", "Tereza", "Ivana",
        "Barbora", "Anna", "Kristýna", "Monika", "Dana",
        "Zuzana", "Andrea", "Šárka", "Helena", "Eliška",
        "Blanka", "Dagmar", "Radka", "Karolína", "Simona"
    ];
    const surnames = [
        "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
        "Procházka", "Kučera", "Veselý", "Horák", "Němec",
        "Pokorný", "Marek", "Pospíšil", "Hájek", "Jelínek",
        "Král", "Růžička", "Beneš", "Fiala", "Sedláček",
        "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák",
        "Urban", "Vaněk", "Blažek", "Kovář", "Kratochvíl",
        "Jirásek", "Němcová", "Kuřeová", "Malá", "Vávrová",
        "Konečná", "Machová", "Krejčí", "Tomanová", "Polák",
        "Vrbová", "Beránková", "Hrdličková", "Valentová", "Šimková",
        "Holubová", "Bartošová", "Kováčová", "Zelenková", "Sedláčková"
    ];
    const genders = ["male", "female"];
    const workLoads = [10, 20, 30, 40];

    /**
     * Returns a random item from an array.
     * @param {Array} array - The array to pick a random item from.
     * @returns {*} A random item from the array.
     * @example
     * const genders = ["male", "female"];
     * const randomGender = getRadomArrayItem(genders);
     * console.log(randomGender); // Output: "male" or "female"
     */
    function getRadomArrayItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Generates a random birthdate within the specified age range.
     * @param {number} minAge - Minimum age.
     * @param {number} maxAge - Maximum age.
     * @returns {string} A random birthdate in ISO format.
     * @example
     * const birthdate = getRandomBirthDay(21, 24);
     * console.log(birthdate); // Output: "2002-08-15T00:00:00.000Z"
     */
    function getRandomBirthDay(minAge, maxAge) {
        const today = new Date();
    
        // Calculate the minimum and maximum date of birth
        const maxBirthDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
        const minBirthDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
    
        // Generate a random timestamp between minBirthDate and maxBirthDate
        const randomTimestamp = Math.random() * (maxBirthDate - minBirthDate) + minBirthDate.getTime();
        const birthdate = new Date(randomTimestamp);
    
        return birthdate.toISOString();
    }

    // Generate employees
    for (let i = 0; i < dtoIn.count; i++) {
        dtoOut.push({
            gender: getRadomArrayItem(genders),
            birthdate: getRandomBirthDay(dtoIn.age.min, dtoIn.age.max),
            name: getRadomArrayItem(names),
            surname: getRadomArrayItem(surnames),
            workload: getRadomArrayItem(workLoads)
        });
    }
    
    return dtoOut;
}

const dtoIn = {
    count: 50,
    age: {
      min: 19,
      max: 35
    }
  }

console.log(main(dtoIn));