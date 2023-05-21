import Link from "next/link";
import { Dropdown } from "@packages/ui";
import { Library } from "@/apis/library";
import { useState } from "react";
import { useMutation } from "react-query";
import { accessRight } from "@/apis/library/access";
import { toast } from "react-toastify";

const krStatus = {
  공개: "PUBLIC",
  학생만: "STUDENT_ONLY",
  개인: "PRIVATE",
} as const;

const enStatus = {
  PUBLIC: "공개",
  STUDENT_ONLY: "학생만",
  PRIVATE: "개인",
} as const;

export const LibraryCard = ({
  id,
  access_right,
  year,
  grade,
  generation,
  document_url,
}: Library) => {
  const [status, setStatus] = useState<keyof typeof krStatus>(
    enStatus[access_right]
  );

  const { mutate } = useMutation(
    "asgagahdasgarw",
    (body: keyof typeof enStatus) => accessRight(id, body)
  );

  return (
    <Link href={`/public/${id}`}>
      <article className="flex w-[1120px] h-20 items-center bg-gray50 rounded-lg">
        <hr className="h-full block bg-gray300 border-none rounded-tl-lg rounded-bl-lg w-2" />
        <div className="text-body4 ml-9 w-[655px]">
          {year} {grade}학년 {generation}기
        </div>
        <Dropdown
          placeholder="공개"
          lists={["공개", "학생만", "개인"]}
          kind="contained"
          className="w-[150px]"
          value={status}
          onClick={({ keyword }) => {
            setStatus(keyword);
            mutate(krStatus[keyword]);
          }}
        />
        {document_url && (
          <div
            className="text-body4 ml-20 text-gray300"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard
                .writeText(document_url)
                .then(() =>
                  toast("복사됬습니다.", { type: "success", autoClose: 500 })
                );
            }}
          >
            링크 복사
          </div>
        )}
      </article>
    </Link>
  );
};
