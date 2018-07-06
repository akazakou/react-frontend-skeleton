/**
 * Description on list or entity status
 */
import { Guid, Scalar } from './types'

interface StatusPayload {
  /**
   * Boolean flag that indicates the list are updating
   */
  loading?: boolean

  /**
   * Error description for failure operation
   */
  error?: Error | null
}

interface Status extends StatusPayload {
  /**
   * Boolean flag that indicates the list are updating
   */
  loading: boolean

  /**
   * Error description for failure operation
   */
  error: Error | null
}

/**
 * Metadata description for list or entity
 */
interface Metadata {
  [key: string]: any
}

interface EntityData {
  /**
   * Entity ID
   */
  readonly id: Guid

  /**
   * Any other options
   */
  [key: string]: any
}

/**
 * Basic class that indicates entity interface
 */
interface Entity {
  /**
   * Status entity description
   */
  status: Status

  /**
   * Metadata entity description
   */
  metadata: Metadata

  /**
   * Value of entity
   */
  value: EntityData
}

/**
 * Basic class that describe List value for entites
 */
interface List {
  /**
   * Status list description
   */
  status: Status

  /**
   * Metadata list description
   */
  metadata: Metadata

  /**
   * Entities description in list
   */
  list: Entity[]
}

/**
 * Payload data description
 */
type Payload = object | Scalar | Array<object | Scalar>

export {
  Status,
  StatusPayload,
  Metadata,
  Entity,
  List,
  EntityData,
  Payload
}
