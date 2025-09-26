import { Body } from "../core/index.js";
import { OutgoingRequestDelegate, RequestOptions } from "../core/messages/outgoing-request.js";

/**
 * Options for {@link Session.info}.
 * @public
 */
export interface SessionInfoOptions {
  /** See `core` API. */
  requestDelegate?: OutgoingRequestDelegate;
  /** See `core` API. */
  requestOptions?: RequestOptions;
  /** Body of the INFO request. */
  body?: Body;
}
