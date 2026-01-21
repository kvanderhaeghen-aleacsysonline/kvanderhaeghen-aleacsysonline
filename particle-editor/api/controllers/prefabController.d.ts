import { Controller } from 'tsoa';
export default class PrefabsController extends Controller {
    getPrefab(id: string, project: string): Promise<string>;
}
