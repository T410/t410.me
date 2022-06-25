// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Heading, Project } = initSchema(schema);

export {
  Heading,
  Project
};