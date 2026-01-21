import { Controller } from 'tsoa';
import { Prefab } from '../directoryReader';
export default class PrefabsController extends Controller {
    getPrefabs(): Promise<Prefab[]>;
}
