export type ISuccessResponse<T = any> = {
    total_stock?: number,
    data: T,
    status: string,
    message: string
    pagecount?: number
}

export type IErrorResponse<T = any> = {
    error: T,
    data?: unknown,
    status: string,
    message: string
}
