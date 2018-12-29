import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
    declarations: [
        BreadCrumbComponent,
        PageHeaderComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        BreadCrumbComponent,
        RouterModule,
        PageHeaderComponent
    ]
})
export class SharedModule {}
