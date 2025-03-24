import { Tags } from 'aws-cdk-lib';
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

const tags = Tags.of(backend.stack);
// add a new tag
tags.add('division', 'field');
tags.add('org', 'sa');
tags.add('keep-util', '2025-12-31');
tags.add('team', 'amer-strat');
tags.add('project', 'sadosky');
