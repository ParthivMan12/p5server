/* global shared, say */

const map_actions = [];
for (let i = 0; i < 128; i++) {
  map_actions[i] = [];
}

map_actions[4][6] = "I'm a computer!";
map_actions[4][9] = () => say(5, 9, "I'm an empty table!");
map_actions[21][42] = () => (shared.lightsOn = !shared.lightsOn);

// kitchen
map_actions[44][11] = "dare u to try me"; // vending machine 1
map_actions[45][11] = "broken since 2002"; // vending machine 2

// making center
map_actions[54][10] = "Cool stuff IP"; // laser cutter 1
map_actions[62][7] = "bzz"; //  laser cutter 2
map_actions[62][10] = "Crazy work incoming"; // 3d printer

// elevators
map_actions[7][20] = '"on my way"'; // elevator 1
map_actions[7][23] = "*Distant beep*"; // elevator 2
map_actions[7][26] = "nope"; // elevator 3
map_actions[7][32] = "lol just left"; // person waiting for 4th elevator

// entrance to main area
map_actions[14][32] = "*liberal arts*"; // middle chair in classroom
map_actions[24][36] = "*flipped board*"; // catan board
map_actions[20][35] = "pew pew"; // game console

// PET Lab
map_actions[26][29] = "Metagame!"; // Bookshelf

// open area
map_actions[33][27] = "voted #1 nap spot"; // couch
map_actions[38][28] = "sharing is caring"; // Materials Closet
map_actions[52][28] = "*eyes flicker*"; // samurai robot
map_actions[41][32] = "I dug up 1000 bells!"; // Nintendo switch in main area

// northwest halls
map_actions[37][16] = "dun dun dun"; // piano
map_actions[23][22] = "bubble tea <3"; // AV unit in glass walled classroom

// 1204 classrooms
map_actions[43][21] = ""; // AV computer in 1204A
map_actions[53][19] = "Arduino 101"; // writing on whitboard 1204B
map_actions[49][23] = "*LED blinks*";

// gameclub classroom
map_actions[72][21] = "Rattata appeared!"; // Switch 2 in classroom
map_actions[71][16] = "beep boop"; // game boy thing

// western classrooms
map_actions[74][31] = "*Permanent marker*"; // whiteboard drawing small room
map_actions[68][40] = "tangled wires"; // toolbox corner classroom
map_actions[52][37] = "sweet seirpinski triangle"; // drawing in old compform room

// main area entrance
map_actions[23][43] = "Pawn to D12"; // Chessboard

// northeast halls
map_actions[65][16] = "Games, Design and Play"; // Bookshelf
map_actions[53][16] = "Minecraft loading"; // Computer near making center

// potential npcs
map_actions[73][28] = "Welcome to game club!"; // Game club member  (wrong classroom but can change)
map_actions[55][13] = "D12 Making center rules!"; // Making center tech
map_actions[47][40] = "Need help?"; // DT Study Tutor
map_actions[72][5] = ""; // Justin
