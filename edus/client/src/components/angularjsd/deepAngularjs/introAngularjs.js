import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../../ReactJs/styles.css'
import Sidebar from '../sidebar';
import PrismCode from '../../ReactJs/prismCode';


const titles = { backgroundColor: '#F0F8FF', padding: '1px', fontSize: '16px' }

const styles = theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})


const NgModules = `
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})`.trim();

const NgClass = `
@Component({
  selector: 'app-root',
  template: '
  <p [ngStyle] = "{backgroundColor: getColor()}" [ngClass] = "{Online: serverStatus === 'Online'}"> 
    Server  with ID {{serverID}} is {{serverStatus}}. 
  </p >,
  styles: ['.Online{ color: yellow; }']'})

export class AppComponent {
  serverID: number = 10;
  serverStatus: string = 'Offline';

  constructor () {
  this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}`.trim();


const databinding = `
DOM               Component
<----{{value}}-----
<-[propery]="value" --
--(event)="handler" -->
<-[(NgModule)]="propery" --`.trim();

const property = `
syntax: [property]='expression

<input type="email" [value]="user.email">`.trim();

const evtBinding = `<button (click)="logout()"></button>`.trim();

const twoWayBinding = `<input type="email" [(ngModel)]="user.email">`.trim();

const compDeco = `
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //
  changeDetection?: ChangeDetectionStrategy
  viewProviders?: Provider[]
  moduleId?: string
  templateUrl?: string
  template?: string
  styleUrls?: string[]
  styles?: string[]
  animations?: any[]
  encapsulation?: ViewEncapsulation
  interpolation?: [string, string]
  entryComponents?: Array<Type<any> | any[]>
  preserveWhitespaces?: boolean
  // inherited from core/Directive
  selector?: string
  inputs?: string[]
  outputs?: string[]
  providers?: Provider[]
  exportAs?: string
  queries?: {...}
  host?: {...}
  jit?: boolean
})`.trim();

const preserveWhitespaces = `
@Component({
  selector: 'app-root',
  template: ''
  styles: [''],
  preserveWhitespaces:true
})`.trim();

const objects = `
@Component({
  selector: 'app-root',
  template: '
  <input(keyup)="onKey($event)">
    <p>{{values}}</p>
  '})

export class AppComponent {
  values = '';

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }`.trim();

const keyEvents = `
 @Component({
  selector: 'app-root',
  template: '
  <input #box (keyup.enter) = "onEnter(box.value)">
    <p>{{value}}</p>
  '})

export class AppComponent {
  values = '';

  value = '';
  onEnter(value: string) { this.value = value; }
}`.trim();

const onBlur = `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">
    <p>{{value}}</p>'})

export class AppComponent {
  value = '';
  update(value: string) { this.value = value; }
}
`.trim();

const NgStyles = `
//1
<div [ngStyle]="{'color':green}"></div>
ngStyle become much more useful when the value is dynamic.
<div [ngStyle]="{'color': person.country==='UK' ? 'green' : 'red'}"></div>


//2
@Component({
  selector: 'app-root',
  template: '
  <p[ngStyle]="{backgroundColor: 'green'}"> Server with ID {{serverID}} is {{serverStatus}}.</p>
  '})
export class AppComponent {
  serverID: number = 10;
  serverStatus: string = 'Offline';

  constructor () {
  this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }
}`.trim();

const templateExpree = `
<h3>{{username}}, welcome to Angular</h3>


//The below javascript expressions are prohibited in template expression
1. assignments (=, +=, -=, ...)
2. new
3. chaining expressions with ; or ,
4. increment and decrement operators (++ and --)
`.trim();

const templateState = `
//template statements appear in quotes to the right of the = symbol like (event)="statement".
<button (click)="editProfile()">Edit Profile</button>


// data flow
2.Component       Template
<- Event binding  ----
-- Property binding  --->
`.trim();

const binding = `
<td [attr.colspan]="myColSpan" align="center">Record</td>
`.trim();

const twoWay = `
template: '
Enter name: <input [value] = 'data'(input) = 'data=$event.target.value' >
  <br />
Your name {{data}}
    ',})

export class AppComponent {
  data:string = 'Data binding';`.trim();




const componentBin = `
@Component({
  selector: 'app-root',
  template: '
    <input type = "text"[value] = "property"><br/>
    <input type="text" bind-value = "property">
  ',
})
export class AppComponent {
  property="binding"
}`.trim();

const tempLocal = `
@Component({
  selector: 'app-root',
  template: '
    <input #inputInfo type = "text" name = "template" value = "property">
    <br/>
    <button (click) = "getInfo(inputInfo)"> Refrence Varriable</button>
  '})
export class AppComponent {
  getInfo(inputInfo){
    console.log(inputInfo)
    console.log(inputInfo.name)
  }
}`.trim();

