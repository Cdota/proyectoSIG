import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule, 
    MatDividerModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule, 
    MatListModule,
    RouterModule,
    MatTableModule
  ], 
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ]
})
export class SharedModule { }
