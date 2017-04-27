import { NgModule } from '@angular/core';
import { ngGridifyComponent } from './ng-gridify.component';
import { CommonModule } from '@angular/common';
import { PagePipe } from './ng-gridify.page.pipe'
import { NgGridifyService } from './ng-gridify.service'

@NgModule({
    declarations: [ngGridifyComponent, PagePipe],
    providers: [NgGridifyService],
    exports: [ngGridifyComponent],
    imports: [CommonModule] // Used for ngFor
})
export class ngGridifyModule {}

export { ngGridifyComponent };