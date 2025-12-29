export const isEmpty = (arr: unknown[] | readonly unknown[]) => arr.length === 0
export const removeExtension = (value: string) => value.replace(/\.[^/.]+$/, '')
