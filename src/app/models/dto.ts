export class SavedList {
  constructor(
    public name: string,
    public date?: Date,
    public description?: string,
    public attched?: Array<string>,
    public entries?: number
  ) {}
}
