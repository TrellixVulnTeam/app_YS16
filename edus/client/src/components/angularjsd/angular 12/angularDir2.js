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


const multicasting = `
var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);

// These are, under the hood, 'subject.subscribe({ ...})':
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});`.trim();


class AngularDir2 extends Component {
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
              <h3>1. Please explain the various features of Angular.</h3>
              <ul>
                <li><b>Angular CLI: </b>These tools can be used for adding components, testing, instant deploying, etc.</li>
                <li><b>Animation Support: </b>Angular’s intuitive API allows the creation of high-performance, complex animation timelines with very little code.</li>
                <li><b>Cross-Platform App Development: </b>Angular can be used for building an efficient and powerful desktop, native, and progressive web apps. Angular provides support for building native mobile applications using Cordova, Ionic, or NativeScript.</li>
                <li><b>Code Splitting: </b>With the new Component Router, Angular apps load quickly. The Component Router offers automatic code-splitting so that only the code required to render the view that is requested by a user is loaded.</li>
                <li><b>Templates: </b>Allows creating UI views with a simple and powerful template syntax.</li>
                <li><b>Testing: </b>Angular lets you carry out frequent unit tests using Karma.</li>
              </ul>
              <br />

              <h3>2. State some advantages of Angular over other frameworks.</h3>
              <ul>
                <li><b>Out of box Features: </b>Several built-in features like routing, state management, rxjs library, and HTTP services are straight out of the box services provided by Angular. So, one does not need to look for the above-stated features separately. </li>
                <li><b>Declarative UI: </b>Angular uses HTML to render the UI of an application as it is a declarative language and is much easier to use than JavaScript.</li>
              </ul>
              <br />

              <h3>3. Could we make an angular application to render on the server-side?</h3>
              <ul>
                <li>Yes, we can, with Angular Universal, a technology provided by Angular capable of rendering applications on the server-side. </li>
                <br />
                <b>The benefits of  using Angular Universal are: </b>
                <br />
                <li><b>Better User Experience: </b> Allows users to see the view of the application instantly. </li>
                <li><b>Better SEO: </b> Universal ensures that the content is available on every search engine leading to better SEO.</li>
                <li><b>Loads Faster: </b>Render pages are available to the browsers sooner, so the server-side application loads faster. </li>
              </ul>
              <br />

              <ul>
                <li>Angular Universal executes on the server, generating static application pages that later get bootstrapped on the client. So that, application generally renders quickly.</li>
                <br />
                <li><b>run: </b>ng add @nguniversal/express-engine --clientProject firebase-express-demo</li>
                <li>this command has made several changes to app, modifying some files and adding some files.</li>
                <br />
                <li><b>Start you universal application:</b> npm run build:ssr && npm run serve:ssr</li>
              </ul>
              <br />

              <h3>4. Describe the MVVM architecture. </h3>
              MVVM architecture removes tight coupling between each component. The MVVM architecture comprises of three parts:
              <br />
              <ul>
                <li>Model</li>
                <li>View</li>
                <li>ViewModel</li>
              </ul>
              The architecture allows the children to have reference through observables and not directly to their parents.
              <br />

              <h3>5. Can you explain the concept of scope hierarchy in Angular?</h3>
              Angular organizes the $scope objects into a hierarchy that is typically used by views. This is known
              as the scope hierarchy in Angular. It has a root scope that can further contain one or several scopes
              called child scopes.
              <br />
              In a scope hierarchy, each view has its own $scope.
              <br />
              <br />

              <h3>6. What is multicasting</h3>
              Multi-casting is the practice of broadcasting to a list of multiple subscribers in a single execution.
              <div style={titles}>
                <PrismCode
                  code={multicasting}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>7. What are the building blocks of Angular?</h3>
              <ul>
                <li>Components</li>
                <li>Data Binding</li>
                <li>Dependency Injection (DI)</li>
                <li>Directives</li>
                <li>Metadata(decorators are used)</li>
                <li>Modules</li>
                <li>Routing</li>
                <li>Services</li>
                <li>Template</li>
              </ul>
              <br />

