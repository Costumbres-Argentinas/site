export type ForbiddenErrorShape = Error & {
  status: 403;
  code: "FORBIDDEN";
};

export function ForbiddenError(message = "Forbidden"): ForbiddenErrorShape {
  const error = new Error(message) as ForbiddenErrorShape;
  error.name = "ForbiddenError";
  error.status = 403;
  error.code = "FORBIDDEN";
  return error;
}
