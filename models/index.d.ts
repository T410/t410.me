import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HeadingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Heading {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly route: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Heading, HeadingMetaData>);
  static copyOf(source: Heading, mutator: (draft: MutableModel<Heading, HeadingMetaData>) => MutableModel<Heading, HeadingMetaData> | void): Heading;
}

export declare class Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly source?: string | null;
  readonly demo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}