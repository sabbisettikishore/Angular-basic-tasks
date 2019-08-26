import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateComponent } from './template/template.component';
import { ServicehttpexComponent } from './servicehttpex/servicehttpex.component';
import { PipesComponent } from './pipes/pipes.component';
import { PureAndImpurePipesComponent } from './pipes/pure-and-impure-pipes/pure-and-impure-pipes.component';
import { ParameterAndChainPipeComponent } from './pipes/parameter-and-chain-pipe/parameter-and-chain-pipe.component';
import { BuiltinPipesComponent } from './pipes/builtin-pipes/builtin-pipes.component';
import { CommunicationComponent } from './communication/communication.component';
import { InputComponent } from './communication/input/input.component';
import { ViewChild1Component } from './communication/view-child1/view-child1.component';
import { OutputComponent } from './communication/output/output.component';
import { ParentComponent } from './communication/parent/parent.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChildformComponent } from './forms/childform/childform.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { PasswordValidComponent } from './password-valid/password-valid.component';
import { PasschildComponent } from './password-valid/passchild/passchild.component';
import { RoutingCompComponent } from './routing-comp/routing-comp.component';
import { RChildComponent } from './routing-comp/rchild/rchild.component';
import { WildRedirectComponent } from './routing-comp/wild-redirect/wild-redirect.component';
import { UpdateComponent } from './servicehttpex/update/update.component';
import { CreateComponent } from './servicehttpex/create/create.component';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { ProxyExComponent } from './proxy-ex/proxy-ex.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { CheckboxComponent } from './checkbox/checkbox.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'forms', component: FormsComponent,
    children: [
      { path: 'childform', component: ChildformComponent }
    ]
  },
  { path: 'template', component: TemplateComponent },
  { path: 'servicehttpex', component: ServicehttpexComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'create', component: CreateComponent },
  //   {path:'head',component:HeadComponent,
  // children:[
  //   {path:'login' ,component:RegloginComponent,
  // children:[
  //   {path:'reg',component:RegisterformComponent}
  // ]}
  // ]},
  { path: 'reg', component: RegisterformComponent },
  {
    path: 'communication', component: CommunicationComponent,
    children: [
      { path: 'input', component: InputComponent },
      { path: 'viewchild1', component: ViewChild1Component },
      { path: 'output', component: OutputComponent },
      { path: 'parent', component: ParentComponent }
    ]
  },


  {
    path: 'pipes', component: PipesComponent,
    children: [
      { path: 'builtin-pipes', component: BuiltinPipesComponent },
      { path: 'parameter-and-chain-pipe', component: ParameterAndChainPipeComponent },
      { path: 'pure-and-impure-pipes', component: PureAndImpurePipesComponent },
    ]
  },

  { path: 'binding', component: DataBindingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'typescript', component: TypeScriptComponent },
  {
    path: 'passvalid', component: PasswordValidComponent,
    children: [
      { path: 'child', component: PasschildComponent }
    ]
  },
  { path: 'check', component: CheckboxComponent },
  { path: 'routingcomp', component: RoutingCompComponent },
  { path: 'rchild/:id', component: RChildComponent },
  { path: 'rxjs', component: ObservablesComponent },
  { path: 'proxyex', component: ProxyExComponent },
  { path: '**', component: WildRedirectComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
