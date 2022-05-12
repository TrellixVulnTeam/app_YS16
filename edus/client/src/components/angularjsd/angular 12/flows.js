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


const counters = `
angular [routerlink]: <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
  link to user component
</a>


ng router link: <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
  link to user component
</a>
`.trim();

const addcomponents = `
router.navigateByUrl("/team/33/user/11");

// Navigate without updating the URL
router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
`.trim();

const routerLink = `
<my-tile [routerLink]="['/secondPage', item.id, 'item-list']" *ngFor="let item of listaOfItem" [item]="item"></my-tile>
`.trim();


class NgrxCounter extends Component {
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
              <h3>1. What are new features realise Angular 8</h3>
              <ul>
                <li><b>Differential loading: </b>Differential loading is a new feature that lets you use version 8 of the Angular CLI to create two different production bundles of your
                  app. Attributes on the <b>script</b> tag in your index.html file let the browser request the most appropriate bundle; modern browsers will request a bundle that uses
                  ES2015 JavaScript syntax and will be significantly smaller than the legacy bundle that uses ES5 syntax to maintain support for older browsers. Differential loading is
                  enabled by default for new apps created with version 8 of the CLI, but you can easily enable this feature on your existing apps by upgrading to Angular 8, adding a
                  browserlist configuration file, and setting the “target” option in your tsconfig.json file to “es2015”. The result? Your users with modern browsers get a smaller
                  bundle that loads faster (and puts a bigger smile on their face).</li>
                <br />
                <li><b>New lazy loading syntax: </b>Lazy loading feature modules has been a best practice in Angular for quite a while. That hasn’t changed in version 8, but in place of
                  the proprietary syntax to enable lazy loading, the framework has adopted the more common dynamic import syntax used widely in client-side web development. The new
                  syntax relies less on parsing class names from strings and enables editors and IDEs to check that you’re importing the correct items.</li>
                <br />
                <li><b>Create web workers with the CLI: </b>Angular 8 makes it easier than ever to use web workers to handle CPU-intensive tasks in your apps. Version 8 of the Angular
                  CLI includes a new schematic used with the ng generate command to create and update the necessary files in your project to add a new web worker. The new and updated
                  files include a basic template for your new web worker so you can worry less about boilerplate syntax and more quickly focus on writing the code you want to run on a
                  background thread.</li>
                <br />
                <li><b>Builder and workspace APIs: </b>Although they’re probably not a feature you’ll use on every project, Angular 8 also includes new APIs that allow you to create
                  custom build and deployment commands using hooks into the familiar ng build, ng test, and ng run commands. There are also new APIs that allow you to open and work
                  with the workspace defined in your angular.json file, which should reduce the amount of manual manipulation required to perfectly configure your project.</li>
                <br />
                <li><b>A new guide for old features: </b>The Angular team included a new deprecation guide with Angular 8 to make it easier for developers to keep track of deprecated
                  features and APIs. The creation of this guide should not be misinterpreted as a warning that deprecations will be sprung on the developer community with little time
                  for remediation. In fact, the Angular team is committed to supporting features for two major releases after officially being deprecated. The resulting stability in
                  the framework coupled with the helpful deprecation guide should smooth the transition away from those older features.</li>
              </ul>
              <br />

              <h3>2. Can we create custom Pipes in Angular 8.</h3>
              <ol>
                <li>Create a Pipe Class and decorate it with the decorator @Pipe.</li>
                <li>Supply a name property to be used as template code name.</li>
                <li>Register your Pipe in the module under declarations.</li>
                <li>Finally, implement PipeTransform and write transformation logic.</li>
              </ol>
              <br />

              <h3>3. What is the use of router-outlet in angular 8.</h3>
              <ul>
                <li>The router-outlet is a directive that's available from the @angular/router package and is used by the router to mark where in a template, a matched component
                  should be inserted.</li>
                <br />
                <li>Thanks to the router outlet, your app will have multiple views/pages and the app template acts like a shell of your application. Any element, you add to the shell
                  will be rendered in each view, only the part marked by the router outlet will be changed between views.</li>
              </ul>
              <br />

              <h3>4. Can I use multiple router outlets in Angular 8?</h3>
              Yes! We can use multiple router-outlets in same template by configuring our routers and simply add the router-outlet name.
              <br />

              <h3>5. How do you make a router link in HTML?</h3>
              Linking Routes in HTML.
              <ol>
                <li>To add links to one of the routes, use the routerLink directive in HTML. This directive accepts an array.</li>
                <li>If you use the routerLink directive without the brackets, you'll need to pass the route as a string.</li>
                <li>The <b>router-outlet</b> <b>/router-outlet</b> acts as a placeholder for components.</li>
              </ol>
              <div style={titles}>
                <PrismCode
                  code={counters}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>6. Difference between navigate and navigatebyurl in angular.</h3>
              navigateByUrl is similar to changing the location bar directly–we are providing the “whole” new URL. Whereas router. navigate creates a new URL by applying an array
              of passed-in commands, a patch, to the current URL.
              <div style={titles}>
                <PrismCode
                  code={addcomponents}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>7. How do you detect route change in Angular?</h3>
              <ul>
                <li>Import Router, Event, NavigationStart, NavigationEnd, NavigationError from ‘@angular/router’.</li>
                <li>And inject router in the constructor.</li>
                <li>Subscribe to the NavigationStart, NavigationEnd, NavigationError events of the router.</li>
              </ul>
              <br />

