/**
 * The same as in Java Backend
 */

export enum Categories {
    MENS_CLOTHING = "men's clothing",
    WOMENS_CLOTHING = "women's clothing",
    JEWELERY = "jewelery",
    ELECTRONICS = "electronics"
}

export function getAllEnumStringValues<E extends Record<string, string>>(e: E): string[] {
    return Object.keys(e)
      .map((key) => e[key])
      .filter((value) => typeof value === 'string') as string[];
  }
  