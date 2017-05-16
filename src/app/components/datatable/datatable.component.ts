import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})

export class DatatableComponent implements OnInit {
  @Input() dataset: Array < Object > ;
  @Input() enableFilter: boolean;
  @Input() columns: Array < Object > ;
  @Output() selectedRowEmitter = new EventEmitter();

  columnObj: any; // Use for tracking datatable interactions
  filteredArray: Array < Object > ;
  query: String = '';
  selectedRow: Object = {};

  /**
   * ngOnInit - Initialized with component, setting up column configuration obj
   */
  ngOnInit() {

    // Setup column configuration obj
    this.columnObj = {
      lastColumn: null
    };

  }

  /**
   * getData - Returns the correct dataset to the array based on a query being input
   */
  getData() {

    if (this.query !== '') {
      return this.filteredArray;
    } else {
      return this.dataset;
    }

  }

  /**
   * getFilteredResults - Retrieves the filtered results based on provided query
   */
  getFilteredResults() {

    // Ensure filtered array is empty
    this.filteredArray = [];

    let query = this.query.toLowerCase();

    for (let applicant of this.dataset) {
      let stringify = JSON.stringify(applicant);
      let stringedData = stringify.toLowerCase();
      if (stringedData.indexOf(query) > 0) {
        this.filteredArray.push(applicant);
      }
    }

  }

  /**
   * selectRow - Selects a row, emitting its value to any listeners
   * @param { Object } row The row to set and emit
   */
  selectRow(row) {
    this.selectedRow = row;
    this.selectedRowEmitter.emit(row);
  }

  /**
   * sortByKey - Sorts a provided array by a provided key
   * @param { Array } arr The array to sort
   * @param { String } key The key to use when sorting provided array
   */
  sortByKey(arr, key) {
    // When sorting an array two values are compared,
    // the .sort() returns one of three different values
    // - less than 0 = sort a is lower than sort b
    // - 0 = sort a and sort b are considered equal
    // - Greater than 0 = sort b is lower than sort a
    return arr.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

  }

  /**
   * sortColumn - Sort a column ascendingly by default, if already sorted sort decendingly
   * @param { Object } column The column to be sorted, column.value is used when sorting
   */
  sortColumn(column) {

    // Set column tracking
    if (column.value === this.columnObj.lastColumn) {
      // Reverse array
      return this.filteredArray.reverse();
    } else {
      this.columnObj.lastColumn = column.value;
    }

    let data = this.getData();
    this.filteredArray = this.sortByKey(data, column.value);
  }

}
