import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    
  
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports:[
    AuthModalComponent
  ]
})
export class UserModule { }
