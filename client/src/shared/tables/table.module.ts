import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TableComponent,
    ],
    exports: [
        TableComponent,
    ],
})

export class TableModule {
}
