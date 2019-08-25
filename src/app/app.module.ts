import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigsysComponent } from './configsys/configsys.component';
import { ConfigsysService } from './configsys.service';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'configsys', component: ConfigsysComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigsysComponent,
    HomeComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    DemoMaterialModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    DemoMaterialModule,
    MatSnackBarModule,
    FormsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    NgHttpLoaderModule.forRoot(),
    NgxUiLoaderModule,
    ToastrModule.forRoot(
      {  
        positionClass:'top-left'      
      } ),
    FlexLayoutModule
    
  ],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent],
  providers: [ConfigsysService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

