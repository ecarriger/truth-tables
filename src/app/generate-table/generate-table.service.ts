import { Injectable } from '@angular/core';
import { InputStatementComponent } from './input-statement/input-statement.component';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GenerateTableService {

  

  constructor() { }

  private statement = function(compound: String) {
    if (compound.search(/\(/) == 0) {
      var sentences = compound.split(/[v&]/);
      var connector = compound.match(/[v&]/);
    }
    else {
      var allConnectorIndexes: Array<number> = this.findConnectorIndexes(compound);
      allConnectorIndexes.forEach(element => {
        if(this.checkIfOutsidePerens(compound, element)) {
          var sentences = [compound.substring(0,element),compound.substring(element+1, compound.length)];
          var connector = compound.substr(element, 1);
        }
      });
    }

    return {
      sentences: sentences,
      connector: connector
    }
  }

  //Test Cases
  private statement1 = this.statement("(Av(B&C))v(BvC)");
  private statement2 = this.statement("(AvB)&(BvC)");

  private findConnectorIndexes = function(compound: String): Array<number> {
    var allConnectors = [];
      let i = compound.search(/[v&]/);
      while ( i !== -1 ) {
        allConnectors.push(i);
        i = compound.substring(i, compound.length).search(/[v&]/);
      };
    return allConnectors;
  }
  private checkIfOutsidePerens = function(compound: String, connectorIndex: number): Boolean {
    compound = compound.substring(0, connectorIndex);
    var openPerens = compound.match(/\(/g);
    var closePerens = compound.match(/\)/g);
    return openPerens.length == closePerens.length;
  }


  //Obselete
  public handleStatement(statement: String) {
     
    if (statement.search(/\(/) == 0) {
      console.log("Found (")
      var compound = statement.match(/\((!\()*\)/);
    } 
    else {
      if(statement.match(/[v&]/g).length == 1) {
        console.log(statement.match(/[v&]/));
      }
      else {
        console.log("Order of operations conflict. Please use perentheses.");
      }
    }
  
  

  }

}
