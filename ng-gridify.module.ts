import { NgModule } from '@angular/core';
import { ngGridifyComponent } from './ng-gridify.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ngGridifyComponent],
    exports: [ngGridifyComponent],
    imports: [BrowserModule] // Used for ngFor
})
export class ngGridifyModule {}

export { ngGridifyComponent };