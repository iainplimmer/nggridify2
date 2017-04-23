import { NgModule } from '@angular/core';
import { ngGridifyComponent } from './ng-gridify.component';
import { CommonModule } from '@angular/common';
import { PagePipe } from './ng-gridify.page.pipe'

@NgModule({
    declarations: [ngGridifyComponent, PagePipe],
    exports: [ngGridifyComponent],
    imports: [CommonModule] // Used for ngFor
})
export class ngGridifyModule {}

export { ngGridifyComponent };