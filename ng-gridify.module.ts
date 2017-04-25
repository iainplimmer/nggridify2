import { NgModule } from '@angular/core';
import { NgGridifyComponent } from './ng-gridify.component';
import { CommonModule } from '@angular/common';
import { PagePipe } from './ng-gridify.page.pipe'

@NgModule({
    declarations: [NgGridifyComponent, PagePipe],
    exports: [NgGridifyComponent],
    imports: [CommonModule] // Used for ngFor
})
export class NgGridifyModule {}