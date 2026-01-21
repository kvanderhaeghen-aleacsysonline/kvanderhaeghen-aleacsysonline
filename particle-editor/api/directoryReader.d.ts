export interface Prefab {
    project: string;
    prefab: string;
}
export declare function getDirectoryStructure(dir: string, arrayOfFiles: Prefab[]): Prefab[];
export declare function getJsonFile(id: string, project: string): string;
