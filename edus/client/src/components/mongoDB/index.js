import React, { Suspense, lazy } from 'react';


const MongoCurd = lazy(() => import('./deepMongodb/mongoCurd'));
const MysqlCurd = lazy(() => import('./deepMongodb/mysqlCurd'));
const GridFs = lazy(() => import('./deepMongodb/gridFs'));
const CurdOp = lazy(() => import('./deepMongodb/curdOp'));
const BulkWright = lazy(() => import('./deepMongodb/bulkRight'));
const IntroMD = lazy(() => import('./deepMongodb/infoMD'));
const Intro = lazy(() => import('./deepMongodb/intro'));
const MongodbMethods = lazy(() => import('./deepMongodb/mongodbMethods'));
const Mysql = lazy(() => import('./deepMongodb/mySql.js'));
const PostgresSQL = lazy(() => import('./deepMongodb/postgressql.js'));


const components = {
  GridFs, IntroMD, Intro, MongodbMethods, CurdOp, BulkWright, MysqlCurd, MongoCurd, Mysql, PostgresSQL
};

export { components };