              <h3>8. What is this router navigate?</h3>
              navigate method, you must supply the ActivatedRoute to give the router knowledge of where you are in the current route tree. After the link parameters array, add an
              object with a relativeTo property set to the ActivatedRoute . The router then calculates the target URL based on the active route’s location.
              <br />

              <h3>9. When to use Route class in case of navigation?</h3>
              Using Route class in case of navigation to happen on a triggered event. Before performing the above two operations, there is a need to register this component in the
              Route class’s instance which lies inside the app-routing.module.ts file. This will be further used to navigate from child to parent.
              <br />

              <h3>10. Is there a way to navigate between routes in angular?</h3>
              You can also navigate imperatively by using the code. This is done using the router service, which provides navigate and navigatebyUrl methods via which you can
              perform route changes. Use this method, if you want to Navigate to a route using the link parameters array.
              <br />

              <h3>11. How to specify which route to navigate to in NavLink?</h3>
              To specify which route to navigate to, use the to prop and pass the path name. The activeClassName prop will add an active class to the link if it’s currently active.
              On the browser, the NavLink component is rendered as an tag with an href attribute value that was passed in the to prop.
              <br />

              <h3>12. When to use absolute path in navigate method?</h3>
              Navigate Method always uses the absolute path unless you provide a starting point. navigate.navigateByUrl Use this method if you want to navigate to a URL by using
              the absolute path. The first argument is a string containing the complete URL.
              <br />

              <h3>13. What is the use of eventemitter in angular.</h3>
              Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something. The typical use case would be that there's multiple blocks of
              code in your application that may need to do something when an event happens.
              <br />

              <h3>14. What is the use of annotation @ViewChild?</h3>
              The @ViewChild decorator allows us to inject into a component class references to elements used inside its template, that's what we should use it for. Using
              @ViewChild we can easily inject components, directives or plain DOM elements.
              <br />

              <h3>15. Differentiale between obsevable and promise in angular.</h3>
              <ul>
                <li>Promises deal with one asynchronous event at a time, while observables handle a sequence of asynchronous events over a period of time.</li>
                <li>Observables are lazy: they're not executed until we subscribe to them using the subscribe() method.</li>
                <li>Promises are not lazy: execute immediately after creation.</li>
              </ul>
              <br />

              <h3>16. What is the use of template in angular.</h3>
              A template is a form of HTML that tells Angular how to render the component. Views are typically arranged hierarchically, allowing you to modify or show and
              hide entire UI sections or pages as a unit. The template immediately associated with a component defines that component's host view.
              <br />

              <h3>17. What is the use of shared module in angular.</h3>
              A Shared Module is used to organize a set of commonly used pieces into one module and export them to any module that imports the Share Module. This allows us
              to selectively aggregate the reusable components that we have and re-export them into one consolidated module.
              <br />

              <h3>18. What is provider in angular.</h3>
              Providers are classes that create and manage service objects the first time that Angular needs to resolve a dependency. Providers is used to register the
              classes to an angular module as a service. And then, this service classes can be used by other components during the itself creation phase in the module.
              <br />

              <h3>19. How angular internally works.</h3>
              <ul>
                <li>https://medium.com/siam-vit/how-an-angular-app-work-behind-the-scenes-angular-flow-dcc4d1df27bd</li>
                <li>https://www.youtube.com/watch?v=jD44QbL4kHo</li>
              </ul>
              <br />

              <h3>20. What is ng-template in Angular?</h3>
              <ul>
                <li>ng-template is an Angular element that is used for rendering HTML in a template. However, it is not rendered directly on DOM. If you include an ng-template tag
                  to a template, the tag and the content inside it will be replaced by comment upon render.</li>
                <br />
                <li>If you add a ng-template tag to your template, it and everything inside it will be replaced by a comment. It might seem a bit useless, but it is rarely used
                  alone. It can be for example used to define the else case of an *ngIf.</li>
              </ul>

              <br />

              <h3>21. What is difference between package.json and package-lock.json.</h3>
              <ul>
                <li><b>package.json: </b>Records important metadata about the project.</li>
                <li><b>package.lock.json: </b>Allows future devs to install the same dependencies in the project.</li>
              </ul>

              <br />

              <h3>22. How do you handle error in Angular?</h3>
              One traditional way of handling errors in Angular is to provide an ErrorHandler class. This class can be extended to create your own global error handler. This is
              also a useful way to handle all errors that occur, but is mostly useful for tracking error logs.
              <br />

              <h3>23. Pass complex JSON via routerLink.</h3>
              <div style={titles}>
                <PrismCode
                  code={routerLink}
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

export default (withStyles(styles)(NgrxCounter));
