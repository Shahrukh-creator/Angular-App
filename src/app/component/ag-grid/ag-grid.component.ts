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
    {
      headerName: 'ID',
      field: 'id',
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
    { headerName: 'Body', field: 'body', sortable: true, filter: true },
  ];

  rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    this.gridOptions = <GridOptions>{};
  }

  ngOnInit(): void {}

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.title} ${node.body}`)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onGridReady = () => {
    this.gridOptions.api?.sizeColumnsToFit();
    console.log('Fit Fit');
  };
}
