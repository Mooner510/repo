import { instance } from "..";

export const accessRight = (id: string, access_right: string) => {
  return instance.patch(`/document/library/${id}/${access_right}`, {
    access_right,
  });
};
