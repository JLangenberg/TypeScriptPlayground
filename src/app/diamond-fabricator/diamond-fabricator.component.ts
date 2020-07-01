import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diamond-fabricator',
  templateUrl: './diamond-fabricator.component.html',
  styleUrls: ['./diamond-fabricator.component.css']
})
export class DiamondFabricatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Add an event listener to the button
    document.querySelector('button').addEventListener('click', function ()  {
      const inputSize = Number(document.querySelector('input').value);
      if (isNaN(Number(document.querySelector('input').value)))  {
        document.getElementById('feedback').innerHTML = 'Invalid input';
      } else  {
        if (inputSize >= 200) {
          document.getElementById('feedback').innerHTML = 'Please don\'t try to crash this! :)';
        } else  {
          // Generate a diamond and display it.
          document.getElementById('feedback').innerHTML = '<pre>' + generateDiamond(inputSize) + '</pre>';
        }
      }
    });
  }
}

/**
 * Generates and returns a string that resembles a diamond.
 * @param {The size of the diamond that should be generated.} diamondSize
 */
function generateDiamond(diamondSize: number): string  {
  // The string that contains the diamond
  let diamond;
  // Generate the single parts from top to bottom and merge them
  diamond = generateDTop(diamondSize);
  diamond = diamond + generateDCenter(diamondSize);
  diamond = diamond + generateDBottom(diamondSize);
  // Returns the diamond.
  return diamond;
}

/**
* Generates and returns a string that resembles the top part of a diamond.
* @param {The size of the diamond-top piece that should be generated} diamondSize
*/
function generateDTop(diamondSize: number): string  {
  // The top part of the diamond
  let diamondTop = '';
  // Generate the top tip
  diamondTop += generateSpaces(diamondSize);
  diamondTop += 'A';
  diamondTop += generateSpaces(diamondSize);
  diamondTop += '\n';
  // Generate the rest of the top
  for (let row = 1; row < diamondSize; row++)   {
      diamondTop += generateSpaces(diamondSize - row);
      diamondTop += '/';
      diamondTop += generateSpaces(row * 2 - 1 );
      diamondTop += '\\';
      diamondTop += generateSpaces(diamondSize - row);
      diamondTop += '\n';
  }
  return diamondTop;
}

/**
* Generates and returns a string that resembles the middle piece of a diamond
* @param {The size of the diamond-middle piece that should be generated} diamondSize
*/
function generateDCenter(diamondSize: number): string   {
  let diamondCenter = '';
  for (let centerPieces = -1; centerPieces < (diamondSize * 2); centerPieces++)    {
      diamondCenter += '-';
  }
  diamondCenter += '\n';
  return diamondCenter;
}

/**
* Generates and returns a string that resembles the bottom piece of a diamond
* @param {The size of the diamond bottom piece that should be created} diamondSize
*/
function generateDBottom(diamondSize: number): string   {
  let diamondBottom = '';
   // Generate the rest of the bottom
   for (let row = 0; row < diamondSize; row++)   {
      diamondBottom += generateSpaces(row);
      diamondBottom += '\\';
      diamondBottom += generateSpaces((diamondSize - row) * 2 - 1);
      diamondBottom += '/';
      diamondBottom += generateSpaces(row);
      diamondBottom += '\n';
  }
  // Generate the bottom tip
  diamondBottom += generateSpaces(diamondSize);
  diamondBottom += 'V';
  diamondBottom += generateSpaces(diamondSize);
  return diamondBottom;
}

/**
* Generates and returns a string with the amount of spaces handed to it.
* @param {Amount of spaces the string that will be returned should contain} amountOfSpaces
*/
function generateSpaces(amountOfSpaces: number): string {
  let spaces = '';
  for (let spacesGenerated = 0; spacesGenerated < amountOfSpaces; spacesGenerated++)  {
      spaces += ' ';
  }
  return spaces;
}
