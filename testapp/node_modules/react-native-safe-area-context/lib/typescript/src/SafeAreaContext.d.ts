import * as React from 'react';
import { EdgeInsets, Metrics, Rect } from './SafeArea.types';
export declare const SafeAreaInsetsContext: React.Context<EdgeInsets | null>;
export declare const SafeAreaFrameContext: React.Context<Rect | null>;
export interface SafeAreaViewProps {
    children?: React.ReactNode;
    initialMetrics?: Metrics | null;
    /**
     * @deprecated
     */
    initialSafeAreaInsets?: EdgeInsets | null;
}
export declare function SafeAreaProvider({ children, initialMetrics, initialSafeAreaInsets, }: SafeAreaViewProps): JSX.Element;
export declare function useSafeAreaInsets(): EdgeInsets;
export declare function useSafeAreaFrame(): Rect;
export declare function withSafeAreaInsets<T>(WrappedComponent: React.ComponentType<T>): (props: T) => JSX.Element;
/**
 * @deprecated
 */
export declare function useSafeArea(): EdgeInsets;
/**
 * @deprecated
 */
export declare const SafeAreaConsumer: React.Consumer<EdgeInsets | null>;
/**
 * @deprecated
 */
export declare const SafeAreaContext: React.Context<EdgeInsets | null>;
