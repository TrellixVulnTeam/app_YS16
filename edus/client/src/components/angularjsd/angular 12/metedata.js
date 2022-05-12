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


const folding = `
let selector = 'app-root';
@Component({
  selector: selector
})

//Will be folded into inline selector

@Component({
      selector: 'app-root'
    })`.trim();

const macros = `
export function wrapInArray<T>(value: T): T[] {
  return [value];
}`.trim();

const typeFunc = `
template:
  '{{ $any(user).contacts.email }}'
  
  
//The $any() cast function also works with this to allow access to undeclared members of the component.
   template:
   '{{ $any(this).contacts.email }}'`.trim();

const transition = `
transition('open => closed', [
  animate('500ms')
]),`.trim();

const assertionOpp = `@Component({
  selector: 'my-component',
  template: '<span *ngIf="user"> {{user.name}} contacted through {{contact!.email}} </span>'
})
class MyComponent {
  user?: User;
  contact?: Contact;

  setData(user: User, contact: Contact) {
    this.user = user;
    this.contact = contact;
  }
}`.trim();

const narrowing = `
@Component({
  selector: 'my-component',
  template: '<span *ngIf="user"> {{user.contact.email}} </span>'
})
class MyComponent {
  user?: User;
}`.trim();

const stateFun = `
state('open', style({
  height: '300px',
  opacity: 0.5,
  backgroundColor: 'blue'
})),`.trim();

const dslSyntax = `
(): Used for Output and DOM events.
[]: Used for Input and specific DOM element attributes.
*: Structural directives(*ngFor or *ngIf) will affect/change the DOM structure.`.trim();

const lazyLoading = `{path: ‘user’, loadChildren: () => import(‘./users/user.module’).then(m => m.UserModule)};`.trim();

const expected = `
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<div>Class decorator</div>',
})
export class MyComponent {
  constructor() {
    console.log('Hey I am a component!');
  }
}

@NgModule({
  imports: [],
  declarations: [],
})
export class MyModule {
  constructor() {
    console.log('Hey I am a module!');
  }
}`.trim();

const propertiesDeco = `
import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div>Property decorator</div>'
})

export class MyComponent {
    @Input()
    title: string;
}`.trim();

const hostListener = `
mport { Component, HostListener } from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div>Method decorator</div>'
})
export class MyComponent {
    @HostListener('click', ['$event'])
    onHostClick(event: Event) {
        // clicked, 'event' available
    }
}`.trim();

const parameters = `
import { Component, Inject } from '@angular/core';
import { MyService } from './my-service';

@Component({
    selector: 'my-component',
    template: '<div>Parameter decorator</div>'
})
export class MyComponent {
    constructor(@Inject(MyService) myService) {
        console.log(myService); 
    }
}`.trim();

// const pipes = ``.trim();




class MetaData extends Component {
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
              <h3>1. What is metadata</h3>
              Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by
              decorators.There are four main types of decorators:
              <ul>
                <li>Class decorators, e.g. @Component and @NgModule.</li>
                <li>Property decorators for properties inside classes, e.g. @Input and @Output.</li>
                <li>Method decorators for methods inside classes, e.g. @HostListener.</li>
                <li>Parameter decorators for parameters inside class constructors, e.g. @Inject.</li>
              </ul>
              <b>Decorators are actually just functions, And called with whatever they are decorating.</b>
              <br />
              <b>1. Class decorators: </b>@Component and @NgModule
              <div style={titles}>
                <PrismCode
                  code={expected}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <b>2. Property decorators: </b>Used for properties inside classes, e.g. @Input and @Output
              <div style={titles}>
                <PrismCode
                  code={propertiesDeco}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <b>3. Method decorators: </b>Used for methods inside classes, e.g. @HostListener
              <ul>
                <li>Function decorator allows us to handle event of the host element in the directive class.</li>
                <li>It lets us ti listen for event on host element / component.</li>
              </ul>
              <div style={titles}>
                <PrismCode
                  code={hostListener}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <b>4. Parameter decorators: </b>Used for parameters inside class constructors, e.g. @Inject, Optional.
              <div style={titles}>
                <PrismCode
                  code={parameters}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>2. Metadata Properties:</h3>
              <li><b>changeDetection: </b>change the detection strategy used component.</li>
              <li><b>viewProviders: </b>list of providers available for component and the view of their children.</li>
              <li><b>moduleId: </b>Module ID of the file in which component is defined.</li>
              <li><b>templateUrl: </b>url in an external file that contains a template for the view.</li>
              <li><b>template: </b>template defined inline template for the view.</li>
              <li><b>styleUrls: </b>url list for style sheets that will be applied to the view of the component.</li>
              <li><b>styles: </b></li>
              <li><b>animations: </b>animation’s list of the component.</li>
              <li><b>encapsulation: </b>strategy of style encapsulation used by component.</li>
              <li><b>interpolation: </b>custom interpolation markers used in the template o component.</li>
              <li><b>entryComponents: </b>entryComponents is the list of components that are dynamically inserted
                into the view of the component.</li>
              <li><b>preserveWhitespaces: </b>Using this property, we can remove all whitespaces from the template.</li>
              <br />

              <h3>3. What are the restrictions of metadata</h3>
              In Angular, You must write metadata with the following general constraints,
              <br />
              <ul>
                <li>Write expression syntax within the supported range of javascript features.</li>
                <li>The compiler can only reference symbols which are exported.</li>
                <li>Only call the functions supported by the compiler</li>
                <li>Decorated and data-bound class members must be public.</li>
              </ul>
              <br />

