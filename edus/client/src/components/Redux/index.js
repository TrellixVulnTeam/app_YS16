import React, { Suspense, lazy } from 'react';


const IntroRedux = lazy(() => import('./deep/introRedux'));
const ReduxState = lazy(() => import('./deep/reduxState'));
const CountersRedux = lazy(() => import('./deep/counter'));
const ReduxMethods = lazy(() => import('./deep/reduxMethods'));
const Git = lazy(() => import('./deep/git'));
const Skills = lazy(() => import('./deep/skills'));
const ReactRedux = lazy(() => import('./deep/react_redux'));
const ContctHooks = lazy(() => import('./deep/contactKeeperApi'));
const ExpenseTraMern = lazy(() => import('./deep/expenseTraMern'));
const GitConcepts = lazy(() => import('./deep/gitConcepts'));
const MernRedux = lazy(() => import('./deep/mernRedux'));
const ReduxCurd = lazy(() => import('./deep/reduxCurd'));
const SignUp = lazy(() => import('./deep/signUp'));



const components = {
  ReduxState, ReduxMethods, Git, Skills, IntroRedux, ReactRedux, ExpenseTraMern, ContctHooks, CountersRedux,
  GitConcepts, MernRedux, ReduxCurd, SignUp
};

export { components };