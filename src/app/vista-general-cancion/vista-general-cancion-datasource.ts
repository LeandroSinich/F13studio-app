import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface VistaGeneralCancionItem {
  name: string;
  id: number;
  mic: string,
  pp: boolean,
  grupo: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: VistaGeneralCancionItem[] = [
  {id: 1, name: 'OHL', mic: 'hummingbird', pp: true, grupo: 'bateria' },
  {id: 2, name: 'OHR', mic: 'hummingbird', pp: true, grupo: 'bateria' },
  {id: 3, name: 'Kick', mic: 'AE2500', pp: false, grupo: 'bateria' },
  {id: 4, name: 'snare', mic: 'sm57', pp: false, grupo: 'bateria' },
  {id: 5, name: 'T1', mic: 'AT-T', pp: false, grupo: 'bateria' },
  {id: 6, name: 'T2', mic: 'AT-T', pp: false, grupo: 'bateria' },
  {id: 7, name: 'chancha', mic: 'AT-T', pp: false, grupo: 'bateria' },
  {id: 8, name: 'HH', mic: 'Avantone', pp: true, grupo: 'bateria' },
  {id: 9, name: 'ride', mic: 'sm58', pp: false, grupo: 'bateria' },
  {id: 10,name: 'Ambiente', mic: 'babyBottle', pp: true, grupo: 'bateria' },
  {id: 11,name: 'Bajomic', mic: 'beta52', pp: false, grupo: 'bajo' },
  {id: 12,name: 'BajoLinea', mic: 'cajaDirecta', pp: false, grupo: 'bajo' },
  {id: 13,name: 'Gtr-din', mic: 'senn-906', pp: false, grupo: 'guitarra' },
  {id: 14,name: 'Gtr-cond', mic: 'sm57', pp: false, grupo: 'guitarra' },
  {id: 15,name: 'VoxLeader', mic: 'neumannKMS105', pp: true, grupo: 'vocal' },
  {id: 16,name: 'Coros', mic: 'sm58', pp: false, grupo: 'vocal' },
  
  
];

/**
 * Data source for the VistaGeneralCancion view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class VistaGeneralCancionDataSource extends DataSource<VistaGeneralCancionItem> {
  data: VistaGeneralCancionItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<VistaGeneralCancionItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: VistaGeneralCancionItem[]): VistaGeneralCancionItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: VistaGeneralCancionItem[]): VistaGeneralCancionItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'grupo': return compare(a.grupo, b.grupo, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
