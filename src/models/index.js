// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProjectType = {
  "WEBSITE": "WEBSITE",
  "SEO": "SEO",
  "EMAIL_AUTOMATION": "EMAIL_AUTOMATION"
};

const { UntitledModel } = initSchema(schema);

export {
  UntitledModel,
  ProjectType
};