/**
 * Autor: Vít Zeman
 * Zadání: BSDE 2024 Winter Zadání domácí úkol / homework assignment 01
 * Škola: Unicorn University
 */

// 1. Variables Definition - Binární číslo
// Původní binární číslo, které chceme převést na desítkové
/** @type {number} */
let binary = 10111011;

// 2. Variables Definition - Desítkové číslo
// Proměnná, která bude obsahovat výsledné desítkové číslo
/** @type {number} */
let decimal = 0;

// 3. Variables Definition - Exponent
// Exponent, který určuje aktuální mocninu dvou pro převod každé číslice
/** @type {number} */
let exponent = 0;

// 4. Iteration - Převod čísla
// Cyklus převádějící binární číslo na desítkové
// Cyklus se provádí, dokud je `binary` větší než nula

//console.group(`Mezivýpočty`);

while (binary > 0) {

    //console.log(`----------------------------------`);
    //console.log(`Binární číslo: ${binary}`);

    // 4.1 Variables Definition - Poslední číslice
    // Získání poslední číslice binárního čísla (0 nebo 1)
    /** @type {number} */
    let last = binary % 10; // Operace modulo (zbytek po dělení 10)

    //console.log(`Poslední číslo: ${last}`);
    

    // 4.2 Posun binárního čísla
    // Posuneme binární číslo o jednu číslici doleva, odstraněníme poslední číslici
    binary = Math.floor(binary / 10);


    // 4.3 Variables Definition - Výpočet hodnoty číslice
    // Výpočet hodnoty aktuální číslice v desítkové soustavě a uložení jako temp
    let temp = last * Math.pow(2, exponent);

    //console.log(`Výpočet: ${last} * ${Math.pow(2, exponent)} = ${temp}`);
    

    // 4.4 Přičtení hodnoty k výsledku
    // Přičteme `temp` k `decimal`, čímž aktualizujeme celkovou hodnotu desítkového čísla
    decimal += temp;

    // 4.5 Zvýšení exponentu
    // Přičtení hodnoty 1 k `exponent` (inkrementace), aby se v dalším kroku násobila vyšší mocninou 2
    exponent++;

    //console.log(`----------------------------------`);

}

//console.groupEnd();

// 5. Výpis výsledného desítkového čísla do konzole
// Do konzole vypíšeme výslednou hodnotu `decimal`
console.log(`Výsledek: ${decimal}`);
