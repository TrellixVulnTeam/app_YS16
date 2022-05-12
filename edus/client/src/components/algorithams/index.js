import React, { Suspense, lazy } from 'react';

const IntroAlgo = lazy(() => import('./deepAlgorithams/introAlgo'));
const Graph = lazy(() => import('./deepAlgorithams/graph'));
const LinkedList = lazy(() => import('./deepAlgorithams/linkedList'));
const Queue = lazy(() => import('./deepAlgorithams/queue'));
const Stack = lazy(() => import('./deepAlgorithams/stack'));
const Sort = lazy(() => import('./deepAlgorithams/sort'));
const Search = lazy(() => import('./deepAlgorithams/searchAlgo'));
const Heap = lazy(() => import('./deepAlgorithams/heap'));
const TopTech = lazy(() => import('./deepAlgorithams/topTech'));


const components = {
  Graph, LinkedList, Queue, IntroAlgo, Stack, Sort, Search, Heap, TopTech
};

export { components };