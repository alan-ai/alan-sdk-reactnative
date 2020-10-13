/// <reference types="react" />
import { StackNavigationState } from '@react-navigation/native';
import { NativeStackNavigationHelpers, NativeStackDescriptorMap } from '../types';
declare type Props = {
    state: StackNavigationState;
    navigation: NativeStackNavigationHelpers;
    descriptors: NativeStackDescriptorMap;
};
export default function NativeStackView({ state, navigation, descriptors, }: Props): JSX.Element;
export {};
