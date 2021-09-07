interface OpConfig {
  INITIAL_CONTEXT?: OpContext;
  VERSION?: string;
  BASE?: string;
  ENV?: {} | {}[];
  DEFAULT_HEADERS?: {
    ALL?: OpRequestHeaders;
    GET?: OpRequestHeaders;
    HEAD?: OpRequestHeaders;
    POST?: OpRequestHeaders;
    PUT?: OpRequestHeaders;
    DELETE?: OpRequestHeaders;
    PATCH?: OpRequestHeaders;
    OPTIONS?: OpRequestHeaders;
    CONNECT?: OpRequestHeaders;
    TRACE?: OpRequestHeaders;
  };
  DEFAULT_DELAY?: Number;
}

interface OpContext {
  [id: string]: any;
}

interface OpRequestBase {
  CHECK?: string;
  HEADERS?: OpRequestHeaders;
  DELAY?: Number;
  SET?: string;
}

interface OpRequestGET extends OpRequestBase {
  GET: string;
}

interface OpRequestHEAD extends OpRequestBase {
  HEAD: string;
}

interface OpRequestPOST extends OpRequestBase {
  POST: string;
  BODY?: {} | string;
}

interface OpRequestPUT extends OpRequestBase {
  PUT: string;
  BODY?: {} | string;
}

interface OpRequestDELETE extends OpRequestBase {
  DELETE: string;
}

interface OpRequestPATCH extends OpRequestBase {
  PATCH: string;
  BODY?: {} | string;
}

interface OpRequestOPTIONS extends OpRequestBase {
  OPTIONS: string;
}

interface OpRequestCONNECT extends OpRequestBase {
  CONNECT: string;
}

interface OpRequestTRACE extends OpRequestBase {
  TRACE: string;
}

interface OpRequestMethodData {
  method: OpRequestMethod;
  path: string;
  body?: string;
}

interface OpRequestHeaders {
  [id: string]: string;
}

interface OpResponseHeaders {
  [id: string]: string;
}

type OpRequest =
  | OpRequestGET
  | OpRequestHEAD
  | OpRequestPOST
  | OpRequestPUT
  | OpRequestDELETE
  | OpRequestPATCH
  | OpRequestOPTIONS
  | OpRequestCONNECT
  | OpRequestTRACE;

declare type OpRequestHandler = (url: string, params: any) => Promise<any>;

declare type OpRequestMethod =
  | "POST"
  | "PUT"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "PATCH"
  | "TRACE"
  | "GET";

declare type OpContextReplacer = (key: string, value: any) => any;
