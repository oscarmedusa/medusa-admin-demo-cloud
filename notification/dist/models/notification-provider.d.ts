export declare const NotificationProvider: import("@medusajs/framework/utils").DmlEntity<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    handle: import("@medusajs/framework/utils").TextProperty;
    name: import("@medusajs/framework/utils").TextProperty;
    is_enabled: import("@medusajs/framework/utils").BooleanProperty;
    channels: import("@medusajs/framework/utils").ArrayProperty;
    notifications: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        to: import("@medusajs/framework/utils").TextProperty;
        channel: import("@medusajs/framework/utils").TextProperty;
        template: import("@medusajs/framework/utils").TextProperty;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        trigger_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        receiver_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        original_notification_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        idempotency_key: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        external_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        status: import("@medusajs/framework/utils").EnumProperty<typeof import("@medusajs/framework/utils").NotificationStatus>;
        provider: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">>>;
    } & {
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        to: import("@medusajs/framework/utils").TextProperty;
        channel: import("@medusajs/framework/utils").TextProperty;
        template: import("@medusajs/framework/utils").TextProperty;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        trigger_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        receiver_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        original_notification_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        idempotency_key: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        external_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        status: import("@medusajs/framework/utils").EnumProperty<typeof import("@medusajs/framework/utils").NotificationStatus>;
        provider: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">>>;
    } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notification">>;
} & {
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    handle: import("@medusajs/framework/utils").TextProperty;
    name: import("@medusajs/framework/utils").TextProperty;
    is_enabled: import("@medusajs/framework/utils").BooleanProperty;
    channels: import("@medusajs/framework/utils").ArrayProperty;
    notifications: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        to: import("@medusajs/framework/utils").TextProperty;
        channel: import("@medusajs/framework/utils").TextProperty;
        template: import("@medusajs/framework/utils").TextProperty;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        trigger_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        receiver_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        original_notification_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        idempotency_key: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        external_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        status: import("@medusajs/framework/utils").EnumProperty<typeof import("@medusajs/framework/utils").NotificationStatus>;
        provider: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">>>;
    } & {
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        to: import("@medusajs/framework/utils").TextProperty;
        channel: import("@medusajs/framework/utils").TextProperty;
        template: import("@medusajs/framework/utils").TextProperty;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        trigger_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        resource_type: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        receiver_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        original_notification_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        idempotency_key: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        external_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        status: import("@medusajs/framework/utils").EnumProperty<typeof import("@medusajs/framework/utils").NotificationStatus>;
        provider: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            handle: import("@medusajs/framework/utils").TextProperty;
            name: import("@medusajs/framework/utils").TextProperty;
            is_enabled: import("@medusajs/framework/utils").BooleanProperty;
            channels: import("@medusajs/framework/utils").ArrayProperty;
            notifications: import("@medusajs/framework/utils").HasMany<any>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">>>;
    } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notification">>;
} & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "notificationProvider">;
//# sourceMappingURL=notification-provider.d.ts.map