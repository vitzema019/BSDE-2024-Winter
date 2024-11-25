/**
 * Autor: Vít Zeman
 * Zadání: BSDE 2024 Winter Zadání domácí úkol / homework assignment 02
 * Škola: Unicorn University
 */

/**
 * Převádí binární číslo na desítkové.
 *
 * @param {number} binary - Binární číslo, které má být převedeno.
 * @returns {number} Výsledek převodu na desítkové číslo.
 */
function binaryToDecimal(binary) {
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
  while (binary > 0) {
    // 4.1 Variables Definition - Poslední číslice
    // Získání poslední číslice binárního čísla (0 nebo 1)
    /** @type {number} */
    let last = binary % 10; // Operace modulo (zbytek po dělení 10)

    // 4.2 Posun binárního čísla
    // Posuneme binární číslo o jednu číslici doleva, odstraněníme poslední číslici
    binary = Math.floor(binary / 10);

    // 4.3 Variables Definition - Výpočet hodnoty číslice
    // Výpočet hodnoty aktuální číslice v desítkové soustavě a uložení jako temp
    let temp = last * Math.pow(2, exponent);

    // 4.4 Přičtení hodnoty k výsledku
    // Přičteme `temp` k `decimal`, čímž aktualizujeme celkovou hodnotu desítkového čísla
    decimal += temp;

    // 4.5 Zvýšení exponentu
    // Přičtení hodnoty 1 k `exponent` (inkrementace), aby se v dalším kroku násobila vyšší mocninou 2
    exponent++;
  }

  return decimal;
}

// 5. Výpis výsledného desítkového čísla do konzole
// Do konzole vypíšeme výslednou hodnotu `decimal`
const input = 10111011; //Vstupní hodnota pro testování
console.group(`Zobrazení v rámci NodeJS:`);
console.log(`Vstup: ${input}`);
console.log(`Výstup: ${binaryToDecimal(input)}`);
console.groupEnd();