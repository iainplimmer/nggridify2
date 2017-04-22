import { NgModule } from '@angular/core';
import { ngGridifyComponent } from './ng-gridify.component';
import { BrowserModule } from '@angular/platform-browser';
import { PagePipe } from './ng-gridify.page.pipe'

@NgModule({
    declarations: [ngGridifyComponent, PagePipe],
    exports: [ngGridifyComponent],
    imports: [BrowserModule] // Used for ngFor
})
export class ngGridifyModule {}

export { ngGridifyComponent };