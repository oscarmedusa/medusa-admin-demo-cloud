import type { IDmlEntity, Infer } from "@medusajs/types";
import { DmlEntity } from "../entity";
/**
 * Factory function to create the mikro orm entity builder. The return
 * value is a function that can be used to convert DML entities
 * to Mikro ORM entities.
 */
export declare function createMikrORMEntity(): <T extends DmlEntity<any, any>>(entity: T) => Infer<T>;
/**
 * Takes a DML entity and returns a Mikro ORM entity otherwise
 * return the input idempotently
 * @param entity
 */
export declare const toMikroORMEntity: <T>(entity: T) => T extends IDmlEntity<any, any> ? Infer<T> : T;
/**
 * Takes any DmlEntity or mikro orm entities and return mikro orm entities only.
 * This action is idempotent if non of the entities are DmlEntity
 * @param entities
 */
export declare const toMikroOrmEntities: <T extends any[]>(entities: T) => { [K in keyof T]: T[K] extends IDmlEntity<any, any> ? Infer<T[K]> : T[K]; };
//# sourceMappingURL=create-mikro-orm-entity.d.ts.map