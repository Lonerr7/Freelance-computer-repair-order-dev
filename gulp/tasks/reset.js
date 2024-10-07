import { path } from '../config/path.js';
import { deleteAsync } from 'del';
export const reset = async () => await deleteAsync(path.clean);
