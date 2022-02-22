import { Component, OnInit, ViewChild} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community/main';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})
export class AgGridComponent implements OnInit {


  public gridOptions: GridOptions;
  @ViewChild('agGrid') agGrid!: AgGridAngular;

  title = 'app';

  columnDefs: ColDef[] = [
    // {
    //   headerName: 'Number',
    //   field: 'id',
    //   sortable: true,
    //   filter: true,
    //   checkboxSelection: true,
    // },
    { headerName: 'Id', field: 'id', sortable: true, filter: true, checkboxSelection: true,},
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Color', field: 'color', sortable: true, filter: true },
    { headerName: 'Year', field: 'year', sortable: true, filter: true },
    { headerName: 'Pantone_value', field: 'pantone_value', sortable: true, filter: true },
  ];

  rowData: any[];
  fullObject: any;

  constructor(private http: HttpClient) {



    this.gridOptions = <GridOptions>{};
  }

  ngOnInit(): void {
    this.http.get<any>(
      'https://reqres.in/api/products/'
    ).subscribe(data => {
      // this.fullObject = data;
      // console.log(this.fullObject);
      this.rowData = data.data;
      console.log(this.rowData);
    }, err => console.log(err));
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.id} ${node.name}`)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onGridReady = () => {
    this.gridOptions.api?.sizeColumnsToFit();
    console.log('Fit Fit');
  };
}
