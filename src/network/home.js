/* import { request } from "./request";
export function goods(type, page) {
  return request(type, {
    page: page
  });
}
export function swiper() {
  return request("/swiper");
}
 */

import { request } from "./request";
export function goods(type, page) {
  return request(type, {
    page: page,
  });
}
