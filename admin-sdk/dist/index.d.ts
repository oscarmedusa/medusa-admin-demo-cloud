import { InjectionZone } from '@medusajs/admin-shared';
import { ComponentType } from 'react';

type WidgetConfig = {
    zone: InjectionZone | InjectionZone[];
};
type RouteConfig = {
    label?: string;
    icon?: ComponentType;
};

/**
 * Define a widget configuration.
 *
 * @param config The widget configuration.
 * @returns The widget configuration.
 */
declare function defineWidgetConfig(config: WidgetConfig): WidgetConfig;
/**
 * Define a route configuration.
 *
 * @param config The route configuration.
 * @returns The route configuration.
 */
declare function defineRouteConfig(config: RouteConfig): RouteConfig;

export { type RouteConfig, type WidgetConfig, defineRouteConfig, defineWidgetConfig };
