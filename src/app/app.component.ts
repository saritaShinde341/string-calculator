import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'string-calculator';
  public inputString = '';
  public sum = 0;
  public delimiter = ',';
  public negativeNumbers: number[] = [];
  public response = '';
	getTitle(){
		return this.title;
	}
  onInputChange(event: any) {
    this.inputString = event.target.value;
  }
  add(){
    this.delimiter = ',';
    //Check if there is different delimiter
    if(this.inputString.startsWith('//')){
      const newDelIndex = this.inputString.indexOf('\\n');
      this.delimiter = this.inputString[2];
      this.inputString = this.inputString.substring(newDelIndex+2);
    }
    //create array of numbers from string
    const arr = this.inputString.replace(/\\n/g, this.delimiter).split(this.delimiter);
    
    this.sum = 0;
    this.negativeNumbers = [];

    //get sum and find negative numbers in array
    arr.map((item: string) =>{
      const num = parseInt(item);
      if(num > 0){
        this.sum += num;
      }else if(!isNaN(num)){
        this.negativeNumbers.push(num);
      }
    })

    //generate result
    if(this.negativeNumbers.length){
      this.response = "Negative numbers are not allowed: "+ this.negativeNumbers;
    } else{
      this.response = "The sum is " + this.sum;
    }
  }
}
