import { ReducersMapObject, AnyAction, Reducer, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './home';
import mine from './mine';
import profile from './profile';
import history from '@/history';
// 方法2: 先构建 CombinedState 根状态（合并后的状态）
import { CombinedState } from '@/typings/state';

let reducers: ReducersMapObject<CombinedState, AnyAction> = {
  home,
  mine,
  profile,
  router: connectRouter(history)
}
const rootReducer: Reducer<CombinedState, any> = combineReducers<CombinedState>(reducers);

export default rootReducer;

// 方法1: 迭代reducers所有的key  reducers[key]是reducer类型 ReturnType返回此函数类型的返回值类型
/*
export type RootState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}
 */
