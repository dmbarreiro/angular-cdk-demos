import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    imports: [
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        OverlayModule,
    ],
    exports: [
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        OverlayModule,
    ]
})
export class MaterialModule {}