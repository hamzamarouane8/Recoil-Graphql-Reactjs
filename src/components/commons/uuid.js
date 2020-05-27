import { v4 as uuidv4 } from 'uuid';

export default ({
  create: () => uuidv4(),
  v4: () => uuidv4(),
});
