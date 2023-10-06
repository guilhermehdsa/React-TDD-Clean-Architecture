export enum HttpStatusCode {
    noContent = 204,
    unauthorized = 401,
    badRequest = 400,
    ok = 200,
    notFound = 404,
    serverError = 500
}

export type HttpResponse = {
    statusCode: number,
    body?: any
}