export enum ApiResponseType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export class ApiResponse {
  static success<T>(data: T) {
    return {
      status: ApiResponseType.SUCCESS,
      data,
      message: null,
    };
  }

  static error(errorMessage: string) {
    return {
      status: ApiResponseType.ERROR,
      data: null,
      message: errorMessage,
    };
  }
}
