import React, { Suspense, lazy } from 'react';

const IntroNodeJs = lazy(() => import('./nodeDeep/introNodejs'));
const NodeJsCodes = lazy(() => import('./nodeDeep/codes'));
const ServerSide = lazy(() => import('./nodeDeep/serverSide'));
const Tur1 = lazy(() => import('./nodeDeep/tut_1'));
const Tut2 = lazy(() => import('./nodeDeep/tut_2'));
const Tut6 = lazy(() => import('./nodeDeep/tut_6'));
const BufferNode = lazy(() => import('./nodeDeep/buffers'));
const ChildsPros = lazy(() => import('./nodeDeep/childs'));
const EvtNode = lazy(() => import('./nodeDeep/evtNode'));
const FileSys = lazy(() => import('./nodeDeep/filSystems'));
const Udemy = lazy(() => import('./nodeDeep/udemy'));
const Ejs = lazy(() => import('./nodeDeep/ejsNode'));
const SignUps = lazy(() => import('./nodeDeep/authentications'));


const components = {
  NodeJsCodes, ServerSide, IntroNodeJs, Tut2, Tut6,
  BufferNode, ChildsPros, EvtNode, FileSys, Tur1, Udemy, Ejs, SignUps,
};

export { components };

