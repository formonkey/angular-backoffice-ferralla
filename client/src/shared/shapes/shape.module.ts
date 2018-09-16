import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapeComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ShapeComponent,
    ],
    exports: [
        ShapeComponent,
    ]
})

export class ShapeModule {}
