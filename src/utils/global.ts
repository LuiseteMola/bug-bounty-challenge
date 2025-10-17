export type ResultOrErrorResponse<T, Q = Error> = [T | null, Q | null];

export async function resultOrError<T, Q = Error>(promise: Promise<T>): Promise<ResultOrErrorResponse<T, Q>> {
  try {
    const result: T = await promise;
    return [result, null];
  } catch (error) {
    return [null, error as Q];
  }
}
