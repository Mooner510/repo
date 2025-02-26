import React from "react";
import { PreviewType, millsecondToDate } from ".";

export const Certificate = ({
  element_id,
  name,
  issuing_institution,
  date,
}: PreviewType["certificate_list"][0]) => {
  return (
    <>
      <div className="bg-gray50 rounded-md pl-5 pt-3 pb-3 pr-5">
        <div className="flex justify-between">
          <h4 className="text-body5">{name}</h4>
          <div className="flex gap-2 items-center">
            <p className="text-gray400 text-body7">{issuing_institution}</p>
            <hr className="bg-gray300 h-[12px] border-none w-[1px]" />
            <p className="text-gray400 text-body7">{millsecondToDate(date)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