              <h3>4. What is the purpose of metadata json files</h3>
              The metadata.json file can be treated as a diagram of the overall structure of a decorator's metadata,
              represented as an abstract syntax tree(AST). During the analysis phase, the AOT collector scan the metadata
              recorded in the Angular decorators and outputs metadata information in .metadata.json files, one per .d.ts file.
              <br />

              <h3>5. Can I use any javascript feature for expression syntax in AOT</h3>
              No, the AOT collector understands limited JavaScript features. If an expression uses
              unsupported syntax, the collector writes an error node to the .metadata.json file. Later point of time,
              the compiler reports an error if it needs that piece of metadata to generate the application code.
              <br />

              <h3>66. What is folding</h3>
              The compiler can only resolve references to exported symbols in the metadata. Whereas some of the non-exported members are folded while generating the code.
              <br />
              <br />
              Folding is a process in which the collector evaluates an expression during collection and record the result in the .metadata.json instead of the original expression.
              <div style={titles}>
                <PrismCode
                  code={folding}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              Remember that the compiler can’t fold everything. For example, spread operator on arrays, objects created using new keywords and function calls.
              <br />

              <h3>7. What is metadata rewriting</h3>
              Metadata rewriting is the process in which the compiler converts the expression initializing the
              fields such as useClass, useValue, useFactory, and data into an exported variable, which replaces the
              expression.
              <br />

              <h3>8. What is the purpose of any type cast function</h3>
              You can disable binding expression type checking using $any() type cast function.
              <div style={titles}>
                <PrismCode
                  code={typeFunc}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>

              <br />

              <h3>9. What is Non null type assertion operator</h3>
              You can use the non-null type assertion operator to suppress the Object is possibly 'undefined' error.
              <br />
              <br />
              In the following example, the user and contact properties are always set together, implying that contact is always non-null if user is non-null. The error is suppressed in the example by using contact!.email.
              <div style={titles}>
                <PrismCode
                  code={assertionOpp}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>10. What is type narrowing</h3>
              Dynamic checks and predicates gives us information about values at run-time. type narrowing is the
              process of reflecting this information in the type-checker at compile time.
              <div style={titles}>
                <PrismCode
                  code={narrowing}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>11. How do you describe various dependencies in angular application</h3>
              The dependencies section of package.json with in an angular application can be divided as follow
              <ul>
                <li><b>Angular packages: </b>Angular core and optional modules. their package names begin @angular/.</li>
                <li><b>upport packages: </b>Third-party libraries that must be present for Angular apps to run.</li>
                <li><b>Polyfill packages: </b>Polyfills plug gaps in a browser's JavaScript implementation.</li>
              </ul>
              <br />

              <h3>12.What is the purpose of common module</h3>
              The commonly-needed services, pipes, and directives provided by @angular/common module. Apart from these HttpClientModule is available under @angular/common/http.
              <br />

              <h3>13. What is angular animation</h3>
              <ul>
                <li>Angular animations are based on CSS web transition functionality, so anything that can be styled or
                  transformed in CSS can be animated the same way in Angular.</li>
                <li>Angular animations allow you to: Set animation timings, styles, keyframes, and transitions.</li>
              </ul>
              <br />

              <h3>14. What is State function</h3>
              Angular's state() function is used to define different states to call at the end of each transition. This function takes two arguments:
              <ul>
                <li>A unique name like open or closed.</li>
                <li><b>A style() function: </b>The style function is used to define a set of styles to associate with a given state name. You
                  need to use it along with state() function to set CSS style attributes.</li>
              </ul>
              <div style={titles}>
                <PrismCode
                  code={stateFun}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>16. What is transition function</h3>
              <ul>
                <li>The animation transition function is used to specify the changes that occur between one state and another over a period of time.
                  It accepts two arguments:
                </li>
                <ul>
                  <li>First argument accepts an expression that defines the direction between two transition states.</li>
                  <li>Second argument accepts an animate() function.</li>
                </ul>
              </ul>

              <div style={titles}>
                <PrismCode
                  code={transition}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>

              <h3>17. What are macros</h3>
              The AOT compiler supports macros in the form of functions or static methods that return an expression
              in a single return expression.
              <div style={titles}>
                <PrismCode
                  code={macros}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>18. What is Angular DSL (Domain-specific language)</h3>
              A DSL is a computer language specialized to a particular application domain. Angulard DSL allows us to write
              Angular specific html-like syntax on top of
              normal html. It has its own compiler that compiles this syntax to html that the browser can understand.
              This DSL is defined in NgModules such as animations, forms, routing and navigation.
              <br />
              <br />
              Basically you will see 3 main syntax in Angular DSL.
              <div style={titles}>
                <PrismCode
                  code={dslSyntax}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>19. Explain Lazy Loading in Angular.</h3>
              <ul>
                <li>Lazy loading in Angular Routing brings down the size of large files.</li>
                <li>This is done by lazily loading the files that are required occasionally.</li>
                <li>
                  loadChildren expects a function that uses the dynamic import syntax to import your lazy-loaded module
                  only when it’s needed. Dynamic import is promise-based and gives you access to the module, where the
                  module’s class can be called.
                </li>
              </ul>
              <div style={titles}>
                <PrismCode
                  code={lazyLoading}
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

export default (withStyles(styles)(MetaData));