const propertyBin = `
Component ---> Template
Syntax:
1. {{expression}}
2. [target] = "expression"
3. bind-template = expression

@Component({
  selector: 'app-root',
  template: '  <button[disabled]="isDisable"> Dis</button>',
})
export class AppComponent {
  isDisable=true;
}`.trim();


class IntroAngulard extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <h4><Sidebar /></h4>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <List>
              <h3>1. Angular</h3>
              <ul>
                <li>Angular version number have 3 parts: <b>major, minor, patch (8.2.9).</b></li>
                <li>Angular say if project in version 4 and want to migrate 6 than firstly move from 4 to 5 than
                  finally move to version 6.</li>
                <li>Major realease in every <b>6 month,</b> minor in <b>2-3 month</b> and patch in <b>every week</b>.</li>
                <li><b>e2e: </b>integration testing</li>
                <li><b>.editorconfig: </b>Required when work in team involvent</li>
                <li><b>angular.json: </b>configure our application</li>
                <li><b>selector: </b>component refrense</li>
                <li><b>polyfils: </b>support diffrent browsers</li>
                <li><b>tsconfig: </b>testing perpose</li>
                <li><b>tslint: </b>rules define for standard codding</li>
                <li><b>^: </b>minor and revision version checked and upper level install in system</li>
                <li><b>~: </b>only revision checked and if stable version find than install</li>
              </ul>
              <br />

              <h3>2. NgModules</h3>
              To define a module, we use the NgModule.<br />
              <li><b>module:</b> Logical grouping of components and services</li>
              <ul>
                <li>Angular apps are modular and Angular has its own modularity system called NgModules. </li>
                <li>The purpose of NgModule is to declare everything that has been created in angular and group it.</li>
                <li>NgModules collect related code into functional sets.</li>
                <li>Every Angular app has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An app typically contains many functional modules.</li>
              </ul>
              <div style={titles}>
                <PrismCode
                  code={NgModules}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>Frequently Used NgModule:</b><br />
              <ul>
                <li><b>BrowserModule :</b>When run your app in a browser.</li>
                <li><b>CommonModule :</b>When use NgIf, NgFor.</li>
                <li><b>FormsModule :</b>When build template driven forms (includes NgModel).</li>
                <li><b>ReactiveFormsModule :</b>When build reactive forms.</li>
                <li><b>RouterModule :</b>When use RouterLink, .forRoot(), .forChild().</li>
                <li><b>HttpClientModule :</b>When talk to a server.</li>
              </ul>
              <br />
              <br />


              <ul>
                <li><b>decorator:</b> decorator contain @. it accept object. decorator are simply functions that return functions.
                  decorator are invoke at runtime. decorator allows you to excuite functions.</li>
                <li>inside import. providers contain services. bootsrap for application booting perppose, which
                  component first excuite.</li>
                <li><b>Common decorator: </b>@ngModule(), @Component(), @Injectable(): define services, @Input & @Output:
                  send and recive data from dom. many build-in decorator available in Angular.</li>
              </ul>
              <br />

              <ul>
                <li><b>Class decorator:</b> @ngModule(), @Component().</li>
                <li><b>Property decorator:</b> @Input(), @Output.</li>
                <li><b>Method decorator:</b> for Method inside classes (@HostListener)</li>
                <li><b>Parameter decorator:</b> for Parameter inside class constructors (@Inject)</li>
                <li>Each decorator has a unique role.</li>
              </ul>
              <br />

              <ul>
                <li><b>generate modue:</b>ng g module company</li>
                <li>A component cannot be import in two diffrent modules. If do than show runtime error. this is
                  features module.</li>
              </ul>
              <br />

              <h3>3. What are directives: @directive</h3>
              <ul>
                <li>Directive is a js class, which is declared as @directive.</li>
                <li>Directives are used to extend the power of the HTML attributes and to change the appearance or behavior of a DOM element.</li>
              </ul>
              <br />
              <br />

              <b>Elements which change the appearence / behavior of the DOM element. 3 types of Directives.</b>
              <ul>
                <li><b>Component Directives:</b>
                  <ul>
                    <li>Directives with own Template.</li>
                    <li>with the help of selector, @Component which is a decorator function is used to create a
                      component directive.</li>
                  </ul>
                </li>
                <br />
                <li><b>Structural Directives:</b>
                  <ul>
                    <li>Structural directive modifies or manipulates the structure of DOM by adding or removing DOM elements. it works on the structure of a DOM.</li>
                    <li>Structural directives which have a * sign before the directive.  *ngIf and *ngFor.</li>
                  </ul>
                </li>
                <br />
                <li><b>Attribute Directives:</b>
                  <ul>
                    <li> Change appearence/ behavior of the DOM.</li>
                    <li>Attribute directives deal with the changing of look and behavior of the DOM element,
                      component or another directive. Ex. NgStyle</li>
                  </ul>
                </li>
                <br />
                By default, angular provide two attribute directives<br />
                <b>1. NgClass: </b>dynamically, add or remove CSS class on the basis of the certain conditions.<br />
                <br />
                Allows us to set the CSS class dynamically for a DOM element. we can use ngClass with string, array,
                object or component method.
                <br />
                <br />
                <div style={titles}>
                  <PrismCode
                    code={NgClass}
                    language="js"
                    plugins={["line-numbers"]}
                  />
                </div>
              </ul>
              <br />
              <br />
              <b>2. NgStyle: </b>dynamically, add or remove styles on the basis of the certain conditions.
              <br />
              <div style={titles}>
                <PrismCode
                  code={NgStyles}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>4. Component</h3>
              Components are the most basic UI building block of an Angular application. An angular application
              contains a tree of angular components. A component is nothing more than a simple TypeScript class in which you
              can create your own methods and properties according to your needs.
              <ul>
                <li>A component and its template together define a view.</li>
                <li>Components use services, which provide specific functionality not directly related to views.
                  Service providers can be injected into components as dependencies, making your code modular,
                  reusable, and efficient.</li>
                <li>Both components and services are simply classes, with decorators that mark their type and
                  provide metadata that tells Angular how to use them.</li>
                <li>The metadata for a component tells Angular where to get the major building blocks that it needs
                  to create and present the component and its view.</li>
              </ul>
              <br />
              <div style={titles}>
                <PrismCode
                  code={componentBin}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>5. What are the differences between Component and Directive</h3>
              <table>
                <tr>
                  <th>Component</th>
                  <th>Directive</th>
                </tr>
                <tr>
                  <td>To register a component we use @Component meta-data annotation</td>
                  <td>To register directives we use @Directive meta-data annotation</td>
                </tr>
                <tr>
                  <td>Components are typically used to create UI widgets</td>
                  <td>Directive is used to add behavior to an existing DOM element</td>
                </tr>
                <tr>
                  <td>Component is used to break up the application into smaller components</td>
                  <td>Directive is use to design re-usable components</td>
                </tr>
                <tr>
                  <td>Only one component can be present per DOM element</td>
                  <td>Many directives can be used per DOM element</td>
                </tr>
              </table>
              <br />

              <h3>6. Component Decorator:</h3>
              <ul>
                <li>ngOnInit is called by default whenever the class is run.</li>
                <li>@component decorator provides additional metadata that determines how to process, instantiate
                  and use the component at runtime.</li>
                <li>component Decorator accepts the required configuration object that requires information to
                  create and display the component in real time.</li>
                <li>TypeScript feature used for passing meta data.</li>
                <li>Decorators are function that will return functions.</li>
                <li>Decorators allows us to invoke functions.</li>
              </ul>
              <br />
              <b>Types: </b> Ex. @Component, @ngModule, @injectable.<br />
              <div style={titles}>
                <PrismCode
                  code={compDeco}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>7. selector</h3>
              <ul>
                <li>this is the name of the label to which the component is applied.</li>
                <li><b>templateUrl & styleUrls :</b>these define the HTML template and style sheets associated with this component. You
                  can also use the template and style properties to define inline HTML and CSS.</li>
                <li>The selector attribute allows us to define how Angular is identified when the component is used in HTML.
                  The component selector is a CSS selector that identifies how Angular finds this particular component in any
                  HTML page.</li>
              </ul>
              <br />

              <h3>8. preserveWhitespaces</h3>
              <ul>
                <li>Using this property, we can remove all whitespaces from the template. it takes a Boolean value, that is:</li>
                <li>If it is false, it will remove all whitespace from the compiled template.</li>
                <li>If it is true, it will not remove whitespace from the compiled template.</li>
              </ul>
              <div style={titles}>
                <PrismCode
                  code={preserveWhitespaces}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>8. inherited from core/Directive:</h3>
              <ul>
                <li><b>selector :</b>css selector which identifies this component in a template.</li>
                <li><b>inputs :</b></li>
                <li><b>outputs :</b></li>
                <li><b>providers :</b>Providers are usually singleton objects, to which other objects have access
                  through dependency injection (DI).</li>
                <li><b>exportAs :</b>name under which the component instance is exported to a template.</li>
                <li><b>queries :</b>allows you to configure queries that can be inserted into the component.</li>
                <li><b>host :</b>Map of class properties to host element links for events, properties, and attributes.</li>
                <li><b>jit :</b>if true, the AOT compiler will ignore this directive/ component and will therefore always be compiled using JIT.</li>
              </ul>
              <br />

              <h3>9. What are template expressions</h3>
              A template expression produces a value similar to any Javascript expression. Angular executes the expression and assigns it to a property of a binding target; the target might be an HTML element, a component, or a directive.
              <br />
              <br />
              In interpolation syntax, the template expression is surrounded by double curly braces.
              <div style={titles}>
                <PrismCode
                  code={templateExpree}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>10. Template/local reference variables: Access by id '#inputInfo'</h3>

              <div style={titles}>
                <PrismCode
                  code={tempLocal}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>11. What are template statements</h3>
              A template is an HTML snippet that tells Angular how to render the component in angular application.
              <div style={titles}>
                <PrismCode
                  code={templateState}
                  language="js"
                  plugins={["line-numbers"]}
                />
                <br />
                <b>N: </b>Component send data to Template by using Promises binding or Interpolation.
              </div>

              <br />
              <h3>12. Templates and views</h3>
              <ul>
                <li><b>ngIf:</b> conditionally includes a Template based on the value of expression, It add/ remove HTML
                  elements in DOM layout.</li>
                <li><b>ngSwitch Directives:</b> ngSwitch is combination of attribute Directive and Structural Directive,
                  it similar to switch statement. </li>
                <li><b>ngFor:</b> it change the structure of DOM. It's point to repeat a given HTML Template once for each value in
                  an array, each time passing it the array value as context for string interpolation/ binding.</li>
                <li><b>syntax:</b> *ngFor="let 'value' of 'cpllection'.</li>
                <br />
              </ul>
              <br />

              <h3>13. What is Data Binding? How many ways it can be done?</h3>
              In order to connect application data with the DOM, data binding is used.
              It happens between the template (HTML) and component (TypeScript). There are 3 ways to achieve data binding:
              <ul>
                <li>Interpolation / String Interpolation (one-way data binding)</li>
                <li><b>Event Binding: </b>one-way data binding.</li>
                <li><b>Property Binding: </b>one-way data binding.</li>
                <li><b>Two-way Binding: </b>Changes made in the application state gets automatically reflected in the view and vice-versa. The ngModel directive is used for achieving this type of data binding.</li>
              </ul>
              <br />
              <br />
              <div style={titles}>
                <PrismCode
                  code={propertyBin}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>Data binding Forms:</b>
              <br />
              <div style={titles}>
                <PrismCode
                  code={databinding}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>

              <ul>
                <li>Component to view</li>
                <li>View to component</li>
                <li>Two way sequence: view to component to view</li>
              </ul>
              <br />
              <br />

              <b>Property binding:</b>
              <br />
              <ul>
                <li>We can also use string and non-string data in property binding. <b>Ex.</b> property binding use case is disabled, boolean.</li>
                <li>Used to bind value of component/model properties to the HTML element.
                  Depending on the value, it will change the existing behavior of the HTML element.</li>
                <li>Interpolation use only string data.</li>
                <li>in property binding can't use string concatnation.</li>
                <li>It set a property to view element.</li>
                <li>Rendering value from data-source to template.</li>
              </ul>
              <br />
              <div style={titles}>
                <PrismCode
                  code={property}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>Attribute Binding: </b>Helps to set values for attributes directly.
              <br />
              <div style={titles}>
                <PrismCode
                  code={binding}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <b>From the DOM to the Component: </b> Event binding
              <br />
              When a specific DOM event happens (eg.: click, change, keyup), call the specified method in the component
              <div style={titles}>
                <PrismCode
                  code={evtBinding}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>Two-way binding: Two-way data binding:</b>
              <br />
              <div style={titles}>
                <PrismCode
                  code={twoWayBinding}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <ul>
                <li>mainly used in the input field or form where user provide value/ change any control value in the one side,
                  and on the other side same automatically update into the controllers variables.</li>
                <li>it's combination of both property binding and event binding.</li>
                <li>binding using [(ngModel)] Directive. </li>
                <li>ngModel Directive which combines the square bracket of property binding with parentheses of event binding
                  in a single notation.</li>
              </ul>
              <br />
              <div style={titles}>
                <PrismCode
                  code={twoWay}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>

              <h3>2.1. Get user input from the $event object:</h3>
              <div style={titles}>
                <PrismCode
                  code={objects}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>  2.3. Key event filtering (with key.enter):</h3>
              bind to Angular's keyup.enter pseudo-event. Then Angular calls the event handler only when the user presses Enter.
              <div style={titles}>
                <PrismCode
                  code={keyEvents}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>2.4. On blur</h3>
              <div style={titles}>
                <PrismCode
                  code={onBlur}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(IntroAngulard));
