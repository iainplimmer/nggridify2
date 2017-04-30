import { NgModule } from '@angular/core';
import { ngGridifyComponent } from './ng-gridify.component';
import { CommonModule } from '@angular/common';
import { PagePipe } from './pipes/ng-gridify.page.pipe'
import { SortPipe } from './pipes/ng-gridify.sort.pipe'
import { NgGridifyService } from './services/ng-gridify.service'

@NgModule({
    declarations: [ngGridifyComponent, PagePipe, SortPipe],
    providers: [NgGridifyService],
    exports: [ngGridifyComponent],
    imports: [CommonModule] // Used for ngFor
})
export class ngGridifyModule {}

export { ngGridifyComponent };