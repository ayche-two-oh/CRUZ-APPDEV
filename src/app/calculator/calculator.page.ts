import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {

  blankText: string = "";
  operators: string = "";
  answresult: string = "";


  constructor() { }

  clickBtn(value: number) {
    const newNumber: string = value.toString();
    this.handleClick(newNumber)
  }

  handleClick(number: string) {
    this.blankText += number;
    this.answresult += number;
  }

  clearBtn() {
    this.blankText = "";
    this.operators = "";
    this.answresult = "";
  }
  
  operation(operator: string) {
    this.operators = operator;
    this.blankText += this.operators.toString();
    this.answresult += this.operators.toString();;
  }

  answerBtn() {
    let newResult: string;
    if (this.blankText && this.operators) {
      const parts = this.blankText.split(/([\+\-\*\/])/);
        if (parts) {
            let result = parseInt(parts[0]);
            console.log(result)
            for (let i = 1; i < parts.length; i += 2) {
                const operator = parts[i];
                console.log(operator)
                const operand = parseInt(parts[i + 1]);
                console.log(operand)
                switch (operator) {
                    case '+':
                        result += operand;
                        console.log(result)
                        break;
                    case '-':
                        result -= operand;
                        console.log(result)
                        break;
                    case '*':
                        result *= operand;
                        console.log(result)
                        break;
                    case '/':
                        if (operand !== 0) {
                            result /= operand;
                            console.log(result)
                        } else {
                            newResult = 'Error: Division by zero';
                            this.answresult = newResult;
                            console.log(this.answresult);
                            return;
                        }
                        break;
                    default:
                      break;
                }
            }
            newResult = result.toString();
            this.answresult = newResult;
        }
    }
  }
}