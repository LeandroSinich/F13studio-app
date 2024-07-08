import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { VistaGeneralCancionDataSource, VistaGeneralCancionItem } from './vista-general-cancion-datasource';

@Component({
  selector: 'app-vista-general-cancion',
  templateUrl: './vista-general-cancion.component.html',
  styleUrl: './vista-general-cancion.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class VistaGeneralCancionComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VistaGeneralCancionItem>;
  dataSource = new VistaGeneralCancionDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','pp', 'name', 'mic',  'grupo'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
