import { Injectable } from '@angular/core';
import { InputStatementComponent } from './input-statement/input-statement.component';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GenerateTableService {

  

  constructor() {}

  private breakDownStatement = function(compound: String) {
    var sentences: Array<String>;
    var connector: any;
    if (compound.search(/\(/) === -1) {
      sentences = compound.split(/[v&]/);
      connector = compound.match(/[v&]/);
    }
    else {
      var allConnectorIndexes: Array<number> = this.findConnectorIndexes(compound);
      allConnectorIndexes.forEach(element => {
        if(this.checkIfOutsidePerens(compound, element) === true) {
          sentences = [this.trimPerens(compound.substring(0,element)),this.trimPerens(compound.substring(element+1, compound.length))];
          connector = compound.substr(element, 1);
        }
      });
    }

    return {
      sentences: sentences,
      connector: connector
    }
  }


  private findConnectorIndexes = function(compound: String): Array<number> {
    var allConnectors = [];
    var index = compound.indexOf("v");
    while ( index !== -1 ) {
      allConnectors.push(index);   
      index = compound.indexOf("v", index + 1);
    };
    index = compound.indexOf("&");
    while ( index !== -1 ) {
      allConnectors.push(index);   
      index = compound.indexOf("&", index + 1);
    };
  return allConnectors;
  }
  private checkIfOutsidePerens = function(compound: String, connectorIndex: number): Boolean {
    var compoundSubString = compound.substring(0, connectorIndex);
    var openPerens = [];
    var closePerens = [];
    if (compoundSubString.search(/\(/g) !== -1) {
        openPerens = compoundSubString.match(/\(/g);
    }    
    if (compoundSubString.search(/\)/g) !== -1) {
        closePerens = compoundSubString.match(/\)/g);
    }
    return openPerens.length == closePerens.length;
  }
  private trimPerens(sentence: String): String {
    if(sentence.search(/\(/) !== -1) {
      return sentence.substring(1, sentence.length - 1);
    }
    else {
      return sentence;
    }    
  }


  //Obselete
  public handleStatement(inputStatement: String) {
    var statement = this.breakDownStatement(inputStatement);
    console.log(statement);

  }

}
