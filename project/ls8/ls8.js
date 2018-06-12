const RAM = require('./ram');
const CPU = require('./cpu');

/**
 * Load an LS8 program into memory
 *
 * TODO: load this from a file on disk instead of having it hardcoded
 */
function loadMemory() {

    // Hardcoded program to print the number 8 on the console

    const program = [ // print8.ls8
        '10011001', // LDI R0, 8 store 8 into R0
        '00000000',
        '00001000',
        '10011001', // LDI R1,9 store 9 into R1
        '00000001',
        '00001001',
        '10101010', // MUL R0,R1 <--- multiply r0 and r1, set r0 equal to that number
        '00000000',
        '00000001',
        '01000011', //PRN R0 print r0
        '00000000',
        '00000001', // HLT

        // '10011001', // LDI R0,8  Store 8 into R0
        // '00000000',
        // '00001000',
        // '01000011', // PRN R0    Print the value in R0
        // '00000000',
        // '00000001', // HLT 
    ];

    // Load the program into the CPU's memory a byte at a time
    for (let i = 0; i < program.length; i++) {
        cpu.poke(i, parseInt(program[i], 2));
    }
}

/**
 * Main
 */

let ram = new RAM(256);
let cpu = new CPU(ram);

// TODO: get name of ls8 file to load from command line

loadMemory(cpu);

cpu.startClock();