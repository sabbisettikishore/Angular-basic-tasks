import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import {SpinnerModule} from 'primeng/spinner';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { TemplateComponent } from './template/template.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MenuModule} from 'primeng/menu';
import { HomeComponent } from './home/home.component';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { CustomvalidDirective } from './customvalid.directive';
import { ServiceExService } from './service-ex.service';
import { ServicehttpexComponent } from './servicehttpex/servicehttpex.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PipesPipe } from './pipes.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { ParameterAndChainPipeComponent } from './pipes/parameter-and-chain-pipe/parameter-and-chain-pipe.component';
import { PureAndImpurePipesComponent } from './pipes/pure-and-impure-pipes/pure-and-impure-pipes.component';
import { BuiltinPipesComponent } from './pipes/builtin-pipes/builtin-pipes.component';
import { CommunicationComponent } from './communication/communication.component';
import { InputComponent } from './communication/input/input.component';
import { Input1Component } from './communication/input1/input1.component';
import { ViewChild1Component } from './communication/view-child1/view-child1.component';
import { ViewChild2Component } from './communication/view-child2/view-child2.component';
import { Output1Component } from './communication/output1/output1.component';
import { OutputComponent } from './communication/output/output.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ColorDirective } from './directive/color.directive';
import { StructuralDirective } from './directive/structural.directive';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { ChildformComponent } from './forms/childform/childform.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import {PanelModule} from 'primeng/panel';
import { PasswordValidComponent } from './password-valid/password-valid.component';
import { PasschildComponent } from './password-valid/passchild/passchild.component';
import { CopyPasteDirective } from './password-valid/copy-paste.directive';
import { RoutingCompComponent } from './routing-comp/routing-comp.component';
import { RChildComponent } from './routing-comp/rchild/rchild.component';
import { WildRedirectComponent } from './routing-comp/wild-redirect/wild-redirect.component';
import { UpdateComponent } from './servicehttpex/update/update.component';
import { CreateComponent } from './servicehttpex/create/create.component';
import {ToastModule} from 'primeng/toast';
import { Configurl } from './servicehttpex/configurl';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { ProxyExComponent } from './proxy-ex/proxy-ex.component';
import { RegisterformComponent } from './registerform/registerform.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { HeadComponent } from './registerform/head/head.component';
import { FooterComponent } from './registerform/footer/footer.component';
import { RegloginComponent } from './registerform/reglogin/reglogin.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    FormsComponent,
    TemplateComponent,
    ToolbarComponent,
    HomeComponent,
    CustomvalidDirective,
    ServicehttpexComponent,
    BuiltinPipesComponent,
    PipesPipe,
    PipesComponent,
    ParameterAndChainPipeComponent,
    PureAndImpurePipesComponent,
    CommunicationComponent,
    InputComponent,
    Input1Component,
    ViewChild1Component,
    ViewChild2Component,
    Output1Component,
    OutputComponent,
    ParentComponent,
    ChildComponent,
    DataBindingComponent,
    DirectiveComponent,
    ColorDirective,
    StructuralDirective,
    ChildformComponent,
    TypeScriptComponent,
    PasswordValidComponent,
    PasschildComponent,
    CopyPasteDirective,
    RoutingCompComponent,
    RChildComponent,
    WildRedirectComponent,
    UpdateComponent,
    CreateComponent,
    ObservablesComponent,
    ProxyExComponent,
    RegisterformComponent,
    HeadComponent,
    FooterComponent,
    RegloginComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    RadioButtonModule,CheckboxModule,DropdownModule,BrowserAnimationsModule,
    CalendarModule,
    InputTextareaModule,
    InputMaskModule,
    SpinnerModule,
    TableModule,
    AutoCompleteModule,
    InputSwitchModule,
    TriStateCheckboxModule,
    FormsModule,
    MenuModule,
    SidebarModule,
    PanelMenuModule,
    ToolbarModule,
    HttpClientModule,
    ToggleButtonModule,
    PanelModule,
    ToastModule,
    ScrollPanelModule
  ],
  providers: [ServiceExService,Configurl ],
  bootstrap: [AppComponent]
})
export class AppModule { }
