export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong",
  NO_DATA_FOUND = "No data is found",
  CREATE_FAILED = "Create is failed",
  UPDATE_FAILED = "Update is failed",
  NO_MEMBER_NICK = "NO MEMBER WITH THAT MEMBER NICK",
  USED_NICK_PHONE = "YOU ARE INSERTING ALREADY USED NICK OR PHONE",
  WRONG_PASSWORD = "WRONG PASSWORD !",
  NOT_AUTHENTICATED = "Your are not authenticated please first log in",
}
class Errors extends Error {
  public code: HttpCode;
  public message: Message;
  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG,
  };
  constructor(statuscode: HttpCode, statusMassage: Message) {
    super();
    (this.code = statuscode), (this.message = statusMassage);
  }
}
export default Errors;
