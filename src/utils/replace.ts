export type Replace<OriginalType, ReplaceTypes> = Omit<
  OriginalType,
  keyof ReplaceTypes
> &
  ReplaceTypes;
