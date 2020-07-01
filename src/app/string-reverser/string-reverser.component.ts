import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-reverser',
  templateUrl: './string-reverser.component.html',
  styleUrls: ['./string-reverser.component.css']
})
export class StringReverserComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Add a key listener for the button
    document.querySelector('button').addEventListener('click', function ()  {
      // Get the word the user entered
      const inputWord = document.querySelector('input').value;
      // Reverse it
      const reversedString = reverseString(inputWord);
      // Display it
      document.getElementById('feedback').innerHTML = reversedString;
    });
  }
}

/***
 * Reverses the string handed to it
 * @returns The string handed to it but reversed.
 */
function reverseString(word: string): string {
  // The array that will contain the reversed string
  const reversedString = [];

  // Read the string and save it in reverse
  for (let wordPointer = 0; wordPointer < word.length; wordPointer++) {
      reversedString.push(word.split('')[word.length - wordPointer - 1]);
  }
  // Return the reversed string.

  return reversedString.join('');
}
