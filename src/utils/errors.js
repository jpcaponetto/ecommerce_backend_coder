export class Exceptions extends Error {
  constructor(msg, code) {
    super(msg);
    this.code = code;
  }
}

export class ErrorRequest extends Exceptions {
  constructor(msg) {
    super(msg, 400);
  }
}
export class ErrorUnauthorized extends Exceptions {
  constructor(msg) {
    super(msg, 401);
  }
}
export class ErrorForbidden extends Exceptions {
  constructor(msg) {
    super(msg, 403);
  }
}
export class ErrorNotFound extends Exceptions {
  constructor(msg) {
    super(msg, 404);
  }
}
