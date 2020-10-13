/// <reference types="react" />
import { Route } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '../types';
declare type Props = NativeStackNavigationOptions & {
    route: Route<string>;
};
export default function HeaderConfig(props: Props): JSX.Element;
export {};
