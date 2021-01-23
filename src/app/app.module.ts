import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { environment } from '../environments/environment';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { CryptoService } from './services/crypto/crypto.service';
import { LoginService } from './services/login/login.service';
import { ApiService } from './services/api/api.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatBadgeModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,

  ],
  providers: [CryptoService, LoginService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
