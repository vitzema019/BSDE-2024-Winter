/**
 * Autor: Vít Zeman
 * Zadání: BSDE 2024 Winter Zadání domácí úkol / homework assignment 03
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
    /**
     * Validates the input data for the main function.
     * @param {object} dtoIn - The input data to validate.
     * @throws {Error} Throws an error if the input data is invalid.
     */
    function validateDtoIn(dtoIn) {
        if (!dtoIn || typeof dtoIn !== "object") {
            throw new Error("Input data must be an object.");
        }

        if (!Number.isInteger(dtoIn.count) || dtoIn.count <= 0) {
            throw new Error("'count' must be a positive integer.");
        }

        if (!dtoIn.age || typeof dtoIn.age !== "object") {
            throw new Error("'age' must be an object with 'min' and 'max' properties.");
        }

        const { min, max } = dtoIn.age;

        if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0 || min > max) {
            throw new Error("'min' and 'max' must be positive integers, and 'min' must be less than 'max'.");
        }
    }

    validateDtoIn(dtoIn);

    const dtoOut = [];
    const maleNames = [
        "Jan", "Petr", "Jiří", "Martin", "Tomáš",
        "Lukáš", "Marek", "Josef", "Jaroslav", "Václav",
        "Milan", "Radek", "Roman", "Karel", "David",
        "Michal", "Ondřej", "Filip", "Aleš", "Zdeněk",
        "Vojtěch", "Daniel", "Adam", "Štěpán", "Patrik"
    ];
    const femaleNames = [
        "Eva", "Marie", "Jana", "Petra", "Martina",
        "Lenka", "Alena", "Kateřina", "Veronika", "Hana",
        "Lucie", "Michaela", "Markéta", "Tereza", "Ivana",
        "Barbora", "Anna", "Kristýna", "Monika", "Dana",
        "Zuzana", "Andrea", "Šárka", "Helena", "Eliška"
    ];
    const maleSurnames = [
        "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
        "Procházka", "Kučera", "Veselý", "Horák", "Němec",
        "Pokorný", "Marek", "Pospíšil", "Hájek", "Jelínek",
        "Král", "Růžička", "Beneš", "Fiala", "Sedláček",
        "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák"
    ];
    const femaleSurnames = [
        "Urbanová", "Vaňková", "Blažková", "Kovářová", "Kratochvílová",
        "Jirásková", "Němcová", "Kuřeová", "Malá", "Vávrová",
        "Konečná", "Machová", "Krejčí", "Tomanová", "Poláková",
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
        const gender = getRadomArrayItem(genders);
        let name;
        let surname;
        // this code is needed only because we work with czech names and surnames.
        // ---------------------------
        switch(gender){
            case "male":
                name = getRadomArrayItem(maleNames);
                surname = getRadomArrayItem(maleSurnames);
                break;
            case "female":
                name = getRadomArrayItem(femaleNames);
                surname = getRadomArrayItem(femaleSurnames);
                break;
        }
        // ---------------------------
        dtoOut.push({
            gender: gender,
            birthdate: getRandomBirthDay(dtoIn.age.min, dtoIn.age.max),
            name: name,
            surname: surname,
            workload: getRadomArrayItem(workLoads)
        });
    }
    
    return dtoOut;
}

const dtoIn = {
    count: 50,
    age: {
      min: 18,
      max: 65
    }
  }

  const employees = main(dtoIn);

console.log(employees);