import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isogramm-tester',
  templateUrl: './isogramm-tester.component.html',
  styleUrls: ['./isogramm-tester.component.css']
})
export class IsogrammTesterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Adds an event listener to the button
    document.querySelector('button').addEventListener('click', function ()  {
    const inputWord = document.querySelector('input').value;
    if (inputWord === '')   {
        document.getElementById('feedback').innerHTML = 'You have to enter something to check for first!';
    }   else    {
        document.getElementById('feedback').innerHTML =  'It is ' + (checkForIsogramm(inputWord) ? '' : 'not') + ' an isogramm!';
    }
    });
  }
}

 /***
 * Checks if there are two letters of the same type in the word that is handed in.
 * If yes, it returns false, if no, it returns true.
 * @returns Whether or not the word handed to it is an isogramm.
 */
function checkForIsogramm(word: string): boolean {

  // The amount of letters of the same type found in the word. Gets reset for every letter.
  let letterAmount = 0;

  for (let pointerWord = 0; pointerWord < word.length; pointerWord++)    {
      // Resets the counter
      letterAmount = 0;
      // Cycles through every letter of the word that the user entered.
      for (let pointerComparison = 0; pointerComparison < word.length; pointerComparison++)   {
          if (word[pointerWord].toLowerCase() === word[pointerComparison].toLowerCase())   {
              letterAmount++;
              // Check if there is more than one letter of this type.
              if (letterAmount >= 2)  {
                  // If yes, stop the loop and return false.
                  return false;
              }
          }
      }
  }
  // If the loop didn't find anything, return true.
  return true;
}
