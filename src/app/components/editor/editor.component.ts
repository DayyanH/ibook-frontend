import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  content: string = '';
  Object = Object;
  wordData: any; // To hold the fetched word data
  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'header': 1 }, { 'header': 2 }],     // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean']                                         // remove formatting button
    ]
  }

  constructor(private http: HttpClient) {}

  // Handle word lookup on double-click
onWordDoubleClick(event: any) {
  const selection = event.editor.getSelection();
  console.log('selection  ', selection);
  console.log('content  ', this.content);

  if (selection && selection.length > 0) {
    const word = this.getSelectedWord(event.editor, selection);
    if (word) {
      console.log('Selected word: ', word);
      this.fetchWordData(word);
    }
  }
}

// Get the selected word based on the selection index and length
getSelectedWord(editor: any, selection: any): string {
  const { index } = selection;
  const text = editor.getText(); // Get plain text from the editor
  console.log('Plain text: ', text);

  // Find the word boundaries around the selection
  const leftBoundary = this.findLeftBoundary(text, index);
  const rightBoundary = this.findRightBoundary(text, index);

  return text.slice(leftBoundary, rightBoundary).trim();
}

findLeftBoundary(text: string, index: number): number {
  while (index > 0 && /\w/.test(text[index - 1])) {
    index--;
  }
  return index;
}

findRightBoundary(text: string, index: number): number {
  while (index < text.length && /\w/.test(text[index])) {
    index++;
  }
  return index;
}

getPartOfSpeechKeys(meaning: any): string[] {
  return Object.keys(meaning);
}


  // Fetch word data from the Word LookUp API
  fetchWordData(word: string) {
    console.log('word   ', word);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    this.http.get(apiUrl).subscribe(
      (data) => {
        this.wordData = data; // Store the fetched data
        debugger
      },
      (error) => {
        console.error('Error fetching word data', error);
      }
    );
  }
}