              <h3>8. What is ViewEncapsulation and how many ways are there to do it in Angular?</h3>
              To put simply, ViewEncapsulation determines whether the styles defined in a particular component
              will affect the entire application or not. Angular supports 3 types of ViewEncapsulation:
              <ul>
                <li><b>Emulated: </b>Styles used in other HTML spread to the component</li>
                <li><b>Native: </b>Styles used in other HTML doesn’t spread to the component</li>
                <li><b>None: </b>Styles defined in a component are visible to all components of the application</li>
              </ul>
              <br />

              <h3>1o. What modules should you import in Angular to use [(ngModel)] and reactive forms?</h3>
              FormsModule and Reactiveforms Module.
              <br />

              <h3>11. How many Change Detectors can there be in the whole application?</h3>
              Each component has its own ChangeDetector. All Change Detectors are inherited from
              AbstractChangeDetector.
              <br />

              <h3>12. What is zone</h3>
              NgZone is a wrapper around Zone.js.
              <br />
              Zone. js is a api or set of programs which is used by angular to update the application view when any
              change occurred.
              <br />
              <b>Ex.: </b>Events, XMLHttpRequests and Timers(setTimeout(), setInterval()) etc.
              <br />

              <h3>13. How do you update the view if your data model is updated outside the ‘Zone’?</h3>
              <ul>
                <li>Using the <b>ApplicationRef.prototype.tick</b> method, which will run change detection on the entire component tree.</li>
                <li>Using <b>NgZone.prototype.run</b> method, which will also run change detection on the entire tree. The run method under the hood itself calls tick, and the parameter takes the function you want to perform before tick.</li>
                <li>Using the <b>ChangeDetectorRef.prototype.detectChanges</b> method, which will launch change detection on the current component and its children.</li>
              </ul>
              <br />

              <h3>14. What are Core and Shared modules for?</h3>
              <ul>
                <li>A Shared module serves as a generic module for all modules, components, directives, pipes, etc., which are not required to be in a single copy for the application but need to be imported into many different modules.</li>
                <li>A Core module is a place to store services that you need to have in the form of singleton for the entire application (for example, a user authorization service with data storage about it).</li>
              </ul>
              <br />

              <h3>15. What are the advantages with AOT</h3>
              <ul>
                <li><b>Faster rendering: </b>The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.</li>
                <li><b>Fewer asynchronous requests: </b>It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.</li>
                <li><b>Smaller Angular framework download size: </b>Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.</li>
                <li><b>Detect template errors earlie: </b>Detects and reports template binding errors during the build step itself</li>
                <li><b>Better security: </b>It compiles HTML templates and components into JavaScript. So there won't be any injection attacks.</li>
              </ul>
              <br />

              <h3>16. What are the three phases of AOT</h3>
              The AOT compiler works in three phases
              <ul>
                <li><b>Code Analysis: </b>The TypeScript compiler and AOT collector create a representation of the source.</li>
                <li><b>Code generation: </b>It handles the interpretation as well as places restrictions on what it interprets.</li>
                <li><b>Validation: </b>Angular template compiler uses the TypeScript compiler to validate the binding expressions in templates.</li>
              </ul>
              <br />
              <b>N: </b>Arrow functions or lambda functions can’t be used to assign values to the decorator properties.
              <br />
              <br />

              If true, the AOT compiler will ignore this directive/ component and will therefore always be compiled
              using JIT.
              <br />
              <b>jit: true</b>
              <br />

              <h3>17. Ivy Compiler</h3>
              <ul>
                <li>Ivy is now default compiler and runtime. Ivy improves budle size, allows for better debugging, adds improves type checking, faster testing, enables the AOT compiler on by default, and improves CSS class and style binding.</li>
                <li>Reach better build times.</li>
                <li>reach better build sizes (with a generated code more compatible with tree-shaking).</li>
                <li>Unlock new potential features (metaprogramming or higher order components, lazy loading of component instead of modules).</li>
              </ul>
              <br />

              <h3>18. What is the use of Bazel in Angular 8.</h3>
              <ul>
                <li>It provides a platform to make back-end and front-end services with the same tool.</li>
                <li>It allows us to build CLI applications quickly and easily.</li>
                <li>The entirety of the Angular framework is built on Bazel and it allows us to divide an
                  application into various build units which are defined at the NgModule level.</li>
                <li>It supports customization and also facilitates us to draw graphs. We can use these graphs to
                  easily identify the essential information.</li>
              </ul>
              <br />

              <h3>19. Why we should use Bazel for Angular builds</h3>
              <ul>
                <li>The initial build time with Bazel will be comparable
                  to the traditional JavaScript tooling. the difference is that the time will not grow exponentially when our
                  application’s size increases. With Bazel most of the time the build time will stay constant.</li>
                <li>Bazel rebuilds only the packages which have changed and nothing else.</li>
              </ul>

              <h3>20. There are two kinds of compilation that Angular provides</h3>
              <ul>
                <li><b>JIT compilation: </b>Just-in-Time is a type of compilation that compiles your app in the
                  browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally).</li>
                <ul>
                  <li>A JIT compiler runs after the program has started and compiles the code (usually bytecode or some kind of VM instructions).
                    A JIT has access to dynamic runtime information whereas a standard compiler doesn't and can make better optimizations like
                    inlining functions that are used frequently.</li>
                  <li>This is in contrast to a traditional compiler that compiles all the code to machine language before the program is first run.</li>
                </ul>
                <br />
                <li><b>AOT(Ahead-of-Time) compilation: </b>Ahead-of-Time is a type of compilation that compiles your
                  app at build time. For AOT compilation, include the --aot option with the ng build or ng serve command.</li>
                <ul>
                  <li>The Angular AOT compiler pre-compiles application components and their templates during the
                    build process. Apps compiled with AOT launch faster for several reasons.</li>
                  <li>Application components execute immediately, without client-side compilation.</li>
                  <li>Templates are embedded as code within their components so there is no client-side request for
                    template files.</li>
                  <li>You don't download the Angular compiler, which is pretty big on its own.</li>
                  <li>The compiler discards unused Angular directives that a tree-shaking tool can then exclude.</li>
                </ul>
              </ul>
              <br />

              <h3>21. What is the use of Codelyzer</h3>
              <ul>
                <li>All enterprise applications follows a set of coding conventions and guidelines to maintain code
                  in better way. Codelyzer is a tool to run and check whether the pre-defined coding guidelines has
                  been followed or not.
                  <br />
                  Codelyzer does only static code analysis for angular and typescript project.</li>
                <br />
                <li>Codelyzer can be run via angular cli or npm directly.</li>
              </ul>
              <br />

              <h3>22. Why should ngOnInit be used, if we already have a constructor</h3>
              <ul>
                <li>The Constructor is a default method of the class that is executed when the class is instantiated
                  and ensures proper initialization of fields in the class and its subclasses.</li>
                <li>ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the
                  component.</li>
                <li>We use ngOnInit for all the initialization/ declaration in the constructor. The constructor should only be used to
                  initialize class members but shouldn't do actual "work". So you should use constructor() to setup Dependency Injection
                  and not much else. ngOnInit() is better place to "start" - it's where/ when components' bindings are resolved.</li>
              </ul>
              <br />

              <h3>23. Are there any pros/ cons in using local storage to replace cookie functionality.</h3>
              Cookies and local storage serve different purposes.
              <ul>
                <li>Cookies are primarily for reading server-side,</li>
                <li>Local Storage can only be read by the client-side.</li>
                <li>If data needs client, then by all means switch to local storage. You're wasting bandwidth by
                  sending all the data in each HTTP header.</li>
                <li>If data needs server, local storage is  okay if the server only needs
                  a small subset of the total data for each request.</li>
              </ul>
              <br />

              <h3>23. Explain the purpose of Service Workers in Angular</h3>
              <ul>
                <li>A service worker is a script that runs in the web browser and manages caching for an application.</li>
                <li>Service workers work as a network proxy. They intercept all outgoing HTTP requests made by
                  the application and can choose how to respond to them.</li>
                <li>The service worker is preserved after the user closes the tab. The next time that browser loads
                  the application, the service worker loads first, and can intercept every request for resources to
                  load the application. Using a service worker to reduce dependency on the network.</li>
              </ul>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(AngularDir2));
